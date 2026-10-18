import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = [
    "/services/ghl-setup-services/",
    "/services/workflow-automation-services/",
    "/solutions/saas-crm/",
    "/services/gohighlevel-white-label-support/",
    "/services/ai-consulting-services/",
    "/services/ai-automation-services/",
    "/services/ai-agent-development-services/",
    "/services/ai-chatbot-development-services/",
    "/services/custom-ai-development/",
    "/services/ai-integration-services/",
    "/services/rag-development-services/",
  ];

  const coreRoutes = [
    "",
  ];

  const allServiceEntries = serviceRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const coreEntries = coreRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1.0,
  }));

  return [...coreEntries, ...allServiceEntries];
}
