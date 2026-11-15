import React from "react";
import styles from "./BlogListingHero.module.css";

interface BlogListingHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (categorySlug: string) => void;
  categories: { slug: string; name: string }[];
  totalArticlesCount: number;
}

export function BlogListingHero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  totalArticlesCount,
}: BlogListingHeroProps) {
  return (
    <section className={styles.heroSection} aria-labelledby="blog-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>GHLVERTEX INSIGHTS</span>
          </div>

          <h1 id="blog-heading" className={styles.heading}>
            GoHighLevel, AI Automation &amp; Business Systems Insights
          </h1>

          <p className={styles.description}>
            Practical guides, strategies, and technical insights on GoHighLevel, CRM automation, AI agents, integrations, RAG, and scalable business systems.
          </p>

          {/* Search Bar */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchBar}>
              <svg
                className={styles.searchIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search articles, topics and guides..."
                className={styles.searchInput}
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className={styles.clearBtn}
                  aria-label="Clear search input"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Topic Navigation */}
          <div className={styles.topicsSection} aria-label="Topic Filter">
            <div className={styles.topicsHeader}>
              <span className={styles.topicsLabel}>Explore Topics:</span>
            </div>
            <div className={styles.categoryPills}>
              <button
                type="button"
                onClick={() => onCategoryChange("all")}
                className={`${styles.categoryPill} ${selectedCategory === "all" ? styles.active : ""}`}
                aria-pressed={selectedCategory === "all"}
              >
                <span>All Guides</span>
                <span className={styles.countBadge}>{totalArticlesCount}</span>
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => onCategoryChange(cat.slug)}
                  className={`${styles.categoryPill} ${selectedCategory === cat.slug ? styles.active : ""}`}
                  aria-pressed={selectedCategory === cat.slug}
                >
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
