import { BlogCategory, BlogCategorySlug } from "@/types/blog";

export const BLOG_CATEGORIES: Record<BlogCategorySlug, BlogCategory> = {
  gohighlevel: {
    slug: "gohighlevel",
    name: "GoHighLevel",
    description: "Deep-dive architecture guides, subaccount setups, snapshot management, and SaaS mode strategies.",
    color: "#0148A3",
  },
  "crm-automation": {
    slug: "crm-automation",
    name: "CRM & Automation",
    description: "Custom pipeline designs, lead qualification rules, multi-stage triggers, and omnichannel nurture workflows.",
    color: "#0284c7",
  },
  "ai-automation": {
    slug: "ai-automation",
    name: "AI Automation",
    description: "Streamlining operational bottlenecks, automated triage, missed-call intelligence, and smart routing.",
    color: "#0d9488",
  },
  "ai-agents": {
    slug: "ai-agents",
    name: "AI Agents",
    description: "Autonomous agent systems, voice calling agents, booking bots, and human-in-the-loop workflows.",
    color: "#6366f1",
  },
  "ai-integrations": {
    slug: "ai-integrations",
    name: "AI Integrations",
    description: "Connecting LLMs (OpenAI, Claude, Gemini) with databases, webhooks, APIs, and business systems.",
    color: "#8b5cf6",
  },
  "rag-knowledge-systems": {
    slug: "rag-knowledge-systems",
    name: "RAG & Knowledge Systems",
    description: "Grounding AI with real business data, vector search, document indexing, and internal assistants.",
    color: "#d97706",
  },
};

export const BLOG_CATEGORY_LIST: BlogCategory[] = Object.values(BLOG_CATEGORIES);

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES[slug as BlogCategorySlug];
}
