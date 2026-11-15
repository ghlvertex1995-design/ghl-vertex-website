import React from "react";
import { AudienceSegment } from "@/types/industry";
import styles from "./IndustryAudience.module.css";

interface IndustryAudienceProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  segments: AudienceSegment[];
}

export function IndustryAudience({
  eyebrow = "WHO THIS IS FOR",
  heading,
  subtitle,
  segments,
}: IndustryAudienceProps) {
  return (
    <section className={styles.section} aria-labelledby="audience-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="audience-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {segments.map((seg, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.segmentName}>{seg.name}</h3>
              <p className={styles.idealForText}>{seg.idealFor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
