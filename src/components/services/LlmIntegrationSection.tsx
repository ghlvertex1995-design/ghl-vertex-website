import React from "react";
import Link from "next/link";
import styles from "./LlmIntegrationSection.module.css";

const capabilities = [
  "OpenAI Integration",
  "Claude Integration",
  "Gemini Integration",
  "LLM API Integration",
  "CRM + LLM Integration",
  "RAG & Knowledge Integration",
  "AI Agent Integration",
  "Structured Output Integration",
  "Summarization Workflows",
  "Internal AI Assistants",
  "Multi-Model Workflows",
  "Guardrails & Validation",
  "Monitoring & Cost Control",
];

const architectureSteps = [
  { step: "01", label: "Business App", sub: "Frontend or SaaS" },
  { step: "02", label: "LLM Integration Layer", sub: "Gateway & Auth", highlight: true },
  { step: "03", label: "LLM Provider", sub: "Foundation Model" },
  { step: "04", label: "RAG / Business Data", sub: "Vector & DB Context" },
  { step: "05", label: "Validation / Guardrails", sub: "Schema & Policy Check" },
  { step: "06", label: "CRM / API / Workflow Action", sub: "Downstream Action" },
];

const existingSoftwareExamples = [
  "SaaS applications",
  "Internal tools",
  "CRM systems",
  "GoHighLevel",
  "Databases",
  "REST APIs",
  "Webhooks",
  "n8n workflows",
  "Helpdesk systems",
  "Customer portals",
];

const productionCards = [
  {
    title: "Structured Outputs",
    desc: "Validate model responses before downstream systems use them.",
  },
  {
    title: "Retries & Fallbacks",
    desc: "Handle temporary provider or integration failures without breaking the entire workflow.",
  },
  {
    title: "Guardrails",
    desc: "Limit what the model can access, return, or trigger.",
  },
  {
    title: "Evaluation",
    desc: "Test outputs against realistic business scenarios before launch.",
  },
  {
    title: "Monitoring",
    desc: "Track failures, usage, latency, output quality, and cost.",
  },
  {
    title: "Human Review",
    desc: "Route sensitive or low-confidence actions to a person when appropriate.",
  },
];

const modelComparisons = [
  {
    model: "OpenAI",
    fit: "General-purpose applications, structured outputs, tool use, and AI workflows.",
  },
  {
    model: "Claude",
    fit: "Long-context and reasoning-oriented workflows.",
  },
  {
    model: "Gemini",
    fit: "Multimodal and Google ecosystem use cases.",
  },
  {
    model: "Open Models",
    fit: "Use cases requiring greater deployment or infrastructure control.",
  },
];

export function LlmIntegrationSection() {
  return (
    <section className={styles.section} id="llm-integration" aria-labelledby="llm-integration-heading">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>LLM INTEGRATION</span>
          <h2 id="llm-integration-heading" className={styles.heading}>
            LLM Integration Services for Existing Business Systems
          </h2>
          <p className={styles.supportingCopy}>
            GHLVertex helps businesses connect large language models with the software, data, and workflows they already use. We can integrate suitable LLMs with applications, CRM platforms, databases, APIs, knowledge systems, and automation workflows so AI can work with real business context instead of operating as a standalone tool.
          </p>
        </div>

        {/* Direct Answer Block */}
        <div className={styles.answerCard}>
          <h3 className={styles.answerHeading}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            What Are LLM Integration Services?
          </h3>
          <p className={styles.answerText}>
            LLM integration services connect large language models with existing software, business data, APIs, CRM systems, and workflows. A production-ready integration can include model selection, prompt and output design, authentication, retrieval, validation, guardrails, monitoring, and cost control so the model can operate reliably within real business processes.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className={styles.capabilitiesGrid} role="list" aria-label="LLM Integration Capabilities">
          {capabilities.map((item, idx) => (
            <div key={idx} className={styles.capabilityCard} role="listitem">
              <svg
                className={styles.capabilityIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* LLM Integration Architecture Visual */}
        <div className={styles.visualWrapper}>
          <div className={styles.visualHeader}>
            <h3 className={styles.visualTitle}>LLM Integration Architecture Flow</h3>
            <p className={styles.visualSubtitle}>
              How live requests flow securely between business applications, LLMs, data sources, and downstream actions.
            </p>
          </div>

          <div className={styles.architectureFlow} role="img" aria-label="Architecture flow from Business App through LLM Integration Layer, LLM Provider, RAG and Validation to Downstream Actions">
            {architectureSteps.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className={`${styles.archNode} ${node.highlight ? styles.archNodeHighlight : ""}`}>
                  <span className={styles.archNodeStep}>{node.step}</span>
                  <span className={styles.archNodeLabel}>{node.label}</span>
                </div>
                {idx < architectureSteps.length - 1 && (
                  <div className={styles.archArrow} aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Subsections: LLM + RAG & LLM + AI Agents */}
        <div className={styles.dualSubsections}>
          {/* LLM + RAG */}
          <div className={styles.subsectionCard}>
            <h3 className={styles.subsectionTitle}>Connect LLMs to Your Business Knowledge with RAG</h3>
            <p className={styles.subsectionCopy}>
              When an LLM needs current, private, or company-specific information, Retrieval-Augmented Generation can retrieve relevant knowledge before the model generates a response or takes an action. This helps the system work with business documents, databases, CRM data, policies, support content, and other approved knowledge sources.
            </p>
            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>Knowledge Retrieval Pipeline</span>
              <div className={styles.flowStepsRow}>
                <span className={styles.flowStepPill}>Documents / CRM / Database / Knowledge Base</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>Retrieval</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>Relevant Context</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>LLM</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>Response or Action</span>
              </div>
            </div>
            <Link href="/services/rag-development-services/" className={styles.contextualLink}>
              <span>Explore RAG Development Services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* LLM + AI Agents */}
          <div className={styles.subsectionCard}>
            <h3 className={styles.subsectionTitle}>Turn LLMs Into Tool-Using AI Agents</h3>
            <p className={styles.subsectionCopy}>
              LLMs can become more operational when they are connected to approved tools and workflows. An AI agent may use an LLM to understand context, select an allowed tool, retrieve information, update a CRM, trigger a workflow, or complete another bounded business action.
            </p>
            <div className={styles.flowBox}>
              <span className={styles.flowLabel}>Autonomous Execution Loop</span>
              <div className={styles.flowStepsRow}>
                <span className={styles.flowStepPill}>Request</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>LLM / Agent</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>Tool Selection</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>Permission Check</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>CRM / API / Calendar / Database</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>Action</span>
                <span className={styles.flowArrowInline} aria-hidden="true">→</span>
                <span className={styles.flowStepPill}>Result</span>
              </div>
            </div>
            <Link href="/services/ai-agent-development-services/" className={styles.contextualLink}>
              <span>Explore AI Agent Development Services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Existing Software Integration */}
        <div className={styles.blockSection}>
          <h3 className={styles.blockTitle}>Add LLM Capabilities Without Rebuilding Your Existing Software</h3>
          <p className={styles.blockCopy}>
            LLM integration can add AI functionality to existing applications and business systems without requiring a complete rebuild. Depending on the use case, GHLVertex can connect LLM capabilities to SaaS products, internal tools, CRM platforms, databases, customer portals, APIs, automation platforms, and workflow systems.
          </p>
          <div className={styles.tagCloud} role="list" aria-label="Supported Integration Targets">
            {existingSoftwareExamples.map((example, idx) => (
              <span key={idx} className={styles.tagPill} role="listitem">
                {example}
              </span>
            ))}
          </div>
          <Link href="/services/ai-automation-services/" className={styles.contextualLink}>
            <span>View Our AI Automation Services</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Production-Ready LLM Integration (6 cards) */}
        <div className={styles.blockSection}>
          <h3 className={styles.blockTitle}>From LLM API Call to Production-Ready Integration</h3>
          <p className={styles.blockCopy}>
            Direct API scripting breaks down when scaled. A production integration requires rigorous architectural safeguards to handle latency, validation, and failure states smoothly.
          </p>
          <div className={styles.productionGrid}>
            {productionCards.map((card, idx) => (
              <div key={idx} className={styles.productionCard}>
                <div className={styles.productionCardTitle}>
                  <svg
                    className={styles.productionCardIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>{card.title}</span>
                </div>
                <p className={styles.productionCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Model Selection Section */}
        <div className={styles.blockSection}>
          <h3 className={styles.blockTitle}>Which LLM Should You Integrate?</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.modelTable}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: "25%" }}>Model Family</th>
                  <th scope="col">Potential Business Fit</th>
                </tr>
              </thead>
              <tbody>
                {modelComparisons.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.modelName}>{row.model}</td>
                    <td>{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.modelNote}>
            The right model depends on the use case, quality requirements, latency, cost, privacy needs, context size, and tool-use requirements. Do not select a model based on brand preference alone. Connect with our{" "}
            <Link href="/services/ai-consulting-services/" style={{ color: "var(--brand-primary)", fontWeight: 600 }}>
              AI consulting services
            </Link>{" "}
            or explore{" "}
            <Link href="/services/custom-ai-development/" style={{ color: "var(--brand-primary)", fontWeight: 600 }}>
              custom AI development
            </Link>{" "}
            to benchmark and select the optimal model for your infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
