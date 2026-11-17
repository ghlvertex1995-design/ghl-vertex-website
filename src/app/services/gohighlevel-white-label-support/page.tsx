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
  ServiceFeatures,
  ComparisonTable,
  UseCaseGrid,
  GovernanceSection,
  ProcessSteps,
  WhyGHLVertex,
  RelatedServices,
  FaqAccordion,
  ServiceCta,
} from "@/components/services";
import styles from "./WhiteLabelSupport.module.css";

export const metadata: Metadata = {
  title: "GoHighLevel White Label Support for Agencies | GHLVertex",
  description:
    "Scale your agency with GoHighLevel white label support. Get help with CRM setup, workflows, integrations, and technical fulfillment from GHLVertex.",
  alternates: {
    canonical: "/services/gohighlevel-white-label-support/",
  },
  openGraph: {
    title: "GoHighLevel White Label Support for Agencies | GHLVertex",
    description:
      "Scale your agency with GoHighLevel white label support. Get help with CRM setup, workflows, integrations, and technical fulfillment from GHLVertex.",
    url: `${siteConfig.url}/services/gohighlevel-white-label-support/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/gohighlevel-white-label-fulfillment-workflow.svg`,
        width: 1200,
        height: 630,
        alt: "GoHighLevel White Label Technical Fulfillment Workflow Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel White Label Support for Agencies | GHLVertex",
    description:
      "Scale your agency with GoHighLevel white label support. Get help with CRM setup, workflows, integrations, and technical fulfillment from GHLVertex.",
    images: [`${siteConfig.url}/images/services/gohighlevel-white-label-fulfillment-workflow.svg`],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "GoHighLevel White Label Support", href: "/services/gohighlevel-white-label-support/" },
];

const faqs = [
  {
    question: "What is GoHighLevel white label support?",
    answer:
      "GoHighLevel white label support is a specialized backend service where certified technical experts handle your agency's HighLevel fulfillment, sub-account setup, workflow automation, and client troubleshooting completely behind the scenes. Operating under your agency brand, domain, and email, our team resolves client requests without ever revealing our identity, enabling you to scale without hiring full-time in-house staff.",
  },
  {
    question: "How does white label technical fulfillment differ from HighLevel's SaaS mode?",
    answer:
      "HighLevel's SaaS mode provides platform-level rebranding, allowing you to put your logo, color palette, and custom domain on the software. White-label technical fulfillment is active human execution: certified engineers building custom workflows, troubleshooting broken triggers, handling A2P 10DLC telecom registrations, and resolving technical support tickets submitted by your sub-account clients.",
  },
  {
    question: "Do your technicians interact directly with our agency's clients?",
    answer:
      "Yes, if your engagement model includes client-facing helpdesk support. In those instances, our technicians communicate directly with your clients using your agency-branded email (such as support@youragency.com), branded Loom video recordings, and your established tone of voice. Alternatively, for back-office fulfillment models, we interface exclusively with your internal team via Slack or your project management portal.",
  },
  {
    question: "What happens when a client requests out-of-scope work or custom features?",
    answer:
      "When a client requests deliverables outside their agreed technical scope—such as custom landing page redesigns or new third-party software integrations—our team flags the request, estimates the required effort, and escalates it to your agency account manager. This creates a clean upsell opportunity for your agency to bill additional project fees.",
  },
  {
    question: "How does GHLVertex access our HighLevel agency account securely?",
    answer:
      "We adhere to strict least-privilege security protocols. You grant our team designated technician user accounts restricted to specific client sub-accounts, or provide agency-level admin access under dedicated, auditable credentials. We never require access to your agency's master billing or private corporate financials, and our work is protected by legally binding non-disclosure agreements.",
  },
  {
    question: "Can you help us build and maintain our agency master snapshots?",
    answer:
      "Yes. Building, cleaning, and updating agency master snapshots is one of our core competencies. We audit existing snapshots to remove redundant custom fields, standardize custom value keys, update workflow triggers to match new HighLevel features, and modularize components for rapid client provisioning across different industry verticals.",
  },
  {
    question: "What third-party tools and middleware do you support alongside HighLevel?",
    answer:
      "Beyond native HighLevel features, we support the broader modern agency tech stack: Twilio and LC Phone telecom infrastructure, Mailgun and LC Email deliverability, Stripe Connect payment gateways, Zapier, Make, and self-hosted n8n automation middleware, WordPress and Webflow webhooks, and ticketing systems including Zendesk, Freshdesk, and Help Scout.",
  },
  {
    question: "How quickly can GHLVertex start fulfilling technical work for our agency?",
    answer:
      "Standard agency onboarding is completed within 5 to 7 business days. During this period, we audit your master snapshots, integrate with your agency helpdesk or Slack, map out task escalation paths, and align on communication guidelines before taking our first ticket or project assignment.",
  },
];

export default function GoHighLevelWhiteLabelSupportPage() {
  const currentUrl = "/services/gohighlevel-white-label-support/";
  const pageSchema = getWebPageSchema({
    title: "GoHighLevel White Label Support for Agencies | GHLVertex",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "GoHighLevel White Label Support Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Agency White Label Support & Technical Fulfillment",
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

      {/* 01. Hero Section */}
      <ServiceHero
        eyebrow="White Label Agency Fulfillment"
        h1="GoHighLevel White Label Support for Growing Agencies"
        description="Scale your digital marketing or SaaS agency without the operational friction, training costs, or fixed payroll overhead of managing in-house technicians. We deliver 100% white-label client onboarding, custom workflow builds, third-party integrations, and responsive technical ticket fulfillment—completely behind the scenes under your agency brand."
        primaryCtaText="Book a GHL Strategy Call"
        primaryCtaHref="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
        secondaryCtaText="Explore Our White Label Services"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Digital Marketing Agencies, CRM Resellers & HighLevel SaaS Agency Owners"
        outcomeText="Zero In-House Support Payroll & 5x Client Retention Velocity"
        diagramTitle="Agency White-Label Fulfillment Lifecycle"
        flowSteps={[
          { label: "Ticket & Task Intake", sublabel: "support@youragency.com • Slack • Project Portal" },
          { label: "Technical Scoping & Triage", sublabel: "Audit Logs, Webhook Schema & Logic Review" },
          { label: "Backend Fulfillment", sublabel: "Sub-Account Build, Workflow Fix & API Mapping" },
          { label: "Staging QA & Verification", sublabel: "Live Test Submissions & Deliverability Checks" },
          { label: "Branded Handoff & Closing", sublabel: "White-Label Video Walkthrough & Ticket Resolution" },
        ]}
        highlights={[
          "100% Branded Under Your Agency",
          "Dedicated HighLevel Technical Specialists",
          "Turnkey Sub-Account Onboarding & Snapshots",
          "Strict Escalation & Up-Sell Handoffs",
        ]}
      />

      {/* 02. Direct Answer Section + Extended Narrative */}
      <DirectAnswer
        question="What is GoHighLevel white label support?"
        answer="GoHighLevel white label support is a dedicated behind-the-scenes technical fulfillment and helpdesk service that supports your marketing agency's sub-account clients under your own agency brand. Experienced GHL specialists manage client onboarding, snapshot deployments, workflow troubleshooting, API fixes, and support tickets, allowing agency owners to scale recurring SaaS client rosters without hiring an expensive in-house technical support team."
        keyTakeaways={[
          "Distinguishes between superficial platform branding (logo/domain) and active human technical fulfillment.",
          "Handles technical sub-account setup: A2P 10DLC phone registration, DNS records, and email deliverability.",
          "Resolves daily client troubleshooting tickets directly through your agency helpdesk email or portal.",
          "Frees agency owners from operational firefighting so they can focus on sales, marketing, and client acquisition.",
        ]}
      />

      {/* Extended Direct Answer Context */}
      <div className="container">
        <div className={styles.extendedDirectAnswer}>
          <h2 className={styles.extendedTitle}>
            Technical Fulfillment vs. Superficial SaaS Mode Rebranding
          </h2>
          <p className={styles.extendedParagraph}>
            While HighLevel&apos;s SaaS mode allows agencies to apply their logo, color palette, and custom domain to the software portal, superficial platform rebranding does not solve the relentless operational burden of customer fulfillment. When client workflows misfire, webhooks drop payloads, or new accounts require deep pipeline customization, software branding alone leaves agency founders trapped in day-to-day tech support.
          </p>
          <p className={styles.extendedParagraph}>
            True white-label support provides certified, human technical execution behind the scenes. Whether building end-to-end architectures through comprehensive{" "}
            <Link href="/services/ghl-setup-services/" className={styles.inlineLink}>
              GoHighLevel setup services
            </Link>{" "}
            or designing multi-branch triggers via dedicated{" "}
            <Link href="/services/workflow-automation-services/" className={styles.inlineLink}>
              workflow automation services
            </Link>
            , our engineers ensure your client systems operate reliably under your brand. For official platform standards, agencies can also consult the{" "}
            <a
              href="https://help.gohighlevel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              official HighLevel Documentation and Help Center &#8599;
            </a>
            .
          </p>

          <div className={styles.exampleCallout}>
            <div className={styles.exampleTitle}>
              <span>&#9889;</span> Practical Agency Outsourcing Scenario
            </div>
            <p className={styles.exampleText}>
              Consider a 25-client dental marketing agency signing three new practices each month. Instead of the founder spending 15 hours per client configuring A2P 10DLC messaging compliance, troubleshooting practice management webhooks, and testing appointment reminder sequences, GHLVertex provisions the sub-accounts, connects custom domains, audits Mailgun deliverability, and resolves client tickets under the agency&apos;s branded helpdesk. The founder focuses entirely on client acquisition and retainer strategy while technical delivery runs with zero friction.
            </p>
          </div>
        </div>
      </div>

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Supported Environments & Technical Integrations"
        technologies={[
          "GoHighLevel (Agency Pro & SaaS Mode)",
          "LC Phone & Twilio Infrastructure",
          "LC Email & Mailgun SMTP",
          "Stripe Connect & Subscriptions",
          "Zapier, Make & n8n Middleware",
          "Zendesk, Freshdesk & GHL Helpdesk",
          "Slack Shared Channels",
          "Loom / Custom Video SOPs",
        ]}
      />

      {/* 04. Core Service Breakdown: 7 Capabilities */}
      <div id="service-capabilities">
        <ServiceFeatures
          eyebrow="What We Handle"
          heading="7 Core White-Label Support & Fulfillment Capabilities"
          subtitle="Complete behind-the-scenes technical execution so your agency delivers enterprise-grade reliability to every client."
          features={[
            {
              title: "1. Custom CRM Architecture & Sub-Account Provisioning",
              description:
                "Turnkey provisioning for new client sign-ups with standardized folder structures, custom values, and operational pipelines.",
              deliverables: [
                "Sub-account creation and agency snapshot deployment",
                "Custom values mapping (company name, phone, address, calendar URLs)",
                "Pipeline stages and opportunity value standardizations",
                "User role assignments, permission audits, and notification profiles",
              ],
            },
            {
              title: "2. Advanced Workflow & Automation Engineering",
              description:
                "Designing, building, and maintaining multi-branch automation engines that handle lead nurturing, reminders, and internal alerts.",
              deliverables: [
                "Multi-channel automated sequences (SMS, email, voicemail drops, tasks)",
                "Conditional logic branching with 'If/Else' and wait conditions",
                "Custom webhook triggers for bi-directional data synchronization",
                "Automated appointment reminders and no-show re-engagement flows",
              ],
            },
            {
              title: "3. Funnel, Form, & Survey Configuration",
              description:
                "High-converting funnel builds, survey conditional logic, and embedded capture systems tailored to client sub-accounts.",
              deliverables: [
                "Multi-step funnel page layout and mobile responsiveness checks",
                "Custom form routing with hidden UTM parameter capture",
                "Survey qualification logic and conditional stage redirecting",
                "Tracking pixel installation (Meta CAPI, Google Analytics 4, TikTok)",
              ],
            },
            {
              title: "4. Agency Master Snapshot Architecture & Maintenance",
              description:
                "Continuous auditing, updating, and modular refactoring of your agency's core industry snapshots.",
              deliverables: [
                "Master snapshot audits to eliminate bloated custom fields and dead tags",
                "Versioning and updating snapshots across newly released GHL features",
                "Niche-specific modular snapshot architecture (Dentists, MedSpas, Roofers)",
                "Snapshot deployment QA testing to guarantee error-free sub-account rollouts",
              ],
            },
            {
              title: "5. Third-Party API, Webhook, & Middleware Integration",
              description:
                "Bridging GoHighLevel with external business tools, proprietary CRMs, and payment gateways.",
              deliverables: [
                "Custom webhook configurations between GHL and external endpoints",
                "Middleware pipeline automation via Zapier, Make, and self-hosted n8n",
                "Stripe Connect, QuickBooks, and payment gateway synchronization",
                "Database integration and custom API payload parsing",
              ],
            },
            {
              title: "6. Client Onboarding & Telecom Compliance Setup",
              description:
                "Eliminating technical onboarding bottlenecks with turnkey domain, email deliverability, and carrier telecom registrations.",
              deliverables: [
                "A2P 10DLC Brand and Campaign carrier compliance submissions",
                "DNS domain mapping (A records, CNAMEs, TXT records)",
                "Email deliverability setup (SPF, DKIM, DMARC, and MX records via Mailgun/LC)",
                "Two-way Google and Outlook calendar synchronization testing",
              ],
            },
            {
              title: "7. Technical Troubleshooting & Bug Fix Fulfillment",
              description:
                "Rapid resolution of everyday bugs, broken triggers, and client support tickets under your agency brand.",
              deliverables: [
                "Branded ticket responses via your agency helpdesk email",
                "Loom screen recordings explaining technical fixes to your clients",
                "Execution log inspections to isolate broken triggers and failed webhooks",
                "Strict escalation pathways to keep agency owners informed without noise",
              ],
            },
          ]}
        />
      </div>

      {/* 05. Agency Target Audience: 5 Profiles */}
      <UseCaseGrid
        eyebrow="Target Audiences"
        heading="Tailored White-Label Fulfillment for Every Agency Model"
        subtitle="Whether scaling a high-volume SaaS tier or managing custom boutique retainers, we eliminate technical fulfillment bottlenecks."
        useCases={[
          {
            scenarioTitle: "1. Digital Marketing & Paid Advertising Agencies",
            trigger:
              "Running lead generation campaigns for clients but losing billable hours fixing broken lead notifications, form routing, and CRM sync issues.",
            orchestration:
              "GHLVertex manages all backend sub-account wiring, connects ad forms directly to pipelines, and verifies SMS/email speed-to-lead automations.",
            outcome:
              "Ad campaigns launch faster, lead conversions improve, and agency strategists stay focused on campaign ROAS.",
          },
          {
            scenarioTitle: "2. HighLevel SaaS Resellers (SaaS Mode)",
            trigger:
              "Acquiring 10 to 50+ SaaS clients monthly, creating an unmanageable wave of basic onboarding questions and phone setup tickets.",
            orchestration:
              "We handle turnkey sub-account provisioning, automated snapshot deployment, A2P 10DLC registration, and level-1/level-2 ticket support.",
            outcome:
              "Low monthly customer churn, scalable SaaS recurring revenue, and zero founder burnout.",
          },
          {
            scenarioTitle: "3. Niche Industry Agencies (Dental, MedSpa, Real Estate, Home Services)",
            trigger:
              "Servicing specialized local business clients requiring verticalized snapshot features, review automation, and custom booking workflows.",
            orchestration:
              "We maintain and update your industry master snapshots, configure calendar booking rules, and troubleshoot practice management integrations.",
            outcome:
              "Consistent client experiences, high snapshot stability, and streamlined client retention.",
          },
          {
            scenarioTitle: "4. Boutique Agencies & Solopreneurs at Capacity",
            trigger:
              "Solo agency founders capped at 5–10 clients because technical execution leaves no time for sales or business development.",
            orchestration:
              "GHLVertex acts as your invisible back-office technical department, executing client change requests and daily maintenance.",
            outcome:
              "Reclaims 20+ hours per week, allowing founders to double client rosters without hiring full-time staff.",
          },
          {
            scenarioTitle: "5. Enterprise Agencies Requiring Overflow Support",
            trigger:
              "Established agencies experiencing client surges or sudden staff turnover that threaten project delivery timelines.",
            orchestration:
              "We provide instant technical bandwidth to absorb complex workflow builds, database migrations, and sub-account audits.",
            outcome:
              "Zero project delivery delays, protected agency reputation, and smooth client transitions.",
          },
        ]}
      />

      {/* 06. End-to-End Fulfillment Process: 5 Steps */}
      <ProcessSteps
        eyebrow="Fulfillment Framework"
        heading="Our 5-Step Behind-the-Scenes Fulfillment Process"
        subtitle="A structured, predictable delivery lifecycle engineered to guarantee quality, security, and brand invisibility."
        steps={[
          {
            number: "01",
            timeline: "Phase 1: Intake & Technical Scoping",
            title: "Intake & Technical Scoping",
            description:
              "Your agency logs a task or a client submits a ticket. We review requirements, verify sub-account access, and evaluate workflow dependencies.",
            deliverables: [
              "Ticket Ingestion & Priority Tagging",
              "Sub-Account Access Verification",
              "Scope & Dependency Check",
            ],
          },
          {
            number: "02",
            timeline: "Phase 2: Architecture & Technical Plan",
            title: "Architecture & Technical Plan",
            description:
              "Before modifying live systems, our certified engineers diagram the automation logic, custom value mapping, and webhook payloads.",
            deliverables: [
              "Logic Mapping & Trigger Schema",
              "Custom Fields/Values Pre-Check",
              "Rollback Safeguard Plan",
            ],
          },
          {
            number: "03",
            timeline: "Phase 3: Implementation & Sub-Account Buildout",
            title: "Implementation & Sub-Account Buildout",
            description:
              "We execute the technical work inside the designated sub-account—configuring pipelines, testing automations, and deploying snapshots.",
            deliverables: [
              "Clean Workflow Construction",
              "API & Webhook Payload Integration",
              "Sub-Account Asset Deployment",
            ],
          },
          {
            number: "04",
            timeline: "Phase 4: QA Testing & Verification",
            title: "QA Testing & Verification",
            description:
              "Rigorous staging verification: firing test contacts, checking conditional branch executions, validating email deliverability, and inspecting logs.",
            deliverables: [
              "End-to-End Test Submissions",
              "Execution Log Audit",
              "Deliverability & DNS Check",
            ],
          },
          {
            number: "05",
            timeline: "Phase 5: Branded Delivery & Video SOPs",
            title: "Branded Delivery & Video SOPs",
            description:
              "We close the ticket under your agency brand, providing a concise branded Loom video walkthrough and updated SOP documentation.",
            deliverables: [
              "Branded Ticket Reply & Closure",
              "Client-Facing Loom Video Walkthrough",
              "Agency Portal Task Summary",
            ],
          },
        ]}
      />

      {/* Visual Workflow Diagram */}
      <div className="container">
        <div className={styles.imageVisualWrapper}>
          <Image
            src="/images/services/gohighlevel-white-label-fulfillment-workflow.svg"
            alt="End-to-End GoHighLevel White Label Technical Fulfillment Lifecycle Architecture Diagram"
            width={1200}
            height={630}
            className={styles.responsiveSvg}
          />
        </div>
      </div>

      {/* 07. Flexible Fulfillment Options */}
      <section className={styles.engagementSection}>
        <div className="container">
          <div className={styles.engagementHeader}>
            <span className={styles.eyebrow}>Flexible Engagement Models</span>
            <h2 className={styles.heading}>Flexible GoHighLevel Fulfillment Options</h2>
            <p className={styles.subtitle}>
              Whether you need sprint-based project execution, predictable monthly retainer support, or dedicated technical assistance, we align with your operational model.
            </p>
          </div>

          <div className={styles.engagementGrid}>
            {/* Model 1: Project-Based */}
            <div className={styles.engagementCard}>
              <span className={styles.tierBadge}>Sprint &amp; Migration</span>
              <h3 className={styles.tierTitle}>Project-Based Implementation</h3>
              <p className={styles.tierDesc}>
                Ideal for agencies needing one-off sub-account builds, deep system audits, complex snapshot refactoring, or client migrations.
              </p>
              <ul className={styles.tierFeatures}>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Custom sub-account architecture &amp; pipeline builds</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Master snapshot cleanup &amp; modular reorganization</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Third-party CRM data migration into GoHighLevel</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Dedicated technical QA &amp; delivery documentation</span>
                </li>
              </ul>
            </div>

            {/* Model 2: Monthly Retainers */}
            <div className={styles.engagementCard}>
              <span className={styles.tierBadge}>Agency Scaling</span>
              <h3 className={styles.tierTitle}>Ongoing Monthly Retainers</h3>
              <p className={styles.tierDesc}>
                Predictable technical fulfillment for agencies requiring ongoing ticket resolution, monthly snapshot updates, and regular client onboarding.
              </p>
              <ul className={styles.tierFeatures}>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Dedicated ticket queue handling under your agency brand</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Guaranteed service level agreements (SLAs) for ticket responses</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Turnkey monthly client onboarding &amp; snapshot deployments</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Weekly operational sync &amp; fulfillment reporting</span>
                </li>
              </ul>
            </div>

            {/* Model 3: Dedicated Technical Assistance */}
            <div className={styles.engagementCard}>
              <span className={styles.tierBadge}>High-Volume SaaS</span>
              <h3 className={styles.tierTitle}>Dedicated Technical Assistance</h3>
              <p className={styles.tierDesc}>
                Full-spectrum backend technical department for fast-scaling SaaS agencies managing 50+ sub-accounts with continuous support demands.
              </p>
              <ul className={styles.tierFeatures}>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Dedicated technical specialist integrated into your Slack</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>High-priority ticket triage &amp; custom API middleware support</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Continuous A2P 10DLC &amp; telecom compliance oversight</span>
                </li>
                <li className={styles.tierItem}>
                  <span className={styles.tierItemCheck}>&#10003;</span>
                  <span>Proactive sub-account health audits and workflow monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.engagementCtaBanner}>
            <span>
              Every agency is unique. Our fulfillment engagements are custom-scoped based on your active sub-account volume and technical complexity.{" "}
              <a
                href="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
                className={styles.inlineLink}
              >
                Book a strategy call to explore a tailored partnership &rarr;
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* 08. In-House vs. White Label Support: 7 Dimensions */}
      <ComparisonTable
        eyebrow="Resource Evaluation"
        heading="In-House Technical Hiring vs. GHLVertex White Label Support"
        subtitle="An objective comparison of total operational cost, scalability, and technical reliability."
        leftColumnHeader="In-House Technical Hire"
        rightColumnHeader="GHLVertex White Label Support"
        rows={[
          {
            dimension: "1. Financial Overhead & Payroll Liabilities",
            traditional:
              "$4,000–$7,000/mo per technician plus employment taxes, healthcare, software licenses, and hardware.",
            ghlVertex:
              "Predictable, transparent agency retainers with zero tax liability, zero benefits, and high gross margin protection.",
          },
          {
            dimension: "2. Onboarding Time & Speed to Deployment",
            traditional:
              "4 to 8 weeks for recruitment, technical screening, cultural onboarding, and system ramp-up.",
            ghlVertex:
              "Instant deployment within 5 to 7 business days with pre-vetted, certified HighLevel specialists.",
          },
          {
            dimension: "3. Technical Depth & Platform Breadth",
            traditional:
              "Often limited to basic CRM skills; struggles with advanced webhooks, custom code, APIs, and n8n middleware.",
            ghlVertex:
              "Full-stack technical team with cross-disciplinary expertise spanning CRM, APIs, webhooks, middleware, and automation.",
          },
          {
            dimension: "4. Operational Scalability & Fluctuation Resilience",
            traditional:
              "Adding 15 new accounts overburdens single hires; slow months create idle payroll burn.",
            ghlVertex:
              "Elastic scalability: effortlessly absorbs sudden client surges without extra recruitment or management overhead.",
          },
          {
            dimension: "5. Quality Assurance & Testing Standards",
            traditional:
              "Prone to human error without constant agency founder supervision, testing checklists, and review protocols.",
            ghlVertex:
              "Standardized multi-point staging QA, test submissions, execution log audits, and documented SOPs.",
          },
          {
            dimension: "6. Management Overhead & Daily Supervision",
            traditional:
              "Requires 5–10 hours per week of founder time for daily 1-on-1s, task delegation, and quality checks.",
            ghlVertex:
              "Zero day-to-day management burden: autonomous ticket handling with transparent dashboard reporting.",
          },
          {
            dimension: "7. Risk of Knowledge Loss & Employee Churn",
            traditional:
              "High vulnerability: when an employee departs, institutional snapshot and client setup knowledge walks out the door.",
            ghlVertex:
              "Institutional stability: thorough system documentation, standardized snapshots, and zero disruption from staff turnover.",
          },
        ]}
      />

      {/* 09. Agency Governance, Confidentiality & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Security & Governance"
        heading="Strict Agency Protection, Confidentiality, & Operating Boundaries"
        subtitle="Your agency brand and client relationships are sacred. We operate with enterprise security standards and complete invisibility."
        items={[
          {
            title: "Legally Binding NDAs & Non-Compete Clauses",
            description:
              "We sign strict confidentiality and non-compete agreements. We never market to, solicit, or directly contact your clients for our own services.",
          },
          {
            title: "Scoped Least-Privilege Sub-Account Access",
            description:
              "Our technicians only access the specific client sub-accounts required for technical execution, keeping your master agency billing and private contracts strictly isolated.",
          },
          {
            title: "Transparent Change Management & Audit Logs",
            description:
              "Every workflow modification, snapshot update, and custom field addition is documented with clear changelogs and audit trails visible to agency leadership.",
          },
        ]}
        humanInLoopNotes={[
          "Commercial conversations, billing inquiries, and contract negotiations are routed immediately to agency leadership.",
          "Our technicians never authorize refunds, credits, or scope expansions without explicit agency owner approval.",
          "Client requests for out-of-scope custom software builds or additional marketing services are packaged as warm upsell opportunities for your sales team.",
        ]}
      />

      {/* 10. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "GoHighLevel Technical Specialists",
            description:
              "We don't provide generic virtual assistance. Our engineers specialize exclusively in GoHighLevel architecture, advanced automations, and third-party integrations.",
          },
          {
            title: "100% Brand Invisibility",
            description:
              "Your clients only see your agency logo, domain, email signatures, and brand voice. GHLVertex remains completely unseen behind the scenes.",
          },
          {
            title: "Proactive Architecture & System Cleanups",
            description:
              "We don't merely react to broken tickets; we proactively identify bloated custom fields, orphaned tags, and workflow friction before clients notice.",
          },
          {
            title: "Standardized QA & Clear Escalations",
            description:
              "Every ticket and workflow update passes through rigorous staging verification with automated test contacts and full execution log audits.",
          },
        ]}
      />

      {/* 11. Related Services */}
      <RelatedServices
        services={[
          {
            title: "GoHighLevel Setup Services",
            href: "/services/ghl-setup-services/",
            badge: "Core Architecture",
            description:
              "Turnkey sub-account configuration, pipeline structuring, and data migration for new deployments.",
          },
          {
            title: "Workflow Automation Services",
            href: "/services/workflow-automation-services/",
            badge: "Automations & Logic",
            description:
              "Multi-branch automation workflows, webhook synchronization, and cross-platform middleware.",
          },
          {
            title: "AI Automation Services",
            href: "/services/ai-automation-services/",
            badge: "Intelligent Systems",
            description:
              "Integrate conversational AI and automated lead qualification agents into HighLevel sub-accounts.",
          },
          {
            title: "AI Integration Services",
            href: "/services/ai-integration-services/",
            badge: "Custom APIs & Middleware",
            description:
              "Connect HighLevel to enterprise databases, n8n instances, and external proprietary platforms.",
          },
        ]}
      />

      {/* 12. Frequently Asked Questions */}
      <FaqAccordion faqs={faqs} />

      {/* 13. Final Call to Action */}
      <ServiceCta
        eyebrow="Ready to Scale Your Agency Roster?"
        heading="Delegate Your GoHighLevel Technical Support to Certified Specialists."
        subtitle="Book a 30-minute strategy call with our technical team to discuss your agency's sub-account volume, workflow requirements, and fulfillment options."
        primaryBtnText="Book a GHL Strategy Call"
        primaryBtnHref="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
        secondaryBtnText="Contact GHLVertex"
        secondaryBtnHref="/contact/"
      />
    </>
  );
}
