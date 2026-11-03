import React from "react";
import { siteConfig } from "@/config/site";
import styles from "./SocialLinks.module.css";

interface SocialLinksProps {
  className?: string;
  compact?: boolean;
}

export function SocialLinks({ className = "", compact = false }: SocialLinksProps) {
  const socialItems = [
    {
      name: "Facebook",
      href: siteConfig.links.facebook,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon} aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: siteConfig.links.instagram,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon} aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: siteConfig.links.twitter,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon} aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: siteConfig.links.youtube,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon} aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: siteConfig.links.tiktok,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon} aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.32V8.75a8.28 8.28 0 0 0 4.84 1.56V6.85a4.86 4.86 0 0 1-.93-.16z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: siteConfig.links.pinterest,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon} aria-hidden="true">
          <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.48.03-3.55.14-.98.94-5.96.94-5.96s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.81.41 1.47 1.2 1.47 1.44 0 2.55-1.52 2.55-3.71 0-1.94-1.4-3.3-3.39-3.3-2.47 0-3.92 1.85-3.92 3.77 0 .75.29 1.54.65 1.98.07.09.08.16.06.25-.07.28-.22.88-.25 1-.04.16-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.47 0-2.82 2.05-5.41 5.91-5.41 3.1 0 5.51 2.21 5.51 5.17 0 3.08-1.94 5.56-4.64 5.56-.91 0-1.76-.47-2.05-1.02l-.56 2.13c-.2.78-.75 1.76-1.12 2.36A12 12 0 1 0 12 0z" />
        </svg>
      ),
    },
  ];

  return (
    <ul className={`${styles.socialList} ${compact ? styles.compact : ""} ${className}`} role="list" aria-label="Social media links">
      {socialItems.map((item) => (
        <li key={item.name} className={styles.socialItem}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={`Follow GHLVertex on ${item.name}`}
            title={`Follow GHLVertex on ${item.name}`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

