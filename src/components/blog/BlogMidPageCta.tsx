import React from "react";
import Link from "next/link";
import styles from "./BlogMidPageCta.module.css";

export function BlogMidPageCta() {
  return (
    <section className={styles.ctaSection} aria-label="Strategy Consultation">
      <div className={`container ${styles.container}`}>
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <span className={styles.eyebrow}>CONNECTED REVENUE SYSTEMS</span>
            <h2 className={styles.heading}>Need Help Building Your GoHighLevel System?</h2>
            <p className={styles.description}>
              Turn your CRM, workflows, AI, and integrations into one connected business growth system built specifically around your operations.
            </p>
            <div className={styles.actions}>
              <Link
                href="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                <span>Book a GHL Strategy Call</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/services/ghl-setup-services/" className={styles.secondaryBtn}>
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
