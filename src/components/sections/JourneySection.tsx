import styles from "./JourneySection.module.css";

const stages = [
  {
    step: "01",
    title: "Capture",
    subheading: "Sources",
    items: ["Website", "Forms", "Ads", "Calls", "Social", "Chat"],
  },
  {
    step: "02",
    title: "Respond",
    subheading: "AI Channels",
    items: ["Voice Call", "Live Chat", "Instant SMS", "WhatsApp", "Email"],
  },
  {
    step: "03",
    title: "Qualify",
    subheading: "AI Identifies",
    items: ["Caller Intent", "Location / ZIP", "Specific Need", "Budget Range", "Eligibility"],
  },
  {
    step: "04",
    title: "Convert",
    subheading: "Actions",
    items: ["Appointment Booking", "Sales Follow-Up", "Pipeline Movement", "Quote Follow-Up"],
  },
  {
    step: "05",
    title: "Retain",
    subheading: "Nurture",
    items: ["Customer Support", "Review Generation", "Re-engagement", "Targeted Upsells", "Lead Reactivation"],
  },
];

export function JourneySection() {
  return (
    <section id="customer-journey" className={styles.journeySection} aria-label="Customer Journey Automation Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Full-Funnel Automation</span>
          <h2 className={styles.heading}>
            Automate the <span className={styles.headingHighlight}>Entire Customer Journey</span>
          </h2>
          <p className={styles.supporting}>
            From the exact millisecond a lead discovers your business to post-service retention and review generation, our AI systems maintain an unbroken, automated relationship at every touchpoint.
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          {/* Animated Connecting Track */}
          <div className={styles.trackLine} aria-hidden="true">
            <span className={styles.movingLeadDot} />
          </div>

          <div className={styles.timelineGrid}>
            {stages.map((stage) => (
              <div key={stage.step} className={styles.stageCard}>
                <div className={styles.stageHeader}>
                  <span className={styles.stageNumCircle}>{stage.step}</span>
                  <div className={styles.stageTitleGroup}>
                    <span className={styles.stageLabel}>Stage {stage.step}</span>
                    <h3 className={styles.stageTitle}>{stage.title}</h3>
                  </div>
                </div>

                <span className={styles.stageSubheading}>{stage.subheading}</span>

                <div className={styles.tagsList}>
                  {stage.items.map((item, idx) => (
                    <div key={idx} className={styles.tagItem}>
                      <span className={styles.tagBullet} aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
