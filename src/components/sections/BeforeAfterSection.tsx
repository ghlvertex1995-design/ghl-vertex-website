import styles from "./BeforeAfterSection.module.css";

const beforePoints = [
  "Missed calls & lost evening inquiries",
  "Manual, slow follow-up routines",
  "Delayed responses to high-intent leads",
  "Hours lost to repetitive admin tasks",
  "CRM data inconsistencies & missing logs",
  "Warm leads falling through the cracks",
];

const afterPoints = [
  "24/7 instantaneous voice & chat response",
  "Autonomous lead qualification & screening",
  "Multi-touch automated omnichannel follow-up",
  "Instant calendar booking without friction",
  "100% clean, synced, real-time CRM records",
  "Maximum opportunities converted into pipeline",
];

export function BeforeAfterSection() {
  return (
    <section id="before-after" className={styles.beforeAfterSection} aria-label="Before vs After Comparison Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Transformation</span>
          <h2 className={styles.heading}>
            What Changes After <span className={styles.headingHighlight}>Automation?</span>
          </h2>
          <p className={styles.supporting}>
            Eliminate operational drag, reduce staff burnout, and transform your customer acquisition into a frictionless machine.
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          {/* Before Column */}
          <div className={styles.beforeCol}>
            <div className={styles.colHeader}>
              <span className={styles.beforeBadge}>Status Quo</span>
              <h3 className={styles.beforeTitle}>Before GHLVertex</h3>
            </div>

            <div className={styles.itemsList}>
              {beforePoints.map((item, idx) => (
                <div key={idx} className={styles.beforeItem}>
                  <span className={styles.crossIcon}>✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div className={styles.afterCol}>
            <div className={styles.colHeader}>
              <span className={styles.afterBadge}>★ The Automated Business</span>
              <h3 className={styles.afterTitle}>With GHLVertex</h3>
            </div>

            <div className={styles.itemsList}>
              {afterPoints.map((item, idx) => (
                <div key={idx} className={styles.afterItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
