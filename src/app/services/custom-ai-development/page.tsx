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
  title: "Custom AI Development Company | Bespoke Enterprise AI Software",
  description:
    "Leading custom AI development company. We build production-ready LLM applications, enterprise copilots, autonomous AI agents, and custom RAG knowledge engines.",
  alternates: {
    canonical: "/services/custom-ai-development/",
  },
  openGraph: {
    title: "Custom AI Development Company | Enterprise AI Applications | GHLVertex",
    description:
      "We design, engineer, and deploy bespoke artificial intelligence software and LLM products tailored to your proprietary data, workflows, and business goals.",
    url: `${siteConfig.url}/services/custom-ai-development/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "Custom AI Development", href: "/services/custom-ai-development/" },
];

const faqs = [
  {
    question: "What does a custom AI development company do?",
    answer:
      "A custom AI development company designs, builds, and deploys bespoke artificial intelligence software tailored specifically to an organization's proprietary data and workflows. From specialized LLM copilots and custom RAG knowledge engines to full-stack AI-enabled SaaS applications, custom AI engineering bridges raw foundational models with secure enterprise business logic, rigorous validation pipelines, and production-grade reliability.",
  },
  {
    question: "When should a company build custom AI software instead of buying off-the-shelf SaaS?",
    answer:
      "Off-the-shelf software is ideal for generic functions like basic grammar editing. However, if your business requires proprietary workflow logic, integration with legacy databases, strict internal security and compliance boundaries, or unique competitive IP, custom AI software delivers a protected, defensible operational advantage.",
  },
  {
    question: "What technology stack do you use for custom AI application development?",
    answer:
      "We build on production-grade modern stacks: Python (FastAPI, PyTorch), TypeScript/Next.js for user interfaces, LangChain and LangGraph for agent orchestration, PostgreSQL with pgvector or Pinecone for embeddings, and enterprise cloud infrastructure (AWS, Google Cloud, Docker) with automated CI/CD pipelines.",
  },
  {
    question: "Do we retain 100% intellectual property ownership of the custom AI software?",
    answer:
      "Yes. All custom code, system architecture blueprints, proprietary prompt libraries, fine-tuned weights, and pipeline scripts belong entirely to your organization upon project completion. We enforce zero vendor lock-in.",
  },
  {
    question: "How do you ensure data security and prevent customer data exposure?",
    answer:
      "We engineer enterprise-grade security: end-to-end data encryption in transit and at rest, role-based access control (RBAC), private cloud VPC deployment, SOC2-aligned secrets management, and zero-data-retention enterprise API contracts with foundation model providers.",
  },
  {
    question: "Can you build AI copilots embedded into our existing internal tools or SaaS platform?",
    answer:
      "Yes. We specialize in building contextual copilot sidebars, natural language query interfaces for SQL databases, and automated document generation engines embedded directly into your existing web applications via clean REST/GraphQL APIs.",
  },
  {
    question: "What is your process for testing and benchmarking AI software performance?",
    answer:
      "We build automated Evaluation (Eval) pipelines that score system outputs on factual accuracy, semantic relevance, latency, token consumption, and edge-case safety before any code reaches production environments.",
  },
  {
    question: "How long does a typical custom AI software development project take?",
    answer:
      "A focused custom AI tool or MVP copilot typically deploys within 4 to 6 weeks. Full-scale enterprise AI platforms with multi-modal capabilities and complex system integrations run between 8 to 12 weeks.",
  },
  {
    question: "Do you provide ongoing support, monitoring, and model optimization post-launch?",
    answer:
      "Yes. We offer managed engineering retainers covering continuous telemetry monitoring, latency optimization, prompt refinement, model fine-tuning, and seamless upgrades as foundation model capabilities advance.",
  },
];

export default function CustomAiDevelopmentPage() {
  const currentUrl = "/services/custom-ai-development/";
  const pageSchema = getWebPageSchema({
    title: "Custom AI Development Company | Bespoke Enterprise AI Software",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "Custom AI Development Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Custom AI Software Development & Enterprise AI Engineering",
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
        eyebrow="Bespoke AI Engineering Partner"
        h1="Custom AI Development Company Building High-Impact AI Applications & Tools"
        description="We engineer bespoke artificial intelligence applications, enterprise copilots, and autonomous agent architectures tailored to your proprietary data and core operations. Turn foundation models into protected, scalable business assets."
        primaryCtaText="See What We Can Build"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore Technical Capabilities"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Enterprises, Fast-Growing Startups & Technical Founders"
        outcomeText="Proprietary AI IP, Zero Per-Seat SaaS Lock-In & Production-Grade Reliability"
        diagramTitle="Enterprise Custom AI Software Stack"
        flowSteps={[
          { label: "Data Pipeline & Vector Knowledge Layer", sublabel: "PostgreSQL, pgvector, Pinecone & Hybrid Search" },
          { label: "Model Orchestration & Agent Runtime", sublabel: "LangGraph, Function Calling & Pydantic Validation" },
          { label: "Enterprise Security & Governance Gateway", sublabel: "RBAC, Secrets Vault, PII Redaction & Rate Limiting" },
          { label: "API & Full-Stack Application Interface", sublabel: "FastAPI Backend, Next.js UI & Webhook Bus" },
          { label: "Automated Eval & Telemetry Pipeline", sublabel: "Latency Tracking, Accuracy Scoring & Drift Monitoring" },
        ]}
        highlights={[
          "100% Client Code & IP Ownership",
          "Enterprise Data Security & Privacy",
          "Automated Regression Eval Suites",
          "Production Cloud Deployment (AWS / GCP)",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What does a custom AI development company do?"
        answer="A custom AI development company designs, builds, and deploys bespoke artificial intelligence software tailored specifically to an organization's proprietary data and workflows. From specialized LLM copilots and custom RAG knowledge engines to full-stack AI-enabled SaaS applications, custom AI engineering bridges raw foundational models with secure enterprise business logic, rigorous validation pipelines, and production-grade reliability."
        keyTakeaways={[
          "Builds proprietary software assets that you own outright, eliminating dependence on restrictive third-party SaaS vendors.",
          "Grounds advanced AI reasoning in your company's proprietary data, databases, and operational SOPs.",
          "Implements enterprise security architectures: encrypted VPC deployments, least-privilege tokens, and zero-training guarantees.",
          "Engineers automated Eval benchmarking suites to mathematically measure and maintain output accuracy over time.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Engineering Stack & Model Ecosystems"
        technologies={[
          "Python / FastAPI / PyTorch",
          "TypeScript / Next.js / React",
          "OpenAI / Anthropic / Gemini APIs",
          "LangGraph / LlamaIndex",
          "PostgreSQL / pgvector / Pinecone",
          "Docker / Kubernetes / AWS",
          "GoHighLevel API Connectors",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The Off-the-Shelf Bottleneck"
        heading="Why Commercial SaaS AI Tools Fall Short for Serious Organizations"
        subtitle="Generic AI tools are built for the lowest common denominator. They lack the context, security, and flexibility required for proprietary business operations."
        problems={[
          {
            title: "Zero Defensibility or Competitive Moat",
            description:
              "Using the exact same public consumer tools as your competitors gives your company zero proprietary technical advantage or intellectual property value.",
            consequence: "Your operations remain commoditized with no lasting technological moat.",
          },
          {
            title: "Prohibitive Per-Seat Pricing as Teams Grow",
            description:
              "Commercial AI wrappers charge $30–$80 per employee per month. Equipping a 100-person team creates a recurring monthly software liability of thousands.",
            consequence: "Excessive operational software overhead that eats into margins.",
          },
          {
            title: "Inability to Integrate with Legacy Databases",
            description:
              "Packaged AI SaaS tools cannot securely query your private PostgreSQL database, internal ERP, or custom GoHighLevel CRM workflows.",
            consequence: "Employees are stuck manually copy-pasting data between disconnected browser tabs.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="Custom AI Capabilities"
        heading="Full-Lifecycle Custom AI Development Services"
        subtitle="From architectural blueprint to production deployment and continuous ML engineering."
        features={[
          {
            title: "Internal Enterprise AI Copilots",
            description:
              "Bespoke assistants embedded into your employees' daily workflows to accelerate analysis and documentation.",
            deliverables: [
              "Natural language query interfaces connecting to internal SQL databases",
              "Automated document summarization and report generation tools",
              "Role-based permission filtering ensuring employees only access authorized data",
              "Browser extensions or embedded web app sidebars for seamless access",
            ],
          },
          {
            title: "Custom RAG & Enterprise Knowledge Systems",
            description:
              "High-accuracy retrieval engines that ground LLMs in millions of pages of private documentation.",
            deliverables: [
              "Multi-format document ingestion pipelines (PDF, DOCX, Notion, Drive)",
              "Hybrid semantic and keyword search with advanced BM25 and Cohere reranking",
              "Strict citation frameworks linking every claim directly back to source passages",
              "Automated knowledge sync pipelines updating vector stores as docs change",
            ],
          },
          {
            title: "Full-Stack AI-Powered SaaS Applications",
            description:
              "Architecting and building new generative AI software products from scratch for market launch.",
            deliverables: [
              "End-to-end web application engineering (Next.js, Tailwind, FastAPI)",
              "Stripe subscription billing, user authentication, and multi-tenant isolation",
              "Streaming response architectures for responsive, real-time user experiences",
              "Scalable serverless inference pipelines designed to minimize token costs",
            ],
          },
          {
            title: "AI Agent Orchestration & Backend Workflows",
            description:
              "Autonomous systems capable of multi-step planning, tool usage, and CRM synchronization.",
            deliverables: [
              "LangGraph state machines handling complex cyclic agent decision paths",
              "Custom API tool schemas connecting agents to GHL, Stripe, and ERPs",
              "Automated validation layers preventing errant or duplicate API calls",
              "Comprehensive human-in-the-loop review dashboards for exception handling",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="Architecture Blueprint"
        heading="Custom Enterprise AI Application Architecture"
        subtitle="How a production custom AI software platform connects user interfaces, secure models, and private data."
        nodes={[
          {
            phase: "Layer 1: User & API Gateway",
            title: "Full-Stack Application Frontend",
            description:
              "Secure Next.js frontend with role-based authentication sends user requests over encrypted WebSockets for sub-second streaming responses.",
            technicalDetails: "Next.js UI • WebSocket Streaming • JWT Auth • Rate Limiting",
          },
          {
            phase: "Layer 2: Orchestration & Security Gate",
            title: "FastAPI Backend & Guardrails",
            description:
              "Backend sanitizes inputs, redacts PII, checks user authorization, and formulates structured prompts with explicit system instructions.",
            technicalDetails: "FastAPI • PII Redaction Filter • Pydantic Schema Validation",
          },
          {
            phase: "Layer 3: Hybrid Retrieval & Reranking",
            title: "Vector Database & Knowledge Retrieval",
            description:
              "System executes hybrid search against PostgreSQL/pgvector, re-ranks the top chunks using Cohere Rerank, and injects context into the prompt.",
            technicalDetails: "pgvector • Hybrid BM25 Search • Cohere Reranker • Citation Map",
          },
          {
            phase: "Layer 4: Inference & Tool Execution",
            title: "Enterprise LLM Inference & Action Bus",
            description:
              "The model reasons through the context, generates a validated JSON response, and dispatches external tool calls to update CRMs and databases.",
            technicalDetails: "Claude 3.5 Sonnet / GPT-4o • Tool Call Bus • GHL CRM Sync",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Build vs. Buy"
        heading="Generic SaaS Wrappers vs. Custom AI Development with GHLVertex"
        subtitle="Why forward-thinking companies invest in owned AI assets rather than rented tools."
        leftColumnHeader="Renting Generic AI SaaS Tools"
        rightColumnHeader="Custom AI Development by GHLVertex"
        rows={[
          {
            dimension: "IP & Code Ownership",
            traditional: "Zero ownership. You rent access to another vendor's closed black-box tool.",
            ghlVertex: "100% intellectual property ownership. You own the complete source code and architecture.",
          },
          {
            dimension: "System Integration",
            traditional: "Isolated in external silos; requires manual exporting or brittle third-party connectors.",
            ghlVertex: "Directly embedded into your existing GoHighLevel CRM, databases, and operational workflows.",
          },
          {
            dimension: "Data Privacy & Compliance",
            traditional: "Vague terms of service; high risk of your data being retained or exposed.",
            ghlVertex: "Private VPC deployment, strict zero-data-retention APIs, and complete enterprise audit logs.",
          },
          {
            dimension: "Customizability",
            traditional: "Locked into rigid feature roadmaps dictated by another company's priorities.",
            ghlVertex: "Built exactly to your specifications, tailored to your workflows, and fully adaptable over time.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Software Scenarios"
        heading="Custom AI Systems We Engineer"
        subtitle="Practical enterprise software solutions built to solve proprietary business problems."
        useCases={[
          {
            scenarioTitle: "Proprietary Underwriting & Risk Analysis Copilot",
            trigger: "Commercial lender receives 150-page complex loan application package.",
            orchestration:
              "Custom AI copilot extracts financial ratios, verifies bank statement consistency, identifies debt obligations, and drafts underwriting memo.",
            outcome: "Underwriters complete initial file risk assessment in 15 minutes instead of 3 hours.",
          },
          {
            scenarioTitle: "Natural Language Database BI Interface",
            trigger: "Executive types into Slack: 'Show me top 5 customer cohorts by churn rate this quarter.'",
            orchestration:
              "System converts natural language into secure read-only SQL, runs query against PostgreSQL, verifies output, and generates chart.",
            outcome: "Non-technical leadership accesses instant data analytics without waiting on data team backlog.",
          },
          {
            scenarioTitle: "Automated Legal Contract Redlining Engine",
            trigger: "Procurement team uploads vendor MSA contract PDF.",
            orchestration:
              "AI analyzes contract against company playbook, flags 8 unfavorable indemnity and liability clauses, and drafts approved substitute language.",
            outcome: "Accelerates contract review cycles from 7 business days to 24 hours.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Security Architecture"
        heading="Enterprise-Grade Security by Design"
        subtitle="How we protect your intellectual property, customer data, and operational continuity."
        items={[
          {
            title: "Private Cloud VPC Deployments",
            description:
              "We deploy all custom software inside your own AWS, Google Cloud, or dedicated cloud tenant with isolated VPC networking.",
          },
          {
            title: "Strict Secrets & API Key Vaulting",
            description:
              "All credentials, API tokens, and encryption keys are managed through AWS Secrets Manager or HashiCorp Vault.",
          },
          {
            title: "Deterministic Guardrails & Output Validation",
            description:
              "Every model output is validated against strict Pydantic/Zod schemas before being executed or displayed to users.",
          },
        ]}
        humanInLoopNotes={[
          "Critical financial commitments, binding contract authorizations, and legal signings remain under human authority.",
          "Automated Eval test suites flag model performance regressions prior to any production code release.",
          "Transparent error fallbacks ensure system continuity even if third-party LLM APIs experience temporary latency.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Engineering Lifecycle"
        heading="Our 4-Stage Software Development Methodology"
        subtitle="A disciplined full-stack engineering lifecycle delivering production-ready AI software."
        steps={[
          {
            number: "01",
            timeline: "Weeks 1–2",
            title: "Architecture & Data Pipeline Design",
            description:
              "We audit requirements, design database schemas, map API integration points, and formulate technical architecture specifications.",
            deliverables: ["Full Technical Architecture Spec", "Database Schema Models", "API Integration Contracts"],
          },
          {
            number: "02",
            timeline: "Weeks 3–4",
            title: "Core AI Engine & RAG Build",
            description:
              "We build ingestion pipelines, configure vector databases, program prompt chains, and wire model orchestration backend.",
            deliverables: ["Functional Backend Prototype", "Vector Search Pipeline", "Prompt Engineering Library"],
          },
          {
            number: "03",
            timeline: "Weeks 5–6",
            title: "UI/UX & System Integration",
            description:
              "We build the intuitive Next.js user interface, integrate GHL and third-party webhooks, and implement authentication systems.",
            deliverables: ["Responsive User Interface", "Live Third-Party API Connectors", "Role-Based Access System"],
          },
          {
            number: "04",
            timeline: "Weeks 7–8",
            title: "Eval Benchmarking & Cloud Cutover",
            description:
              "We execute automated evaluation suites, conduct security audits, deploy to your cloud tenant, and deliver complete documentation.",
            deliverables: ["Automated Eval Benchmark Report", "Production Cloud Deployment", "Complete Source Code & SOPs"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Long-Term Value"
        heading="Measurable ROI of Custom AI Software Assets"
        subtitle="Tangible operational and financial benefits of building proprietary AI applications."
        outcomes={[
          {
            focusArea: "Asset Creation",
            metricLabel: "Valuable Proprietary Intellectual Property",
            description:
              "Create defensible software IP that increases enterprise company valuation rather than paying perpetual rental fees to SaaS vendors.",
          },
          {
            focusArea: "Software Overhead",
            metricLabel: "Elimination of SaaS Licensing Taxes",
            description:
              "Deploy company-wide tools with zero per-seat licensing penalties, scaling your user base without proportional software cost increases.",
          },
          {
            focusArea: "Operational Velocity",
            metricLabel: "10x Faster Task Execution",
            description:
              "Automate complex cognitive workflows: document parsing, contract redlining, and customer triage completed in seconds.",
          },
          {
            focusArea: "Data Security",
            metricLabel: "Complete Corporate Data Control",
            description:
              "Ensure zero customer PII leakage, maintain enterprise compliance, and retain 100% control over internal knowledge repositories.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "Full-Stack Software Engineers",
            description:
              "We aren't prompt hackers. We are experienced software engineers building scalable backends, clean UIs, and robust databases.",
          },
          {
            title: "Deep CRM & Operational Grounding",
            description:
              "We ensure your custom AI software interacts directly with your GoHighLevel CRM, billing systems, and daily operations.",
          },
          {
            title: "Rigorous Eval Benchmarking",
            description:
              "We don't launch on hope. We mathematically benchmark accuracy, latency, and failure rates with automated evaluation suites.",
          },
          {
            title: "100% Code & IP Ownership",
            description:
              "You own every single line of code, Docker container, and prompt template. Zero proprietary lock-in.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "AI Agent Development Services",
            href: "/services/ai-agent-development-services/",
            badge: "Autonomous Tool Use",
            description: "Engineer goal-oriented autonomous AI agents equipped with persistent memory and multi-step tool execution.",
          },
          {
            title: "RAG Development Services",
            href: "/services/rag-development-services/",
            badge: "Grounded Knowledge",
            description: "Build production-grade retrieval architectures connecting LLMs to your private business documentation.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "System Connectivity",
            description: "Connect foundational AI models directly to your existing enterprise software, databases, and APIs.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Build Proprietary AI Software?"
        heading="Turn Foundation Models into Defensible, High-Impact Business Applications."
        subtitle="Schedule a technical consultation with an AI software architect to review your project specifications."
        primaryBtnText="See What We Can Build"
        primaryBtnHref="/#contact"
        secondaryBtnText="Explore AI Consulting Services"
        secondaryBtnHref="/services/ai-consulting-services/"
      />
    </>
  );
}
