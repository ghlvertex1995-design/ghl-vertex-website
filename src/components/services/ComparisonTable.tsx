import styles from "./ComparisonTable.module.css";

export interface ComparisonRow {
  dimension: string;
  traditional: string;
  ghlVertex: string;
}

interface ComparisonTableProps {
  eyebrow?: string;
  heading: string;
  subtitle: string;
  leftColumnHeader?: string;
  rightColumnHeader?: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({
  eyebrow = "The Strategic Difference",
  heading,
  subtitle,
  leftColumnHeader = "Conventional / Manual Approach",
  rightColumnHeader = "GHLVertex Engineered Solution",
  rows,
}: ComparisonTableProps) {
  return (
    <section className={styles.section} aria-labelledby="comparison-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="comparison-heading" className={styles.heading}>
            {heading}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableResponsive}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col" className={styles.thDimension}>
                    Evaluation Factor
                  </th>
                  <th scope="col" className={styles.thTraditional}>
                    {leftColumnHeader}
                  </th>
                  <th scope="col" className={styles.thGhl}>
                    {rightColumnHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.tdDimension}>
                      <strong>{row.dimension}</strong>
                    </td>
                    <td className={styles.tdTraditional}>
                      <span className={styles.statusBad} aria-hidden="true">
                        ✕
                      </span>
                      <span>{row.traditional}</span>
                    </td>
                    <td className={styles.tdGhl}>
                      <span className={styles.statusGood} aria-hidden="true">
                        ✓
                      </span>
                      <span>{row.ghlVertex}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
