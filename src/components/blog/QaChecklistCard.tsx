import React from "react";
import { QaChecklistConfig } from "@/types/blog";
import styles from "./QaChecklistCard.module.css";

interface QaChecklistCardProps {
  config: QaChecklistConfig;
}

export function QaChecklistCard({ config }: QaChecklistCardProps) {
  return (
    <div className={styles.wrapper} role="region" aria-label={config.title}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>OPERATIONAL VERIFICATION</div>
        <h3 className={styles.title}>{config.title}</h3>
        {config.description && <p className={styles.description}>{config.description}</p>}
      </div>

      <div className={styles.checklistGrid}>
        {config.items.map((item, index) => (
          <div key={index} className={styles.checkItem}>
            <div className={styles.checkIconWrapper} aria-hidden="true">
              ✓
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemLabel}>{item.label}</h4>
                {item.critical && <span className={styles.criticalBadge}>Critical</span>}
              </div>
              <p className={styles.itemDetail}>{item.detail}</p>
              <div className={styles.standardRow}>
                <span className={styles.standardTag}>Standard:</span>
                <span>{item.standard}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
