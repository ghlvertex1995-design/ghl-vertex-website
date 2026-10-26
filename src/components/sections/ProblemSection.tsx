import React from "react";
import Link from "next/link";
import styles from "./ProblemSection.module.css";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Disconnected CRM",
      description: "Contacts, pipelines and opportunities are not structured around the real sales process.",
    },
    {
      num: "02",
      title: "Broken or Missing Automations",
      description: "Follow-up depends on the team remembering what to do next.",
    },
    {
      num: "03",
      title: "Slow Lead Response",
      description: "New enquiries wait too long before someone qualifies or contacts them.",
    },
    {
      num: "04",
      title: "Too Many Disconnected Tools",
      description: "CRM, calendars, messaging, AI and external platforms do not work as one system.",
    },
  ];

  return (
    <section className={styles.problemSection} aria-labelledby="problem-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerGroup}>
          <div className={styles.eyebrow}>
            <span>THE PROBLEM</span>
          </div>

          <h2 id="problem-heading" className={styles.heading}>
            Buying GoHighLevel Is Easy.{" "}
            <span className={styles.headingHighlight}>Building the Right System Is the Hard Part.</span>
          </h2>

          <p className={styles.supporting}>
            GoHighLevel provides CRM, automation, communication and AI capabilities, but those tools
            still need to be structured around how your business captures, qualifies, follows up with and converts leads.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className={styles.cardsGrid}>
          {problems.map((p) => (
            <div key={p.num} className={styles.problemCard}>
              <div className={styles.cardTop}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.numberBadge}>Problem {p.num}</span>
                  <div className={styles.warningIconBadge} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDescription}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBanner}>
          <p className={styles.bottomCopy}>
            We design the system first, then configure GoHighLevel around the customer journey.
          </p>
          <Link href="#contact" className={styles.problemCta}>
            <span>Audit My GHL Setup</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
