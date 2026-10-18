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

          {/* Column 01 — AI Agents & Models */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>AI Engineering</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/ai-agent-development-services/" className={styles.link}>
                  AI Agent Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-chatbot-development-services/" className={styles.link}>
                  AI Chatbot Development
                </Link>
              </li>
              <li>
                <Link href="/services/custom-ai-development/" className={styles.link}>
                  Custom AI Development
                </Link>
              </li>
              <li>
                <Link href="/services/rag-development-services/" className={styles.link}>
                  RAG Knowledge Systems
                </Link>
              </li>
              <li>
                <Link href="/#voice-agents" className={styles.link}>
                  AI Voice Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 02 — Automation & CRM */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Automation &amp; CRM</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/ai-automation-services/" className={styles.link}>
                  AI Automation Services
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation-services/" className={styles.link}>
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration-services/" className={styles.link}>
                  AI Integration Services
                </Link>
              </li>
              <li>
                <Link href="/services/ghl-setup-services/" className={styles.link}>
                  GHL Setup Services
                </Link>
              </li>
              <li>
                <Link href="/services/gohighlevel-white-label-support/" className={styles.link}>
                  GHL White Label Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 03 — Solutions */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Solutions</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/solutions/saas-crm/" className={styles.link}>
                  SaaS CRM Architecture
                </Link>
              </li>
              <li>
                <Link href="/services/ai-consulting-services/" className={styles.link}>
                  AI Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.link}>
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.link}>
                  Speed-to-Lead Triage
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.link}>
                  Missed Call Text-Back
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 04 — Company */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/#why-ghlvertex" className={styles.link}>
                  Why GHLVertex
                </Link>
              </li>
              <li>
                <Link href="/#results" className={styles.link}>
                  Execution Flow
                </Link>
              </li>
              <li>
                <Link href="/#faq" className={styles.link}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.link}>
                  Contact &amp; Strategy Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Privacy Policy, Terms, © GHLVertex */}
        <div className={styles.bottom}>
          <p>© {currentYear} GHLVertex. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/#contact" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/#contact" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
