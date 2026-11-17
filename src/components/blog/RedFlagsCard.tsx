import React from "react";
import { RedFlagsConfig } from "@/types/blog";
import styles from "./RedFlagsCard.module.css";

interface RedFlagsCardProps {
  config: RedFlagsConfig;
}

export function RedFlagsCard({ config }: RedFlagsCardProps) {
  return (
    <div className={styles.wrapper} role="region" aria-label={config.title}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>VENDOR WARNING SIGNS</div>
        <h3 className={styles.title}>{config.title}</h3>
        {config.description && <p className={styles.description}>{config.description}</p>}
      </div>

      <div className={styles.flagsGrid}>
        {config.flags.map((flag, index) => (
          <div key={index} className={styles.flagCard}>
            <div className={styles.flagHeader}>
              <span className={styles.flagIcon} aria-hidden="true">
                ⚠️
              </span>
              <h4 className={styles.flagTitle}>{flag.title}</h4>
            </div>
            <p className={styles.flagDesc}>{flag.description}</p>
            <div className={styles.riskTag}>
              <span className={styles.riskLabel}>Operational Risk:</span>
              <span>{flag.risk}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
