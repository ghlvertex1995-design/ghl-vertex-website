import Link from "next/link";
import styles from "./VoiceAgentSection.module.css";

const features = [
  "Answer calls 24/7",
  "Qualify leads",
  "Book appointments",
  "Answer FAQs",
  "Transfer important calls",
  "Update CRM automatically",
  "Trigger workflows",
  "Send follow-up SMS",
];

export function VoiceAgentSection() {
  return (
    <section id="voice-agents" className={styles.voiceSection} aria-label="AI Voice Agent Flagship Service">
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left: Realistic Call Interface Visualization */}
          <div className={styles.demoCol}>
            <div className={styles.callPhoneCard}>
              {/* Call Header */}
              <div className={styles.callHeader}>
                <div className={styles.callerIdentity}>
                  <div className={styles.agentAvatar} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" x2="12" y1="19" y2="22"/>
                    </svg>
                  </div>
                  <div className={styles.identityText}>
                    <span className={styles.agentName}>AI Receptionist</span>
                    <span className={styles.callStatus}>
                      <span className={styles.livePulseDot} aria-hidden="true" />
                      Live Call • 01:43
                    </span>
                  </div>
                </div>

                <div className={styles.waveContainer} aria-label="Audio waveform active">
                  <span className={styles.waveBar} />
                  <span className={styles.waveBar} />
                  <span className={styles.waveBar} />
                  <span className={styles.waveBar} />
                </div>
              </div>

              {/* Dialogue Stream */}
              <div className={styles.dialogueStream}>
                <div className={`${styles.messageRow} ${styles.customerRow}`}>
                  <span className={styles.senderLabel}>Customer</span>
                  <div className={`${styles.bubble} ${styles.customerBubble}`}>
                    “I need someone to repair my AC tomorrow.”
                  </div>
                </div>

                <div className={`${styles.messageRow} ${styles.aiRow}`}>
                  <span className={styles.senderLabel}>AI Receptionist</span>
                  <div className={`${styles.bubble} ${styles.aiBubble}`}>
                    “Absolutely. May I know your ZIP code so I can check availability?”
                  </div>
                </div>

                <div className={`${styles.messageRow} ${styles.customerRow}`}>
                  <span className={styles.senderLabel}>Customer</span>
                  <div className={`${styles.bubble} ${styles.customerBubble}`}>
                    “78701.”
                  </div>
                </div>

                <div className={`${styles.messageRow} ${styles.aiRow}`}>
                  <span className={styles.senderLabel}>AI Receptionist</span>
                  <div className={`${styles.bubble} ${styles.aiBubble}`}>
                    “We have an opening tomorrow at 10:30 AM. Would you like me to book it?”
                  </div>
                </div>

                {/* Live Action Completed Confirmation */}
                <div className={styles.bookedCard}>
                  <div className={styles.bookedContent}>
                    <div className={styles.checkCircle} aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className={styles.bookedTextGroup}>
                      <span className={styles.bookedTitle}>Appointment Booked ✓</span>
                      <span className={styles.bookedSubtext}>Tomorrow at 10:30 AM • Technician Assigned</span>
                    </div>
                  </div>
                  <span className={styles.crmBadge}>CRM Synced</span>
                </div>
              </div>

              {/* Call Controls Simulation */}
              <div className={styles.callControls} aria-hidden="true">
                <button type="button" className={styles.controlBtn} title="Mute Microphone">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                </button>
                <button type="button" className={styles.controlBtn} title="Keypad">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h.01M12 12h.01M17 12h.01M7 16h.01M12 16h.01M17 16h.01"/>
                  </svg>
                </button>
                <button type="button" className={styles.controlBtn} title="Speaker">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  </svg>
                </button>
                <button type="button" className={`${styles.controlBtn} ${styles.endCallBtn}`} title="End Call">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Features & Value Proposition */}
          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>AI Voice Agents</span>
            
            <h2 className={styles.heading}>
              A 24/7 AI Receptionist That{" "}
              <span className={styles.headingHighlight}>Actually Takes Action</span>
            </h2>

            <p className={styles.supporting}>
              Our AI voice agents don&apos;t just answer calls. They can understand callers, qualify leads, answer questions, schedule appointments, update your CRM and trigger automated workflows.
            </p>

            <div className={styles.featuresGrid}>
              {features.map((feature, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link href="#contact" className={styles.ctaButton}>
              Explore AI Voice Agents
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
