import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbSchema,
  getContactPageSchema,
  getFaqSchema,
  getOrganizationSchema,
} from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "@/components/contact/ContactSections.module.css";

export const metadata: Metadata = {
  title: "Contact GHLVertex | GoHighLevel, Automation & AI",
  description:
    "Contact GHLVertex to discuss GoHighLevel setup, workflow automation, AI agents, integrations, white-label support, RAG and custom AI systems.",
  alternates: {
    canonical: "https://ghlvertex.com/contact/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact GHLVertex | GoHighLevel, Automation & AI",
    description:
      "Contact GHLVertex to discuss GoHighLevel setup, workflow automation, AI agents, integrations, white-label support, RAG and custom AI systems.",
    url: "https://ghlvertex.com/contact/",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact GHLVertex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GHLVertex | GoHighLevel, Automation & AI",
    description:
      "Contact GHLVertex to discuss GoHighLevel setup, workflow automation, AI agents, integrations, white-label support, RAG and custom AI systems.",
    images: [siteConfig.ogImage],
  },
};

const breadcrumbs = [{ label: "Contact", href: "/contact/" }];

const servicePills = [
  "GoHighLevel",
  "CRM",
  "Workflow Automation",
  "AI Agents",
  "AI Integrations",
  "White-Label Support",
];

const helpCards = [
  {
    title: "GoHighLevel Setup & CRM",
    copy: "Set up or improve CRM structure, pipelines, lead management, calendars, conversations, and business processes inside GoHighLevel.",
    href: "/services/ghl-setup-services/",
  },
  {
    title: "Workflow Automation",
    copy: "Connect repetitive business processes with reliable workflows, triggers, routing, follow-up, and system actions.",
    href: "/services/workflow-automation-services/",
  },
  {
    title: "AI Agents & Voice AI",
    copy: "Build AI-powered systems that can understand requests, use approved tools, retrieve information, and support business workflows.",
    href: "/services/ai-agent-development-services/",
  },
  {
    title: "AI Chatbots",
    copy: "Create conversational AI experiences for websites, customer support, lead qualification, and internal use cases.",
    href: "/services/ai-chatbot-development-services/",
  },
  {
    title: "AI Integrations",
    copy: "Connect AI models with software, CRM platforms, APIs, databases, workflows, and business tools.",
    href: "/services/ai-integration-services/",
  },
  {
    title: "RAG & Knowledge Systems",
    copy: "Connect AI systems with approved company knowledge, documents, databases, and internal information.",
    href: "/services/rag-development-services/",
  },
  {
    title: "GoHighLevel White-Label Support",
    copy: "Support agencies with GoHighLevel implementation, automation, troubleshooting, and backend execution where appropriate.",
    href: "/services/gohighlevel-white-label-support/",
  },
];

const nextSteps = [
  {
    step: "01",
    title: "Share Your Project",
    desc: "Tell us what you are trying to build, automate, integrate, or improve.",
  },
  {
    step: "02",
    title: "We Review the Context",
    desc: "We review the information you provide and identify the relevant areas of your current setup.",
  },
  {
    step: "03",
    title: "Discuss the Right Approach",
    desc: "If appropriate, we can discuss the project in a strategy call and clarify scope, systems, and priorities.",
  },
  {
    step: "04",
    title: "Define the Next Step",
    desc: "Based on the project, we can outline a suitable implementation direction.",
  },
];

const contactFaqs = [
  {
    question: "What type of projects does GHLVertex work on?",
    answer:
      "GHLVertex focuses on GoHighLevel, CRM systems, workflow automation, AI agents, AI chatbots, AI integrations, RAG systems, and related business automation projects.",
  },
  {
    question: "Can you work with an existing GoHighLevel account?",
    answer:
      "Yes. Projects can include improving, restructuring, troubleshooting, or extending an existing GoHighLevel setup depending on the current system and requirements.",
  },
  {
    question: "Do you provide white-label GoHighLevel support for agencies?",
    answer:
      "GHLVertex can support agency-focused GoHighLevel implementation and automation projects. The exact scope depends on the project requirements and delivery model.",
  },
  {
    question: "Can you integrate AI with our current CRM or software?",
    answer:
      "Depending on the systems involved, AI can often be connected with existing CRM platforms, APIs, databases, workflows, and internal tools.",
  },
  {
    question: "Can you build AI agents or AI-powered workflows?",
    answer:
      "Yes. GHLVertex works on AI agents, workflow automation, tool integrations, RAG, and related AI-powered business systems.",
  },
  {
    question: "Can I book a call before submitting the form?",
    answer:
      "Yes. You can book a 30-minute strategy call using the meeting link provided on this page.",
  },
  {
    question: "Where is GHLVertex located?",
    answer:
      "GHLVertex lists its business address as 8834 144th St, Queens, NY 11435, United States.",
  },
];

export default function ContactPage() {
  const currentUrl = "/contact/";
  const contactPageSchema = getContactPageSchema({
    title: "Contact GHLVertex | GoHighLevel, Automation & AI",
    description: metadata.description as string,
    url: currentUrl,
  });
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const faqSchema = getFaqSchema(contactFaqs);

  const calendlyUrl = "https://calendly.com/ghl-vertex1995/30min?month=2026-11";
  const mapsUrl = "https://maps.google.com/?q=8834+144th+St,+Queens,+NY+11435,+United+States";

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section */}
      <section className={styles.heroSection} aria-labelledby="contact-hero-heading">
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>CONTACT GHLVERTEX</span>
            <h1 id="contact-hero-heading" className={styles.h1}>
              Let’s Talk About Your GoHighLevel, Automation or AI Project
            </h1>
            <p className={styles.heroSubtitle}>
              Whether you need help setting up GoHighLevel, improving an existing CRM, building workflows, adding AI agents, connecting business systems, or supporting client projects, tell us what you are working on and we’ll help you identify the right next step.
            </p>

            <div className={styles.ctaGroup}>
              <Link
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                <span>Book a GHL Strategy Call</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a href="#contact-form" className={styles.secondaryBtn}>
                <span>Send Us a Message</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className={styles.pillsRow} aria-label="Core Specializations">
              {servicePills.map((pill) => (
                <span key={pill} className={styles.pill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Two Paths Section */}
      <section className={styles.twoPathsSection} aria-labelledby="two-paths-heading">
        <div className="container">
          <div className={styles.twoPathsHeader}>
            <h2 id="two-paths-heading" className={styles.sectionHeading}>
              Not Sure Which Way to Contact Us?
            </h2>
          </div>

          <div className={styles.twoPathsGrid}>
            <div className={styles.pathCard}>
              <h3 className={styles.pathTitle}>Have a Specific Project?</h3>
              <p className={styles.pathCopy}>
                Send us your requirements, current setup, and what you want to improve.
              </p>
              <a href="#contact-form" className={`${styles.pathBtn} ${styles.pathBtnSecondary}`}>
                <span>Send Project Details</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className={styles.pathCard}>
              <h3 className={styles.pathTitle}>Prefer to Talk It Through?</h3>
              <p className={styles.pathCopy}>
                Book a 30-minute strategy call to discuss your current systems, goals, and next steps.
              </p>
              <Link
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.pathBtn} ${styles.pathBtnPrimary}`}
              >
                <span>Book a GHL Strategy Call</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Direct Contact Details Grid */}
      <section className={styles.contactGridSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Contact Form */}
            <ContactForm />

            {/* Right: Direct Contact & Location Info */}
            <div className={styles.infoCard}>
              <div className={styles.infoHead}>
                <span className={styles.eyebrow}>CONTACT DETAILS</span>
                <h2 className={styles.infoTitle}>Visit or Contact GHLVertex</h2>
              </div>

              <div className={styles.infoList}>
                {/* Physical Address */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Business Address</span>
                    <address className={styles.infoValue} style={{ fontStyle: "normal" }}>
                      8834 144th St, Queens, NY 11435, United States
                    </address>
                  </div>
                </div>

                {/* Email Address */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@ghlvertex.com" className={styles.infoLink}>
                      info@ghlvertex.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Website</span>
                    <span className={styles.infoValue}>GHLVertex.com</span>
                  </div>
                </div>

                {/* Strategy Call */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Strategy Call</span>
                    <Link
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoLink}
                    >
                      Book a 30-Minute Meeting →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Map / Location Card */}
              <div className={styles.mapCard}>
                <div className={styles.mapCardHeader}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-main)" }}>
                    Queens, New York
                  </span>
                  <span className={styles.mapBadge}>Verified Location</span>
                </div>
                <p className={styles.mapAddressText}>
                  8834 144th St, Queens, NY 11435, United States
                </p>
                <Link
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewLocationBtn}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>View Location on Google Maps</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Happens Next Section */}
      <section className={styles.processSection} aria-labelledby="what-happens-next-heading">
        <div className="container">
          <div className={styles.processHeader}>
            <span className={styles.eyebrow}>WHAT HAPPENS NEXT</span>
            <h2 id="what-happens-next-heading" className={styles.sectionHeading}>
              A Simple Way to Start
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            {nextSteps.map((step) => (
              <div key={step.step} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Can Help Section */}
      <section className={styles.helpSection} aria-labelledby="help-heading">
        <div className="container">
          <div className={styles.helpHeader}>
            <span className={styles.eyebrow}>WHAT WE CAN HELP WITH</span>
            <h2 id="help-heading" className={styles.sectionHeading}>
              Build, Automate and Improve Your Business Systems
            </h2>
          </div>

          <div className={styles.helpGrid}>
            {helpCards.map((card) => (
              <Link key={card.title} href={card.href} className={styles.helpCard}>
                <div className={styles.helpCardTitleRow}>
                  <h3 className={styles.helpCardTitle}>{card.title}</h3>
                  <span className={styles.helpArrow} aria-hidden="true">→</span>
                </div>
                <p className={styles.helpCardCopy}>{card.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <FaqAccordion
        eyebrow="FAQ"
        heading="Contact & Project Questions"
        subtitle="Clear, straightforward answers about contacting GHLVertex, booking calls, and project feasibility."
        faqs={contactFaqs}
      />

      {/* 7. Final CTA Section */}
      <section className={styles.finalCtaSection} aria-labelledby="final-cta-heading">
        <div className="container">
          <div className={styles.finalCtaCard}>
            <span className={styles.finalCtaEyebrow}>READY TO START?</span>
            <h2 id="final-cta-heading" className={styles.finalCtaHeading}>
              Tell Us What You Want to Build
            </h2>
            <p className={styles.finalCtaCopy}>
              Whether you are starting from scratch, improving an existing GoHighLevel setup, adding AI, connecting systems, or looking for white-label implementation support, share your project details and let’s identify the right next step.
            </p>
            <div className={styles.finalCtaButtons}>
              <a href="#contact-form" className={styles.finalPrimaryBtn}>
                <span>Send Project Details</span>
                <span aria-hidden="true">↓</span>
              </a>
              <Link
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.finalSecondaryBtn}
              >
                <span>Book a 30-Minute Strategy Call</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
