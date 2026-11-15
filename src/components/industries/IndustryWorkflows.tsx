import React from "react";
import { AutomationWorkflow } from "@/types/industry";
import styles from "./IndustryWorkflows.module.css";

interface IndustryWorkflowsProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  items: AutomationWorkflow[];
}

export function IndustryWorkflows({
  eyebrow = "AUTOMATION ARCHITECTURE",
  heading,
  subtitle,
  items,
}: IndustryWorkflowsProps) {
  return (
    <section id="workflows" className={styles.section} aria-labelledby="workflows-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="workflows-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.workflowsList}>
          {items.map((wf, idx) => (
            <div key={idx} className={styles.workflowCard}>
              <div className={styles.workflowHeader}>
                <h3 className={styles.workflowTitle}>{wf.title}</h3>
                <span className={styles.triggerBadge}>
                  <span className={styles.triggerDot} aria-hidden="true" />
                  <span>Trigger: {wf.trigger}</span>
                </span>
              </div>

              <div className={styles.stepsFlow}>
                {wf.steps.map((step, sIdx) => (
                  <div key={sIdx} className={styles.stepBox}>
                    <span className={styles.stepIndex}>Step {sIdx + 1}</span>
                    <span className={styles.stepText}>{step}</span>
                  </div>
                ))}
              </div>

              <div className={styles.outcomeBox}>
                <strong>Expected Operational Impact:</strong>
                <span>{wf.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
