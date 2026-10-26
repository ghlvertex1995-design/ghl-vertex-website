import React from "react";
import Link from "next/link";
import styles from "./IntegrationSection.module.css";

const systems = [
  { name: "n8n", category: "Workflow Engine" },
  { name: "OpenAI", category: "Language Models" },
  { name: "Stripe", category: "Payments & Invoicing" },
  { name: "Twilio", category: "Telephony & SMS" },
  { name: "Google Calendar", category: "Scheduling" },
  { name: "Gmail", category: "Email Infrastructure" },
  { name: "Slack", category: "Team Communication" },
  { name: "Webhooks", category: "Event Relays" },
  { name: "APIs", category: "Custom Endpoints" },
  { name: "Databases", category: "Postgres / MySQL / Airtable" },
  { name: "Custom Applications", category: "Proprietary Software" },
];

export function IntegrationSection() {
  return (
    <section id="integrations" className={styles.integrationSection} aria-labelledby="integrations-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>CONNECTED STACK</span>
          <h2 id="integrations-heading" className={styles.heading}>
            GoHighLevel at the <span className={styles.headingHighlight}>Center of Your Business Stack</span>
          </h2>
          <p className={styles.supporting}>
            When native integrations are not enough, we design API, webhook and automation workflows that move the right information between GHL and your external systems.
          </p>
        </div>

        <div className={styles.orbitCanvas}>
          {/* Center Hub: GoHighLevel */}
          <div className={styles.hubCenter}>
            <div className={styles.hubPulseGlow} aria-hidden="true" />
            <div className={styles.hubIcon} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <h3 className={styles.hubTitle}>GoHighLevel</h3>
            <span className={styles.hubBadge}>Core Operations & CRM Hub</span>
          </div>

          {/* Surrounding Connected Systems Grid */}
          <div className={styles.nodesGrid}>
            {systems.map((system, idx) => (
              <div key={idx} className={styles.platformNode}>
                <div className={styles.nodeIndicator} aria-hidden="true" />
                <span className={styles.platformName}>{system.name}</span>
                <span className={styles.platformRole}>{system.category}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctaRow}>
            <Link href="/services/ai-integration-services/" className={styles.integrationCta}>
              <span>Connect My Business Stack</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
