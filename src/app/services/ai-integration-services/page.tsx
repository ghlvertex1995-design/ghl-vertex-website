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
  title: "AI Integration Services | Connect LLMs to Business Systems",
  description:
    "Enterprise AI integration services. We securely connect AI models, agents, and LLMs directly into your CRM, databases, webhooks, and software stack.",
  alternates: {
    canonical: "/services/ai-integration-services/",
  },
  openGraph: {
    title: "AI Integration Services: Connect LLMs to Business APIs | GHLVertex",
    description:
      "Bridge foundational AI models to your real-world business tools. Secure API connectors, webhook orchestration, authentication gateways, and rate-limited queues.",
    url: `${siteConfig.url}/services/ai-integration-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "AI Integration Services", href: "/services/ai-integration-services/" },
];

const faqs = [
  {
    question: "What are AI integration services?",
    answer:
      "AI integration services embed advanced artificial intelligence capabilities directly into your company's existing tech stack, databases, and CRMs. By building secure API pipelines, webhook listeners, authentication gateways, and rate-limited queue workers, these services enable AI models and agents to read data from, and safely write actions to, tools like GoHighLevel, PostgreSQL, Slack, Stripe, and ERP software.",
  },
  {
    question: "Why can't we just use native AI plugins inside our existing tools?",
    answer:
      "Native plugins are isolated within individual tools with zero cross-system memory or custom business logic. An enterprise AI integration connects your CRM, ERP, and communication channels into one unified intelligence layer, allowing the model to make contextual decisions based on data spanning multiple systems.",
  },
  {
    question: "How do you manage API rate limits and token costs during traffic spikes?",
    answer:
      "We implement message queue workers (Redis/BullMQ or Celery) with exponential backoff retries, request debouncing, semantic caching (avoiding repeat LLM calls for identical queries), and rate-limit throttling to protect your budget and prevent API ban suspensions.",
  },
  {
    question: "How do you secure API keys and prevent data leakage?",
    answer:
      "All API credentials reside in encrypted vaults (e.g. AWS Secrets Manager). Outgoing prompts pass through automated PII redaction filters, and enterprise zero-retention API endpoints ensure your proprietary customer data is never used to train public foundation models.",
  },
  {
    question: "Can you connect AI models to legacy on-premise databases or closed ERPs?",
    answer:
      "Yes. We build secure REST or GraphQL middleware gateways that authenticate against legacy on-premise systems (via VPN or reverse proxy), translating legacy data into clean JSON schemas for LLM processing.",
  },
  {
    question: "What happens if a third-party AI provider experiences an outage?",
    answer:
      "We engineer multi-provider fallback routing: if your primary model (e.g. OpenAI GPT-4o) experiences latency spikes or downtime, the integration gateway automatically falls back to an alternative model (e.g. Anthropic Claude 3.5 Sonnet) within milliseconds without dropping user sessions.",
  },
  {
    question: "Do you integrate with GoHighLevel webhooks and native custom fields?",
    answer:
      "Yes. That is our core specialty. We build bi-directional webhook listeners that trigger AI analysis upon form submission or SMS arrival, writing structured AI outputs directly into GoHighLevel custom fields and pipeline stages.",
  },
  {
    question: "How long does a typical AI integration project take?",
    answer:
      "A targeted integration connecting an LLM to a specific CRM or database workflow typically takes 1 to 2 weeks. Comprehensive enterprise integrations involving multiple legacy databases and complex event buses take 3 to 4 weeks.",
  },
  {
    question: "How do you test and verify integration reliability before going live?",
    answer:
      "We deploy comprehensive test suites simulating malformed webhooks, network timeouts, duplicate events, and edge-case inputs to verify that error handling, queue retries, and data validation operate flawlessly.",
  },
];

export default function AiIntegrationServicesPage() {
  const currentUrl = "/services/ai-integration-services/";
  const pageSchema = getWebPageSchema({
    title: "AI Integration Services | Connect LLMs to Business Systems",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "AI Integration Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Enterprise AI System Integration & API Middleware",
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
        eyebrow="Enterprise AI System Connectivity"
        h1="Enterprise AI Integration Services: Connect LLMs to Your Existing Software Stack"
        description="We build secure, resilient API pipelines and middleware that connect foundation AI models directly to your CRM, databases, messaging channels, and internal software. Make your existing tools intelligent without rewriting your stack."
        primaryCtaText="Connect My Business Systems"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore Integration Architecture"
        secondaryCtaHref="#service-capabilities"
        targetAudience="CTOs, Systems Architects & Operations Directors"
        outcomeText="Unified Cross-Platform Intelligence & 99.9% Uptime API Reliability"
        diagramTitle="Enterprise AI Integration & Middleware Gateway"
        flowSteps={[
          { label: "Event Ingestion & Webhook Validation", sublabel: "Signed Payload, HMAC Verification & Rate Throttling" },
          { label: "PII Scrubbing & Context Enrichment", sublabel: "CRM Record Lookup & Data Normalization" },
          { label: "Model Gateway & Fallback Routing", sublabel: "Multi-Model Router (OpenAI / Claude / Gemini)" },
          { label: "Structured JSON Output Validation", sublabel: "Pydantic Schema Check & Circuit Breakers" },
          { label: "Bi-Directional Action Dispatch", sublabel: "GHL Pipeline Sync, Slack Alerts & DB Writes" },
        ]}
        highlights={[
          "Multi-Provider Fallback Routing",
          "Automated PII Scrubbing & Redaction",
          "Queue Workers & Rate Limiting",
          "Bi-Directional CRM & Database Sync",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What are AI integration services?"
        answer="AI integration services embed advanced artificial intelligence capabilities directly into your company's existing tech stack, databases, and CRMs. By building secure API pipelines, webhook listeners, authentication gateways, and rate-limited queue workers, these services enable AI models and agents to read data from, and safely write actions to, tools like GoHighLevel, PostgreSQL, Slack, Stripe, and ERP software."
        keyTakeaways={[
          "Transforms raw foundation models into operational systems that can read and write to your live databases.",
          "Implements multi-model fallback routing so your business operations never halt during individual provider outages.",
          "Manages API token rate limits, automated retries, and semantic caching to prevent runaway software costs.",
          "Enforces enterprise-grade security: encrypted secrets vaulting, PII sanitization, and scoped least-privilege tokens.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Supported APIs, Middleware & Protocols"
        technologies={[
          "REST APIs / GraphQL / Webhooks",
          "OpenAI & Anthropic APIs",
          "GoHighLevel (LeadConnector) API",
          "n8n Workflow Engine",
          "Redis / BullMQ Queue Workers",
          "PostgreSQL / MySQL / Supabase",
          "AWS Lambda / Docker Containers",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The Integration Barrier"
        heading="Why Raw AI Models Are Useless Without Enterprise System Integration"
        subtitle="Foundational AI models can generate impressive text in a browser window, but they cannot access your customer records or update your CRM without secure engineering."
        problems={[
          {
            title: "Data Trapped in Siloed Business Applications",
            description:
              "Your customer history lives in GoHighLevel, financial metrics live in Stripe, and inventory lives in a SQL database. The AI has access to none of it.",
            consequence: "AI outputs are generic and useless because the model lacks vital business context.",
          },
          {
            title: "Crashing on API Rate Limits & Token Caps",
            description:
              "Naive scripts that send synchronous unbuffered requests to LLM endpoints immediately hit provider rate limits during traffic surges.",
            consequence: "System freezes, dropped customer messages, and angry clients.",
          },
          {
            title: "Critical Security & PII Exposure Risks",
            description:
              "Sending raw, unredacted customer records, credit card numbers, or proprietary medical data directly into external LLM endpoints.",
            consequence: "Catastrophic privacy violations, regulatory fines, and brand liabilities.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="Integration Scope"
        heading="Comprehensive AI Integration Capabilities"
        subtitle="Everything required to safely wire artificial intelligence into mission-critical infrastructure."
        features={[
          {
            title: "Secure Webhook Gateways & Authentication",
            description:
              "Ingesting events from CRMs, payment gateways, and custom applications with cryptographic verification.",
            deliverables: [
              "HMAC cryptographic signature validation for all inbound webhooks",
              "OAuth2 and JWT token authentication gateways",
              "Automated payload sanitization and PII redaction filters",
              "Deduplication mechanisms preventing double-processing of identical events",
            ],
          },
          {
            title: "Queue Workers & Rate-Limit Management",
            description:
              "Asynchronous message brokering to smooth out traffic spikes and protect provider token budgets.",
            deliverables: [
              "Redis / BullMQ asynchronous job queues with concurrency limits",
              "Exponential backoff retry logic for temporary API network failures",
              "Semantic prompt caching to eliminate repeat model inference fees",
              "Automated throttling to stay comfortably under LLM tier rate limits",
            ],
          },
          {
            title: "Multi-Model Fallback & High Availability",
            description:
              "Ensuring business continuity even if an AI provider experiences temporary degradation or downtime.",
            deliverables: [
              "Multi-provider routing layer (OpenAI, Anthropic Claude, Google Gemini)",
              "Automatic latency and error monitoring switching to backups in <200ms",
              "Provider-agnostic output normalization into standardized JSON schemas",
              "Real-time health-check telemetry broadcasting provider status to Slack",
            ],
          },
          {
            title: "Bi-Directional CRM & Database Sync",
            description:
              "Enabling AI to read context from and write verified actions directly back into your operational databases.",
            deliverables: [
              "Deep GoHighLevel API connectors (Contacts, Custom Fields, Opportunities, Notes)",
              "PostgreSQL and MySQL database connectors with read/write permission bounds",
              "Real-time team notification dispatchers for Slack, Teams, and Discord",
              "Stripe webhook synchronizers updating customer lifetime values dynamically",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="Technical Topology"
        heading="Enterprise Multi-Model Integration Middleware Topology"
        subtitle="How our middleware layer securely processes, verifies, and routes requests between software tools and AI models."
        nodes={[
          {
            phase: "Step 1: Event Dispatch & Verification",
            title: "Signed Inbound Webhook Arrival",
            description:
              "GoHighLevel fires an outbound webhook upon form submission. Gateway verifies the cryptographic signature and pushes payload to Redis queue.",
            technicalDetails: "HMAC Signature Check • Redis Queue Worker • Idempotency Token",
          },
          {
            phase: "Step 2: Context Enrichment & PII Scrub",
            title: "Database Context Fetch & Masking",
            description:
              "Worker fetches the customer's prior transaction history from PostgreSQL, scrubs Social Security/credit card patterns, and prepares the prompt.",
            technicalDetails: "PostgreSQL Read • Regex PII Redaction • Dynamic Context Assembly",
          },
          {
            phase: "Step 3: Resilient LLM Inference",
            title: "Model Execution with Auto-Fallback",
            description:
              "Gateway sends prompt to primary model. If timeout exceeds 2,500ms, request automatically routes to secondary provider with identical schema.",
            technicalDetails: "Circuit Breaker • OpenAI / Claude Fallback • Sub-2s Response",
          },
          {
            phase: "Step 4: Schema Verification & Write Back",
            title: "Validated Data Write & Notification",
            description:
              "Output validates against Pydantic schema. Gateway writes qualified score and notes to GHL contact and notifies assigned sales rep on Slack.",
            technicalDetails: "Pydantic Schema Check • GHL Opportunity API • Slack Webhook Ping",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Integration Comparison"
        heading="Direct API Scripting vs. GHLVertex Managed Integration Middleware"
        subtitle="Why direct raw API calls break down under real-world production business demands."
        leftColumnHeader="Direct Raw API Calls / Basic Scripts"
        rightColumnHeader="GHLVertex Managed Integration Middleware"
        rows={[
          {
            dimension: "Outage Protection",
            traditional: "System completely breaks when OpenAI or Claude experiences temporary downtime.",
            ghlVertex: "Automated multi-model fallback routes requests to secondary providers in milliseconds.",
          },
          {
            dimension: "Rate Limit Handling",
            traditional: "Throws 429 rate limit exceptions, dropping customer transactions and data permanently.",
            ghlVertex: "Asynchronous Redis queue buffers traffic spikes and retries with exponential backoff.",
          },
          {
            dimension: "Data Privacy & PII",
            traditional: "Sends raw customer data directly to external APIs without redaction or auditing.",
            ghlVertex: "Automated PII scrubbing, zero-data-retention endpoints, and encrypted secrets vaulting.",
          },
          {
            dimension: "Observability",
            traditional: "Zero visibility; failures go unnoticed until customers complain to executive leadership.",
            ghlVertex: "Complete telemetry dashboard tracking latency, token spend, and real-time error logs.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Integration Scenarios"
        heading="Production AI Integrations We Build"
        subtitle="Proven integrations bridging intelligence directly into live operational workflows."
        useCases={[
          {
            scenarioTitle: "CRM Opportunity Sentiment & Churn Analysis",
            trigger: "Customer sends an angry email or SMS to GoHighLevel inbox.",
            orchestration:
              "Middleware intercepts message, scores customer sentiment, updates GHL opportunity to 'High Churn Risk', and alerts CS director on Slack.",
            outcome: "Customer Success intervenes within 10 minutes to save high-value accounts.",
          },
          {
            scenarioTitle: "Automated Lead Enrichment from Web Search",
            trigger: "New enterprise lead enters CRM with only an email address and company domain.",
            orchestration:
              "Middleware calls web search API, extracts company size, tech stack, and LinkedIn profiles, summarizes context, and populates GHL custom fields.",
            outcome: "Sales reps receive pre-researched prospect profiles without spending 20 minutes on Google.",
          },
          {
            scenarioTitle: "ERP & Inventory Natural Language Querying",
            trigger: "Field technician texts internal business line: 'Do we have 3 Carrier condensers in West warehouse?'",
            orchestration:
              "AI converts natural language to SQL query against PostgreSQL, verifies inventory, and texts exact shelf location back to tech in 3 seconds.",
            outcome: "Field technicians access instant inventory data without calling headquarters staff.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Integration Security"
        heading="Defensive Security, Scoped Tokens & Fault Tolerance"
        subtitle="How we protect your backend infrastructure from errant AI actions and malicious inputs."
        items={[
          {
            title: "Scoped Least-Privilege API Tokens",
            description:
              "Integration middleware is only issued granular permissions necessary for the specific task, never root database or global admin credentials.",
          },
          {
            title: "Automated PII Redaction Gates",
            description:
              "Pre-processing filters strip Social Security numbers, credit card details, and sensitive medical terms before text reaches LLM endpoints.",
          },
          {
            title: "Strict JSON Schema Enforcement",
            description:
              "All model outputs must validate against rigid Pydantic/Zod schemas before any database write or external API call is permitted.",
          },
        ]}
        humanInLoopNotes={[
          "Database purge, mass contact update, and account deletion commands cannot be executed through AI integrations.",
          "Financial transactions, refunds, and bank payouts remain isolated behind mandatory human authorization checkpoints.",
          "Unrecognized data schemas or unexpected tool errors automatically generate alerts for technical administrators.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Implementation Roadmap"
        heading="Our 4-Stage AI Integration Lifecycle"
        subtitle="A structured technical sprint ensuring secure, resilient integration with zero downtime."
        steps={[
          {
            number: "01",
            timeline: "Week 1",
            title: "API & Data Schema Audit",
            description:
              "We audit your target software endpoints, database schemas, authentication mechanisms, and expected event volumes.",
            deliverables: ["API Integration Specification", "Data Mapping Matrix", "Rate Limit & Volume Model"],
          },
          {
            number: "02",
            timeline: "Week 2",
            title: "Middleware & Queue Architecture",
            description:
              "We build the asynchronous queue workers, configure PII sanitization filters, and program multi-model fallback handlers.",
            deliverables: ["Staging Middleware Service", "Redis Queue Setup", "Multi-Model Fallback Layer"],
          },
          {
            number: "03",
            timeline: "Week 3",
            title: "Stress Testing & Circuit Breakers",
            description:
              "We run high-concurrency simulation tests, verify timeout behaviors, and ensure circuit breakers trip gracefully under pressure.",
            deliverables: ["Concurrency Stress Report", "Circuit Breaker Validation", "Security Audit"],
          },
          {
            number: "04",
            timeline: "Week 4",
            title: "Production Cutover & Observability",
            description:
              "We switch live webhook traffic, configure real-time Datadog/Slack telemetry, and deliver comprehensive runbook documentation.",
            deliverables: ["Live Production Cutover", "Real-Time Telemetry Dashboard", "Technical Runbook Documentation"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="System Performance"
        heading="Verifiable Gains of Engineered AI Integrations"
        subtitle="Tangible operational improvements delivered through robust API middleware."
        outcomes={[
          {
            focusArea: "Reliability",
            metricLabel: "99.9% Pipeline Execution Uptime",
            description:
              "Multi-model fallback routing and queue workers ensure your business automations never drop events during provider outages.",
          },
          {
            focusArea: "Cost Control",
            metricLabel: "Predictable, Optimized Token Spend",
            description:
              "Semantic caching and prompt compression eliminate redundant model queries, reducing monthly LLM inference bills.",
          },
          {
            focusArea: "Data Security",
            metricLabel: "Zero PII Exposure Liabilities",
            description:
              "Automated sanitization gates ensure sensitive customer credentials and confidential records are never sent to external models.",
          },
          {
            focusArea: "Operational Velocity",
            metricLabel: "Real-Time System Orchestration",
            description:
              "Customer inquiries, CRM updates, and internal notifications execute in milliseconds without manual human copying.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "Deep Backend API Mastery",
            description:
              "We are seasoned systems engineers who understand webhooks, queues, idempotency, and distributed systems architecture.",
          },
          {
            title: "Native GoHighLevel & n8n Experts",
            description:
              "We know GoHighLevel's API inside and out: custom fields, opportunity pipelines, conversations, and calendar booking.",
          },
          {
            title: "Multi-Model High Availability",
            description:
              "We never lock you into a single provider. Our integrations smoothly pivot between OpenAI, Claude, and Gemini dynamically.",
          },
          {
            title: "You Own the Middleware",
            description:
              "We deploy clean, documented Docker containers directly to your cloud infrastructure. You retain 100% code ownership.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "Workflow Automation Services",
            href: "/services/workflow-automation-services/",
            badge: "Process Orchestration",
            description: "High-volume business workflow design, n8n automation, and cross-platform process orchestration.",
          },
          {
            title: "AI Agent Development Services",
            href: "/services/ai-agent-development-services/",
            badge: "Autonomous Agents",
            description: "Build goal-oriented AI agents equipped with persistent memory and external tool-calling capabilities.",
          },
          {
            title: "RAG Development Services",
            href: "/services/rag-development-services/",
            badge: "Enterprise Knowledge",
            description: "Connect foundational AI models to your private corporate documentation and knowledge bases.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Connect Your Stack?"
        heading="Bridge Foundational AI Directly into Your Production Business Software."
        subtitle="Schedule a technical architecture call with an integration engineer to map your API endpoints and event flows."
        primaryBtnText="Connect My Business Systems"
        primaryBtnHref="/#contact"
        secondaryBtnText="Explore Workflow Automation"
        secondaryBtnHref="/services/workflow-automation-services/"
      />
    </>
  );
}
