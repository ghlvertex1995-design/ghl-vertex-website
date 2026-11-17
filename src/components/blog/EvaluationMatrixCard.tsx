import React from "react";
import { EvaluationMatrixConfig } from "@/types/blog";
import styles from "./EvaluationMatrixCard.module.css";

interface EvaluationMatrixCardProps {
  config: EvaluationMatrixConfig;
}

export function EvaluationMatrixCard({ config }: EvaluationMatrixCardProps) {
  return (
    <div className={styles.wrapper} role="region" aria-label={config.title}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>BUYER EVALUATION MATRIX</div>
        <h3 className={styles.title}>{config.title}</h3>
        {config.description && <p className={styles.description}>{config.description}</p>}
      </div>

      <div className={styles.matrixGrid}>
        {config.rows.map((row, index) => (
          <div key={index} className={styles.matrixRow}>
            {/* Column 1: Implementation Area */}
            <div className={styles.areaCol}>
              <span className={styles.areaBadge}>Area 0{index + 1}</span>
              <h4 className={styles.areaName}>{row.area}</h4>
            </div>

            {/* Column 2: What Good Setup Should Include */}
            <div className={styles.includedCol}>
              <div className={`${styles.colHeader} ${styles.includedHeader}`}>
                <span aria-hidden="true">✓</span> Standard Deliverable
              </div>
              <p className={styles.colText}>{row.included}</p>
            </div>

            {/* Column 3: What to Ask the Provider */}
            <div className={styles.questionCol}>
              <div className={`${styles.colHeader} ${styles.questionHeader}`}>
                <span aria-hidden="true">?</span> Key Question to Ask
              </div>
              <p className={styles.colText}>
                <em>&ldquo;{row.askProvider}&rdquo;</em>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
