import Image from "next/image";
import Link from "next/link";
import styles from "./IndustrySection.module.css";

const industries = [
  {
    title: "HVAC",
    image: "/images/industries/hvac.jpg",
    alt: "HVAC technician inspecting residential AC heat pump unit",
    automate: [
      "Inbound emergency calls",
      "Urgency qualification",
      "Technician dispatch booking",
      "Missed call recovery",
      "Seasonal tune-up follow-up",
    ],
    ctaText: "Explore HVAC Automation",
  },
  {
    title: "Dental",
    image: "/images/industries/dental.jpg",
    alt: "Modern dental clinic treatment room with chair and equipment",
    automate: [
      "New patient booking",
      "Hygiene recall reminders",
      "Insurance FAQ answers",
      "Post-procedure follow-ups",
      "After-hours emergency intake",
    ],
    ctaText: "Explore Dental Automation",
  },
  {
    title: "Plumbing",
    image: "/images/industries/plumbing.jpg",
    alt: "Professional licensed plumber repairing pipe connections under sink",
    automate: [
      "Emergency leak intake",
      "Location & ZIP screening",
      "Instant calendar scheduling",
      "Review generation sequences",
      "Quote follow-up calls",
    ],
    ctaText: "Explore Plumbing Automation",
  },
  {
    title: "Roofing",
    image: "/images/industries/roofing.jpg",
    alt: "Roofing contractor inspecting architectural shingles with safety harness",
    automate: [
      "Storm damage inbound leads",
      "Inspection appointments",
      "Drone estimate follow-ups",
      "Insurance claim updates",
      "Customer reviews on Google",
    ],
    ctaText: "Explore Roofing Automation",
  },
  {
    title: "Real Estate",
    image: "/images/industries/real_estate.jpg",
    alt: "Real estate agent with tablet in front of luxury suburban home",
    automate: [
      "Zillow & FB ad qualification",
      "Showing tour scheduling",
      "Buyer budget pre-screening",
      "Dormant lead reactivation",
      "Open house SMS follow-up",
    ],
    ctaText: "Explore Real Estate Automation",
  },
  {
    title: "Law Firms",
    image: "/images/industries/law.jpg",
    alt: "Professional law firm conference room with legal team",
    automate: [
      "24/7 confidential client intake",
      "Case eligibility screening",
      "Consultation scheduling",
      "Conflict check workflows",
      "Retainer agreement follow-up",
    ],
    ctaText: "Explore Legal Automation",
  },
  {
    title: "Med Spas",
    image: "/images/industries/medspa.jpg",
    alt: "Luxury medical spa treatment room with modern skincare technology",
    automate: [
      "Consultation bookings",
      "Deposit collection reminders",
      "Pre & post care instructions",
      "Treatment package upsells",
      "No-show reduction SMS",
    ],
    ctaText: "Explore Med Spa Automation",
  },
  {
    title: "Home Services",
    image: "/images/industries/homeservices.jpg",
    alt: "Home services technician speaking with customer at front door",
    automate: [
      "Multichannel inquiry routing",
      "Same-day dispatch booking",
      "Instant missed-call text back",
      "Job completion surveys",
      "Annual maintenance renewals",
    ],
    ctaText: "Explore Home Services Automation",
  },
];

export function IndustrySection() {
  return (
    <section id="industries" className={styles.industrySection} aria-label="Industry Specific AI Solutions">
      <div className={styles.container}>
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Industry Solutions</span>
          <h2 className={styles.heading}>
            AI Automation Built Around <span className={styles.headingHighlight}>Your Industry</span>
          </h2>
          <p className={styles.supporting}>
            Every industry has distinct operational nuances, qualification criteria, and customer expectations. We engineer specialized AI architectures tuned to your specific vertical.
          </p>
        </div>

        <div className={styles.industryGrid}>
          {industries.map((ind, idx) => (
            <div key={idx} className={styles.industryCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={ind.image}
                  alt={ind.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.industryImage}
                />
                <span className={styles.imageOverlayBadge}>Verified Workflow</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.industryTitle}>{ind.title}</h3>

                <div className={styles.automateList}>
                  {ind.automate.map((item, i) => (
                    <div key={i} className={styles.automateItem}>
                      <span className={styles.checkBullet}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="#contact" className={styles.cardCta}>
                  {ind.ctaText} <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
