"use client";

import React, { useState } from "react";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import { submitApplication } from "@/lib/actions";
import { LinesGradientShader } from "@/components/lines-gradient-shader";
import { CheckCircle2, ChevronLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "Paid Media & Performance",
    experienceYears: 1,
    portfolioLink: "",
    resumeLink: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await submitApplication(formData);
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
    "Operations & Tech"
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
            <div className="mx-auto h-16 w-16 bg-[#00E5AA]/10 rounded-full flex items-center justify-center text-[#00E5AA] mb-6">
              <CheckCircle2 className="size-10 stroke-[2.5]" />
            </div>
            <Heading as="h2" className="text-2xl md:text-3xl font-black mb-4">
              Application Submitted!
            </Heading>
            <p className="text-base text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed mb-8">
              Thank you for applying to NXT Remote. Our operations team will review your portfolio and stack competency. If you pass our initial audit, we will reach out within 24 to 48 hours for a discovery video call.
            </p>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white/70 dark:border-neutral-800 dark:bg-neutral-900/70 p-6 md:p-10 backdrop-blur-md shadow-lg">
            <div>
              <Subheading className="text-brand-secondary font-bold uppercase tracking-wider text-[10px] md:text-xs">
                Apply as NXT Elite Talent
              </Subheading>
              <Heading as="h1" className="text-3xl font-black text-neutral-900 dark:text-white mt-1.5 mb-2 leading-tight">
                Join Our Elite Global Roster
              </Heading>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                Only the top 3% of global digital marketing candidates pass our audits. Share your portfolio and show us your technical capabilities.
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
                  <label htmlFor="fullName" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jane Doe"
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="role" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Primary Specialization <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors cursor-pointer"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experienceYears" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                    Years of Agency Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="experienceYears"
                    required
                    min={0}
                    max={30}
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: Number(e.target.value) || 0 })}
                    className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="resumeLink" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                  LinkedIn Profile / Resume Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="resumeLink"
                  required
                  value={formData.resumeLink}
                  onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="portfolioLink" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                  Portfolio URL / Case Studies (GDrive, WebLink)
                </label>
                <input
                  type="url"
                  id="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  placeholder="https://gdrive.com/my-case-studies"
                  className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide">
                  Describe your stack fluency & top results
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention standard metrics (ROAS, CPC improvements, or CRM automations built) and tool fluency..."
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
                      <Loader2 className="size-4 animate-spin text-white" /> Submitting Application...
                    </>
                  ) : (
                    "Submit Elite Application"
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
