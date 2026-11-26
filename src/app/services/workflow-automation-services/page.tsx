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
  ComparisonTable,
  GovernanceSection,
  ProcessSteps,
  WhyGHLVertex,
  RelatedServices,
  FaqAccordion,
  ServiceCta,
} from "@/components/services";
import styles from "./WorkflowAutomationServices.module.css";

const PAGE_URL = "/services/workflow-automation-services/";
const PAGE_TITLE = "Workflow Automation Services for CRM & Business | GHLVertex";
const PAGE_DESCRIPTION =
  "Automate CRM updates, lead follow-ups, appointments, and business processes with workflow automation services from GHLVertex. Discuss your project.";

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
        alt: "GHLVertex Workflow Automation Services for CRM and Business Operations",
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

// Breadcrumbs UI component prepends "Home" automatically; schema list includes Home explicitly.
const uiBreadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "Workflow Automation Services", href: PAGE_URL },
];

const schemaBreadcrumbs = [
  { label: "Home", href: "/" },
  ...uiBreadcrumbs,
];

const faqs = [
  {
    question: "What are workflow automation services?",
    answer:
      "Workflow automation services are professional implementation services that design, build, and optimize automated sequences connecting your business applications. By replacing manual administrative tasks with deterministic trigger-condition-action logic, workflow automation eliminates duplicate data entry, enforces consistent business rules, accelerates sales follow-ups, and synchronizes customer information across platforms without human intervention.",
  },
  {
    question: "Which business processes can be automated?",
    answer:
      "A wide variety of repetitive, rule-based operational processes can be automated. Core examples include inbound lead capture and assignment, CRM contact updates and activity logging, sales pipeline stage movements, appointment booking and reminder sequences, new client onboarding workflows, multi-channel email/SMS follow-up cadences, internal team task delegation in Slack or project management tools, and cross-platform reporting synchronization.",
  },
  {
    question: "How does CRM workflow automation work?",
    answer:
      "CRM workflow automation uses event listeners—such as form submissions, opportunity stage changes, inbound tags, or incoming messages—to trigger predefined operational actions. When an event fires, the CRM evaluates conditional rules (e.g., lead source, budget, territory, or business hours) and automatically updates contact fields, assigns sales reps, dispatches personalized SMS or emails, and triggers tasks across connected tools.",
  },
  {
    question: "Can GoHighLevel workflows be customized?",
    answer:
      "Yes. GoHighLevel workflows are completely customizable. We build tailored multi-branch if/else decision trees, custom contact and opportunity fields, weighted round-robin lead distribution rules, custom webhook triggers, and automated SMS/email sequences configured specifically around your sales cycle, appointment scheduling requirements, and operational fulfillment workflows.",
  },
  {
    question: "What is the difference between workflow automation and AI automation?",
    answer:
      "Traditional workflow automation is deterministic and rule-based: it operates on structured data using explicit conditional logic ('if trigger event happens and condition X is met, execute action Y'). If data is missing or malformed, the workflow stops or routes to an error branch. In contrast, AI automation adds cognitive reasoning capabilities: it interprets unstructured text, emails, PDFs, or conversational inquiries, classifies intent, extracts key parameters, and then triggers deterministic workflow actions.",
  },
  {
    question: "How much does workflow automation cost?",
    answer:
      "Workflow automation costs depend on the scope and complexity of your project rather than an arbitrary flat fee. Pricing factors include the number of unique workflows, the depth of conditional branching, the number of connected external platforms, data transformation complexity, and testing requirements. GHLVertex provides itemized scope proposals after reviewing your operational workflows during technical discovery.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines vary based on workflow complexity and third-party dependencies. A focused automation project—such as an automated lead routing sequence or a client onboarding pipeline—typically takes 1 to 2 weeks from initial mapping through testing and handoff. More complex multi-system enterprise architectures spanning multiple CRMs, databases, and custom webhooks generally require 3 to 5 weeks.",
  },
  {
    question: "Can automation connect multiple applications?",
    answer:
      "Yes. We connect disparate business applications into unified pipelines using official REST APIs, authenticated webhooks, and orchestration tools like n8n, Make, or Zapier. Common architectures connect GoHighLevel CRMs with payment gateways (Stripe, QuickBooks), team collaboration suites (Slack, Microsoft Teams), project management boards (ClickUp, Asana), and cloud databases.",
  },
  {
    question: "What happens when an automated workflow fails?",
    answer:
      "We build workflows with defensive engineering principles to ensure system reliability. This includes input payload validation, automated retry queues with exponential backoff for transient API outages, dead-letter storage for unprocessable requests, and instant alerts dispatched to your team's administrative Slack or email channel. Failed events are isolated so they can be replayed safely without losing critical customer data.",
  },
  {
    question: "Do workflows require ongoing maintenance?",
    answer:
      "While well-engineered workflows operate reliably without daily oversight, ongoing maintenance is recommended as your business evolves. Updates are typically needed when connected third-party tools update their APIs, when your team introduces new marketing channels or sales pipeline stages, or when messaging copy requires revision. We provide comprehensive documentation so your team can manage workflows internally, with support available as needed.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Lead Capture & Intelligent Routing",
    problem: "Inbound leads sit in inboxes for hours, getting manually assigned without priority or attribution data.",
    workflow: "Instantly ingests form submissions, webhook leads, and ad inquiries, verifies contact details, evaluates lead criteria, and assigns to sales reps via round-robin or territory rules.",
    benefit: "Reduces first-response time from hours to seconds while preventing lead drop-off and ensuring equitable rep distribution.",
    considerations: "Field mapping across ad channels, territory zip code tables, after-hours notification routing.",
  },
  {
    number: "02",
    title: "CRM Record Updates & Data Enrichment",
    problem: "Sales reps spend hours manually updating deal stages, typing contact notes, and copying info across tools.",
    workflow: "Listens for customer activity events (link clicks, form updates, call logs) and automatically updates contact tags, custom fields, and lifecycle stages in real time.",
    benefit: "Maintains clean CRM data hygiene without burdening sales reps with repetitive administrative data entry.",
    considerations: "Tag naming conventions, custom field schemas, conflict resolution for existing contacts.",
  },
  {
    number: "03",
    title: "Sales Pipeline Automation",
    problem: "Deals stall in pipelines because follow-up tasks are forgotten and stage transitions are inconsistent.",
    workflow: "Automatically advances opportunity stages when key milestones occur (quote viewed, proposal signed, payment completed), creates tasks for reps, and triggers timed check-ins.",
    benefit: "Accelerates deal velocity, prevents pipeline bottlenecks, and gives leadership real-time visibility into pipeline health.",
    considerations: "Milestone validation triggers, stale-deal alerting thresholds, win/loss tracking properties.",
  },
  {
    number: "04",
    title: "Appointment Booking & Reminders",
    problem: "High no-show rates for sales consultations and tedious back-and-forth email scheduling.",
    workflow: "Coordinates real-time calendar availability, issues calendar invites with video links, and fires a calibrated SMS and email reminder sequence with 1-click reschedule options.",
    benefit: "Reduces appointment no-shows by up to 40% and eliminates administrative scheduling friction.",
    considerations: "Timezone normalization, buffer intervals, weekend handling, cancellation webhooks.",
  },
  {
    number: "05",
    title: "Client Onboarding Workflows",
    problem: "New client sign-ups experience delayed handoffs between sales and fulfillment, creating poor initial impressions.",
    workflow: "Triggers on signed contract or payment: generates client folders in Google Drive, provisions onboarding projects in ClickUp/Asana, and sends welcome kits with intake forms.",
    benefit: "Transforms new client onboarding into an instant, polished experience while giving account managers immediate tasks.",
    considerations: "Folder hierarchy templates, client intake data validation, multi-user access permissions.",
  },
  {
    number: "06",
    title: "Email & SMS Follow-Up Sequences",
    problem: "Prospects receive generic, one-size-fits-all emails or fall through the cracks after initial outreach.",
    workflow: "Deploys multi-channel follow-up cadences tailored to prospect actions, pausing automatically when a prospect replies, books a call, or requests an opt-out.",
    benefit: "Increases response rates through timely, context-aware touchpoints while strictly honoring opt-out preferences.",
    considerations: "A2P 10DLC compliance for SMS, stop-on-response logic, business hour sending windows.",
  },
  {
    number: "07",
    title: "Internal Notifications & Task Delegation",
    problem: "Critical customer milestones get lost in email clutter, delaying time-sensitive operational actions.",
    workflow: "Dispatches formatted notification cards into designated Slack or Microsoft Teams channels with direct CRM links and creates high-priority tasks for assigned team members.",
    benefit: "Ensures cross-functional team alignment with zero communication latency when important events occur.",
    considerations: "Channel noise reduction, notification batching, task assignment fallbacks for out-of-office staff.",
  },
  {
    number: "08",
    title: "Reporting & Data Synchronization",
    problem: "Disparate software tools create fragmented silos, forcing managers to assemble reports manually in spreadsheets.",
    workflow: "Extracts daily or weekly operational metrics across CRMs, payment processors, and marketing channels, synchronizing data into centralized dashboards or Google Sheets.",
    benefit: "Provides leadership with reliable operational visibility and saves hours of manual spreadsheet compilation.",
    considerations: "API rate limiting, timestamp synchronization, deduplication logic during batch transfers.",
  },
];

const tools = [
  {
    name: "GoHighLevel",
    category: "CRM & Marketing Engine",
    desc: "Visual workflow builder, trigger-based pipeline movements, automated SMS/email cadences, and appointment scheduling.",
  },
  {
    name: "n8n",
    category: "Advanced Orchestration",
    desc: "Fair-code, self-hostable workflow engine enabling complex data transformations, custom JavaScript nodes, and webhook handling.",
  },
  {
    name: "Make (Integromat)",
    category: "Visual Integration",
    desc: "Powerful visual data flow mapping, multi-branch routers, iterator/aggregator tools, and comprehensive error-handler routes.",
  },
  {
    name: "Zapier",
    category: "Ecosystem Connector",
    desc: "Rapid connectivity across 5,000+ business applications for straightforward event triggers, filters, and operational tasks.",
  },
  {
    name: "Stripe & Billing",
    category: "Financial Gateways",
    desc: "Webhook listeners for successful charges, failed subscriptions, and invoice payments synchronizing directly to CRM accounts.",
  },
  {
    name: "ClickUp & Asana",
    category: "Project Management",
    desc: "Automated project and task provisioning from pre-configured operational templates upon client contract execution.",
  },
  {
    name: "Slack & MS Teams",
    category: "Team Communications",
    desc: "Real-time Block Kit and Adaptive Card notification feeds for new leads, urgent escalations, and team milestone wins.",
  },
  {
    name: "Google Workspace",
    category: "Productivity & Storage",
    desc: "Automated folder creation, document generation from templates, and spreadsheet synchronization for operational logging.",
  },
];

const pricingFactors = [
  {
    title: "Number of Connected Platforms",
    desc: "Workflows linking two native CRM tools are faster to build than complex pipelines bridging four disparate external APIs with bespoke authentication.",
  },
  {
    title: "Branching & Logic Complexity",
    desc: "Simple sequential workflows require fewer design and testing cycles than multi-stage pipelines with nested if/then conditions and wait intervals.",
  },
  {
    title: "Data Transformation Depth",
    desc: "Extracting, formatting, normalizing, or calculating custom values between incompatible data schemas requires specialized transformation nodes.",
  },
  {
    title: "Custom Webhook & API Payloads",
    desc: "Building custom REST API payloads, HMAC signature verification, and proprietary webhook handlers requires dedicated developer engineering.",
  },
  {
    title: "Exception Handling & Retries",
    desc: "Mission-critical enterprise workflows that require automated retry queues, dead-letter storage, and failover notifications involve deeper rigor.",
  },
  {
    title: "Transaction Volume & Rate Limits",
    desc: "High-volume data pipelines processing thousands of daily events require pagination handling, queuing, and API rate-limiting architecture.",
  },
  {
    title: "Existing Tech Stack & Data Cleanliness",
    desc: "Messy contact databases with duplicate records or inconsistent custom fields require schema normalization prior to automation deployment.",
  },
  {
    title: "Documentation & Training Scope",
    desc: "Comprehensive visual system architecture maps, team video runbooks, and staff training workshops are tailored to your organizational needs.",
  },
];

export default function WorkflowAutomationServicesPage() {
  const pageSchema = getWebPageSchema({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  });

  const serviceSchema = getServiceSchema({
    name: "Workflow Automation Services",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    serviceType: "Workflow Automation Services & Business Process Automation",
    areaServed: "United States",
  });

  const breadcrumbSchema = getBreadcrumbSchema(schemaBreadcrumbs, PAGE_URL);
  const faqSchema = getFaqSchema(faqs);

  return (
    <>
      {/* Schema Structured Data */}
      <JsonLd data={pageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={uiBreadcrumbs} />

      {/* 01. Hero Section */}
      <ServiceHero
        eyebrow="Workflow Automation Services"
        h1="Workflow Automation Services for Smarter Business Operations"
        description="Reduce repetitive tasks and connect the systems your business relies on. GHLVertex helps design and implement automated workflows for CRM updates, lead management, appointments, customer follow-ups, and operational processes."
        primaryCtaText="Book a Workflow Automation Consultation"
        primaryCtaHref={siteConfig.links.calendly}
        secondaryCtaText="Explore Automation Solutions"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Growing Businesses, Sales Teams & Operations Leaders"
        outcomeText="Zero Dropped Leads, Reclaimed Administrative Hours & Rapid Speed to Lead"
        diagramTitle="Deterministic Workflow Execution Engine"
        flowSteps={[
          { label: "Event Trigger", sublabel: "Form, Tag or Webhook" },
          { label: "Data Validation", sublabel: "Schema & Deduplication Check" },
          { label: "Conditional Logic", sublabel: "Filters & Branching Trees" },
          { label: "Action Execution", sublabel: "CRM, SMS, Alerts & Tasks" },
          { label: "Error Telemetry", sublabel: "Retry Queues & Failover" },
        ]}
        highlights={[
          "Deterministic Trigger-Action Architecture",
          "Deep GoHighLevel, n8n & Make Mastery",
          "Automated Lead Triage & Routing",
          "100% Client Ownership & Zero Lock-In",
        ]}
      />

      {/* 02. Direct Answer / Service Overview */}
      <DirectAnswer
        question="What Are Workflow Automation Services?"
        answer="Workflow automation services are professional implementation services that design, build, and optimize automated sequences connecting your business applications. By replacing manual administrative tasks with deterministic trigger-condition-action logic, workflow automation eliminates duplicate data entry, enforces consistent business rules, accelerates sales follow-ups, and synchronizes customer information across platforms without human intervention."
        keyTakeaways={[
          "Replaces slow, error-prone manual data entry with responsive deterministic pipelines.",
          "Connects fragmented tools: GoHighLevel CRM, payment processors, Slack, calendars, and databases.",
          "Helps reduce lead response times by automating follow-ups, lead routing, and team notifications.",
          "Built with defensive error trapping, automated API retry queues, and 100% client system ownership.",
        ]}
      />

      {/* Extended Context & Realistic Workflow Walkthrough */}
      <section className={styles.extendedWrap}>
        <div className="container">
          <div className={styles.extendedDirectAnswer}>
            <h3 className={styles.extendedTitle}>
              How a Modern Automated Workflow Functions in Practice
            </h3>
            <p className={styles.extendedParagraph}>
              In traditional business operations, when an inbound inquiry arrives, it often sits in an email inbox until an administrator manually copies the details into a CRM, creates a follow-up reminder, and notifies a sales rep. This manual handoff introduces delays, data transcription errors, and lost sales momentum.
            </p>
            <div className={styles.exampleCallout}>
              <div className={styles.exampleTitle}>
                <span>&#9889;</span> Realistic Example: Automated Inbound Lead Pipeline
              </div>
              <p className={styles.exampleText}>
                <strong>Step 1:</strong> A prospective client submits a consultation request form on your website.
                <br />
                <strong>Step 2:</strong> The workflow engine instantly validates the email format, checks for existing records to prevent duplication, and creates a qualified contact in your CRM.
                <br />
                <strong>Step 3:</strong> Based on the requested service and company size, conditional logic assigns the contact to the designated senior account executive using a weighted round-robin rule.
                <br />
                <strong>Step 4:</strong> An automated, personalized confirmation SMS and calendar invite link are dispatched to the prospect within 30 seconds.
                <br />
                <strong>Step 5:</strong> Simultaneously, an internal rich notification card is published to your sales team&apos;s Slack channel with lead attribution data, and a 24-hour follow-up task is scheduled in the CRM.
              </p>
            </div>
            <p className={styles.extendedParagraph}>
              When engineered correctly, these deterministic workflows run 24 hours a day, 365 days a year, ensuring every customer interaction receives an immediate, compliant, and tracked operational response. For organizations exploring how to bridge deterministic rules with cognitive reasoning, our{" "}
              <Link href="/services/ai-automation-services/" className={styles.inlineLink}>
                AI automation services
              </Link>{" "}
              add intelligent document parsing and intent classification to structured workflows.
            </p>
          </div>
        </div>
      </section>

      {/* 03. Trigger -> Condition -> Action Visual Architecture */}
      <section className={styles.architectureSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>System Blueprint</span>
            <h2 className={styles.heading}>The Core Architecture of Workflow Automation</h2>
            <p className={styles.subtitle}>
              Every dependable automated system is constructed upon three deterministic building blocks: Event Triggers, Conditional Logic, and Automated Action Outcomes.
            </p>
          </div>

          <div className={styles.architectureFlow}>
            {/* 1. Triggers */}
            <div className={styles.architectureNode}>
              <div className={styles.architectureNodeHeader}>
                <span className={`${styles.architectureTag} ${styles.tagTrigger}`}>Phase 01</span>
                <span style={{ fontSize: "1.2rem" }}>&#128276;</span>
              </div>
              <h3 className={styles.architectureNodeTitle}>Event Triggers</h3>
              <p className={styles.architectureNodeDesc}>
                The initial stimulus that launches the automated sequence across your connected software ecosystem.
              </p>
              <ul className={styles.architectureItemList}>
                <li className={styles.architectureItem}>Website Form Submission</li>
                <li className={styles.architectureItem}>CRM Tag or Custom Field Added</li>
                <li className={styles.architectureItem}>Appointment Booked or Canceled</li>
                <li className={styles.architectureItem}>Opportunity Stage Changed</li>
                <li className={styles.architectureItem}>Stripe / Payment Succeeded</li>
                <li className={styles.architectureItem}>Incoming Inbound Webhook Event</li>
              </ul>
            </div>

            <div className={styles.architectureArrow} aria-hidden="true">&rarr;</div>

            {/* 2. Conditions */}
            <div className={styles.architectureNode}>
              <div className={styles.architectureNodeHeader}>
                <span className={`${styles.architectureTag} ${styles.tagCondition}`}>Phase 02</span>
                <span style={{ fontSize: "1.2rem" }}>&#9878;</span>
              </div>
              <h3 className={styles.architectureNodeTitle}>Conditional Logic</h3>
              <p className={styles.architectureNodeDesc}>
                Intelligent decision gates that validate inputs, evaluate business rules, and branch execution paths.
              </p>
              <ul className={styles.architectureItemList}>
                <li className={styles.architectureItem}>Budget / Deal Size Filtering</li>
                <li className={styles.architectureItem}>Geographic / Service Routing</li>
                <li className={styles.architectureItem}>Business Hours vs. Weekend Gate</li>
                <li className={styles.architectureItem}>Deduplication &amp; Contact Matching</li>
                <li className={styles.architectureItem}>Timed Delay &amp; Wait Until Conditions</li>
                <li className={styles.architectureItem}>Multi-Branch If/Else Decision Trees</li>
              </ul>
            </div>

            <div className={styles.architectureArrow} aria-hidden="true">&rarr;</div>

            {/* 3. Actions */}
            <div className={styles.architectureNode}>
              <div className={styles.architectureNodeHeader}>
                <span className={`${styles.architectureTag} ${styles.tagAction}`}>Phase 03</span>
                <span style={{ fontSize: "1.2rem" }}>&#9881;</span>
              </div>
              <h3 className={styles.architectureNodeTitle}>Action Outcomes</h3>
              <p className={styles.architectureNodeDesc}>
                The verified operational tasks executed across your destination applications without human delay.
              </p>
              <ul className={styles.architectureItemList}>
                <li className={styles.architectureItem}>CRM Contact &amp; Deal Stage Updated</li>
                <li className={styles.architectureItem}>Personalized SMS &amp; Email Dispatched</li>
                <li className={styles.architectureItem}>Onboarding Workspace Provisioned</li>
                <li className={styles.architectureItem}>Internal Slack Deal Card Posted</li>
                <li className={styles.architectureItem}>Follow-Up Task Assigned to Rep</li>
                <li className={styles.architectureItem}>Cross-Platform Spreadsheet Sync</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Business Processes You Can Automate (8 Core Capabilities) */}
      <section id="service-capabilities" className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Capabilities</span>
            <h2 className={styles.heading}>Business Processes You Can Automate</h2>
            <p className={styles.subtitle}>
              Practical, high-impact operational automations designed to eliminate manual bottlenecks across your sales, marketing, and client fulfillment pipelines.
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap) => (
              <div key={cap.number} className={styles.capabilityCard}>
                <div className={styles.capabilityCardHeader}>
                  <span className={styles.capabilityIndex}>{cap.number}</span>
                  <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                </div>

                <div className={styles.capabilityMetaGrid}>
                  <div className={styles.capabilityMetaBlock}>
                    <span className={styles.capabilityMetaLabel}>Manual Problem</span>
                    <p style={{ margin: 0 }}>{cap.problem}</p>
                  </div>
                  <div className={styles.capabilityMetaBlock}>
                    <span className={styles.capabilityMetaLabel}>Automated Workflow</span>
                    <p style={{ margin: 0 }}>{cap.workflow}</p>
                  </div>
                  <div className={styles.capabilityMetaBlock}>
                    <span className={styles.capabilityMetaLabel}>Operational Benefit</span>
                    <p style={{ margin: 0 }}>{cap.benefit}</p>
                  </div>
                  <div className={styles.capabilityMetaBlock}>
                    <span className={styles.capabilityMetaLabel}>Implementation Considerations</span>
                    <p style={{ margin: 0 }}>{cap.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CRM and GoHighLevel Workflow Automation */}
      <section className={styles.deepDiveSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Platform Specialization</span>
            <h2 className={styles.heading}>CRM and GoHighLevel Workflow Automation</h2>
            <p className={styles.subtitle}>
              Harness the full power of GoHighLevel&apos;s automation engine to transform your CRM from a static contact database into an active revenue-generating machine.
            </p>
          </div>

          <div className={styles.deepDiveGrid}>
            <div className={styles.deepDiveCard}>
              <span className={styles.deepDiveBadge}>Engine Capabilities</span>
              <h3 className={styles.deepDiveTitle}>Advanced GoHighLevel Workflow Engineering</h3>
              <p className={styles.deepDiveCopy}>
                GoHighLevel provides one of the most flexible visual automation builders in the modern CRM landscape. When properly configured by our specialists, it allows businesses to build sophisticated, multi-tier operational cadences that unify messaging, sales pipelines, and scheduling.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Granular Event Triggers:</strong> Launch sequences based on custom form fills, survey submissions, tag additions, missed incoming calls, or opportunity moves.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Conditional If/Else Branching:</strong> Segment prospects dynamically by lead source, appointment status, custom field values, or past engagement history.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Round-Robin User Assignment:</strong> Route new inquiries evenly across sales reps or prioritize specialists according to service category.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Wait States &amp; Event Timers:</strong> Delay subsequent touchpoints until specific days, business hours, or until a client opens an email or clicks a tracking link.</span>
                </li>
              </ul>
              <div className={styles.codeCallout}>
                <div className={styles.codeCalloutTitle}>GHL Ecosystem Integration</div>
                <p className={styles.codeCalloutText}>
                  Need a complete CRM deployment from scratch? Explore our dedicated{" "}
                  <Link href="/services/ghl-setup-services/" className={styles.inlineLink} style={{ color: "#38bdf8" }}>
                    GoHighLevel Setup Services
                  </Link>{" "}
                  for full account provisioning, pipeline design, and sub-account architecture.
                </p>
              </div>
            </div>

            <div className={`${styles.deepDiveCard} ${styles.cardWhite}`}>
              <span className={styles.deepDiveBadge}>Practical Implementation</span>
              <h3 className={styles.deepDiveTitle}>Concrete Example: High-Converting Lead-to-Call Cadence</h3>
              <p className={styles.deepDiveCopy}>
                Consider how an engineered GoHighLevel workflow handles an inbound prospect who downloads a case study but does not immediately schedule a discovery call:
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>1.</span>
                  <span><strong>Capture &amp; Tagging:</strong> Form fires trigger &rarr; Contact tagged <code>lead:case-study</code> &rarr; Lead created in pipeline at &ldquo;New Lead&rdquo; stage.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>2.</span>
                  <span><strong>Instant Asset Delivery:</strong> Automated email delivers PDF asset immediately with customized dynamic merge fields.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>3.</span>
                  <span><strong>Smart Wait Condition:</strong> Workflow pauses for 45 minutes, monitoring if an appointment booking event occurs.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>4.</span>
                  <span><strong>Conditional Branching:</strong> If no appointment is booked, system sends an introductory SMS from the assigned rep offering calendar availability.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>5.</span>
                  <span><strong>Stop-on-Response Logic:</strong> If the lead replies by text, the automated cadence pauses immediately, and an urgent push notification alerts the sales rep to take over live.</span>
                </li>
              </ul>
              <div className={styles.codeCallout} style={{ background: "#f1f5f9", color: "#334155", border: "1px solid #cbd5e1" }}>
                <div className={styles.codeCalloutTitle} style={{ color: "#0148a3" }}>Deterministic Hygiene Rule</div>
                <p className={styles.codeCalloutText} style={{ color: "#475569" }}>
                  Every workflow includes strict opt-out compliance (STOP keyword listeners) and automated tag cleanup to ensure contact records accurately reflect their current engagement state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Lead Management and Sales Workflow Automation */}
      <section className={styles.deepDiveSectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Sales Operations</span>
            <h2 className={styles.heading}>Lead Management and Sales Workflow Automation</h2>
            <p className={styles.subtitle}>
              Accelerate your sales cycle, eliminate dropped leads, and empower your sales team with automated pipeline velocity.
            </p>
          </div>

          <div className={styles.deepDiveGrid}>
            <div className={styles.deepDiveCard}>
              <span className={styles.deepDiveBadge}>Speed to Lead</span>
              <h3 className={styles.deepDiveTitle}>Instant Lead Ingestion &amp; Source Attribution</h3>
              <p className={styles.deepDiveCopy}>
                Research consistently proves that responding to inbound inquiries within the first five minutes yields a dramatically higher conversion rate. Our sales workflows ensure zero delay between lead generation and initial outreach.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Multi-Channel Ingestion:</strong> Aggregate inquiries from Google Ads, Meta Ads, TikTok, landing pages, and affiliate webhooks into one central queue.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>UTM Attribution Preservation:</strong> Pass campaign, source, medium, and keyword parameters directly into custom CRM properties for accurate ROI tracking.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Territory &amp; Availability Matching:</strong> Route leads based on rep availability, working hours, and industry specialization.</span>
                </li>
              </ul>
            </div>

            <div className={styles.deepDiveCard}>
              <span className={styles.deepDiveBadge}>Pipeline Velocity</span>
              <h3 className={styles.deepDiveTitle}>Automated Deal Stage &amp; Task Orchestration</h3>
              <p className={styles.deepDiveCopy}>
                Keeping pipeline stages synchronized requires constant vigilance. We configure automated triggers that advance deals when verifiable actions happen in the real world.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Contract &amp; Proposal Sync:</strong> When a proposal is viewed or countersigned in PandaDoc or DocuSign, the CRM deal stage advances to &ldquo;Contract Sent&rdquo; automatically.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Stale Deal Revival Cadences:</strong> Deals that remain idle in an open pipeline stage for 14 days automatically prompt the account owner with suggested revival tasks.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Executive Win Alerts:</strong> Closed-won opportunities instantly calculate commission splits and trigger celebratory announcements in team chat channels.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Client Onboarding and Appointment Automation */}
      <section className={styles.deepDiveSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Client Lifecycle</span>
            <h2 className={styles.heading}>Client Onboarding and Appointment Automation</h2>
            <p className={styles.subtitle}>
              Turn the critical moment after a contract is signed into a frictionless, automated onboarding experience that builds immediate client confidence.
            </p>
          </div>

          <div className={styles.deepDiveGrid}>
            <div className={styles.deepDiveCard}>
              <span className={styles.deepDiveBadge}>First Impressions</span>
              <h3 className={styles.deepDiveTitle}>Instant Client Provisioning &amp; Workspace Setup</h3>
              <p className={styles.deepDiveCopy}>
                When a new customer makes an initial payment, their excitement is at its peak. Any delay in kickoff communication creates buyer friction. Our onboarding pipelines bridge sales and operations rapidly and reliably.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Project Workspace Generation:</strong> Generates a pre-structured onboarding project folder in ClickUp, Asana, or Monday.com with all required deliverables and assignees.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Automated Asset Collection:</strong> Sends a branded intake questionnaire to the client, filing uploaded logos, brand assets, and credentials directly into secured Google Drive folders.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Accounting &amp; Invoicing Sync:</strong> Provisions the customer record in QuickBooks or Xero, applying recurring subscription terms or milestone billing profiles.</span>
                </li>
              </ul>
            </div>

            <div className={styles.deepDiveCard}>
              <span className={styles.deepDiveBadge}>Show Rate Optimization</span>
              <h3 className={styles.deepDiveTitle}>Omnichannel Appointment Coordination &amp; Reminders</h3>
              <p className={styles.deepDiveCopy}>
                Missing an appointment wastes billable hours and derails sales pipelines. Our appointment automation systems ensure prospects and clients show up prepared and on time.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Timezone &amp; Calendar Normalization:</strong> Syncs dynamically across Google Calendar and Microsoft Outlook while converting times to the customer&apos;s local timezone.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Multi-Stage Reminders:</strong> Sends email confirmations 24 hours prior and an SMS text reminder with direct video call links 15 minutes before the meeting.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon}>&#10003;</span>
                  <span><strong>Self-Service Reschedule Routing:</strong> If a customer cannot attend, a 1-click link allows them to reschedule without phone tag, instantly clearing the calendar for other bookings.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 08. Workflow Automation Tools and Integrations */}
      <section className={styles.toolsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Technology Stack</span>
            <h2 className={styles.heading}>Workflow Automation Tools and Integrations</h2>
            <p className={styles.subtitle}>
              We architect and configure automated systems using proven enterprise platforms and direct REST APIs. We choose the right tool for your specific architecture rather than forcing a one-size-fits-all product.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <div key={tool.name} className={styles.toolCard}>
                <span className={styles.toolCategory}>{tool.category}</span>
                <h3 className={styles.toolName}>{tool.name}</h3>
                <p className={styles.toolDesc}>{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.toolsDisclaimer}>
            <p style={{ margin: 0 }}>
              <strong>Platform Independence &amp; Official Documentation:</strong> GHLVertex provides independent systems engineering, custom configuration, and webhook development across these technologies. Product names, logos, and trademarks belong to their respective owners. We reference official developer standards including the{" "}
              <a
                href="https://help.gohighlevel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                GoHighLevel Help Center
              </a>
              ,{" "}
              <a
                href="https://docs.n8n.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                n8n Documentation
              </a>
              ,{" "}
              <a
                href="https://help.make.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Make Help Center
              </a>
              , and{" "}
              <a
                href="https://help.zapier.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Zapier Documentation
              </a>
              . For agencies providing white-label services, our{" "}
              <Link href="/services/gohighlevel-white-label-support/" className={styles.inlineLink}>
                GoHighLevel White Label Support
              </Link>{" "}
              delivers behind-the-scenes technical execution for your client accounts.
            </p>
          </div>
        </div>
      </section>

      {/* 09. Implementation Lifecycle SVG Visual */}
      <section className={styles.lifecycleVisualSection}>
        <div className="container">
          <div className={styles.lifecycleVisualBox}>
            <Image
              src="/images/services/workflow-automation-lifecycle.svg"
              alt="Six-Stage Workflow Automation Implementation Lifecycle: Discovery, Process Mapping, Automation Architecture, Build, Testing, and Handoff"
              width={1200}
              height={520}
              className={styles.responsiveSvg}
              priority
            />
          </div>
          <p className={styles.lifecycleCaption}>
            GHLVertex disciplined implementation roadmap: engineered for deterministic reliability, transparent failure alerts, and 100% client system ownership.
          </p>
        </div>
      </section>

      {/* 10. Implementation Process Steps */}
      <ProcessSteps
        eyebrow="Implementation Roadmap"
        heading="Our Six-Stage Workflow Automation Process"
        subtitle="A structured, engineering-driven sprint designed to transform fragmented business processes into resilient, automated operational pipelines."
        steps={[
          {
            number: "01",
            timeline: "Phase 1",
            title: "Workflow Discovery & Bottleneck Audit",
            description:
              "We interview key operations and sales stakeholders, review your existing software stack, quantify time-consuming manual tasks, and identify high-ROI automation priorities.",
            deliverables: [
              "Operational Bottleneck Audit",
              "Connected Software Inventory",
              "Feasibility & ROI Prioritization Plan",
            ],
          },
          {
            number: "02",
            timeline: "Phase 2",
            title: "Process Mapping & Logic Blueprints",
            description:
              "We document the exact step-by-step logic of your operational flows, establishing clear trigger conditions, if/then decision gates, and data validation requirements before writing a line of code.",
            deliverables: [
              "Visual Process Flowcharts",
              "Trigger & Action Data Matrix",
              "Exception Handling Specification",
            ],
          },
          {
            number: "03",
            timeline: "Phase 3",
            title: "Automation Architecture & Schema Design",
            description:
              "Our engineers select the appropriate platforms (GoHighLevel, n8n, Make, or custom webhooks), structure JSON data schemas, design API authentication payloads, and define automated retry policies.",
            deliverables: [
              "System Integration Architecture Spec",
              "Custom Field & Tag Taxonomy",
              "API Payload Schemas",
            ],
          },
          {
            number: "04",
            timeline: "Phase 4",
            title: "Build & Configuration in Staging",
            description:
              "We configure workflows inside dedicated staging environments, mapping custom fields, writing transformation scripts, and wiring multi-channel notifications.",
            deliverables: [
              "Configured Pipeline Workflows",
              "Data Transformation Nodes",
              "Notification Webhooks & Channel Alerts",
            ],
          },
          {
            number: "05",
            timeline: "Phase 5",
            title: "Testing, Edge-Case Verification & Error Handling",
            description:
              "We conduct thorough QA by simulating malformed data, testing edge cases, verifying conditional branches, and confirming that failure alerts dispatch correctly without data loss.",
            deliverables: [
              "End-to-End Test Execution Logs",
              "Dead-Letter Queue Configuration",
              "QA Sign-Off Verification",
            ],
          },
          {
            number: "06",
            timeline: "Phase 6",
            title: "Production Cutover, Documentation & Handoff",
            description:
              "We activate live production webhooks, monitor initial execution cycles, deliver comprehensive visual SOPs and video walkthroughs, and transfer 100% system ownership to your team.",
            deliverables: [
              "Live Production Cutover",
              "Step-by-Step Visual SOP Documentation",
              "Recorded Team Training Runbook",
            ],
          },
        ]}
      />

      {/* 11. Workflow Automation vs AI Automation Comparison Table */}
      <ComparisonTable
        eyebrow="Architectural Distinction"
        heading="Workflow Automation vs. AI Automation"
        subtitle="Understanding when to use deterministic rule-based workflows versus cognitive AI reasoning ensures you deploy the right technology for each operational challenge."
        leftColumnHeader="Workflow Automation (Deterministic)"
        rightColumnHeader="AI Automation (Cognitive Reasoning)"
        rows={[
          {
            dimension: "Core Logic Type",
            traditional:
              "Deterministic: Follows rigid, explicit boolean rules ('If event X occurs and condition Y is met, execute action Z'). Zero room for interpretation.",
            ghlVertex:
              "Probabilistic Reasoning: Utilizes Large Language Models (LLMs) to interpret natural language, evaluate nuanced context, and make qualitative classifications.",
          },
          {
            dimension: "Input Data Handling",
            traditional:
              "Requires structured data: Exact form fields, standardized JSON payloads, database columns, and predictable webhook formats.",
            ghlVertex:
              "Processes unstructured inputs: Natural conversational emails, voice transcripts, PDF contracts, vendor receipts, and multi-turn SMS messages.",
          },
          {
            dimension: "Decision-Making Method",
            traditional:
              "Explicit conditions: Exact string matching, numerical thresholds, boolean true/false flags, and static tag checks.",
            ghlVertex:
              "Semantic understanding: Sentiment analysis, buyer intent evaluation, document parameter extraction, and context-aware scoring.",
          },
          {
            dimension: "Failure & Error Trapping",
            traditional:
              "Predictable failure modes: Schema validation rejects missing fields; errors are trapped by automated retry queues and alerts.",
            ghlVertex:
              "Mitigated by guardrails: Controlled by strict JSON schema outputs, temperature limits, and human-in-the-loop review checkpoints.",
          },
          {
            dimension: "Primary Strengths",
            traditional:
              "Maximum speed, consistent data formatting, deterministic execution, and negligible computational execution costs.",
            ghlVertex:
              "Complex context comprehension, document summarization, personalized draft generation, and human-like conversational flexibility.",
          },
          {
            dimension: "Ideal Operational Role",
            traditional:
              "The foundational operational backbone: Moving validated data between CRMs, billing systems, project boards, and notification channels.",
            ghlVertex:
              "The cognitive reasoning layer: Analyzing raw customer inputs and formatting structured parameters to feed into deterministic workflows.",
          },
          {
            dimension: "Ongoing Operating Expense",
            traditional:
              "Predictable software tiers: Standard CRM or platform subscription fees with negligible or zero per-execution token costs.",
            ghlVertex:
              "Direct token inference fees: Ongoing API consumption expenses based on prompt length and model selection (e.g. OpenAI or Anthropic).",
          },
        ]}
      />

      {/* 12. Error Handling, Monitoring, and Workflow Reliability */}
      <GovernanceSection
        eyebrow="Resilient Systems"
        heading="Error Handling, Monitoring, and Workflow Reliability"
        subtitle="A poorly engineered automation fails silently, causing lost leads and damaged customer trust. We design every pipeline with defensive safeguards to ensure complete operational integrity."
        items={[
          {
            title: "Automated Retry Queues with Exponential Backoff",
            description:
              "When an external API endpoint experiences temporary downtime or rate limiting, our workflows do not abandon the request. They automatically retry with calibrated backoff intervals to ensure zero dropped data.",
          },
          {
            title: "Dead-Letter Storage & Failure Isolation",
            description:
              "If a data payload contains fatal syntax errors or invalid fields, it is cleanly routed to a secured dead-letter queue. This prevents broken tasks from jamming the entire operational pipeline.",
          },
          {
            title: "Real-Time Telemetry & Instant Administrator Alerts",
            description:
              "Exceptions immediately trigger formatted alert cards in your team's designated Slack or Microsoft Teams channel, providing execution timestamps, payload snippets, and direct links to inspect the error.",
          },
        ]}
        humanInLoopNotes={[
          "High-value refunds, contract amendments, or credit card cancellations always require explicit human manager sign-off before execution.",
          "Bulk contact deletions or database purges are strictly partitioned from automated customer-facing triggers.",
          "Automated communications include strict unsubscribe listeners that immediately halt sequences upon opt-out.",
        ]}
      />

      {/* 13. What Affects Workflow Automation Cost? */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Investment Factors</span>
            <h2 className={styles.heading}>What Affects Workflow Automation Cost?</h2>
            <p className={styles.subtitle}>
              Workflow automation pricing varies based on system complexity rather than an arbitrary flat rate. Here are the primary technical dimensions that determine implementation scope:
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
            <h4 className={styles.subscriptionTitle}>
              Transparent Cost Structure: Implementation vs. Platform Subscriptions
            </h4>
            <p className={styles.subscriptionText}>
              GHLVertex charges transparent professional service fees for solution architecture, custom engineering, webhook development, QA testing, and team training. Client organizations maintain their own software platform subscriptions (e.g. GoHighLevel sub-accounts, n8n hosting, Zapier plans, or Twilio phone numbers) directly with providers. This ensures that you maintain complete ownership of your infrastructure with no proprietary markups or vendor lock-in. For organizations planning broader digital transformation, our{" "}
              <Link href="/services/ai-consulting-services/" className={styles.inlineLink}>
                AI Consulting Services
              </Link>{" "}
              can help roadmap your multi-platform automation strategy.
            </p>
          </div>

          {/* Mid-Page Conversion CTA Card */}
          <div className={styles.midCtaWrap}>
            <div className={styles.midCtaCard}>
              <div className={styles.midCtaText}>
                <h4 className={styles.midCtaHeading}>
                  Ready to Eliminate Manual Administrative Busywork?
                </h4>
                <p className={styles.midCtaCopy}>
                  Schedule a technical discovery session with a GHLVertex workflow specialist. We will review your current software stack and map out your highest-impact automation opportunities.
                </p>
              </div>
              <div className={styles.midCtaActions}>
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.midCtaPrimary}
                >
                  Book a Consultation Call
                </a>
                <Link href="/contact/" className={styles.midCtaSecondary}>
                  Request Custom Scope
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Why Choose GHLVertex */}
      <WhyGHLVertex
        heading="Why Choose GHLVertex for Workflow Automation?"
        reasons={[
          {
            title: "Engineered For Failure Recovery",
            description:
              "We design automation systems expecting third-party APIs to experience hiccups. Our defensive error handling and automated retry queues ensure your business data is never dropped.",
          },
          {
            title: "Deep GoHighLevel & Integration Mastery",
            description:
              "We combine deep CRM domain expertise in GoHighLevel with advanced middleware tools like n8n, Make, and direct REST APIs to solve complex architectural challenges.",
          },
          {
            title: "100% Client Ownership & Zero Lock-In",
            description:
              "All workflows, credentials, and documentation belong entirely to your company. We build inside your accounts, leaving you in total control of your automated systems.",
          },
          {
            title: "Clean Documentation Standard",
            description:
              "We deliver lucid visual flowcharts, detailed field taxonomies, and clear video runbooks so your internal team understands how every workflow functions without confusion.",
          },
        ]}
      />

      {/* 15. Related Services */}
      <RelatedServices
        services={[
          {
            title: "GHL Setup Services",
            href: "/services/ghl-setup-services/",
            badge: "CRM Architecture",
            description:
              "Complete GoHighLevel account configuration, pipeline architecture, calendar booking, and email/SMS compliance setup.",
          },
          {
            title: "GoHighLevel White Label Support",
            href: "/services/gohighlevel-white-label-support/",
            badge: "Agency Fulfillment",
            description:
              "Behind-the-scenes technical execution, snapshot builds, and client onboarding fulfillment for digital agencies.",
          },
          {
            title: "AI Automation Services",
            href: "/services/ai-automation-services/",
            badge: "Cognitive Logic",
            description:
              "Augment deterministic CRM workflows with LLM reasoning, document parsing, and natural language classification.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "API Connectivity",
            description:
              "Secure API connectivity integrating modern AI models directly with your existing enterprise databases and CRMs.",
          },
          {
            title: "AI Agent Development",
            href: "/services/ai-agent-development-services/",
            badge: "Autonomous Agents",
            description:
              "Custom autonomous AI agents capable of multi-step task execution, customer support triage, and real-time research.",
          },
          {
            title: "AI Consulting Services",
            href: "/services/ai-consulting-services/",
            badge: "Strategic Advisory",
            description:
              "Technical roadmapping, vendor evaluation, and operational auditing to plan your company-wide automation roadmap.",
          },
        ]}
      />

      {/* Related Blog Guides Strip */}
      <section className={styles.guidesSection}>
        <div className="container">
          <div className={styles.guidesBox}>
            <div className={styles.guidesHeader}>
              <h3 className={styles.guidesTitle}>Related Automation &amp; CRM Resources</h3>
              <p className={styles.guidesSubtitle}>
                Explore in-depth technical guides from the GHLVertex engineering team on CRM implementation and workflow design:
              </p>
            </div>
            <div className={styles.guidesGrid}>
              <Link href="/blog/how-to-set-up-gohighlevel/" className={styles.guideCard}>
                <span className={styles.guideTag}>Implementation Guide</span>
                <span className={styles.guideCardTitle}>How to Set Up GoHighLevel: Complete Guide</span>
                <p className={styles.guideCardDesc}>
                  Step-by-step technical instructions for configuring sub-accounts, custom fields, DNS records, and automated pipelines.
                </p>
              </Link>
              <Link href="/blog/what-should-gohighlevel-setup-include/" className={styles.guideCard}>
                <span className={styles.guideTag}>Best Practices</span>
                <span className={styles.guideCardTitle}>What Should a GoHighLevel Setup Include?</span>
                <p className={styles.guideCardDesc}>
                  Essential operational components for a high-converting GoHighLevel build, including pipelines, tags, and compliance rules.
                </p>
              </Link>
              <Link href="/blog/what-is-gohighlevel/" className={styles.guideCard}>
                <span className={styles.guideTag}>Platform Breakdown</span>
                <span className={styles.guideCardTitle}>What Is GoHighLevel? Complete CRM Platform Breakdown</span>
                <p className={styles.guideCardDesc}>
                  Detailed architectural overview of GoHighLevel features, marketing automations, and operational capabilities for modern businesses.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 16. Frequently Asked Questions */}
      <FaqAccordion
        heading="Frequently Asked Questions About Workflow Automation"
        faqs={faqs}
      />

      {/* 17. Final Service CTA */}
      <ServiceCta
        eyebrow="Next-Generation Operations"
        heading="Ready to Automate Your Business Workflows?"
        subtitle="Schedule a technical consultation to map out your operational processes, integrate your business tools, and build dependable automated workflows."
        primaryBtnText="Book a Workflow Automation Consultation"
        primaryBtnHref={siteConfig.links.calendly}
        secondaryBtnText="Contact GHLVertex"
        secondaryBtnHref="/contact/"
      />
    </>
  );
}
