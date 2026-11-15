"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function ThankYouTracker() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "generate_lead",
        conversion_type: "contact_form",
        page_title: "Thank You",
        page_location: window.location.href,
        page_path: "/thank-you/",
      });
    }
  }, []);

  return null;
}
