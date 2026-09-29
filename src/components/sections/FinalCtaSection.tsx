"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FinalCtaSection.module.css";

const automationOptions = [
  "Inbound & Outbound Calls",
  "Lead Qualification",
  "Appointment Booking",
  "Omnichannel Follow-Up",
  "Customer Support & FAQs",
  "CRM & Pipeline Sync",
];

export function FinalCtaSection() {
  const [selected, setSelected] = useState<string[]>([
    "Inbound & Outbound Calls",
    "Appointment Booking",
  ]);

  const toggleOption = (opt: string) => {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((item) => item !== opt) : [...prev, opt]
    );
  };

  const handleShowPossibilities = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "contact";
    }
  };

  return (
    <section id="cta" className={styles.finalCtaSection} aria-label="Build Your AI System Call to Action">
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Left Column: Bold Value Proposition */}
          <div className={styles.contentCol}>
            <span className={styles.badge}>Next-Generation Operations</span>
            
            <h2 className={styles.heading}>
              What Would You Automate If You Had an{" "}
              <span className={styles.headingHighlight}>AI Employee Working 24/7?</span>
            </h2>

            <p className={styles.supporting}>
              Tell us how your business currently handles calls, leads, and follow-up. We&apos;ll identify where autonomous AI systems can save dozens of staff hours and capture more high-value clients.
            </p>

            <div className={styles.ctaButtonGroup}>
              <Link href="#contact" className={styles.primaryBtn}>
                Build My AI System
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#contact" className={styles.secondaryBtn}>
                Book Strategy Call
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Automation Configurator */}
          <div className={styles.interactiveBox}>
            <div className={styles.boxHeader}>
              <h3 className={styles.boxTitle}>What do you want to automate?</h3>
              <p className={styles.boxSub}>
                Select the operational bottlenecks you want your AI workforce to solve:
              </p>
            </div>

            <div className={styles.optionsGrid}>
              {automationOptions.map((opt) => {
                const isChecked = selected.includes(opt);
                return (
                  <label
                    key={opt}
                    className={`${styles.optionLabel} ${isChecked ? styles.selected : ""}`}
                  >
                    <input
                      type="checkbox"
                      className={styles.checkboxInput}
                      checked={isChecked}
                      onChange={() => toggleOption(opt)}
                    />
                    <span className={styles.optionText}>{opt}</span>
                  </label>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleShowPossibilities}
              className={styles.interactiveSubmitBtn}
            >
              Show Me What&apos;s Possible ({selected.length} Selected)
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
