"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const ecosystemPillars = [
  {
    id: "crm",
    label: "CRM & Pipelines",
    tagline: "Structured Opportunity Tracking",
    description: "Organizes leads into stages, tracks deal values, and maintains pristine customer records.",
    detail: "Custom Fields • Smart Tags • Pipelines",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    id: "comms",
    label: "Conversations & Calendar",
    tagline: "Instant 2-Way Engagement",
    description: "Connects SMS, email, and live calls directly to real-time team calendar booking.",
    detail: "Sub-Minute Speed-to-Lead • Round-Robin",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "automation",
    label: "AI Agents & Workflows",
    tagline: "Automated Journey Logic",
    description: "Autonomous qualification, missed-call rescue, and smart handoff to your live team.",
    detail: "Voice AI • Nurture Workflows • CRM Sync",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export function HeroSection() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.heroGridBackground} aria-hidden="true" />

      <div className={styles.heroContainer}>
        {/* ==================================================================
            LEFT COLUMN: VALUE PROPOSITION & CONVERSION CONTENT
           ================================================================== */}
        <div className={styles.contentCol}>
          {/* Eyebrow Badge */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>GoHighLevel CRM, Automation &amp; AI</span>
          </div>

          {/* H1 Main Heading */}
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.headingLineTop}>Build, Automate &amp; Scale</span>
            <span className={styles.headingLineBottom}>
              Your Business with{" "}
              <span className={styles.headingGradient}>GoHighLevel</span>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className={styles.description}>
            GHLVertex helps agencies and growing businesses turn GoHighLevel into a connected
            CRM, automation and AI system. From account setup and pipelines to workflows, AI agents,
            integrations and ongoing support, we build the infrastructure behind your customer journey.
          </p>

          {/* Primary & Secondary Call To Actions */}
          <div className={styles.ctaGroup}>
            <Link href="#contact" className={styles.primaryCta}>
              <span>Book a Free GHL Strategy Call</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>

            <Link href="#services" className={styles.secondaryCta}>
              <span>Explore GoHighLevel Services</span>
            </Link>
          </div>

          {/* Microcopy / Feature Pills */}
          <div className={styles.microcopyStrip}>
            <span className={styles.microPill}>CRM</span>
            <span className={styles.microDot}>•</span>
            <span className={styles.microPill}>Automation</span>
            <span className={styles.microDot}>•</span>
            <span className={styles.microPill}>AI Agents</span>
            <span className={styles.microDot}>•</span>
            <span className={styles.microPill}>Integrations</span>
            <span className={styles.microDot}>•</span>
            <span className={styles.microPill}>White-Label Support</span>
          </div>
        </div>

        {/* ==================================================================
            RIGHT COLUMN: STREAMLINED & ELEGANT GOHIGHLEVEL ECOSYSTEM CARD
           ================================================================== */}
        <div className={styles.visualCol}>
          <div
            className={styles.systemBoard}
            aria-label="GoHighLevel CRM automation system connecting leads, workflows, AI and appointments"
          >
            {/* Window Header */}
            <div className={styles.windowHeader}>
              <div className={styles.windowControls} aria-hidden="true">
                <span className={`${styles.controlDot} ${styles.dotRed}`} />
                <span className={`${styles.controlDot} ${styles.dotYellow}`} />
                <span className={`${styles.controlDot} ${styles.dotGreen}`} />
                <span className={styles.windowTitle}>ghlvertex.com/ecosystem</span>
              </div>
              <div className={styles.systemStatusPill}>
                <span className={styles.liveIndicator} aria-hidden="true" />
                <span>Engine Active</span>
              </div>
            </div>

            {/* Clean 3-Stage Visual Pipeline Flow */}
            <div className={styles.flowPipeline}>
              <div className={styles.flowNode}>
                <span className={styles.flowNodeLabel}>01. Intake</span>
                <span className={styles.flowNodeValue}>Lead Sources</span>
                <span className={styles.flowNodeHint}>Forms • Ads • Calls</span>
              </div>

              <div className={styles.flowConnector} aria-hidden="true">
                <span className={styles.flowLine} />
                <span className={styles.flowArrow}>→</span>
              </div>

              <div className={`${styles.flowNode} ${styles.flowNodePrimary}`}>
                <span className={styles.flowNodeLabel}>02. GoHighLevel</span>
                <span className={styles.flowNodeValue}>Central Engine</span>
                <span className={styles.flowNodeHint}>CRM • Workflows • AI</span>
              </div>

              <div className={styles.flowConnector} aria-hidden="true">
                <span className={styles.flowLine} />
                <span className={styles.flowArrow}>→</span>
              </div>

              <div className={styles.flowNode}>
                <span className={styles.flowNodeLabel}>03. Outcome</span>
                <span className={styles.flowNodeValue}>Booked Sale</span>
                <span className={styles.flowNodeHint}>Calendar • Retained</span>
              </div>
            </div>

            {/* Core Capabilities - 3 Elegant Selectable Rows */}
            <div className={styles.pillarsList}>
              {ecosystemPillars.map((pillar, idx) => {
                const isSelected = selectedPillar === idx;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setSelectedPillar(idx)}
                    className={`${styles.pillarCard} ${isSelected ? styles.pillarCardSelected : ""}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setSelectedPillar(idx);
                    }}
                  >
                    <div className={styles.pillarIconBox} aria-hidden="true">
                      {pillar.icon}
                    </div>

                    <div className={styles.pillarBody}>
                      <div className={styles.pillarHeaderRow}>
                        <h3 className={styles.pillarTitle}>{pillar.label}</h3>
                        <span className={styles.pillarBadge}>{pillar.detail}</span>
                      </div>
                      <p className={styles.pillarDesc}>{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Event Execution Feed at Bottom */}
            <div className={styles.executionFeed}>
              <div className={styles.feedPulseDot} aria-hidden="true" />
              <div className={styles.feedContent}>
                <span className={styles.feedLabel}>Live System Flow:</span>
                <span className={styles.feedText}>
                  Inbound Lead <span className={styles.feedSep}>→</span> Auto-Qualified <span className={styles.feedSep}>→</span> Scheduled on Calendar
                </span>
              </div>
              <span className={styles.feedStatusBadge}>Synced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
