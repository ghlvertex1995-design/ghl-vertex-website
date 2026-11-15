import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { getCategoryBySlug } from "@/data/blog/categories";
import styles from "./CornerstoneGuides.module.css";

interface CornerstoneGuidesProps {
  posts: BlogPost[];
}

export function CornerstoneGuides({ posts }: CornerstoneGuidesProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Foundational Guides">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.eyebrowBadge}>FOUNDATIONAL ARCHITECTURE</div>
          <h2 className={styles.heading}>Start With These Guides</h2>
          <p className={styles.description}>
            New to GoHighLevel or business automation? Start with these foundational guides.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post, index) => {
            const category = getCategoryBySlug(post.category);
            return (
              <div key={post.slug} className={styles.guideCard}>
                <div className={styles.numberBadge}>0{index + 1}</div>
                <div className={styles.cardContent}>
                  <span className={styles.categoryTag} style={{ color: category?.color }}>
                    {category?.name}
                  </span>
                  <h3 className={styles.cardTitle}>
                    <Link href={post.canonical} className={styles.cardLink}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <span>{post.readingTime}</span>
                    <span className={styles.dot} aria-hidden="true">•</span>
                    <Link href={post.canonical} className={styles.readPill}>
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
