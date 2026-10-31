"use client";

import React from "react";
import Link from "next/link";
import { companyMenuData } from "./navData";
import styles from "./MegaMenu.module.css";

interface CompanyMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  activePath?: string;
}

export function CompanyMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  activePath = "",
}: CompanyMegaMenuProps) {
  const { groups, cta } = companyMenuData;

  const groupIcons = [
    // 0: About GHLVertex
    <svg key="about" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M9 8h1" />
      <path d="M9 12h1" />
      <path d="M9 16h1" />
      <path d="M14 8h1" />
      <path d="M14 12h1" />
      <path d="M14 16h1" />
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    </svg>,
    // 1: Work With Us
    <svg key="work" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>,
    // 2: Resources
    <svg key="resources" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>,
  ];

  return (
    <div
      id="company-mega-menu"
      className={`${styles.megaMenuWrapper} ${styles.compactWrapper} ${isOpen ? styles.isOpen : ""}`}
      role="region"
      aria-label="Company Mega Menu"
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`${styles.megaMenuCard} ${styles.companyGrid}`}>
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

        {/* Column 4: Company CTA Panel */}
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
              <div className={styles.trustPillsRow} aria-label="Company Standards">
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

