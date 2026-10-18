import styles from "./GovernanceSection.module.css";

export interface GovernanceItem {
  title: string;
  description: string;
}

interface GovernanceSectionProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  items: GovernanceItem[];
  humanInLoopNotes?: string[];
}

export function GovernanceSection({
  eyebrow = "Security, Governance & Human-in-the-Loop",
  heading = "Reliable Automation with Strict Human Safeguards",
  subtitle = "Autonomous efficiency requires rigorous controls. We build systems that know their operational boundaries, verify sensitive actions, and escalate to human operators when confidence thresholds are not met.",
  items,
  humanInLoopNotes = [
    "Financial charges, refunds, or invoice modifications require human approval.",
    "Legal commitments, contract authorizations, and account deletions are excluded from automated execution.",
    "Low-confidence model inferences trigger immediate human staff notifications.",
  ],
}: GovernanceSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="governance-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="governance-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0148A3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        {humanInLoopNotes.length > 0 && (
          <div className={styles.guardrailBox}>
            <div className={styles.guardrailHeader}>
              <span className={styles.guardrailTag}>Operational Guardrails</span>
              <h4 className={styles.guardrailTitle}>Human-in-the-Loop Policies</h4>
            </div>
            <ul className={styles.guardrailList}>
              {humanInLoopNotes.map((note, idx) => (
                <li key={idx} className={styles.guardrailItem}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
