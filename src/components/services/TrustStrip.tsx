import styles from "./TrustStrip.module.css";

interface TrustStripProps {
  label?: string;
  technologies: string[];
}

export function TrustStrip({
  label = "Core Technologies & Compatible Platforms",
  technologies,
}: TrustStripProps) {
  return (
    <div className={styles.strip} aria-label={label}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.label}>{label}</span>
          <div className={styles.badges}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
