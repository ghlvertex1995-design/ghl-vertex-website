"use client";

import React from "react";
import Link from "next/link";
import { servicesMegaMenuData } from "./navData";
import styles from "./MegaMenu.module.css";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  activePath?: string;
}

export function ServicesMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  activePath = "",
}: ServicesMegaMenuProps) {
  const { groups, cta } = servicesMegaMenuData;

  // Icons for the 3 groups
  const groupIcons = [
    // 0: GoHighLevel Core
    <svg key="ghl" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>,
    // 1: Automation & AI
    <svg key="automation" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>,
    // 2: AI Development & Systems
    <svg key="aidev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <circle cx="12" cy="12" r="2" />
    </svg>,
  ];

  return (
    <div
      id="services-mega-menu"
      className={`${styles.megaMenuWrapper} ${isOpen ? styles.isOpen : ""}`}
      role="region"
      aria-label="Services Mega Menu"
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`${styles.megaMenuCard} ${styles.servicesGrid}`}>
        {/* 3 Service Columns */}
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
                const isCurrent = activePath === link.href || activePath === link.href.replace(/\/$/, "");
                return (
                  <li key={link.href}>
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

        {/* Column 4: Featured CTA Panel */}
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
              target={cta.primaryCtaHref.startsWith("http") ? "_blank" : undefined}
              rel={cta.primaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}
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
              <div className={styles.trustPillsRow} aria-label="Key Capabilities">
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

