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
  title: "AI Agent Development Services | Custom Autonomous AI Agents",
  description:
    "Expert AI agent development services. We build custom autonomous AI agents with persistent memory, tool-calling capabilities, RAG, and human-in-the-loop oversight.",
  alternates: {
    canonical: "/services/ai-agent-development-services/",
  },
  openGraph: {
    title: "Custom AI Agent Development Services & Multi-Agent Systems | GHLVertex",
    description:
      "Engineering autonomous AI agents that can reason, use external APIs, query knowledge bases, and execute business goals reliably inside your CRM and software stack.",
    url: `${siteConfig.url}/services/ai-agent-development-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "AI Agent Development Services", href: "/services/ai-agent-development-services/" },
];

const faqs = [
  {
    question: "What are AI agent development services?",
    answer:
      "AI agent development services design, program, and deploy autonomous software agents powered by Large Language Models capable of executing goal-oriented multi-step workflows. These systems leverage persistent memory, external tool usage (APIs, calculators, databases), Retrieval-Augmented Generation, and structured validation guardrails to complete complex business functions such as autonomous scheduling, lead triage, and cross-platform data synchronization.",
  },
  {
    question: "How is an AI agent different from a standard AI chatbot?",
    answer:
      "A chatbot only answers questions in a conversation window. An AI agent is goal-driven: it formulates a plan, executes external tools (such as querying a CRM database, sending an SMS, or creating a calendar event), verifies the tool response, and iterates until the objective is achieved.",
  },
  {
    question: "What external tools and APIs can an AI agent use?",
    answer:
      "Agents can call any documented REST API, SQL database, web search engine, CRM webhook, email gateway, or internal software tool. We configure fine-grained tool schemas so the agent knows precisely when and how to invoke functions like search_contact(), book_calendar_slot(), or send_slack_alert().",
  },
  {
    question: "How do you manage agent memory across long conversations?",
    answer:
      "We implement a tiered memory architecture: short-term buffer memory maintains the immediate conversation context, while long-term semantic memory (backed by vector databases or PostgreSQL) retrieves historical interactions, user preferences, and prior transaction records dynamically.",
  },
  {
    question: "What frameworks do you use to build AI agents?",
    answer:
      "We utilize modern agentic frameworks tailored to your architecture: LangChain, LangGraph (for cyclic stateful multi-agent workflows), LlamaIndex, OpenAI Assistants API, and custom Python/Node.js state machines with deterministic routing.",
  },
  {
    question: "How do you prevent an autonomous agent from getting trapped in infinite loops?",
    answer:
      "We enforce hard execution limits: maximum step counts, token thresholds, timeout guards, and deterministic circuit breakers. If an agent fails to make progress after a set number of attempts, it halts execution and alerts an operator.",
  },
  {
    question: "Can multiple AI agents collaborate on a complex workflow?",
    answer:
      "Yes. We build multi-agent architectures where specialized agents collaborate: a 'Triage Agent' classifies an inquiry, a 'Researcher Agent' queries company documentation via RAG, and an 'Action Agent' schedules the calendar event and updates the CRM.",
  },
  {
    question: "How do you evaluate and test AI agent accuracy before launch?",
    answer:
      "We run automated evaluation suites (Evals) with synthetic and real benchmark scenarios, testing edge cases, tool call accuracy, latency, and boundary violations to ensure reliable execution before production cutover.",
  },
  {
    question: "How long does it take to develop and deploy a custom AI agent?",
    answer:
      "A single-purpose custom agent (e.g. an autonomous appointment scheduling or support agent) typically takes 2 to 3 weeks. Complex multi-agent systems with extensive enterprise integrations take 4 to 6 weeks.",
  },
];

export default function AiAgentDevelopmentServicesPage() {
  const currentUrl = "/services/ai-agent-development-services/";
  const pageSchema = getWebPageSchema({
    title: "AI Agent Development Services | Custom Autonomous AI Agents",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "AI Agent Development Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Autonomous AI Agents & Multi-Agent Systems Development",
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
        eyebrow="Agentic Systems Engineering"
        h1="Custom AI Agent Development Services for Autonomous Business Operations"
        description="We build intelligent, tool-using AI agents that reason, plan, and take autonomous actions across your software stack. From multi-agent orchestration to persistent memory and deterministic guardrails, our agents execute real work 24/7."
        primaryCtaText="Plan My AI Agent"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore Agent Architecture"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Tech Leaders, Operations Innovators & Software Companies"
        outcomeText="Autonomous Task Execution, Multi-Step Tool Calling & Reliable Oversight"
        diagramTitle="Autonomous Agent Reasoning & Tool-Call Loop"
        flowSteps={[
          { label: "Goal Definition & Input Perception", sublabel: "State Capture & Long-Term Memory Recall" },
          { label: "Chain-of-Thought Reasoning", sublabel: "Planning Steps & Selecting Target Tools" },
          { label: "External Tool Execution", sublabel: "API Webhook, CRM Query or DB Read/Write" },
          { label: "Observation & Validation", sublabel: "Output Verification Against Goal Criteria" },
          { label: "State Update & Action Completion", sublabel: "CRM Memory Sync & Human Handover" },
        ]}
        highlights={[
          "Function Calling & API Integration",
          "Persistent Long-Term Memory (RAG)",
          "Deterministic Guardrails & Sandboxing",
          "Automated Benchmark Evals",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What are AI agent development services?"
        answer="AI agent development services design, program, and deploy autonomous software agents powered by Large Language Models capable of executing goal-oriented multi-step workflows. These systems leverage persistent memory, external tool usage (APIs, calculators, databases), Retrieval-Augmented Generation, and structured validation guardrails to complete complex business functions such as autonomous scheduling, lead triage, and cross-platform data synchronization."
        keyTakeaways={[
          "Moves beyond passive text generation to active tool execution across CRMs, calendars, and external databases.",
          "Maintains state and multi-turn context with short-term buffers and long-term vector/relational memory.",
          "Employs LangGraph and state machines for reliable multi-agent collaboration with loop breakers.",
          "Integrates human-in-the-loop checkpoints for financial, legal, and high-impact operational decisions.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Agent Frameworks, Runtimes & Models"
        technologies={[
          "LangGraph / LangChain",
          "OpenAI Function Calling",
          "Claude Tool Use API",
          "LlamaIndex Workflows",
          "Pinecone / Qdrant Vector Stores",
          "GoHighLevel Webhooks",
          "Python / FastAPI / Docker",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The Limitations of Basic Chatbots"
        heading="Why Simple Chatbots Fail to Deliver Real Operational Value"
        subtitle="Passive chat widgets that cannot take actions or remember past interactions leave customers frustrated and staff overburdened."
        problems={[
          {
            title: "Chatbots That Can't Actually Do Anything",
            description:
              "Basic chatbots can recite FAQs but cannot check calendar availability, book an appointment, or update an opportunity stage in your CRM.",
            consequence: "Customers are forced to repeat themselves to a human agent, multiplying friction.",
          },
          {
            title: "Amnesia Across Multi-Turn Interactions",
            description:
              "Standard AI interfaces lose memory between sessions, treating a returning high-value client like a total stranger who just landed on the site.",
            consequence: "Impersonal customer experience and lost contextual upsell opportunities.",
          },
          {
            title: "Uncontrolled Autonomous Actions & Loops",
            description:
              "Poorly engineered agent prototypes enter infinite recursive loops or fire errant API calls without validation checks.",
            consequence: "Corrupted CRM records, spam email storms, and unexpected API token cost spikes.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="Agent Engineering Scope"
        heading="What We Build Into Production AI Agents"
        subtitle="Full-stack agent architecture engineered for mission-critical business environments."
        features={[
          {
            title: "Custom Tool & Function Calling Integrations",
            description:
              "Equipping your agents with validated schemas to interact with internal software and public APIs.",
            deliverables: [
              "Strict JSON schema definitions for each callable business tool",
              "Connectors to GoHighLevel, Stripe, Google Calendar, and SQL databases",
              "Idempotency keys preventing accidental duplicate tool executions",
              "Automated response sanitization before model re-entry",
            ],
          },
          {
            title: "Persistent State & Multi-Tier Memory Systems",
            description:
              "Enabling agents to remember user preferences, transaction history, and prior conversation threads.",
            deliverables: [
              "Short-term working memory buffer for multi-turn conversational nuance",
              "Long-term semantic memory retrieval via vector databases and metadata filtering",
              "User profile entity store linking conversations to CRM contact records",
              "Automatic memory summarization to optimize context window efficiency",
            ],
          },
          {
            title: "Multi-Agent Coordination & State Graphs",
            description:
              "Orchestrating specialized sub-agents working together to solve complex multi-stage objectives.",
            deliverables: [
              "LangGraph state machine architectures with deterministic branching",
              "Supervisor agents directing specialized worker agents (Search, Draft, Execute)",
              "Formal handoff protocols between agents and human team members",
              "Circuit breaker logic halting execution on ambiguous states",
            ],
          },
          {
            title: "Agent Observability, Evals & Guardrails",
            description:
              "Ensuring your autonomous systems operate safely, predictably, and within strict compliance boundaries.",
            deliverables: [
              "Automated regression test suites (Evals) benchmarking tool call accuracy",
              "Full telemetry logging tracing every intermediate thought, tool call, and latency metric",
              "Input and output guardrails filtering jailbreaks, offensive language, and hallucinations",
              "Human review queues for low-confidence or high-impact actions",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="Agent System Design"
        heading="Autonomous Scheduling & Triage Agent Architecture"
        subtitle="How an AI agent uses tools and memory to qualify a lead and schedule an appointment autonomously."
        nodes={[
          {
            phase: "Cycle 1: Intent & Memory Lookup",
            title: "Inbound Message & Contact Recall",
            description:
              "Lead texts: 'I'd like to book an HVAC tune-up this Thursday afternoon.' Agent identifies user, fetches past service records from GHL, and identifies the goal.",
            technicalDetails: "User Lookup Tool • State Graph Initialization • Memory Query",
          },
          {
            phase: "Cycle 2: Tool Calling & Availability Check",
            title: "Calendar Availability Query",
            description:
              "Agent calls check_technician_availability() for Thursday 12:00 PM – 5:00 PM, receives available slots, and constructs a polite, specific response.",
            technicalDetails: "Function Call: check_calendar • GHL Calendar API • Slot Validation",
          },
          {
            phase: "Cycle 3: Confirmation & Action Dispatch",
            title: "Slot Selection & Appointment Booking",
            description:
              "Customer selects 2:00 PM. Agent executes book_appointment() with contact ID and service type, securing the time slot on the technician's calendar.",
            technicalDetails: "Function Call: book_appointment • Conflict Check • Confirmation Token",
          },
          {
            phase: "Cycle 4: CRM State Synchronization",
            title: "Pipeline Advancement & Handoff",
            description:
              "Agent updates the opportunity in GoHighLevel to 'Appointment Confirmed', applies the 'Tune-Up Booked' tag, and sends calendar confirmation details.",
            technicalDetails: "GHL Pipeline API • Contact Note Append • SMS Dispatch Gateway",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Architectural Comparison"
        heading="Static Chatbots vs. GHLVertex Autonomous AI Agents"
        subtitle="Why modern businesses are upgrading from primitive prompt-response bots to intelligent agents."
        leftColumnHeader="Static Scripted / FAQ Chatbots"
        rightColumnHeader="GHLVertex Autonomous AI Agents"
        rows={[
          {
            dimension: "Action Capability",
            traditional: "Zero action execution; can only output pre-written text or send link to a form.",
            ghlVertex: "Full API tool execution: checks calendars, creates deals, queries databases, sends SMS.",
          },
          {
            dimension: "Memory & Context",
            traditional: "Session forgets everything the second the visitor refreshes or closes the tab.",
            ghlVertex: "Persistent cross-session memory linked to CRM contact ID and historical interactions.",
          },
          {
            dimension: "Multi-Step Problem Solving",
            traditional: "Breaks immediately on multi-part requests or unexpected question sequences.",
            ghlVertex: "Plans steps, analyzes intermediate tool responses, and self-corrects toward the goal.",
          },
          {
            dimension: "Safety & Reliability",
            traditional: "Brittle regex or ungrounded generative models prone to embarrassing answers.",
            ghlVertex: "Strict function schemas, deterministic validation layers, and human escalation gates.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Agentic Scenarios"
        heading="High-Impact AI Agents We Build"
        subtitle="Concrete applications of autonomous AI agents executing real operational tasks."
        useCases={[
          {
            scenarioTitle: "Autonomous Inbound Sales & Scheduling Agent",
            trigger: "Inbound lead submits incomplete contact form after hours.",
            orchestration:
              "Agent initiates two-way SMS, asks missing qualification questions, verifies budget, queries real-time calendar availability, and books the sales call.",
            outcome: "Converts cold form inquiries into confirmed calendar bookings in minutes.",
          },
          {
            scenarioTitle: "Tier-1 Technical Support & Diagnostic Agent",
            trigger: "SaaS customer submits a bug report with an error screenshot.",
            orchestration:
              "Vision model inspects error, queries private technical knowledge base, runs API diagnostic on customer's account status, and provides step-by-step resolution.",
            outcome: "Resolves 45% of tier-1 support tickets instantly without human support intervention.",
          },
          {
            scenarioTitle: "Lead Reactivation & Database Nurture Agent",
            trigger: "1,000 old dormant leads sitting untouched in CRM for 90+ days.",
            orchestration:
              "Agent reads historical deal notes, crafts contextual check-in SMS, handles conversational objections, and re-books interested prospects onto rep calendars.",
            outcome: "Unlocks tens of thousands in pipeline value from dead CRM databases.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Safety & Governance"
        heading="Safe Autonomy: Bounded Permissions & Human Oversight"
        subtitle="We build agents with clear guardrails so they operate with executive accountability."
        items={[
          {
            title: "Strict Least-Privilege API Access",
            description:
              "Agents are only granted scoped permissions necessary for their specific role (e.g. read calendar, write appointment), never global admin privileges.",
          },
          {
            title: "Execution Budgets & Loop Protection",
            description:
              "Hard caps on step counts, token usage, and API retries ensure runaway loops are mathematically impossible.",
          },
          {
            title: "Deterministic Guardrails & Sandboxing",
            description:
              "Every parameter generated by the model is validated against strict Pydantic/Zod schemas before hitting external APIs.",
          },
        ]}
        humanInLoopNotes={[
          "Billing, card charges, refunds, and bank payouts are strictly isolated from autonomous agent execution.",
          "Legal agreements and contractual commitments require human sign-off.",
          "Low-confidence reasoning paths automatically route to human agents with the full context transcript.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Development Sprint"
        heading="Our AI Agent Engineering Lifecycle"
        subtitle="From agent prompt tuning to rigorous Eval benchmarking and production rollout."
        steps={[
          {
            number: "01",
            timeline: "Week 1",
            title: "Tool Schema & State Design",
            description:
              "We define the agent's goal, identify all required API tools, structure JSON schemas, and design the state machine flow.",
            deliverables: ["Tool API Specifications", "State Machine Blueprint", "Evaluation Dataset Criteria"],
          },
          {
            number: "02",
            timeline: "Week 2",
            title: "Agent Programming & Tool Hookup",
            description:
              "We implement LangGraph state machines, connect external APIs (GHL, Twilio, DBs), and configure memory vector stores.",
            deliverables: ["Functional Agent Prototype", "Live Tool Connectors", "Short/Long Term Memory Setup"],
          },
          {
            number: "03",
            timeline: "Week 3",
            title: "Eval Benchmarking & Boundary Hardening",
            description:
              "We run automated test suites against 100+ edge cases, measuring tool call accuracy, latency, and guardrail enforcement.",
            deliverables: ["Automated Eval Report", "Guardrail Hardening", "Human Escalation Triggers"],
          },
          {
            number: "04",
            timeline: "Week 4",
            title: "Production Deployment & Observability",
            description:
              "We deploy the agent to secure cloud infrastructure, connect production communication channels, and establish telemetry dashboards.",
            deliverables: ["Live Production Cutover", "Real-Time Telemetry Dashboard", "Video Training & Runbooks"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Operational ROI"
        heading="Measurable Value of Autonomous AI Agents"
        subtitle="Realistic, verifiable operational benefits achieved through custom agent engineering."
        outcomes={[
          {
            focusArea: "Response Velocity",
            metricLabel: "Instantaneous 24/7 Action Execution",
            description:
              "Inquiries and operational triggers are processed within seconds, booking appointments and updating records regardless of hour.",
          },
          {
            focusArea: "Capacity Scaling",
            metricLabel: "Unlimited Concurrent Handling",
            description:
              "Handle hundreds of simultaneous customer conversations and booking requests without degrading service quality or adding headcount.",
          },
          {
            focusArea: "Human Leverage",
            metricLabel: "Staff Focused on High-Value Deals",
            description:
              "Human account executives receive pre-qualified, scheduled meetings with complete briefing summaries already logged in CRM.",
          },
          {
            focusArea: "Process Consistency",
            metricLabel: "100% Adherence to Qualification Rules",
            description:
              "Eliminate human forgetfulness; agents systematically verify every required qualifying question before booking meetings.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "True Agentic State Engineering",
            description:
              "We don't build superficial wrappers. We architect robust LangGraph state machines with deterministic error recovery.",
          },
          {
            title: "Deep GoHighLevel & Tool Mastery",
            description:
              "Our agents are purpose-built to read, write, and orchestrate actions directly inside your GoHighLevel CRM ecosystem.",
          },
          {
            title: "Rigorous Eval Benchmarking",
            description:
              "We test every agent with automated evaluation suites to prove reliability and accuracy before deploying to your customers.",
          },
          {
            title: "You Own the Entire Stack",
            description:
              "You own the code, the prompts, and the integration schemas. Zero recurring vendor lock-in fees.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "RAG Development Services",
            href: "/services/rag-development-services/",
            badge: "Grounded Knowledge",
            description: "Empower your agents with private, hallucination-free retrieval across company SOPs and technical documentation.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "API Connectivity",
            description: "Secure pipelines connecting AI models to your existing enterprise software, webhooks, and databases.",
          },
          {
            title: "AI Chatbot Development Services",
            href: "/services/ai-chatbot-development-services/",
            badge: "Conversational UI",
            description: "Customer-facing conversational chat interfaces tailored for website live chat, SMS, and WhatsApp.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Deploy Autonomous Agents?"
        heading="Build AI Agents That Execute Real Work Across Your Business Systems."
        subtitle="Schedule a technical architecture call with an AI agent engineer to map your use cases and tool schemas."
        primaryBtnText="Plan My AI Agent"
        primaryBtnHref="/#contact"
        secondaryBtnText="Explore RAG Knowledge Systems"
        secondaryBtnHref="/services/rag-development-services/"
      />
    </>
  );
}
