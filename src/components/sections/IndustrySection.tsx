import React from "react";
import styles from "./IndustrySection.module.css";

const industries = [
  {
    title: "Agencies",
    desc: "Scale client subaccounts, snapshots, white-label delivery, and automated fulfillment.",
  },
  {
    title: "Home Services",
    desc: "Immediate lead recovery, emergency intake, scheduling, and review generation.",
  },
  {
    title: "HVAC",
    desc: "Seasonal tune-up outreach, emergency dispatch booking, and missed call follow-up.",
  },
  {
    title: "Plumbing",
    desc: "Fast emergency intake, ZIP code screening, and automated technician calendar dispatch.",
  },
  {
    title: "Roofing",
    desc: "Storm damage response, inspection bookings, and insurance claim tracking pipelines.",
  },
  {
    title: "Dental",
    desc: "Patient appointment scheduling, hygiene recall campaigns, and treatment reminders.",
  },
  {
    title: "Med Spas",
    desc: "Consultation bookings, deposit confirmation flows, and recurring treatment reminders.",
  },
  {
    title: "Real Estate",
    desc: "Instant lead qualification, showing scheduling, and long-term buyer nurture sequences.",
  },
  {
    title: "Law Firms",
    desc: "Confidential case intake, eligibility screening, and automated consultation booking.",
  },
  {
    title: "Professional Services",
    desc: "Discovery call qualification, proposal follow-up, and automated client onboarding.",
  },
  {
    title: "SaaS",
    desc: "Trial sign-up nurture, product onboarding sequences, and recurring revenue retention.",
  },
  {
    title: "Multi-Location Businesses",
    desc: "Centralized lead routing, localized subaccounts, and unified reporting dashboards.",
  },
];

export function IndustrySection() {
  return (
    <section id="industries" className={styles.section} aria-labelledby="industries-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>INDUSTRIES</span>
          <h2 id="industries-heading" className={styles.heading}>
            GoHighLevel Systems Built Around <span className={styles.headingHighlight}>How Your Business Actually Operates</span>
          </h2>
          <p className={styles.supporting}>
            Every sector has unique customer lifecycles and operational handoffs. We build GHL systems tailored to your specific trade.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((ind, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.accentDot} aria-hidden="true" />
                <h3 className={styles.cardTitle}>{ind.title}</h3>
              </div>
              <p className={styles.cardDesc}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
