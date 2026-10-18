"use client";

import { useState } from "react";
import styles from "./FaqAccordion.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export function FaqAccordion({
  eyebrow = "Frequently Asked Questions",
  heading = "Common Questions from Technical & Business Leaders",
  subtitle = "Clear, straightforward answers about capabilities, implementation timelines, human oversight, and data boundaries.",
  faqs,
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className={styles.section} aria-labelledby="faq-accordion-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="faq-accordion-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className={`${styles.faqCard} ${isOpen ? styles.isOpen : ""}`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={styles.questionBtn}
                  onClick={() => toggleIndex(idx)}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.iconCircle} aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={styles.answerPanel}
                >
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
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
