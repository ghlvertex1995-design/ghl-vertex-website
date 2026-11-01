"use client";

import React from "react";
import Link from "next/link";
import { industryMenuData } from "./navData";
import styles from "./MegaMenu.module.css";

interface IndustryMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  activePath?: string;
}

export function IndustryMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  activePath = "",
}: IndustryMegaMenuProps) {
  const { heading, shortDescription, links, cta } = industryMenuData;

  return (
    <div
      id="industries-mega-menu"
      className={`${styles.megaMenuWrapper} ${styles.industryWrapper} ${isOpen ? styles.isOpen : ""}`}
      role="region"
      aria-label="Industry We Serve Mega Menu"
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`${styles.megaMenuCard} ${styles.industryGrid}`}>
        {/* Column 1: The 5 Specialized Industries */}
        <div className={styles.columnCard}>
          <div className={styles.columnHeader}>
            <div className={styles.headerIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className={styles.headerTextGroup}>
              <h3 className={styles.columnTitle}>{heading}</h3>
              <p className={styles.columnDesc}>{shortDescription}</p>
            </div>
          </div>

          <ul className={styles.linkList} role="list">
            {links.map((link) => {
              const isCurrent = activePath === link.href;
              return (
                <li key={link.name}>
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

        {/* Column 2: Industry CTA Panel */}
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

            {cta.secondaryCtaText && cta.secondaryCtaHref && (
              <Link
                href={cta.secondaryCtaHref}
                className={styles.secondaryLink}
                onClick={onClose}
              >
                <span>{cta.secondaryCtaText}</span>
              </Link>
            )}

            {cta.trustLabels && cta.trustLabels.length > 0 && (
              <div className={styles.trustPillsRow} aria-label="Industry Focus Areas">
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

