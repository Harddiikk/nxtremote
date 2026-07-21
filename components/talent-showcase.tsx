"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Palette,
  Code2,
  Clapperboard,
  Bot,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "./button";
import { BOOKING_URL } from "@/lib/site";

type Category = "creative" | "web" | "multimedia" | "ai" | "digital";

const CATEGORIES: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: "creative", label: "Creative", icon: <Palette className="size-4" /> },
  { id: "web", label: "Web & App Development", icon: <Code2 className="size-4" /> },
  { id: "multimedia", label: "Multimedia & Animation", icon: <Clapperboard className="size-4" /> },
  { id: "ai", label: "AI Automation", icon: <Bot className="size-4" /> },
  { id: "digital", label: "Digital Marketing", icon: <Megaphone className="size-4" /> },
];

// One consistent purple-to-blue gradient across every candidate card (client ref image 31).
const CARD_GRADIENT = "from-[#646FE5] via-[#5B8AEA] to-[#8EE3F9]";

type Specialist = {
  name: string;
  role: string;
  years: string;
  stack: string;
  photo: string;
  category: Category;
};

const SPECIALISTS: Specialist[] = [
  // Creative
  { name: "Arjun Mehta", role: "Brand Designer", years: "8+ Years experience", stack: "Figma, Illustrator, Photoshop", photo: "/talent/in-01.jpg", category: "creative" },
  { name: "Priya Nandakumar", role: "Art Director", years: "9+ Years experience", stack: "Brand systems, Figma, Adobe CC", photo: "/talent/in-05.jpg", category: "creative" },
  { name: "Neha Gupta", role: "Graphic Designer", years: "5+ Years experience", stack: "Canva Pro, Photoshop, Illustrator", photo: "/talent/in-14.jpg", category: "creative" },
  { name: "Aditya Sharma", role: "Visual Designer", years: "7+ Years experience", stack: "Figma, Adobe Express, brand kits", photo: "/talent/in-13.jpg", category: "creative" },
  // Web & App Development
  { name: "Vikram Nair", role: "Frontend Developer", years: "7+ Years experience", stack: "React, Next.js, Tailwind", photo: "/talent/in-02.jpg", category: "web" },
  { name: "Karan Malhotra", role: "Full-Stack Developer", years: "8+ Years experience", stack: "Node, Next.js, Postgres", photo: "/talent/in-07.jpg", category: "web" },
  { name: "Sneha Reddy", role: "UI Engineer", years: "6+ Years experience", stack: "React, Framer, TypeScript", photo: "/talent/in-08.jpg", category: "web" },
  { name: "Divya Krishnan", role: "Shopify Developer", years: "6+ Years experience", stack: "Shopify, Liquid, custom themes", photo: "/talent/in-12.jpg", category: "web" },
  // Multimedia & Animation
  { name: "Rohan Kapoor", role: "Video Editor", years: "6+ Years experience", stack: "Premiere Pro, DaVinci, CapCut", photo: "/talent/in-03.jpg", category: "multimedia" },
  { name: "Riya Desai", role: "Motion Designer", years: "5+ Years experience", stack: "After Effects, Premiere, CapCut", photo: "/talent/in-15.jpg", category: "multimedia" },
  { name: "Meera Joshi", role: "Animator", years: "6+ Years experience", stack: "After Effects, Lottie, DaVinci", photo: "/talent/in-09.jpg", category: "multimedia" },
  { name: "Nikhil Menon", role: "VFX Artist", years: "7+ Years experience", stack: "After Effects, Blender, DaVinci", photo: "/talent/in-20.jpg", category: "multimedia" },
  // AI Automation
  { name: "Aditya Rao", role: "Automation Engineer", years: "7+ Years experience", stack: "Zapier, Make, n8n", photo: "/talent/in-04.jpg", category: "ai" },
  { name: "Sanya Kapoor", role: "AI Workflow Specialist", years: "6+ Years experience", stack: "ChatGPT API, n8n, Pabbly", photo: "/talent/in-17.jpg", category: "ai" },
  { name: "Ishaan Verma", role: "Integration Engineer", years: "5+ Years experience", stack: "APIs, webhooks, n8n, Make", photo: "/talent/in-11.jpg", category: "ai" },
  { name: "Kavya Menon", role: "Prompt Engineer", years: "5+ Years experience", stack: "LLMs, prompt design, RAG", photo: "/talent/in-10.jpg", category: "ai" },
  // Digital Marketing
  { name: "Ananya Iyer", role: "Performance Marketer", years: "9+ Years experience", stack: "Meta, Google, TikTok Ads", photo: "/talent/in-06.jpg", category: "digital" },
  { name: "Pooja Nair", role: "SEO Specialist", years: "8+ Years experience", stack: "Ahrefs, GSC, Semrush", photo: "/talent/in-19.jpg", category: "digital" },
  { name: "Rahul Bhatt", role: "Email & CRM", years: "6+ Years experience", stack: "Klaviyo, HubSpot, GHL", photo: "/talent/in-18.jpg", category: "digital" },
  { name: "Aryan Khanna", role: "Content Strategist", years: "5+ Years experience", stack: "Content ops, SEO, briefs", photo: "/talent/in-16.jpg", category: "digital" },
];

export function TalentShowcase() {
  const [active, setActive] = useState<Category>("creative");
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
                {/* Gradient tile: colored frame + colour-cast on the portrait */}
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br p-[3px] shadow-lg ${
                    CARD_GRADIENT
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[15px]">
                    <img
                      src={s.photo}
                      alt={`${s.name}, ${s.role}`}
                      className="relative aspect-[4/4.6] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-25 mix-blend-soft-light ${
                        CARD_GRADIENT
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute top-2.5 right-2.5 rounded-full border border-white/25 bg-black/40 px-2 py-0.5 font-mono text-[8px] font-semibold tracking-[0.15em] text-white uppercase backdrop-blur-sm">
                      Vetted
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4 pb-3">
                      <p className="truncate font-display text-lg font-bold text-white">
                        {s.name}
                      </p>
                      <p className="truncate font-mono text-[10px] tracking-wide text-white/75">
                        {s.role}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-display text-base font-bold text-brand-secondary">
                  {s.role}
                </p>
                <ul className="mt-2 space-y-2 font-mono text-xs text-muted-foreground md:text-[13px]">
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
