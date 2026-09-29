import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "AI Voice Agents",
    desc: "Inbound and outbound voice agents that handle real conversations, answer FAQs, and book appointments 24/7.",
    flow: ["Inbound Call", "Natural Dialog", "Direct Booking"],
    href: "#voice-agents",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" x2="12" y1="19" y2="22"/>
      </svg>
    ),
  },
  {
    title: "AI Conversation Agents",
    desc: "Deploy smart AI agents across website live chat, SMS, WhatsApp, and social direct message channels.",
    flow: ["Omnichannel DM", "Intent Analysis", "Instant Solution"],
    href: "#contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "Agentic AI Automation",
    desc: "Autonomous systems capable of context reasoning, multi-step decisions, tool execution, and complex goal completion.",
    flow: ["Business Goal", "LLM Reasoning", "Tool Execution"],
    href: "#agentic-ai",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive operational, scheduling, dispatch, invoicing, and marketing processes with rock-solid logic.",
    flow: ["Event Trigger", "Condition Check", "Auto Dispatch"],
    href: "#contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: "CRM Automation",
    desc: "Capture, qualify, tag, score, nurture, and track leads automatically with GoHighLevel pipeline orchestration.",
    flow: ["Lead Captured", "Tags & Scores", "Pipeline Updated"],
    href: "#contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    title: "AI Integrations",
    desc: "Seamlessly connect GoHighLevel, n8n, Twilio, OpenAI, Claude, Vapi, Retell, and your existing business software stack.",
    flow: ["API Webhook", "n8n Router", "Target Stack"],
    href: "#integrations",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection} aria-label="Core Services Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>What We Build</span>
          <h2 className={styles.heading}>
            AI Automation Systems{" "}
            <span className={styles.headingHighlight}>Built Around Your Business</span>
          </h2>
          <p className={styles.supporting}>
            We engineer bespoke AI and automation systems designed specifically around your customer lifecycle, operational workflows, and revenue objectives.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.iconBox} aria-hidden="true">
                {service.icon}
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>

              {/* Mini Workflow Graphic */}
              <div className={styles.miniWorkflow} aria-hidden="true">
                <span className={styles.workflowNode}>{service.flow[0]}</span>
                <span className={styles.workflowArrow}>→</span>
                <span className={styles.workflowNode}>{service.flow[1]}</span>
                <span className={styles.workflowArrow}>→</span>
                <span className={styles.workflowNode}>{service.flow[2]}</span>
              </div>

              <Link href={service.href} className={styles.learnMoreLink}>
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
