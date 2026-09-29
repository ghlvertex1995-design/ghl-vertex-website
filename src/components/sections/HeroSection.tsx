"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  // 5-step animation loop cycling every 2.2 seconds (total cycle ~11 seconds)
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const flowNodes = [
    { label: "Incoming Lead", step: 0 },
    { label: "AI Voice Agent", step: 1 },
    { label: "Lead Qualification", step: 2 },
    { label: "Appointment Booking", step: 3 },
    { label: "CRM Update", step: 4 },
  ];

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.heroGridBackground} aria-hidden="true" />

      <div className={styles.heroContainer}>
        {/* ==================================================================
            LEFT COLUMN (50%): VALUE PROPOSITION & CONVERSION CONTENT
           ================================================================== */}
        <div className={styles.contentCol}>
          {/* Eyebrow Badge */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>AI Agents • Voice AI • Intelligent Automation</span>
          </div>

          {/* H1 Main Heading: Balanced 2-line structure */}
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.headingLineTop}>AI Agents That Turn</span>
            <span className={styles.headingLineBottom}>
              <span className={styles.headingGradient}>Conversations</span> Into{" "}
              <span className={styles.headingGradient}>Customers</span>
            </span>
          </h1>

          {/* Supporting Copy (Max 2-3 lines desktop) */}
          <p className={styles.description}>
            We build AI voice agents, sales agents and intelligent automation systems
            that answer leads, qualify prospects, book appointments, follow up
            automatically and keep your CRM updated — 24/7.
          </p>

          {/* Primary & Secondary Call To Actions */}
          <div className={styles.ctaGroup}>
            <Link href="#contact" className={styles.primaryCta}>
              <span>Build My AI Agent</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>

            <Link href="#contact" className={styles.secondaryCta}>
              <span>Book a Free Strategy Call</span>
            </Link>
          </div>

          {/* Trust Copy */}
          <div className={styles.trustStrip}>
            <span className={styles.trustShield} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z" />
              </svg>
            </span>
            <span>Built with GoHighLevel, n8n and leading AI technologies.</span>
          </div>
        </div>

        {/* ==================================================================
            RIGHT COLUMN (50%): VISUAL AUTOMATION SYSTEM
           ================================================================== */}
        <div className={styles.visualCol}>
          <div className={styles.systemBoard}>
            {/* System Engine Header Status */}
            <div className={styles.systemTopBar}>
              <div className={styles.systemStatus}>
                <span className={styles.liveIndicator} aria-hidden="true" />
                <span>Autonomous Engine Live</span>
              </div>
              <div className={styles.engineLabel}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                <span>GHL Vertex Core</span>
              </div>
            </div>

            {/* Central Card: AI Voice Agent Hub */}
            <div className={styles.centralHubCard}>
              <div className={styles.hubInfo}>
                <div className={styles.hubAvatar} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </div>
                <div className={styles.hubTitleGroup}>
                  <div className={styles.hubTitle}>AI Voice Agent</div>
                  <div className={styles.hubSubtitle}>
                    {activeStep === 0 && "Receiving Inbound Call..."}
                    {activeStep === 1 && "Active Call: Answering & Greeting..."}
                    {activeStep === 2 && "Analyzing Intent & Qualifying..."}
                    {activeStep === 3 && "Calendar Sync & Scheduling..."}
                    {activeStep === 4 && "Updating CRM & Triggering Workflows..."}
                  </div>
                </div>
              </div>

              {/* Real-time Voice Audio Waveform */}
              <div className={styles.waveformContainer} aria-hidden="true">
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
              </div>
            </div>

            {/* Connected Nodes Pipeline Flow */}
            <div className={styles.nodesFlow} aria-label="System Workflow Nodes">
              {flowNodes.map((node, i) => (
                <React.Fragment key={node.label}>
                  <div
                    className={`${styles.nodeItem} ${
                      activeStep === node.step ? styles.activeNode : ""
                    }`}
                  >
                    <span>{node.label}</span>
                  </div>
                  {i < flowNodes.length - 1 && (
                    <span className={styles.nodeArrow} aria-hidden="true">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* 4 Small Dynamic Floating UI Cards */}
            <div className={styles.cardsGrid}>
              {/* Card 1: Incoming Call */}
              <div
                className={`${styles.uiCard} ${
                  activeStep === 0 || activeStep === 1 ? styles.cardActive : ""
                }`}
              >
                <div className={styles.cardHeader}>
                  <span className={`${styles.cardBadge} ${styles.badgeIncoming}`}>
                    Incoming Call
                  </span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0148A3" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className={styles.cardTitle}>Sarah Mitchell</div>
                <div className={styles.cardDataRow}>
                  <div className={styles.dataField}>
                    <span className={styles.dataLabel}>Status</span>
                    <span className={styles.dataValue}>New Inbound Lead</span>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Qualification */}
              <div
                className={`${styles.uiCard} ${
                  activeStep === 2 ? styles.cardActive : ""
                }`}
              >
                <div className={styles.cardHeader}>
                  <span className={`${styles.cardBadge} ${styles.badgeQualified}`}>
                    AI Qualification
                  </span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className={styles.cardDataRow}>
                  <div className={styles.dataField}>
                    <span className={styles.dataLabel}>Budget</span>
                    <span className={styles.dataValue}>Qualified</span>
                  </div>
                  <div className={styles.dataField}>
                    <span className={styles.dataLabel}>Service</span>
                    <span className={styles.dataValue}>HVAC Repair</span>
                  </div>
                  <div className={styles.dataField}>
                    <span className={styles.dataLabel}>Location</span>
                    <span className={styles.dataValue}>Austin</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Appointment Booked */}
              <div
                className={`${styles.uiCard} ${
                  activeStep === 3 ? styles.cardActive : ""
                }`}
              >
                <div className={styles.cardHeader}>
                  <span className={`${styles.cardBadge} ${styles.badgeBooked}`}>
                    Appointment Booked
                  </span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className={styles.cardTitle}>Tomorrow</div>
                <div className={styles.cardDataRow}>
                  <div className={styles.dataField}>
                    <span className={styles.dataLabel}>Time</span>
                    <span className={styles.dataValue}>10:30 AM</span>
                  </div>
                </div>
              </div>

              {/* Card 4: CRM Updated */}
              <div
                className={`${styles.uiCard} ${
                  activeStep === 4 ? styles.cardActive : ""
                }`}
              >
                <div className={styles.cardHeader}>
                  <span className={`${styles.cardBadge} ${styles.badgeCrm}`}>
                    CRM Updated
                  </span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 21h5v-5" />
                  </svg>
                </div>
                <div className={styles.cardDataRow}>
                  <span className={styles.dataLabel}>Pipeline:</span>
                  <div className={styles.pipelineStage}>
                    <span>New Lead</span>
                    <span>→</span>
                    <span>Appointment Booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
