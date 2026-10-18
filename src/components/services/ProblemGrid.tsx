import styles from "./ProblemGrid.module.css";

export interface ProblemItem {
  title: string;
  description: string;
  consequence: string;
}

interface ProblemGridProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  problems: ProblemItem[];
}

export function ProblemGrid({
  eyebrow = "The Operational Friction",
  heading,
  subtitle,
  problems,
}: ProblemGridProps) {
  return (
    <section className={styles.section} aria-labelledby="problem-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="problem-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {problems.map((problem, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.warningIcon} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{problem.title}</h3>
              </div>
              <p className={styles.cardDesc}>{problem.description}</p>
              <div className={styles.impactBox}>
                <span className={styles.impactLabel}>Business Risk:</span>
                <span className={styles.impactText}>{problem.consequence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
