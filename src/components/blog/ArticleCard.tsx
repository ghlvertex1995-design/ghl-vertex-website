import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { getCategoryBySlug } from "@/data/blog/categories";
import styles from "./ArticleCard.module.css";

interface ArticleCardProps {
  post: BlogPost;
  priority?: boolean;
}

export function ArticleCard({ post, priority = false }: ArticleCardProps) {
  const category = getCategoryBySlug(post.category);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Link href={post.canonical} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            width={600}
            height={338}
            className={styles.image}
            priority={priority}
          />
        </Link>
        <span className={styles.categoryPill} style={{ borderColor: category?.color, color: category?.color }}>
          {category?.name || post.category}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.date}>{formattedDate}</span>
          <span className={styles.dot} aria-hidden="true">•</span>
          <span className={styles.readingTime}>{post.readingTime}</span>
        </div>

        <h3 className={styles.title}>
          <Link href={post.canonical} className={styles.titleLink}>
            {post.title}
          </Link>
        </h3>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.footer}>
          <Link href={post.canonical} className={styles.readMoreLink} aria-label={`Read ${post.title}`}>
            <span>Read Article</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
