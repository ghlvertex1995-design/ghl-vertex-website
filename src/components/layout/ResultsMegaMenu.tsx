"use client";

import React from "react";
import Link from "next/link";
import { resultsMenuData } from "./navData";
import styles from "./MegaMenu.module.css";

interface ResultsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  activePath?: string;
}

export function ResultsMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  activePath = "",
}: ResultsMegaMenuProps) {
  const { groups, cta } = resultsMenuData;

  const groupIcons = [
    // 0: Proof of Work
    <svg key="proof" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>,
    // 1: Learn from the Work
    <svg key="learn" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>,
    // 2: Compare
    <svg key="compare" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>,
  ];

  return (
    <div
      id="results-mega-menu"
      className={`${styles.megaMenuWrapper} ${styles.compactWrapper} ${isOpen ? styles.isOpen : ""}`}
      role="region"
      aria-label="Results & Proof Mega Menu"
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`${styles.megaMenuCard} ${styles.resultsGrid}`}>
        {/* 3 Content Columns */}
        {groups.map((group, groupIdx) => (
          <div key={group.heading} className={styles.columnCard}>
            <div className={styles.columnHeader}>
              <div className={styles.headerIcon}>
                {groupIcons[groupIdx] || groupIcons[0]}
              </div>
              <div className={styles.headerTextGroup}>
                <h3 className={styles.columnTitle}>{group.heading}</h3>
                <p className={styles.columnDesc}>{group.shortDescription}</p>
              </div>
            </div>

            <ul className={styles.linkList} role="list">
              {group.links.map((link) => {
                const isCurrent = activePath === link.href;
                return (
                  <li key={`${group.heading}-${link.name}`}>
                    <Link
                      href={link.href}
                      className={`${styles.itemCardLink} ${isCurrent ? styles.active : ""}`}
                      onClick={onClose}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      <div className={styles.itemTitleRow}>
                        <span className={styles.itemName}>{link.name}</span>
                        {link.badge && <span className={styles.itemBadge}>{link.badge}</span>}
                        <span className={styles.itemArrow} aria-hidden="true">→</span>
                      </div>
                      <p className={styles.itemDescription}>{link.description}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Column 4: Results CTA Panel */}
        <div className={styles.featuredPanel}>
          <div className={styles.panelTop}>
            <span className={styles.panelEyebrow}>{cta.eyebrow}</span>
            <h3 className={styles.panelHeading}>{cta.heading}</h3>
            <p className={styles.panelCopy}>{cta.copy}</p>
          </div>

          <div className={styles.panelBottom}>
            <Link
              href={cta.primaryCtaHref}
              className={styles.primaryCtaBtn}
              onClick={onClose}
            >
              <span>{cta.primaryCtaText}</span>
              <span aria-hidden="true">→</span>
            </Link>

            {cta.trustLabels && cta.trustLabels.length > 0 && (
              <div className={styles.trustPillsRow} aria-label="System Guarantees">
                {cta.trustLabels.map((label) => (
                  <span key={label} className={styles.trustPill}>
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

