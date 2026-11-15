export interface IndustryProblem {
  title: string;
  description: string;
  consequence: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  deliverables: string[];
}

export interface PipelineStage {
  step: string;
  name: string;
  detail: string;
}

export interface AutomationWorkflow {
  title: string;
  trigger: string;
  steps: string[];
  outcome: string;
}

export interface AIUseCase {
  title: string;
  role: string;
  capabilities: string[];
}

export interface JourneyStage {
  phase: string;
  channel: string;
  action: string;
}

export interface CapabilityItem {
  feature: string;
  practicalUse: string;
}

export interface IntegrationItem {
  category: string;
  tools: string;
  useCase: string;
}

export interface AudienceSegment {
  name: string;
  idealFor: string;
}

export interface ExampleSystem {
  title: string;
  problem: string;
  architecture: string;
  workflowSteps: string[];
  operationalResult: string;
}

export interface RelatedServiceItem {
  title: string;
  href: string;
  description: string;
  badge: string;
}

export interface WhyPillar {
  title: string;
  description: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  hero: {
    eyebrow: string;
    h1: string;
    description: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    targetAudience: string;
    outcomeText: string;
    focusPills: string[];
    diagramTitle: string;
    diagramSteps: { label: string; sublabel: string }[];
  };
  directAnswer: {
    question: string;
    answer: string;
    keyTakeaways: string[];
  };
  problems: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: IndustryProblem[];
  };
  solutions: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: IndustrySolution[];
  };
  pipeline: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    stages: PipelineStage[];
  };
  workflows: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: AutomationWorkflow[];
  };
  aiUseCases: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    safeguardsNote?: string;
    items: AIUseCase[];
  };
  journey: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    stages: JourneyStage[];
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: CapabilityItem[];
  };
  integrations: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: IntegrationItem[];
  };
  audience: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    segments: AudienceSegment[];
  };
  exampleSystem: ExampleSystem;
  relatedServices: RelatedServiceItem[];
  whyGhlVertex: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    pillars: WhyPillar[];
  };
  faqs: IndustryFaq[];
  finalCta: {
    heading: string;
    subtitle: string;
    primaryBtnText: string;
    primaryBtnHref: string;
    secondaryBtnText: string;
    secondaryBtnHref: string;
  };
}
