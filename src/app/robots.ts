import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isPreview =
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

  if (isPreview) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  // Private routes that should never be indexed or crawled
  const privatePaths = ["/api/", "/_next/", "/admin/"];

  return {
    rules: [
      // All search engines and crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      // OpenAI Crawlers
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "OAI-AdsBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Anthropic (Claude)
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Claude-User",
        allow: "/",
        disallow: privatePaths,
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Perplexity-User",
        allow: "/",
        disallow: privatePaths,
      },
      // Google Search + Google AI
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "GoogleOther",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: privatePaths,
      },
      // Microsoft Bing + Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: privatePaths,
      },
      // DuckDuckGo AI
      {
        userAgent: "DuckAssistBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Apple AI
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: privatePaths,
      },
      // Meta AI
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: privatePaths,
      },
      // Common Crawl
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Other AI Crawlers
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: "https://ghlvertex.com/sitemap.xml",
    host: "https://ghlvertex.com",
  };
}
