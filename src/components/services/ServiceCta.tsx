import Link from "next/link";
import styles from "./ServiceCta.module.css";

interface ServiceCtaProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export function ServiceCta({
  eyebrow = "Next-Generation Operations",
  heading,
  subtitle,
  primaryBtnText,
  primaryBtnHref = "/#contact",
  secondaryBtnText = "Review Technical Architecture",
  secondaryBtnHref = "#service-capabilities",
}: ServiceCtaProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.card}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="cta-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.btnRow}>
            <Link
              href={primaryBtnHref}
              className={styles.primaryBtn}
              target={primaryBtnHref.startsWith("http") ? "_blank" : undefined}
              rel={primaryBtnHref.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span>{primaryBtnText}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
            {secondaryBtnText && (
              <Link href={secondaryBtnHref} className={styles.secondaryBtn}>
                <span>{secondaryBtnText}</span>
              </Link>
            )}
          </div>
          <p className={styles.reassurance}>
            No sales pressure • Direct consultation with an automation engineer • Clear feasibility roadmap
          </p>
        </div>
      </div>
    </section>
  );
}
