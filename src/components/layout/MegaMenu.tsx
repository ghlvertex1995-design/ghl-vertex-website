"use client";

import Link from "next/link";
import styles from "./MegaMenu.module.css";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function MegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  const aiAgents = [
    { name: "AI Agent Development", href: "/services/ai-agent-development-services/" },
    { name: "AI Chatbot Development", href: "/services/ai-chatbot-development-services/" },
    { name: "Custom AI Development", href: "/services/custom-ai-development/" },
    { name: "RAG Development Services", href: "/services/rag-development-services/" },
    { name: "AI Voice Agents", href: "/#voice-agents" },
  ];

  const automations = [
    { name: "AI Automation Services", href: "/services/ai-automation-services/" },
    { name: "Workflow Automation Services", href: "/services/workflow-automation-services/" },
    { name: "AI Integration Services", href: "/services/ai-integration-services/" },
    { name: "GHL Setup Services", href: "/services/ghl-setup-services/" },
    { name: "GHL White Label Support", href: "/services/gohighlevel-white-label-support/" },
  ];

  const solutions = [
    { name: "SaaS CRM Implementation", href: "/solutions/saas-crm/" },
    { name: "AI Consulting Services", href: "/services/ai-consulting-services/" },
    { name: "Appointment Booking Systems", href: "/#contact" },
    { name: "Speed-to-Lead Triage", href: "/#contact" },
    { name: "Missed Call Text-Back", href: "/#contact" },
  ];

  return (
    <div
      className={`${styles.megaMenuWrapper} ${isOpen ? styles.isOpen : ""}`}
      role="region"
      aria-label="AI Agents & Solutions Mega Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.megaMenuCard}>
        {/* Column 1: AI Agents */}
        <div className={styles.columnCard}>
          <div className={styles.columnHeader}>
            <span className={styles.headerIcon} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
              </svg>
            </span>
            <h3 className={styles.columnTitle}>AI Agents &amp; Models</h3>
          </div>
          <ul className={styles.linkList}>
            {aiAgents.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={styles.itemLink} onClick={onClose}>
                  <span>{item.name}</span>
                  <span className={styles.itemArrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Automation */}
        <div className={styles.columnCard}>
          <div className={styles.columnHeader}>
            <span className={styles.headerIcon} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
            </span>
            <h3 className={styles.columnTitle}>Automation &amp; CRM</h3>
          </div>
          <ul className={styles.linkList}>
            {automations.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={styles.itemLink} onClick={onClose}>
                  <span>{item.name}</span>
                  <span className={styles.itemArrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Solutions */}
        <div className={styles.columnCard}>
          <div className={styles.columnHeader}>
            <span className={styles.headerIcon} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </span>
            <h3 className={styles.columnTitle}>Solutions &amp; Strategy</h3>
          </div>
          <ul className={styles.linkList}>
            {solutions.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={styles.itemLink} onClick={onClose}>
                  <span>{item.name}</span>
                  <span className={styles.itemArrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Featured Card */}
        <div className={styles.featuredCard}>
          <div>
            <div className={styles.featuredBadge}>Production Engineering</div>
            <div className={styles.featuredStat}>
              <span>24/7</span>
            </div>
            <h4 className={styles.statLabel}>
              Autonomous Operations with Human Safeguards
            </h4>
            <p className={styles.featuredDesc}>
              Production AI agents, custom GoHighLevel CRM architectures, and resilient n8n pipelines built for scalable business operations.
            </p>
          </div>
          <Link
            href="/#contact"
            className={`btn btn-primary ${styles.featuredCta}`}
            onClick={onClose}
          >
            <span>Book Strategy Call</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
