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
          {/* Logo + Brand Description */}
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
              GHLVertex is a GoHighLevel agency helping businesses and agencies build CRM systems, workflow automation, AI agents, integrations and scalable customer journeys.
            </p>
          </div>

          {/* Group 01 — GOHIGHLEVEL */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>GoHighLevel</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/ghl-setup-services/" className={styles.link}>
                  GHL Setup Services
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation-services/" className={styles.link}>
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/saas-crm/" className={styles.link}>
                  SaaS CRM
                </Link>
              </li>
              <li>
                <Link href="/services/gohighlevel-white-label-support/" className={styles.link}>
                  White-Label GHL Support
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation-services/" className={styles.link}>
                  GHL AI Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 02 — AI SERVICES */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>AI Services</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/ai-consulting-services/" className={styles.link}>
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation-services/" className={styles.link}>
                  AI Automation
                </Link>
              </li>
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
                  RAG Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 03 — COMPANY */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/#why-ghlvertex" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#results" className={styles.link}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 04 — RESOURCES */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Resources</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/#contact" className={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#process" className={styles.link}>
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/#faq" className={styles.link}>
                  FAQs
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
