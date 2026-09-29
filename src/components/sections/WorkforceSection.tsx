import Link from "next/link";
import styles from "./WorkforceSection.module.css";

const agents = [
  {
    title: "AI Receptionist",
    role: "Front-Desk & Booking",
    desc: "Answers calls, responds to inquiries and books appointments directly on your calendar 24/7.",
    visualType: "receptionist",
    capabilities: ["Live Qualification", "Calendar Booking", "FAQ Resolution"],
    channels: ["Phone", "Web Widget"],
    integrations: ["GoHighLevel", "Google Calendar", "Vapi"],
  },
  {
    title: "AI Sales Agent",
    role: "Pipeline & Conversion",
    desc: "Qualifies prospects, follows up instantly, and moves opportunities through your pipeline.",
    visualType: "sales",
    capabilities: ["Lead Scoring", "Pipeline Movement", "Objection Handling"],
    channels: ["Phone", "SMS", "Email"],
    integrations: ["GHL Opportunities", "Stripe", "Claude"],
  },
  {
    title: "AI Support Agent",
    role: "Customer Care & Triage",
    desc: "Answers customer questions accurately using your knowledge base and escalates complex requests.",
    visualType: "support",
    capabilities: ["Instant Answers", "KB Retrieval", "Live Escort/Transfer"],
    channels: ["Web Chat", "WhatsApp", "SMS"],
    integrations: ["GHL Helpdesk", "OpenAI", "Slack"],
  },
  {
    title: "AI Follow-Up Agent",
    role: "Nurture & Reactivation",
    desc: "Automatically follows leads through intelligent omnichannel sequences until they respond or book.",
    visualType: "followup",
    capabilities: ["Cadence Execution", "Reactivation", "No-Show Recovery"],
    channels: ["Voice", "SMS", "Email", "WhatsApp"],
    integrations: ["GoHighLevel", "n8n", "Twilio"],
  },
];

export function WorkforceSection() {
  return (
    <section id="ai-workforce" className={styles.workforceSection} aria-label="AI Workforce Team Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>AI Agents</span>
          <h2 className={styles.heading}>
            Build Your <span className={styles.headingHighlight}>AI Team</span>
          </h2>
          <p className={styles.supporting}>
            Deploy specialized AI agents for different parts of your customer journey. Each agent acts autonomously, shares real-time CRM memory, and executes workflows without human intervention.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {agents.map((agent, index) => (
            <div key={index} className={styles.agentCard}>
              <div className={styles.cardTop}>
                <div className={styles.cardIconBox} aria-hidden="true">
                  {index === 0 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                  )}
                </div>
                <div className={styles.cardTitleGroup}>
                  <h3 className={styles.cardTitle}>{agent.title}</h3>
                  <span className={styles.cardRole}>{agent.role}</span>
                </div>
              </div>

              <p className={styles.cardDesc}>{agent.desc}</p>

              {/* Visual Widget per Card */}
              <div className={styles.visualContainer} aria-hidden="true">
                {agent.visualType === "receptionist" && (
                  <div className={styles.phoneCalWidget}>
                    <span className={styles.widgetBadge}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/></svg>
                      Live Inbound
                    </span>
                    <span className={styles.syncArrow}>⇄</span>
                    <span className={styles.widgetBadge}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Cal Synced
                    </span>
                  </div>
                )}

                {agent.visualType === "sales" && (
                  <div className={styles.pipelineWidget}>
                    <div className={`${styles.pipeStep} ${styles.pipeActive}`}>
                      <span className={styles.pipeDot}>✓</span>
                      <span>Lead</span>
                    </div>
                    <div className={styles.pipeConnector} />
                    <div className={`${styles.pipeStep} ${styles.pipeActive}`}>
                      <span className={styles.pipeDot}>✓</span>
                      <span>Qualified</span>
                    </div>
                    <div className={styles.pipeConnector} />
                    <div className={`${styles.pipeStep} ${styles.pipeActive}`}>
                      <span className={styles.pipeDot}>★</span>
                      <span>Opportunity</span>
                    </div>
                  </div>
                )}

                {agent.visualType === "support" && (
                  <div className={styles.supportWidget}>
                    <div className={styles.supportQuery}>
                      <span>💬 &quot;Do you offer emergency AC repair?&quot;</span>
                    </div>
                    <div className={styles.kbMatch}>
                      <span>⚡ Knowledge Base verified: Yes (24/7)</span>
                    </div>
                  </div>
                )}

                {agent.visualType === "followup" && (
                  <div className={styles.multichannelWidget}>
                    <span className={styles.channelIconPill} title="Voice Call">Call</span>
                    <span className={styles.syncArrow}>→</span>
                    <span className={styles.channelIconPill} title="SMS Text">SMS</span>
                    <span className={styles.syncArrow}>→</span>
                    <span className={styles.channelIconPill} title="Email">Email</span>
                    <span className={styles.syncArrow}>→</span>
                    <span className={styles.channelIconPill} title="WhatsApp">WA</span>
                  </div>
                )}
              </div>

              {/* Hover / Expanded Capabilities, Channels & Integrations */}
              <div className={styles.hoverDetails}>
                <div className={styles.metaGroup}>
                  <span className={styles.metaLabel}>Capabilities</span>
                  <div className={styles.tagPills}>
                    {agent.capabilities.map((cap, i) => (
                      <span key={i} className={styles.tagPill}>{cap}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.metaGroup}>
                  <span className={styles.metaLabel}>Channels</span>
                  <div className={styles.tagPills}>
                    {agent.channels.map((ch, i) => (
                      <span key={i} className={styles.tagPill}>{ch}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.metaGroup}>
                  <span className={styles.metaLabel}>Integrations</span>
                  <div className={styles.tagPills}>
                    {agent.integrations.map((itg, i) => (
                      <span key={i} className={styles.tagPill}>{itg}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomCtaRow}>
          <Link href="#contact" className={styles.ctaButton}>
            Explore AI Agents
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
