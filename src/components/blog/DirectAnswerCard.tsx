import React from "react";
import { DirectAnswerBlock } from "@/types/blog";
import styles from "./DirectAnswerCard.module.css";

interface DirectAnswerCardProps {
  block: DirectAnswerBlock;
}

export function DirectAnswerCard({ block }: DirectAnswerCardProps) {
  return (
    <aside className={styles.card} aria-label="Direct Answer Definition">
      <div className={styles.eyebrowRow}>
        <span className={styles.badge}>DIRECT ANSWER</span>
        <span className={styles.subtext}>Quick Definition</span>
      </div>
      <p className={styles.answer}>{block.answer}</p>
    </aside>
  );
}
