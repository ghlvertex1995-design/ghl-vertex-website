import { BlogPost, BlogCategorySlug, BlogCategory } from "@/types/blog";
import { BLOG_CATEGORIES, BLOG_CATEGORY_LIST, getCategoryBySlug } from "./categories";
import { postGohighlevelGrowthSystem } from "./posts/post-1-gohighlevel-growth-system";
import { postWorkflowAutomationGuide } from "./posts/post-2-workflow-automation-guide";
import { postHowToBuildAiAgents } from "./posts/post-3-how-to-build-ai-agents";
import { postLlmIntegrationGuide } from "./posts/post-4-llm-integration-guide";
import { postRagDevelopmentGuide } from "./posts/post-5-rag-development-guide";

export { BLOG_CATEGORIES, BLOG_CATEGORY_LIST, getCategoryBySlug };
export type { BlogCategory, BlogCategorySlug };

// All published posts in default order (newest first)
export const ALL_POSTS: BlogPost[] = [
  postGohighlevelGrowthSystem,
  postWorkflowAutomationGuide,
  postHowToBuildAiAgents,
  postLlmIntegrationGuide,
  postRagDevelopmentGuide,
].filter((post) => !post.draft);

/**
 * Returns all public published posts sorted by publishedAt descending.
 */
export function getAllPosts(): BlogPost[] {
  return [...ALL_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Fetch a single blog post by its URL slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return ALL_POSTS.find((post) => post.slug === cleanSlug);
}

/**
 * Fetch the featured article (flagged with featured: true).
 * Falls back to the latest post if no post is explicitly marked.
 */
export function getFeaturedPost(): BlogPost {
  const featured = ALL_POSTS.find((post) => post.featured);
  return featured || ALL_POSTS[0];
}

/**
 * Fetch foundational / cornerstone guides.
 */
export function getCornerstonePosts(): BlogPost[] {
  return ALL_POSTS.filter((post) => post.cornerstone);
}

/**
 * Fetch posts filtered by category slug.
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return ALL_POSTS.filter((post) => post.category === category);
}

/**
 * Get related articles for a post based on explicit relatedSlugs or category matching.
 */
export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return ALL_POSTS.slice(0, count);

  // 1. If explicit relatedSlugs are provided, try those first
  if (currentPost.relatedSlugs && currentPost.relatedSlugs.length > 0) {
    const explicitMatches = currentPost.relatedSlugs
      .map((slug) => getPostBySlug(slug))
      .filter((post): post is BlogPost => Boolean(post && post.slug !== currentSlug));

    if (explicitMatches.length >= count) {
      return explicitMatches.slice(0, count);
    }

    // Fill remaining with same category
    const remainingCount = count - explicitMatches.length;
    const sameCategory = ALL_POSTS.filter(
      (p) =>
        p.slug !== currentSlug &&
        p.category === currentPost.category &&
        !explicitMatches.some((m) => m.slug === p.slug)
    ).slice(0, remainingCount);

    return [...explicitMatches, ...sameCategory];
  }

  // 2. Otherwise match by category first, then fallback to others
  const sameCategory = ALL_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === currentPost.category
  );
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count);
  }

  const otherPosts = ALL_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category !== currentPost.category
  );
  return [...sameCategory, ...otherPosts].slice(0, count);
}

/**
 * In-memory search matching title, excerpt, category, and section headings.
 */
export function searchPosts(query: string, categoryFilter?: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  let posts = getAllPosts();

  if (categoryFilter && categoryFilter !== "all") {
    posts = posts.filter((post) => post.category === categoryFilter);
  }

  if (!q) return posts;

  return posts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(q);
    const excerptMatch = post.excerpt.toLowerCase().includes(q);
    const categoryMatch = post.category.toLowerCase().includes(q);
    const keywordsMatch = post.keywords?.some((k) => k.toLowerCase().includes(q));
    const sectionMatch = post.sections.some(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.directAnswer?.question.toLowerCase().includes(q) ||
        s.directAnswer?.answer.toLowerCase().includes(q)
    );

    return titleMatch || excerptMatch || categoryMatch || keywordsMatch || sectionMatch;
  });
}
