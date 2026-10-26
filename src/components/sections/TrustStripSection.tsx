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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#E6F7F2" />
        <circle cx="12" cy="12" r="7" stroke="#10A37F" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.5" fill="#10A37F" />
      </svg>
    ),
  },
  {
    name: "Twilio",
    color: "#F22F46",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#FFF0F2" />
        <circle cx="8" cy="8" r="2" fill="#F22F46" />
        <circle cx="16" cy="8" r="2" fill="#F22F46" />
        <circle cx="8" cy="16" r="2" fill="#F22F46" />
        <circle cx="16" cy="16" r="2" fill="#F22F46" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    color: "#635BFF",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#F4F3FF" />
        <path
          d="M14.5 10.3c0-.9-.7-1.3-1.8-1.3-1.6 0-3.3.5-4.5 1.2v-2.7c1.3-.5 3-.8 4.6-.8 3.5 0 5.6 1.7 5.6 4.7 0 4.2-5.7 3.7-5.7 5.6 0 .9.8 1.3 2.1 1.3 1.8 0 3.7-.7 4.9-1.5v2.7c-1.4.7-3.3 1-5 1-3.6 0-5.9-1.7-5.9-4.8 0-4.3 5.7-3.9 5.7-5.6z"
          fill="#635BFF"
        />
      </svg>
    ),
  },
  {
    name: "Google Calendar",
    color: "#1A73E8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#E8F0FE" />
        <rect x="5" y="6" width="14" height="13" rx="2" stroke="#1A73E8" strokeWidth="2" />
        <line x1="5" y1="10" x2="19" y2="10" stroke="#1A73E8" strokeWidth="2" />
        <line x1="8" y1="4" x2="8" y2="7" stroke="#1A73E8" strokeWidth="2" />
        <line x1="16" y1="4" x2="16" y2="7" stroke="#1A73E8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Webhooks",
    color: "#0284C7",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#F0F9FF" />
        <path d="M18 8a3 3 0 1 0-2.83-2H10a4 4 0 0 0-4 4v4.17a3 3 0 1 0 2 0V10a2 2 0 0 1 2-2h5.17A3 3 0 0 0 18 8z" fill="#0284C7" />
      </svg>
    ),
  },
  {
    name: "APIs",
    color: "#475569",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#F1F5F9" />
        <path d="M8 9l-3 3 3 3m8-6l3 3-3 3m-4-8l-2 10" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function TrustStripSection() {
  const marqueeItems = [...TOOLS_LIST, ...TOOLS_LIST];

  return (
    <section className={styles.trustSection} aria-labelledby="trust-heading">
      <div className={styles.container}>
        <div className={styles.headlineGroup}>
          <span className={styles.eyebrow}>CONNECTED STACK</span>
          <h2 id="trust-heading" className={styles.mainTitle}>
            Built Around GoHighLevel. Connected to Your Business Stack.
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Logo Ribbon */}
      <div className={styles.marqueeWrapper} aria-label="Supported Integrations and Technology Ecosystem">
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
