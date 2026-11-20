import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/components/seo/schema";
import {
  Breadcrumbs,
  ServiceHero,
  DirectAnswer,
  TrustStrip,
  ComparisonTable,
  GovernanceSection,
  ProcessSteps,
  WhyGHLVertex,
  RelatedServices,
  FaqAccordion,
  ServiceCta,
} from "@/components/services";
import styles from "./AiAutomationServices.module.css";

const PAGE_URL = "/services/ai-automation-services/";
const PAGE_TITLE = "AI Automation Services for Business Growth | GHLVertex";
const PAGE_DESCRIPTION =
  "Automate lead management, CRM workflows, customer support, and repetitive tasks with AI automation services from GHLVertex. Discuss your project.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.url}${PAGE_URL}`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GHLVertex AI Automation Services for Business Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
};

// Note: Breadcrumbs UI component prepends "Home" automatically; schema list includes Home explicitly.
const uiBreadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "AI Automation Services", href: PAGE_URL },
];

const schemaBreadcrumbs = [
  { label: "Home", href: "/" },
  ...uiBreadcrumbs,
];

const faqs = [
  {
    question: "What are AI automation services?",
    answer:
      "AI automation services are professional implementation services that build intelligent, reliable software systems combining modern AI models with deterministic workflow automation. While standard automation only executes rigid rules on structured form data, AI automation interprets unstructured text, classifies intent, extracts parameters from documents, drafts contextual responses, and updates connected business software—all while preserving human checkpoints for high-risk decisions.",
  },
  {
    question: "What business tasks can AI automate?",
    answer:
      "AI can automate a wide variety of repetitive operational tasks across sales, support, and administrative functions. Practical, high-ROI examples include inbound lead qualification and triage, CRM data enrichment and activity summarization, automated draft replies for customer inquiries, appointment scheduling and reschedule coordination, invoice and PDF document data extraction, support ticket routing, sentiment analysis, and multi-system data synchronization.",
  },
  {
    question: "How much does AI automation cost?",
    answer:
      "AI automation costs vary depending on the scope and complexity of your project rather than a single flat fee. Pricing factors include the number of automated workflows, the complexity of decision branching, the number of connected third-party applications, document variability, and testing requirements. In addition to GHLVertex implementation fees, businesses maintain their own software subscriptions and direct AI model inference expenses (e.g., OpenAI or Anthropic API usage). GHLVertex provides itemized scope estimates following a technical discovery session.",
  },
  {
    question: "What is the difference between AI automation and workflow automation?",
    answer:
      "Traditional workflow automation is deterministic and rule-based: it requires structured data and exact trigger matches (e.g., 'if form submitted, send email'). If an input deviates slightly, the workflow fails. AI automation adds a cognitive reasoning layer: it processes unstructured text, conversational emails, audio transcripts, or PDFs, extracts relevant data, categorizes intent, and then triggers deterministic workflow actions inside your CRM or database.",
  },
  {
    question: "Can AI automation work with an existing CRM?",
    answer:
      "Yes. A core strength of GHLVertex is integrating AI automation directly into your existing CRM infrastructure, including GoHighLevel, HubSpot, Salesforce, Pipedrive, or proprietary internal databases. We connect via official REST APIs and secure webhooks so customer interactions, tags, notes, and pipeline stages update automatically in the platforms your team already uses daily.",
  },
  {
    question: "Does AI automation require custom software?",
    answer:
      "Not necessarily. Most high-ROI business automations are built by orchestrating enterprise-grade foundation models (such as OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, or Google Gemini) with reliable workflow automation platforms like GoHighLevel, n8n, Make, or Zapier. For specialized enterprise requirements, custom lightweight API microservices or middleware can be developed to handle complex data transformation.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines depend on workflow complexity and external integration dependencies. A focused AI automation project—such as an automated inbound lead triage or document extraction pipeline—typically takes 2 to 3 weeks from discovery through testing and handoff. More comprehensive multi-department automations spanning multiple CRM pipelines, custom databases, and approval queues typically require 4 to 6 weeks.",
  },
  {
    question: "How are AI automation errors handled?",
    answer:
      "We design AI automations with defensive engineering and automated error handling. This includes strict JSON schema validation for all model outputs, calibrated confidence score thresholds, automated retries with exponential backoff for API timeouts, and fallback routing that directs ambiguous, low-confidence, or malformed inputs directly to a human review queue rather than allowing errors to propagate silently.",
  },
  {
    question: "Can AI workflows include human approvals?",
    answer:
      "Yes. Human-in-the-loop (HITL) checkpoints are an essential design principle in every GHLVertex AI automation system. High-stakes actions—such as sending contract quotes, processing refunds, altering financial records, or answering sensitive client escalations—can be routed as draft notifications to Slack, email, or a CRM task queue where a human team member must click to approve or modify before execution.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "Following production deployment, GHLVertex conducts a comprehensive team handoff with practical walkthrough documentation and video runbooks so your staff understands how to operate and monitor the system. We also provide post-launch stabilization monitoring to review execution logs, monitor token consumption, and make minor prompt calibration adjustments as real-world data flows through the pipeline.",
  },
];

const businessProcesses = [
  {
    number: "01",
    title: "Lead Routing & Inquiry Triage",
    desc: "Analyze incoming customer inquiries in real time across web forms, emails, and SMS. AI evaluates buyer intent, project scope, budget, and urgency, automatically tagging contact records and assigning opportunities to the right sales reps.",
    examples: "Inbound quote triage, geographic routing, high-value prospect alerting.",
  },
  {
    number: "02",
    title: "CRM Updates & Activity Logging",
    desc: "Eliminate manual data entry for sales and operations teams. AI reads multi-turn email threads and call notes, generates executive summaries, updates pipeline deal stages, and populates custom CRM fields automatically.",
    examples: "Call transcript summarization, deal stage progression, contact field enrichment.",
  },
  {
    number: "03",
    title: "Follow-Up Assistance & Draft Generation",
    desc: "Speed up customer response times without sacrificing human judgment. The system drafts personalized, context-aware email and SMS responses grounded in your verified service documentation, ready for one-click staff approval.",
    examples: "Pre-meeting questionnaires, detailed proposal follow-ups, quote check-ins.",
  },
  {
    number: "04",
    title: "Appointment Coordination & Scheduling",
    desc: "Handle multi-turn scheduling requests without friction. AI understands natural language availability ('Can we do next Thursday after 2 PM?'), verifies real-time calendar availability, books appointments, and sends confirmations.",
    examples: "Consultation booking, reschedule coordination, after-hours booking recovery.",
  },
  {
    number: "05",
    title: "Customer Support Triage & Classification",
    desc: "Categorize incoming support tickets by urgency, product category, and customer sentiment. High-priority or frustrated inquiries escalate immediately to senior staff, while routine FAQs receive grounded, verified draft responses.",
    examples: "Ticket sentiment detection, urgent bug routing, FAQ draft generation.",
  },
  {
    number: "06",
    title: "Data Classification & Document Processing",
    desc: "Extract structured data from unstructured business documents. Multi-modal AI parses PDFs, vendor receipts, contracts, and scanned forms, converting line items and metadata into clean JSON ready for database sync.",
    examples: "Invoice data extraction, signed agreement archiving, vendor estimate parsing.",
  },
  {
    number: "07",
    title: "Operational Reporting & Data Summaries",
    desc: "Synthesize disparate business data into actionable executive insights. AI aggregates weekly pipeline movements, outstanding tickets, and sales activity logs into clear executive digests delivered directly to Slack or email.",
    examples: "Weekly executive summaries, missed SLA digests, pipeline velocity reports.",
  },
  {
    number: "08",
    title: "Internal Team Operations & Handoffs",
    desc: "Connect sales wins directly to project fulfillment. When an opportunity reaches 'Closed Won', AI parses closed deal notes, creates client project workspaces, drafts kickoff communications, and assigns onboarding tasks to account managers.",
    examples: "New client workspace setup, onboarding task creation, handover briefs.",
  },
];

const solutions = [
  {
    badge: "Sales Operations",
    title: "AI Lead Qualification & Speed-to-Lead Automation",
    summary:
      "Capture inbound buyer intent instantly, enrich CRM records, and schedule qualified consultations before prospects turn to competitors.",
    problem:
      "Sales reps spend hours reading vague web inquiries, manually qualifying leads, and trading back-and-forth emails to schedule discovery calls.",
    workflow:
      "When a lead submits a form or email, AI analyzes project parameters, scores intent, creates an opportunity in GoHighLevel, and dispatches a personalized booking invite via SMS.",
    oversight:
      "Leads with enterprise budgets or non-standard requirements trigger an immediate Slack alert to the sales director for direct VIP outreach.",
    benefit:
      "Sub-minute response times, zero dropped inquiries, and sales reps who spend their time speaking with qualified buyers instead of copy-pasting notes.",
  },
  {
    badge: "Customer Support",
    title: "AI Support Triage & Grounded Draft Assistance",
    summary:
      "Resolve customer questions rapidly with AI-generated draft responses grounded strictly in your company SOPs and product documentation.",
    problem:
      "Support teams face repetitive tickets, slow response times during peak hours, and inconsistent answers when onboarding new support reps.",
    workflow:
      "Inbound tickets are categorized by intent and sentiment. AI searches your verified knowledge base, drafts an accurate reply, and updates ticket status.",
    oversight:
      "Draft replies sit in your helpdesk queue for one-click staff review, editing, and approval before dispatching to the customer.",
    benefit:
      "Dramatically reduced ticket resolution times, consistent brand voice, and complete prevention of AI hallucinations or inaccurate promises.",
  },
  {
    badge: "Back-Office Operations",
    title: "Automated Document Extraction & Multi-System Sync",
    summary:
      "Transform messy PDFs, invoices, and supplier estimates into structured database records without manual keyboard entry.",
    problem:
      "Accounting and operations staff waste 10 to 15 hours each week reading invoices and manually re-typing line items into accounting and CRM platforms.",
    workflow:
      "Inbound PDF attachments are processed through vision OCR models, extracting invoice numbers, line items, dates, and amounts into validated JSON.",
    oversight:
      "Line items are checked against existing database purchase orders; any price discrepancies over 5% are flagged for financial manager review.",
    benefit:
      "Elimination of manual transcription errors, instant cross-system reconciliation with Stripe or QuickBooks, and rapid invoice turnaround.",
  },
];

const implementationStages = [
  {
    number: "01",
    timeline: "Stage 1",
    title: "Discovery & Feasibility Assessment",
    description:
      "We analyze your current manual workflows, collect sample inputs (emails, forms, PDFs), evaluate system access, and determine technical feasibility.",
    deliverables: [
      "Process Feasibility Brief",
      "Input Data Review",
      "Scope & ROI Metrics",
    ],
  },
  {
    number: "02",
    timeline: "Stage 2",
    title: "Business Process Mapping",
    description:
      "We map the end-to-end process sequence—defining exactly where AI models extract data, where deterministic logic routes tasks, and where human approvals occur.",
    deliverables: [
      "Process Flow Blueprint",
      "Decision Gate Definitions",
      "Data Schema Mapping",
    ],
  },
  {
    number: "03",
    timeline: "Stage 3",
    title: "Workflow & Guardrail Design",
    description:
      "We engineer prompt templates, configure few-shot examples, define strict JSON output schemas, and set calibrated confidence thresholds for human escalation.",
    deliverables: [
      "Engineered Prompts & Templates",
      "Structured Output Schemas",
      "Human Review UI Specs",
    ],
  },
  {
    number: "04",
    timeline: "Stage 4",
    title: "System Implementation & Configuration",
    description:
      "We build the pipeline in your automation environment (GoHighLevel, n8n, Make), connect AI model APIs, configure webhooks, and integrate CRM databases.",
    deliverables: [
      "Configured Workflow Pipelines",
      "Active API & Webhook Nodes",
      "Staged Database Connectors",
    ],
  },
  {
    number: "05",
    timeline: "Stage 5",
    title: "Quality Assurance & Edge Testing",
    description:
      "We run rigorous tests using synthetic inputs, adversarial edge cases, and malformed files to verify schema enforcement, error handling, and review queue routing.",
    deliverables: [
      "Edge-Case Test Results",
      "Validation Sign-Off",
      "Fallback Trigger Verification",
    ],
  },
  {
    number: "06",
    timeline: "Stage 6",
    title: "Production Deployment & Handoff",
    description:
      "We deploy the live automation pipeline, configure real-time error logging, deliver practical walkthrough runbooks, and train your staff on daily operations.",
    deliverables: [
      "Live Production System",
      "Telemetry & Monitoring Setup",
      "Video SOPs & Team Walkthrough",
    ],
  },
];

const comparisonRows = [
  {
    dimension: "1. Input Data Flexibility",
    traditional:
      "Requires rigid, perfectly formatted form fields or standardized webhooks. Fails on freeform text or attachments.",
    ghlVertex:
      "Seamlessly interprets conversational text, natural language emails, audio transcripts, and messy PDF attachments.",
  },
  {
    dimension: "2. Natural Language Understanding",
    traditional:
      "Relies on brittle exact-match keywords or regex rules. Completely breaks if a customer uses an unexpected synonym.",
    ghlVertex:
      "Leverages modern frontier LLMs to understand conversational nuance, buyer context, customer sentiment, and intent.",
  },
  {
    dimension: "3. Content & Draft Generation",
    traditional:
      "Limited to static merge tags ('Hi {{first_name}}') with rigid, robotic placeholder templates.",
    ghlVertex:
      "Drafts comprehensive, personalized responses synthesizing multi-turn conversation history and verified company documentation.",
  },
  {
    dimension: "4. Document & Invoice Processing",
    traditional:
      "Requires fixed OCR coordinate templates that break whenever a vendor adjusts a single table column or logo.",
    ghlVertex:
      "Uses multi-modal vision and semantic parsing to extract line items, dates, and amounts regardless of document layout.",
  },
  {
    dimension: "5. Human Oversight Architecture",
    traditional:
      "Binary execution: actions either run fully automated without oversight, or stall completely awaiting manual intervention.",
    ghlVertex:
      "Calibrated confidence thresholds: high-confidence actions run smoothly, while ambiguous cases queue for 1-click human review.",
  },
  {
    dimension: "6. Exception & Error Resilience",
    traditional:
      "Silent workflow failures or infinite loops when unexpected data enters the execution pipeline.",
    ghlVertex:
      "Defensive architecture with JSON schema validation, exponential retry logic, and automated fallback notifications.",
  },
  {
    dimension: "7. Long-Term Maintenance",
    traditional:
      "Tangled 'spaghetti' workflows with dozens of nested 'If/Else' conditions that become impossible to manage over time.",
    ghlVertex:
      "Modular architectures with decoupled cognitive prompts and deterministic execution nodes that adapt easily as business rules evolve.",
  },
];

const supportedTools = [
  {
    category: "CRM & Platform",
    name: "GoHighLevel (LeadConnector)",
    desc: "Native integration for pipeline movements, custom values, automated SMS/email dispatch, and contact timeline activity updates.",
  },
  {
    category: "Workflow Engine",
    name: "n8n Automation Engine",
    desc: "Self-hosted or cloud node-based workflow orchestration for complex data transformations, API chaining, and private database sync.",
  },
  {
    category: "Cloud Middleware",
    name: "Make & Zapier",
    desc: "Cloud integration platforms for connecting third-party SaaS applications, cloud spreadsheets, and webhooks with AI endpoints.",
  },
  {
    category: "AI Foundation Models",
    name: "OpenAI API (GPT-4o)",
    desc: "Enterprise API integration with structured JSON outputs, multi-modal vision, and function calling for high-speed business reasoning.",
  },
  {
    category: "AI Foundation Models",
    name: "Anthropic Claude API",
    desc: "Claude 3.5 Sonnet and Haiku integration for long-context document parsing, complex instruction following, and nuanced response drafting.",
  },
  {
    category: "AI Foundation Models",
    name: "Google Gemini API",
    desc: "High-throughput multi-modal processing for analyzing large batches of operational documents, video summaries, and structured data.",
  },
  {
    category: "Data & Storage",
    name: "PostgreSQL & Cloud DBs",
    desc: "Secure relational and vector databases for persisting conversation logs, embedding company documentation, and managing state.",
  },
  {
    category: "Team Communications",
    name: "Slack & Microsoft Teams",
    desc: "Real-time team notification webhooks, interactive human approval cards, and VIP prospect alerts delivered where your staff works.",
  },
];

const pricingFactors = [
  {
    title: "Workflow Complexity & Branching",
    desc: "A single linear intake workflow takes less development time than a multi-branch system coordinating several departments.",
  },
  {
    title: "Number of Connected Applications",
    desc: "Integrating two core platforms (e.g., GoHighLevel and Slack) requires fewer API mapping and authentication steps than connecting five distinct legacy databases.",
  },
  {
    title: "Data Cleanliness & Document Variability",
    desc: "Standardized digital form inputs require minimal preprocessing, while highly variable scanned vendor PDFs require multi-modal calibration and OCR validation.",
  },
  {
    title: "Model Selection & Token Volume",
    desc: "Lightweight models (GPT-4o-mini, Claude 3.5 Haiku) incur minimal API token costs, while high-volume document parsing with frontier models requires prompt optimization.",
  },
  {
    title: "Human-in-the-Loop Review Interfaces",
    desc: "Adding custom Slack interactive buttons or dedicated approval dashboards adds front-end configuration to ensure staff review is seamless.",
  },
  {
    title: "Data Security & Redaction Protocols",
    desc: "Pipelines requiring automated PII redaction, encryption, or enterprise compliance checks involve dedicated security filtering nodes.",
  },
  {
    title: "Testing, Observability & Training",
    desc: "Comprehensive edge-case testing, telemetry dashboard setup, and customized video SOPs for your team are scoped according to operational scale.",
  },
];

export default function AiAutomationServicesPage() {
  const pageSchema = getWebPageSchema({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  });
  const serviceSchema = getServiceSchema({
    name: "AI Automation Services",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    serviceType: "AI Automation Services & Intelligent Process Automation",
    areaServed: "United States",
  });
  const breadcrumbSchema = getBreadcrumbSchema(schemaBreadcrumbs, PAGE_URL);
  const faqSchema = getFaqSchema(faqs);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs items={uiBreadcrumbs} />

      {/* SECTION 1 — HERO */}
      <ServiceHero
        eyebrow="Intelligent Process Automation"
        h1="AI Automation Services for Smarter Business Operations"
        description="Reduce repetitive work and improve operational consistency with AI-powered workflows tailored to your business processes. GHLVertex helps connect AI capabilities, CRM systems, and business applications to automate practical tasks while maintaining appropriate oversight."
        primaryCtaText="Book an AI Automation Strategy Call"
        primaryCtaHref={siteConfig.links.calendly}
        secondaryCtaText="Explore AI Automation Services"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Growing Businesses, Operations Directors & Sales Teams"
        outcomeText="Faster Response Times, Reclaimed Staff Hours & Reliable System Orchestration"
        diagramTitle="Intelligent AI Automation Execution Loop"
        flowSteps={[
          { label: "Unstructured Ingestion", sublabel: "Email, Webhook, Voice or PDF Upload" },
          { label: "Contextual Reasoning", sublabel: "Intent Classification & Entity Extraction" },
          { label: "Deterministic Validation", sublabel: "Business Rule Verification & Schema Checks" },
          { label: "Automated Execution", sublabel: "CRM Updates, Calendar Booking & Alerts" },
          { label: "Human Review Queue", sublabel: "Approval Gates & Exception Routing" },
        ]}
        highlights={[
          "Hybrid LLM + Deterministic Logic",
          "Automated Document & Email Ingestion",
          "Deep GoHighLevel, n8n & API Sync",
          "Built-In Human Safety Valves",
        ]}
      />

      {/* SECTION 2 — DIRECT ANSWER */}
      <DirectAnswer
        question="What Are AI Automation Services?"
        answer="AI automation services are professional implementation services that engineer practical software systems combining artificial intelligence with workflow automation to execute repetitive operational tasks. While traditional automation relies strictly on fixed rules and structured form inputs, AI automation interprets unstructured text, classifies incoming requests, drafts contextual responses, extracts data from documents, and executes multi-step actions across your CRM and business applications while keeping human oversight for sensitive decisions."
        keyTakeaways={[
          "Combines probabilistic language understanding with bulletproof deterministic workflow execution.",
          "Extracts structured data from messy PDFs, emails, conversational SMS, and voice transcripts.",
          "Eliminates hours of manual administrative copy-pasting while preserving 100% human oversight for critical edge cases.",
          "Integrates natively into core platforms: GoHighLevel, n8n, Stripe, PostgreSQL, Slack, and cloud databases.",
        ]}
      />

      {/* Section 2 Extended Context: Business Example & Contrast */}
      <div className={styles.extendedWrap}>
        <div className="container">
          <div className={styles.extendedDirectAnswer}>
            <h3 className={styles.extendedTitle}>
              Beyond Fragile Rules: How AI Transforms Real-World Business Workflows
            </h3>
            <p className={styles.extendedParagraph}>
              Traditional business automation breaks down whenever real-world customer communication deviates from a rigid script. If a prospective client types &quot;Can we reschedule our consultation to next Tuesday afternoon?&quot; instead of clicking a designated link, a standard rule-based system stalls completely. By integrating modern large language models (such as GPT-4o, Claude 3.5 Sonnet, or Google Gemini) with robust workflow platforms, AI automation bridges the gap between conversational reality and structured databases.
            </p>
            <p className={styles.extendedParagraph}>
              Rather than replacing human staff, intelligent automation eliminates low-leverage administrative friction—enabling your team to focus on high-value client relationships and closing deals. Organizations seeking foundational workflow architecture can explore our{" "}
              <Link href="/services/workflow-automation-services/" className={styles.inlineLink}>
                workflow automation services
              </Link>
              , while teams requiring deep database and API connectivity can review our{" "}
              <Link href="/services/ai-integration-services/" className={styles.inlineLink}>
                AI integration services
              </Link>
              . For platform standards, review official developer documentation on{" "}
              <a
                href="https://marketplace.gohighlevel.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                HighLevel APIs &#8599;
              </a>{" "}
              and{" "}
              <a
                href="https://platform.openai.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                OpenAI documentation &#8599;
              </a>
              .
            </p>

            <div className={styles.exampleCallout}>
              <div className={styles.exampleTitle}>
                <span aria-hidden="true">&#9889;</span> Practical Business Automation Example
              </div>
              <p className={styles.exampleText}>
                Consider a commercial roofing contractor receiving dozens of project inquiries daily via email, web forms, and RFP specification PDFs. Instead of estimators spending 10 hours a week reading 30-page documents to manually extract square footage, materials, and bid deadlines into spreadsheets, GHLVertex deploys an AI automation workflow. The system parses the PDF, validates project criteria against the company&apos;s service parameters, creates an opportunity in GoHighLevel, generates an executive summary note for the estimator, and alerts the sales director on Slack—with human sign-off required before any quote is sent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Trust Strip */}
      <TrustStrip
        label="Supported Foundation Models, Engines & Telephony"
        technologies={[
          "OpenAI (GPT-4o & mini)",
          "Anthropic Claude 3.5 Sonnet",
          "Google Gemini Models",
          "GoHighLevel (LeadConnector)",
          "n8n Automation Engine",
          "Make & Zapier",
          "PostgreSQL & Vector DBs",
          "Twilio & Slack APIs",
        ]}
      />

      {/* SECTION 3 — BUSINESS PROCESSES YOU CAN AUTOMATE WITH AI */}
      <section
        id="service-capabilities"
        className={styles.processesSection}
        aria-labelledby="processes-heading"
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Automation Scope</span>
            <h2 id="processes-heading" className={styles.heading}>
              Business Processes You Can Automate With AI
            </h2>
            <p className={styles.subtitle}>
              From front-office speed-to-lead triage to back-office document processing, explore the practical operational tasks GHLVertex automates for growing businesses.
            </p>
          </div>

          <div className={styles.processesGrid}>
            {businessProcesses.map((process) => (
              <article key={process.number} className={styles.processCard}>
                <div className={styles.processCardHeader}>
                  <span className={styles.processIndex} aria-hidden="true">
                    {process.number}
                  </span>
                  <h3 className={styles.processTitle}>{process.title}</h3>
                </div>
                <p className={styles.processDesc}>{process.desc}</p>
                <div className={styles.processExamples}>
                  <span className={styles.processExampleLabel}>Common Applications: </span>
                  {process.examples}
                </div>
              </article>
            ))}
          </div>

          {/* Mid-Page Conversion CTA 1 */}
          <div className={styles.midCtaWrap}>
            <div className={styles.midCtaCard}>
              <div className={styles.midCtaText}>
                <h3 className={styles.midCtaHeading}>
                  Have a Repetitive Process You Want to Automate?
                </h3>
                <p className={styles.midCtaCopy}>
                  Schedule a technical discovery session to review your current workflows, software stack, and automation opportunities with our systems engineers.
                </p>
              </div>
              <div className={styles.midCtaActions}>
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.midCtaPrimary}
                >
                  Book an AI Strategy Call
                </a>
                <Link href="/contact/" className={styles.midCtaSecondary}>
                  Ask About Feasibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AI AUTOMATION SOLUTIONS FOR SALES, SUPPORT & OPERATIONS */}
      <section className={styles.solutionsSection} aria-labelledby="solutions-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Departmental Solutions</span>
            <h2 id="solutions-heading" className={styles.heading}>
              AI Automation Solutions for Sales, Support &amp; Operations
            </h2>
            <p className={styles.subtitle}>
              See how structured AI automation solves operational bottlenecks across key departments through a transparent Problem &rarr; Workflow &rarr; Oversight &rarr; Benefit framework.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            {solutions.map((item) => (
              <article key={item.title} className={styles.solutionCard}>
                <span className={styles.solutionBadge}>{item.badge}</span>
                <h3 className={styles.solutionTitle}>{item.title}</h3>
                <p className={styles.solutionSummary}>{item.summary}</p>

                <div className={styles.solutionSteps}>
                  <div className={styles.solutionStep}>
                    <span className={styles.solutionStepLabel}>Operational Problem</span>
                    {item.problem}
                  </div>
                  <div className={styles.solutionStep}>
                    <span className={styles.solutionStepLabel}>Automated Workflow</span>
                    {item.workflow}
                  </div>
                  <div className={styles.solutionStep}>
                    <span className={styles.solutionStepLabel}>Human Oversight</span>
                    {item.oversight}
                  </div>
                  <div className={styles.solutionStep}>
                    <span className={styles.solutionStepLabel}>Business Benefit</span>
                    {item.benefit}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW OUR AI AUTOMATION PROCESS WORKS */}
      <ProcessSteps
        eyebrow="Engineering Methodology"
        heading="How Our AI Automation Process Works"
        subtitle="A disciplined six-stage implementation methodology designed to deploy accurate, reliable AI workflows with zero operational disruption."
        steps={implementationStages}
      />

      {/* Visual Workflow Diagram */}
      <div className={styles.workflowVisualSection}>
        <div className="container">
          <div className={styles.workflowVisualBox}>
            <Image
              src="/images/services/ai-automation-workflow.svg"
              alt="Six-Stage AI Automation Implementation Lifecycle: Discovery, Process Mapping, Workflow Design, System Implementation, Quality Assurance, and Deployment Handoff"
              width={1200}
              height={520}
              className={styles.responsiveSvg}
            />
          </div>
          <p className={styles.workflowCaption}>
            Visual overview of GHLVertex&apos;s six-stage AI automation engineering lifecycle from initial feasibility assessment to production handoff.
          </p>
        </div>
      </div>

      {/* SECTION 6 — AI AUTOMATION VS TRADITIONAL WORKFLOW AUTOMATION */}
      <ComparisonTable
        eyebrow="Architectural Comparison"
        heading="AI Automation vs Traditional Workflow Automation"
        subtitle="Why modern businesses pair rule-based workflows with cognitive AI models to handle unstructured, conversational operations."
        leftColumnHeader="Traditional Rule-Based Workflows"
        rightColumnHeader="GHLVertex AI-Powered Automation"
        rows={comparisonRows}
      />

      {/* SECTION 7 — AI AUTOMATION TOOLS & INTEGRATIONS */}
      <section className={styles.toolsSection} aria-labelledby="tools-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Supported Technology Stack</span>
            <h2 id="tools-heading" className={styles.heading}>
              Supported AI Automation Tools and Integrations
            </h2>
            <p className={styles.subtitle}>
              We build production automations using proven platforms, foundation model APIs, and enterprise databases tailored to your business infrastructure.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            {supportedTools.map((tool) => (
              <div key={tool.name} className={styles.toolCard}>
                <span className={styles.toolCategory}>{tool.category}</span>
                <h3 className={styles.toolName}>{tool.name}</h3>
                <p className={styles.toolDesc}>{tool.desc}</p>
              </div>
            ))}
          </div>

          <p className={styles.toolsDisclaimer}>
            <strong>Independent systems engineering:</strong> GHLVertex provides implementation, integration, and architecture services across these tools as an independent systems consultancy. All trademarks belong to their respective holders, and integrations are built using documented, official public APIs.
          </p>
        </div>
      </section>

      {/* SECTION 8 — SECURITY, HUMAN OVERSIGHT & ERROR HANDLING */}
      <GovernanceSection
        eyebrow="Security & Governance"
        heading="Security, Human Oversight &amp; Error Handling"
        subtitle="How we balance autonomous execution with strict operational security, data privacy, and human safety valves."
        items={[
          {
            title: "Private Enterprise Model Inference",
            description:
              "All LLM API calls execute under enterprise commercial agreements that prohibit customer data retention or public foundation model training.",
          },
          {
            title: "Deterministic Validation & JSON Guardrails",
            description:
              "Model outputs must validate against strict JSON schemas and database constraints before any write action is permitted in your CRM.",
          },
          {
            title: "Calibrated Confidence & Fallback Routing",
            description:
              "If the model's confidence falls below defined thresholds or an input is malformed, the workflow halts autonomous execution and routes directly to human review.",
          },
        ]}
        humanInLoopNotes={[
          "Financial transactions, refunds, and pricing modifications always require manual human approval.",
          "High-value client escalations or legal notices trigger real-time management alerts on Slack.",
          "Outbound emails and sensitive customer replies are queued as drafts awaiting one-click human confirmation.",
          "Automated pre-processing filters redact sensitive PII before text is transmitted to external AI endpoints.",
        ]}
      />

      {/* SECTION 9 — PRICING & IMPLEMENTATION FACTORS */}
      <section className={styles.pricingSection} aria-labelledby="pricing-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Pricing &amp; Project Scope</span>
            <h2 id="pricing-heading" className={styles.heading}>
              What Affects AI Automation Cost and Implementation Timeline?
            </h2>
            <p className={styles.subtitle}>
              Because every business process, software stack, and data volume is unique, GHLVertex scopes implementation fees around seven concrete project factors.
            </p>
          </div>

          <div className={styles.factorsGrid}>
            {pricingFactors.map((factor) => (
              <div key={factor.title} className={styles.factorCard}>
                <h3 className={styles.factorTitle}>{factor.title}</h3>
                <p className={styles.factorDesc}>{factor.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.subscriptionNotice}>
            <h3 className={styles.subscriptionTitle}>
              Software Subscriptions &amp; Model Usage vs. Implementation Fees
            </h3>
            <p className={styles.subscriptionText}>
              Your monthly software subscriptions (such as GoHighLevel, n8n, or Make) and usage-based foundation model inference fees (billed directly by OpenAI, Anthropic, or Google) are maintained directly by your organization. GHLVertex implementation fees cover architecture, workflow design, prompt engineering, integration development, QA testing, and team handoff. Book a discovery call to receive a transparent, itemized project estimate tailored to your requirements.
            </p>
          </div>

          {/* Mid-Page Conversion CTA 2 */}
          <div className={styles.midCtaWrap}>
            <div className={styles.midCtaCard}>
              <div className={styles.midCtaText}>
                <h3 className={styles.midCtaHeading}>
                  Want a Realistic Scope &amp; Timeline Estimate?
                </h3>
                <p className={styles.midCtaCopy}>
                  Walk through your current manual bottlenecks and software stack to receive a clear feasibility plan and project timeline.
                </p>
              </div>
              <div className={styles.midCtaActions}>
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.midCtaPrimary}
                >
                  Book an AI Strategy Call
                </a>
                <Link href="/contact/" className={styles.midCtaSecondary}>
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WHY CHOOSE GHLVERTEX */}
      <WhyGHLVertex
        eyebrow="Why Choose GHLVertex"
        heading="Why Choose GHLVertex for AI Automation?"
        subtitle="We build reliable, production-grade business automations grounded in verified company data—not fragile, speculative experiments."
        reasons={[
          {
            title: "Pragmatic Hybrid Architecture",
            description:
              "We don't force AI into steps where simple logic works better. We pair deterministic workflows with cognitive AI models for optimal reliability and cost.",
          },
          {
            title: "Deep CRM & GoHighLevel Specialization",
            description:
              "We connect AI directly to where your sales reps and operations staff work every day, ensuring automated insights drive real pipeline velocity.",
          },
          {
            title: "Human Oversight by Design",
            description:
              "Every high-stakes step includes confidence thresholds, safety guardrails, and human review queues so you always maintain complete executive control.",
          },
          {
            title: "Client-Owned, Transparent Infrastructure",
            description:
              "You own the prompts, workflows, and configurations in your accounts. We believe in complete transparency without proprietary black-box vendor lock-in.",
          },
        ]}
      />

      {/* SECTION 11 — RELATED SERVICES & GUIDES */}
      <RelatedServices
        eyebrow="Connected Capabilities"
        heading="Explore Related CRM and Automation Services"
        services={[
          {
            title: "Workflow Automation Services",
            href: "/services/workflow-automation-services/",
            badge: "Deterministic Logic",
            description:
              "Multi-channel automation, custom branching logic, and error-proof CRM pipelines built by GHLVertex.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "System Connectivity",
            description:
              "Connect OpenAI, Claude, Gemini, and custom LLM endpoints directly to your business software and CRM.",
          },
          {
            title: "AI Agent Development Services",
            href: "/services/ai-agent-development-services/",
            badge: "Autonomous Agents",
            description:
              "Autonomous booking agents, sales qualification bots, and voice calling systems with tool execution.",
          },
          {
            title: "AI Chatbot Development Services",
            href: "/services/ai-chatbot-development-services/",
            badge: "Conversational AI",
            description:
              "Customer-facing chatbots for website support, lead qualification, and appointment booking.",
          },
          {
            title: "GoHighLevel Setup Services",
            href: "/services/ghl-setup-services/",
            badge: "CRM Architecture",
            description:
              "Custom sub-account setup, clean pipeline structuring, and data migration for reliable operations.",
          },
          {
            title: "AI Consulting Services",
            href: "/services/ai-consulting-services/",
            badge: "Strategic Advisory",
            description:
              "AI readiness audits, feasibility assessments, and architecture roadmaps tailored to your operations.",
          },
        ]}
      />

      {/* Related Implementation Guides Strip */}
      <div className={styles.guidesSection}>
        <div className="container">
          <div className={styles.guidesBox}>
            <div className={styles.guidesHeader}>
              <h3 className={styles.guidesTitle}>Further Reading on AI &amp; Automation</h3>
              <p className={styles.guidesSubtitle}>
                Explore our practical guides on workflow engineering, LLM integration, and AI agent architecture:
              </p>
            </div>
            <div className={styles.guidesGrid}>
              <Link
                href="/blog/gohighlevel-workflow-automation-guide/"
                className={styles.guideCard}
              >
                <span className={styles.guideTag}>Workflow Architecture</span>
                <span className={styles.guideCardTitle}>
                  GoHighLevel Workflow Automation Guide
                </span>
                <p className={styles.guideCardDesc}>
                  Master multi-branch automation logic, trigger controls, and stop-on-response guardrails.
                </p>
              </Link>
              <Link
                href="/blog/how-to-build-and-deploy-ai-agents-in-business/"
                className={styles.guideCard}
              >
                <span className={styles.guideTag}>Agent Architecture</span>
                <span className={styles.guideCardTitle}>
                  How to Build &amp; Deploy AI Agents
                </span>
                <p className={styles.guideCardDesc}>
                  Learn how autonomous agents reason, execute tools, and coordinate with CRM pipelines.
                </p>
              </Link>
              <Link
                href="/blog/llm-integration-guide-for-business-software/"
                className={styles.guideCard}
              >
                <span className={styles.guideTag}>API Integration</span>
                <span className={styles.guideCardTitle}>
                  LLM Integration Guide for Business Software
                </span>
                <p className={styles.guideCardDesc}>
                  Discover how to connect frontier LLMs to enterprise software with structured JSON schemas.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 12 — FAQ */}
      <FaqAccordion
        eyebrow="Frequently Asked Questions"
        heading="Frequently Asked Questions About AI Automation"
        subtitle="Practical, direct answers covering AI capabilities, implementation timelines, error handling, CRM integration, and human oversight."
        faqs={faqs}
      />

      {/* SECTION 13 — FINAL CTA */}
      <ServiceCta
        eyebrow="Start Your AI Automation Project"
        heading="Transform Repetitive Operations into Resilient AI Automations"
        subtitle="Schedule a 30-minute discovery session to audit your business processes, explore feasibility, and receive a tailored implementation plan."
        primaryBtnText="Book an AI Automation Strategy Call"
        primaryBtnHref={siteConfig.links.calendly}
        secondaryBtnText="Contact GHLVertex"
        secondaryBtnHref="/contact/"
      />
    </>
  );
}
