import Link from "next/link";
import styles from "./RelatedServices.module.css";

export interface RelatedServiceLink {
  title: string;
  href: string;
  description: string;
  badge: string;
}

interface RelatedServicesProps {
  eyebrow?: string;
  heading?: string;
  services: RelatedServiceLink[];
}

export function RelatedServices({
  eyebrow = "Connected Capabilities",
  heading = "Explore Related Engineering & Automation Services",
  services,
}: RelatedServicesProps) {
  return (
    <section className={styles.section} aria-labelledby="related-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="related-heading" className={styles.heading}>
            {heading}
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((item, idx) => (
            <Link key={idx} href={item.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.badge}>{item.badge}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
