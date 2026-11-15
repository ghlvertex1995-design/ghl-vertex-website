import React from "react";
import { ExampleSystem } from "@/types/industry";
import styles from "./IndustryExample.module.css";

interface IndustryExampleProps {
  eyebrow?: string;
  heading?: string;
  example: ExampleSystem;
}

export function IndustryExample({
  eyebrow = "SYSTEM ARCHITECTURE IN PRACTICE",
  heading = "Example Implementation & Operational Flow",
  example,
}: IndustryExampleProps) {
  return (
    <section className={styles.section} aria-labelledby="example-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="example-heading" className={styles.heading}>
            {heading}
          </h2>
        </div>

        <div className={styles.exampleCard}>
          <div className={styles.exampleHeader}>
            <h3 className={styles.exampleTitle}>{example.title}</h3>
            <span className={styles.exampleBadge}>Architecture Breakdown</span>
          </div>

          <div className={styles.twoColGrid}>
            <div className={styles.block}>
              <span className={styles.blockLabel}>Operational Challenge</span>
              <p className={styles.blockText}>{example.problem}</p>
            </div>
            <div className={styles.block}>
              <span className={styles.blockLabel}>GHL System Solution</span>
              <p className={styles.blockText}>{example.architecture}</p>
            </div>
          </div>

          <div className={styles.stepsSection}>
            <h4 className={styles.stepsSectionTitle}>Step-by-Step Workflow Execution</h4>
            <ol className={styles.stepsList}>
              {example.workflowSteps.map((step, idx) => (
                <li key={idx} className={styles.stepItem}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.resultBox}>
            <span className={styles.resultLabel}>Expected Operational Improvement</span>
            <p className={styles.resultText}>{example.operationalResult}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
