import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getWebPageSchema } from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { ServiceCta } from "@/components/services/ServiceCta";
import { allIndustriesData } from "@/data/industries";
import styles from "./IndustriesHub.module.css";

export const metadata: Metadata = {
  title: "Industries We Serve with GoHighLevel | Custom CRM, Automation & AI | GHLVertex",
  description:
    "Explore tailored GoHighLevel CRM, workflow automation, and AI architectures engineered around how your industry actually operates. Dedicated systems for 12 key trades.",
  alternates: {
    canonical: "/industries/",
  },
  openGraph: {
    title: "Industries We Serve with GoHighLevel | GHLVertex",
    description:
      "Explore tailored GoHighLevel CRM, workflow automation, and AI architectures engineered around how your industry actually operates. Dedicated systems for 12 key trades.",
    url: `${siteConfig.url}/industries/`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve with GoHighLevel | GHLVertex",
    description:
      "Explore tailored GoHighLevel CRM, workflow automation, and AI architectures engineered around how your industry actually operates.",
  },
};

const breadcrumbs = [{ label: "Industries", href: "/industries/" }];

const architecturePillars = [
  {
    number: "01",
    title: "Unique Customer Journeys",
    desc: "An emergency plumbing leak requires sub-15 second triage, while an enterprise SaaS deal demands a multi-month product-qualified sales pipeline. We build for your real lifecycle.",
  },
  {
    number: "02",
    title: "Pre-Configured Trade Pipelines",
    desc: "No placeholder templates. Every pipeline includes the exact stages, custom fields, and automated alerts required to move opportunities from inquiry to closed revenue.",
  },
  {
    number: "03",
    title: "Trade Software Integrations",
    desc: "We bridge GoHighLevel with your industry-specific software—including ServiceTitan, Jobber, Clio, Dentrix, Dotloop, and Stripe—eliminating duplicate data entry.",
  },
  {
    number: "04",
    title: "Responsible AI & Voice Agents",
    desc: "We deploy conversational AI receptionists and chatbots trained specifically on your trade terminology, with strict human-in-the-loop safeguards protecting your brand.",
  },
];

export default function IndustriesHubPage() {
  const currentUrl = "/industries/";
  const pageSchema = getWebPageSchema({
    title: "Industries We Serve with GoHighLevel | GHLVertex",
    description: metadata.description as string,
    url: currentUrl,
  });
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  return (
    <div className={styles.pageWrapper}>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.heroSection} aria-labelledby="industries-hub-heading">
        <div className={styles.container}>
          <span className={styles.eyebrow}>INDUSTRIES WE SERVE</span>
          <h1 id="industries-hub-heading" className={styles.heading}>
            GoHighLevel Systems Built for <span className={styles.headingHighlight}>How Your Trade Actually Operates</span>
          </h1>
          <p className={styles.description}>
            GHLVertex does not simply install generic GoHighLevel templates. We engineer connected CRM, automation, AI, and integration systems designed around your real operational bottlenecks and customer conversion lifecycles.
          </p>
        </div>
      </section>

      {/* 12 Industry Cards Grid */}
      <section className={styles.gridSection} aria-label="Industry Landing Pages">
        <div className={styles.container}>
          <div className={styles.grid}>
            {allIndustriesData.map((industry) => (
              <Link
                key={industry.slug}
                href={industry.canonical}
                className={styles.card}
                aria-label={`Explore GoHighLevel solutions for ${industry.name}`}
              >
                <div>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardDot} aria-hidden="true" />
                    <h2 className={styles.cardTitle}>{industry.name}</h2>
                  </div>
                  <p className={styles.cardDesc}>{industry.metaDescription}</p>
                </div>
                <span className={styles.cardCta} aria-hidden="true">
                  Explore {industry.name} Solutions →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trade-Specific Architecture Matters */}
      <section className={styles.philosophySection} aria-labelledby="philosophy-heading">
        <div className={styles.container}>
          <div className={styles.philosophyHeader}>
            <span className={styles.eyebrow}>THE GHLVERTEX DIFFERENCE</span>
            <h2 id="philosophy-heading" className={styles.philosophyTitle}>
              Why Industry-Specific GoHighLevel Architecture Matters
            </h2>
            <p className={styles.philosophySubtitle}>
              Pre-made snapshots and generic templates fail because they force your team into rigid, unnatural workflows. We engineer systems that reflect your true operational reality.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {architecturePillars.map((pillar) => (
              <div key={pillar.number} className={styles.pillarCard}>
                <span className={styles.pillarNumber}>{pillar.number}</span>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Strategy CTA */}
      <ServiceCta
        eyebrow="READY TO SCALE YOUR TRADE?"
        heading="Build the Right GoHighLevel Architecture for Your Industry"
        subtitle="Tell us about your industry, team size, and current operational bottlenecks. We'll design a connected CRM and automation system tailored to your specific trade."
        primaryBtnText="Book an Industry Strategy Call"
        primaryBtnHref="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
        secondaryBtnText="Contact GHLVertex"
        secondaryBtnHref="/contact/"
      />
    </div>
  );
}
