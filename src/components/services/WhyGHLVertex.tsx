import styles from "./WhyGHLVertex.module.css";

export interface WhyReason {
  title: string;
  description: string;
}

interface WhyGHLVertexProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  reasons: WhyReason[];
}

export function WhyGHLVertex({
  eyebrow = "Why Choose Us",
  heading = "Built by Engineers Who Understand CRM & Enterprise AI",
  subtitle = "We bridge the gap between deep GoHighLevel operational architecture and state-of-the-art AI systems, delivering reliable systems tailored to your business.",
  reasons,
}: WhyGHLVertexProps) {
  return (
    <section className={styles.section} aria-labelledby="why-ghlvertex-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="why-ghlvertex-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconCircle} aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0148A3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
