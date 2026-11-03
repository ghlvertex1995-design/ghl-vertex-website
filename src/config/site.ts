export const siteConfig = {
  name: "GHL Vertex",
  legalName: "GHL Vertex Agency",
  tagline: "HighLevel (GHL) CRM, Automation & Systems Agency",
  description:
    "GHL Vertex is a premier GoHighLevel (GHL) agency specializing in end-to-end CRM architecture, workflow automation, custom snapshots, and high-converting marketing funnels.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ghlvertex.com",
  ogImage: "https://ghlvertex.com/og-image.jpg",
  themeColor: "#0f172a",
  keywords: [
    "GoHighLevel Agency",
    "GHL Vertex",
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
    name: "GHL Vertex Team",
    url: "https://ghlvertex.com",
  },
  links: {
    facebook: "https://www.facebook.com/ghlvertex",
    instagram: "https://www.instagram.com/ghlvertex",
    linkedin: "https://www.linkedin.com/company/ghlvertex",
    twitter: "https://x.com/ghlvertex",
    youtube: "https://www.youtube.com/@ghlvertex",
    tiktok: "https://www.tiktok.com/@ghlvertex",
    pinterest: "https://www.pinterest.com/ghlvertex"
  },
  contact: {
    email: "contact@ghlvertex.com",
    phone: "+1 (555) 000-0000",
    address: {
      streetAddress: "123 Business Way",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US"
    }
  }
} as const;

export type SiteConfig = typeof siteConfig;
