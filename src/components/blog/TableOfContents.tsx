"use client";

import React, { useState, useEffect } from "react";
import { TableOfContentsItem } from "@/types/blog";
import styles from "./TableOfContents.module.css";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -60% 0%", threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav className={styles.tocWrapper} aria-label="Table of Contents">
      {/* Mobile Accordion Toggle */}
      <button
        type="button"
        className={styles.mobileToggle}
        onClick={() => setIsOpenMobile(!isOpenMobile)}
        aria-expanded={isOpenMobile}
        aria-controls="mobile-toc-list"
      >
        <span className={styles.mobileToggleText}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          Table of Contents
        </span>
        <span className={`${styles.chevron} ${isOpenMobile ? styles.open : ""}`} aria-hidden="true">
          ▼
        </span>
      </button>

      <div
        id="mobile-toc-list"
        className={`${styles.tocCard} ${isOpenMobile ? styles.mobileOpen : ""}`}
      >
        <div className={styles.desktopHeading}>Table of Contents</div>
        <ul className={styles.list}>
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`${styles.item} ${item.level === 3 ? styles.subItem : ""} ${isActive ? styles.active : ""}`}
              >
                <a
                  href={`#${item.id}`}
                  className={styles.link}
                  onClick={() => setIsOpenMobile(false)}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
