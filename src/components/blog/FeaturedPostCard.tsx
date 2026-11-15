import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { getCategoryBySlug } from "@/data/blog/categories";
import styles from "./FeaturedPostCard.module.css";

interface FeaturedPostCardProps {
  post: BlogPost;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  const category = getCategoryBySlug(post.category);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className={styles.featuredSection} aria-label="Featured Article">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>EDITOR&apos;S PICK</span>
          <h2 className={styles.heading}>Featured Guide</h2>
        </div>

        <article className={styles.card}>
          <div className={styles.imageCol}>
            <Link href={post.canonical} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                width={700}
                height={390}
                className={styles.image}
                priority
              />
            </Link>
          </div>

          <div className={styles.contentCol}>
            <div className={styles.metaTop}>
              <span className={styles.categoryBadge} style={{ borderColor: category?.color, color: category?.color }}>
                {category?.name || post.category}
              </span>
              <span className={styles.readingTime}>{post.readingTime}</span>
            </div>

            <h3 className={styles.title}>
              <Link href={post.canonical} className={styles.titleLink}>
                {post.title}
              </Link>
            </h3>

            <p className={styles.excerpt}>{post.excerpt}</p>

            <div className={styles.footerRow}>
              <div className={styles.authorMeta}>
                <div className={styles.authorAvatar}>
                  <Image
                    src={post.author.avatar || "/images/logo-icon.png"}
                    alt={post.author.name}
                    width={28}
                    height={28}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{post.author.name}</span>
                  <span className={styles.publishDate}>{formattedDate}</span>
                </div>
              </div>

              <Link href={post.canonical} className={styles.ctaButton} aria-label={`Read ${post.title}`}>
                <span>Read Article</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
