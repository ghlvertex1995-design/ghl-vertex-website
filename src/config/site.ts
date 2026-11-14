export const siteConfig = {
  name: "GHLVertex",
  legalName: "GHLVertex",
  tagline: "HighLevel (GHL) CRM, Automation & Systems Agency",
  description:
    "GHLVertex is a premier GoHighLevel (GHL) agency specializing in end-to-end CRM architecture, workflow automation, custom snapshots, and high-converting marketing funnels.",
  url: "https://ghlvertex.com",
  ogImage: "https://ghlvertex.com/og-image.jpg",
  logo: "https://ghlvertex.com/images/logo.png",
  themeColor: "#0f172a",
  keywords: [
    "GoHighLevel Agency",
    "GHLVertex",
    "GoHighLevel CRM Specialist",
    "GHL Workflow Automation",
    "Custom GHL Snapshots",
    "GoHighLevel Marketing Funnels",
    "HighLevel Setup & Migration",
    "CRM Automation Agency",
    "AI Lead Generation Systems",
    "GoHighLevel Integration"
  ],
  author: {
    name: "GHLVertex Team",
    url: "https://ghlvertex.com",
  },
  links: {
    facebook: "https://www.facebook.com/ghlvertex",
    instagram: "https://www.instagram.com/ghlvertex",
    linkedin: "https://www.linkedin.com/company/ghlvertex",
    twitter: "https://x.com/ghlvertex",
    youtube: "https://www.youtube.com/@ghlvertex",
    tiktok: "https://www.tiktok.com/@ghlvertex",
    pinterest: "https://www.pinterest.com/ghlvertex",
    calendly: "https://calendly.com/ghl-vertex1995/30min?month=2026-11"
  },
  contact: {
    email: "info@ghlvertex.com",
    phone: "+1 (555) 000-0000",
    address: {
      streetAddress: "8834 144th St",
      addressLocality: "Queens",
      addressRegion: "NY",
      postalCode: "11435",
      addressCountry: "US",
      full: "8834 144th St, Queens, NY 11435, United States"
    }
  }
} as const;

export type SiteConfig = typeof siteConfig;
