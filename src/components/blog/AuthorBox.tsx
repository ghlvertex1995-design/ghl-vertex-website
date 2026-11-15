import React from "react";
import Image from "next/image";
import { BlogAuthor } from "@/types/blog";
import styles from "./AuthorBox.module.css";

interface AuthorBoxProps {
  author: BlogAuthor;
}

export function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <aside className={styles.authorBox} aria-label="About the Author">
      <div className={styles.avatarCol}>
        <Image
          src={author.avatar || "/images/logo-icon.png"}
          alt={author.name}
          width={64}
          height={64}
          className={styles.avatarImg}
        />
      </div>
      <div className={styles.contentCol}>
        <div className={styles.label}>WRITTEN BY</div>
        <h3 className={styles.authorName}>{author.name}</h3>
        {author.role && <div className={styles.authorRole}>{author.role}</div>}
        <p className={styles.authorBio}>
          {author.bio ||
            "GHLVertex helps businesses and agencies build GoHighLevel CRM, workflow automation, AI agents, integrations, and connected business systems."}
        </p>
      </div>
    </aside>
  );
}
