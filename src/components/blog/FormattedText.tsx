import React from "react";
import Link from "next/link";
import styles from "./FormattedText.module.css";

interface FormattedTextProps {
  text: string;
  className?: string;
}

export function FormattedText({ text, className }: FormattedTextProps) {
  if (!text) return null;

  // Regex to match markdown links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    const beforeText = text.slice(lastIndex, match.index);
    if (beforeText) {
      parts.push(renderFormatting(beforeText, `txt-${lastIndex}`));
    }

    const anchorText = match[1];
    const url = match[2];
    const key = `link-${match.index}`;

    const isInternal = url.startsWith("/") || url.includes("ghlvertex.com");

    if (isInternal) {
      const path = url.replace(/^https?:\/\/(www\.)?ghlvertex\.com/, "");
      parts.push(
        <Link key={key} href={path} className={styles.inlineLink}>
          {anchorText}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          <span>{anchorText}</span>
          <span className={styles.externalIcon} aria-hidden="true">
            ↗
          </span>
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  const remaining = text.slice(lastIndex);
  if (remaining) {
    parts.push(renderFormatting(remaining, `txt-${lastIndex}`));
  }

  return <span className={className}>{parts}</span>;
}

function renderFormatting(raw: string, keyPrefix: string): React.ReactNode {
  const formatRegex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const tokens = raw.split(formatRegex);

  return (
    <React.Fragment key={keyPrefix}>
      {tokens.map((token, i) => {
        if (token.startsWith("**") && token.endsWith("**")) {
          return <strong key={i}>{token.slice(2, -2)}</strong>;
        }
        if (token.startsWith("`") && token.endsWith("`")) {
          return (
            <code key={i} className={styles.inlineCode}>
              {token.slice(1, -1)}
            </code>
          );
        }
        return token;
      })}
    </React.Fragment>
  );
}
