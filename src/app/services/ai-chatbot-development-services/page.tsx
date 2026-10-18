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
  title: "AI Chatbot Development Services | Custom Conversational AI",
  description:
    "Custom AI chatbot development services. We build smart, grounded conversational bots for web chat, SMS, and WhatsApp with instant CRM sync and human handoff.",
  alternates: {
    canonical: "/services/ai-chatbot-development-services/",
  },
  openGraph: {
    title: "AI Chatbot Development Services & Conversational AI | GHLVertex",
    description:
      "Deploy custom AI chatbots that qualify leads, answer customer questions accurately from your knowledge base, and book appointments directly into your CRM.",
    url: `${siteConfig.url}/services/ai-chatbot-development-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "AI Chatbot Development Services", href: "/services/ai-chatbot-development-services/" },
];

const faqs = [
  {
    question: "What are AI chatbot development services?",
    answer:
      "AI chatbot development services build customized conversational interfaces that understand natural language intent, retrieve accurate answers from proprietary company knowledge bases, and take direct actions such as qualifying prospects and booking calendar appointments. Integrated directly with your CRM and messaging channels like WhatsApp, SMS, and website widgets, they deliver human-grade conversations with seamless escalation protocols.",
  },
  {
    question: "How do your custom AI chatbots prevent inaccurate answers and hallucinations?",
    answer:
      "We build our chatbots on Retrieval-Augmented Generation (RAG) frameworks. The chatbot is strictly constrained to query your verified company knowledge base (SOPs, FAQs, pricing tables, product guides). If a question falls outside this verified corpus, the chatbot politely acknowledges its boundaries and escalates the conversation to a human specialist.",
  },
  {
    question: "Which communication channels can the chatbot be deployed on?",
    answer:
      "We deploy omnichannel chatbots across website live chat widgets, SMS text messaging, WhatsApp Business API, Facebook Messenger, Instagram DMs, and internal Slack/Teams channels, all feeding into a single unified inbox inside GoHighLevel.",
  },
  {
    question: "How does the chatbot book appointments on our team's calendar?",
    answer:
      "The chatbot integrates directly with your GoHighLevel or Google Calendar. During the conversation, it asks qualifying questions, checks real-time slot availability, displays matching times in the chat, and confirms the booking with two-way SMS reminders.",
  },
  {
    question: "What happens when a human agent needs to take over the conversation?",
    answer:
      "We build seamless human-in-the-loop handoff triggers. If a customer types 'speak to a human', expresses frustration, or asks an out-of-scope question, the chatbot automatically pauses itself, tags the conversation in GHL as 'Needs Human Attention', and sends an instant push notification to your team.",
  },
  {
    question: "Can the chatbot update contact information and tags inside our CRM?",
    answer:
      "Yes. Every piece of information collected (name, email, phone, budget, timeline, service needed) is parsed and saved to the customer's contact record in GoHighLevel in real time.",
  },
  {
    question: "What analytics and conversation logs do we have access to?",
    answer:
      "You receive complete visibility into all chat transcripts, resolution rates, lead capture counts, common customer drop-off points, and sentiment scores through an executive dashboard.",
  },
  {
    question: "How long does it take to develop and launch a custom AI chatbot?",
    answer:
      "A complete custom chatbot deployment—including knowledge base ingestion, CRM integration, testing, and channel rollout—typically takes between 10 to 14 business days.",
  },
  {
    question: "Can we update the chatbot's knowledge base as our pricing or services change?",
    answer:
      "Yes. We configure an intuitive knowledge management system allowing you to upload new PDFs, edit FAQs, or update service sheets without writing code. The chatbot ingests the new data within minutes.",
  },
];

export default function AiChatbotDevelopmentServicesPage() {
  const currentUrl = "/services/ai-chatbot-development-services/";
  const pageSchema = getWebPageSchema({
    title: "AI Chatbot Development Services | Custom Conversational AI",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "AI Chatbot Development Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Conversational AI & Custom Chatbot Development",
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
        eyebrow="Conversational AI & Lead Capture"
        h1="Custom AI Chatbot Development Services for Customer Support & Lead Conversion"
        description="We build intelligent, brand-aligned conversational chatbots that engage website visitors, answer questions from your verified knowledge base, qualify leads, and schedule appointments directly inside your CRM 24/7."
        primaryCtaText="See What We Can Build"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore Chatbot Capabilities"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Service Providers, E-Commerce Brands & High-Traffic Websites"
        outcomeText="24/7 Instant Lead Capture, Zero Missed Inquiries & Frictionless Human Handoff"
        diagramTitle="Omnichannel Conversational AI Architecture"
        flowSteps={[
          { label: "Visitor Message Arrival", sublabel: "Web Chat, SMS, WhatsApp or Social DM" },
          { label: "Intent Recognition & Knowledge Retrieval", sublabel: "Semantic Vector Search across Company SOPs" },
          { label: "Grounded Response Generation", sublabel: "Zero-Hallucination Guardrails & Friendly Tone" },
          { label: "CRM Action Execution", sublabel: "Contact Tagging, Calendar Booking & Lead Scoring" },
          { label: "Human Escalation Gate", sublabel: "Smooth Staff Handoff on Frustration or Complex Requests" },
        ]}
        highlights={[
          "RAG-Grounded Knowledge Base",
          "Omnichannel (Web, SMS, WhatsApp)",
          "Direct GoHighLevel Calendar Sync",
          "Instant Push Notification Handoff",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What are AI chatbot development services?"
        answer="AI chatbot development services build customized conversational interfaces that understand natural language intent, retrieve accurate answers from proprietary company knowledge bases, and take direct actions such as qualifying prospects and booking calendar appointments. Integrated directly with your CRM and messaging channels like WhatsApp, SMS, and website widgets, they deliver human-grade conversations with seamless escalation protocols."
        keyTakeaways={[
          "Replaces frustrating scripted 'press 1 for sales' decision trees with fluid, natural conversational dialogue.",
          "Grounds chatbot intelligence strictly in your approved documentation to eliminate inaccurate answers and hallucinated pricing.",
          "Captures verified contact information and qualifies prospective buyers before offering calendar booking slots.",
          "Features automated sentiment monitoring that transfers sensitive or complex conversations to human staff immediately.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Supported Channels & Conversational Engines"
        technologies={[
          "Website Chat Widget",
          "Twilio SMS / MMS",
          "WhatsApp Business API",
          "OpenAI GPT-4o & Claude 3.5",
          "Pinecone Knowledge Base",
          "GoHighLevel Conversations API",
          "Slack Live Handoff Notifications",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The Customer Support Gap"
        heading="Why Clunky Rule-Based Chat Widgets Hurt Your Brand Reputation"
        subtitle="Modern consumers expect immediate, accurate answers. When chatbots act like broken phone trees, visitors leave for your competitors."
        problems={[
          {
            title: "Rigid Decision Trees Frustrate High-Intent Buyers",
            description:
              "Visitors ask a straightforward question like 'Do you service zip code 90210?' and get stuck in an endless loop of unhelpful menu buttons.",
            consequence: "Visitors bounce in frustration without submitting their contact details.",
          },
          {
            title: "Zero Memory of Prior Customer Interactions",
            description:
              "Existing clients asking about their booked appointment are treated like cold strangers, asked for basic information all over again.",
            consequence: "Poor customer satisfaction and an impersonal brand perception.",
          },
          {
            title: "Unguarded AI Bots Making Wild Promises",
            description:
              "Using generic off-the-shelf bots without strict knowledge guardrails leads to chatbots offering unauthorized discounts or inventing services you don't provide.",
            consequence: "Customer disputes, legal friction, and brand embarrassment.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="Development Deliverables"
        heading="Full-Stack Custom AI Chatbot Capabilities"
        subtitle="Tailored conversational engineering designed to convert visitors and delight customers."
        features={[
          {
            title: "Proprietary Knowledge Base Grounding (RAG)",
            description:
              "Connecting the chatbot to your official service manuals, pricing sheets, and policy documentation.",
            deliverables: [
              "Ingestion and chunking of PDFs, web pages, and support SOPs",
              "Hybrid semantic and keyword search for accurate fact retrieval",
              "Strict anti-hallucination prompts preventing off-topic or speculative answers",
              "Automatic citation of source documentation for internal verification",
            ],
          },
          {
            title: "Omnichannel Messaging Deployment",
            description:
              "Deploying a unified conversational experience across all customer communication touchpoints.",
            deliverables: [
              "Lightweight, accessible website live chat widget with brand styling",
              "Two-way conversational SMS integration via Twilio / LC Phone",
              "WhatsApp Business API integration for global and mobile-first audiences",
              "Unified conversation stream synced directly into GoHighLevel inbox",
            ],
          },
          {
            title: "Intelligent Qualification & Calendar Booking",
            description:
              "Turning conversations into qualified pipeline opportunities and booked appointments.",
            deliverables: [
              "Dynamic qualification questions adapted naturally to customer responses",
              "Real-time calendar slot checking and interactive scheduling within chat",
              "Instant contact creation, tagging, and pipeline stage advancement in CRM",
              "Automated SMS/Email meeting confirmations with calendar invite links",
            ],
          },
          {
            title: "Frictionless Human Handoff & Sentiment Monitoring",
            description:
              "Ensuring human team members can step in seamlessly whenever an inquiry requires human touch.",
            deliverables: [
              "Sentiment detection routing frustrated or urgent customers to human staff",
              "Keyword-triggered manual handoff ('speak to manager', 'call me')",
              "Instant team notifications via Slack, SMS, or GoHighLevel mobile app",
              "One-click bot pause allowing staff to take over typing without bot interference",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="Conversational Flow"
        heading="Lead Qualification & Booking Chatbot Architecture"
        subtitle="How an incoming website visitor chat is resolved or converted into a booked sales meeting."
        nodes={[
          {
            phase: "Step 1: Visitor Greeting",
            title: "Contextual Greeting & Inquiry",
            description:
              "Visitor opens chat widget on your pricing page. Chatbot greets with contextual prompt: 'Have a question about our enterprise plans?'",
            technicalDetails: "Page URL Detection • Session Init • Personalized Greeting",
          },
          {
            phase: "Step 2: Grounded Fact Retrieval",
            title: "Knowledge Base Query & Answer",
            description:
              "Visitor asks about custom API integrations. Chatbot retrieves exact API documentation snippet via vector search and answers accurately in 2 sentences.",
            technicalDetails: "Pinecone Vector Query • RAG Grounding • Sub-second Generation",
          },
          {
            phase: "Step 3: Qualification & Booking Prompt",
            title: "Intent Identification & Calendar Check",
            description:
              "Visitor asks to discuss custom deployment. Chatbot collects name, email, and company size, checks sales calendar, and presents 3 available times.",
            technicalDetails: "Contact Verification • GHL Calendar API • Slot Availability",
          },
          {
            phase: "Step 4: Confirmation & CRM Sync",
            title: "Booking Finalized & Pipeline Update",
            description:
              "Visitor clicks slot. Chatbot books appointment, applies 'Chat Qualified' tag in GHL, sends calendar invite, and notifies sales rep on Slack.",
            technicalDetails: "GHL Opportunity API • Twilio SMS Confirm • Slack Webhook Alert",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Direct Comparison"
        heading="Basic Chatbot Plugins vs. GHLVertex Custom AI Chatbots"
        subtitle="Why generic WordPress plugins and basic chatbot apps fail to match custom-engineered systems."
        leftColumnHeader="Generic Chatbot Plugins"
        rightColumnHeader="GHLVertex Custom AI Chatbot"
        rows={[
          {
            dimension: "Knowledge Accuracy",
            traditional: "Generic answers based on public internet training; prone to hallucinating false pricing.",
            ghlVertex: "Strictly grounded in your private documentation; zero speculative answers.",
          },
          {
            dimension: "CRM Integration",
            traditional: "Funnels data into an isolated third-party dashboard requiring manual export.",
            ghlVertex: "Deep native bi-directional sync with GoHighLevel pipelines, contacts, and calendars.",
          },
          {
            dimension: "Channel Reach",
            traditional: "Restricted exclusively to a website widget; cannot continue conversations over SMS.",
            ghlVertex: "True omnichannel support: seamlessly moves conversations from web chat to SMS and WhatsApp.",
          },
          {
            dimension: "Human Handoff",
            traditional: "Rudimentary email alert with hours of delay; no clean way to pause the bot.",
            ghlVertex: "Instant real-time push/Slack notifications with 1-click bot mute and live takeover.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Implementation Examples"
        heading="Proven Chatbot Deployments Across Sectors"
        subtitle="Real-world conversational workflows that increase lead velocity and lighten support workloads."
        useCases={[
          {
            scenarioTitle: "Local Dental Practice Patient Booking",
            trigger: "New patient visits clinic website on Sunday afternoon with severe toothache.",
            orchestration:
              "Chatbot answers emergency triage questions, confirms accepted insurance providers from knowledge base, and books emergency morning slot directly in dental calendar.",
            outcome: "High-value emergency patient booked without human receptionist weekend hours.",
          },
          {
            scenarioTitle: "E-Commerce Order Tracking & Returns",
            trigger: "Customer enters order number into live chat widget asking for shipping update.",
            orchestration:
              "Chatbot queries order tracking API, outputs live FedEx delivery status, and offers 1-click return label generation if item has arrived.",
            outcome: "Deflects 50% of routine 'Where is my order?' tickets instantly.",
          },
          {
            scenarioTitle: "B2B SaaS Lead Qualification Chatbot",
            trigger: "Website visitor spends 90 seconds on enterprise pricing page.",
            orchestration:
              "Bot initiates conversation, qualifies team seat requirements, checks if annual budget exceeds threshold, and connects prospect directly to senior sales rep.",
            outcome: "Captures qualified enterprise prospects before they exit the page.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Brand Safety"
        heading="Enterprise Safety, Moderation & Human Handover"
        subtitle="We build chatbots that represent your brand with impeccable professionalism and safety controls."
        items={[
          {
            title: "Automated Content Moderation",
            description:
              "Built-in semantic filters detect offensive inputs, adversarial prompt injection attempts, and competitive probing.",
          },
          {
            title: "Private Knowledge Isolation",
            description:
              "Internal documentation and customer conversations are processed through private enterprise APIs with zero public training.",
          },
          {
            title: "Instant Staff Takeover Controls",
            description:
              "Human agents can instantly pause the bot with a single toggle in GoHighLevel to take over the conversation seamlessly.",
          },
        ]}
        humanInLoopNotes={[
          "Billing disputes, refund requests, and customer cancellations immediately escalate to human support staff.",
          "Custom enterprise contract terms or legal agreements are never committed to by the chatbot.",
          "Conversations flagged with negative sentiment alerts trigger priority notifications to customer experience leads.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Development Sprint"
        heading="Our 4-Stage Chatbot Implementation Lifecycle"
        subtitle="From knowledge ingestion to omnichannel production cutover in two weeks."
        steps={[
          {
            number: "01",
            timeline: "Days 1–3",
            title: "Knowledge Ingestion & Persona Design",
            description:
              "We collect your company SOPs, service sheets, and FAQs, structuring them into a clean retrieval database while defining your chatbot's brand voice.",
            deliverables: ["Curated Knowledge Corpus", "Brand Voice & Persona Spec", "Intent Taxonomy"],
          },
          {
            number: "02",
            timeline: "Days 4–7",
            title: "RAG Pipeline & Tool Engineering",
            description:
              "We configure vector search, write prompt guardrails, connect calendar booking APIs, and wire GoHighLevel CRM webhooks.",
            deliverables: ["Grounded Retrieval Engine", "Calendar API Connector", "CRM Field Sync Setup"],
          },
          {
            number: "03",
            timeline: "Days 8–10",
            title: "Adversarial Testing & Human Handoff",
            description:
              "We simulate hundreds of customer conversations, testing edge cases, boundary refusals, and verified human escalation triggers.",
            deliverables: ["Simulation Test Report", "Human Notification Alerting", "Widget Styling Approval"],
          },
          {
            number: "04",
            timeline: "Days 11–14",
            title: "Omnichannel Launch & Team Training",
            description:
              "We embed the widget, connect SMS/WhatsApp gateways, and train your team on managing conversations inside the unified GHL inbox.",
            deliverables: ["Live Omnichannel Cutover", "Analytics Dashboard", "Team Video Walkthroughs"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Measurable Value"
        heading="Verifiable Gains of Custom Conversational AI"
        subtitle="Honest, supportable improvements in visitor engagement and operational responsiveness."
        outcomes={[
          {
            focusArea: "Lead Capture",
            metricLabel: "Capture Visitors Who Won't Fill Out Forms",
            description:
              "Engage modern buyers who prefer conversational messaging over filling out long, static contact forms.",
          },
          {
            focusArea: "Ticket Deflection",
            metricLabel: "Substantial Reduction in Support Volume",
            description:
              "Instantly resolve repetitive questions regarding business hours, service areas, and pricing without human agent time.",
          },
          {
            focusArea: "Speed-to-Lead",
            metricLabel: "Instantaneous 24/7 Response Time",
            description:
              "Provide immediate, accurate answers at midnight or on holidays, capturing prospects while buying intent is peak.",
          },
          {
            focusArea: "Pipeline Quality",
            metricLabel: "Pre-Qualified Sales Appointments",
            description:
              "Sales reps conduct calls only with prospects whose budget, timeline, and requirements have already been verified in chat.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "Zero Hallucination Guarantee",
            description:
              "We strictly ground your chatbot in your approved documentation. It never makes up false pricing or nonexistent services.",
          },
          {
            title: "Deep CRM & Inbox Synchronization",
            description:
              "Your chatbot doesn't live in a separate silo. Every message, tag, and booking syncs straight into your GoHighLevel dashboard.",
          },
          {
            title: "True Omnichannel Deployment",
            description:
              "Deploy across website chat, SMS, and WhatsApp with one unified brain and consistent brand messaging.",
          },
          {
            title: "Complete System Ownership",
            description:
              "You own the knowledge base, prompts, and workflows. No per-seat penalties or closed proprietary ecosystems.",
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
            description: "Upgrade from conversational chat to autonomous agents that execute multi-step tool calls and backend workflows.",
          },
          {
            title: "RAG Development Services",
            href: "/services/rag-development-services/",
            badge: "Enterprise Knowledge",
            description: "Architect robust semantic vector search engines to ground your conversational AI in massive document repositories.",
          },
          {
            title: "GHL Setup Services",
            href: "/services/ghl-setup-services/",
            badge: "CRM Architecture",
            description: "Configure your primary GoHighLevel CRM infrastructure, pipelines, and two-way telephony communications.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Convert More Visitors?"
        heading="Deploy an Intelligent AI Chatbot That Actually Understands Your Business."
        subtitle="Schedule a consultation with a conversational AI specialist to design your custom chatbot workflow."
        primaryBtnText="See What We Can Build"
        primaryBtnHref="/#contact"
        secondaryBtnText="Explore AI Agent Development"
        secondaryBtnHref="/services/ai-agent-development-services/"
      />
    </>
  );
}
