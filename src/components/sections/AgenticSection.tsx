import styles from "./AgenticSection.module.css";

const traditionalSteps = [
  { title: "Trigger", meta: "Static Webhook / Form Submit" },
  { title: "If / Else Condition", meta: "Rigid binary true/false rule" },
  { title: "Fixed Workflow", meta: "Pre-written template message" },
  { title: "Single Action", meta: "Email ping without verification" },
];

const agenticNodes = [
  { title: "Goal", tag: "Objective-Driven", icon: "◎" },
  { title: "Understand Context", tag: "CRM + History", icon: "🧠" },
  { title: "Decide Next Step", tag: "Adaptive Reasoning", icon: "⚡" },
  { title: "Use Tools & APIs", tag: "Calendar, Dialer, DB", icon: "🛠" },
  { title: "Take Autonomous Action", tag: "Dispatches & Books", icon: "🚀" },
  { title: "Update CRM Memory", tag: "Live Synchronization", icon: "🔄" },
  { title: "Escalate When Needed", tag: "Seamless Human Handoff", icon: "🛡" },
];

const agenticCapabilities = [
  "Read lead details & source attribution",
  "Check prior conversation history",
  "Ask intelligent qualification questions",
  "Determine lead quality & urgency",
  "Check live technician calendar",
  "Book confirmed appointment slot",
  "Update CRM contact & pipeline stages",
  "Send SMS & email confirmation",
  "Notify sales team via Slack / Mobile app",
];

export function AgenticSection() {
  return (
    <section id="agentic-ai" className={styles.agenticSection} aria-label="Agentic AI Differentiation Section">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Beyond Traditional Automation</span>
          <h2 className={styles.heading}>
            Automation That Can{" "}
            <span className={styles.headingHighlight}>Think, Decide and Act</span>
          </h2>
          <p className={styles.supporting}>
            Traditional workflows follow predefined rules and break when a customer deviates. Agentic systems understand intent, evaluate context, choose the optimal next action, and interact with your software tools to achieve business goals.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className={styles.comparisonGrid}>
          {/* Left: Traditional Automation */}
          <div className={styles.traditionalCol}>
            <div className={styles.colHeader}>
              <span className={styles.colBadgeMuted}>Legacy Systems</span>
              <h3 className={styles.colTitleMuted}>Traditional Automation</h3>
              <p className={styles.colDescMuted}>
                Rigid, linear 'if-this-then-that' rules. Cannot adapt to unexpected questions or nuanced responses.
              </p>
            </div>

            <div className={styles.traditionalFlow}>
              {traditionalSteps.map((step, idx) => (
                <div key={idx} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className={styles.tradStepCard}>
                    <div className={styles.tradStepContent}>
                      <span className={styles.tradStepNum}>0{idx + 1}</span>
                      <span className={styles.tradStepTitle}>{step.title}</span>
                    </div>
                    <span className={styles.tradStepMeta}>{step.meta}</span>
                  </div>
                  {idx < traditionalSteps.length - 1 && (
                    <span className={styles.flowArrowDown}>↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Agentic AI System */}
          <div className={styles.agenticCol}>
            <div className={styles.colHeader}>
              <span className={styles.colBadgeActive}>
                <span>★</span> The GHLVertex Standard
              </span>
              <h3 className={styles.colTitleActive}>Agentic AI System</h3>
              <p className={styles.colDescActive}>
                Autonomous, goal-oriented decision making. Evaluates real-time state, queries tools, and completes complex sequences.
              </p>
            </div>

            <div className={styles.agenticNetwork}>
              {agenticNodes.map((node, idx) => (
                <div key={idx} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div className={styles.agenticNode}>
                    <div className={styles.nodeLeft}>
                      <span className={styles.nodeIconBox}>{node.icon}</span>
                      <span className={styles.nodeTitle}>{node.title}</span>
                    </div>
                    <span className={styles.nodeTag}>{node.tag}</span>
                  </div>
                  {idx < agenticNodes.length - 1 && (
                    <span className={styles.nodeConnector}>↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-World Concrete Walkthrough Box */}
        <div className={styles.exampleBox}>
          <div className={styles.exampleHeader}>
            <div className={styles.goalBadge}>
              <span className={styles.goalPill}>Real Scenario</span>
              <span>Goal: Convert Inbound Lead Into a Booked Appointment</span>
            </div>
            <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>
              Autonomous 9-Step Execution Chain
            </span>
          </div>

          <div className={styles.actionPillsGrid}>
            {agenticCapabilities.map((cap, i) => (
              <div key={i} className={styles.actionPillItem}>
                <span className={styles.pillCheck}>✓</span>
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
