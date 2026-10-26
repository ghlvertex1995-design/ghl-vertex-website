import React from "react";
import Link from "next/link";
import styles from "./DefinitionSection.module.css";

export function DefinitionSection() {
  return (
    <section className={styles.definitionSection} aria-labelledby="definition-heading">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>GOHIGHLEVEL SERVICES</span>
            <h2 id="definition-heading" className={styles.heading}>
              What Does a GoHighLevel Agency Do?
            </h2>
          </div>

          <p className={styles.mainCopy}>
            A GoHighLevel agency helps businesses configure, automate and extend the HighLevel
            platform around their actual sales and customer journey. This can include CRM setup,
            pipelines, calendars, workflow automation, AI agents, lead follow-up, integrations, migration,
            white-label support and ongoing optimization.
          </p>

          <p className={styles.supportingCopy}>
            GHLVertex combines GoHighLevel implementation with automation, AI and integrations so
            the platform works as a connected business system, not just another CRM login.
          </p>

          <div className={styles.ctaRow}>
            <Link href="#services" className={styles.ctaBtn}>
              <span>Explore Our GHL Services</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
