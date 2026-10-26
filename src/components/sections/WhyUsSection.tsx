import React from "react";
import Link from "next/link";
import styles from "./WhyUsSection.module.css";

const pillars = [
  {
    title: "GoHighLevel First",
    desc: "Deep implementation focus around CRM, workflows, conversations, calendars and platform automation.",
  },
  {
    title: "Automation Beyond GHL",
    desc: "When the workflow needs more, connect external automation, APIs and n8n.",
  },
  {
    title: "AI Where It Makes Sense",
    desc: "Add AI to conversations and workflows where context or reasoning creates genuine value.",
  },
  {
    title: "Built Around the Customer Journey",
    desc: "CRM structure, automation and AI follow the same business process.",
  },
  {
    title: "Human When It Matters",
    desc: "Sensitive, unusual or high-value situations can be routed back to the team.",
  },
  {
    title: "Built to Evolve",
    desc: "The system can improve as offers, processes and customer journeys change.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-ghlvertex" className={styles.whyUsSection} aria-labelledby="why-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>WHY GHLVERTEX</span>
          <h2 id="why-heading" className={styles.heading}>
            We Don’t Just Set Up Features. <span className={styles.headingHighlight}>We Build the System Around Your Process.</span>
          </h2>
          <p className={styles.supporting}>
            Most implementations fail because tools are configured without understanding the underlying business flow. We bridge high-level strategy with deep technical execution.
          </p>
        </div>

        <div className={styles.blocksGrid}>
          {pillars.map((p, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div className={styles.cardHeader}>
                <span className={styles.accentBar} aria-hidden="true" />
                <h3 className={styles.cardTitle}>{p.title}</h3>
              </div>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="#contact" className={styles.whyCta}>
            <span>Talk to a GHL Expert</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
