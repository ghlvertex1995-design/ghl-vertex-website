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
    { name: "AI Voice Agent", href: "#ai-voice-agent" },
    { name: "AI Receptionist Agent", href: "#ai-receptionist-agent" },
    { name: "AI Sales Agent", href: "#ai-sales-agent" },
    { name: "AI Support Agent", href: "#ai-support-agent" },
    { name: "AI Chat Agent", href: "#ai-chat-agent" },
  ];

  const automations = [
    { name: "Agentic AI Automation", href: "#agentic-ai-automation" },
    { name: "AI Workflow Automation", href: "#ai-workflow-automation" },
    { name: "CRM Automation", href: "#crm-automation" },
    { name: "GoHighLevel Automation", href: "#gohighlevel-automation" },
    { name: "n8n Automation", href: "#n8n-automation" },
  ];

  const solutions = [
    { name: "Appointment Booking", href: "#appointment-booking" },
    { name: "Lead Qualification", href: "#lead-qualification" },
    { name: "Lead Follow-Up", href: "#lead-follow-up" },
    { name: "Lead Reactivation", href: "#lead-reactivation" },
    { name: "Customer Support", href: "#customer-support" },
    { name: "Missed Call Recovery", href: "#missed-call-recovery" },
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
            <h3 className={styles.columnTitle}>AI Agents</h3>
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
            <h3 className={styles.columnTitle}>Automation</h3>
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
            <h3 className={styles.columnTitle}>Solutions</h3>
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

        {/* Column 4: Featured Promo / Case Study Card */}
        <div className={styles.featuredCard}>
          <div>
            <div className={styles.featuredBadge}>Proven Client ROI</div>
            <div className={styles.featuredStat}>
              <span>310%</span>
            </div>
            <h4 className={styles.statLabel}>
              Increase in qualified bookings & pipeline efficiency
            </h4>
            <p className={styles.featuredDesc}>
              Autonomous GoHighLevel agents and multi-step workflows that turn leads into revenue on autopilot.
            </p>
          </div>
          <Link
            href="#contact"
            className={`btn btn-primary ${styles.featuredCta}`}
            onClick={onClose}
          >
            <span>Book AI Strategy Call</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
