import styles from "./UseCaseGrid.module.css";

export interface UseCaseItem {
  scenarioTitle: string;
  trigger: string;
  orchestration: string;
  outcome: string;
}

interface UseCaseGridProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  useCases: UseCaseItem[];
}

export function UseCaseGrid({
  eyebrow = "Practical Scenarios",
  heading,
  subtitle,
  useCases,
}: UseCaseGridProps) {
  return (
    <section className={styles.section} aria-labelledby="usecases-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="usecases-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {useCases.map((uc, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.badge}>Scenario 0{idx + 1}</span>
                <h3 className={styles.scenarioTitle}>{uc.scenarioTitle}</h3>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.label}>1. Operational Trigger:</span>
                <p className={styles.val}>{uc.trigger}</p>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.label}>2. System Orchestration:</span>
                <p className={styles.val}>{uc.orchestration}</p>
              </div>

              <div className={styles.outcomeRow}>
                <span className={styles.outcomeLabel}>3. Business Outcome:</span>
                <p className={styles.outcomeVal}>{uc.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
