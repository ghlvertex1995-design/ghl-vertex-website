import React from "react";
import Link from "next/link";
import styles from "./FinalCtaSection.module.css";

const microcopyItems = [
  "Setup",
  "CRM",
  "Workflows",
  "AI",
  "Integrations",
  "White-Label Support",
];

export function FinalCtaSection() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="final-cta-heading">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.ambientGlow} aria-hidden="true" />

          <div className={styles.content}>
            <span className={styles.eyebrow}>READY TO BUILD?</span>

            <h2 id="final-cta-heading" className={styles.heading}>
              Turn GoHighLevel Into a System{" "}
              <span className={styles.headingHighlight}>Your Business Can Actually Run On</span>
            </h2>

            <p className={styles.supporting}>
              Whether you are starting from scratch, fixing an existing account, adding AI or scaling an agency, we can help design and implement the right GHL system around your workflow.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                <span>Book a Free GHL Strategy Call</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/services/ghl-setup-services/" className={styles.secondaryBtn}>
                <span>Explore GoHighLevel Services</span>
              </Link>
            </div>

            <div className={styles.microcopyRow}>
              {microcopyItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className={styles.microItem}>{item}</span>
                  {idx < microcopyItems.length - 1 && (
                    <span className={styles.microDot} aria-hidden="true">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
