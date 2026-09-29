"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    q: "What is an AI voice agent?",
    a: "An AI voice agent is an autonomous conversational program that speaks in natural, human-sounding speech over real telephone lines. Unlike robotic IVRs with keypads ('press 1 for sales'), our voice agents listen, comprehend nuances, converse with sub-second latency, qualify leads, and perform real software actions like booking appointments and updating databases.",
  },
  {
    q: "Can AI agents actually book appointments?",
    a: "Yes, directly and reliably. The AI queries your live calendar availability (via Google Calendar, GoHighLevel, or Calendly), offers matching time slots to the caller in real-time, collects appointment details, and schedules the booking instantly with automatic email and SMS confirmations.",
  },
  {
    q: "Can the AI update our CRM?",
    a: "Absolutely. Every detail captured during a voice call or chat — including caller identity, qualification answers, appointment notes, tags, and complete audio recordings and transcripts — is synced automatically into your CRM in real time.",
  },
  {
    q: "Can GHLVertex work with our existing software?",
    a: "Yes. While we specialize in GoHighLevel and n8n, our integration architecture connects with HubSpot, Salesforce, Slack, Stripe, Google Workspace, Zapier, Twilio, and custom REST API endpoints without requiring you to abandon your current toolset.",
  },
  {
    q: "Do we need GoHighLevel?",
    a: "Not necessarily, but it is strongly recommended. GoHighLevel serves as an extraordinary all-in-one CRM, telephony, and marketing engine. If you already use another CRM (like HubSpot or Salesforce), we can bridge your AI agents via n8n or direct webhooks while maintaining your existing platform.",
  },
  {
    q: "Do you build n8n automation?",
    a: "Yes. n8n is our preferred workflow orchestration engine for complex backend automations, self-hosted data privacy, custom webhook handling, and advanced agentic decision trees.",
  },
  {
    q: "Can AI handle inbound and outbound calls?",
    a: "Yes. Our AI voice agents excel at both inbound call answering (customer inquiries, emergency triage, after-hours receptionist) and outbound calls (instant lead response within 60 seconds, past-client reactivation, and appointment confirmation reminders).",
  },
  {
    q: "Can the AI transfer calls to humans?",
    a: "Yes, seamlessly. If a caller requests a manager, has an urgent emergency, or asks a nuanced question outside the agent's knowledge boundary, the AI can perform a warm or cold transfer to your designated phone line or office extension instantly.",
  },
  {
    q: "Can AI use our business knowledge?",
    a: "Yes. We ingest your company's SOPs, service catalogs, pricing guides, warranty terms, and FAQ sheets into a dedicated retrieval-augmented generation (RAG) knowledge base. The AI only responds with facts approved by your business.",
  },
  {
    q: "Can our team take over a conversation?",
    a: "Yes. Whenever a live agent or team member types or speaks into a conversation in your CRM dashboard, the AI instantly yields and enters standby mode so your team has total control.",
  },
  {
    q: "How much does an AI automation system cost?",
    a: "Pricing depends on the scope of your system — ranging from standalone single-agent receptionists to multi-agent full customer journey architectures with GoHighLevel and custom n8n pipelines. We provide clear, transparent upfront architecture proposals during our strategy call.",
  },
  {
    q: "How long does implementation take?",
    a: "A typical production-ready AI Voice Agent deployment takes between 7 to 14 business days from initial discovery and prompt engineering to voice calibration, testing, and full live launch.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className={styles.faqSection} aria-label="Frequently Asked Questions Section">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Got Questions?</span>
          <h2 className={styles.heading}>
            Frequently Asked <span className={styles.headingHighlight}>Questions</span>
          </h2>
          <p className={styles.supporting}>
            Everything you need to know about implementing AI voice agents, autonomous workforce systems, and GoHighLevel CRM automation.
          </p>
        </div>

        <div className={styles.accordionList}>
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.faqTrigger}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.faqIcon} aria-hidden="true">+</span>
                </button>

                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
