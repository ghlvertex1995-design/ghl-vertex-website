import React from "react";
import styles from "./TrustStripSection.module.css";

interface ToolBrand {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const TOOLS_LIST: ToolBrand[] = [
  {
    name: "GoHighLevel",
    color: "#0148A3",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0148A3" />
        <path d="M5 16.5h3.5v-4H5v4zm5.25 0h3.5v-7h-3.5v7zm5.25 0H19V6.5h-3.5v10z" fill="#FFFFFF" />
        <path d="M5.5 10.5l4-4 3 3 5-5" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFF1F3" />
        <path d="M5.5 12h3m6 0h4m-8.5-4.5v9m7-9v9" stroke="#EA4B71" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="8.5" cy="7.5" r="2.5" fill="#EA4B71" />
        <circle cx="8.5" cy="16.5" r="2.5" fill="#EA4B71" />
        <circle cx="15.5" cy="12" r="2.5" fill="#EA4B71" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    color: "#10A37F",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#E6F7F2" />
        <path
          d="M17.5 10.8a4 4 0 0 0-.6-3.8 4.1 4.1 0 0 0-4.2-1.8 4.2 4.2 0 0 0-3.2-1.5 4.3 4.3 0 0 0-4.1 3 4.2 4.2 0 0 0-2.4 2.2 4.1 4.1 0 0 0 .5 4.5 4 4 0 0 0 .6 3.8 4.1 4.1 0 0 0 4.2 1.8 4.2 4.2 0 0 0 3.2 1.5 4.3 4.3 0 0 0 4.1-3 4.2 4.2 0 0 0 2.4-2.2 4.1 4.1 0 0 0-.5-4.5z"
          stroke="#10A37F"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2" fill="#10A37F" />
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D97757",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FDF3E9" />
        <path
          d="M12 4v16m-8-8h16m-2.8-5.6L6.8 17.6m10.4 0L6.8 6.4"
          stroke="#D97757"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Gemini",
    color: "#1A73E8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#EEF4FF" />
        <path
          d="M12 3c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"
          fill="url(#geminiOfficialGradient)"
        />
        <defs>
          <linearGradient id="geminiOfficialGradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A73E8" />
            <stop offset="0.5" stopColor="#9333EA" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Twilio",
    color: "#F22F46",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FFF0F2" />
        <circle cx="12" cy="12" r="7.5" fill="#F22F46" />
        <circle cx="10" cy="10" r="1.4" fill="#FFFFFF" />
        <circle cx="14" cy="10" r="1.4" fill="#FFFFFF" />
        <circle cx="10" cy="14" r="1.4" fill="#FFFFFF" />
        <circle cx="14" cy="14" r="1.4" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Vapi",
    color: "#7C3AED",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F5F3FF" />
        <path
          d="M6 8l6 10 6-10"
          stroke="#7C3AED"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="6.5" r="1.75" fill="#06B6D4" />
      </svg>
    ),
  },
  {
    name: "Retell AI",
    color: "#2563EB",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#EFF6FF" />
        <path
          d="M6 13a6 6 0 0 1 12 0v1a3 3 0 0 1-3 3h-1m-4 0a3 3 0 0 1-3-3v-1"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M12 9v5m-3-3v1m6-1v1" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Slack",
    color: "#4A154B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F8FAFC" />
        <path d="M7.5 10a1.5 1.5 0 1 1 0-3h1.5v1.5a1.5 1.5 0 0 1-1.5 1.5z" fill="#E01E5A" />
        <path d="M10 10a1.5 1.5 0 0 1 3 0v3.5a1.5 1.5 0 1 1-3 0V10z" fill="#36C5F0" />
        <path d="M14 10a1.5 1.5 0 1 1 3 0v1.5h-1.5A1.5 1.5 0 0 1 14 10z" fill="#2EB67D" />
        <path d="M10 14a1.5 1.5 0 0 1 0 3H6.5a1.5 1.5 0 1 1 0-3H10z" fill="#ECB22E" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    color: "#635BFF",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#F4F3FF" />
        <path
          d="M14.5 10.3c0-.9-.7-1.3-1.8-1.3-1.6 0-3.3.5-4.5 1.2v-2.7c1.3-.5 3-.8 4.6-.8 3.5 0 5.6 1.7 5.6 4.7 0 4.2-5.7 3.7-5.7 5.6 0 .9.8 1.3 2.1 1.3 1.8 0 3.7-.7 4.9-1.5v2.7c-1.4.7-3.3 1-5 1-3.6 0-5.9-1.7-5.9-4.8 0-4.3 5.7-3.9 5.7-5.6z"
          fill="#635BFF"
        />
      </svg>
    ),
  },
];

export function TrustStripSection() {
  // Duplicate list for infinite continuous marquee loop
  const marqueeItems = [...TOOLS_LIST, ...TOOLS_LIST];

  return (
    <section className={styles.trustSection} aria-labelledby="trust-heading">
      <div className={styles.container}>
        <div className={styles.headlineGroup}>
          <span className={styles.eyebrow}>Seamless Integration Ecosystem</span>
          <h2 id="trust-heading" className={styles.mainTitle}>
            Built With the Tools Modern Businesses Already Use
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Logo Ribbon */}
      <div className={styles.marqueeWrapper} aria-label="Supported Integrations and Technology Partners">
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((tool, index) => (
            <div key={`${tool.name}-${index}`} className={styles.logoCard}>
              <span className={styles.iconWrapper} aria-hidden="true">
                {tool.icon}
              </span>
              <span className={styles.brandName} style={{ color: tool.color }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
