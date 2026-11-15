import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getAllPosts, getPostBySlug, getRelatedPosts, getCategoryBySlug } from "@/data/blog";
import { ArticleBody } from "@/components/blog/ArticleBody";
import {
  getBlogPostSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/components/seo/schema";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | GHLVertex",
    };
  }

  const imageUrl = post.featuredImage.startsWith("http")
    ? post.featuredImage
    : `${siteConfig.url}${post.featuredImage}`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: post.canonical,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}${post.canonical}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
    robots: post.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) {
    notFound();
  }

  const category = getCategoryBySlug(post.category);
  const relatedPosts = getRelatedPosts(post.slug, 3);

  // 1. BlogPosting Schema
  const blogPostSchema = getBlogPostSchema({
    title: post.title,
    description: post.metaDescription,
    url: post.canonical,
    image: post.featuredImage,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    authorName: post.author.name,
    keywords: post.keywords,
  });

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog/" },
    { name: category?.name || post.category, url: "/blog/" },
    { name: post.title, url: post.canonical },
  ]);

  // 3. FAQPage Schema (only if FAQ items exist)
  const faqSchema =
    post.faq && post.faq.length > 0 ? getFaqSchema(post.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ArticleBody post={post} relatedPosts={relatedPosts} />
    </>
  );
}
