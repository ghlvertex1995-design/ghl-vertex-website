import React from "react";
import Link from "next/link";
import styles from "./ResultsSection.module.css";

const workflowSteps = [
  { step: "01", label: "Lead Capture", desc: "A home-service enquiry enters from a form or inbound call." },
  { step: "02", label: "Opportunity Creation", desc: "Instantly creates a tracked CRM opportunity and assigns tags." },
  { step: "03", label: "Immediate Follow-Up", desc: "Sub-minute automated response via SMS, email or voice." },
  { step: "04", label: "Smart Qualification", desc: "Gathers requirements and confirms geographic serviceability." },
  { step: "05", label: "Appointment Booking", desc: "Direct calendar self-scheduling with real-time availability." },
  { step: "06", label: "Pipeline & Handoff", desc: "Moved through pipeline and handed to a team member when necessary." },
];

export function ResultsSection() {
  return (
    <section id="results" className={styles.resultsSection} aria-labelledby="results-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>OUR WORK</span>
          <h2 id="results-heading" className={styles.heading}>
            See How Better GoHighLevel Systems <span className={styles.headingHighlight}>Work in Practice</span>
          </h2>
          <p className={styles.supporting}>
            We design every workflow with operational rigor: zero dropped leads, immediate response times, and clear team handoffs.
          </p>
        </div>

        <div className={styles.workflowCard}>
          <div className={styles.badgeRow}>
            <span className={styles.cardBadge}>Example GoHighLevel Workflow</span>
          </div>
          
          <h3 className={styles.workflowTitle}>
            Typical Implementation Scenario: Inbound Service Automation
          </h3>
          <p className={styles.workflowDescription}>
            A home-service enquiry enters from a form, creates a CRM opportunity, receives an immediate follow-up, is qualified, offered an appointment, moved through the pipeline and handed to a team member when necessary.
          </p>

          <div className={styles.stepsTimeline}>
            {workflowSteps.map((ws) => (
              <div key={ws.step} className={styles.timelineStep}>
                <div className={styles.stepNumBadge}>{ws.step}</div>
                <h4 className={styles.stepLabel}>{ws.label}</h4>
                <p className={styles.stepDetail}>{ws.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.cardCtaRow}>
            <Link href="#contact" className={styles.resultsCta}>
              <span>View Case Studies</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
