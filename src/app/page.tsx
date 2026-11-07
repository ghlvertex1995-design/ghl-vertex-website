import type { Metadata } from "next";
import {
  HeroSection,
  TrustStripSection,
  DefinitionSection,
  ProblemSection,
  ServicesSection,
  WorkforceSection,
  JourneySection,
  AudienceSplitSection,
  IntegrationSection,
  ProcessSection,
  UseCasesSection,
  IndustrySection,
  ResultsSection,
  WhyUsSection,
  RelatedServicesSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getWebPageSchema,
  getFaqSchema,
} from "@/components/seo/schema";
import { homepageFaqs } from "@/data/homepageFaqs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
  description:
    "GHLVertex is a GoHighLevel agency helping businesses and agencies build CRM systems, workflows, AI agents, integrations and scalable automation.",
  alternates: {
    canonical: "https://ghlvertex.com/",
  },
  verification: {
    google: "6Dl2reFjkMEtDRVb-6L1hHucldAknE0Weqc91yikD1U",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
    description:
      "GHLVertex is a GoHighLevel agency helping businesses and agencies build CRM systems, workflows, AI agents, integrations and scalable automation.",
    url: "https://ghlvertex.com/",
    siteName: "GHLVertex",
    type: "website",
    images: [
      {
        url: "https://ghlvertex.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
    description:
      "GHLVertex is a GoHighLevel agency helping businesses and agencies build CRM systems, workflows, AI agents, integrations and scalable automation.",
    images: ["https://ghlvertex.com/og-image.jpg"],
  },
};

export default function Home() {
  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getWebPageSchema({
      title: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
      description:
        "GHLVertex is a GoHighLevel agency helping businesses and agencies build CRM systems, workflows, AI agents, integrations and scalable automation.",
      url: "https://ghlvertex.com/",
    }),
    getFaqSchema(
      homepageFaqs.map((faq) => ({
        question: faq.q,
        answer: faq.a,
      }))
    ),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <div className={styles.homepage}>
        {/* 01. Hero Section */}
        <HeroSection />

        {/* 02. Technology / Integration Strip */}
        <TrustStripSection />

        {/* 03. Direct Definition / What Does a GoHighLevel Agency Do? */}
        <DefinitionSection />

        {/* 04. Problem Section */}
        <ProblemSection />

        {/* 05. Main GoHighLevel Services */}
        <ServicesSection />

        {/* 06. AI Agents within GoHighLevel */}
        <WorkforceSection />

        {/* 07. Customer Journey Automation */}
        <JourneySection />

        {/* 08. Business vs Agency */}
        <AudienceSplitSection />

        {/* 09. Integrations */}
        <IntegrationSection />

        {/* 10. Implementation Process */}
        <ProcessSection />

        {/* 11. Use Cases */}
        <UseCasesSection />

        {/* 12. Industries */}
        <IndustrySection />

        {/* 13. Results / Case Study / Example Workflow */}
        <ResultsSection />

        {/* 14. Why GHLVertex */}
        <WhyUsSection />

        {/* 15. Related Services */}
        <RelatedServicesSection />

        {/* 16. FAQ */}
        <FaqSection />

        {/* 17. Final CTA */}
        <FinalCtaSection />
      </div>
    </>
  );
}
