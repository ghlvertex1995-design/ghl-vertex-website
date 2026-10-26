"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MegaMenu } from "./MegaMenu";
import styles from "./Header.module.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const navItemRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for sticky header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(`.${styles.navItem}`) &&
        !target.closest(`.${styles.headerContainer}`)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMegaMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen((prev) => !prev);
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={styles.navbarPill}>
        {/* Section 1: Crisp Logo Setup */}
        <Link
          href="/"
          className={styles.brand}
          aria-label={`${siteConfig.name} - Home`}
        >
          <Image
            src="/images/logo.png"
            alt="GHL Vertex - HighLevel CRM & AI Automation Agency"
            width={215}
            height={44}
            priority
            unoptimized
            className={styles.logoImage}
          />
        </Link>

        {/* Section 2: Header Menu (Center Navigation) */}
        <nav className={styles.nav} aria-label="Main Navigation">
          <ul className={styles.nav}>
            {/* Mega Menu Trigger: AI Agents */}
            <li
              ref={navItemRef}
              className={styles.navItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`${styles.navButton} ${isMegaMenuOpen ? styles.active : ""}`}
                onClick={toggleMegaMenu}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
                aria-label="Toggle AI Agents and Solutions Dropdown"
              >
                <span>AI Agents</span>
                <span
                  className={`${styles.chevron} ${isMegaMenuOpen ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </li>

            <li className={styles.navItem}>
              <Link href="/#services" className={styles.navLink}>
                Services
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/services/ai-automation-services/" className={styles.navLink}>
                AI Automation
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/services/ghl-setup-services/" className={styles.navLink}>
                GHL Setup
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/#faq" className={styles.navLink}>
                FAQ
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/#industries" className={styles.navLink}>
                Industries
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/#contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Action: Primary CTA (Contact button removed as requested) */}
        <div className={styles.actions}>
          <Link href="#contact" className={styles.ctaBtn}>
            <span>Book GHL Strategy Call</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Section 3: Navigation Dropdown (Mega Menu positioned relative to Header Container, perfectly centered over screen) */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Mobile Drawer Navigation */}
      <div
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
            <Image
              src="/images/logo.png"
              alt="GHL Vertex"
              width={160}
              height={34}
              unoptimized
              className={styles.logoImage}
            />
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeMobile}
              aria-label="Close mobile navigation menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul className={styles.mobileNavList}>
            {/* Accordion for Mega Menu items */}
            <li className={styles.mobileNavItem}>
              <button
                type="button"
                className={styles.mobileNavLink}
                onClick={() => setMobileAccordionOpen((prev) => !prev)}
              >
                <span>AI Agents & Solutions</span>
                <span>{mobileAccordionOpen ? "▲" : "▼"}</span>
              </button>

              {mobileAccordionOpen && (
                <div className={styles.accordionSection}>
                  <div className={styles.accordionGroupTitle}>AI Engineering</div>
                  <Link
                    href="/services/ai-agent-development-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    AI Agent Development
                  </Link>
                  <Link
                    href="/services/ai-chatbot-development-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    AI Chatbot Development
                  </Link>
                  <Link
                    href="/services/custom-ai-development/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    Custom AI Development
                  </Link>
                  <Link
                    href="/services/rag-development-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    RAG Knowledge Systems
                  </Link>

                  <div className={styles.accordionGroupTitle}>Automation &amp; CRM</div>
                  <Link
                    href="/services/ai-automation-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    AI Automation Services
                  </Link>
                  <Link
                    href="/services/workflow-automation-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    Workflow Automation
                  </Link>
                  <Link
                    href="/services/ai-integration-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    AI Integration Services
                  </Link>
                  <Link
                    href="/services/ghl-setup-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    GHL Setup Services
                  </Link>
                  <Link
                    href="/services/gohighlevel-white-label-support/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    GHL White Label Support
                  </Link>

                  <div className={styles.accordionGroupTitle}>Solutions &amp; Strategy</div>
                  <Link
                    href="/solutions/saas-crm/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    SaaS CRM Implementation
                  </Link>
                  <Link
                    href="/services/ai-consulting-services/"
                    className={styles.accordionSubLink}
                    onClick={closeMobile}
                  >
                    AI Consulting Services
                  </Link>
                </div>
              )}
            </li>

            <li className={styles.mobileNavItem}>
              <Link
                href="/#services"
                className={styles.mobileNavLink}
                onClick={closeMobile}
              >
                Services
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/services/ai-automation-services/"
                className={styles.mobileNavLink}
                onClick={closeMobile}
              >
                AI Automation
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/services/ghl-setup-services/"
                className={styles.mobileNavLink}
                onClick={closeMobile}
              >
                GHL Setup
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/#faq"
                className={styles.mobileNavLink}
                onClick={closeMobile}
              >
                FAQ
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/#industries"
                className={styles.mobileNavLink}
                onClick={closeMobile}
              >
                Industries
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                href="/#contact"
                className={styles.mobileNavLink}
                onClick={closeMobile}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className={styles.mobileActions}>
            <Link
              href="/#contact"
              className={styles.ctaBtn}
              onClick={closeMobile}
            >
              <span>Book AI Strategy Call</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
