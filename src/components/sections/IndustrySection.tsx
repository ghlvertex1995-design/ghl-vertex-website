import React from "react";
import Link from "next/link";
import styles from "./IndustrySection.module.css";

const industries = [
  {
    title: "Agencies",
    desc: "Scale client subaccounts, snapshots, white-label delivery, and automated fulfillment.",
    href: "/industries/agencies/",
  },
  {
    title: "Home Services",
    desc: "Immediate lead recovery, emergency intake, scheduling, and review generation.",
    href: "/industries/home-services/",
  },
  {
    title: "HVAC",
    desc: "Seasonal tune-up outreach, emergency dispatch booking, and missed call follow-up.",
    href: "/industries/hvac/",
  },
  {
    title: "Plumbing",
    desc: "Fast emergency intake, ZIP code screening, and automated technician calendar dispatch.",
    href: "/industries/plumbing/",
  },
  {
    title: "Roofing",
    desc: "Storm damage response, inspection bookings, and insurance claim tracking pipelines.",
    href: "/industries/roofing/",
  },
  {
    title: "Dental",
    desc: "Patient appointment scheduling, hygiene recall campaigns, and treatment reminders.",
    href: "/industries/dental/",
  },
  {
    title: "Med Spas",
    desc: "Consultation bookings, deposit confirmation flows, and recurring treatment reminders.",
    href: "/industries/med-spas/",
  },
  {
    title: "Real Estate",
    desc: "Instant lead qualification, showing scheduling, and long-term buyer nurture sequences.",
    href: "/industries/real-estate/",
  },
  {
    title: "Law Firms",
    desc: "Confidential case intake, eligibility screening, and automated consultation booking.",
    href: "/industries/law-firms/",
  },
  {
    title: "Professional Services",
    desc: "Discovery call qualification, proposal follow-up, and automated client onboarding.",
    href: "/industries/professional-services/",
  },
  {
    title: "SaaS",
    desc: "Trial sign-up nurture, product onboarding sequences, and recurring revenue retention.",
    href: "/industries/saas/",
  },
  {
    title: "Multi-Location Businesses",
    desc: "Centralized lead routing, localized subaccounts, and unified reporting dashboards.",
    href: "/industries/multi-location-businesses/",
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
            <Link key={idx} href={ind.href} className={styles.card}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.accentDot} aria-hidden="true" />
                  <h3 className={styles.cardTitle}>{ind.title}</h3>
                </div>
                <p className={styles.cardDesc}>{ind.desc}</p>
              </div>
              <span className={styles.cardCta} aria-hidden="true">
                Explore {ind.title} Solutions →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
