"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { ResultsMegaMenu } from "./ResultsMegaMenu";
import { CompanyMegaMenu } from "./CompanyMegaMenu";
import { IndustryMegaMenu } from "./IndustryMegaMenu";
import {
  servicesMegaMenuData,
  resultsMenuData,
  companyMenuData,
  industryMenuData,
} from "./navData";
import styles from "./Header.module.css";

type OpenMenuType = "services" | "results" | "company" | "industries" | null;

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<OpenMenuType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile accordion state
  const [mobileAccordion, setMobileAccordion] = useState<{
    services: boolean;
    results: boolean;
    company: boolean;
    industries: boolean;
  }>({
    services: false,
    results: false,
    company: false,
    industries: false,
  });

  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const resultsBtnRef = useRef<HTMLButtonElement>(null);
  const companyBtnRef = useRef<HTMLButtonElement>(null);
  const industriesBtnRef = useRef<HTMLButtonElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  // Scroll detection for navbar shadow/elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Click outside and Escape handling
  const closeAllMenus = useCallback(() => {
    setActiveMenu(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          mobileToggleRef.current?.focus();
        } else if (activeMenu) {
          const prevMenu = activeMenu;
          closeAllMenus();
          if (prevMenu === "services") servicesBtnRef.current?.focus();
          else if (prevMenu === "results") resultsBtnRef.current?.focus();
          else if (prevMenu === "company") companyBtnRef.current?.focus();
          else if (prevMenu === "industries") industriesBtnRef.current?.focus();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenu, isMobileMenuOpen, closeAllMenus]);

  // Mouse hover handlers with debounced exit
  const handleMouseEnter = (menu: OpenMenuType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const toggleMenu = (menu: "services" | "results" | "company" | "industries") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileAccordion = (section: "services" | "results" | "company" | "industries") => {
    setMobileAccordion((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Determine active section from pathname
  const isServicesActive = pathname.startsWith("/services") || pathname.startsWith("/solutions");

  return (
    <header
      ref={headerRef}
      className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={styles.navbarPill}>
        {/* 1. GHLVertex Logo */}
        <Link
          href="/"
          className={styles.brand}
          aria-label="GHLVertex home"
          onClick={closeAllMenus}
        >
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} - GoHighLevel CRM, Automation & AI Agency`}
            width={215}
            height={44}
            priority
            unoptimized
            className={styles.logoImage}
          />
        </Link>

        {/* 2. Main Navigation: Services, Results, Company */}
        <nav className={styles.nav} aria-label="Main Navigation">
          <ul className={styles.nav} role="menubar">
            {/* Services Dropdown */}
            <li
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              role="none"
            >
              <button
                ref={servicesBtnRef}
                type="button"
                role="menuitem"
                className={`${styles.navButton} ${activeMenu === "services" ? styles.open : ""} ${isServicesActive ? styles.active : ""}`}
                onClick={() => toggleMenu("services")}
                aria-expanded={activeMenu === "services"}
                aria-haspopup="true"
                aria-controls="services-mega-menu"
                aria-label="Services menu"
              >
                <span>Services</span>
                <span
                  className={`${styles.chevron} ${activeMenu === "services" ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </li>

            {/* Results Dropdown */}
            <li
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter("results")}
              onMouseLeave={handleMouseLeave}
              role="none"
            >
              <button
                ref={resultsBtnRef}
                type="button"
                role="menuitem"
                className={`${styles.navButton} ${activeMenu === "results" ? styles.open : ""}`}
                onClick={() => toggleMenu("results")}
                aria-expanded={activeMenu === "results"}
                aria-haspopup="true"
                aria-controls="results-mega-menu"
                aria-label="Results menu"
              >
                <span>Results</span>
                <span
                  className={`${styles.chevron} ${activeMenu === "results" ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </li>

            {/* Company Dropdown */}
            <li
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
              role="none"
            >
              <button
                ref={companyBtnRef}
                type="button"
                role="menuitem"
                className={`${styles.navButton} ${activeMenu === "company" ? styles.open : ""}`}
                onClick={() => toggleMenu("company")}
                aria-expanded={activeMenu === "company"}
                aria-haspopup="true"
                aria-controls="company-mega-menu"
                aria-label="Company menu"
              >
                <span>Company</span>
                <span
                  className={`${styles.chevron} ${activeMenu === "company" ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </li>

            {/* Industry We Serve Dropdown */}
            <li
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
              role="none"
            >
              <button
                ref={industriesBtnRef}
                type="button"
                role="menuitem"
                className={`${styles.navButton} ${activeMenu === "industries" ? styles.open : ""}`}
                onClick={() => toggleMenu("industries")}
                aria-expanded={activeMenu === "industries"}
                aria-haspopup="true"
                aria-controls="industries-mega-menu"
                aria-label="Industry We Serve menu"
              >
                <span>Industry We Serve</span>
                <span
                  className={`${styles.chevron} ${activeMenu === "industries" ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </li>
          </ul>
        </nav>

        {/* 3. Header Action CTAs: Contact + Book GHL Strategy Call */}
        <div className={styles.actions}>
          <Link
            href="/#contact"
            className={styles.contactBtn}
            onClick={closeAllMenus}
          >
            Contact
          </Link>

          <Link
            href="/#contact"
            className={styles.ctaBtn}
            onClick={closeAllMenus}
          >
            <span>Book GHL Strategy Call</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            ref={mobileToggleRef}
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
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
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* 4. Desktop Mega Menus */}
      <ServicesMegaMenu
        isOpen={activeMenu === "services"}
        onClose={closeAllMenus}
        onMouseEnter={() => handleMouseEnter("services")}
        onMouseLeave={handleMouseLeave}
        activePath={pathname}
      />

      <ResultsMegaMenu
        isOpen={activeMenu === "results"}
        onClose={closeAllMenus}
        onMouseEnter={() => handleMouseEnter("results")}
        onMouseLeave={handleMouseLeave}
        activePath={pathname}
      />

      <CompanyMegaMenu
        isOpen={activeMenu === "company"}
        onClose={closeAllMenus}
        onMouseEnter={() => handleMouseEnter("company")}
        onMouseLeave={handleMouseLeave}
        activePath={pathname}
      />

      <IndustryMegaMenu
        isOpen={activeMenu === "industries"}
        onClose={closeAllMenus}
        onMouseEnter={() => handleMouseEnter("industries")}
        onMouseLeave={handleMouseLeave}
        activePath={pathname}
      />

      {/* 5. Accessible Mobile Drawer Navigation */}
      <div
        id="mobile-drawer"
        className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className={styles.drawerContent}>
          {/* Drawer Header */}
          <div className={styles.drawerHeader}>
            <Link href="/" onClick={closeMobile} aria-label="GHLVertex home">
              <Image
                src="/images/logo.png"
                alt="GHLVertex"
                width={160}
                height={34}
                unoptimized
                className={styles.logoImage}
              />
            </Link>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeMobile}
              aria-label="Close navigation menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation List with Accordions */}
          <ul className={styles.mobileNavList} role="list">
            {/* Accordion 1: Services */}
            <li className={styles.mobileNavItem}>
              <button
                type="button"
                className={`${styles.mobileAccordionTrigger} ${mobileAccordion.services ? styles.expanded : ""}`}
                onClick={() => toggleMobileAccordion("services")}
                aria-expanded={mobileAccordion.services}
                aria-controls="mobile-services-accordion"
              >
                <span>Services</span>
                <span className={styles.accordionChevron} aria-hidden="true">
                  ▼
                </span>
              </button>

              {mobileAccordion.services && (
                <div id="mobile-services-accordion" className={styles.mobileAccordionContent}>
                  {servicesMegaMenuData.groups.map((group) => (
                    <div key={group.heading}>
                      <div className={styles.mobileGroupHeading}>{group.heading}</div>
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={styles.mobileSubLink}
                          onClick={closeMobile}
                        >
                          <span className={styles.mobileSubLinkTitle}>{link.name}</span>
                          <span className={styles.mobileSubLinkDesc}>{link.description}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Accordion 2: Results */}
            <li className={styles.mobileNavItem}>
              <button
                type="button"
                className={`${styles.mobileAccordionTrigger} ${mobileAccordion.results ? styles.expanded : ""}`}
                onClick={() => toggleMobileAccordion("results")}
                aria-expanded={mobileAccordion.results}
                aria-controls="mobile-results-accordion"
              >
                <span>Results</span>
                <span className={styles.accordionChevron} aria-hidden="true">
                  ▼
                </span>
              </button>

              {mobileAccordion.results && (
                <div id="mobile-results-accordion" className={styles.mobileAccordionContent}>
                  {resultsMenuData.groups.map((group) => (
                    <div key={group.heading}>
                      <div className={styles.mobileGroupHeading}>{group.heading}</div>
                      {group.links.map((link) => (
                        <Link
                          key={`${group.heading}-${link.name}`}
                          href={link.href}
                          className={styles.mobileSubLink}
                          onClick={closeMobile}
                        >
                          <span className={styles.mobileSubLinkTitle}>{link.name}</span>
                          <span className={styles.mobileSubLinkDesc}>{link.description}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Accordion 3: Company */}
            <li className={styles.mobileNavItem}>
              <button
                type="button"
                className={`${styles.mobileAccordionTrigger} ${mobileAccordion.company ? styles.expanded : ""}`}
                onClick={() => toggleMobileAccordion("company")}
                aria-expanded={mobileAccordion.company}
                aria-controls="mobile-company-accordion"
              >
                <span>Company</span>
                <span className={styles.accordionChevron} aria-hidden="true">
                  ▼
                </span>
              </button>

              {mobileAccordion.company && (
                <div id="mobile-company-accordion" className={styles.mobileAccordionContent}>
                  {companyMenuData.groups.map((group) => (
                    <div key={group.heading}>
                      <div className={styles.mobileGroupHeading}>{group.heading}</div>
                      {group.links.map((link) => (
                        <Link
                          key={`${group.heading}-${link.name}`}
                          href={link.href}
                          className={styles.mobileSubLink}
                          onClick={closeMobile}
                        >
                          <span className={styles.mobileSubLinkTitle}>{link.name}</span>
                          <span className={styles.mobileSubLinkDesc}>{link.description}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Accordion 4: Industry We Serve */}
            <li className={styles.mobileNavItem}>
              <button
                type="button"
                className={`${styles.mobileAccordionTrigger} ${mobileAccordion.industries ? styles.expanded : ""}`}
                onClick={() => toggleMobileAccordion("industries")}
                aria-expanded={mobileAccordion.industries}
                aria-controls="mobile-industries-accordion"
              >
                <span>Industry We Serve</span>
                <span className={styles.accordionChevron} aria-hidden="true">
                  ▼
                </span>
              </button>

              {mobileAccordion.industries && (
                <div id="mobile-industries-accordion" className={styles.mobileAccordionContent}>
                  {industryMenuData.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={styles.mobileSubLink}
                      onClick={closeMobile}
                    >
                      <span className={styles.mobileSubLinkTitle}>{link.name}</span>
                      <span className={styles.mobileSubLinkDesc}>{link.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Mobile Drawer Bottom Actions */}
          <div className={styles.mobileActions}>
            <Link
              href="/#contact"
              className={styles.mobileContactBtn}
              onClick={closeMobile}
            >
              Contact
            </Link>

            <Link
              href="/#contact"
              className={styles.mobilePrimaryBtn}
              onClick={closeMobile}
            >
              <span>Book GHL Strategy Call</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
