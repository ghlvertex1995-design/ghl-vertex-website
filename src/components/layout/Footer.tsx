import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          {/* Logo + Positioning */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label={`${siteConfig.name} - Home`}>
              <Image
                src="/images/logo.png"
                alt="GHLVertex"
                width={175}
                height={38}
                unoptimized
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              AI Agents &amp; Automation Systems for Modern Businesses.
            </p>
          </div>

          {/* Column 01 — AI Agents */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>AI Agents</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="#voice-agents" className={styles.link}>
                  AI Voice Agent
                </Link>
              </li>
              <li>
                <Link href="#ai-workforce" className={styles.link}>
                  AI Receptionist
                </Link>
              </li>
              <li>
                <Link href="#ai-workforce" className={styles.link}>
                  AI Sales Agent
                </Link>
              </li>
              <li>
                <Link href="#ai-workforce" className={styles.link}>
                  AI Support Agent
                </Link>
              </li>
              <li>
                <Link href="#services" className={styles.link}>
                  AI Chat Agent
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 02 — Automation */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Automation</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="#agentic-ai" className={styles.link}>
                  Agentic AI
                </Link>
              </li>
              <li>
                <Link href="#services" className={styles.link}>
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className={styles.link}>
                  CRM Automation
                </Link>
              </li>
              <li>
                <Link href="#integrations" className={styles.link}>
                  GoHighLevel Automation
                </Link>
              </li>
              <li>
                <Link href="#integrations" className={styles.link}>
                  n8n Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 03 — Solutions */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Solutions</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="#use-cases" className={styles.link}>
                  Lead Qualification
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className={styles.link}>
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className={styles.link}>
                  Lead Reactivation
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className={styles.link}>
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className={styles.link}>
                  Sales Follow-Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 04 — Company */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="#why-ghlvertex" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#results" className={styles.link}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#faq" className={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Privacy Policy, Terms, © GHLVertex */}
        <div className={styles.bottom}>
          <p>© {currentYear} GHLVertex. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#contact" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="#contact" className={styles.legalLink}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
