import React from "react";
import { IndustryData } from "@/types/industry";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/components/seo/schema";
import { Breadcrumbs } from "@/components/services/Breadcrumbs";
import { DirectAnswer } from "@/components/services/DirectAnswer";
import { ProblemGrid } from "@/components/services/ProblemGrid";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { RelatedServices } from "@/components/services/RelatedServices";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { ServiceCta } from "@/components/services/ServiceCta";
import { IndustryHero } from "./IndustryHero";
import { IndustryPipeline } from "./IndustryPipeline";
import { IndustryWorkflows } from "./IndustryWorkflows";
import { IndustryAIUseCases } from "./IndustryAIUseCases";
import { IndustryJourney } from "./IndustryJourney";
import { IndustryCapabilities } from "./IndustryCapabilities";
import { IndustryIntegrations } from "./IndustryIntegrations";
import { IndustryAudience } from "./IndustryAudience";
import { IndustryExample } from "./IndustryExample";
import { IndustryWhyGhlVertex } from "./IndustryWhyGhlVertex";

interface IndustryPageTemplateProps {
  data: IndustryData;
}

export function IndustryPageTemplate({ data }: IndustryPageTemplateProps) {
  const breadcrumbs = [
    { label: "Industries", href: "/industries/" },
    { label: data.name, href: data.canonical },
  ];

  const pageSchema = getWebPageSchema({
    title: data.metaTitle,
    description: data.metaDescription,
    url: data.canonical,
  });

  const serviceSchema = getServiceSchema({
    name: `${data.name} GoHighLevel Implementation & Automation`,
    description: data.metaDescription,
    url: data.canonical,
    serviceType: `GoHighLevel CRM & Automation for ${data.name}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const faqSchema = getFaqSchema(data.faqs);

  return (
    <>
      {/* 00. Structured Data */}
      <JsonLd data={pageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* 00. Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbs} />

      {/* 01. Hero Section */}
      <IndustryHero
        eyebrow={data.hero.eyebrow}
        h1={data.hero.h1}
        description={data.hero.description}
        primaryCtaText={data.hero.primaryCtaText}
        primaryCtaHref={data.hero.primaryCtaHref}
        secondaryCtaText={data.hero.secondaryCtaText}
        secondaryCtaHref={data.hero.secondaryCtaHref}
        targetAudience={data.hero.targetAudience}
        outcomeText={data.hero.outcomeText}
        focusPills={data.hero.focusPills}
        diagramTitle={data.hero.diagramTitle}
        diagramSteps={data.hero.diagramSteps}
      />

      {/* 02. Direct Answer Block (GEO / AEO) */}
      <DirectAnswer
        question={data.directAnswer.question}
        answer={data.directAnswer.answer}
        keyTakeaways={data.directAnswer.keyTakeaways}
      />

      {/* 03. Industry Operational Problems */}
      <ProblemGrid
        eyebrow={data.problems.eyebrow}
        heading={data.problems.heading}
        subtitle={data.problems.subtitle}
        problems={data.problems.items.map((item) => ({
          title: item.title,
          description: item.description,
          consequence: item.consequence,
        }))}
      />

      {/* 04. How GHLVertex Helps */}
      <ServiceFeatures
        eyebrow={data.solutions.eyebrow}
        heading={data.solutions.heading}
        subtitle={data.solutions.subtitle}
        features={data.solutions.items}
      />

      {/* 05. Industry-Specific CRM Pipeline */}
      <IndustryPipeline
        eyebrow={data.pipeline.eyebrow}
        heading={data.pipeline.heading}
        subtitle={data.pipeline.subtitle}
        stages={data.pipeline.stages}
      />

      {/* 06. Visual Automation Workflows */}
      <IndustryWorkflows
        eyebrow={data.workflows.eyebrow}
        heading={data.workflows.heading}
        subtitle={data.workflows.subtitle}
        items={data.workflows.items}
      />

      {/* 07. AI Use Cases & Voice Agents with Safeguards */}
      <IndustryAIUseCases
        eyebrow={data.aiUseCases.eyebrow}
        heading={data.aiUseCases.heading}
        subtitle={data.aiUseCases.subtitle}
        safeguardsNote={data.aiUseCases.safeguardsNote}
        items={data.aiUseCases.items}
      />

      {/* 08. Complete Customer Journey */}
      <IndustryJourney
        eyebrow={data.journey.eyebrow}
        heading={data.journey.heading}
        subtitle={data.journey.subtitle}
        stages={data.journey.stages}
      />

      {/* 09. GoHighLevel Capabilities Used */}
      <IndustryCapabilities
        eyebrow={data.capabilities.eyebrow}
        heading={data.capabilities.heading}
        subtitle={data.capabilities.subtitle}
        items={data.capabilities.items}
      />

      {/* 10. Connected Tech Stack & Integrations */}
      <IndustryIntegrations
        eyebrow={data.integrations.eyebrow}
        heading={data.integrations.heading}
        subtitle={data.integrations.subtitle}
        items={data.integrations.items}
      />

      {/* 11. Who This Is For */}
      <IndustryAudience
        eyebrow={data.audience.eyebrow}
        heading={data.audience.heading}
        subtitle={data.audience.subtitle}
        segments={data.audience.segments}
      />

      {/* 12. Example Workflow / System Architecture */}
      <IndustryExample example={data.exampleSystem} />

      {/* 13. Related Services */}
      <RelatedServices services={data.relatedServices} />

      {/* 14. Why GHLVertex */}
      <IndustryWhyGhlVertex
        eyebrow={data.whyGhlVertex.eyebrow}
        heading={data.whyGhlVertex.heading}
        subtitle={data.whyGhlVertex.subtitle}
        pillars={data.whyGhlVertex.pillars}
      />

      {/* 15. FAQ Section */}
      <FaqAccordion
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        heading={`Common Questions About GoHighLevel for ${data.name}`}
        subtitle={`Everything you need to know about implementing GoHighLevel, workflow automation and AI for ${data.name.toLowerCase()}.`}
        faqs={data.faqs}
      />

      {/* 16. Final CTA Section */}
      <ServiceCta
        eyebrow="TAILORED INDUSTRY SYSTEMS"
        heading={data.finalCta.heading}
        subtitle={data.finalCta.subtitle}
        primaryBtnText={data.finalCta.primaryBtnText}
        primaryBtnHref={data.finalCta.primaryBtnHref}
        secondaryBtnText={data.finalCta.secondaryBtnText}
        secondaryBtnHref={data.finalCta.secondaryBtnHref}
      />
    </>
  );
}
