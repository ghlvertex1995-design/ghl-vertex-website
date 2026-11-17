export type BlogCategorySlug =
  | "gohighlevel"
  | "crm-automation"
  | "ai-automation"
  | "ai-agents"
  | "ai-integrations"
  | "rag-knowledge-systems";

export interface BlogCategory {
  slug: BlogCategorySlug;
  name: string;
  description: string;
  color?: string;
}

export interface BlogAuthor {
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
  url?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface DirectAnswerBlock {
  question: string;
  answer: string;
}

export interface ProcessWorkflowStep {
  label: string;
  description: string;
  badge?: string;
}

export interface ComparisonTableRow {
  criteria: string;
  manualOrOld: string;
  automatedOrModern: string;
  impact: string;
}

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export interface InlineCtaConfig {
  headline: string;
  copy: string;
  ctaText: string;
  ctaHref: string;
}

export interface DisconnectedVsConnectedConfig {
  title: string;
  description?: string;
  disconnectedTitle: string;
  disconnectedItems: {
    tool: string;
    issue: string;
  }[];
  connectedTitle: string;
  connectedItems: {
    capability: string;
    benefit: string;
  }[];
  outcome: string;
}

export interface QaChecklistItem {
  label: string;
  detail: string;
  standard: string;
  critical?: boolean;
}

export interface QaChecklistConfig {
  title: string;
  description?: string;
  items: QaChecklistItem[];
}

export interface EvaluationMatrixRow {
  area: string;
  included: string;
  askProvider: string;
}

export interface EvaluationMatrixConfig {
  title: string;
  description?: string;
  rows: EvaluationMatrixRow[];
}

export interface RedFlagItem {
  title: string;
  description: string;
  risk: string;
}

export interface RedFlagsConfig {
  title: string;
  description?: string;
  flags: RedFlagItem[];
}

export interface CoreCapabilityItem {
  name: string;
  role: string;
  outcome: string;
  badge?: string;
}

export interface CoreCapabilityMapConfig {
  title: string;
  description?: string;
  capabilities: CoreCapabilityItem[];
}

export interface BlogSubsection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogSection {
  id: string;
  title: string;
  directAnswer?: DirectAnswerBlock;
  paragraphs: string[];
  subsections?: BlogSubsection[];
  bullets?: string[];
  numberedList?: string[];
  workflow?: {
    title: string;
    description?: string;
    steps: ProcessWorkflowStep[];
  };
  table?: {
    caption?: string;
    headers: [string, string, string, string];
    rows: ComparisonTableRow[];
  };
  callout?: {
    type?: "tip" | "warning" | "note" | "insight";
    title: string;
    text: string;
  };
  inlineCta?: InlineCtaConfig;
  disconnectedVsConnected?: DisconnectedVsConnectedConfig;
  qaChecklist?: QaChecklistConfig;
  evaluationMatrix?: EvaluationMatrixConfig;
  redFlags?: RedFlagsConfig;
  capabilityMap?: CoreCapabilityMapConfig;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategorySlug;
  author: BlogAuthor;
  publishedAt: string; // ISO date string e.g. "2026-11-15T09:00:00.000Z"
  updatedAt?: string;  // Only if genuinely updated
  readingTime: string; // e.g. "8 min read"
  featuredImage: string;
  featuredImageAlt: string;
  canonical: string;
  ogImage?: string;
  featured?: boolean;
  cornerstone?: boolean;
  draft?: boolean;
  noindex?: boolean;
  keywords?: string[];
  intro: {
    problemStatement: string;
    whatItCovers: string;
    whoItIsFor: string;
  };
  keyTakeaways: string[];
  tableOfContents: TableOfContentsItem[];
  sections: BlogSection[];
  faq?: ArticleFaqItem[];
  relatedSlugs?: string[];
  relevantService?: {
    name: string;
    href: string;
    description: string;
  };
  relevantIndustry?: {
    name: string;
    href: string;
    description: string;
  };
}
