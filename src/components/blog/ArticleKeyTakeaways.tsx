import React from "react";
import styles from "./ArticleKeyTakeaways.module.css";

interface ArticleKeyTakeawaysProps {
  takeaways: string[];
}

export function ArticleKeyTakeaways({ takeaways }: ArticleKeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className={styles.container} role="region" aria-label="Key Takeaways">
      <div className={styles.header}>
        <div className={styles.iconWrapper} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className={styles.title}>Key Takeaways</h2>
      </div>

      <ul className={styles.list}>
        {takeaways.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.bulletCheck} aria-hidden="true">✓</span>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
