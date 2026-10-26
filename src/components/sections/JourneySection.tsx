import React from "react";
import Link from "next/link";
import styles from "./JourneySection.module.css";

const stages = [
  {
    step: "01",
    title: "Capture",
    items: ["Forms", "Calls", "Ads", "Chat", "Website"],
  },
  {
    step: "02",
    title: "Respond",
    items: ["SMS", "Email", "Voice", "Conversation AI"],
  },
  {
    step: "03",
    title: "Qualify",
    items: ["Questions", "Lead Data", "AI", "Routing Logic"],
  },
  {
    step: "04",
    title: "Convert",
    items: ["CRM", "Pipeline", "Calendar", "Appointment"],
  },
  {
    step: "05",
    title: "Follow Up",
    items: ["Reminders", "Nurture", "Reactivation", "No-Show Recovery"],
  },
  {
    step: "06",
    title: "Retain",
    items: ["Onboarding", "Support", "Reviews", "Customer Workflows"],
  },
];

export function JourneySection() {
  return (
    <section id="customer-journey" className={styles.journeySection} aria-labelledby="journey-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>ONE CONNECTED SYSTEM</span>
          <h2 id="journey-heading" className={styles.heading}>
            Automate the Customer Journey from{" "}
            <span className={styles.headingHighlight}>First Lead to Follow-Up</span>
          </h2>
          <p className={styles.supporting}>
            Instead of building isolated automations, we connect each stage so information and actions
            move through the same GoHighLevel system.
          </p>
        </div>

        {/* 6-Stage Visual Timeline Flow */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineGrid}>
            {stages.map((stage) => (
              <div key={stage.step} className={styles.stageCard}>
                <div className={styles.stageHeader}>
                  <span className={styles.stageNumCircle}>{stage.step}</span>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                </div>

                <div className={styles.tagsList}>
                  {stage.items.map((item, idx) => (
                    <div key={idx} className={styles.tagItem}>
                      <span className={styles.tagBullet} aria-hidden="true">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaRow}>
          <Link href="#contact" className={styles.journeyCta}>
            <span>Map My Customer Journey</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
