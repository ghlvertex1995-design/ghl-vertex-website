import React from "react";
import { BlogPost } from "@/types/blog";
import { ArticleCard } from "./ArticleCard";
import styles from "./RelatedArticles.module.css";

interface RelatedArticlesProps {
  posts: BlogPost[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Related Guides">
      <div className={styles.header}>
        <span className={styles.eyebrow}>KEEP READING</span>
        <h2 className={styles.heading}>Related Guides</h2>
      </div>

      <div className={styles.grid}>
        {posts.slice(0, 3).map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
