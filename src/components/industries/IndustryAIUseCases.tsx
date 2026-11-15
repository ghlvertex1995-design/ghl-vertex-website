import React from "react";
import { AIUseCase } from "@/types/industry";
import styles from "./IndustryAIUseCases.module.css";

interface IndustryAIUseCasesProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  safeguardsNote?: string;
  items: AIUseCase[];
}

export function IndustryAIUseCases({
  eyebrow = "AI SYSTEMS & VOICE AGENTS",
  heading,
  subtitle,
  safeguardsNote,
  items,
}: IndustryAIUseCasesProps) {
  return (
    <section id="ai-systems" className={styles.section} aria-labelledby="ai-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="ai-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.aiIcon} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

              <p className={styles.roleText}>{item.role}</p>

              <ul className={styles.capabilitiesList} aria-label={`${item.title} capabilities`}>
                {item.capabilities.map((cap, cIdx) => (
                  <li key={cIdx} className={styles.capabilityItem}>
                    <svg
                      className={styles.checkIcon}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {safeguardsNote && (
          <div className={styles.safeguardsCallout} role="note">
            <svg
              className={styles.shieldIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <strong>Responsible AI &amp; Human-in-the-Loop Safeguards: </strong>
              <span>{safeguardsNote}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
