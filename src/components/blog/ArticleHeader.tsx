import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { getCategoryBySlug } from "@/data/blog/categories";
import styles from "./ArticleHeader.module.css";

interface ArticleHeaderProps {
  post: BlogPost;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const category = getCategoryBySlug(post.category);
  const formattedPublishDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedUpdateDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <header className={styles.header}>
      {/* Accessible Breadcrumbs */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
        <ol className={styles.breadcrumbList}>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator} aria-hidden="true">/</li>
          <li>
            <Link href="/blog/" className={styles.breadcrumbLink}>
              Blog
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator} aria-hidden="true">/</li>
          <li>
            <span className={styles.breadcrumbCurrentCategory}>
              {category?.name || post.category}
            </span>
          </li>
        </ol>
      </nav>

      {/* Category Pill */}
      <div className={styles.categoryRow}>
        <span
          className={styles.categoryPill}
          style={{ borderColor: category?.color, color: category?.color }}
        >
          {category?.name || post.category}
        </span>
        <span className={styles.readingTimeBadge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {post.readingTime}
        </span>
      </div>

      {/* Main H1 Title */}
      <h1 className={styles.title}>{post.title}</h1>

      {/* Introductory Summary */}
      <p className={styles.summary}>{post.excerpt}</p>

      {/* Author & Timestamp Metadata Row */}
      <div className={styles.authorRow}>
        <div className={styles.authorAvatar}>
          <Image
            src={post.author.avatar || "/images/logo-icon.png"}
            alt={post.author.name}
            width={40}
            height={40}
            className={styles.avatarImg}
          />
        </div>
        <div className={styles.authorDetails}>
          <div className={styles.authorName}>{post.author.name}</div>
          <div className={styles.dateMeta}>
            <span>Published on {formattedPublishDate}</span>
            {formattedUpdateDate && (
              <>
                <span className={styles.dot} aria-hidden="true">•</span>
                <span>Updated on {formattedUpdateDate}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hero Featured Image */}
      <div className={styles.featuredImageWrapper}>
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          width={1200}
          height={630}
          className={styles.featuredImage}
          priority
        />
      </div>
    </header>
  );
}
