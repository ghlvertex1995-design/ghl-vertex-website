import React from "react";
import { JourneyStage } from "@/types/industry";
import styles from "./IndustryJourney.module.css";

interface IndustryJourneyProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  stages: JourneyStage[];
}

export function IndustryJourney({
  eyebrow = "CUSTOMER LIFECYCLE",
  heading,
  subtitle,
  stages,
}: IndustryJourneyProps) {
  return (
    <section id="journey" className={styles.section} aria-labelledby="journey-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="journey-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.journeyGrid}>
          {stages.map((stg, idx) => (
            <div key={idx} className={styles.journeyCard}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseBadge}>Phase {(idx + 1).toString().padStart(2, "0")}</span>
                <span className={styles.channelBadge}>{stg.channel}</span>
              </div>
              <h3 className={styles.phaseTitle}>{stg.phase}</h3>
              <p className={styles.phaseAction}>{stg.action}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
