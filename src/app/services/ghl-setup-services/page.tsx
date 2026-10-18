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
  title: "GHL Setup Services | Professional GoHighLevel CRM Implementation",
  description:
    "Expert GoHighLevel (GHL) setup services. We architect custom sub-accounts, pipelines, calendar routing, automated workflows, and migrations to maximize CRM adoption.",
  alternates: {
    canonical: "/services/ghl-setup-services/",
  },
  openGraph: {
    title: "GoHighLevel (GHL) Setup & Implementation Services | GHLVertex",
    description:
      "Turnkey GoHighLevel CRM architecture, pipeline engineering, calendar automation, and custom snapshot configurations built for scalable agency and business growth.",
    url: `${siteConfig.url}/services/ghl-setup-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "GHL Setup Services", href: "/services/ghl-setup-services/" },
];

const faqs = [
  {
    question: "What is included in professional GHL setup services?",
    answer:
      "Our GoHighLevel setup covers complete sub-account configuration, custom sales pipeline design, automated calendar booking rules, missed-call text-back triggers, two-way SMS/email communication gateways, custom values and custom fields mapping, website/funnel form embeds, and role-based staff permission setups.",
  },
  {
    question: "How long does a typical GoHighLevel setup or migration take?",
    answer:
      "A standard full-stack setup or single-business migration typically takes between 7 to 14 business days depending on database clean-up needs, custom workflow complexity, and third-party API requirements.",
  },
  {
    question: "Can you migrate our contacts and deals from HubSpot, ActiveCampaign, or Keap?",
    answer:
      "Yes. We extract, sanitize, and deduplicate your existing contact records, historical notes, custom properties, and active deals, mapping them precisely into GHL custom fields and pipeline stages without data loss.",
  },
  {
    question: "Do you configure custom domains, email sending reputation, and Twilio phone numbers?",
    answer:
      "Yes. Technical infrastructure configuration is standard: we configure your DNS records (SPF, DKIM, DMARC, MX) via Mailgun or LC Email, set up Twilio or LC Phone numbers, and complete required A2P 10DLC brand and campaign registrations to ensure optimal deliverability.",
  },
  {
    question: "What is the difference between a pre-made snapshot and your custom GHL setup?",
    answer:
      "Pre-made snapshots are generic templates with placeholder text and rigid logic that often confuse team members. Our custom setup is engineered around your exact sales motion, service offerings, qualification criteria, and internal team notification structure.",
  },
  {
    question: "Will our internal team receive training on how to use the configured system?",
    answer:
      "Yes. Every implementation includes role-specific recorded video walk-throughs, custom SOP documentation, and a live handover session demonstrating daily pipeline management, contact tagging, and manual message handling.",
  },
  {
    question: "Can we integrate GHL with our proprietary software, custom webhooks, or Stripe billing?",
    answer:
      "Absolutely. We configure native integrations with Stripe for recurring payments, QuickBooks or external software via webhooks, and n8n or Zapier for advanced bi-directional data synchronization.",
  },
  {
    question: "What happens if a workflow breaks or triggers incorrectly after launch?",
    answer:
      "All workflows are pre-tested in isolated staging environments before going live. Following deployment, we provide a post-launch stabilization window with real-time monitoring and logging to catch any conditional branch issues.",
  },
  {
    question: "Do you offer ongoing technical management after the initial setup is complete?",
    answer:
      "Yes. We provide ongoing GHL optimization retainers, white-label technical support for agencies, and workflow enhancement sprints as your operational requirements expand.",
  },
];

export default function GhlSetupServicesPage() {
  const currentUrl = "/services/ghl-setup-services/";
  const pageSchema = getWebPageSchema({
    title: "GHL Setup Services | GoHighLevel CRM Implementation",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "GoHighLevel (GHL) Setup Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "CRM Implementation & Architecture",
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
        eyebrow="GoHighLevel (GHL) Architecture"
        h1="Complete GoHighLevel (GHL) Setup & Implementation Services"
        description="We architect, configure, and optimize high-performance GoHighLevel environments tailored to your sales cycle. From clean contact migrations to advanced multi-tier pipelines, automated calendar routing, and reliable deliverability protocols."
        primaryCtaText="Book a Free GHL Strategy Call"
        primaryCtaHref="/#contact"
        secondaryCtaText="Explore Core Setup Deliverables"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Scaling Agencies, B2B Teams & Local Service Operators"
        outcomeText="Fully Automated CRM, Clean Pipelines & Rapid Staff Adoption"
        diagramTitle="GHL Operational Sub-Account Architecture"
        flowSteps={[
          { label: "Account Infrastructure", sublabel: "DNS, A2P 10DLC, LC Phone & Mailgun Setup" },
          { label: "Pipeline & Data Modeling", sublabel: "Custom Fields, Deal Stages & Lead Scoring" },
          { label: "Calendar & Routing Rules", sublabel: "Round-Robin Availability & Buffer Safeguards" },
          { label: "Automation Engines", sublabel: "Speed-to-Lead, SMS/Email Sequences & Webhooks" },
          { label: "Team SOPs & Handoff", sublabel: "Staff Roles, Permissions & Video Walkthroughs" },
        ]}
        highlights={[
          "Zero Data-Loss Migration",
          "Full A2P 10DLC Compliance",
          "Tailored Pipeline Architecture",
          "Custom Staff Training SOPs",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What are GHL setup services?"
        answer="GoHighLevel setup services are specialized technical implementation services that configure, customize, and deploy the GoHighLevel CRM platform for your business. This includes setting up sub-accounts, contact pipelines, two-way calendar booking, custom communication workflows, webhooks, and third-party integrations, ensuring your marketing, sales, and customer operations run seamlessly without technical bottlenecks."
        keyTakeaways={[
          "Eliminates reliance on fragmented subscriptions by consolidating CRM, email, SMS, funnels, and appointment booking.",
          "Establishes strict telephony (A2P 10DLC) and email authentication (DKIM/DMARC) to avoid spam filters and blocked messaging.",
          "Custom-builds multi-stage pipelines that accurately represent your sales methodology rather than generic templates.",
          "Configures automated lead triage that notifies sales reps within seconds of form or inbound phone inquiries.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Integrated Systems & Telephony Protocols"
        technologies={[
          "GoHighLevel (LeadConnector)",
          "Twilio / LC Phone",
          "Mailgun / LC Email",
          "A2P 10DLC Registration",
          "Stripe Connect",
          "Google / Outlook Calendar",
          "n8n / Webhooks API",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The GHL Configuration Bottleneck"
        heading="Why 70% of DIY GoHighLevel Implementations Stall"
        subtitle="GoHighLevel is immensely powerful, but poorly configured accounts lead to lost deals, blocked SMS carriers, and frustrated staff."
        problems={[
          {
            title: "Carrier Blocks & Deliverability Failures",
            description:
              "Unregistered A2P 10DLC brand campaigns and missing SPF/DKIM records result in immediate carrier filtering, sending your emails to spam and failing outbound SMS.",
            consequence: "Outbound prospect notifications fail silently, losing valuable inbound leads.",
          },
          {
            title: "Cluttered, Unused Custom Fields",
            description:
              "Importing bloated snapshots creates hundreds of orphaned fields, confusing sales reps and causing data fragmentation across team handoffs.",
            consequence: "Sales team stops using the CRM, reverting to manual spreadsheets and sticky notes.",
          },
          {
            title: "Looping or Broken Automation Logic",
            description:
              "Incomplete 'if/else' branches and missing stop conditions send repetitive or inappropriate follow-up messages to customers who have already purchased or booked.",
            consequence: "Unprofessional buyer experience and high opt-out/unsubscribe rates.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="What Gets Built"
        heading="Full-Scope GHL Implementation Deliverables"
        subtitle="A complete, production-ready GoHighLevel infrastructure tailored to your exact business operations."
        features={[
          {
            title: "Sub-Account Infrastructure & Telephony",
            description:
              "Complete foundational account provisioning with verified deliverability frameworks and phone compliance.",
            deliverables: [
              "A2P 10DLC Brand & Campaign submission",
              "Dedicated LC Phone / Twilio number routing",
              "Domain verification, SPF, DKIM, DMARC, and MX records",
              "Two-way SMS, call recording, and missed-call text-back setup",
            ],
          },
          {
            title: "Pipelines, Lead Scoring & Data Architecture",
            description:
              "Precision pipeline modeling that reflects your actual customer journey and qualification rules.",
            deliverables: [
              "Multi-stage opportunity pipelines with value tracking",
              "Clean custom field taxonomy and folder structuring",
              "Automated lead status tagging and activity scoring",
              "Sanitized data migration from HubSpot, ActiveCampaign, or Keap",
            ],
          },
          {
            title: "Calendar Booking & Round-Robin Routing",
            description:
              "Frictionless booking engines synchronized in real-time with Google Workspace or Microsoft 365.",
            deliverables: [
              "Round-robin, collective, and individual team calendars",
              "Custom appointment booking widgets with qualifying questions",
              "Automated pre-meeting SMS/email reminders to minimize no-shows",
              "Buffer times, minimum scheduling notices, and cancellation logic",
            ],
          },
          {
            title: "High-Converting Workflow Automations",
            description:
              "Rock-solid automated sequences that accelerate speed-to-lead and handle post-sale communications.",
            deliverables: [
              "Sub-60-second speed-to-lead notifications to sales reps",
              "Multi-channel nurture sequences across SMS, email, and task assignments",
              "Stripe payment triggers, receipt delivery, and access provisioning",
              "Review generation requests and post-service feedback loops",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="Execution Lifecycle"
        heading="Typical Operational GHL Lead-to-Close Lifecycle"
        subtitle="How an inbound prospect flows through a professionally architected GoHighLevel engine without manual intervention."
        nodes={[
          {
            phase: "Phase 1: Ingestion & Triage",
            title: "Lead Capture & Instant Verification",
            description:
              "Lead arrives via website form, Facebook ad, or inbound call. The system sanitizes phone format, verifies contact existence, and prevents duplicate records.",
            technicalDetails: "GHL Inbound Webhook • Phone Sanitization • Duplicate Check",
          },
          {
            phase: "Phase 2: Speed-to-Lead Engagement",
            title: "Immediate Two-Way Communication",
            description:
              "Within 45 seconds, an automated personalized SMS is dispatched. Simultaneously, an internal mobile notification pings the designated account executive.",
            technicalDetails: "LC Phone SMS Gateway • Internal Push Notification • Task Queue",
          },
          {
            phase: "Phase 3: Calendar Booking & Sync",
            title: "Self-Service Scheduling & Pipeline Movement",
            description:
              "The prospect selects a time slot. Calendar buffers check availability, book the event on Google Calendar, move the deal to 'Appointment Scheduled', and halt cold follow-ups.",
            technicalDetails: "Round-Robin Calendar Sync • Pipeline Stage Update • Stop Campaign Condition",
          },
          {
            phase: "Phase 4: Pre-Meeting Nurture & Reminders",
            title: "Attendance Assurance & Context Delivery",
            description:
              "Prospect receives SMS confirmation with calendar invite and reminder 24 hours and 1 hour before the call, while CRM compiles meeting notes for the sales rep.",
            technicalDetails: "Dynamic Custom Values • Smart Time Delays • Rep Briefing Note",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Direct Comparison"
        heading="DIY Snapshots vs. GHLVertex Custom Implementation"
        subtitle="Why pre-packaged marketplace snapshots fail to deliver sustained operational ROI."
        leftColumnHeader="Generic Marketplace Snapshot"
        rightColumnHeader="GHLVertex Custom Architecture"
        rows={[
          {
            dimension: "Setup Methodology",
            traditional: "Importing a bloated template filled with 100+ generic dummy assets.",
            ghlVertex: "Engineered specifically to mirror your company's actual sales operations.",
          },
          {
            dimension: "Deliverability & Telephony",
            traditional: "Ignored or partially set up; high risk of spam filtering and A2P fines.",
            ghlVertex: "Strict A2P 10DLC compliance, custom email domain validation, and deliverability testing.",
          },
          {
            dimension: "Workflow Reliability",
            traditional: "Basic linear templates that fail when a prospect replies off-script.",
            ghlVertex: "Robust conditional branches with stop triggers, error checks, and human escalation.",
          },
          {
            dimension: "Team Onboarding",
            traditional: "No documentation; internal staff struggles to navigate complex menus.",
            ghlVertex: "Custom recorded video SOPs and role-based access for sales and support staff.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Typical Implementation Scenarios"
        heading="Proven GHL Implementations Across Business Models"
        subtitle="Real-world scenarios showing how structured GoHighLevel environments solve operational friction."
        useCases={[
          {
            scenarioTitle: "Local Home Services Contractor",
            trigger: "Homeowner submits an emergency quote request after business hours.",
            orchestration:
              "GHL fires immediate SMS reply with calendar booking link, tags lead as 'High Urgency HVAC', creates deal in 'Unclaimed Opportunities', and routes alert to on-call manager.",
            outcome: "Lead booked for next-morning inspection within 3 minutes; zero missed revenue.",
          },
          {
            scenarioTitle: "B2B Professional Services Firm",
            trigger: "Prospect downloads industry research paper from website.",
            orchestration:
              "Lead is scored based on job title, enrolled in a 6-part thought leadership email cadence, and notified to sales rep once contact clicks consultation link.",
            outcome: "Sales team focuses outreach strictly on warm, engaged prospects ready for a call.",
          },
          {
            scenarioTitle: "Marketing Agency Sub-Account Rollout",
            trigger: "Agency signs 10 new dental clients requiring standardized CRM snapshots.",
            orchestration:
              "Deploy standardized master snapshot with dynamic custom values, auto-provision client Twilio numbers, and generate client login credentials with restricted view.",
            outcome: "Onboarding completed in under 48 hours without engineering team bottlenecks.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Security & Operational Governance"
        heading="Enterprise Data Protection & Access Controls in GHL"
        subtitle="We configure strict data partitioning and security standards to keep your customer records protected and compliant."
        items={[
          {
            title: "Role-Based Access Permissions",
            description:
              "Sales reps, account managers, and external contractors only see the contacts and financial data relevant to their role.",
          },
          {
            title: "Audit Logging & Workflow History",
            description:
              "Full execution tracking on every trigger, condition check, and outgoing message to diagnose any anomalies instantly.",
          },
          {
            title: "Protected Custom Fields & PII",
            description:
              "Sanitized field structuring ensures sensitive customer data and payment credentials are kept safe via PCI-compliant Stripe gateways.",
          },
        ]}
        humanInLoopNotes={[
          "Outbound bulk SMS campaigns require manual administrator authorization before launch.",
          "Contract signing, refunds, and deal deletion permissions remain restricted to senior management.",
          "Unsubscribe requests are permanently honored across all channels via automated suppression lists.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Delivery Roadmap"
        heading="Our 4-Phase GHL Setup Methodology"
        subtitle="Structured milestones designed to deploy your CRM environment quickly without business disruption."
        steps={[
          {
            number: "01",
            timeline: "Days 1–3",
            title: "Discovery & Process Mapping",
            description:
              "We audit your existing tech stack, sales stages, forms, and data exports, documenting the exact CRM architecture needed.",
            deliverables: ["CRM Architecture Spec", "Custom Field Taxonomy Map", "Pipeline Flowchart"],
          },
          {
            number: "02",
            timeline: "Days 4–7",
            title: "Infrastructure & Telephony Setup",
            description:
              "We configure DNS records, email sending domains, A2P 10DLC campaign registration, and phone number routing.",
            deliverables: ["SPF/DKIM/DMARC Setup", "A2P 10DLC Approval", "Phone Number Provisioning"],
          },
          {
            number: "03",
            timeline: "Days 8–11",
            title: "Workflows & Migration Buildout",
            description:
              "We build automation workflows, embed calendars, configure Stripe, and migrate sanitized historical contacts and deals.",
            deliverables: ["Clean Contact Migration", "Tested Workflow Logic", "Integrated Booking Calendars"],
          },
          {
            number: "04",
            timeline: "Days 12–14",
            title: "End-to-End Testing & Staff Handover",
            description:
              "We simulate live lead submissions, verify pipeline tracking, and deliver customized recorded SOP videos for your team.",
            deliverables: ["Test Execution Report", "Recorded Training Videos", "30-Day Stabilization Support"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Realistic Results"
        heading="Measurable Impact of a Clean GHL Infrastructure"
        subtitle="What organizations experience after moving from chaotic manual systems to an engineered GoHighLevel environment."
        outcomes={[
          {
            focusArea: "Speed-to-Lead",
            metricLabel: "Sub-Minute Response Times",
            description:
              "Inbound inquiries receive immediate personalized SMS and email confirmations, capturing prospect attention while intent is highest.",
          },
          {
            focusArea: "Operational Efficiency",
            metricLabel: "15+ Hours Saved Weekly Per Rep",
            description:
              "Eliminates manual contact logging, copy-pasting customer details, and sending individual appointment reminder emails.",
          },
          {
            focusArea: "Show-Up Rates",
            metricLabel: "Drastic Reduction in No-Shows",
            description:
              "Automated multi-channel reminders and easy 1-click rescheduling maintain full sales calendars with verified attendees.",
          },
          {
            focusArea: "Subscription Savings",
            metricLabel: "Consolidated Software Stack",
            description:
              "Replaces separate subscriptions for email marketing, SMS dispatch, calendar booking, and CRM into one unified platform.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "True Engineering Mindset",
            description:
              "We don't just paste generic templates. We build custom logic, test edge cases, and ensure clean API integrations.",
          },
          {
            title: "Deliverability First",
            description:
              "We treat DNS authentication, A2P 10DLC compliance, and sender reputation as mission-critical foundations.",
          },
          {
            title: "No Vendor Lock-In",
            description:
              "Your GHL account belongs entirely to you. You retain 100% ownership of your workflows, contacts, and custom assets.",
          },
          {
            title: "Full Team Enablement",
            description:
              "We train your sales and ops staff with custom video SOPs so your team adopts the new system from day one.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "GoHighLevel White Label Support",
            href: "/services/gohighlevel-white-label-support/",
            badge: "Agency Scaling",
            description: "Dedicated behind-the-scenes GHL technical support and onboarding for marketing agencies.",
          },
          {
            title: "Workflow Automation Services",
            href: "/services/workflow-automation-services/",
            badge: "Process Orchestration",
            description: "Advanced cross-platform business automation integrating n8n, custom webhooks, and enterprise APIs.",
          },
          {
            title: "AI Automation Services",
            href: "/services/ai-automation-services/",
            badge: "Intelligent Systems",
            description: "Layer intelligent LLM reasoning and autonomous AI agents over your existing CRM workflows.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready for a Clean CRM Setup?"
        heading="Stop Fighting Broken Workflows. Get Your GHL Account Architected Right."
        subtitle="Schedule a free strategy call to audit your current setup or plan a zero-downtime migration to GoHighLevel."
        primaryBtnText="Book a Free GHL Strategy Call"
        primaryBtnHref="/#contact"
        secondaryBtnText="See What We Can Automate"
        secondaryBtnHref="/services/workflow-automation-services/"
      />
    </>
  );
}
