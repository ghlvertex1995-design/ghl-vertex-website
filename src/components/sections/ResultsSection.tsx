import styles from "./ResultsSection.module.css";

const systemTasks = [
  "Handled 100% of incoming daytime & after-hours calls",
  "Qualified caller intent, service emergency & geographic location",
  "Booked confirmed technician appointments directly into calendar",
  "Automated multi-touch follow-up via voice call, SMS & email",
];

const metrics = [
  {
    value: "+42%",
    label: "Booked Appointments",
    subtext: "Increased conversion from inbound callers",
  },
  {
    value: "< 30s",
    label: "Faster Response Time",
    subtext: "Instant engagement on every inbound channel",
  },
  {
    value: "120+ hrs",
    label: "Saved Monthly",
    subtext: "Eliminated repetitive front-desk admin work",
  },
  {
    value: "3.8x",
    label: "More Leads Contacted",
    subtext: "Zero abandoned inquiries or missed calls",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className={styles.resultsSection} aria-label="Business Outcomes and Results Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Results</span>
          <h2 className={styles.heading}>
            AI Is Valuable When It{" "}
            <span className={styles.headingHighlight}>Produces Business Outcomes</span>
          </h2>
          <p className={styles.supporting}>
            We design every agentic workflow with direct commercial impact in mind: more booked appointments, faster lead response, and lower operational overhead.
          </p>
        </div>

        <div className={styles.outcomeCard}>
          {/* Left: Business Context */}
          <div className={styles.contextCol}>
            <span className={styles.contextBadge}>Sample Workflow & Performance Benchmark</span>
            <h3 className={styles.contextTitle}>
              Home Services AI Workforce Implementation
            </h3>
            <p className={styles.contextDesc}>
              A representative deployment featuring an inbound AI Receptionist integrated with GoHighLevel CRM and automated dispatch workflows.
            </p>

            <div className={styles.taskList}>
              {systemTasks.map((task, idx) => (
                <div key={idx} className={styles.taskItem}>
                  <span className={styles.taskCheck}>✓</span>
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quantifiable Metrics */}
          <div className={styles.metricsGrid}>
            {metrics.map((m, idx) => (
              <div key={idx} className={styles.metricBlock}>
                <span className={styles.metricNumber}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
                <span className={styles.metricSub}>{m.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
