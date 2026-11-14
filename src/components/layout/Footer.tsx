import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "./SocialLinks";
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
            <div className={styles.socialWrapper}>
              <SocialLinks />
            </div>
          </div>

          {/* Group 01 — GOHIGHLEVEL */}
          <div className={`${styles.column} ${styles.ghlCol}`}>
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
          <div className={`${styles.column} ${styles.aiCol}`}>
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
          <div className={`${styles.column} ${styles.companyCol}`}>
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
          <div className={`${styles.column} ${styles.resourcesCol}`}>
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

          {/* Business Office & Contact (Placed in the blank space below Company & Resources) */}
          <div className={styles.contactBlock}>
            <span className={styles.contactTitle}>Office &amp; Contact</span>
            <div className={styles.contactList}>
              <div className={styles.contactItem} title="Business Address">
                <svg
                  className={styles.contactIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{siteConfig.contact.address.full}</span>
              </div>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className={styles.emailLink}
                aria-label={`Email GHLVertex at ${siteConfig.contact.email}`}
              >
                <svg
                  className={styles.contactIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} GHLVertex. All rights reserved.</p>
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
