import React from "react";
import { PipelineStage } from "@/types/industry";
import styles from "./IndustryPipeline.module.css";

interface IndustryPipelineProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  stages: PipelineStage[];
}

export function IndustryPipeline({
  eyebrow = "CRM LIFECYCLE",
  heading,
  subtitle,
  stages,
}: IndustryPipelineProps) {
  return (
    <section id="pipeline" className={styles.section} aria-labelledby="pipeline-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="pipeline-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.pipelineGrid}>
          {stages.map((stage, idx) => (
            <div key={idx} className={styles.stageCard}>
              <div className={styles.stageTop}>
                <span className={styles.stageBadge}>{stage.step}</span>
                {idx < stages.length - 1 && (
                  <span className={styles.stageArrow} aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <h3 className={styles.stageName}>{stage.name}</h3>
              <p className={styles.stageDetail}>{stage.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
