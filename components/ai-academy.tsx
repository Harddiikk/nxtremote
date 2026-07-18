"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Download, FileText, Check, ArrowRight } from "lucide-react";
import { Heading } from "./heading";
import { Subheading, Eyebrow } from "./subheading";
import { submitLead } from "@/lib/actions";

const PLAYBOOK_PDF = "/nxt-remote-agency-playbook.pdf";

const INSIDE = [
  "Why agencies stall at the same growth ceiling, and how to break it",
  "A 5-point vetting system that actually predicts on-the-job performance",
  "The week-one embed plan that turns a hire into a long-term asset",
  "A quick-start checklist for hiring your first offshore specialist",
];

export function AiAcademy() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState("");

  function triggerDownload() {
    const a = document.createElement("a");
    a.href = PLAYBOOK_PDF;
    a.download = "NXT-Remote-Agency-Playbook.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please add your name and work email.");
      return;
    }
    setStatus("loading");
    // Reuse the existing lead pipeline, tagged as an Academy download.
    const res = await submitLead({
      companyName: "Academy Download",
      contactName: name.trim(),
      email: email.trim(),
      phone: "",
      roleNeeded: "Resource: Agency Playbook",
      budget: "",
      timeline: "",
      details: "Downloaded the NXT Academy playbook: How to Build a High-Performance Remote Marketing Team.",
    });
    if (!res.success) {
      setStatus("idle");
      setError(res.error || "Something went wrong. Please try again.");
      return;
    }
    setStatus("done");
    triggerDownload();
  }

  return (
    <section className="relative overflow-hidden border-t border-border section-pad">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: pitch */}
          <div>
            <Eyebrow>NXT Academy</Eyebrow>
            <Heading as="h2" className="mt-3">
              The agency owner&rsquo;s guide to{" "}
              <span className="text-gradient-brand">remote marketing teams</span>
            </Heading>
            <Subheading className="mt-4 max-w-xl">
              A free, practical playbook on sourcing, vetting, and retaining
              offshore digital marketing specialists who perform like in-house
              hires. Built from how we place the top 3%.
            </Subheading>

            <ul className="mt-8 space-y-3">
              {INSIDE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4f2fe5] to-[#09b4e4]">
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: cover + gated form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="card-premium rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4">
              <div className="relative hidden h-28 w-[86px] shrink-0 overflow-hidden rounded-lg border border-border shadow-md sm:block">
                <img
                  src="/playbook-cover.png"
                  alt="NXT Remote Agency Playbook cover"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-brand-secondary uppercase">
                  <FileText className="size-3" /> Free PDF Playbook
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-primary">
                  How to Build a High-Performance Remote Marketing Team
                </h3>
              </div>
            </div>

            {status === "done" ? (
              <div className="mt-6 rounded-xl border border-border bg-muted p-5 text-center">
                <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-[#4f2fe5] to-[#09b4e4]">
                  <Check className="size-5 text-white" strokeWidth={3} />
                </span>
                <p className="mt-3 font-display text-base font-bold text-brand-primary">
                  Your playbook is downloading.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  If it did not start,{" "}
                  <a
                    href={PLAYBOOK_PDF}
                    download
                    className="font-semibold text-brand-secondary underline underline-offset-2"
                  >
                    click here to download it
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 focus:outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 focus:outline-none"
                />
                {error && <p className="text-xs text-destructive">{error}</p>}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#4f2fe5] to-[#09b4e4] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    "Preparing your download..."
                  ) : (
                    <>
                      <Download className="size-4" /> Get the free playbook
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  No spam. We send the playbook and the occasional hiring insight.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
