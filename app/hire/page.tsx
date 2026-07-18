"use client";

import React, { useState } from "react";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import { submitLead } from "@/lib/actions";
import { LinesGradientShader } from "@/components/lines-gradient-shader";
import { CheckCircle2, ChevronLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function HirePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    roleNeeded: "Paid Media & Performance",
    budget: "$1,599 - $2,500/mo",
    timeline: "Immediate (1-7 Days)",
    details: ""
  });

  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const combinedPhone = phoneNumber.trim()
      ? `${countryCode} ${phoneNumber.trim()}`
      : "";

    const res = await submitLead({ ...formData, phone: combinedPhone });
    setLoading(false);

    if (res.success) {
      setSuccess(true);
    } else {
      setError(res.error || "An unexpected error occurred.");
    }
  };

  const roles = [
    "Paid Media & Performance",
    "SEO & Content Strategy",
    "Social & Creative",
    "Operations & Tech",
    "Multiple Roles (Scale Team)",
    "Others"
  ];

  const countryCodes = [
    { code: "+1", label: "+1 US/Canada" },
    { code: "+44", label: "+44 UK" },
    { code: "+61", label: "+61 Australia" },
    { code: "+65", label: "+65 Singapore" },
    { code: "+971", label: "+971 UAE" },
    { code: "+49", label: "+49 Germany" },
    { code: "+91", label: "+91 India" },
    { code: "+27", label: "+27 South Africa" },
    { code: "+353", label: "+353 Ireland" },
    { code: "+64", label: "+64 New Zealand" },
    { code: "+31", label: "+31 Netherlands" },
    { code: "+33", label: "+33 France" },
    { code: "+55", label: "+55 Brazil" },
    { code: "+63", label: "+63 Philippines" }
  ];

  const budgets = [
    "$1,599 - $2,500/mo",
    "$2,500 - $5,000/mo",
    "$5,000 - $10,000/mo",
    "Custom Enterprise Contract"
  ];

  const timelines = [
    "Immediate (1-7 Days)",
    "Short Term (2-4 Weeks)",
    "Planning (1-2 Months)",
    "Exploring / Talent Pooling"
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950 pt-28 pb-16">
      <LinesGradientShader
        className="absolute inset-0 bg-transparent dark:bg-transparent -z-10"
        bandSpacing={50}
        bandThickness={80}
        waveAmplitude={0.15}
        speed={0.5}
      />

      <Container className="max-w-2xl px-4 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft className="size-3.5" /> Back to Home
        </Link>

        {success ? (
          <div className="rounded-2xl border border-neutral-200 bg-white/80 dark:border-neutral-800 dark:bg-neutral-900/80 p-8 md:p-12 text-center backdrop-blur-md shadow-lg animate-in fade-in zoom-in-95 duration-300">
            <div className="mx-auto h-16 w-16 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary mb-6">
              <CheckCircle2 className="size-10 stroke-[2.5]" />
            </div>
            <Heading as="h2" className="text-2xl md:text-3xl font-black mb-4">
              Consultation Scheduled!
            </Heading>
            <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed mb-8">
              Your inquiry has been logged. An account coordinator will reach out to schedule a brief discovery call to map out candidate personas and match you with pre-vetted specialists.
            </p>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white/70 dark:border-neutral-800 dark:bg-neutral-900/70 p-6 md:p-10 backdrop-blur-md shadow-lg">
            <div>
              <Subheading className="text-brand-secondary font-bold uppercase tracking-wider text-[10px] md:text-xs">
                Build Your Backend Execution Engine
              </Subheading>
              <Heading as="h1" className="text-3xl font-black text-neutral-900 dark:text-white mt-1.5 mb-2 leading-tight">
                Hire Elite Marketing Talent
              </Heading>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                Save up to 70% on local payroll overhead. Tell us who your agency needs, and get handpicked shortlist interviews in 7-14 days.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Company / Agency Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Scale Agency Ltd"
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="David Miller"
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="david@scaleagency.com"
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Phone / WhatsApp Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      id="countryCode"
                      aria-label="Country code"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-24 shrink-0 rounded-lg border border-neutral-200 bg-white px-2 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors cursor-pointer"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="555-0199"
                      className="block w-full min-w-0 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="roleNeeded" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                  Role You Need to Fill <span className="text-red-500">*</span>
                </label>
                <select
                  id="roleNeeded"
                  value={formData.roleNeeded}
                  onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                  className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors cursor-pointer"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="budget" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Expected Monthly Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors cursor-pointer"
                  >
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Hiring Urgency / Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors cursor-pointer"
                  >
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                  Describe key requirements & stack details
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="E.g., Client niche, required tool fluency (such as HubSpot or Meta Business Suite), or details on custom agency dashboards..."
                  className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full justify-center py-3 flex items-center gap-2 font-bold cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin text-white" /> Logging Lead...
                    </>
                  ) : (
                    "Schedule Hiring Consultation"
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Container>
    </main>
  );
}
