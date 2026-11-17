import React from "react";
import { DisconnectedVsConnectedConfig } from "@/types/blog";
import styles from "./DisconnectedVsConnectedCard.module.css";

interface DisconnectedVsConnectedCardProps {
  config: DisconnectedVsConnectedConfig;
}

export function DisconnectedVsConnectedCard({ config }: DisconnectedVsConnectedCardProps) {
  return (
    <div className={styles.wrapper} role="region" aria-label={config.title}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>ARCHITECTURE COMPARISON</div>
        <h3 className={styles.title}>{config.title}</h3>
        {config.description && <p className={styles.description}>{config.description}</p>}
      </div>

      <div className={styles.comparisonGrid}>
        {/* Left: Disconnected Stack */}
        <div className={styles.disconnectedCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon} aria-hidden="true">
              ⚠️
            </span>
            <h4 className={`${styles.cardTitle} ${styles.disconnectedTitle}`}>
              {config.disconnectedTitle}
            </h4>
          </div>
          <ul className={styles.itemList}>
            {config.disconnectedItems.map((item, idx) => (
              <li key={idx} className={styles.disconnectedItem}>
                <div className={styles.itemLabel}>
                  <span aria-hidden="true">✕</span> {item.tool}
                </div>
                <p className={styles.itemDesc}>{item.issue}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Connected HighLevel System */}
        <div className={styles.connectedCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon} aria-hidden="true">
              ✓
            </span>
            <h4 className={`${styles.cardTitle} ${styles.connectedTitle}`}>
              {config.connectedTitle}
            </h4>
          </div>
          <ul className={styles.itemList}>
            {config.connectedItems.map((item, idx) => (
              <li key={idx} className={styles.connectedItem}>
                <div className={styles.itemLabel}>
                  <span aria-hidden="true">✓</span> {item.capability}
                </div>
                <p className={styles.itemDesc}>{item.benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {config.outcome && <div className={styles.outcomeBanner}>{config.outcome}</div>}
    </div>
  );
}
