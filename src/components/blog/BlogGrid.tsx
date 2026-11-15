import React from "react";
import { BlogPost } from "@/types/blog";
import { ArticleCard } from "./ArticleCard";
import styles from "./BlogGrid.module.css";

interface BlogGridProps {
  posts: BlogPost[];
  heading?: string;
  subheading?: string;
  isFiltered?: boolean;
  searchQuery?: string;
  selectedCategory?: string;
  onResetFilters?: () => void;
}

export function BlogGrid({
  posts,
  heading = "Latest Articles",
  subheading = "New guides, walkthroughs, and practical insights from GHLVertex.",
  isFiltered = false,
  searchQuery = "",
  selectedCategory = "all",
  onResetFilters,
}: BlogGridProps) {
  return (
    <section className={styles.gridSection} aria-label={heading}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>{heading}</h2>
            {subheading && <p className={styles.subheading}>{subheading}</p>}
          </div>
          {isFiltered && (
            <div className={styles.filterMeta}>
              <span>
                Showing {posts.length} {posts.length === 1 ? "article" : "articles"}
                {selectedCategory !== "all" ? ` in ${selectedCategory}` : ""}
              </span>
              {onResetFilters && (
                <button type="button" onClick={onResetFilters} className={styles.resetBtn}>
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>

        {posts.length > 0 ? (
          <div className={styles.grid}>
            {posts.map((post, index) => (
              <ArticleCard key={post.slug} post={post} priority={index < 3} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon} aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>
              {searchQuery
                ? "No articles found for this search."
                : "No published articles are available in this topic yet."}
            </h3>
            <p className={styles.emptyDesc}>
              {searchQuery
                ? `We couldn't find any guides matching "${searchQuery}". Try searching for terms like "GoHighLevel", "workflow", "AI agent", or "CRM".`
                : "New technical guides and architectures are added regularly. Try selecting another topic or view all guides."}
            </p>
            {onResetFilters && (
              <button type="button" onClick={onResetFilters} className={styles.emptyResetBtn}>
                View All Guides
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
