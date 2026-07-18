"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Megaphone,
  Search,
  Mail,
  Clapperboard,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Button } from "./button";
import { BOOKING_URL } from "@/lib/site";

type Category = "paid-media" | "seo" | "retention" | "creative" | "ops";

const CATEGORIES: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: "paid-media", label: "Paid Media", icon: <Megaphone className="size-4" /> },
  { id: "seo", label: "SEO & Content", icon: <Search className="size-4" /> },
  { id: "retention", label: "Retention & Email", icon: <Mail className="size-4" /> },
  { id: "creative", label: "Creative", icon: <Clapperboard className="size-4" /> },
  { id: "ops", label: "Ops & Automation", icon: <Workflow className="size-4" /> },
];

type Specialist = {
  name: string;
  role: string;
  years: string;
  stack: string;
  photo: string;
  category: Category;
};

const SPECIALISTS: Specialist[] = [
  // Paid Media
  { name: "Arjun Mehta", role: "Senior Media Buyer", years: "8+ Years experience", stack: "Meta, Google, TikTok Ads", photo: "/talent/in-01.jpg", category: "paid-media" },
  { name: "Vikram Nair", role: "Google Ads Strategist", years: "7+ Years experience", stack: "Google Ads, CM360, GA4", photo: "/talent/in-02.jpg", category: "paid-media" },
  { name: "Rohan Kapoor", role: "Meta Ads Lead", years: "6+ Years experience", stack: "Meta, CAPI, AEM", photo: "/talent/in-03.jpg", category: "paid-media" },
  { name: "Aditya Rao", role: "Performance Lead", years: "9+ Years experience", stack: "Cross-channel, MMM, Triple Whale", photo: "/talent/in-04.jpg", category: "paid-media" },
  // SEO & Content
  { name: "Priya Nandakumar", role: "Technical SEO Lead", years: "9+ Years experience", stack: "Ahrefs, GSC, Screaming Frog", photo: "/talent/in-05.jpg", category: "seo" },
  { name: "Ananya Iyer", role: "Content Strategist", years: "6+ Years experience", stack: "Surfer, Semrush, Clearscope", photo: "/talent/in-06.jpg", category: "seo" },
  { name: "Karan Malhotra", role: "Technical SEO Engineer", years: "7+ Years experience", stack: "Log analysis, Schema, CWV", photo: "/talent/in-07.jpg", category: "seo" },
  { name: "Sneha Reddy", role: "Content Operations Lead", years: "8+ Years experience", stack: "Editorial ops, briefs, AI workflows", photo: "/talent/in-08.jpg", category: "seo" },
  // Retention & Email
  { name: "Meera Joshi", role: "Retention & Email Lead", years: "6+ Years experience", stack: "Klaviyo, Brevo, HubSpot", photo: "/talent/in-09.jpg", category: "retention" },
  { name: "Kavya Menon", role: "Lifecycle Marketing Lead", years: "10+ Years experience", stack: "Klaviyo, Braze, segments", photo: "/talent/in-10.jpg", category: "retention" },
  { name: "Ishaan Verma", role: "Email Designer", years: "5+ Years experience", stack: "Figma, MJML, Litmus", photo: "/talent/in-11.jpg", category: "retention" },
  { name: "Divya Krishnan", role: "CRM Specialist", years: "6+ Years experience", stack: "HubSpot, GHL, journeys", photo: "/talent/in-12.jpg", category: "retention" },
  // Creative
  { name: "Aditya Sharma", role: "Brand Designer", years: "7+ Years experience", stack: "Canva, Photoshop, Illustrator", photo: "/talent/in-13.jpg", category: "creative" },
  { name: "Neha Gupta", role: "Graphic Designer", years: "5+ Years experience", stack: "Adobe Express, Canva Pro", photo: "/talent/in-14.jpg", category: "creative" },
  { name: "Riya Desai", role: "UGC Creative Lead", years: "4+ Years experience", stack: "Hooks, scripts, iterations", photo: "/talent/in-15.jpg", category: "creative" },
  { name: "Aryan Khanna", role: "Short-form Video Editor", years: "5+ Years experience", stack: "Premiere, CapCut, After Effects", photo: "/talent/in-16.jpg", category: "creative" },
  // Ops & Automation
  { name: "Sanya Kapoor", role: "Automation Engineer", years: "7+ Years experience", stack: "GHL, Zapier, n8n", photo: "/talent/in-17.jpg", category: "ops" },
  { name: "Rahul Bhatt", role: "GHL Architect", years: "6+ Years experience", stack: "Snapshots, workflows, A2P", photo: "/talent/in-18.jpg", category: "ops" },
  { name: "Pooja Nair", role: "RevOps Specialist", years: "8+ Years experience", stack: "HubSpot ops, attribution", photo: "/talent/in-19.jpg", category: "ops" },
  { name: "Nikhil Menon", role: "Integrations Engineer", years: "5+ Years experience", stack: "APIs, webhooks, Make, n8n", photo: "/talent/in-20.jpg", category: "ops" },
];

export function TalentShowcase() {
  const [active, setActive] = useState<Category>("paid-media");
  const visible = SPECIALISTS.filter((s) => s.category === active);

  return (
    <section className="relative overflow-hidden bg-background section-pad">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            The <span className="text-gradient-brand">top 3%</span> looks like
            this
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Fully vetted. Fully managed. Agency-ready.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-1 border-b border-border pb-px md:gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative flex cursor-pointer items-center gap-2 px-3 py-3 text-xs font-semibold transition-colors md:px-4 md:text-sm ${
                active === cat.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.icon}
              {cat.label}
              {active === cat.id && (
                <motion.span
                  layoutId="talent-tab-underline"
                  className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-[#4f2fe5] to-[#09b4e4]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Clean portrait grid — 4 specialists per category */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <motion.article
                key={s.name}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  {/* brand gradient backdrop behind the clean portrait */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f2fe5]/45 via-[#4f2fe5]/30 to-[#09b4e4]/45" />
                  <img
                    src={s.photo}
                    alt={`${s.name}, ${s.role}`}
                    className="relative aspect-[4/4.6] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020409]/90 to-transparent" />
                  <span className="absolute top-2.5 right-2.5 rounded-full border border-white/20 bg-[#050C21]/70 px-2 py-0.5 font-mono text-[8px] font-semibold tracking-[0.15em] text-white uppercase backdrop-blur-sm">
                    Vetted
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 pb-3">
                    <p className="truncate font-display text-lg font-bold text-white">
                      {s.name}
                    </p>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 font-mono text-xs text-muted-foreground md:text-[13px]">
                  <li className="flex items-center gap-2.5">
                    <span className="text-gradient-brand font-bold">&gt;_</span> {s.role}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-gradient-brand font-bold">&gt;_</span> {s.years}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-gradient-brand font-bold">&gt;_</span> {s.stack}
                  </li>
                </ul>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <p className="font-display text-xl font-bold text-foreground md:text-2xl">
            Can&apos;t see the exact profile you need?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
            Our talent network covers every digital marketing profile,
            whatever the business requirement demands.{" "}
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              Just let us know.
            </Link>
          </p>
          <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-8">
              Book a Discovery Call <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
