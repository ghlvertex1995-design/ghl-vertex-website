import React from "react";
import { CapabilityItem } from "@/types/industry";
import styles from "./IndustryCapabilities.module.css";

interface IndustryCapabilitiesProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  items: CapabilityItem[];
}

export function IndustryCapabilities({
  eyebrow = "GOHIGHLEVEL CAPABILITIES",
  heading,
  subtitle,
  items,
}: IndustryCapabilitiesProps) {
  return (
    <section className={styles.section} aria-labelledby="capabilities-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="capabilities-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.featureName}>
                <span className={styles.featureDot} aria-hidden="true" />
                <span>{item.feature}</span>
              </h3>
              <p className={styles.featureUse}>{item.practicalUse}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
