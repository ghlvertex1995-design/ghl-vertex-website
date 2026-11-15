import React from "react";
import { WhyPillar } from "@/types/industry";
import styles from "./IndustryWhyGhlVertex.module.css";

interface IndustryWhyGhlVertexProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  pillars: WhyPillar[];
}

export function IndustryWhyGhlVertex({
  eyebrow = "WHY GHLVERTEX",
  heading,
  subtitle,
  pillars,
}: IndustryWhyGhlVertexProps) {
  return (
    <section className={styles.section} aria-labelledby="why-ghlvertex-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="why-ghlvertex-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
