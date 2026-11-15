import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { ThankYouTracker } from "@/components/thank-you/ThankYouTracker";
import styles from "./ThankYou.module.css";

export const metadata: Metadata = {
  title: "Thank You | GHLVertex",
  description:
    "Thank you for contacting GHLVertex. We have received your project details and will review your requirements shortly.",
  alternates: {
    canonical: "https://ghlvertex.com/thank-you/",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Thank You | GHLVertex",
    description:
      "Thank you for contacting GHLVertex. We have received your project details and will review your requirements shortly.",
    url: "https://ghlvertex.com/thank-you/",
    siteName: siteConfig.name,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Contact", href: "/contact/" },
  { label: "Thank You", href: "/thank-you/" },
];

const nextSteps = [
  {
    step: "01",
    title: "Project & Setup Review",
    desc: "Our technical team reviews your current CRM configuration, automation workflows, and specific business goals to identify the highest-leverage solutions.",
  },
  {
    step: "02",
    title: "Tailored Next Steps",
    desc: "We follow up with a clear breakdown of recommendations, realistic implementation timelines, and optimal architecture for your project.",
  },
  {
    step: "03",
    title: "Strategy Session & Kickoff",
    desc: "We connect for a focused strategy session to review the blueprint, address any questions, and align on project scope before starting.",
  },
];

const serviceLinks = [
  { label: "GoHighLevel Setup", href: "/services/ghl-setup-services/" },
  { label: "Workflow Automation", href: "/services/workflow-automation-services/" },
  { label: "AI Agent Development", href: "/services/ai-agent-development-services/" },
  { label: "AI Integration Services", href: "/services/ai-integration-services/" },
  { label: "SaaS CRM Solutions", href: "/solutions/saas-crm/" },
];

export default function ThankYouPage() {
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  return (
    <div className={styles.pageWrapper}>
      {/* Tracking DataLayer Event for GTM, GA4 & Ads Conversion */}
      <ThankYouTracker />
      <JsonLd data={breadcrumbSchema} />

      <div className={styles.container}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Hero Section */}
        <section className={styles.heroSection} aria-labelledby="thank-you-heading">
          <div className={styles.successBadge} aria-hidden="true">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <span className={styles.eyebrow}>REQUEST RECEIVED</span>
          <h1 id="thank-you-heading" className={styles.heading}>
            Thank You! We’ve Received Your Project Details
          </h1>
          <p className={styles.supporting}>
            Your project details have been successfully received. Our team is reviewing your requirements and current setup. We will reach out directly to your email address within 24 business hours.
          </p>

          <div className={styles.ctaGroup}>
            <Link
              href="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <span>Book a Strategy Call Now</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/" className={styles.secondaryBtn}>
              <span aria-hidden="true">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </section>

        {/* What to Expect Next */}
        <section className={styles.nextStepsCard} aria-labelledby="next-steps-heading">
          <div className={styles.nextStepsHeader}>
            <h2 id="next-steps-heading" className={styles.nextStepsTitle}>
              What Happens Next?
            </h2>
            <p className={styles.nextStepsSubtitle}>
              Here is our structured process from inquiry to project kickoff:
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {nextSteps.map((item) => (
              <div key={item.step} className={styles.stepItem}>
                <div className={styles.stepBadge}>{item.step}</div>
                <h3 className={styles.stepItemTitle}>{item.title}</h3>
                <p className={styles.stepItemDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Contact & Verification */}
        <div className={styles.supportBanner}>
          <div className={styles.supportInfo}>
            <h3 className={styles.supportTitle}>Need Immediate Assistance?</h3>
            <p className={styles.supportCopy}>
              If you have urgent project requirements or questions, contact us directly or schedule your discovery call via the Calendly link above.
            </p>
            <div className={styles.supportMeta}>
              <span className={styles.supportMetaItem}>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@ghlvertex.com" className={styles.supportMetaLink}>
                  info@ghlvertex.com
                </a>
              </span>
              <span className={styles.supportMetaItem}>
                <strong>Location:</strong> 8834 144th St, Queens, NY 11435, United States
              </span>
            </div>
          </div>
          <Link
            href="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <span>Open Calendar</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Explore Services */}
        <section className={styles.servicesSection} aria-label="Explore other GHLVertex services">
          <h3 className={styles.servicesTitle}>Explore Popular Services While You Wait</h3>
          <div className={styles.servicePills}>
            {serviceLinks.map((service) => (
              <Link key={service.href} href={service.href} className={styles.servicePill}>
                {service.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
