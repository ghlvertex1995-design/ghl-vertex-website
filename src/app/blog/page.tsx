import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getAllPosts, getFeaturedPost, getCornerstonePosts, BLOG_CATEGORY_LIST } from "@/data/blog";
import { BlogListingClient } from "@/components/blog/BlogListingClient";
import { getBlogCollectionSchema, getBreadcrumbSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "GoHighLevel, AI Automation & CRM Insights | GHLVertex",
  description:
    "Explore practical GHLVertex guides on GoHighLevel, CRM automation, AI agents, AI integrations, RAG, workflows, and connected business systems.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "GoHighLevel, AI Automation & CRM Insights | GHLVertex",
    description:
      "Explore practical GHLVertex guides on GoHighLevel, CRM automation, AI agents, AI integrations, RAG, workflows, and connected business systems.",
    url: `${siteConfig.url}/blog/`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel, AI Automation & CRM Insights | GHLVertex",
    description:
      "Explore practical GHLVertex guides on GoHighLevel, CRM automation, AI agents, AI integrations, RAG, workflows, and connected business systems.",
  },
};

export default function BlogListingPage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const cornerstonePosts = getCornerstonePosts();

  const blogCollectionSchema = getBlogCollectionSchema({
    posts: allPosts.map((p) => ({
      title: p.title,
      url: p.canonical,
      publishedAt: p.publishedAt,
    })),
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogListingClient
        initialPosts={allPosts}
        featuredPost={featuredPost}
        cornerstonePosts={cornerstonePosts}
        categories={BLOG_CATEGORY_LIST}
      />
    </>
  );
}
