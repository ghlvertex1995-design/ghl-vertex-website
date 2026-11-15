import React from "react";
import Link from "next/link";
import styles from "./IndustryHero.module.css";

interface IndustryHeroProps {
  eyebrow: string;
  h1: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  targetAudience: string;
  outcomeText: string;
  focusPills: string[];
  diagramTitle: string;
  diagramSteps: { label: string; sublabel: string }[];
}

export function IndustryHero({
  eyebrow,
  h1,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  targetAudience,
  outcomeText,
  focusPills,
  diagramTitle,
  diagramSteps,
}: IndustryHeroProps) {
  return (
    <section className={styles.section} aria-labelledby="industry-hero-heading">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h1 id="industry-hero-heading" className={styles.heading}>
              {h1}
            </h1>
            <p className={styles.description}>{description}</p>

            {focusPills.length > 0 && (
              <div className={styles.pillsRow} aria-label="Core industry capabilities">
                {focusPills.map((pill) => (
                  <span key={pill} className={styles.pill}>
                    {pill}
                  </span>
                ))}
              </div>
            )}

            <div className={styles.btnRow}>
              <Link
                href={primaryCtaHref}
                className={styles.primaryBtn}
                target={primaryCtaHref.startsWith("http") ? "_blank" : undefined}
                rel={primaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>{primaryCtaText}</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href={secondaryCtaHref} className={styles.secondaryBtn}>
                <span>{secondaryCtaText}</span>
              </Link>
            </div>

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span>Built for:</span>
                <strong>{targetAudience}</strong>
              </div>
              <div className={styles.metaItem}>
                <span>Target outcome:</span>
                <strong>{outcomeText}</strong>
              </div>
            </div>
          </div>

          <div className={styles.visualCard} aria-label="System Architecture Flow">
            <div className={styles.cardHeader}>
              <span className={styles.cardHeaderTitle}>{diagramTitle}</span>
              <span className={styles.liveTag}>
                <span className={styles.liveDot} aria-hidden="true" />
                <span>Connected System</span>
              </span>
            </div>

            <div className={styles.stepsTimeline}>
              {diagramSteps.map((step, idx) => (
                <div key={idx} className={styles.stepRow}>
                  <div className={styles.stepIcon} aria-hidden="true">
                    {idx + 1}
                  </div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepLabel}>{step.label}</span>
                    <span className={styles.stepSublabel}>{step.sublabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
