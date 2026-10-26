import React from "react";
import Link from "next/link";
import styles from "./RelatedServicesSection.module.css";

const relatedLinks = [
  {
    title: "GHL Setup Services",
    href: "/services/ghl-setup-services/",
    desc: "Complete GoHighLevel account configuration, pipelines, custom fields, calendars, and communications setup.",
  },
  {
    title: "Workflow Automation Services",
    href: "/services/workflow-automation-services/",
    desc: "End-to-end automation triggers, lead routing, smart follow-ups, and operational workflow orchestration.",
  },
  {
    title: "SaaS CRM Solutions",
    href: "/solutions/saas-crm/",
    desc: "Structured HighLevel CRM architecture for subscription models, user handoffs, and recurring revenue pipelines.",
  },
  {
    title: "GoHighLevel White Label Support",
    href: "/services/gohighlevel-white-label-support/",
    desc: "Backend technical delivery, subaccount provisioning, client onboarding, and troubleshooting for scaling agencies.",
  },
  {
    title: "AI Consulting Services",
    href: "/services/ai-consulting-services/",
    desc: "Strategic AI roadmapping, architecture design, and automation feasibility analysis for growing businesses.",
  },
  {
    title: "AI Automation Services",
    href: "/services/ai-automation-services/",
    desc: "Cross-platform business automation connecting CRM, operational databases, and automated conversational tools.",
  },
  {
    title: "AI Agent Development Services",
    href: "/services/ai-agent-development-services/",
    desc: "Autonomous voice, sales, support, and qualification agents embedded directly into your operational workflows.",
  },
  {
    title: "AI Chatbot Development Services",
    href: "/services/ai-chatbot-development-services/",
    desc: "Custom multichannel chat systems trained on proprietary SOPs and business knowledge bases.",
  },
  {
    title: "Custom AI Development",
    href: "/services/custom-ai-development/",
    desc: "Tailored machine learning models, custom tool calling, and bespoke AI applications for proprietary workflows.",
  },
  {
    title: "AI Integration Services",
    href: "/services/ai-integration-services/",
    desc: "Robust API, webhook, and n8n middleware integrations connecting GoHighLevel to external business systems.",
  },
  {
    title: "RAG Development Services",
    href: "/services/rag-development-services/",
    desc: "Retrieval-Augmented Generation systems for hallucination-free, knowledge-grounded AI responses.",
  },
];

export function RelatedServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="related-services-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>ECOSYSTEM DIRECTORY</span>
          <h2 id="related-services-heading" className={styles.heading}>
            Explore <span className={styles.headingHighlight}>GoHighLevel & Automation Services</span>
          </h2>
          <p className={styles.supporting}>
            Dive deep into our dedicated service architectures, specialized delivery models, and technical capabilities.
          </p>
        </div>

        <div className={styles.linksGrid}>
          {relatedLinks.map((item, idx) => (
            <Link key={idx} href={item.href} className={styles.linkCard}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={styles.arrowIcon} aria-hidden="true">→</span>
              </div>
              <p className={styles.cardDesc}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
