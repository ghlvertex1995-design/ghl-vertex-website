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
  title: "AI Consulting Services | Strategic AI Roadmaps & Advisory",
  description:
    "Expert AI consulting services. We guide business leaders through AI readiness assessments, ROI modeling, agentic architecture design, and governance frameworks.",
  alternates: {
    canonical: "/services/ai-consulting-services/",
  },
  openGraph: {
    title: "AI Consulting Services & Strategic AI Roadmaps | GHLVertex",
    description:
      "Strategic AI advisory for organizations ready to deploy practical artificial intelligence. From data readiness audits to custom AI agent and automation roadmaps.",
    url: `${siteConfig.url}/services/ai-consulting-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "AI Consulting Services", href: "/services/ai-consulting-services/" },
];

const faqs = [
  {
    question: "What are AI consulting services?",
    answer:
      "AI consulting services provide executive and operational advisory to help organizations identify high-ROI artificial intelligence opportunities, evaluate data readiness, and design actionable implementation roadmaps. Rather than adopting AI tools blindly, consulting engagements establish technical architecture, data governance policies, tool selection criteria, and realistic risk controls before deployment to guarantee measurable business returns.",
  },
  {
    question: "How do you determine if our company is ready for AI implementation?",
    answer:
      "We conduct a structured AI readiness audit examining your current data cleanliness, CRM infrastructure, API accessibility, operational bottlenecks, staff technical comfort, and privacy requirements to pinpoint where AI will generate immediate value without friction.",
  },
  {
    question: "What is the difference between AI consulting and custom AI development?",
    answer:
      "AI consulting is the strategic and architectural foundation: feasibility studies, opportunity mapping, ROI modeling, tool selection, security governance, and phased delivery roadmaps. Custom AI development is the subsequent software engineering execution: writing code, fine-tuning models, building RAG systems, and integrating APIs.",
  },
  {
    question: "How do you calculate expected ROI on AI initiatives?",
    answer:
      "We analyze concrete operational metrics: current labor hours spent on repetitive cognitive tasks, lead response lag costs, customer support ticket resolution overhead, and software licensing fees, contrasting them directly against implementation and model inference token costs.",
  },
  {
    question: "Can your consultants help us choose between OpenAI, Anthropic Claude, and open-source models?",
    answer:
      "Yes. Model selection is a core consulting deliverable. We benchmark models based on context length, latency, cost per 1M tokens, reasoning capability, multi-modal needs, and data privacy policies to choose the ideal model for your specific use cases.",
  },
  {
    question: "What deliverables do we receive at the conclusion of an AI consulting engagement?",
    answer:
      "You receive an executive-ready AI Opportunity Matrix, a Technical Architecture Blueprint, a Phased Implementation Roadmap, a Data Privacy & Security Governance Policy, and a formal Cost/ROI Financial Model.",
  },
  {
    question: "Do you help with change management and employee adoption?",
    answer:
      "Yes. Successful AI adoption requires human buy-in. We provide staff education workshops, role-specific interaction guidelines, prompt engineering best practices, and clear human-in-the-loop escalation protocols to ease team transitions.",
  },
  {
    question: "How long does a strategic AI consulting engagement take?",
    answer:
      "A standard AI Strategy & Roadmap engagement runs between 2 to 4 weeks depending on the complexity of your operational stack and the number of departmental workflows being evaluated.",
  },
  {
    question: "Can GHLVertex execute the actual engineering after the consulting phase?",
    answer:
      "Yes. As a full-stack AI engineering and automation agency, we can seamlessly transition from advisory to turnkey implementation, developing custom AI agents, RAG systems, and workflow automations mapped during the consulting phase.",
  },
];

export default function AiConsultingServicesPage() {
  const currentUrl = "/services/ai-consulting-services/";
  const pageSchema = getWebPageSchema({
    title: "AI Consulting Services | Strategic AI Roadmaps & Advisory",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "AI Consulting Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Artificial Intelligence Strategy & Technology Consulting",
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
        eyebrow="Strategic AI Advisory & Architecture"
        h1="Strategic AI Consulting Services & Enterprise Transformation Roadmaps"
        description="Cut through AI hype with pragmatic, high-impact implementation advisory. We help business leaders evaluate technical readiness, model realistic ROI, architect agentic systems, and design secure governance roadmaps."
        primaryCtaText="Get My AI Roadmap"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore Advisory Deliverables"
        secondaryCtaHref="#service-capabilities"
        targetAudience="CEOs, COOs, IT Directors & Mid-Market Business Leaders"
        outcomeText="Clear Technical Feasibility, Verified ROI Model & Safe Deployment Roadmap"
        diagramTitle="Enterprise AI Strategic Advisory Lifecycle"
        flowSteps={[
          { label: "Operational Discovery & Pain Audit", sublabel: "Process Bottlenecks & Data Assessment" },
          { label: "AI Opportunity Matrix", sublabel: "Impact vs. Feasibility Scoring" },
          { label: "Architecture & Model Selection", sublabel: "OpenAI vs. Claude vs. Local LLMs & RAG" },
          { label: "Governance & Human Safeguards", sublabel: "PII Boundaries, Security & Permissions" },
          { label: "Phased Implementation Blueprint", sublabel: "Sprint Timelines, Milestones & ROI Projections" },
        ]}
        highlights={[
          "Vendor-Neutral Advisory",
          "Comprehensive Data Readiness Audits",
          "Rigorous Financial ROI Modeling",
          "Production-Ready Architecture Specs",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What are AI consulting services?"
        answer="AI consulting services provide executive and operational advisory to help organizations identify high-ROI artificial intelligence opportunities, evaluate data readiness, and design actionable implementation roadmaps. Rather than adopting AI tools blindly, consulting engagements establish technical architecture, data governance policies, tool selection criteria, and realistic risk controls before deployment to guarantee measurable business returns."
        keyTakeaways={[
          "Prevents costly failed experiments by prioritizing initiatives with clear technical feasibility and proven business upside.",
          "Audits underlying data assets, CRM hygiene, and API endpoints to verify readiness before software development begins.",
          "Establishes strict enterprise data governance to prevent customer PII leakage or unauthorized model training on company assets.",
          "Provides technical blueprints bridging foundational LLMs, RAG knowledge bases, and deterministic business workflows.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Evaluated Foundational Models & Architectures"
        technologies={[
          "OpenAI (GPT-4o / O1)",
          "Anthropic Claude 3.5 Sonnet",
          "Google Gemini 1.5 Pro",
          "Llama 3 / Mistral (Self-Hosted)",
          "Vector Databases (Pinecone / Qdrant)",
          "LangChain / LlamaIndex",
          "GoHighLevel & n8n Ecosystems",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The AI Adoption Dilemma"
        heading="Why 80% of Enterprise AI Initiatives Fail to Reach Production"
        subtitle="Without a structured strategy, businesses waste tens of thousands on fragmented subscriptions and brittle prototypes that never solve core business problems."
        problems={[
          {
            title: "Scattered, Uncoordinated Tool Adoption",
            description:
              "Different departments subscribe to 10 separate 'AI wrapper' tools with zero central governance, overlapping capabilities, and unmonitored costs.",
            consequence: "High software sprawl without any measurable increase in organizational productivity.",
          },
          {
            title: "Building on Dirty, Unstructured Data",
            description:
              "Attempting to deploy AI agents or chatbots on top of disorganized documentation, broken CRM fields, and conflicting SOPs.",
            consequence: "Severe AI hallucinations, customer confusion, and embarrassing brand errors.",
          },
          {
            title: "Total Lack of Security & Privacy Guardrails",
            description:
              "Employees pasting sensitive intellectual property, financial sheets, and customer PII into public consumer AI models.",
            consequence: "Critical compliance liabilities, data exposure, and security vulnerabilities.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="Advisory Scope"
        heading="Comprehensive AI Consulting Deliverables"
        subtitle="Pragmatic strategic assets delivered directly to executive decision-makers."
        features={[
          {
            title: "AI Readiness & Infrastructure Audit",
            description:
              "Deep evaluation of your existing technology stack, CRM pipelines, API access, and operational workflows.",
            deliverables: [
              "Data cleanliness and documentation accessibility assessment",
              "Evaluation of existing software APIs and integration capability",
              "Technical debt and architectural blocker identification",
              "Staff AI technical literacy and adoption readiness benchmark",
            ],
          },
          {
            title: "AI Opportunity Prioritization Matrix",
            description:
              "Identifying and ranking high-leverage business processes using our rigorous Impact vs. Complexity scoring.",
            deliverables: [
              "Ranked catalog of candidate AI use cases across marketing, sales, and ops",
              "Concrete technical feasibility analysis for each candidate initiative",
              "Estimated labor hours reclaimable and operational velocity gains",
              "Quick-win pilot recommendations vs. long-term strategic projects",
            ],
          },
          {
            title: "System Architecture & Model Selection",
            description:
              "Designing production-grade technical blueprints tailored to your latency, cost, and security requirements.",
            deliverables: [
              "Comprehensive system architecture diagrams (LLM, RAG, Database, API)",
              "Model evaluation benchmark (OpenAI vs. Claude vs. open-source local LLMs)",
              "Vector database and retrieval pipeline specification",
              "Token cost modeling based on projected query volumes",
            ],
          },
          {
            title: "AI Governance, Safety & Risk Policy",
            description:
              "Developing clear enterprise rules to protect your organization's intellectual property and customer trust.",
            deliverables: [
              "Corporate AI acceptable use and data privacy policies",
              "PII redaction and confidential data boundary protocols",
              "Human-in-the-loop escalation criteria for high-stakes business decisions",
              "Model failure recovery and output verification guidelines",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="Consulting Methodology"
        heading="Our Proven 4-Stage AI Strategy Framework"
        subtitle="A disciplined advisory process that turns broad AI aspirations into an actionable engineering roadmap."
        nodes={[
          {
            phase: "Stage 1: Discovery",
            title: "Operational Workstream Mapping",
            description:
              "We conduct structured interviews across sales, operations, customer support, and IT to map where human hours are being drained by cognitive busywork.",
            technicalDetails: "Stakeholder Interviews • Process Flow Mapping • Data Audit",
          },
          {
            phase: "Stage 2: Evaluation",
            title: "Technical Feasibility & ROI Modeling",
            description:
              "We analyze your data assets, test sample documents against leading models, evaluate context window requirements, and model financial returns.",
            technicalDetails: "Prompt Prototyping • Token Cost Estimation • ROI Calculation",
          },
          {
            phase: "Stage 3: Blueprinting",
            title: "Architecture & Governance Design",
            description:
              "We formulate the complete technical specification: model selection, vector DB selection, API connectors, error handling, and human escalation rules.",
            technicalDetails: "System Architecture Diagram • Security Matrix • SOP Standards",
          },
          {
            phase: "Stage 4: Roadmap Delivery",
            title: "Executive Presentation & Phased Rollout",
            description:
              "We deliver an executive briefing detailing sprint-by-sprint execution phases, budget requirements, and internal team enablement steps.",
            technicalDetails: "Phased Sprint Plan • Milestone Metrics • Vendor Evaluation",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Advisory Comparison"
        heading="Academic Theorists vs. GHLVertex Practical AI Advisory"
        subtitle="Why engineering-grounded consulting delivers tangible operational systems rather than slide decks."
        leftColumnHeader="Generalist Management Consultancies"
        rightColumnHeader="GHLVertex Practical Engineering Advisory"
        rows={[
          {
            dimension: "Deliverable Format",
            traditional: "200-page theoretical PDF slide decks filled with buzzwords and zero execution specs.",
            ghlVertex: "Actionable system blueprints, API connection specs, and real code architecture.",
          },
          {
            dimension: "Technical Depth",
            traditional: "Consultants have never written code or connected an LLM API to a production CRM.",
            ghlVertex: "Engineers who deploy real AI agents, RAG systems, and GoHighLevel workflows every single day.",
          },
          {
            dimension: "Vendor Independence",
            traditional: "Often locked into multi-million dollar vendor reseller agreements with specific enterprise clouds.",
            ghlVertex: "100% vendor-agnostic; we recommend the most cost-effective model and stack for your needs.",
          },
          {
            dimension: "Path to Execution",
            traditional: "Leaves you with theoretical advice and walks away, forcing you to hire another team.",
            ghlVertex: "Seamlessly transitions from strategic blueprint to turnkey engineering implementation.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Consulting Scenarios"
        heading="Strategic Challenges We Solve for Business Leaders"
        subtitle="Practical advisory engagements designed to solve pressing technology and operational dilemmas."
        useCases={[
          {
            scenarioTitle: "Evaluating Customer Support AI Automation",
            trigger: "Executive leadership wants to reduce support ticket backlog using conversational AI without risking brand reputation.",
            orchestration:
              "We audit 1,000 historical support tickets, determine 60% are resolvable via grounded RAG, model API costs, and design human handoff thresholds.",
            outcome: "Clear proof-of-concept plan delivered with zero risk of unvetted customer responses.",
          },
          {
            scenarioTitle: "Internal Knowledge Base Retrieval Audit",
            trigger: "Engineering and sales teams waste 5+ hours weekly hunting through scattered Notion, Drive, and Slack docs.",
            orchestration:
              "We assess data cleanliness, evaluate hybrid vector search architectures, and design a custom enterprise RAG blueprint with role-based access.",
            outcome: "Turnkey RFP and technical spec prepared to deploy an internal secure enterprise assistant.",
          },
          {
            scenarioTitle: "AI Voice Agent Feasibility Study",
            trigger: "Home service provider considers replacing overnight answering service with an autonomous voice agent.",
            orchestration:
              "We evaluate call acoustics, latency requirements, Twilio/Vapi integrations, and emergency escalation routing to technician mobile phones.",
            outcome: "Comprehensive cost vs. reliability model proving significant cost savings with higher booking accuracy.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Ethics & Compliance"
        heading="Governance First: Responsible AI Implementation"
        subtitle="We build safety, security, and human accountability into every AI roadmap we design."
        items={[
          {
            title: "Zero Data Training Guarantees",
            description:
              "We select enterprise API agreements ensuring your proprietary data and customer conversations are never used to train third-party public models.",
          },
          {
            title: "Defensive Prompt Injection Safeguards",
            description:
              "System architectures include secondary validation layers to block adversarial jailbreaks and unauthorized system instruction overrides.",
          },
          {
            title: "Auditable Reasoning Chains",
            description:
              "Autonomous systems are architected with explicit logging so every AI decision and tool call can be reviewed by human administrators.",
          },
        ]}
        humanInLoopNotes={[
          "Critical financial commitments, binding contracts, and hiring decisions must remain under human authority.",
          "AI outputs falling below calibrated confidence scores must gracefully fall back to human operators.",
          "Our consulting frameworks adhere strictly to honest, verifiable capabilities without deceptive marketing claims.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Engagement Timeline"
        heading="Our 4-Week AI Consulting Roadmap Sprint"
        subtitle="A rapid, comprehensive engagement delivering executive clarity and technical execution plans."
        steps={[
          {
            number: "01",
            timeline: "Week 1",
            title: "Stakeholder Discovery & Tech Audit",
            description:
              "We interview key departmental leaders and audit your existing CRM, software databases, and documentation repositories.",
            deliverables: ["Audit Findings Summary", "Process Pain Inventory", "Initial Data Health Scorecard"],
          },
          {
            number: "02",
            timeline: "Week 2",
            title: "Opportunity Scoring & Prototyping",
            description:
              "We evaluate candidate use cases, run targeted model benchmarks on sample data, and establish ROI financial models.",
            deliverables: ["AI Opportunity Matrix", "Model Benchmark Report", "Token Cost Projections"],
          },
          {
            number: "03",
            timeline: "Week 3",
            title: "Architecture & Governance Blueprint",
            description:
              "We design system architecture diagrams, data flow schemas, API integration points, and corporate governance policies.",
            deliverables: ["Technical Architecture Spec", "Security & Governance Policy", "Human Escalation Protocol"],
          },
          {
            number: "04",
            timeline: "Week 4",
            title: "Executive Presentation & Rollout Plan",
            description:
              "We present the complete strategic roadmap to executive leadership with clear sprint milestones and budget breakdowns.",
            deliverables: ["Executive Presentation Deck", "90-Day Implementation Roadmap", "Engineering Handover Spec"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Strategic Outcomes"
        heading="Measurable Value of Strategic AI Consulting"
        subtitle="What business leaders achieve by engaging experienced AI strategists before writing code."
        outcomes={[
          {
            focusArea: "Capital Preservation",
            metricLabel: "Prevention of Wasted AI Tool Spend",
            description:
              "Avoid spending tens of thousands on hyped commercial software subscriptions that your team stops using after 60 days.",
          },
          {
            focusArea: "Speed to Production",
            metricLabel: "Accelerated Deployment Velocity",
            description:
              "Move from vague internal brainstorming to a production-ready engineering plan in weeks rather than wandering for quarters.",
          },
          {
            focusArea: "Risk Mitigation",
            metricLabel: "Protected Corporate Data & Reputation",
            description:
              "Ensure zero customer PII leakage, maintain enterprise compliance, and avoid public hallucination embarrassments.",
          },
          {
            focusArea: "Executive Alignment",
            metricLabel: "Clear Organizational Consensus",
            description:
              "Unite leadership, operations, and IT around a single, prioritized AI implementation roadmap with defined financial metrics.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "Practitioners, Not Slide Makers",
            description:
              "We build and maintain production AI systems every day. Our advisory is grounded in real-world API engineering realities.",
          },
          {
            title: "Deep CRM & Operational Integration",
            description:
              "We understand that AI is useless without connecting to your CRM, billing, and communication rails. We bridge the full stack.",
          },
          {
            title: "Independent & Model Agnostic",
            description:
              "We recommend what actually works best for your specific cost, latency, and security needs without cloud vendor bias.",
          },
          {
            title: "Direct Path to Implementation",
            description:
              "You don't need to shop around for builders after our consulting ends. Our in-house engineering team can execute the entire plan.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "AI Automation Services",
            href: "/services/ai-automation-services/",
            badge: "Intelligent Systems",
            description: "Deploy automated workflows combining LLM reasoning with deterministic CRM and database logic.",
          },
          {
            title: "AI Agent Development Services",
            href: "/services/ai-agent-development-services/",
            badge: "Autonomous Agents",
            description: "Custom autonomous agent development with memory, tool execution, and multi-agent orchestration.",
          },
          {
            title: "Custom AI Development",
            href: "/services/custom-ai-development/",
            badge: "Full-Stack AI",
            description: "Bespoke artificial intelligence applications, LLM software products, and internal copilot systems.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Build Your AI Strategy?"
        heading="Stop Guessing. Build a Clear, Pragmatic AI Roadmap for Your Organization."
        subtitle="Schedule a consultation with an AI strategist to evaluate your operational readiness and high-ROI opportunities."
        primaryBtnText="Get My AI Roadmap"
        primaryBtnHref="/#contact"
        secondaryBtnText="Explore AI Automation Services"
        secondaryBtnHref="/services/ai-automation-services/"
      />
    </>
  );
}
