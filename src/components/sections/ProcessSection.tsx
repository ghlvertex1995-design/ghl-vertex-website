import React from "react";
import Link from "next/link";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand sales process, customer journey, team and tools.",
  },
  {
    num: "02",
    title: "Audit & Map",
    desc: "Identify gaps, duplicate work, missed follow-up and automation opportunities.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Map CRM, pipelines, workflows, AI and integrations before building.",
  },
  {
    num: "04",
    title: "Build",
    desc: "Configure GoHighLevel and connect required systems.",
  },
  {
    num: "05",
    title: "Test",
    desc: "Test triggers, branches, actions, calendars, messages, handoffs and edge cases.",
  },
  {
    num: "06",
    title: "Launch",
    desc: "Deploy into live operations.",
  },
  {
    num: "07",
    title: "Optimize",
    desc: "Improve workflows as business requirements change.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className={styles.processSection} aria-labelledby="process-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>HOW WE WORK</span>
          <h2 id="process-heading" className={styles.heading}>
            From Messy Process to <span className={styles.headingHighlight}>Working GoHighLevel System</span>
          </h2>
          <p className={styles.supporting}>
            A structured, 7-step engineering roadmap that turns disjointed workflows into an integrated, automated customer engine.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepBadge}>{step.num}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="#contact" className={styles.processCta}>
            <span>Get My GHL Implementation Plan</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
