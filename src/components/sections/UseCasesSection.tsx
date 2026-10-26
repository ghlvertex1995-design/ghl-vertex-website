import React from "react";
import Link from "next/link";
import styles from "./UseCasesSection.module.css";

const useCases = [
  {
    title: "Lead Qualification",
    desc: "Capture information and route suitable opportunities.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
  },
  {
    title: "Appointment Booking",
    desc: "Move qualified prospects into the right calendar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: "Missed Call Recovery",
    desc: "Trigger follow-up when calls go unanswered.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 2 18 18M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/>
      </svg>
    ),
  },
  {
    title: "Lead Follow-Up",
    desc: "Keep conversations moving without relying entirely on manual outreach.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
  {
    title: "Lead Reactivation",
    desc: "Re-engage older opportunities inside the CRM.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
      </svg>
    ),
  },
  {
    title: "Customer Support",
    desc: "Use AI and workflows for common requests and route exceptions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "Client Onboarding",
    desc: "Trigger tasks, communication and setup after a sale.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    title: "CRM Management",
    desc: "Automatically update contacts, opportunities and pipeline stages.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className={styles.useCasesSection} aria-labelledby="usecases-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>WHAT DO YOU WANT TO AUTOMATE?</span>
          <h2 id="usecases-heading" className={styles.heading}>
            Start with the <span className={styles.headingHighlight}>Business Problem</span>
          </h2>
          <p className={styles.supporting}>
            Every automation we build maps to a distinct operational bottleneck, eliminating lost revenue and manual drudgery.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {useCases.map((uc, idx) => (
            <div key={idx} className={styles.caseCard}>
              <div className={styles.iconCircle} aria-hidden="true">
                {uc.icon}
              </div>
              <h3 className={styles.cardTitle}>{uc.title}</h3>
              <p className={styles.cardDesc}>{uc.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="#contact" className={styles.useCaseCta}>
            <span>Tell Us What You Want to Automate</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
