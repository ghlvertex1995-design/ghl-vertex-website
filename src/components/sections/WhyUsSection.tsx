import styles from "./WhyUsSection.module.css";

const pillars = [
  {
    title: "Strategy First",
    desc: "Automation starts with understanding how your business actually operates — your team, bottlenecks, margin drivers, and customer expectations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: "AI + Automation",
    desc: "Agents, workflows, telephony, and CRM operate together as one unified engine instead of becoming disconnected, isolated point tools.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    title: "Built Around Revenue",
    desc: "We focus our automation systems directly on lead response speed, appointment conversion rates, and measurable operational efficiency.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Human When Needed",
    desc: "AI handles repetitive calls, FAQs, and data entry, while seamlessly transferring high-stakes or nuanced situations to your team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export function WhyUsSection() {
  return (
    <section id="why-ghlvertex" className={styles.whyUsSection} aria-label="Why Choose GHLVertex Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Why GHLVertex</span>
          <h2 className={styles.heading}>
            We Don&apos;t Build Bots.{" "}
            <span className={styles.headingHighlight}>We Build Business Systems.</span>
          </h2>
          <p className={styles.supporting}>
            The market is flooded with amateur AI chatbots that frustrate callers. We engineer robust, enterprise-grade automated infrastructure tailored to produce revenue.
          </p>
        </div>

        <div className={styles.blocksGrid}>
          {pillars.map((p, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div className={styles.iconBox} aria-hidden="true">
                {p.icon}
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
