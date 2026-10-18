import styles from "./BusinessOutcomes.module.css";

export interface OutcomeItem {
  metricLabel: string;
  focusArea: string;
  description: string;
}

interface BusinessOutcomesProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  outcomes: OutcomeItem[];
}

export function BusinessOutcomes({
  eyebrow = "Quantifiable Impact",
  heading = "Measurable Operational Improvements",
  subtitle = "Our implementations focus on realistic, high-impact business outcomes that streamline operations and increase revenue velocity without inflating headcount.",
  outcomes,
}: BusinessOutcomesProps) {
  return (
    <section className={styles.section} aria-labelledby="outcomes-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="outcomes-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {outcomes.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <span className={styles.focusArea}>{item.focusArea}</span>
              <h3 className={styles.metricLabel}>{item.metricLabel}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
