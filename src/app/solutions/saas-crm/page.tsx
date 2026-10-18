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
  title: "SaaS CRM Implementation | Custom CRM & RevOps for SaaS",
  description:
    "Specialized SaaS CRM implementation services. We engineer custom GoHighLevel CRM architectures tracking product-qualified leads (PQLs), trials, onboarding, and churn.",
  alternates: {
    canonical: "/solutions/saas-crm/",
  },
  openGraph: {
    title: "SaaS CRM Architecture & RevOps Implementation | GHLVertex",
    description:
      "Turnkey CRM architecture tailored specifically for software companies. Track trial lifecycles, automate Customer Success, and streamline renewal pipelines.",
    url: `${siteConfig.url}/solutions/saas-crm/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Solutions", href: "/#services" },
  { label: "SaaS CRM Implementation", href: "/solutions/saas-crm/" },
];

const faqs = [
  {
    question: "Is GHLVertex a standalone SaaS CRM software vendor?",
    answer:
      "No. GHLVertex is an engineering and implementation agency. Rather than selling a locked-down proprietary CRM software, we architect, configure, and customize an end-to-end CRM and RevOps engine on top of GoHighLevel and custom API pipelines, giving your SaaS complete platform ownership with zero per-seat licensing penalties.",
  },
  {
    question: "How does a SaaS CRM setup differ from a standard sales CRM?",
    answer:
      "Traditional sales CRMs only track binary 'Lead to Closed-Won' stages. A SaaS CRM implementation models the ongoing software lifecycle: self-serve trial signups, product telemetry, Product-Qualified Leads (PQLs), in-app onboarding milestones, customer health scores, renewal windows, and automated churn prevention sequences.",
  },
  {
    question: "Can you ingest product usage data from our app into the CRM?",
    answer:
      "Yes. Using webhooks, Segment, PostHog, or custom database connectors, we stream in-app user milestones (e.g. 'Created First Project', 'Invited 3 Teammates', 'Inactive for 7 Days') directly into the contact timeline to trigger timely automated outreach or sales alerts.",
  },
  {
    question: "How do you track Product-Qualified Leads (PQLs)?",
    answer:
      "We configure event listeners that monitor user activity during their free trial. When a user hits specific activation thresholds (such as connecting an integration or exporting a report), the CRM automatically elevates their lead score, creates an opportunity in the 'High-Intent PQL' pipeline, and alerts an Account Executive for targeted outreach.",
  },
  {
    question: "Can we manage subscription renewals and contract expansions in this setup?",
    answer:
      "Yes. We configure dedicated Customer Success and Renewal pipelines. Workflows automatically schedule 90-day and 30-day pre-renewal check-in tasks, monitor usage drop-offs, and trigger renewal reminder sequences with automated Stripe invoice synchronization.",
  },
  {
    question: "Does this replace HubSpot or Salesforce for early-to-mid-stage SaaS teams?",
    answer:
      "Yes. For SaaS companies spending tens of thousands annually on HubSpot or Salesforce per-seat licenses, our custom GHL architecture provides complete pipeline visibility, email marketing, SMS, calendar booking, and customer communication at a fraction of the operating cost.",
  },
  {
    question: "How do you handle multi-seat or multi-user accounts within the CRM?",
    answer:
      "We structure custom company (account) hierarchies linking individual team members to a primary parent subscription record, allowing Customer Success managers to view both organizational health and individual user engagement.",
  },
  {
    question: "Can we automate onboarding emails and product adoption tips?",
    answer:
      "Absolutely. We build behavior-based onboarding cadences: if a user hasn't completed step 2 after 48 hours, they receive a targeted instructional email or SMS with quick setup guides, rather than a generic linear email blast.",
  },
  {
    question: "How long does a full SaaS CRM implementation take?",
    answer:
      "A complete SaaS CRM buildout—including data schema modeling, pipeline configuration, Stripe billing sync, and in-app webhook integration—typically takes between 2 to 4 weeks.",
  },
];

export default function SaasCrmPage() {
  const currentUrl = "/solutions/saas-crm/";
  const pageSchema = getWebPageSchema({
    title: "SaaS CRM Implementation | Custom CRM & RevOps for SaaS",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "SaaS CRM Architecture & RevOps Implementation",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "SaaS CRM Implementation & Revenue Operations",
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
        eyebrow="Specialized RevOps & CRM Architecture"
        h1="Specialized CRM Architecture & RevOps Implementation for SaaS Companies"
        description="We build tailored CRM infrastructures designed for modern software business models. Track trial activations, automate PQL handoffs, eliminate subscription seat taxes, and turn product usage telemetry into expansion revenue."
        primaryCtaText="Plan My SaaS CRM Engine"
        primaryCtaHref="/#contact"
        secondaryCtaText="View SaaS Pipeline Deliverables"
        secondaryCtaHref="#service-capabilities"
        targetAudience="SaaS Founders, RevOps Directors & B2B Software Executives"
        outcomeText="Unified Trial-to-Expansion Lifecycle & Predictable Net Retention"
        diagramTitle="SaaS Full-Lifecycle Pipeline Architecture"
        flowSteps={[
          { label: "Trial Signup & In-App Event Stream", sublabel: "Telemetry Webhooks & Contact Ingestion" },
          { label: "PQL Scoring & Sales Triage", sublabel: "Activation Milestones & High-Intent Routing" },
          { label: "Demo & Assisted Conversion", sublabel: "Automated Rep Briefings & Opportunity Sync" },
          { label: "Customer Success & Health Monitoring", sublabel: "Usage Inactivity Flags & Churn Prevention" },
          { label: "Renewal & Expansion Cadence", sublabel: "Stripe Sync, 90-Day Renewal Alerts & Upsells" },
        ]}
        highlights={[
          "Zero Per-Seat License Fees",
          "Automated PQL Lead Scoring",
          "Stripe Billing & MRR Sync",
          "Inactivity Churn Alerts",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What is a SaaS CRM implementation?"
        answer="A SaaS CRM implementation is a custom-engineered CRM infrastructure built specifically to manage subscription software business models. Unlike generic sales CRMs, a SaaS CRM models the complete software lifecycle—tracking trial signups, product-qualified leads (PQLs), demo stages, feature onboarding milestones, renewal alerts, and customer health metrics to maximize net revenue retention and streamline RevOps."
        keyTakeaways={[
          "Bridges the gap between backend application telemetry and commercial sales workflows.",
          "Replaces prohibitive per-seat licensing software (e.g., Salesforce/HubSpot) with an owned, scalable GHL infrastructure.",
          "Distinguishes between self-serve self-checkout funnels and high-touch enterprise sales-assisted demos.",
          "Automates renewal and expansion cadences triggered by real-time Stripe subscription webhooks.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Compatible Telemetry & SaaS Stacks"
        technologies={[
          "GoHighLevel RevOps Engine",
          "Stripe Billing & Invoicing",
          "PostHog / Segment Webhooks",
          "PostgreSQL / Supabase",
          "n8n Product Event Router",
          "Slack CS Notification Bots",
          "Mixpanel / App Event APIs",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The SaaS CRM Disconnect"
        heading="Why Generic Off-the-Shelf CRMs Fail Subscription Companies"
        subtitle="Software businesses don't sell physical goods or one-off consulting. Generic CRMs fail to track the nuanced lifecycle of recurring software customers."
        problems={[
          {
            title: "Disjointed Product Telemetry & Sales Visibility",
            description:
              "Your account executives have no idea which trial users are actively using key features and which haven't logged in for a week.",
            consequence: "Reps waste hours chasing cold tire-kickers while high-intent PQLs expire without outreach.",
          },
          {
            title: "Brutal Per-Seat Software Tax as You Scale",
            description:
              "Legacy enterprise CRMs charge hundreds of dollars per user per month, punishing your SaaS for hiring Customer Success and SDR reps.",
            consequence: "Ballooning software overhead that suppresses net margins.",
          },
          {
            title: "Silent Churn & Missed Contract Renewals",
            description:
              "Without automated health scoring, accounts quietly disengage 60 days before contract renewal without anyone on your CS team noticing.",
            consequence: "Surprise cancellations and damaged net revenue retention (NRR).",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="Implementation Scope"
        heading="Engineered Specifically for the SaaS Business Model"
        subtitle="Everything needed to align marketing, product usage, sales, and customer success."
        features={[
          {
            title: "Product-Led Growth (PLG) & PQL Tracking",
            description:
              "Connect your software's event stream directly to GoHighLevel to identify and score Product-Qualified Leads in real time.",
            deliverables: [
              "Event ingestion via secure REST API or n8n webhook listener",
              "Dynamic scoring based on key activation milestone triggers",
              "Automated deal creation when trial users reach PQL threshold",
              "SDR Slack alerts containing user's exact in-app feature usage",
            ],
          },
          {
            title: "Full-Lifecycle Pipeline Architecture",
            description:
              "Distinct pipeline boards for Self-Serve, Sales-Assisted Demos, Onboarding, and Renewal Management.",
            deliverables: [
              "Demo Scheduling & Qualification Stage Mapping",
              "Onboarding Health Pipeline with Inactive-User Warning Tags",
              "90-Day, 60-Day, and 30-Day Contract Renewal Pipelines",
              "Expansion & Upsell Opportunity Tracking (Tier & Seat Add-Ons)",
            ],
          },
          {
            title: "Behavior-Driven Onboarding Sequences",
            description:
              "Targeted email and SMS messaging triggered by what the user actually did (or didn't do) inside your application.",
            deliverables: [
              "Automated 'Uncompleted Setup Step' reminder cadences",
              "Celebratory milestone emails when user hits key adoption targets",
              "In-app survey response capture and feedback routing",
              "Automated invite to scheduled group onboarding webinars",
            ],
          },
          {
            title: "Stripe Subscription & MRR Synchronization",
            description:
              "Bi-directional synchronization ensuring contact records reflect live billing status, MRR values, and card failure alerts.",
            deliverables: [
              "Real-time Stripe webhook ingestion (New, Upgrade, Cancel)",
              "Dunning automation for failed recurring payments via SMS/Email",
              "Lifetime Value (LTV) and Monthly Recurring Revenue (MRR) custom fields",
              "Automated access revocation triggers upon confirmed cancellation",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="SaaS Event Architecture"
        heading="How Telemetry Powers the SaaS Commercial Engine"
        subtitle="The exact technical flow connecting an in-app product user to an automated revenue workflow."
        nodes={[
          {
            phase: "Step 1: In-App User Event",
            title: "Milestone Telemetry Trigger",
            description:
              "User creates their 5th team workspace in your SaaS. Your backend fires a signed webhook payload with user UUID and event metadata.",
            technicalDetails: "Backend Webhook • Signed HMAC • Event: workspace_created",
          },
          {
            phase: "Step 2: Event Normalization & Score Increment",
            title: "PQL Threshold Evaluation",
            description:
              "Orchestration engine receives event, matches contact record in GHL, increments Lead Score by +25, and evaluates PQL criteria.",
            technicalDetails: "n8n Processing Node • GHL Contact Lookup • PQL Score Check",
          },
          {
            phase: "Step 3: Commercial Opportunity Dispatch",
            title: "Automated Enterprise Deal Creation",
            description:
              "Score exceeds 80 points. System creates deal in 'PQL - Outbound Qualified', assigns Account Executive, and creates high-priority task.",
            technicalDetails: "GHL Pipeline API • Round-Robin AE Assignment • Task Creation",
          },
          {
            phase: "Step 4: Tailored Rep Briefing & Outreach",
            title: "Context-Rich Outreach Trigger",
            description:
              "Assigned rep receives Slack notification with user's feature usage summary, while system dispatches a tailored email from the rep.",
            technicalDetails: "Slack Webhook Card • Personalized Rep Email • CRM Note Sync",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="Strategic Alternatives"
        heading="HubSpot / Salesforce Enterprise vs. GHLVertex SaaS Architecture"
        subtitle="How an owned, engineered SaaS CRM infrastructure outperforms expensive legacy vendors."
        leftColumnHeader="HubSpot / Salesforce Enterprise"
        rightColumnHeader="GHLVertex Custom SaaS CRM Architecture"
        rows={[
          {
            dimension: "Licensing Model",
            traditional: "Severe per-seat pricing; costs scale aggressively with every hire ($150–$300/user/mo).",
            ghlVertex: "Zero per-seat charges; add unlimited sales, CS, and marketing team members with no cost penalty.",
          },
          {
            dimension: "Product Telemetry Integration",
            traditional: "Requires expensive enterprise add-ons or brittle third-party synchronization tools.",
            ghlVertex: "Native webhook and API event endpoints custom-mapped to your exact database schema.",
          },
          {
            dimension: "Communication Channels",
            traditional: "Fragmented add-on costs for two-way SMS, phone dialers, and automated booking calendars.",
            ghlVertex: "Built-in two-way SMS, telephony, email dispatch, and round-robin calendars out of the box.",
          },
          {
            dimension: "RevOps Flexibility",
            traditional: "Rigid proprietary data structures requiring expensive certified external consultants.",
            ghlVertex: "Complete system transparency, custom webhooks, and open data architecture you fully control.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="SaaS Operational Scenarios"
        heading="Real-World Workflows Built for Software Teams"
        subtitle="Practical automations designed to solve conversion, retention, and onboarding friction."
        useCases={[
          {
            scenarioTitle: "Free Trial to Paid Upgrade Sprint",
            trigger: "Free trial user has 3 days remaining and has hit 2 of 3 key activation milestones.",
            orchestration:
              "Triggers targeted personalized email from the founder offering extended trial with dedicated onboarding call; updates deal stage to 'Trial Closing Window'.",
            outcome: "Accelerates conversion of active trial users before momentum drops.",
          },
          {
            scenarioTitle: "Failed Payment Dunning Recovery",
            trigger: "Stripe emits customer.subscription.past_due webhook.",
            orchestration:
              "Instantly sends urgent SMS and email with secure Stripe billing update link, flags account as 'At Risk - Payment Failed', and notifies Customer Success.",
            outcome: "Reclaims involuntary churn within 48 hours without embarrassing manual follow-ups.",
          },
          {
            scenarioTitle: "Product Inactivity Churn Prevention",
            trigger: "Paying business subscriber has logged zero active sessions over the past 14 days.",
            orchestration:
              "Flags account in Customer Success pipeline, creates check-in task for designated account manager, and dispatches soft 'Need help with your workflow?' email.",
            outcome: "Catches disengaged accounts months before their annual renewal date.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Data Privacy & Governance"
        heading="Enterprise-Grade Privacy for SaaS Customer Data"
        subtitle="Strict operational boundaries ensuring customer data integrity, security, and human oversight."
        items={[
          {
            title: "Scoped API Permissions",
            description:
              "Event endpoints only read necessary user telemetry attributes, preventing unintended exposure of internal application state.",
          },
          {
            title: "GDPR / CCPA Data Sanitization",
            description:
              "Automated data purging protocols ensure that contact deletion requests inside your SaaS propagate cleanly to the CRM.",
          },
          {
            title: "Separate Staging & Production Sync",
            description:
              "All telemetry workflows are tested against staging databases before connecting live production event streams.",
          },
        ]}
        humanInLoopNotes={[
          "Account downgrades, manual refunds, and plan cancellations require Customer Success confirmation.",
          "High-touch enterprise deal negotiations remain exclusively managed by human Account Executives.",
          "Sensitive security alerts or billing disputes immediately route to senior management.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Implementation Roadmap"
        heading="Our SaaS CRM Engineering Lifecycle"
        subtitle="From schema mapping to production telemetry integration in 4 structured sprints."
        steps={[
          {
            number: "01",
            timeline: "Week 1",
            title: "Telemetry & Schema Architecture",
            description:
              "We audit your in-app event taxonomy, Stripe subscription plans, and sales motion to define the complete CRM data model.",
            deliverables: ["Event Schema Map", "Custom Field Matrix", "Pipeline Architecture Spec"],
          },
          {
            number: "02",
            timeline: "Week 2",
            title: "Pipeline & Stripe Integration",
            description:
              "We build the lifecycle pipelines, connect Stripe webhooks for live MRR tracking, and configure automated billing dunning sequences.",
            deliverables: ["Configured Lifecycle Pipelines", "Live Stripe Webhook Sync", "Dunning Automation"],
          },
          {
            number: "03",
            timeline: "Week 3",
            title: "In-App Telemetry & PQL Logic",
            description:
              "We set up n8n or direct webhook listeners to ingest user milestones, compute PQL scores, and route high-intent users to sales reps.",
            deliverables: ["PQL Scoring Engine", "Slack Notification Bot", "Inactivity Alert Triggers"],
          },
          {
            number: "04",
            timeline: "Week 4",
            title: "Data Migration & Team Onboarding",
            description:
              "We migrate historical customer records, conduct end-to-end integration tests, and train your sales and CS teams with custom video SOPs.",
            deliverables: ["Sanitized Contact Migration", "Team Training Session", "30-Day Post-Launch Support"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Business Impact"
        heading="Measurable RevOps Gains for Subscription Businesses"
        subtitle="Clear, supportable improvements in pipeline velocity, operational overhead, and churn mitigation."
        outcomes={[
          {
            focusArea: "Software Overhead",
            metricLabel: "Elimination of SaaS Per-Seat Licensing Taxes",
            description:
              "Stop paying thousands in escalating monthly per-user fees to legacy CRM vendors and reinvest capital into engineering and acquisition.",
          },
          {
            focusArea: "Sales Efficiency",
            metricLabel: "Focus on High-Intent Active Users",
            description:
              "Sales reps stop cold calling disengaged signups and focus 100% of outreach on users demonstrating verified product qualification.",
          },
          {
            focusArea: "Onboarding Velocity",
            metricLabel: "Automated Milestone Assistance",
            description:
              "Users stuck during setup receive immediate, context-specific guidance, accelerating time-to-value and trial conversion rates.",
          },
          {
            focusArea: "Revenue Retention",
            metricLabel: "Proactive Churn Intervention",
            description:
              "Customer Success teams identify disengaged accounts 30 to 60 days before contract renewal, protecting net revenue retention.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "Built by Software Practitioners",
            description:
              "We understand MRR, churn cohorts, PQLs, and PLG motions. We build systems that reflect real software metrics.",
          },
          {
            title: "True API & Telemetry Mastery",
            description:
              "We don't just set up forms. We write webhook handlers, transform complex JSON payloads, and connect deep app events.",
          },
          {
            title: "Unlimited Scale & Zero Per-Seat Cost",
            description:
              "Add 5 or 50 team members to your CRM without worrying about your software bill doubling next month.",
          },
          {
            title: "Complete RevOps Ownership",
            description:
              "You own every automation, webhook node, and pipeline script. Zero proprietary agency lock-in.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "Workflow Automation Services",
            href: "/services/workflow-automation-services/",
            badge: "Backend Orchestration",
            description: "Advanced n8n pipelines connecting application databases, billing gateways, and internal tools.",
          },
          {
            title: "GHL Setup Services",
            href: "/services/ghl-setup-services/",
            badge: "CRM Architecture",
            description: "Full-stack GoHighLevel sub-account configuration, telephony compliance, and pipeline optimization.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "Model Connectivity",
            description: "Connect LLM capabilities and intelligence directly into your SaaS database and customer workflows.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Upgrade Your SaaS RevOps?"
        heading="Replace Clunky Legacy CRMs with a High-Performance SaaS Engine."
        subtitle="Schedule a technical architecture call to design your trial-to-expansion CRM pipeline."
        primaryBtnText="Plan My SaaS CRM Engine"
        primaryBtnHref="/#contact"
        secondaryBtnText="Explore Workflow Automation"
        secondaryBtnHref="/services/workflow-automation-services/"
      />
    </>
  );
}
