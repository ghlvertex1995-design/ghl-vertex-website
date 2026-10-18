import Link from "next/link";
import styles from "./ServiceHero.module.css";

interface FlowStep {
  label: string;
  sublabel?: string;
}

interface ServiceHeroProps {
  eyebrow: string;
  h1: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref?: string;
  secondaryCtaText: string;
  secondaryCtaHref?: string;
  targetAudience: string;
  outcomeText: string;
  diagramTitle?: string;
  flowSteps?: FlowStep[];
  highlights?: string[];
}

export function ServiceHero({
  eyebrow,
  h1,
  description,
  primaryCtaText,
  primaryCtaHref = "/#contact",
  secondaryCtaText,
  secondaryCtaHref = "#service-capabilities",
  targetAudience,
  outcomeText,
  diagramTitle = "Execution Flow & Architecture",
  flowSteps = [],
  highlights = [],
}: ServiceHeroProps) {
  return (
    <section className={styles.heroSection} aria-labelledby="service-h1">
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Context, H1, CTAs */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>

            <h1 id="service-h1" className={styles.heading}>
              {h1}
            </h1>

            <p className={styles.description}>{description}</p>

            {/* Quick Context Bar: Audience & Outcome */}
            <div className={styles.contextPills}>
              <div className={styles.contextPill}>
                <span className={styles.contextLabel}>Built for:</span>
                <span className={styles.contextValue}>{targetAudience}</span>
              </div>
              <div className={styles.contextPill}>
                <span className={styles.contextLabel}>Target Outcome:</span>
                <span className={styles.contextValue}>{outcomeText}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctaRow}>
              <Link href={primaryCtaHref} className={styles.primaryBtn}>
                <span>{primaryCtaText}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href={secondaryCtaHref} className={styles.secondaryBtn}>
                <span>{secondaryCtaText}</span>
              </Link>
            </div>

            {highlights.length > 0 && (
              <ul className={styles.highlightsList}>
                {highlights.map((item, idx) => (
                  <li key={idx} className={styles.highlightItem}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.checkIcon}
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: Architectural Diagram / Interactive Node Flow */}
          <div className={styles.diagramCol}>
            <div className={styles.diagramCard}>
              <div className={styles.diagramHeader}>
                <div className={styles.windowControls} aria-hidden="true">
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <span className={styles.diagramHeading}>{diagramTitle}</span>
                <span className={styles.liveBadge}>Deterministic &amp; Monitored</span>
              </div>

              <div className={styles.flowContainer}>
                {flowSteps.map((step, idx) => (
                  <div key={idx} className={styles.flowRow}>
                    <div className={styles.stepNumber} aria-hidden="true">
                      0{idx + 1}
                    </div>
                    <div className={styles.stepBody}>
                      <span className={styles.stepTitle}>{step.label}</span>
                      {step.sublabel && (
                        <span className={styles.stepSublabel}>{step.sublabel}</span>
                      )}
                    </div>
                    {idx < flowSteps.length - 1 && (
                      <div className={styles.flowConnector} aria-hidden="true">
                        <span className={styles.connectorLine} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.diagramFooter}>
                <span className={styles.footerNote}>
                  Verified Enterprise Logic • Error Trapping • Human Checkpoints
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
