import styles from "./IntegrationSection.module.css";

const platforms = [
  { name: "GoHighLevel", role: "CRM & Pipelines" },
  { name: "n8n", role: "Workflow Engine" },
  { name: "OpenAI", role: "GPT-4o & Reasoning" },
  { name: "Claude", role: "Anthropic LLMs" },
  { name: "Gemini", role: "Multimodal AI" },
  { name: "Twilio", role: "Telephony & SMS" },
  { name: "Vapi", role: "Voice Orchestration" },
  { name: "Retell AI", role: "Ultra-Low Latency" },
  { name: "Slack", role: "Team Notifications" },
  { name: "Google Workspace", role: "Gmail & Calendar" },
  { name: "Stripe", role: "Billing & Invoicing" },
  { name: "Calendars", role: "Bi-Directional Sync" },
  { name: "Meta", role: "IG & FB Ads / DMs" },
  { name: "WhatsApp", role: "Business API" },
];

export function IntegrationSection() {
  return (
    <section id="integrations" className={styles.integrationSection} aria-label="Connected Integrations Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Connected Systems</span>
          <h2 className={styles.heading}>
            Connect Your <span className={styles.headingHighlight}>Entire Business Stack</span>
          </h2>
          <p className={styles.supporting}>
            Your AI agents should never exist in a silo. We build bidirectional integrations connecting your voice systems, LLMs, CRMs, calendars, and communications tools into one unified engine.
          </p>
        </div>

        <div className={styles.orbitCanvas}>
          {/* Center: GHLVertex AI Engine */}
          <div className={styles.hubCenter}>
            <div className={styles.hubPulseGlow} aria-hidden="true" />
            <div className={styles.hubIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
            </div>
            <h3 className={styles.hubTitle}>GHLVertex AI Engine</h3>
            <span className={styles.hubBadge}>Central Orchestration Hub</span>
          </div>

          {/* Connected Platforms Grid */}
          <div className={styles.nodesGrid}>
            {platforms.map((platform, idx) => (
              <div key={idx} className={styles.platformNode}>
                <div className={styles.platformIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0148A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <span className={styles.platformName}>{platform.name}</span>
                <span className={styles.platformRole}>{platform.role}</span>
              </div>
            ))}
          </div>

          <p className={styles.bottomTrustNote}>
            + Custom REST APIs, Webhooks, SQL Databases, and Zapier bridges supported out of the box.
          </p>
        </div>
      </div>
    </section>
  );
}
