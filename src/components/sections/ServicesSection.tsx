import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "GoHighLevel Setup & Implementation",
    desc: "Configure your GHL account around your sales process, team and customer journey.",
    includes: ["CRM", "Pipelines", "Calendars", "Forms", "Custom Fields", "Communication Setup"],
    ctaText: "Explore GHL Setup Services",
    href: "/services/ghl-setup-services/",
  },
  {
    title: "GoHighLevel CRM & SaaS CRM",
    desc: "Build a structured CRM for leads, opportunities, customers and recurring revenue workflows.",
    includes: ["Lead Management", "Pipelines", "Lifecycle Stages", "Customer Handoffs", "Reporting"],
    ctaText: "Explore SaaS CRM",
    href: "/solutions/saas-crm/",
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive actions across leads, sales, appointments, onboarding and operations.",
    includes: ["Triggers", "Follow-Up", "Lead Routing", "CRM Updates", "Reminders", "Reactivation"],
    ctaText: "Explore Workflow Automation",
    href: "/services/workflow-automation-services/",
  },
  {
    title: "AI Agents",
    desc: "Deploy AI-powered agents that handle conversations, qualification, scheduling and repetitive customer interactions.",
    includes: ["AI Voice Agent", "AI Receptionist", "AI Sales Agent", "AI Support Agent", "AI Follow-Up Agent", "AI Lead Qualification Agent", "AI Chat Agent"],
    ctaText: "Explore AI Agent Services",
    href: "/services/ai-agent-development-services/",
  },
  {
    title: "AI & Conversation Automation",
    desc: "Combine HighLevel conversations, workflows and AI to create smarter customer journeys.",
    includes: ["Conversation AI", "Appointment Booking", "AI Chatbots", "Voice AI", "Knowledge-Based Responses"],
    ctaText: "Explore AI Automation",
    href: "/services/ai-automation-services/",
  },
  {
    title: "GoHighLevel Integrations",
    desc: "Connect GHL with the tools, data and systems your business already relies on.",
    includes: ["APIs", "Webhooks", "n8n", "OpenAI", "Calendars", "Payments", "Custom Systems"],
    ctaText: "Explore AI & GHL Integrations",
    href: "/services/ai-integration-services/",
  },
  {
    title: "GoHighLevel White-Label Support",
    desc: "Let GHLVertex work behind your agency while you own the client relationship.",
    includes: ["Client Onboarding", "Technical Support", "Subaccounts", "Workflow Builds", "Troubleshooting", "Fulfillment"],
    ctaText: "Explore White-Label Support",
    href: "/services/gohighlevel-white-label-support/",
  },
  {
    title: "GHL Optimization & Support",
    desc: "Already using GoHighLevel? We audit, repair and improve the system you already have.",
    includes: ["Account Audit", "Workflow Fixes", "CRM Cleanup", "Migration", "Optimization", "Ongoing Support"],
    ctaText: "Fix My GHL System",
    href: "#contact",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection} aria-labelledby="services-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>GOHIGHLEVEL SERVICES</span>
          <h2 id="services-heading" className={styles.heading}>
            Everything You Need to Build a{" "}
            <span className={styles.headingHighlight}>Better GoHighLevel System</span>
          </h2>
          <p className={styles.supporting}>
            Start from scratch, improve an existing account, add AI, or connect GHL to the rest of your
            business stack. GHLVertex handles the strategy, implementation and technical work behind your system.
          </p>
        </div>

        {/* 8 Services Cards Grid */}
        <div className={styles.cardsGrid}>
          {services.map((item, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <span className={styles.indexNum}>0{idx + 1}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>

              <div className={styles.includesBlock}>
                <span className={styles.includesLabel}>Includes:</span>
                <div className={styles.tagsWrapper}>
                  {item.includes.map((inc, i) => (
                    <span key={i} className={styles.featurePill}>
                      <span className={styles.bullet} aria-hidden="true">•</span>
                      {inc}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Link href={item.href} className={styles.serviceLink}>
                  <span>{item.ctaText}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
