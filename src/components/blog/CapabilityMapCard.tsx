import React from "react";
import { CoreCapabilityMapConfig } from "@/types/blog";
import styles from "./CapabilityMapCard.module.css";

interface CapabilityMapCardProps {
  config: CoreCapabilityMapConfig;
}

export function CapabilityMapCard({ config }: CapabilityMapCardProps) {
  return (
    <div className={styles.wrapper} role="region" aria-label={config.title}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>ECOSYSTEM ARCHITECTURE</div>
        <h3 className={styles.title}>{config.title}</h3>
        {config.description && <p className={styles.description}>{config.description}</p>}
      </div>

      <div className={styles.grid}>
        {config.capabilities.map((cap, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardBadge}>{cap.badge || `Pillar 0${index + 1}`}</div>
            <h4 className={styles.cardTitle}>{cap.name}</h4>
            <p className={styles.cardRole}>{cap.role}</p>
            <div className={styles.outcomeBox}>
              <span className={styles.outcomeLabel}>Business Outcome:</span>
              <span>{cap.outcome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
