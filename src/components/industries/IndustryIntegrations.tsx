import React from "react";
import { IntegrationItem } from "@/types/industry";
import styles from "./IndustryIntegrations.module.css";

interface IndustryIntegrationsProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  items: IntegrationItem[];
}

export function IndustryIntegrations({
  eyebrow = "CONNECTED TECH STACK",
  heading,
  subtitle,
  items,
}: IndustryIntegrationsProps) {
  return (
    <section className={styles.section} aria-labelledby="integrations-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="integrations-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <span className={styles.categoryTag}>{item.category}</span>
              <h3 className={styles.toolsList}>{item.tools}</h3>
              <p className={styles.useCaseText}>{item.useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
