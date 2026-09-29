import styles from "./ProcessSection.module.css";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We analyze your operations, inbound call patterns, lead sources, and bottlenecks to determine the highest-ROI automation opportunities.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design",
    desc: "We map out conversational flowcharts, agent decision logic, tone of voice, API tool calling, and full-funnel customer journeys.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    desc: "We construct your GoHighLevel pipelines, wire up n8n orchestration, configure telephony numbers, and link your calendar APIs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Train",
    desc: "We train your custom agents using your company SOPs, service pricing, objection scripts, FAQs, and business knowledge bases.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
        <path d="M6 6h10M6 10h10M6 14h6"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Launch",
    desc: "We deploy the system into live customer interactions with real-time human fallback, monitoring every single initial conversation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 15 2 2 4-4"/>
        <rect width="20" height="14" x="2" y="3" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "Optimize",
    desc: "We analyze sentiment, conversion rates, and call transcripts weekly to continuously refine prompts and maximize appointment bookings.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

export function ProcessSection() {
  return (
    <section id="how-it-works" className={styles.processSection} aria-label="Our Process Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Our Process</span>
          <h2 className={styles.heading}>
            From Business Process to <span className={styles.headingHighlight}>AI System</span>
          </h2>
          <p className={styles.supporting}>
            A structured, 6-step engineering methodology ensuring seamless integration, airtight reliability, and rapid time to positive ROI.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <div className={styles.stepTop}>
                <div className={styles.iconBox} aria-hidden="true">
                  {step.icon}
                </div>
                <span className={styles.stepNumber}>Step {step.num}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
