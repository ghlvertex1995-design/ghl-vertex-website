import React from "react";
import { ProcessWorkflowStep } from "@/types/blog";
import styles from "./WorkflowDiagram.module.css";

interface WorkflowDiagramProps {
  title: string;
  description?: string;
  steps: ProcessWorkflowStep[];
}

export function WorkflowDiagram({ title, description, steps }: WorkflowDiagramProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className={styles.wrapper} role="region" aria-label={title}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>ARCHITECTURE BLUEPRINT</div>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div className={styles.flowContainer}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={styles.stepCard}>
              <div className={styles.stepBadge}>{step.badge || `0${index + 1}`}</div>
              <h4 className={styles.stepLabel}>{step.label}</h4>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={styles.connector} aria-hidden="true">
                <span className={styles.arrowIcon}>→</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
