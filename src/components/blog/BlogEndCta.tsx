import React from "react";
import Link from "next/link";
import styles from "./BlogEndCta.module.css";

export function BlogEndCta() {
  return (
    <section className={styles.ctaCard} aria-label="Build Your System">
      <div className={styles.inner}>
        <span className={styles.badge}>READY TO ARCHITECT YOUR REVENUE ENGINE?</span>
        <h2 className={styles.headline}>Build the System, Not Just the Workflow</h2>
        <p className={styles.copy}>
          If you want to connect GoHighLevel, automation, AI, and integrations around your actual business process, talk to GHLVertex. We engineer systems that capture every lead, follow up automatically, and protect your margins.
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
    </section>
  );
}
