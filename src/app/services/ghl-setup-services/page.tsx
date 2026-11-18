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
  ProcessSteps,
  WhyGHLVertex,
  RelatedServices,
  FaqAccordion,
  ServiceCta,
} from "@/components/services";
import styles from "./GhlSetupServices.module.css";

const PAGE_URL = "/services/ghl-setup-services/";
const PAGE_TITLE = "GoHighLevel Setup Services & CRM Implementation | GHLVertex";
const PAGE_DESCRIPTION =
  "Get professional GoHighLevel setup services for CRM pipelines, calendars, workflow automation, integrations, and onboarding. Talk to GHLVertex.";

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
        alt: "GHLVertex GoHighLevel Setup Services and CRM Implementation",
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
  { label: "GoHighLevel Setup Services", href: PAGE_URL },
];

const schemaBreadcrumbs = [
  { label: "Home", href: "/" },
  ...uiBreadcrumbs,
];

const faqs = [
  {
    question: "What does professional GoHighLevel setup include?",
    answer:
      "Professional GoHighLevel setup typically includes account or sub-account configuration, custom sales pipelines, custom fields, tags, smart lists, forms, calendars, core lead follow-up workflows, communication channel setup (email, SMS, and calling), user permissions, and end-to-end testing. Exact deliverables depend on your agreed project scope, as specialized needs like CRM migrations, custom snapshots, or third-party API integrations are scoped according to complexity.",
  },
  {
    question: "How much does GoHighLevel setup cost?",
    answer:
      "GoHighLevel setup cost depends on your project scope rather than a single flat rate. Pricing is influenced by the number of accounts or locations, pipeline and workflow complexity, CRM migration volume, source data quality, third-party integrations, communication setup requirements, and team training needs. GHLVertex provides a tailored scope estimate after reviewing your current systems and goals on a strategy call.",
  },
  {
    question: "How long does GoHighLevel implementation take?",
    answer:
      "Implementation timelines vary based on project scope and external dependencies. Straightforward single-account setups move faster than multi-location rollouts, legacy CRM migrations, or accounts requiring complex third-party integrations. External steps—such as DNS record propagation, domain verification, and telecom registration reviews like A2P 10DLC—also affect the overall schedule and are mapped out during discovery.",
  },
  {
    question: "Can I set up GoHighLevel myself?",
    answer:
      "Yes, business owners and operators with technical comfort and available time can configure basic GoHighLevel features themselves. However, DIY setups often stall on data structure, workflow stop conditions, email domain authentication, phone registration compliance, or third-party integrations. Hiring a GoHighLevel implementation specialist helps avoid messy custom fields, overlapping automations, and stalled team adoption.",
  },
  {
    question: "What is the difference between GoHighLevel setup and onboarding?",
    answer:
      "GoHighLevel setup focuses on technical architecture and configuration: structuring pipelines, custom fields, forms, calendars, messaging channels, integrations, and tested workflows inside your account. Onboarding focuses on operational adoption: walking your team through daily CRM habits, pipeline stage management, conversation handling, and system documentation so staff actually use what was built.",
  },
  {
    question: "Can you migrate an existing CRM to GoHighLevel?",
    answer:
      "Yes. GHLVertex assists with migrating contacts, custom properties, notes, tags, and active pipeline records from legacy CRMs such as HubSpot, ActiveCampaign, Keap, or spreadsheets into GoHighLevel. Because migration requires data auditing, deduplication, field mapping, and careful trigger controls during import, it is scoped based on your source system and data volume rather than assumed inside a basic new-account setup.",
  },
  {
    question: "Can GoHighLevel workflows be customized?",
    answer:
      "Yes. Workflows can be tailored around your exact lead sources, qualification rules, internal notifications, calendar bookings, no-show handling, and follow-up timing. Every custom workflow is built with clear entry triggers, conditional branches, and exit or stop-on-response rules so prospects do not receive conflicting or out-of-context messages.",
  },
  {
    question: "Do I need a GoHighLevel subscription separately?",
    answer:
      "Yes. Your GoHighLevel software subscription is billed directly by HighLevel (or through your existing agency arrangement) and remains completely separate from GHLVertex implementation fees. Maintaining your own subscription ensures you keep direct ownership and administrative control over your account, contacts, and configured assets.",
  },
  {
    question: "What information should I prepare before implementation?",
    answer:
      "Before kickoff, it helps to gather your current sales stages, existing lead forms or booking links, domain registrar access (for DNS and email verification), existing contact spreadsheets or CRM export details if migrating, team member roles and emails, and examples of your current email or SMS follow-up messages. If anything is still undefined, we help structure it during discovery and business process mapping.",
  },
];

const scopeCapabilities = [
  {
    number: "01",
    title: "Account and Sub-Account Configuration",
    configured:
      "Business profile settings, time zones, custom values, branded links, folder structure, and role-based staff user permissions.",
    whyItMatters:
      "Clean foundational settings prevent broken merge fields, incorrect appointment times, and uncontrolled team permissions.",
    receives:
      "An organized GoHighLevel account or sub-account configured with clear administrative structure and user access.",
  },
  {
    number: "02",
    title: "CRM Pipelines, Custom Fields, Tags, and Smart Lists",
    configured:
      "Opportunity pipeline stages, standardized custom field groups, naming conventions for tags, and filtered contact smart lists.",
    whyItMatters:
      "Without disciplined CRM data modeling, sales reps face cluttered contact screens and unreliable pipeline reporting.",
    receives:
      "A clean CRM taxonomy mirroring your actual deal progression so leadership and sales reps can view active opportunities clearly.",
  },
  {
    number: "03",
    title: "Forms, Surveys, Calendars, and Appointment Booking",
    configured:
      "Lead capture forms, multi-step qualifying surveys, round-robin or individual booking calendars, buffer windows, and two-way Google or Outlook calendar sync.",
    whyItMatters:
      "Disconnected booking links create double-bookings, missing lead context, and friction before a prospect ever reaches your team.",
    receives:
      "Embeddable forms, surveys, and synced scheduling calendars connected directly to contact records and pipeline triggers.",
  },
  {
    number: "04",
    title: "Workflow Automation and Lead Follow-Up",
    configured:
      "Lead intake routing, internal team alerts, missed-call text-back, appointment confirmations, reminder sequences, and conditional follow-up with stop-on-response guardrails.",
    whyItMatters:
      "Consistent automated follow-up prevents warm inquiries from sitting unanswered while keeping messaging relevant when a lead replies or books.",
    receives:
      "Documented, modular workflows tailored to your core customer journey. For complex cross-system orchestration, explore our ",
    internalLink: {
      href: "/services/workflow-automation-services/",
      label: "workflow automation services",
    },
  },
  {
    number: "05",
    title: "Email, SMS, and Calling Configuration",
    configured:
      "Dedicated sending domain authentication (SPF, DKIM, DMARC via LC Email or Mailgun), LC Phone or Twilio number provisioning, call routing, and A2P 10DLC registration preparation.",
    whyItMatters:
      "Unauthenticated email domains and unregistered messaging traffic risk spam placement or carrier filtering under U.S. telecom rules.",
    receives:
      "Properly structured email and phone infrastructure aligned with ",
    externalLink: {
      href: "https://help.gohighlevel.com/",
      label: "official HighLevel messaging documentation",
    },
  },
  {
    number: "06",
    title: "Funnels and Landing Page Connections",
    configured:
      "Custom domain mapping, funnel step connections, embedded CRM forms or calendars, thank-you page redirects, and analytics or conversion pixel placement.",
    whyItMatters:
      "Connecting landing pages directly into your CRM eliminates manual lead export and ensures attribution parameters carry onto contact records.",
    receives:
      "Connected funnel or website capture touchpoints feeding structured prospect records directly into your pipelines.",
  },
  {
    number: "07",
    title: "Third-Party Integrations and Webhooks",
    configured:
      "Native payment connections (such as Stripe), inbound and outbound webhooks, HighLevel API connections, and middleware bridges using Zapier, Make, or n8n.",
    whyItMatters:
      "Reliable data sync keeps billing tools, external forms, and back-office applications aligned without duplicate manual entry.",
    receives:
      "Tested external connections built against the ",
    externalLink: {
      href: "https://marketplace.gohighlevel.com/docs/",
      label: "HighLevel Developer API documentation",
    },
    secondaryInternalLink: {
      prefix: ", with advanced system engineering supported via our ",
      href: "/services/ai-integration-services/",
      label: "AI and API integration services",
    },
  },
  {
    number: "08",
    title: "Snapshots and Reusable Configurations",
    configured:
      "Clean, modular agency snapshots using dynamic custom values, standardized naming conventions, and organized assets ready for multi-location or client deployment.",
    whyItMatters:
      "Bloated or poorly structured snapshots carry errors into every new sub-account, creating ongoing cleanup work as you grow.",
    receives:
      "A reusable configuration framework tailored to your repeatable workflows. Agencies needing ongoing client fulfillment can pair this with ",
    internalLink: {
      href: "/services/gohighlevel-white-label-support/",
      label: "GoHighLevel white label support",
    },
  },
  {
    number: "09",
    title: "Data Import and CRM Migration",
    configured:
      "Source data review, field mapping, CSV sanitization, duplicate handling, careful import staging with workflows paused, and post-import record verification.",
    whyItMatters:
      "Importing uncleaned data while live workflows are active can trigger unintended mass messages and duplicate contact records.",
    receives:
      "Structured contact and opportunity imports scoped around your source platform and record cleanliness.",
  },
  {
    number: "10",
    title: "Testing, Training, and Handoff",
    configured:
      "End-to-end test submissions across forms, calendars, and workflows, role access checks, system overview documentation, and team walkthrough sessions when included in scope.",
    whyItMatters:
      "Even a well-built CRM fails if edge cases go untested or internal staff are unsure how to manage daily pipeline activity.",
    receives:
      "A verified GoHighLevel environment with practical handoff materials so your team can operate confidently.",
  },
];

const setupTypesComparison = [
  {
    badge: "Greenfield Build",
    title: "New GoHighLevel Setup",
    summary:
      "Best for businesses or agencies starting from a fresh GoHighLevel account and building a clean operational system from scratch.",
    requirements:
      "Defined sales stages, domain registrar access, team user list, lead capture touchpoints, and messaging preferences.",
    risks:
      "Over-building unnecessary automations before the team establishes core CRM habits, or skipping email/SMS authentication.",
    scope:
      "Focused on foundational sub-account configuration, pipelines, calendars, forms, core lead follow-up workflows, and QA testing.",
    highlight: true,
  },
  {
    badge: "Platform Transition",
    title: "CRM Migration",
    summary:
      "Best for organizations moving active contacts, deals, notes, and selected workflows from HubSpot, ActiveCampaign, Keap, Pipedrive, or spreadsheets.",
    requirements:
      "Source CRM exports, field-to-field mapping rules, deduplication decisions, and a cutover plan to prevent overlapping outreach.",
    risks:
      "Broken field mappings, accidental workflow firing during bulk imports, duplicate contacts, or interrupted lead notifications during cutover.",
    scope:
      "Scoped separately based on source system structure, record count, data cleanliness, and which legacy automations need rebuilding.",
    highlight: false,
  },
  {
    badge: "Cleanup & Refactor",
    title: "Existing Account Optimization",
    summary:
      "Best for teams already using GoHighLevel whose account has become cluttered with unused fields, generic snapshots, or conflicting workflows.",
    requirements:
      "Full audit of existing sub-account assets, active automation logs, deliverability health, and current team pain points.",
    risks:
      "Disrupting live campaigns or breaking active webhook integrations while cleaning up legacy tags, pipelines, and triggers.",
    scope:
      "Prioritizes auditing, consolidating pipelines, repairing broken triggers or stop conditions, cleaning data hygiene, and stabilizing workflows.",
    highlight: false,
  },
];

const targetAudiences = [
  {
    title: "Marketing Agencies",
    description:
      "Agencies standardizing client onboarding, lead reporting, and reusable sub-account templates across multiple accounts.",
    example:
      "Operational example: Building a clean master snapshot with custom values for client branding, lead routing, and booking calendars before rolling out new accounts.",
    href: "/services/gohighlevel-white-label-support/",
    linkLabel: "Explore agency white-label support",
  },
  {
    title: "Service Businesses",
    description:
      "Local and regional B2B or B2C service companies replacing scattered spreadsheets, manual call logs, and disconnected email tools.",
    example:
      "Operational example: Routing website quote requests into a structured estimate pipeline with automated follow-up reminders until an inspection or consultation is booked.",
    href: "/industries/professional-services/",
    linkLabel: "View professional services workflows",
  },
  {
    title: "Real Estate Teams",
    description:
      "Brokerages and agent teams managing separate buyer and seller lifecycles, showing schedules, and long-horizon prospect nurturing.",
    example:
      "Operational example: Segmenting inbound listing inquiries by buyer or seller intent, assigning leads to agents via round-robin rules, and tracking active showing stages.",
    href: "/industries/real-estate/",
    linkLabel: "View real estate CRM use cases",
  },
  {
    title: "Home Service Companies",
    description:
      "HVAC, plumbing, roofing, and contracting businesses that need rapid lead response, estimate tracking, and job follow-up.",
    example:
      "Operational example: Capturing missed calls with automated text-back, logging quote requests into an active estimate pipeline, and sending appointment confirmations.",
    href: "/industries/home-services/",
    linkLabel: "View home services CRM setup",
  },
  {
    title: "Dental and Med Spa Practices",
    description:
      "Appointment-driven practices organizing consultation inquiries, patient intake forms, booking calendars, and reminder workflows.",
    example:
      "Operational example: Separating new consultation requests from returning visit follow-ups while keeping intake routing and staff notifications clear and reliable.",
    href: "/industries/dental/",
    linkLabel: "View dental and practice workflows",
  },
  {
    title: "SaaS and CRM-Focused Businesses",
    description:
      "Software and subscription teams structuring trial sign-ups, demo booking pipelines, customer onboarding stages, and external API webhooks.",
    example:
      "Operational example: Syncing web app trial events into GoHighLevel pipelines via webhooks so sales and onboarding teams track activation milestones cleanly.",
    href: "/solutions/saas-crm/",
    linkLabel: "Explore SaaS CRM architecture",
  },
];

const pricingFactors = [
  {
    title: "Number of Accounts or Locations",
    desc: "Single-location setups require less configuration than multi-location businesses or agency multi-sub-account rollouts.",
  },
  {
    title: "Number of Pipelines & Deal Stages",
    desc: "Supporting separate pipelines for new leads, renewals, recruiting, or distinct service lines adds modeling and routing steps.",
  },
  {
    title: "Workflow & Logic Complexity",
    desc: "Basic intake notifications and reminders take far less engineering than multi-branch conditional nurturing and re-engagement trees.",
  },
  {
    title: "CRM Migration Requirements",
    desc: "Moving historical contacts, notes, custom properties, and active opportunities from another CRM adds mapping and staging validation.",
  },
  {
    title: "Third-Party Integrations & Webhooks",
    desc: "Connecting billing tools, external forms, calendars, or middleware (Zapier, Make, n8n, custom APIs) expands build and testing scope.",
  },
  {
    title: "Source Data Quality",
    desc: "Clean, standardized spreadsheets import quickly; duplicate-heavy or inconsistent legacy exports require sanitization before import.",
  },
  {
    title: "Communication Infrastructure Setup",
    desc: "Configuring dedicated email sending domains, DNS records (SPF, DKIM, DMARC), and phone numbers varies by registrar and provider.",
  },
  {
    title: "External Compliance Dependencies",
    desc: "Carrier review processes such as A2P 10DLC registration and domain verification depend on third-party approval timelines outside any agency's control.",
  },
  {
    title: "Testing, Documentation & Training",
    desc: "Additional live team training sessions, role-specific SOPs, or extended QA rounds for larger sales teams are factored into project scope.",
  },
];

const qaChecklistGroups = [
  {
    group: "1. Account, Domain & Messaging Verification",
    items: [
      "Time zone, business profile details, and custom values verified across the sub-account",
      "Email sending domain DNS records (SPF, DKIM, DMARC) checked and test messages inspected",
      "Phone number routing, call forwarding, and A2P 10DLC submission status reviewed",
    ],
  },
  {
    group: "2. CRM Data & Pipeline Integrity",
    items: [
      "Pipeline stages match actual sales and service handoff milestones without redundant steps",
      "Custom fields and tags follow clean naming conventions without duplicate properties",
      "Smart lists filter active leads, booked appointments, and follow-up views accurately",
    ],
  },
  {
    group: "3. Forms, Surveys & Calendar Booking",
    items: [
      "Test form and survey submissions create or update contacts cleanly without duplicates",
      "Calendar availability, buffer times, and Google/Outlook two-way sync tested end to end",
      "Confirmation emails, SMS reminders, and reschedule links render with populated fields",
    ],
  },
  {
    group: "4. Workflow Logic & Automation Guardrails",
    items: [
      "Entry triggers, conditional branches, and internal rep notifications tested with sample records",
      "Stop-on-response, booking exit rules, and opt-out handling verified to prevent unwanted messages",
      "Outbound/inbound webhooks and third-party integrations verified in execution logs",
    ],
  },
  {
    group: "5. Access, Documentation & Handoff",
    items: [
      "Role-based user permissions verified for administrators, sales reps, and operational staff",
      "Key pipelines, custom fields, and active workflows documented for internal reference",
      "Walkthrough session or recorded handoff materials delivered per agreed scope",
    ],
  },
];

export default function GhlSetupServicesPage() {
  const pageSchema = getWebPageSchema({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  });
  const serviceSchema = getServiceSchema({
    name: "GoHighLevel Setup Services",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    serviceType: "GoHighLevel CRM Setup and Implementation Services",
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
        eyebrow="GoHighLevel CRM Implementation"
        h1="GoHighLevel Setup Services Built Around Your Business"
        description="Turn your GoHighLevel account into a CRM system built around how your business captures leads, manages pipelines, books appointments, and follows up with customers. GHLVertex provides implementation assistance for setup, configuration, automation, and integrations."
        primaryCtaText="Book a GHL Strategy Call"
        primaryCtaHref={siteConfig.links.calendly}
        secondaryCtaText="Explore Setup Services"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Service Businesses, Marketing Agencies, Sales Teams & CRM Operators"
        outcomeText="Structured CRM Pipelines, Tested Workflows & Clear Team Handoff"
        diagramTitle="GoHighLevel Implementation Core Flow"
        flowSteps={[
          { label: "Discovery & Process Mapping", sublabel: "Sales Stages, Data Fields & Lead Sources" },
          { label: "Account & Messaging Setup", sublabel: "Sub-Account, DNS, Email & Phone Config" },
          { label: "CRM, Forms & Calendars", sublabel: "Pipelines, Tags, Smart Lists & Booking Sync" },
          { label: "Workflows & Integrations", sublabel: "Follow-Up Logic, Guardrails & Webhooks" },
          { label: "QA Testing & Team Handoff", sublabel: "End-to-End Verification, Docs & Walkthrough" },
        ]}
        highlights={[
          "Process-First CRM Architecture",
          "Pipelines, Calendars & Workflows",
          "Email & Messaging Configuration",
          "Structured Testing & Team Handoff",
        ]}
      />

      {/* SECTION 2 — DIRECT ANSWER */}
      <DirectAnswer
        question="What Are GoHighLevel Setup Services?"
        answer="GoHighLevel setup services are professional implementation services that configure your GoHighLevel CRM and connected operational tools around how your business actually acquires, qualifies, and manages customers. Rather than leaving you with an empty software login or a generic template, setup aligns pipelines, custom fields, calendars, forms, messaging channels, and automation workflows with your real sales and service workflow so your team can operate reliably from launch."
        keyTakeaways={[
          "Translates your real-world sales stages and intake rules into clean GoHighLevel pipelines, custom fields, and smart lists.",
          "Connects forms, calendars, email, SMS, calling, and workflows into one cohesive customer journey with clear exit rules.",
          "Establishes foundational infrastructure—including DNS authentication and messaging configuration—before live campaigns run.",
          "Separates technical setup (building and testing the system) from onboarding (training staff on daily CRM habits).",
        ]}
      />

      {/* Section 2 Extended Context: Account vs Working CRM + Practical Example */}
      <div className={styles.extendedWrap}>
        <div className="container">
          <div className={styles.extendedDirectAnswer}>
            <h3 className={styles.extendedTitle}>
              Creating a GoHighLevel Account vs. Implementing a Working CRM System
            </h3>
            <p className={styles.extendedParagraph}>
              Signing up for GoHighLevel gives you access to a broad suite of CRM, messaging, scheduling, and automation tools—but an unconfigured account does not run a sales process on its own. Even importing a pre-built marketplace template often introduces dozens of unused fields, generic messaging copy, and triggers that conflict with how your team actually qualifies prospects. If you are still evaluating platform capabilities, read our breakdown of{" "}
              <Link href="/blog/what-is-gohighlevel/" className={styles.inlineLink}>
                what GoHighLevel is and how its modules work together
              </Link>
              , or review our step-by-step guide on{" "}
              <Link href="/blog/how-to-set-up-gohighlevel/" className={styles.inlineLink}>
                how to set up GoHighLevel
              </Link>
              .
            </p>
            <p className={styles.extendedParagraph}>
              Professional GoHighLevel implementation bridges the gap between software features and day-to-day operations. When a business has multiple lead channels, active sales reps, legacy CRM records, or strict follow-up requirements, hiring a GoHighLevel setup specialist ensures technical setup and user onboarding are cleanly structured from the start—aligned with{" "}
              <a
                href="https://help.gohighlevel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                official HighLevel documentation &#8599;
              </a>
              .
            </p>

            <div className={styles.exampleCallout}>
              <div className={styles.exampleTitle}>Practical Implementation Example</div>
              <p className={styles.exampleText}>
                Consider a growing residential contracting company receiving inquiries from website quote forms, phone calls, and paid search ads. In a basic unconfigured account, leads sit in disconnected lists while office staff manually text back when time allows. With a structured GoHighLevel setup, every form submission and missed call creates a deduplicated contact, tags the service type, adds an opportunity to the <strong>New Estimate Request</strong> stage, notifies the estimator, and sends a booking link synced to team availability—automatically stopping follow-up sequences as soon as the homeowner books or replies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Stack Trust Strip */}
      <TrustStrip
        label="Core Platform Modules & Connected Ecosystem"
        technologies={[
          "GoHighLevel CRM & Pipelines",
          "LC Phone & Twilio",
          "LC Email & Mailgun",
          "Google & Outlook Calendars",
          "Stripe Payments",
          "HighLevel API & Webhooks",
          "Zapier, Make & n8n",
        ]}
      />

      {/* VISUAL 1 — RESPONSIVE CRM SETUP ARCHITECTURE DIAGRAM */}
      <section className={styles.archSection} aria-labelledby="crm-architecture-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>System Architecture</span>
            <h2 id="crm-architecture-heading" className={styles.heading}>
              How a Configured GoHighLevel CRM Connects End to End
            </h2>
            <p className={styles.subtitle}>
              Every component—from lead capture forms and phone numbers to pipelines, workflows, and team permissions—works together inside one structured architecture.
            </p>
          </div>

          <div className={styles.archShell}>
            <div className={styles.archTop}>
              <h3 className={styles.archTitle}>GoHighLevel CRM Setup Architecture Blueprint</h3>
              <span className={styles.archBadge}>4 Connected Operational Layers</span>
            </div>

            <div className={styles.archGrid}>
              <div className={styles.archNode}>
                <span className={styles.archStepNum}>LAYER 01</span>
                <h4 className={styles.archNodeTitle}>Lead Capture &amp; Entry</h4>
                <ul className={styles.archList}>
                  <li>Website &amp; funnel forms</li>
                  <li>Qualifying surveys</li>
                  <li>Booking calendar widgets</li>
                  <li>Inbound calls &amp; missed-call SMS</li>
                  <li>Ad &amp; webhook lead ingestion</li>
                </ul>
              </div>

              <div className={styles.archNode}>
                <span className={styles.archStepNum}>LAYER 02</span>
                <h4 className={styles.archNodeTitle}>CRM Data &amp; Pipelines</h4>
                <ul className={styles.archList}>
                  <li>Deduplicated contact records</li>
                  <li>Custom fields &amp; values</li>
                  <li>Standardized tag taxonomy</li>
                  <li>Stage-based deal pipelines</li>
                  <li>Role-filtered smart lists</li>
                </ul>
              </div>

              <div className={styles.archNode}>
                <span className={styles.archStepNum}>LAYER 03</span>
                <h4 className={styles.archNodeTitle}>Comms &amp; Automation</h4>
                <ul className={styles.archList}>
                  <li>Authenticated email domain</li>
                  <li>LC Phone / Twilio routing</li>
                  <li>Lead routing &amp; rep alerts</li>
                  <li>Appointment reminders</li>
                  <li>Stop-on-response guardrails</li>
                </ul>
              </div>

              <div className={styles.archNode}>
                <span className={styles.archStepNum}>LAYER 04</span>
                <h4 className={styles.archNodeTitle}>Integrations &amp; Adoption</h4>
                <ul className={styles.archList}>
                  <li>Two-way calendar sync</li>
                  <li>Stripe &amp; webhook connections</li>
                  <li>Role-based user access</li>
                  <li>Pre-launch QA verification</li>
                  <li>Documentation &amp; handoff</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICE SCOPE */}
      <section
        id="service-capabilities"
        className={styles.scopeSection}
        aria-labelledby="scope-heading"
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Implementation Capabilities</span>
            <h2 id="scope-heading" className={styles.heading}>
              What&apos;s Included in Professional GoHighLevel Setup?
            </h2>
            <p className={styles.subtitle}>
              Explore the core configuration areas GHLVertex implements across CRM architecture, scheduling, messaging, automation, and integrations.
            </p>
          </div>

          <p className={styles.scopeDisclaimer}>
            <strong>Scope transparency:</strong> Not every capability below is automatically included in every setup package. Each engagement is scoped during discovery so you only pay for the modules, integrations, and migration work your business actually requires.
          </p>

          <div className={styles.scopeGrid}>
            {scopeCapabilities.map((item) => (
              <article key={item.number} className={styles.scopeCard}>
                <div className={styles.scopeCardHeader}>
                  <span className={styles.scopeIndex} aria-hidden="true">
                    {item.number}
                  </span>
                  <h3 className={styles.scopeCardTitle}>{item.title}</h3>
                </div>

                <div className={styles.scopeDetails}>
                  <p className={styles.scopeRow}>
                    <span className={styles.scopeRowLabel}>What is configured: </span>
                    {item.configured}
                  </p>
                  <p className={styles.scopeRow}>
                    <span className={styles.scopeRowLabel}>Why it matters: </span>
                    {item.whyItMatters}
                  </p>
                  <p className={styles.scopeRow}>
                    <span className={styles.scopeRowLabel}>What you receive: </span>
                    {item.receives}
                    {item.internalLink && (
                      <>
                        <Link href={item.internalLink.href} className={styles.inlineLink}>
                          {item.internalLink.label}
                        </Link>
                        .
                      </>
                    )}
                    {item.externalLink && (
                      <>
                        <a
                          href={item.externalLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.externalLink}
                        >
                          {item.externalLink.label} &#8599;
                        </a>
                        {!item.secondaryInternalLink && "."}
                      </>
                    )}
                    {item.secondaryInternalLink && (
                      <>
                        {item.secondaryInternalLink.prefix}
                        <Link
                          href={item.secondaryInternalLink.href}
                          className={styles.inlineLink}
                        >
                          {item.secondaryInternalLink.label}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Mid-Page Conversion CTA 1 */}
          <div className={styles.midCtaWrap}>
            <div className={styles.midCtaCard}>
              <div className={styles.midCtaText}>
                <h3 className={styles.midCtaHeading}>
                  Need Help Scoping Your GoHighLevel Setup Checklist?
                </h3>
                <p className={styles.midCtaCopy}>
                  Walk through your sales stages, lead channels, and integration requirements with our team—or review our buyer&apos;s guide on{" "}
                  <Link
                    href="/blog/what-should-gohighlevel-setup-include/"
                    className={styles.inlineLink}
                  >
                    what professional GoHighLevel setup should include
                  </Link>
                  .
                </p>
              </div>
              <div className={styles.midCtaActions}>
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.midCtaPrimary}
                >
                  Book a GHL Strategy Call
                </a>
                <Link href="/contact/" className={styles.midCtaSecondary}>
                  Ask About Scope
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — IMPLEMENTATION PROCESS */}
      <ProcessSteps
        eyebrow="Structured Delivery"
        heading="Our GoHighLevel Implementation Process"
        subtitle="A five-stage methodology designed to align GoHighLevel configuration with your actual sales and operational workflow before going live."
        steps={[
          {
            number: "01",
            timeline: "Stage 1",
            title: "Discovery and Requirements",
            description:
              "We review your current tools, lead sources, sales stages, communication channels, user roles, and any migration or integration needs to define an exact project scope.",
            deliverables: [
              "Confirmed setup scope & priorities",
              "Access & asset preparation checklist",
              "Identified external dependencies",
            ],
          },
          {
            number: "02",
            timeline: "Stage 2",
            title: "Business Process Mapping",
            description:
              "Before building inside GoHighLevel, we map how leads enter, qualify, book appointments, move through pipeline stages, and trigger internal or customer follow-up.",
            deliverables: [
              "Pipeline stage & exit definitions",
              "Custom field & tag naming taxonomy",
              "Workflow trigger & guardrail blueprint",
            ],
          },
          {
            number: "03",
            timeline: "Stage 3",
            title: "CRM Configuration and Automation",
            description:
              "We configure the sub-account, pipelines, forms, calendars, communication channels, scoped workflows, and third-party webhooks or data imports according to the approved blueprint.",
            deliverables: [
              "Configured CRM pipelines & views",
              "Connected forms, calendars & comms",
              "Built modular workflows & integrations",
            ],
          },
          {
            number: "04",
            timeline: "Stage 4",
            title: "Quality Assurance and Testing",
            description:
              "We run sample lead submissions, booking tests, calendar sync checks, workflow execution log reviews, and stop-condition audits to catch logic errors prior to launch.",
            deliverables: [
              "End-to-end form & booking test checks",
              "Workflow branch & stop-rule verification",
              "Integration & permission audit",
            ],
          },
          {
            number: "05",
            timeline: "Stage 5",
            title: "Handoff and Training",
            description:
              "We confirm staff user roles, share practical reference documentation, and conduct a walkthrough session (when included in scope) so your team adopts the CRM smoothly.",
            deliverables: [
              "Verified administrative & user access",
              "Core architecture & workflow summary",
              "Team walkthrough & next-step guidance",
            ],
          },
        ]}
      />

      {/* Visual 2 — Five-Stage Implementation Workflow Diagram (Tablet & Desktop; Mobile uses ProcessSteps cards above) */}
      <div className={styles.workflowVisualSection}>
        <div className="container">
          <div className={styles.workflowVisualBox}>
            <Image
              src="/images/services/gohighlevel-setup-workflow.svg"
              alt="Five-Stage GoHighLevel Implementation Workflow: Discovery and Requirements, Business Process Mapping, CRM Configuration and Automation, Quality Assurance and Testing, and Handoff and Training"
              width={1200}
              height={520}
              className={styles.responsiveSvg}
            />
          </div>
          <p className={styles.workflowCaption}>
            Visual overview of GHLVertex&apos;s five-stage GoHighLevel setup lifecycle from requirements discovery to verified team handoff.
          </p>
        </div>
      </div>

      {/* SECTION 5 — SETUP TYPES */}
      <section className={styles.setupTypesSection} aria-labelledby="setup-types-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Choosing the Right Engagement</span>
            <h2 id="setup-types-heading" className={styles.heading}>
              New GoHighLevel Setup vs Migration vs Account Optimization
            </h2>
            <p className={styles.subtitle}>
              Not every organization starts from the same baseline. Compare requirements, operational risks, and scope differences across the three primary implementation paths.
            </p>
          </div>

          <div className={styles.setupTypesGrid}>
            {setupTypesComparison.map((option) => (
              <article
                key={option.title}
                className={`${styles.setupTypeCard} ${
                  option.highlight ? styles.setupTypeCardHighlight : ""
                }`}
              >
                <span className={styles.setupTypeBadge}>{option.badge}</span>
                <h3 className={styles.setupTypeTitle}>{option.title}</h3>
                <p className={styles.setupTypeSummary}>{option.summary}</p>

                <div className={styles.setupTypeSpecs}>
                  <div className={styles.setupSpecBlock}>
                    <span className={styles.setupSpecLabel}>Key Requirements</span>
                    {option.requirements}
                  </div>
                  <div className={styles.setupSpecBlock}>
                    <span className={styles.setupSpecLabel}>Risks to Manage</span>
                    {option.risks}
                  </div>
                  <div className={styles.setupSpecBlock}>
                    <span className={styles.setupSpecLabel}>Project Scope Focus</span>
                    {option.scope}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.migrationNote}>
            <strong>Important scope note on CRM migrations:</strong> Moving contacts, notes, custom fields, and workflows from another CRM is not automatically included in a standard new-account setup. Migration scope is evaluated separately based on source system structure, record volume, and data cleanup requirements.
          </div>
        </div>
      </section>

      {/* SECTION 6 — TARGET AUDIENCES */}
      <section className={styles.audiencesSection} aria-labelledby="audiences-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Who We Support</span>
            <h2 id="audiences-heading" className={styles.heading}>
              Who Needs Professional GoHighLevel Setup?
            </h2>
            <p className={styles.subtitle}>
              GoHighLevel setup services help organizations that need dependable lead capture, structured pipelines, and repeatable follow-up without losing weeks to trial-and-error configuration.
            </p>
          </div>

          <div className={styles.audiencesGrid}>
            {targetAudiences.map((aud) => (
              <article key={aud.title} className={styles.audienceCard}>
                <h3 className={styles.audienceTitle}>{aud.title}</h3>
                <p className={styles.audienceDesc}>{aud.description}</p>
                <p className={styles.audienceExample}>{aud.example}</p>
                <Link href={aud.href} className={styles.audienceLink}>
                  <span>{aud.linkLabel}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PRICING & TIMELINES */}
      <section className={styles.pricingSection} aria-labelledby="pricing-factors-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Scope, Cost &amp; Schedule</span>
            <h2 id="pricing-factors-heading" className={styles.heading}>
              What Affects GoHighLevel Setup Cost and Timeline?
            </h2>
            <p className={styles.subtitle}>
              Because no two sales processes or tech stacks are identical, GHLVertex scopes implementation pricing and schedules around nine concrete project variables.
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
              GoHighLevel Subscription Costs vs. Implementation Fees
            </h3>
            <p className={styles.subscriptionText}>
              Your monthly or annual GoHighLevel platform subscription (along with usage-based SMS, email, or calling carrier charges) is billed directly by HighLevel and is separate from GHLVertex&apos;s implementation fees. Implementation pricing depends entirely on your required setup scope—book a strategy call or contact our team to request a clear, itemized estimate tailored to your account.
            </p>
          </div>

          {/* Mid-Page Conversion CTA 2 */}
          <div className={styles.midCtaWrap}>
            <div className={styles.midCtaCard}>
              <div className={styles.midCtaText}>
                <h3 className={styles.midCtaHeading}>
                  Want a Clear Scope Estimate for Your GoHighLevel Setup?
                </h3>
                <p className={styles.midCtaCopy}>
                  Share your current CRM, pipeline goals, and integration needs to receive a realistic implementation plan tailored to your business.
                </p>
              </div>
              <div className={styles.midCtaActions}>
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.midCtaPrimary}
                >
                  Book a GHL Strategy Call
                </a>
                <Link href="/contact/" className={styles.midCtaSecondary}>
                  Request an Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — QA & HANDOFF */}
      <section className={styles.qaSection} aria-labelledby="qa-handoff-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Deliverables &amp; Verification</span>
            <h2 id="qa-handoff-heading" className={styles.heading}>
              What You Receive After GoHighLevel Setup
            </h2>
            <p className={styles.subtitle}>
              A successful CRM implementation ends with verified workflows, clean access ownership, and a team that knows how to operate the system daily.
            </p>
          </div>

          <div className={styles.qaGrid}>
            <div className={styles.deliverablesPanel}>
              <h3 className={styles.panelHeading}>Core Handoff Deliverables</h3>
              <p className={styles.panelSub}>
                Delivered according to your agreed project scope, with full administrative ownership remaining in your GoHighLevel account:
              </p>
              <ul className={styles.deliverablesList}>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">&#10003;</span>
                  <span>
                    <strong>Configured GoHighLevel CRM:</strong> Organized sub-account settings, custom fields, custom values, tags, and smart lists.
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">&#10003;</span>
                  <span>
                    <strong>Working Sales &amp; Service Pipelines:</strong> Clear opportunity stages aligned with how your team tracks prospects and deals.
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">&#10003;</span>
                  <span>
                    <strong>Connected Forms &amp; Booking Calendars:</strong> Lead capture forms, surveys, and synced scheduling calendars routed cleanly into the CRM.
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">&#10003;</span>
                  <span>
                    <strong>Tested Core Workflows:</strong> Lead routing, notifications, appointment reminders, and follow-up sequences verified with sample records.
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">&#10003;</span>
                  <span>
                    <strong>Integration &amp; Messaging Checks:</strong> Verification of scoped webhooks, Stripe or external connections, and email/phone configuration.
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">&#10003;</span>
                  <span>
                    <strong>Role-Based User Access:</strong> Configured logins and permissions tailored to administrators, sales reps, and operational staff.
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">&#10003;</span>
                  <span>
                    <strong>System Documentation &amp; Walkthrough:</strong> Written overview of built assets plus a handoff walkthrough or team training session when included in scope.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.checklistPanel}>
              <h3 className={styles.panelHeading}>Pre-Launch GoHighLevel Setup QA Checklist</h3>
              <p className={styles.panelSub}>
                Before handing over your environment, we verify each applicable area across five operational checkpoints:
              </p>
              <div className={styles.checklistGroups}>
                {qaChecklistGroups.map((group) => (
                  <div key={group.group} className={styles.checklistGroup}>
                    <h4 className={styles.checklistGroupTitle}>{group.group}</h4>
                    <ul className={styles.checklistItems}>
                      {group.items.map((checkItem) => (
                        <li key={checkItem}>{checkItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHY GHLVERTEX */}
      <WhyGHLVertex
        eyebrow="Why GHLVertex"
        heading="Why Choose GHLVertex for GoHighLevel Setup?"
        subtitle="We focus on structured, process-driven GoHighLevel implementation built for long-term operational clarity—not bloated copy-paste templates."
        reasons={[
          {
            title: "GoHighLevel Implementation Knowledge",
            description:
              "Focused hands-on experience configuring HighLevel sub-accounts, pipelines, calendars, messaging channels, snapshots, and workflow guardrails.",
          },
          {
            title: "Business-Process-Oriented Setup",
            description:
              "We map your real lead sources, qualification rules, and team handoffs first so the CRM fits how your staff works instead of forcing generic stages.",
          },
          {
            title: "CRM, Workflow & Integration Depth",
            description:
              "Capability spanning native GoHighLevel automations, webhooks, API connections, and middleware tools like Zapier, Make, and n8n when your stack requires it.",
          },
          {
            title: "Technical Testing & Structured Delivery",
            description:
              "Every scoped build moves through documented stages—from requirements and process mapping to end-to-end QA testing and clean ownership handoff.",
          },
        ]}
      />

      {/* SECTION 10 — RELATED SERVICES */}
      <RelatedServices
        eyebrow="Expand Your System"
        heading="Explore Related CRM and Automation Services"
        services={[
          {
            title: "Workflow Automation Services",
            href: "/services/workflow-automation-services/",
            badge: "Process Automation",
            description:
              "Design multi-step workflows, conditional routing, and cross-system automation beyond foundational CRM setup.",
          },
          {
            title: "GoHighLevel White Label Support",
            href: "/services/gohighlevel-white-label-support/",
            badge: "For Agencies",
            description:
              "Behind-the-scenes GoHighLevel fulfillment, snapshot maintenance, and technical support delivered under your agency brand.",
          },
          {
            title: "AI Automation Services",
            href: "/services/ai-automation-services/",
            badge: "AI Workflows",
            description:
              "Add AI-assisted lead qualification, conversational routing, and automated support workflows to your CRM.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "APIs & Systems",
            description:
              "Connect GoHighLevel with external databases, custom APIs, middleware, and AI capabilities cleanly.",
          },
        ]}
      />

      {/* Related Implementation Guides Strip */}
      <div className={styles.guidesSection}>
        <div className="container">
          <div className={styles.guidesBox}>
            <div className={styles.guidesHeader}>
              <h3 className={styles.guidesTitle}>Further Reading on GoHighLevel Setup</h3>
              <p className={styles.guidesSubtitle}>
                Researching platform capabilities, DIY setup steps, or implementation checklists? Explore our in-depth guides:
              </p>
            </div>
            <div className={styles.guidesGrid}>
              <Link href="/blog/what-is-gohighlevel/" className={styles.guideCard}>
                <span className={styles.guideTag}>Platform Overview</span>
                <span className={styles.guideCardTitle}>What Is GoHighLevel?</span>
                <p className={styles.guideCardDesc}>
                  Understand core CRM, messaging, calendar, and automation modules before planning your build.
                </p>
              </Link>
              <Link href="/blog/how-to-set-up-gohighlevel/" className={styles.guideCard}>
                <span className={styles.guideTag}>Step-by-Step Guide</span>
                <span className={styles.guideCardTitle}>How to Set Up GoHighLevel</span>
                <p className={styles.guideCardDesc}>
                  Review the practical sequence for structuring pipelines, messaging, calendars, and workflows.
                </p>
              </Link>
              <Link
                href="/blog/what-should-gohighlevel-setup-include/"
                className={styles.guideCard}
              >
                <span className={styles.guideTag}>Buyer&apos;s Checklist</span>
                <span className={styles.guideCardTitle}>
                  What Should Professional GoHighLevel Setup Include?
                </span>
                <p className={styles.guideCardDesc}>
                  Compare essential deliverables, common setup pitfalls, and evaluation questions for providers.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11 — FAQ */}
      <FaqAccordion
        eyebrow="Frequently Asked Questions"
        heading="Frequently Asked Questions About GoHighLevel Setup"
        subtitle="Direct, practical answers covering setup deliverables, pricing factors, timelines, CRM migrations, and pre-implementation preparation."
        faqs={faqs}
      />

      {/* SECTION 12 — FINAL CTA */}
      <ServiceCta
        eyebrow="Start Your Implementation"
        heading="Ready to Set Up GoHighLevel for Your Business?"
        subtitle="Schedule a strategy call to walk through your current sales process, pipeline goals, and integration needs—or send us your project requirements for a tailored setup estimate."
        primaryBtnText="Book a GHL Strategy Call"
        primaryBtnHref={siteConfig.links.calendly}
        secondaryBtnText="Contact GHLVertex"
        secondaryBtnHref="/contact/"
      />
    </>
  );
}
