import React from "react";
import styles from "./ProblemSection.module.css";

export function ProblemSection() {
  return (
    <section className={styles.problemSection} aria-labelledby="problem-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerGroup}>
          <div className={styles.eyebrow}>
            <span>The Problem</span>
          </div>

          <h2 id="problem-heading" className={styles.heading}>
            Your Leads Shouldn&apos;t Have to{" "}
            <span className={styles.headingHighlight}>Wait for Your Team</span>
          </h2>

          <p className={styles.supporting}>
            Every missed call, delayed response and forgotten follow-up creates another opportunity for a competitor.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 01: Missed Calls */}
          <div className={styles.problemCard}>
            <div className={styles.cardTop}>
              <div className={styles.cardHeaderRow}>
                <span className={styles.numberBadge}>Problem 01</span>
              </div>
              <h3 className={styles.cardTitle}>Missed Calls</h3>
              <p className={styles.cardDescription}>
                Your team can&apos;t answer every call around the clock.
              </p>
            </div>

            {/* Visual: Phone icon + missed call UI */}
            <div className={styles.visualWrapper} aria-hidden="true">
              <div className={styles.missedCallBox}>
                <div className={styles.callDetails}>
                  <div className={styles.callIconBadge}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      <line x1="23" y1="1" x2="17" y2="7" />
                      <line x1="17" y1="1" x2="23" y2="7" />
                    </svg>
                  </div>
                  <div className={styles.callInfoGroup}>
                    <span className={styles.callerName}>Unknown Prospective Lead</span>
                    <span className={styles.callTime}>10:48 PM • Inbound Call</span>
                  </div>
                </div>
                <span className={styles.missedTag}>Missed • Voicemail Full</span>
              </div>
            </div>
          </div>

          {/* Card 02: Slow Lead Response */}
          <div className={styles.problemCard}>
            <div className={styles.cardTop}>
              <div className={styles.cardHeaderRow}>
                <span className={styles.numberBadge}>Problem 02</span>
              </div>
              <h3 className={styles.cardTitle}>Slow Lead Response</h3>
              <p className={styles.cardDescription}>
                By the time someone responds, the prospect may already be speaking with a competitor.
              </p>
            </div>

            {/* Visual: Lead notification -> delayed response */}
            <div className={styles.visualWrapper} aria-hidden="true">
              <div className={styles.timelineVisual}>
                <div className={styles.timelineRow}>
                  <span className={styles.timelineLabel}>Inbound Web Form</span>
                  <span className={styles.timelineValue}>09:15 AM</span>
                </div>
                <div className={styles.timelineRow}>
                  <span className={styles.timelineLabel}>First Human Outreach</span>
                  <span className={styles.timelineValue}>01:45 PM</span>
                </div>
                <div className={styles.delayWarning}>
                  <span>4h 30m Response Gap</span>
                  <span>Prospect Already Left</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03: Manual Follow-Up */}
          <div className={styles.problemCard}>
            <div className={styles.cardTop}>
              <div className={styles.cardHeaderRow}>
                <span className={styles.numberBadge}>Problem 03</span>
              </div>
              <h3 className={styles.cardTitle}>Manual Follow-Up</h3>
              <p className={styles.cardDescription}>
                Sales teams spend hours repeating the same follow-up tasks.
              </p>
            </div>

            {/* Visual: SMS / Email / call sequence */}
            <div className={styles.visualWrapper} aria-hidden="true">
              <div className={styles.sequenceVisual}>
                <div className={styles.sequenceStep}>
                  <span className={styles.stepIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className={styles.stepTitle}>Manual Intro Email</span>
                  <span className={styles.stepDuration}>~15 mins</span>
                </div>
                <div className={styles.sequenceStep}>
                  <span className={styles.stepIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <span className={styles.stepTitle}>Manual SMS Reminder</span>
                  <span className={styles.stepDuration}>~10 mins</span>
                </div>
                <div className={styles.sequenceStep}>
                  <span className={styles.stepIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className={styles.stepTitle}>Manual Call Attempt</span>
                  <span className={styles.stepDuration}>~20 mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 04: Disconnected Systems */}
          <div className={styles.problemCard}>
            <div className={styles.cardTop}>
              <div className={styles.cardHeaderRow}>
                <span className={styles.numberBadge}>Problem 04</span>
              </div>
              <h3 className={styles.cardTitle}>Disconnected Systems</h3>
              <p className={styles.cardDescription}>
                Calls, CRM, calendars and marketing tools often operate separately.
              </p>
            </div>

            {/* Visual: Disconnected application nodes */}
            <div className={styles.visualWrapper} aria-hidden="true">
              <div className={styles.nodesVisual}>
                <div className={styles.appNode}>
                  <div className={styles.nodeBox}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>Phone</span>
                </div>

                <span className={styles.disconnectSlash}>↮</span>

                <div className={styles.appNode}>
                  <div className={styles.nodeBox}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span>CRM</span>
                </div>

                <span className={styles.disconnectSlash}>↮</span>

                <div className={styles.appNode}>
                  <div className={styles.nodeBox}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <span>Calendar</span>
                </div>

                <span className={styles.disconnectSlash}>↮</span>

                <div className={styles.appNode}>
                  <div className={styles.nodeBox}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16 10 8" />
                    </svg>
                  </div>
                  <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bridge Section */}
        <div className={styles.bridgeContainer}>
          <div className={styles.bridgeCard}>
            <span className={styles.bridgeSparkle} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </span>
            <p className={styles.bridgeText}>
              <span className={styles.bridgeHighlight}>GHLVertex</span> connects these systems into one intelligent AI-powered customer journey.
            </p>
          </div>

          {/* Animated Downward Connector Arrow */}
          <div className={styles.connectorLine} aria-hidden="true">
            <span className={styles.pulseLine} />
            <svg
              className={styles.downArrow}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
