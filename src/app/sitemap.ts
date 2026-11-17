import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/blog";

// Revalidate sitemap periodically so newly released posts appear automatically
export const revalidate = 300;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ghlvertex.com";

  const staticRoutes = [
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
    "/contact/",
    "/industries/",
    "/industries/agencies/",
    "/industries/home-services/",
    "/industries/hvac/",
    "/industries/plumbing/",
    "/industries/roofing/",
    "/industries/dental/",
    "/industries/med-spas/",
    "/industries/real-estate/",
    "/industries/law-firms/",
    "/industries/professional-services/",
    "/industries/saas/",
    "/industries/multi-location-businesses/",
    "/blog/",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
    priority: route === "/" ? 1.0 : route.startsWith("/blog/") ? 0.85 : 0.9,
  }));

  const blogPosts = getAllPosts().filter((p) => !p.draft && !p.noindex);
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}${post.canonical}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
