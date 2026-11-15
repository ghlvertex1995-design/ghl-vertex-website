import { IndustryData } from "@/types/industry";

export const dentalData: IndustryData = {
  slug: "dental",
  name: "Dental",
  primaryKeyword: "GoHighLevel for dentists",
  metaTitle: "GoHighLevel for Dental Practices | Patient Booking & Recall Automation",
  metaDescription:
    "Automate patient appointment scheduling, reduce costly no-shows, streamline hygiene recall campaigns, and follow up on high-ticket treatment plans with GoHighLevel.",
  canonical: "/industries/dental/",
  hero: {
    eyebrow: "GOHIGHLEVEL FOR DENTAL",
    h1: "GoHighLevel CRM & Patient Recall Automation for Dental Practices",
    description:
      "GHLVertex builds specialized GoHighLevel systems for general dentistry, cosmetic practices, and orthodontic clinics. We eliminate front-desk phone overload, reduce costly patient no-shows with two-way SMS reminders, automate overdue 6-month hygiene recall campaigns, and nurture unaccepted treatment plans.",
    primaryCtaText: "Book a Dental Strategy Call",
    primaryCtaHref: "https://calendly.com/ghl-vertex1995/30min?month=2026-11",
    secondaryCtaText: "Explore Dental Workflows",
    secondaryCtaHref: "#workflows",
    targetAudience: "General Dentists, Cosmetic Practices, Orthodontists & Multi-Location Dental Groups",
    outcomeText: "Empty Chair Reduction, Automated 6-Month Hygiene Recalls & Increased Treatment Plan Acceptance",
    focusPills: [
      "2-Way SMS Reminders",
      "No-Show Prevention",
      "Overdue Hygiene Recall",
      "Treatment Plan Nurture",
      "Missed Call Text-Back",
      "New Patient Online Booking",
    ],
    diagramTitle: "Dental Patient Intake & Recall Architecture",
    diagramSteps: [
      { label: "New Inquiry / Call", sublabel: "Patient reaches practice via Google, website, or insurance directory" },
      { label: "Instant SMS / Form", sublabel: "Pre-appointment insurance & dental concern details collected" },
      { label: "Appointment Booked", sublabel: "Operatory chair window scheduled; automated SMS confirmation sent" },
      { label: "2-Way SMS Reminders", sublabel: "48-hour & 2-hour confirmation texts lock in chair time" },
      { label: "Treatment / Recall", sublabel: "Unaccepted care plans nurtured; patient enrolled in 6-month hygiene recall" },
    ],
  },
  directAnswer: {
    question: "What is GoHighLevel for Dental Practices?",
    answer:
      "GoHighLevel for dental practices is an automated patient communication and CRM platform designed to keep dental chairs filled. It captures new patient inquiries, automates two-way SMS appointment confirmations to eliminate no-shows, reactivates overdue six-month hygiene patients, and follows up on high-value cosmetic and restorative treatment plans like implants, crowns, and clear aligners.",
    keyTakeaways: [
      "Drastically reduces empty chair costs by enforcing two-way SMS appointment confirmation flows.",
      "Automatically reactivates hundreds of overdue hygiene recall patients without front-desk manual cold calling.",
      "Nurtures unaccepted high-ticket restorative and cosmetic treatment plans through educational follow-up.",
    ],
  },
  problems: {
    eyebrow: "PRACTICE BOTTLENECKS",
    heading: "The Costly Operational Challenges Facing Modern Dental Practices",
    subtitle:
      "Front-desk staff spend all day juggling ringing phones, patient check-ins, and insurance verification, leaving critical patient follow-up neglected.",
    items: [
      {
        title: "Costly Patient No-Shows & Last-Minute Cancellations",
        description:
          "When patients forget appointments or cancel 30 minutes prior, hygiene and doctor operatories sit empty, wasting valuable clinical production time.",
        consequence:
          "Thousands of dollars in lost daily chair production that can never be recovered.",
      },
      {
        title: "Overdue 6-Month Hygiene Recall Drop-Off",
        description:
          "Front-desk staff rarely have time to manually call through the list of 500+ patients who are 6, 9, or 12 months overdue for preventative cleanings.",
        consequence:
          "Erosion of the practice's recurring patient base and missed early diagnosis of restorative treatment needs.",
      },
      {
        title: "Unaccepted Treatment Plans Left in Limbo",
        description:
          "Patients nod in agreement when the dentist recommends a crown, implant, or clear aligners, but leave the office without scheduling and are never followed up with.",
        consequence:
          "Tens of thousands in diagnosed treatment revenue left unscheduled each month.",
      },
      {
        title: "Missed Calls During Peak Morning Rush",
        description:
          "Between 8:00 AM and 10:00 AM when front-desk staff are checking in morning patients, dozens of prospective new patient calls go straight to voicemail.",
        consequence:
          "High-intent new patients immediately dial the next dental practice on their insurance list or Google.",
      },
    ],
  },
  solutions: {
    eyebrow: "PRACTICE SOLUTIONS",
    heading: "How GHLVertex Engineers High-Production Dental Systems",
    subtitle:
      "We build automated GoHighLevel systems that run quietly in the background, keeping chairs full and front-desk staff focused on in-office patient care.",
    items: [
      {
        title: "Automated 2-Way SMS Confirmation Flow",
        description:
          "Our system texts patients 48 hours and 2 hours prior to their visit, requiring a simple 'C' to confirm or an automated link to reschedule if needed.",
        deliverables: [
          "Interactive two-way SMS confirmation triggers",
          "Automated alerts to front desk when a patient texts to cancel or reschedule",
          "Standby 'Short-Call' VIP list automated alerts to fill sudden cancellation openings",
          "Digital pre-appointment health history form links sent in advance",
        ],
      },
      {
        title: "Overdue Hygiene Recall Reactivation Engine",
        description:
          "Automated multi-channel sequences that systematically re-engage patients who haven't visited in 6, 9, or 12+ months to book their preventative cleanings.",
        deliverables: [
          "6-month and 12-month automated SMS and email recall sequences",
          "Direct online self-scheduling links for hygiene chair slots",
          "Year-end 'Use Your Dental Insurance Benefits Before They Expire' broadcast campaigns",
          "Automated pause on recall messages once an appointment is booked",
        ],
      },
      {
        title: "Treatment Plan Nurture Pipeline",
        description:
          "Automate educational, low-pressure follow-up for patients with diagnosed restorative or cosmetic treatments that answers common insurance and financing questions.",
        deliverables: [
          "Multi-touch follow-up sequences for crowns, implants, veneers, and Invisalign",
          "Educational video links explaining the risks of delaying restorative treatment",
          "Direct links to third-party healthcare financing pre-qualifications (CareCredit/Sunbit)",
          "Follow-up task notifications for front-desk treatment coordinators",
        ],
      },
      {
        title: "Instant New Patient Speed-to-Lead Triage",
        description:
          "When a new patient calls while staff are busy, an immediate SMS fires within 15 seconds offering appointment booking and answering basic insurance questions.",
        deliverables: [
          "Sub-15 second missed-call SMS text-back",
          "Interactive insurance network compatibility screening",
          "Emergency toothache triage question flow",
          "Direct integration with practice operatory scheduling calendars",
        ],
      },
    ],
  },
  pipeline: {
    eyebrow: "DENTAL PATIENT CRM",
    heading: "Visual Dental Patient & Treatment Lifecycle",
    subtitle:
      "Managing the patient journey from the first inquiry to completed treatment and lifelong bi-annual recall.",
    stages: [
      {
        step: "01",
        name: "New Patient Inquiry",
        detail: "Patient contacts practice; instant SMS verifies dental concern and insurance type.",
      },
      {
        step: "02",
        name: "Appointment Booked",
        detail: "Hygiene or exam booked; digital intake and medical history forms texted automatically.",
      },
      {
        step: "03",
        name: "Confirmed & Attended",
        detail: "2-way SMS confirms attendance; patient undergoes comprehensive exam and cleaning.",
      },
      {
        step: "04",
        name: "Treatment Presented",
        detail: "Doctor presents treatment plan (implant, crown, aligners); automated educational nurture begins.",
      },
      {
        step: "05",
        name: "Treatment Completed",
        detail: "Procedure finished; post-op care instructions texted; automated Google review link sent.",
      },
      {
        step: "06",
        name: "6-Month Recall",
        detail: "Patient tagged for bi-annual hygiene recall; automated outreach fires 5.5 months post-visit.",
      },
    ],
  },
  workflows: {
    eyebrow: "DENTAL WORKFLOWS",
    heading: "Essential Dental Practice Workflows in GoHighLevel",
    subtitle:
      "Automating the recurring patient communication steps that protect clinical production.",
    items: [
      {
        title: "No-Show Elimination 2-Way Confirmation Flow",
        trigger: "Appointment scheduled on dental calendar",
        steps: [
          "3 Days Before: Text and email with appointment details and digital intake paperwork link",
          "48 Hours Before: SMS asking patient to reply 'C' to confirm or click link to reschedule",
          "If unconfirmed at 24 hours: Front desk receives priority notification task to call patient",
          "2 Hours Before: Final SMS reminder with office directions and parking instructions",
        ],
        outcome: "Reduces practice no-show rates from 18% down to under 4%, protecting thousands in chair production.",
      },
      {
        title: "Overdue Hygiene Recall & Benefits Expiration Engine",
        trigger: "Contact tag 'Hygiene Visit' older than 165 days without active future booking",
        steps: [
          "Day 165: Friendly SMS: 'Hi [Name], it's time for your 6-month dental cleaning! Click here to pick a time...'",
          "Day 175: Email explaining the preventative benefits of maintaining healthy gums and tooth enamel",
          "November 1st (Annual): Broadcast campaign reminding patients to utilize remaining dental insurance benefits before December 31st",
          "Automatically pauses all messages as soon as the patient books on the hygiene calendar",
        ],
        outcome: "Reactivates 30–50 overdue hygiene patients every month, generating tens of thousands in preventative and restorative production.",
      },
    ],
  },
  aiUseCases: {
    eyebrow: "DENTAL AI",
    heading: "Practical AI Applications for Dental Practices",
    subtitle:
      "Conversational assistants designed for patient scheduling, insurance FAQs, and appointment routing.",
    safeguardsNote:
      "Dental AI assistants are strictly programmed for administrative scheduling, appointment reminders, and office information. AI never provides clinical diagnosis, medical triage, or dental treatment advice—any emergency symptom inquiries are immediately routed to licensed clinical staff.",
    items: [
      {
        title: "24/7 Front-Desk AI Scheduling Assistant",
        role: "Answers routine patient questions via website chat and SMS after hours.",
        capabilities: [
          "Answers common questions about accepted PPO insurance plans, office hours, and location",
          "Guides new patients to book comprehensive exam and cleaning slots on appropriate calendars",
          "Collects dental concern descriptions (e.g. routine cleaning vs. broken tooth) for clinical notes",
        ],
      },
      {
        title: "Treatment Plan FAQ & Financing Chatbot",
        role: "Answers patient questions about recommended treatments and financing options.",
        capabilities: [
          "Explains step-by-step what happens during a dental implant or crown procedure",
          "Provides links to pre-qualify for interest-free financing options through third-party lenders",
          "Alerts the practice treatment coordinator when a patient expresses readiness to schedule",
        ],
      },
      {
        title: "Post-Op Care & Check-In Assistant",
        role: "Sends automated post-treatment check-in texts following extractions or surgery.",
        capabilities: [
          "Texts post-operative instructions (gauze care, pain management, soft food diet) 2 hours post-visit",
          "Asks patient how they are feeling and immediately flags any reports of excessive pain or bleeding to the on-call doctor",
          "Ensures patients feel cared for while maintaining full clinical safety",
        ],
      },
    ],
  },
  journey: {
    eyebrow: "PATIENT JOURNEY",
    heading: "The Complete Dental Patient Experience",
    subtitle: "From finding the practice to lifelong preventative oral health.",
    stages: [
      {
        phase: "Inquiry / Search",
        channel: "Google / Insurance / Referrals",
        action: "Patient seeks new dentist or has tooth concern; reaches practice phone or website.",
      },
      {
        phase: "Instant Triage",
        channel: "Live Front Desk / Instant SMS",
        action: "Insurance verified; appointment booked; digital paperwork texted.",
      },
      {
        phase: "Operatory Visit",
        channel: "Dental Office Visit",
        action: "Patient arrives; hygiene cleaning performed; doctor presents treatment plan.",
      },
      {
        phase: "Treatment Nurture",
        channel: "Automated SMS / Email",
        action: "Educational follow-up sent for unaccepted care; financing options explained.",
      },
      {
        phase: "Care Completion",
        channel: "Restorative Treatment",
        action: "Crown or implant placed; post-op care texted; Google review collected.",
      },
      {
        phase: "Ongoing Recall",
        channel: "6-Month Automated Recall",
        action: "Patient automatically recalled every 6 months for preventative oral care.",
      },
    ],
  },
  capabilities: {
    eyebrow: "DENTAL GHL FEATURES",
    heading: "Configured GoHighLevel Features for Dental Practices",
    subtitle: "Every platform tool configured to support chair production and patient compliance.",
    items: [
      {
        feature: "Operatory-Specific Calendars",
        practicalUse: "Separates doctor surgical chairs from hygiene preventative chairs with custom procedure buffers.",
      },
      {
        feature: "Two-Way SMS Communication Inbox",
        practicalUse: "Allows front desk to text patients directly from desktop computers without using personal cell phones.",
      },
      {
        feature: "Custom Dental Patient Fields",
        practicalUse: "Tracks insurance provider, primary dentist, last cleaning date, and outstanding treatment balances.",
      },
      {
        feature: "Missed Call Speed-to-Lead Text-Back",
        practicalUse: "Instantly captures new patients who call during busy check-in rush hours.",
      },
      {
        feature: "Automated Google Review Engine",
        practicalUse: "Generates continuous 5-star Google reviews sent automatically right after positive cleanings.",
      },
      {
        feature: "Digital Intake Forms",
        practicalUse: "Collects medical history and contact information on mobile devices before patients arrive in the waiting room.",
      },
    ],
  },
  integrations: {
    eyebrow: "DENTAL TECH STACK",
    heading: "Connecting GoHighLevel with Practice Management",
    subtitle: "We integrate GoHighLevel with your practice communication and marketing channels.",
    items: [
      {
        category: "Practice Management Systems",
        tools: "Dentrix, Eaglesoft, Open Dental",
        useCase: "Sync patient contact records, appointment status, and recall dates via secure middleware and webhooks.",
      },
      {
        category: "Patient Financing Portals",
        tools: "CareCredit, Sunbit, Proceed Finance",
        useCase: "Deliver pre-approval application links automatically in treatment plan follow-up sequences.",
      },
      {
        category: "Patient Lead Channels",
        tools: "Google Ads, Meta Lead Ads, Local SEO",
        useCase: "Capture cosmetic and emergency inquiries instantly and trigger automated booking sequences.",
      },
      {
        category: "Reputation Gateways",
        tools: "Google Business Profile, Healthgrades",
        useCase: "Systematically grow positive public patient reviews to dominate local search rankings.",
      },
    ],
  },
  audience: {
    eyebrow: "TARGET PRACTICES",
    heading: "Dental Practices We Build Systems For",
    subtitle: "Tailored to general, cosmetic, orthodontic, and multi-location practices.",
    segments: [
      {
        name: "General & Family Dentistry",
        idealFor: "Practices focused on bi-annual hygiene recall, family bookings, and routine preventative care.",
      },
      {
        name: "Cosmetic & Implant Centers",
        idealFor: "Clinics selling high-ticket veneers, full-mouth restorations, and dental implants.",
      },
      {
        name: "Orthodontic & Clear Aligner Practices",
        idealFor: "Offices managing multi-stage consult pipelines, digital scans, and monthly payment agreements.",
      },
      {
        name: "Multi-Location Dental Groups (DSOs)",
        idealFor: "Dental organizations requiring centralized call centers and localized subaccounts for each practice.",
      },
    ],
  },
  exampleSystem: {
    title: "Example Dental Hygiene Recall & No-Show Reduction System",
    problem:
      "A 3-dentist family practice had a 19% appointment no-show rate and over 680 past patients who had not attended a hygiene cleaning in more than 9 months. Front-desk staff were overwhelmed with phone calls and had no time to manually contact overdue patients.",
    architecture:
      "We implemented an automated 2-way SMS appointment confirmation system, built a 4-touch overdue hygiene recall reactivation engine, and deployed an instant missed-call text-back sequence.",
    workflowSteps: [
      "Patient appointment booked; automated 48-hour text asks patient to reply 'C' to confirm.",
      "If patient replies 'C', system tags appointment as confirmed and updates clinical schedule.",
      "Overdue hygiene patients at 180 days automatically receive friendly personalized text with direct booking link.",
      "High-value treatment plans (crowns/implants) receive automated 3-part educational follow-up with financing links.",
      "Completed hygiene cleanings automatically receive a Google review request text 90 minutes post-visit.",
    ],
    operationalResult:
      "Appointment no-show rate plummeted from 19% to 3.8%. In the first 60 days, the automated recall workflow reactivated 84 overdue patients, generating over $26,000 in hygiene and associated restorative production.",
  },
  relatedServices: [
    {
      title: "GHL Setup Services",
      href: "/services/ghl-setup-services/",
      description: "Complete account setup, pipeline configuration, calendar routing, and team onboarding.",
      badge: "Foundation",
    },
    {
      title: "Workflow Automation Services",
      href: "/services/workflow-automation-services/",
      description: "Automate patient confirmations, hygiene recalls, and treatment plan follow-up.",
      badge: "Core Service",
    },
    {
      title: "AI Chatbot Development Services",
      href: "/services/ai-chatbot-development-services/",
      description: "Deploy 24/7 conversational chatbots that answer patient FAQs and schedule appointments.",
      badge: "AI Specialty",
    },
  ],
  whyGhlVertex: {
    eyebrow: "WHY CHOOSE GHLVERTEX",
    heading: "Dental Systems Built Around Clinical Production",
    subtitle:
      "We know that empty dental chairs are a practice's largest expense. We build automated systems that protect your schedule.",
    pillars: [
      {
        title: "Chair-Production Focus",
        description:
          "Our workflows are engineered around minimizing operatory downtime and filling sudden schedule gaps with zero manual calling.",
      },
      {
        title: "Two-Way Patient Convenience",
        description:
          "Patients love the ease of confirming appointments via simple text messages, dramatically improving compliance.",
      },
      {
        title: "Ethical & Responsible AI",
        description:
          "We never let AI diagnose or give medical advice. All automated communications are strictly administrative and supportive.",
      },
      {
        title: "Staff-Friendly Desktop UX",
        description:
          "We configure the front-desk interface so team members can view conversations and update statuses without complex training.",
      },
    ],
  },
  faqs: [
    {
      question: "How does GoHighLevel help dental practices?",
      answer:
        "GoHighLevel helps dental practices reduce costly appointment no-shows through two-way SMS confirmations, automatically reactivate overdue hygiene patients without manual cold calling, follow up on unaccepted treatment plans, and collect consistent 5-star Google reviews.",
    },
    {
      question: "How does the two-way SMS confirmation workflow work?",
      answer:
        "The system automatically sends a text message 48 hours before the appointment asking the patient to reply 'C' to confirm. When they reply, the appointment is marked confirmed in the system. If they don't confirm or request a reschedule, the front desk is immediately notified.",
    },
    {
      question: "Can GoHighLevel automatically recall overdue hygiene patients?",
      answer:
        "Yes. We configure automated recall workflows that trigger when a patient reaches 6, 9, or 12 months since their last cleaning without a scheduled visit, sending personalized invitations with direct self-scheduling calendar links.",
    },
    {
      question: "Can GoHighLevel follow up on unaccepted crowns, implants, or Invisalign quotes?",
      answer:
        "Yes. When a treatment plan is presented, GHL can launch an automated educational sequence over 14–21 days that addresses common patient concerns, explains the risks of delaying treatment, and provides direct links to third-party financing applications.",
    },
    {
      question: "Does GoHighLevel provide medical or dental advice?",
      answer:
        "No. We configure GoHighLevel and any associated AI tools strictly for administrative communication, scheduling, and general office information. In all communications, patients are instructed that clinical questions require direct consultation with the dentist.",
    },
    {
      question: "Can GoHighLevel integrate with Dentrix, Eaglesoft, or Open Dental?",
      answer:
        "Yes. While dental practice management software houses clinical charts and billing, GoHighLevel can integrate via webhooks or secure middleware to sync patient contact details, appointment confirmations, and marketing lead intake.",
    },
    {
      question: "How does GoHighLevel help generate Google reviews for dentists?",
      answer:
        "When an appointment is completed in the system, GHL automatically sends a friendly SMS 1 to 2 hours later with a direct link to your Google Business Profile, making it effortless for satisfied patients to leave a 5-star review.",
    },
  ],
  finalCta: {
    heading: "Ready to Eliminate Dental No-Shows & Fill Your Operatories?",
    subtitle:
      "Tell us about your practice type, doctor count, and current recall process, and we'll architect a high-production GoHighLevel system for your team.",
    primaryBtnText: "Book a Dental Strategy Call",
    primaryBtnHref: "https://calendly.com/ghl-vertex1995/30min?month=2026-11",
    secondaryBtnText: "Contact GHLVertex",
    secondaryBtnHref: "/contact/",
  },
};
