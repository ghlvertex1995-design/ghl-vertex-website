export interface NavLinkItem {
  name: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavGroup {
  heading: string;
  shortDescription: string;
  links: NavLinkItem[];
}

export interface MegaMenuCta {
  eyebrow: string;
  heading: string;
  copy: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustLabels?: string[];
}

export const servicesMegaMenuData: {
  groups: NavGroup[];
  cta: MegaMenuCta;
} = {
  groups: [
    {
      heading: "GoHighLevel Core",
      shortDescription: "Set up and structure the foundation of your GoHighLevel system.",
      links: [
        {
          name: "GHL Setup Services",
          href: "/services/ghl-setup-services/",
          description: "Account setup, CRM, pipelines, calendars, forms and core configuration.",
        },
        {
          name: "SaaS CRM",
          href: "/solutions/saas-crm/",
          description: "CRM architecture for SaaS lead, customer and revenue lifecycle management.",
        },
        {
          name: "GoHighLevel White Label Support",
          href: "/services/gohighlevel-white-label-support/",
          description: "Backend implementation and support delivered for agencies under their brand.",
        },
      ],
    },
    {
      heading: "Automation & AI",
      shortDescription: "Automate lead management, conversations and business workflows.",
      links: [
        {
          name: "Workflow Automation Services",
          href: "/services/workflow-automation-services/",
          description: "Design and automate multi-step workflows across CRM and business systems.",
        },
        {
          name: "AI Automation Services",
          href: "/services/ai-automation-services/",
          description: "AI-powered automation for sales, support, operations and customer journeys.",
        },
        {
          name: "AI Agent Development Services",
          href: "/services/ai-agent-development-services/",
          description: "Custom AI agents for conversations, tools, workflows and business actions.",
        },
        {
          name: "AI Chatbot Development Services",
          href: "/services/ai-chatbot-development-services/",
          description: "Conversational AI for support, qualification, booking and customer engagement.",
        },
      ],
    },
    {
      heading: "AI Development & Systems",
      shortDescription: "Build custom AI capabilities and connect them to real business systems.",
      links: [
        {
          name: "AI Consulting Services",
          href: "/services/ai-consulting-services/",
          description: "AI strategy, readiness, roadmaps, use-case discovery and implementation planning.",
        },
        {
          name: "Custom AI Development",
          href: "/services/custom-ai-development/",
          description: "Custom AI applications, LLM systems, AI copilots and intelligent products.",
        },
        {
          name: "AI Integration Services",
          href: "/services/ai-integration-services/",
          description: "Connect AI with CRM, APIs, databases, workflows and existing software.",
        },
        {
          name: "RAG Development Services",
          href: "/services/rag-development-services/",
          description: "Knowledge-grounded AI using documents, databases, retrieval and enterprise knowledge.",
        },
      ],
    },
  ],
  cta: {
    eyebrow: "NOT SURE WHERE TO START?",
    heading: "Build the Right GoHighLevel System for Your Business",
    copy: "Tell us what you want to automate, fix or scale. We’ll help identify the right combination of GoHighLevel, automation, AI and integrations.",
    primaryCtaText: "Book a Free GHL Strategy Call",
    primaryCtaHref: "/#contact",
    secondaryCtaText: "Explore All Services →",
    secondaryCtaHref: "/#services",
    trustLabels: ["GoHighLevel", "CRM", "Automation", "AI", "Integrations"],
  },
};

export const resultsMenuData: {
  groups: NavGroup[];
  cta: MegaMenuCta;
} = {
  groups: [
    {
      heading: "Proof of Work",
      shortDescription: "Real systems and workflow architecture in action.",
      links: [
        {
          name: "Case Studies",
          href: "/#results",
          description: "See how CRM, automation and AI systems are used in real projects.",
          badge: "Real Architecture",
        },
      ],
    },
    {
      heading: "Learn from the Work",
      shortDescription: "Practical implementations and transformations.",
      links: [
        {
          name: "Implementation Examples",
          href: "/#results",
          description: "Explore practical GoHighLevel, automation and AI workflow examples.",
          badge: "Example Workflow",
        },
        {
          name: "Before & After",
          href: "/#before-after",
          description: "See how disconnected workflows are transformed into structured systems.",
          badge: "Transformation",
        },
      ],
    },
    {
      heading: "Compare",
      shortDescription: "Our approach versus alternative options.",
      links: [
        {
          name: "Why GHLVertex",
          href: "/#why-ghlvertex",
          description: "Understand our approach to GoHighLevel, AI and automation implementation.",
          badge: "Specialist",
        },
      ],
    },
  ],
  cta: {
    eyebrow: "SEE WHAT WE BUILD",
    heading: "Explore Real Systems, Workflows & Results",
    copy: "See how GoHighLevel, automation and AI can work together across real business processes.",
    primaryCtaText: "View Case Studies",
    primaryCtaHref: "/#results",
    trustLabels: ["Real Pipelines", "Zero Dropped Leads", "Clean Hand-offs"],
  },
};

export const companyMenuData: {
  groups: NavGroup[];
  cta: MegaMenuCta;
} = {
  groups: [
    {
      heading: "About GHLVertex",
      shortDescription: "Our mission, philosophy and specialized systems focus.",
      links: [
        {
          name: "About Us",
          href: "/#why-ghlvertex",
          description: "Learn about GHLVertex, our focus and how we approach GoHighLevel and AI systems.",
        },
      ],
    },
    {
      heading: "Work With Us",
      shortDescription: "Engage our technical team for your projects.",
      links: [
        {
          name: "Contact",
          href: "/#contact",
          description: "Talk to our team about your GoHighLevel, automation or AI requirements.",
        },
      ],
    },
    {
      heading: "Resources",
      shortDescription: "Answers to common implementation questions.",
      links: [
        {
          name: "FAQ",
          href: "/#faq",
          description: "Frequently asked questions about our GoHighLevel and AI implementation services.",
        },
      ],
    },
  ],
  cta: {
    eyebrow: "TALK TO GHLVERTEX",
    heading: "Have a GoHighLevel Project in Mind?",
    copy: "Tell us what you need to build, automate, integrate or improve.",
    primaryCtaText: "Book a GHL Strategy Call",
    primaryCtaHref: "/#contact",
    trustLabels: ["Direct Strategy", "Technical Execution", "Rapid Deployment"],
  },
};

