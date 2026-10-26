import React from "react";
import Link from "next/link";
import styles from "./AudienceSplitSection.module.css";

const businessUseCases = [
  "CRM & pipeline",
  "Lead follow-up",
  "Appointment booking",
  "AI calls",
  "Customer support",
  "Integrations",
  "Reporting",
];

const agencyUseCases = [
  "Subaccount setup",
  "Workflow builds",
  "Snapshots",
  "Client onboarding",
  "Troubleshooting",
  "SaaS support",
  "AI agents",
  "Integrations",
];

export function AudienceSplitSection() {
  return (
    <section className={styles.section} aria-labelledby="audience-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>TAILORED DELIVERY</span>
          <h2 id="audience-heading" className={styles.heading}>
            Built for Businesses. <span className={styles.highlight}>Built Behind Agencies.</span>
          </h2>
          <p className={styles.subheading}>
            Whether you need a bespoke CRM to drive growth or a reliable backend team to deliver HighLevel for your clients, we provide the technical horsepower.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: For Businesses */}
          <div className={styles.card}>
            <div className={styles.badge}>FOR BUSINESSES</div>
            <h3 className={styles.cardTitle}>
              Turn GoHighLevel Into Your Customer Acquisition System
            </h3>
            <p className={styles.cardCopy}>
              We configure GHL around how your team captures, manages and converts leads.
            </p>

            <div className={styles.useCaseBox}>
              <span className={styles.useCaseLabel}>Key Capabilities:</span>
              <ul className={styles.useCaseList}>
                {businessUseCases.map((item, idx) => (
                  <li key={idx} className={styles.useCaseItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <Link href="#contact" className={styles.primaryBtn}>
                <span>Build My GHL System</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: For Agencies */}
          <div className={`${styles.card} ${styles.agencyCard}`}>
            <div className={styles.badgeSecondary}>FOR AGENCIES</div>
            <h3 className={styles.cardTitle}>
              Scale GoHighLevel Delivery Without Building a Larger Internal Team
            </h3>
            <p className={styles.cardCopy}>
              Use GHLVertex for technical implementation, automations, client onboarding and white-label backend support.
            </p>

            <div className={styles.useCaseBox}>
              <span className={styles.useCaseLabel}>White-Label Solutions:</span>
              <ul className={styles.useCaseList}>
                {agencyUseCases.map((item, idx) => (
                  <li key={idx} className={styles.useCaseItem}>
                    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <Link href="/services/gohighlevel-white-label-support/" className={styles.secondaryBtn}>
                <span>Explore White-Label Support</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
