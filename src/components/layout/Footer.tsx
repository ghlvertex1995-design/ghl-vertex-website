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
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label={`${siteConfig.name} - Home`}>
              <Image
                src="/images/logo.png"
                alt="GHL Vertex"
                width={170}
                height={35}
                unoptimized
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.colTitle}>AI & Automation</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="#ai-voice-agent" className={styles.link}>
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link href="#gohighlevel-automation" className={styles.link}>
                  GoHighLevel Automation
                </Link>
              </li>
              <li>
                <Link href="#agentic-ai-automation" className={styles.link}>
                  Agentic AI Systems
                </Link>
              </li>
              <li>
                <Link href="#appointment-booking" className={styles.link}>
                  Appointment Booking
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="#services" className={styles.link}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className={styles.link}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className={styles.link}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#faq" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className={styles.link}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.colTitle}>Connect</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <p>GoHighLevel & AI Agent Specialists</p>
        </div>
      </div>
    </footer>
  );
}
