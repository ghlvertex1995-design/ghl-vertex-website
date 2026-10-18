import type { Metadata } from "next";
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
  ProblemGrid,
  ServiceFeatures,
  WorkflowDiagram,
  ComparisonTable,
  UseCaseGrid,
  GovernanceSection,
  ProcessSteps,
  BusinessOutcomes,
  WhyGHLVertex,
  RelatedServices,
  FaqAccordion,
  ServiceCta,
} from "@/components/services";

export const metadata: Metadata = {
  title: "AI Automation Services | Intelligent Business Process Automation",
  description:
    "Production-grade AI automation services. We engineer intelligent systems combining LLMs, GoHighLevel, n8n, and custom APIs to automate complex business operations.",
  alternates: {
    canonical: "/services/ai-automation-services/",
  },
  openGraph: {
    title: "AI Automation Services: Intelligent Business Systems | GHLVertex",
    description:
      "Transform unstructured business chaos into automated efficiency. We build AI-powered CRM workflows, automated lead triage, and operations pipelines with human safeguards.",
    url: `${siteConfig.url}/services/ai-automation-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "AI Automation Services", href: "/services/ai-automation-services/" },
];

const faqs = [
  {
    question: "What are AI automation services?",
    answer:
      "AI automation services engineer smart systems that combine artificial intelligence models with deterministic workflow automation to execute complex operational tasks. While traditional automation strictly follows rigid rules, AI automation interprets unstructured data, generates contextual customer responses, classifies incoming inquiries, and updates internal records autonomously while preserving human checkpoints for high-risk decisions.",
  },
  {
    question: "How is AI automation different from traditional workflow automation?",
    answer:
      "Traditional workflow automation is rigid: if a customer uses an unexpected synonym or enters messy text, the automation errors out. AI automation incorporates Large Language Models (LLMs) to understand conversational intent, parse messy email attachments, extract key parameters, and then execute precise deterministic actions in your CRM and operational tools.",
  },
  {
    question: "What types of business processes can be automated with AI?",
    answer:
      "High-ROI use cases include inbound customer lead triage, automated email response drafting, invoice and contract PDF parsing, conversational calendar scheduling, customer support inquiry categorization, sentiment analysis, and CRM pipeline status updates.",
  },
  {
    question: "How do you prevent the AI from hallucinating or sending inaccurate messages to customers?",
    answer:
      "We implement strict Grounded Generation (RAG) architectures: the AI is strictly constrained to your verified company SOPs and product documentation with temperature settings tuned for precision. Furthermore, high-stakes messages or outbound emails are queued for 1-click human review before sending.",
  },
  {
    question: "Which LLMs and software platforms do you connect?",
    answer:
      "We orchestrate leading commercial models (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini) with your operational tools (GoHighLevel, n8n, Stripe, PostgreSQL, Slack, Google Workspace, and proprietary REST APIs).",
  },
  {
    question: "How do you handle sensitive customer data and privacy in AI automations?",
    answer:
      "We utilize enterprise zero-retention API contracts ensuring your business data is never logged or used to train public foundation models. Where necessary, automated preprocessing nodes redact PII before prompts are passed to LLM inference endpoints.",
  },
  {
    question: "What is the typical development and deployment timeline?",
    answer:
      "A focused AI automation pipeline (such as an automated lead triage and response engine) typically deploys within 10 to 14 business days. Enterprise cross-system orchestrations spanning multiple departments take between 3 to 5 weeks.",
  },
  {
    question: "Can these automations trigger actions inside our GoHighLevel CRM?",
    answer:
      "Yes. That is our core specialty. We write bi-directional connectors that allow the AI to read customer context from GHL, classify the conversation, apply tags, move pipeline stages, and update custom fields dynamically.",
  },
  {
    question: "What ongoing maintenance is required for AI automation pipelines?",
    answer:
      "We provide continuous observability retainers: monitoring token usage, tracking model response latency, reviewing edge-case logs, and fine-tuning prompts as your business offerings and SOPs evolve.",
  },
];

export default function AiAutomationServicesPage() {
  const currentUrl = "/services/ai-automation-services/";
  const pageSchema = getWebPageSchema({
    title: "AI Automation Services | Intelligent Business Process Automation",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "AI Automation Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Intelligent Process Automation & AI Engineering",
  });
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const faqSchema = getFaqSchema(faqs);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 01. Hero */}
      <ServiceHero
        eyebrow="Intelligent Process Automation"
        h1="AI Automation Services: Intelligent Systems That Streamline Business Operations"
        description="We engineer resilient AI automation systems that understand unstructured business data, reason through complex customer inquiries, and execute multi-step workflows across your CRM, databases, and operational software."
        primaryCtaText="See What We Can Automate"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore Core AI Capabilities"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Growing Businesses, Operations Directors & Enterprise Teams"
        outcomeText="Instant Lead Triage, Reclaimed Staff Hours & Error-Free System Orchestration"
        diagramTitle="Intelligent AI Automation Execution Loop"
        flowSteps={[
          { label: "Unstructured Data Ingestion", sublabel: "Email, Webhook, Voice or PDF Upload" },
          { label: "Contextual LLM Reasoning", sublabel: "Intent Classification & Entity Extraction" },
          { label: "Deterministic Validation", sublabel: "Business Rule Verification & Safety Checks" },
          { label: "Automated Tool Execution", sublabel: "GHL Pipeline Move, Stripe Sync & Calendar Book" },
          { label: "Human Verification Queue", sublabel: "Audit Trail & Exception Routing" },
        ]}
        highlights={[
          "Hybrid LLM + Deterministic Logic",
          "Automated PDF & Email Ingestion",
          "Deep GoHighLevel & n8n Sync",
          "Enterprise Data Privacy Standards",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What are AI automation services?"
        answer="AI automation services engineer smart systems that combine artificial intelligence models with deterministic workflow automation to execute complex operational tasks. While traditional automation strictly follows rigid rules, AI automation interprets unstructured data, generates contextual customer responses, classifies incoming inquiries, and updates internal records autonomously while preserving human checkpoints for high-risk decisions."
        keyTakeaways={[
          "Combines probabilistic language understanding with bulletproof deterministic execution.",
          "Extracts structured data from messy PDFs, voice notes, emails, and conversational SMS threads.",
          "Eliminates hours of manual data entry while maintaining 100% human oversight for edge cases.",
          "Integrates natively into core platforms: GoHighLevel, n8n, Stripe, PostgreSQL, and team communication hubs.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Supported Foundation Models & Infrastructure"
        technologies={[
          "OpenAI (GPT-4o)",
          "Anthropic Claude 3.5 Sonnet",
          "n8n Workflow Engine",
          "GoHighLevel (LeadConnector)",
          "LangChain / LlamaIndex",
          "PostgreSQL / Vector DBs",
          "Twilio / WhatsApp Business",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The Unstructured Data Problem"
        heading="Why Traditional No-Code Tools Break Down on Real Business Tasks"
        subtitle="Standard automation breaks the moment a human customer doesn't follow an exact script. AI automation bridges the gap between messy reality and reliable databases."
        problems={[
          {
            title: "Rigid 'If/Else' Rules Break on Real Conversations",
            description:
              "A lead types 'Can we do Tuesday after lunch?' instead of selecting a form dropdown, causing traditional automated systems to freeze.",
            consequence: "Opportunities stall in limbo until an overloaded employee manually re-reads the thread.",
          },
          {
            title: "Hours Wasted Manually Copying Unstructured Docs",
            description:
              "Staff members spend 10+ hours a week reading supplier invoices, customer intake forms, or scanned PDFs to retype data into CRMs.",
            consequence: "High labor costs, frequent typographical errors, and slow client turnaround times.",
          },
          {
            title: "Unvetted AI Chatbots Hallucinating False Info",
            description:
              "Deploying generic consumer AI bots without strict knowledge grounding leads to fabricated pricing quotes and false commitments.",
            consequence: "Severe legal exposure and damaged customer trust.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="What We Build"
        heading="End-to-End AI Automation Implementation Scope"
        subtitle="Production-grade AI solutions tailored to solve specific operational bottlenecks."
        features={[
          {
            title: "Intelligent Lead Triage & Speed-to-Lead",
            description:
              "Analyzing incoming lead inquiries in real time to assess urgency, budget, intent, and ideal routing.",
            deliverables: [
              "Multi-channel ingestion (Website forms, SMS, Email, Inbound Phone)",
              "Contextual lead qualification scoring via GPT-4o or Claude 3.5",
              "Automated calendar booking link dispatch tailored to lead urgency",
              "Real-time SDR briefing cards sent directly to Slack with inquiry summary",
            ],
          },
          {
            title: "Automated Document & Invoice Extraction",
            description:
              "Extracting structured JSON data from messy PDFs, vendor receipts, and signed agreements.",
            deliverables: [
              "Multi-modal vision and OCR parsing for receipts, estimates, and contracts",
              "Automated line-item validation against accounting records",
              "Instant synchronization with QuickBooks, Stripe, or internal databases",
              "Automated flagging of discrepancies or unrecognized line items",
            ],
          },
          {
            title: "Conversational Support & Triage Systems",
            description:
              "Handling high-volume customer inquiries with grounded, accurate answers and human escalation.",
            deliverables: [
              "Knowledge base retrieval grounded strictly in company documentation",
              "Automated drafting of complex support email replies for staff review",
              "Sentiment detection routing frustrated customers to senior support managers",
              "Automated updating of GHL ticket statuses and custom fields",
            ],
          },
          {
            title: "CRM & Multi-App Autonomous Synchronizers",
            description:
              "Keeping your entire business stack synchronized through intelligent event listeners and webhooks.",
            deliverables: [
              "Continuous bi-directional data flow between GHL, n8n, and custom databases",
              "Automatic deduplication and normalization of customer contact data",
              "Automated generation of client onboarding workspaces upon deal close",
              "Scheduled batch processing of data health audits and stale contact archiving",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="Technical Flow"
        heading="Enterprise AI Triage & Execution Architecture"
        subtitle="How an incoming customer email is parsed, validated, and converted into structured CRM actions."
        nodes={[
          {
            phase: "Step 1: Ingestion & Sanitization",
            title: "Inbound Email Webhook Ingestion",
            description:
              "Customer sends an inquiry email with an attached PDF RFP. The email gateway receives the payload, strips malicious scripts, and extracts the plain text.",
            technicalDetails: "Inbound Webhook • PDF Parser • PII Redaction Filter",
          },
          {
            phase: "Step 2: Model Inference & Reasoning",
            title: "Intent Analysis & Entity Extraction",
            description:
              "Claude 3.5 Sonnet parses the customer's request against your service catalog, extracts budget, timeline, and location, and categorizes the intent.",
            technicalDetails: "Anthropic API • JSON Schema Enforcement • Few-Shot Grounding",
          },
          {
            phase: "Step 3: Business Logic Gate",
            title: "Deterministic Validation & Routing",
            description:
              "System verifies that the extracted budget meets minimum criteria. If valid, it assigns the lead to the regional team calendar; if sub-threshold, it queues self-serve resources.",
            technicalDetails: "n8n Conditional Switch • GHL Pipeline Assignment • Rule Verification",
          },
          {
            phase: "Step 4: Action Dispatch & Notification",
            title: "CRM Update & Personalized Response",
            description:
              "The pipeline creates an opportunity in GoHighLevel, writes the AI-generated inquiry summary to the contact timeline, and dispatches an automated SMS confirmation.",
            technicalDetails: "GHL Opportunity API • Twilio SMS Gateway • Slack Channel Ping",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Solution Comparison"
        heading="Standard Workflow Scripts vs. GHLVertex AI Automation"
        subtitle="Comparing fragile linear no-code tools against robust, intelligence-driven process automation."
        leftColumnHeader="Standard Linear Workflows"
        rightColumnHeader="GHLVertex AI-Powered Automation"
        rows={[
          {
            dimension: "Data Flexibility",
            traditional: "Only understands perfectly structured inputs from standardized web forms.",
            ghlVertex: "Processes messy emails, conversational SMS, voice transcripts, and scanned PDFs.",
          },
          {
            dimension: "Adaptability",
            traditional: "Completely breaks when a customer deviates from expected keyword choices.",
            ghlVertex: "Understands natural language intent, context, and semantic meaning effortlessly.",
          },
          {
            dimension: "Human Workload",
            traditional: "Employees must still read every message, verify attachments, and type notes.",
            ghlVertex: "AI extracts facts, drafts responses, and writes structured executive summaries for reps.",
          },
          {
            dimension: "Reliability & Safety",
            traditional: "Binary pass/fail with no understanding of nuance or sentiment.",
            ghlVertex: "Calibrated confidence scoring with automated human review queues for sensitive edge cases.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Practical Scenarios"
        heading="Real-World AI Automation Pipelines in Action"
        subtitle="Typical operational implementations designed to solve acute administrative friction."
        useCases={[
          {
            scenarioTitle: "Commercial Construction RFP Intake",
            trigger: "Contractor receives a 40-page blueprint specification PDF via email.",
            orchestration:
              "Multi-modal AI parses document, extracts scope of work, deadline, and materials checklist, verifies alignment with licensing, and populates GHL deal record.",
            outcome: "Estimators evaluate RFP viability in 5 minutes instead of reading 40 pages for 2 hours.",
          },
          {
            scenarioTitle: "After-Hours Inbound Lead Booking",
            trigger: "Prospect texts service business at 11:30 PM: 'Have an urgent burst pipe in my basement'.",
            orchestration:
              "AI analyzes urgency, tags as 'Critical Water Damage', checks on-call technician schedule, texts immediate booking confirmation, and dials on-call phone.",
            outcome: "Emergency job captured within 90 seconds without human office staff awake.",
          },
          {
            scenarioTitle: "Customer Invoicing Reconciliation",
            trigger: "Vendor emails monthly PDF invoice to accounting inbox.",
            orchestration:
              "Vision model extracts invoice number, due date, line items, and tax ID, validates against open purchase orders in database, and queues for 1-click CFO approval.",
            outcome: "Eliminates manual accounting ledger entry while maintaining human financial sign-off.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Security & Governance"
        heading="Reliable AI Systems with Built-In Human Safety Valves"
        subtitle="How we balance autonomous execution with strict operational security and human oversight."
        items={[
          {
            title: "Deterministic Validation Layers",
            description:
              "AI outputs must validate against strict JSON schemas and database constraints before any write action is permitted in your CRM.",
          },
          {
            title: "Private Enterprise Inference",
            description:
              "All LLM queries execute over enterprise API agreements that prohibit customer data retention or public model training.",
          },
          {
            title: "Automated Exception Flagging",
            description:
              "If the model's confidence score drops below 85%, the system halts autonomous execution and routes the task directly to a human specialist.",
          },
        ]}
        humanInLoopNotes={[
          "Refunds, billing adjustments, and financial transactions always require manual human approval.",
          "High-value client escalations or legal notices immediately notify management via Slack.",
          "Outbound emails in sensitive pipelines are queued as drafts awaiting 1-click human confirmation.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Our Engineering Methodology"
        heading="How We Build Production AI Automations"
        subtitle="A disciplined 4-stage sprint ensuring zero operational downtime and verified accuracy."
        steps={[
          {
            number: "01",
            timeline: "Week 1",
            title: "Workflow Mapping & Data Profiling",
            description:
              "We analyze the targeted business process, collect sample data, and establish strict accuracy and latency requirements.",
            deliverables: ["Process Logic Flowchart", "Sample Dataset Benchmark", "System Integration Spec"],
          },
          {
            number: "02",
            timeline: "Week 2",
            title: "Prompt Engineering & Pipeline Architecture",
            description:
              "We build the extraction prompts, configure few-shot grounding examples, and wire the n8n orchestration pipelines.",
            deliverables: ["Tested Prompt Templates", "Grounded RAG Pipeline", "Staging Integration Nodes"],
          },
          {
            number: "03",
            timeline: "Week 3",
            title: "Boundary Testing & Guardrail Setup",
            description:
              "We run hundreds of synthetic edge-case tests, adversarial prompts, and malformed inputs to calibrate confidence thresholds.",
            deliverables: ["Validation Test Report", "Human Review Queue Setup", "Fallback Exception Logic"],
          },
          {
            number: "04",
            timeline: "Week 4",
            title: "Production Cutover & Observability",
            description:
              "We switch live data streams, configure real-time error logging, and train your operational team with clear video runbooks.",
            deliverables: ["Live Production Deployment", "Telemetry Dashboard", "Team Video SOPs"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Measurable Results"
        heading="Realistic Operational Impact of AI Automation"
        subtitle="Supportable, verifiable business improvements achieved through intelligent process engineering."
        outcomes={[
          {
            focusArea: "Speed-to-Lead",
            metricLabel: "Sub-Minute Inquiry Triage",
            description:
              "Inbound customer inquiries are categorized, enriched with CRM context, and answered or routed within 60 seconds 24/7.",
          },
          {
            focusArea: "Labor Reallocation",
            metricLabel: "Dozens of Hours Saved Weekly",
            description:
              "Free your sales and operations personnel from mind-numbing administrative copy-pasting so they can focus on client relationships.",
          },
          {
            focusArea: "Data Cleanliness",
            metricLabel: "Standardized CRM Records",
            description:
              "Eliminate missing phone numbers, untagged records, and blank custom fields with automated AI data normalization.",
          },
          {
            focusArea: "Customer Satisfaction",
            metricLabel: "Zero Forgotten Inquiries",
            description:
              "Every single customer inquiry receives prompt, intelligent attention, eliminating dropped leads and unreturned messages.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "Deep CRM Integration Mastery",
            description:
              "We don't build isolated AI toys. We embed intelligence directly into your existing GoHighLevel, Stripe, and internal workflows.",
          },
          {
            title: "Grounded & Hallucination-Resistant",
            description:
              "Our systems are strictly grounded in your company SOPs and product data, with zero tolerance for fabricated answers.",
          },
          {
            title: "Human Oversight by Design",
            description:
              "We build guardrails and human review queues into high-stakes steps so you always maintain complete executive control.",
          },
          {
            title: "Transparent, Owned Infrastructure",
            description:
              "You own the workflows, prompts, and code. No black-box vendor lock-in or recurring proprietary seat taxes.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "Workflow Automation Services",
            href: "/services/workflow-automation-services/",
            badge: "Deterministic Logic",
            description: "High-volume business workflow design, n8n orchestration, and cross-platform API pipelines.",
          },
          {
            title: "AI Agent Development Services",
            href: "/services/ai-agent-development-services/",
            badge: "Autonomous Agents",
            description: "Custom autonomous agents with multi-turn memory, external tool usage, and complex reasoning capabilities.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "System Connectivity",
            description: "Connect leading LLMs and AI services directly to your existing enterprise databases and software tools.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Streamline Operations?"
        heading="Transform Chaotic Manual Work into Resilient AI-Powered Automations."
        subtitle="Book a technical discovery session to audit your business processes and uncover your best automation candidates."
        primaryBtnText="See What We Can Automate"
        primaryBtnHref="/#contact"
        secondaryBtnText="Explore Workflow Automation"
        secondaryBtnHref="/services/workflow-automation-services/"
      />
    </>
  );
}
