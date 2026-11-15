import { IndustryData } from "@/types/industry";

export const hvacData: IndustryData = {
  slug: "hvac",
  name: "HVAC",
  primaryKeyword: "GoHighLevel for HVAC",
  metaTitle: "GoHighLevel for HVAC Companies | Emergency Intake & Maintenance Workflows",
  metaDescription:
    "Automate emergency heating & cooling calls, service-area qualification, system replacement quote follow-up, and seasonal tune-up agreements with GoHighLevel.",
  canonical: "/industries/hvac/",
  hero: {
    eyebrow: "GOHIGHLEVEL FOR HVAC",
    h1: "GoHighLevel CRM & Emergency Intake Automation for HVAC Contractors",
    description:
      "GHLVertex builds specialized GoHighLevel architectures for residential and commercial heating, ventilation, and air conditioning contractors. We capture after-hours emergency calls, qualify equipment age, dispatch technicians, and automate annual maintenance agreement renewals.",
    primaryCtaText: "Book an HVAC Strategy Call",
    primaryCtaHref: "https://calendly.com/ghl-vertex1995/30min?month=2026-11",
    secondaryCtaText: "View HVAC Workflows",
    secondaryCtaHref: "#workflows",
    targetAudience: "Residential & Commercial Heating & Cooling Contractors",
    outcomeText: "Zero Missed Emergency Calls, Higher System Replacement Closes & Year-Round Maintenance Revenue",
    focusPills: [
      "24/7 Emergency Triage",
      "Seasonal Tune-Up Campaigns",
      "Equipment Age Qualification",
      "System Replacement Pipelines",
      "Maintenance Club Renewals",
      "Technician Zone Dispatch",
    ],
    diagramTitle: "HVAC Emergency & Replacement Architecture",
    diagramSteps: [
      { label: "Emergency Call Inbound", sublabel: "Homeowner has no heat / no AC during extreme weather" },
      { label: "Instant Voice / SMS Triage", sublabel: "AI or automated SMS captures equipment type and address" },
      { label: "Technician Dispatch Alert", sublabel: "On-call tech receives customer details and gate code via SMS" },
      { label: "Diagnostic & Estimate", sublabel: "Repair completed or multi-tier replacement proposal delivered" },
      { label: "Maintenance Agreement", sublabel: "Customer auto-enrolled in bi-annual filter & tune-up club" },
    ],
  },
  directAnswer: {
    question: "What is GoHighLevel for HVAC Companies?",
    answer:
      "GoHighLevel for HVAC is an end-to-end CRM and automation system engineered for heating and air conditioning contractors. It handles urgent after-hours call capture, validates technician service areas, schedules emergency diagnostics, automates multi-stage follow-up on $8,000–$15,000 system replacement quotes, and powers recurring seasonal maintenance agreement reminders.",
    keyTakeaways: [
      "Captures after-hours no-heat/no-AC emergency calls with conversational voice AI and instant text-back.",
      "Automates structured follow-up on high-ticket heat pump and furnace replacement estimates.",
      "Eliminates seasonal revenue dips by automating spring AC and autumn heating tune-up campaigns.",
    ],
  },
  problems: {
    eyebrow: "HVAC FRICTION POINTS",
    heading: "The Seasonal Feast-or-Famine & Emergency Bottlenecks in HVAC",
    subtitle:
      "Extreme weather causes massive phone spikes where hundreds of calls are missed, followed by mild spring and autumn lulls where technicians sit idle.",
    items: [
      {
        title: "Overwhelmed Phone Lines During Weather Spikes",
        description:
          "During the first 90-degree summer heatwave or sub-zero winter freeze, phones ring off the hook. Callers get busy signals and immediately call competitors.",
        consequence:
          "Dozens of high-margin emergency service and changeout opportunities lost during peak profit days.",
      },
      {
        title: "Unaccepted System Replacement Quotes Stalling",
        description:
          "Comfort advisors quote $10,000+ heat pump or furnace replacements, but without structured multi-touch follow-up, homeowners delay or shop price.",
        consequence:
          "Low quote closing rates and wasted hours of comfort advisor drive time and diagnostic labor.",
      },
      {
        title: "Low Maintenance Agreement Renewal Rates",
        description:
          "Contractors fail to automatically remind club members to schedule their spring AC tune-up or renew their annual membership before it lapses.",
        consequence:
          "Severe revenue dry spells during mild shoulder months (April/May and September/October).",
      },
      {
        title: "Technician Field Communication Gaps",
        description:
          "Dispatchers text technicians manually with incomplete addresses, missing equipment brand details, or lacking homeowner gate codes.",
        consequence:
          "Technician delays, frustrated homeowners, and inefficient driving routes across town.",
      },
    ],
  },
  solutions: {
    eyebrow: "HVAC SOLUTIONS",
    heading: "How GHLVertex Architects Profitable HVAC Systems",
    subtitle:
      "We design reliable GoHighLevel systems built around emergency triage, high-ticket quote conversion, and recurring membership retention.",
    items: [
      {
        title: "24/7 Emergency Triage & Speed-to-Lead",
        description:
          "Immediate voice AI or conversational SMS responds to homeowners within 10 seconds of a missed call to capture emergency details and dispatch on-call techs.",
        deliverables: [
          "Urgent triage keyword filters (no heat, freezing, leaking, smell of gas)",
          "Instant on-call technician SMS and push alert routing",
          "Automated caller expectation texts with estimated response times",
          "Direct integration with after-hours diagnostic calendars",
        ],
      },
      {
        title: "High-Ticket Replacement Nurture Pipeline",
        description:
          "Automate professional, consultative follow-up for HVAC system replacement quotes that educates homeowners on SEER2 ratings, rebates, and financing.",
        deliverables: [
          "Multi-touch 14-day quote follow-up sequence via SMS and email",
          "Automated delivery of utility rebate guides and seasonal manufacturer incentives",
          "Direct links to approved financing pre-approval applications",
          "Internal alerts when homeowners re-open proposal PDF links",
        ],
      },
      {
        title: "Seasonal Maintenance Agreement & Tune-Up Engine",
        description:
          "Keep technicians booked during shoulder seasons by automating bi-annual tune-up scheduling for maintenance club members and past customers.",
        deliverables: [
          "Spring AC tune-up automated broadcast and SMS booking links",
          "Fall furnace and heat pump safety inspection campaigns",
          "Automated membership renewal reminders before credit card expirations",
          "Filter replacement order reminder sequences",
        ],
      },
      {
        title: "Zone-Based Calendar & Dispatch Coordination",
        description:
          "Group technicians by geographic zones or service specialties (installation vs. service tech) to minimize windshield drive time.",
        deliverables: [
          "ZIP code-based round-robin calendar booking",
          "Drive-time buffer configurations between appointments",
          "Automated homeowner 'technician on the way' text alerts with technician bio",
          "Mobile photo and model number upload fields",
        ],
      },
    ],
  },
  pipeline: {
    eyebrow: "HVAC CRM PIPELINE",
    heading: "Visual HVAC Diagnostic & Replacement Lifecycle",
    subtitle:
      "Managing the homeowner journey from the initial distress call to system installation and annual maintenance.",
    stages: [
      {
        step: "01",
        name: "Emergency Inbound",
        detail: "Homeowner contacts company; instant triage validates heating/cooling urgency and ZIP code.",
      },
      {
        step: "02",
        name: "Diagnostic Dispatched",
        detail: "Service window scheduled; assigned technician notified with equipment history and gate code.",
      },
      {
        step: "03",
        name: "On-Site Evaluation",
        detail: "Tech diagnoses issue; logs equipment age, serial number, and recommends repair vs. replacement.",
      },
      {
        step: "04",
        name: "Proposal Presented",
        detail: "Good/Better/Best replacement options delivered; automated financing and rebate nurture begins.",
      },
      {
        step: "05",
        name: "Installation Scheduled",
        detail: "Homeowner approves proposal; install crew booked; pre-install preparation checklist texted.",
      },
      {
        step: "06",
        name: "Club Member Active",
        detail: "Installation completed; Google review collected; customer enrolled in bi-annual maintenance club.",
      },
    ],
  },
  workflows: {
    eyebrow: "HVAC AUTOMATIONS",
    heading: "High-Impact HVAC Workflows Configured in GoHighLevel",
    subtitle:
      "Automating the exact communication touchpoints that separate top-tier HVAC companies from struggling operators.",
    items: [
      {
        title: "After-Hours No-Heat / No-Cool Emergency Flow",
        trigger: "Inbound call or web form submitted between 6:00 PM and 7:00 AM",
        steps: [
          "Instant SMS: 'Hi! This is [HVAC Company] emergency dispatch. Are you currently without heating or cooling?'",
          "Caller confirms emergency; system prompts for address and equipment location (attic/closet/basement)",
          "System verifies address against service territory ZIP codes",
          "Sends priority SMS alert with click-to-call link to on-call technician phone",
          "Texts homeowner: 'Our on-call technician [Tech Name] has been dispatched and will call you in 5 minutes.'",
        ],
        outcome: "Locks in premium emergency diagnostic calls before homeowners dial a second contractor.",
      },
      {
        title: "Shoulder-Season AC Tune-Up Reactivation Campaign",
        trigger: "Customer tag 'Installed System' or 'Past Service' older than 180 days with no active booking",
        steps: [
          "Fires in mid-March: SMS offering preferred scheduling for pre-summer AC precision tune-ups",
          "Includes direct self-booking calendar link with zero phone tag required",
          "If no booking in 4 days, sends email highlighting warranty compliance requirements for annual servicing",
          "Automatically pauses outreach once homeowner books an appointment slot",
        ],
        outcome: "Fills 80–120 technician hours in April and May, generating thousands in repair and filter revenue during slow months.",
      },
    ],
  },
  aiUseCases: {
    eyebrow: "HVAC AI ARCHITECTURE",
    heading: "Practical AI Applications for Modern HVAC Contractors",
    subtitle:
      "Conversational voice and chat agents trained specifically on HVAC equipment terminology and triage rules.",
    safeguardsNote:
      "HVAC AI agents are designed solely for customer intake, scheduling, and service territory routing. AI never attempts to diagnose gas leaks or hazardous electrical faults over the phone—in any suspected gas or fire hazard, the AI immediately instructs callers to evacuate and contact 911/emergency utilities.",
    items: [
      {
        title: "24/7 HVAC Emergency Voice Assistant",
        role: "Answers main phone lines to triage emergency service calls day and night.",
        capabilities: [
          "Understands complex homeowner descriptions (e.g. 'condenser outside is frozen', 'furnace clicking')",
          "Captures home square footage, system age, and equipment brand (Trane, Carrier, Lennox, etc.)",
          "Books emergency service visits directly on dispatcher calendars",
        ],
      },
      {
        title: "Replacement Quote Follow-Up Chatbot",
        role: "Engages homeowners reviewing replacement estimates to answer financing questions.",
        capabilities: [
          "Answers questions regarding federal tax credits (Inflation Reduction Act) and utility rebates",
          "Provides monthly payment calculations based on approved financing terms",
          "Alerts the comfort advisor immediately when the homeowner indicates buying readiness",
        ],
      },
      {
        title: "Filter & Tune-Up Rescheduling Assistant",
        role: "Interacts via SMS with maintenance agreement members to confirm or reschedule visits.",
        capabilities: [
          "Answers homeowner texts like 'can we move my furnace checkup to next Saturday morning?'",
          "Checks live calendar availability and confirms updated time slots automatically",
          "Reduces administrative front-desk phone calls by up to 50%",
        ],
      },
    ],
  },
  journey: {
    eyebrow: "HOMEOWNER HVAC JOURNEY",
    heading: "The Homeowner Heating & Cooling Lifecycle",
    subtitle: "From emergency breakdown to lifelong maintenance club member.",
    stages: [
      {
        phase: "Breakdown / Need",
        channel: "Emergency Search / Referrals",
        action: "AC fails on hot day or homeowner plans replacement; contacts contractor.",
      },
      {
        phase: "Rapid Triage",
        channel: "Voice AI / SMS Speed-to-Lead",
        action: "Address and system urgency verified in under 30 seconds.",
      },
      {
        phase: "Diagnostic Visit",
        channel: "Technician Dispatch",
        action: "Tech arrives, tests system, and records equipment age into mobile GHL app.",
      },
      {
        phase: "Proposal & Options",
        channel: "Interactive Digital Proposal",
        action: "Good/Better/Best replacement options delivered with automated financing follow-up.",
      },
      {
        phase: "Installation",
        channel: "Install Crew Dispatch",
        action: "System installed; quality checklist logged; Google review link texted.",
      },
      {
        phase: "Annual Maintenance",
        channel: "Automated Recall Flows",
        action: "Customer receives spring and fall tune-up reminders every 6 months automatically.",
      },
    ],
  },
  capabilities: {
    eyebrow: "HVAC GHL CAPABILITIES",
    heading: "Configured GoHighLevel Features for HVAC Teams",
    subtitle: "Every feature calibrated to heating and cooling operations.",
    items: [
      {
        feature: "Emergency Call Routing & Missed Call Text",
        practicalUse: "Ensures no desperate homeowner with a broken AC or furnace gets left without an answer.",
      },
      {
        feature: "Custom Fields for HVAC Equipment",
        practicalUse: "Tracks system age, refrigerant type (R-410A vs. R-22), filter sizes, and warranty expiration dates.",
      },
      {
        feature: "Round-Robin Service Calendars",
        practicalUse: "Distributes calls fairly among technicians while enforcing territorial drive-time buffers.",
      },
      {
        feature: "Automated Review Request Engine",
        practicalUse: "Captures 5-star Google reviews immediately after a successful cooling or heating fix.",
      },
      {
        feature: "Long-Term Replacement Nurture",
        practicalUse: "Automatically nurtures homeowners with systems older than 12 years with rebate and efficiency education.",
      },
      {
        feature: "Mobile App for Techs in the Field",
        practicalUse: "Provides technicians with complete customer communication history, address directions, and gate codes.",
      },
    ],
  },
  integrations: {
    eyebrow: "HVAC TECH STACK",
    heading: "Connecting GoHighLevel with HVAC Platforms",
    subtitle: "We link GoHighLevel with your existing dispatch and billing software.",
    items: [
      {
        category: "Field Service Platforms",
        tools: "ServiceTitan, Housecall Pro, FieldEdge",
        useCase: "Sync customer details, job completion webhooks, and invoice amounts between platforms.",
      },
      {
        category: "Lead Acquisition Channels",
        tools: "Google Local Services Ads, Meta Lead Ads",
        useCase: "Capture leads instantly and trigger automated emergency triage SMS sequences.",
      },
      {
        category: "Accounting & Payments",
        tools: "QuickBooks Online, Stripe",
        useCase: "Trigger review workflows upon invoice payment and manage monthly maintenance club billing.",
      },
      {
        category: "Telephony Gateways",
        tools: "LC Phone, Twilio, CallRail",
        useCase: "Track marketing channel attribution across trucks, billboards, and Google Ads.",
      },
    ],
  },
  audience: {
    eyebrow: "TARGET HVAC BUSINESSES",
    heading: "HVAC Organizations We Build Systems For",
    subtitle: "Tailored to residential, light commercial, and multi-truck contractors.",
    segments: [
      {
        name: "Residential Service & Replacement Contractors",
        idealFor: "Contractors looking to maximize quote closing rates on new heat pumps and AC changeouts.",
      },
      {
        name: "Emergency 24/7 HVAC Providers",
        idealFor: "Companies specializing in fast emergency response that need bulletproof after-hours call triage.",
      },
      {
        name: "Maintenance Club-Driven Businesses",
        idealFor: "Contractors focused on building predictable recurring revenue through membership agreements.",
      },
      {
        name: "Commercial HVAC Contractors",
        idealFor: "Teams managing commercial preventative maintenance contracts and multi-facility service calls.",
      },
    ],
  },
  exampleSystem: {
    title: "Example HVAC Emergency Triage & Replacement Nurture System",
    problem:
      "An 8-truck HVAC contractor in Texas experienced extreme call spikes during the summer, missing over 60 calls per weekend. Additionally, their comfort advisors closed only 28% of replacement quotes because they had no structured follow-up once the initial estimate was emailed.",
    architecture:
      "We engineered an after-hours voice and SMS emergency triage workflow, built a 5-stage system replacement nurture pipeline with automated financing links, and deployed bi-annual tune-up scheduling campaigns.",
    workflowSteps: [
      "Missed call on a 98-degree Saturday triggers immediate SMS asking if AC is blowing warm air.",
      "Homeowner texts back 'yes, 85 degrees inside with newborn baby'; system flags high-priority dispatch.",
      "On-call tech receives instant push alert, calls customer in 3 minutes, and arrives on site.",
      "Tech determines compressor is seized on a 15-year-old R-22 unit and delivers multi-tier replacement proposal.",
      "Automated follow-up emails utility rebate info on Day 2 and texts approved financing application on Day 4.",
      "Homeowner approves $12,500 heat pump install; system schedules install crew and sends review request post-job.",
    ],
    operationalResult:
      "Captured 34 additional weekend emergency jobs in July alone. Replacement quote closing rate jumped from 28% to 42%, and the company enrolled 118 new homeowners into their annual maintenance agreement club.",
  },
  relatedServices: [
    {
      title: "GHL Setup Services",
      href: "/services/ghl-setup-services/",
      description: "Full account setup, pipeline configuration, calendar routing, and team onboarding.",
      badge: "Foundation",
    },
    {
      title: "Workflow Automation Services",
      href: "/services/workflow-automation-services/",
      description: "Automate emergency triage, technician alerts, and multi-channel follow-up.",
      badge: "Core Service",
    },
    {
      title: "AI Voice & Chatbot Services",
      href: "/services/ai-agent-development-services/",
      description: "Deploy 24/7 conversational voice agents that answer emergency calls and book appointments.",
      badge: "AI Specialty",
    },
  ],
  whyGhlVertex: {
    eyebrow: "WHY CHOOSE GHLVERTEX",
    heading: "HVAC System Architecture Built by Specialists",
    subtitle:
      "We understand HVAC business metrics—from diagnostic call conversion to average ticket size and club membership retention.",
    pillars: [
      {
        title: "Deep Trade Workflow Understanding",
        description:
          "We know the difference between a simple capacitor replacement and a full 16-SEER2 system changeout, and we build pipelines that reflect real trade logic.",
      },
      {
        title: "Speed-to-Lead Reliability",
        description:
          "Our emergency triage workflows fire in seconds, guaranteeing that desperate homeowners get an answer before calling competing contractors.",
      },
      {
        title: "High-Ticket Follow-Up Discipline",
        description:
          "We build multi-touch replacement pipelines that educate homeowners on rebates and financing, systematically increasing average job margins.",
      },
      {
        title: "Seamless Platform Coexistence",
        description:
          "Whether you use ServiceTitan, Jobber, or standalone GHL, we connect your systems cleanly with verified webhooks and zero duplicated data.",
      },
    ],
  },
  faqs: [
    {
      question: "How does GoHighLevel help HVAC companies specifically?",
      answer:
        "GoHighLevel helps HVAC contractors capture urgent emergency calls before homeowners dial competitors, pre-qualify service territories, automate structured follow-up on $10,000+ system replacement quotes, schedule seasonal tune-up campaigns, and generate consistent 5-star Google reviews.",
    },
    {
      question: "Can GoHighLevel handle after-hours emergency HVAC calls?",
      answer:
        "Yes. We configure automated missed-call text-back flows and conversational voice AI agents that answer after-hours calls, identify emergency status (e.g. no heat during freezing temperatures), gather address details, and immediately alert on-call technicians via priority SMS.",
    },
    {
      question: "Can GHL automate our spring and fall maintenance tune-up campaigns?",
      answer:
        "Yes. We build automated seasonal campaigns that reach out to past customers and club members in March/April for AC tune-ups and September/October for heating checks, filling technician schedules during slow shoulder seasons.",
    },
    {
      question: "Can we track equipment details like age and refrigerant type in GoHighLevel?",
      answer:
        "Yes. We configure custom fields for system age, manufacturer brand, model/serial numbers, refrigerant type, filter dimensions, and warranty expiration dates directly inside each customer's contact record.",
    },
    {
      question: "How does GoHighLevel follow up on unaccepted system replacement quotes?",
      answer:
        "When an estimate is presented, GHL initiates a multi-step follow-up sequence over 14–21 days via SMS and email. It delivers utility rebate documentation, manufacturer incentives, and financing options without feeling pushy, systematically increasing quote closing rates.",
    },
    {
      question: "Can GoHighLevel integrate with ServiceTitan or Housecall Pro?",
      answer:
        "Yes. We can configure bidirectional webhook integrations that pass marketing leads from GoHighLevel into ServiceTitan or Housecall Pro for technician dispatch, and update GHL pipelines when jobs are invoiced to trigger automated review requests.",
    },
    {
      question: "Can we prevent out-of-territory callers from booking diagnostic visits?",
      answer:
        "Yes. We implement automated ZIP code screening on all web forms and conversational SMS flows to ensure only homeowners within your licensed service areas can book diagnostic appointments on your technician calendars.",
    },
  ],
  finalCta: {
    heading: "Ready to Build a High-Performance HVAC GoHighLevel System?",
    subtitle:
      "Tell us about your current technician count, emergency call volume, and replacement quote process, and we'll architect a system that scales your business.",
    primaryBtnText: "Book an HVAC Strategy Call",
    primaryBtnHref: "https://calendly.com/ghl-vertex1995/30min?month=2026-11",
    secondaryBtnText: "Contact GHLVertex",
    secondaryBtnHref: "/contact/",
  },
};
