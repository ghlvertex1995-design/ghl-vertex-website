import React from "react";
import Link from "next/link";
import styles from "./WorkforceSection.module.css";

const agents = [
  {
    title: "AI Voice Agent",
    desc: "Handle inbound or outbound calls, answer questions, collect information and trigger the next step.",
    tag: "Voice Telephony",
  },
  {
    title: "AI Receptionist",
    desc: "Answer routine enquiries, capture lead details, route calls and help schedule appointments.",
    tag: "Front-Desk",
  },
  {
    title: "AI Sales Agent",
    desc: "Qualify prospects, answer common questions and move suitable leads toward sales conversations.",
    tag: "Pipeline & Conversion",
  },
  {
    title: "AI Support Agent",
    desc: "Handle repeat questions using approved business knowledge and escalate when human help is needed.",
    tag: "Knowledge Base",
  },
  {
    title: "AI Follow-Up Agent",
    desc: "Re-engage leads, continue conversations and trigger the appropriate workflow based on responses.",
    tag: "Reactivation",
  },
  {
    title: "AI Lead Qualification Agent",
    desc: "Collect context, evaluate lead fit and route prospects into the correct CRM process.",
    tag: "Triage & Scoring",
  },
];

export function WorkforceSection() {
  return (
    <section id="ai-agents" className={styles.workforceSection} aria-labelledby="ai-agents-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>GOHIGHLEVEL + AI</span>
          <h2 id="ai-agents-heading" className={styles.heading}>
            Add AI Agents to the Workflows You{" "}
            <span className={styles.headingHighlight}>Already Run in GoHighLevel</span>
          </h2>
          <p className={styles.supporting}>
            AI becomes more useful when it is connected to your CRM, conversations, calendars and workflows.
            We build agents that work inside the customer journey instead of operating as isolated bots.
          </p>
        </div>

        {/* 6 AI Agent Cards */}
        <div className={styles.cardsGrid}>
          {agents.map((agent, index) => (
            <div key={index} className={styles.agentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.roleBadge}>{agent.tag}</span>
                <span className={styles.agentDot} aria-hidden="true" />
              </div>

              <h3 className={styles.agentTitle}>{agent.title}</h3>
              <p className={styles.agentDesc}>{agent.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBanner}>
          <p className={styles.bottomCopy}>
            The right approach may combine AI with deterministic HighLevel workflows and human handoff instead of using AI for every step.
          </p>
          <Link href="#contact" className={styles.ctaBtn}>
            <span>Build My GHL AI System</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
