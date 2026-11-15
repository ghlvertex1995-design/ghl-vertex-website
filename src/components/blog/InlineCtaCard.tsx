import React from "react";
import Link from "next/link";
import { InlineCtaConfig } from "@/types/blog";
import styles from "./InlineCtaCard.module.css";

interface InlineCtaCardProps {
  config: InlineCtaConfig;
}

export function InlineCtaCard({ config }: InlineCtaCardProps) {
  return (
    <aside className={styles.container} aria-label="Strategy Recommendation">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}>SYSTEM ARCHITECTURE SUPPORT</span>
          <h3 className={styles.headline}>{config.headline}</h3>
          <p className={styles.copy}>{config.copy}</p>
        </div>
        <div className={styles.actionCol}>
          <Link
            href={config.ctaHref}
            target={config.ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={config.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className={styles.ctaButton}
          >
            <span>{config.ctaText}</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
