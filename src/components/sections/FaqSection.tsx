"use client";

import { useState } from "react";
import { homepageFaqs } from "@/data/homepageFaqs";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className={styles.faqSection} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 id="faq-heading" className={styles.heading}>
            Frequently Asked <span className={styles.headingHighlight}>Questions</span>
          </h2>
          <p className={styles.supporting}>
            Clear answers about our GoHighLevel services, automation architecture, and implementation process.
          </p>
        </div>

        <div className={styles.accordionList}>
          {homepageFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.faqTrigger}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.faqIcon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className={styles.faqAnswer}
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
