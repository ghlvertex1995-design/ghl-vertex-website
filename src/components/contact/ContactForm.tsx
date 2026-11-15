"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./ContactForm.module.css";

const serviceOptions = [
  "GHL Setup Services",
  "Workflow Automation",
  "SaaS CRM",
  "GoHighLevel White Label Support",
  "AI Consulting",
  "AI Automation",
  "AI Agent Development",
  "AI Chatbot Development",
  "Custom AI Development",
  "AI Integration Services",
  "RAG Development Services",
  "Other",
];

const budgetOptions = [
  "Not sure yet",
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
];

export function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    serviceInterest: "",
    projectDetails: "",
    phone: "",
    websiteUrl: "",
    currentTools: "",
    budgetRange: "Not sure yet",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Please enter your work email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Please enter your company name";
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Please select what you need help with";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please describe your project details";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) {
      const firstErrorField = document.querySelector("[aria-invalid='true']") as HTMLElement;
      if (firstErrorField) firstErrorField.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "49505373-3dda-46bc-a3c5-31a049b28549";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New GHLVertex Inquiry: ${formData.fullName} - ${formData.serviceInterest}`,
          from_name: "GHLVertex Contact Form",
          name: formData.fullName,
          email: formData.workEmail,
          company: formData.companyName,
          phone: formData.phone || "Not provided",
          website: formData.websiteUrl || "Not provided",
          service: formData.serviceInterest,
          budget: formData.budgetRange,
          tools: formData.currentTools || "None specified",
          message: formData.projectDetails,
          botcheck: "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        router.push("/thank-you/");
      } else {
        setSubmitError(data.message || "Unable to send your message. Please try again.");
      }
    } catch {
      setSubmitError(
        "Network error. Please try again or email us directly at info@ghlvertex.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      serviceInterest: "",
      projectDetails: "",
      phone: "",
      websiteUrl: "",
      currentTools: "",
      budgetRange: "Not sure yet",
    });
    setErrors({});
    setSubmitError("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successCard} role="status" aria-live="polite">
        <div className={styles.successIconWrapper}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.successHeading}>Thank You! We Received Your Project Details</h3>
        <p className={styles.successMessage}>
          We will review your business requirements and current setup, then respond directly using the contact information you provided ({formData.workEmail}).
        </p>
        <div className={styles.successActionRow}>
          <Link
            href="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.strategyBtn}
          >
            <span>Book a Strategy Call Now</span>
            <span aria-hidden="true">→</span>
          </Link>
          <button type="button" onClick={handleReset} className={styles.resetBtn}>
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer} id="contact-form">
      <div className={styles.formHeader}>
        <span className={styles.eyebrow}>TELL US ABOUT YOUR PROJECT</span>
        <h2 className={styles.heading}>How Can We Help?</h2>
        <p className={styles.supporting}>
          Share a few details about your business, current setup, and what you want to build or improve.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Row 1: Full Name & Work Email */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="fullName" className={styles.label}>
              <span>
                Full Name <span className={styles.required}>*</span>
              </span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
            />
            {errors.fullName && (
              <span id="fullName-error" className={styles.errorMessage}>
                {errors.fullName}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="workEmail" className={styles.label}>
              <span>
                Work Email <span className={styles.required}>*</span>
              </span>
            </label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="sarah@company.com"
              aria-required="true"
              aria-invalid={!!errors.workEmail}
              aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
              className={`${styles.input} ${errors.workEmail ? styles.inputError : ""}`}
            />
            {errors.workEmail && (
              <span id="workEmail-error" className={styles.errorMessage}>
                {errors.workEmail}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Company Name & Phone */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="companyName" className={styles.label}>
              <span>
                Company Name <span className={styles.required}>*</span>
              </span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Apex Growth Media"
              aria-required="true"
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? "companyName-error" : undefined}
              className={`${styles.input} ${errors.companyName ? styles.inputError : ""}`}
            />
            {errors.companyName && (
              <span id="companyName-error" className={styles.errorMessage}>
                {errors.companyName}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              <span>Phone / WhatsApp</span>
              <span className={styles.optionalBadge}>Optional</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className={styles.input}
            />
          </div>
        </div>

        {/* Row 3: Website URL & Budget Range */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="websiteUrl" className={styles.label}>
              <span>Website URL</span>
              <span className={styles.optionalBadge}>Optional</span>
            </label>
            <input
              type="url"
              id="websiteUrl"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              placeholder="https://yourcompany.com"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="budgetRange" className={styles.label}>
              <span>Budget Range</span>
              <span className={styles.optionalBadge}>Optional</span>
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className={styles.select}
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Service Interest */}
        <div className={styles.field}>
          <label htmlFor="serviceInterest" className={styles.label}>
            <span>
              What do you need help with? <span className={styles.required}>*</span>
            </span>
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.serviceInterest}
            aria-describedby={errors.serviceInterest ? "serviceInterest-error" : undefined}
            className={`${styles.select} ${errors.serviceInterest ? styles.inputError : ""}`}
          >
            <option value="">Select a service category...</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.serviceInterest && (
            <span id="serviceInterest-error" className={styles.errorMessage}>
              {errors.serviceInterest}
            </span>
          )}
        </div>

        {/* Row 5: Current Tools & Platforms */}
        <div className={styles.field}>
          <label htmlFor="currentTools" className={styles.label}>
            <span>Current tools or platforms</span>
            <span className={styles.optionalBadge}>Optional</span>
          </label>
          <input
            type="text"
            id="currentTools"
            name="currentTools"
            value={formData.currentTools}
            onChange={handleChange}
            placeholder="For example: GoHighLevel, n8n, OpenAI, CRM, website, database, internal software, APIs, etc."
            className={styles.input}
          />
        </div>

        {/* Row 6: Project Details Textarea */}
        <div className={styles.field}>
          <label htmlFor="projectDetails" className={styles.label}>
            <span>
              Tell us about your project <span className={styles.required}>*</span>
            </span>
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Describe your current setup, the problem you want to solve, and what you want to build, automate, integrate, or improve."
            aria-required="true"
            aria-invalid={!!errors.projectDetails}
            aria-describedby={errors.projectDetails ? "projectDetails-error" : undefined}
            className={`${styles.textarea} ${errors.projectDetails ? styles.inputError : ""}`}
          />
          {errors.projectDetails && (
            <span id="projectDetails-error" className={styles.errorMessage}>
              {errors.projectDetails}
            </span>
          )}
        </div>

        {/* Anti-bot Honeypot Field */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Submit Error Alert if any */}
        {submitError && (
          <div className={styles.submitErrorAlert} role="alert">
            {submitError}
          </div>
        )}

        {/* Submit Button & Trust Microcopy */}
        <div>
          <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Project Details</span>
                <span aria-hidden="true">→</span>
              </>
            )}
          </button>
          <p className={styles.microcopy}>
            We’ll review your message and respond using the contact information you provide.
          </p>
        </div>
      </form>
    </div>
  );
}
