import styles from "./ServiceFeatures.module.css";

export interface ServiceFeatureItem {
  title: string;
  description: string;
  deliverables: string[];
}

interface ServiceFeaturesProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  features: ServiceFeatureItem[];
}

export function ServiceFeatures({
  eyebrow = "Deliverables & Scope",
  heading,
  subtitle,
  features,
}: ServiceFeaturesProps) {
  return (
    <section id="service-capabilities" className={styles.section} aria-labelledby="features-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="features-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardIndex} aria-hidden="true">
                {(idx + 1).toString().padStart(2, "0")}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              
              <div className={styles.deliverablesList}>
                <span className={styles.deliverablesLabel}>What Gets Implemented:</span>
                <ul>
                  {feature.deliverables.map((item, dIdx) => (
                    <li key={dIdx}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0148A3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
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
