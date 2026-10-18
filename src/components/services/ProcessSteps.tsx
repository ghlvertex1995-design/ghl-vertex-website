import styles from "./ProcessSteps.module.css";

export interface ProcessStepItem {
  number: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
}

interface ProcessStepsProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  steps: ProcessStepItem[];
}

export function ProcessSteps({
  eyebrow = "Implementation Blueprint",
  heading = "Our Structured Engineering Process",
  subtitle = "Every engagement follows a rigorous technical delivery lifecycle to ensure zero downtime, verified accuracy, and seamless handoff.",
  steps,
}: ProcessStepsProps) {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="process-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{step.number}</span>
                <span className={styles.stepTimeline}>{step.timeline}</span>
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>

              <div className={styles.deliverables}>
                <span className={styles.deliverableTag}>Milestone Deliverables:</span>
                <ul>
                  {step.deliverables.map((d, dIdx) => (
                    <li key={dIdx}>
                      <span className={styles.checkIcon} aria-hidden="true">
                        ✓
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
