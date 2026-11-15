"use client";

import React, { useState } from "react";
import { ArticleFaqItem } from "@/types/blog";
import styles from "./ArticleFaq.module.css";

interface ArticleFaqProps {
  faqs: ArticleFaqItem[];
}

export function ArticleFaq({ faqs }: ArticleFaqProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={styles.faqSection} aria-labelledby="article-faq-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>EXPERT CLARIFICATIONS</span>
        <h2 id="article-faq-heading" className={styles.heading}>
          Frequently Asked Questions
        </h2>
      </div>

      <div className={styles.accordionList} role="region" aria-label="FAQ Accordion">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          const questionId = `article-faq-q-${index}`;
          const answerId = `article-faq-a-${index}`;

          return (
            <div key={index} className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}>
              <h3>
                <button
                  type="button"
                  id={questionId}
                  className={styles.trigger}
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.iconCircle} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>

              {isOpen && (
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={styles.content}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
