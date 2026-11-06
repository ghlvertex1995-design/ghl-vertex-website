import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ghlvertex.com";

  const routes = [
    "/",
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

  return routes.map((route) => ({
    url: route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
    priority: route === "/" ? 1.0 : 0.9,
  }));
}
