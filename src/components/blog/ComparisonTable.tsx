import React from "react";
import { ComparisonTableRow } from "@/types/blog";
import styles from "./ComparisonTable.module.css";

interface ComparisonTableProps {
  caption?: string;
  headers: [string, string, string, string];
  rows: ComparisonTableRow[];
}

export function ComparisonTable({ caption, headers, rows }: ComparisonTableProps) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className={styles.tableWrapper} role="region" aria-label={caption || "Comparison Table"}>
      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          {caption && <caption className={styles.caption}>{caption}</caption>}
          <thead>
            <tr>
              <th scope="col" className={styles.thPrimary}>{headers[0]}</th>
              <th scope="col" className={styles.thSecondary}>{headers[1]}</th>
              <th scope="col" className={styles.thHighlight}>{headers[2]}</th>
              <th scope="col" className={styles.thImpact}>{headers[3]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className={styles.tdPrimary}>
                  <strong>{row.criteria}</strong>
                </td>
                <td className={styles.tdSecondary}>{row.manualOrOld}</td>
                <td className={styles.tdHighlight}>
                  <div className={styles.badgeRow}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>{row.automatedOrModern}</span>
                  </div>
                </td>
                <td className={styles.tdImpact}>{row.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.mobileHint} aria-hidden="true">
        ← Scroll horizontally to view full comparison →
      </div>
    </div>
  );
}
