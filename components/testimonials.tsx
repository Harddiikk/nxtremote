"use client";

import React from "react";
import { motion } from "motion/react";
import { Heading } from "./heading";
import { Subheading, Eyebrow } from "./subheading";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
};

const FEATURED = {
  title: "Our ad accounts have never been cleaner",
  quote:
    "We handed our Meta and Google accounts to an NXT media buyer in week one. ROAS is up 34% and I got my evenings back. Every candidate we interviewed was already tested on the exact stack we run.",
  name: "Daniel R.",
  role: "Founder, performance agency · Austin",
  photo: "/talent/clean-4.jpg",
  stats: [
    { value: "+34%", label: "ROAS in one quarter" },
    { value: "Day 8", label: "from call to hire" },
    { value: "70%", label: "payroll saved" },
  ],
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: "Feels like an in-house hire",
    quote:
      "Full overlap with our EST hours, daily stand-ups in our Slack, and zero onboarding drama. Our clients have no idea she isn't sitting in our office.",
    name: "Meghan T.",
    role: "COO, growth studio · Toronto",
  },
  {
    title: "The vetting is the real product",
    quote:
      "Every candidate we interviewed was already tested on GHL and HubSpot. We hired the first shortlist they sent, eight days after the discovery call.",
    name: "Louis B.",
    role: "Managing Director · London",
  },
  {
    title: "70% cheaper, zero quality drop",
    quote:
      "We replaced a $7k/month local hire with an NXT specialist at a flat rate. Same output, better reporting discipline, no recruiter fees.",
    name: "Sofia K.",
    role: "Founder, ecom agency · Miami",
  },
  {
    title: "SEO ops finally run on schedule",
    quote:
      "Our content pipeline used to slip every month. Our NXT strategist rebuilt it in ClickUp and we haven't missed a publish date since.",
    name: "James W.",
    role: "Head of SEO · Manchester",
  },
  {
    title: "Replaced in 48 hours",
    quote:
      "One placement wasn't a culture fit. NXT swapped in a new specialist within two days, free, mid-quarter.",
    name: "Marcus D.",
    role: "CEO, paid social agency · Chicago",
  },
  {
    title: "Email revenue up 41%",
    quote:
      "Our Klaviyo specialist rebuilt every flow in the first month. Retention revenue is now our fastest-growing line item.",
    name: "Hannah S.",
    role: "Founder, DTC agency · Sydney",
  },
];

export function Testimonials() {
  return (
    <section className="relative z-10 border-t border-neutral-100 bg-white section-pad dark:border-white/5 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Agencies that switched</Eyebrow>
          <Heading as="h2" className="mt-3">
            Trusted by founders who were done{" "}
            <span className="text-gradient-brand">gambling on freelancers</span>
          </Heading>
          <Subheading className="mx-auto mt-4 max-w-2xl">
            Agency owners across the US, UK, and Australia run their delivery
            teams on NXT Remote placements.
          </Subheading>
        </div>

        {/* Featured case study */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="card-premium mt-12 grid grid-cols-1 overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(2,8,26,0.5)] md:grid-cols-[1fr_260px]"
        >
          <div className="p-7 md:p-9">
            <span className="font-mono text-4xl leading-none text-gradient-brand">
              &ldquo;
            </span>
            <p className="font-display text-xl font-bold text-neutral-900 md:text-2xl dark:text-white">
              {FEATURED.title}
            </p>
            <blockquote className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {FEATURED.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-neutral-900 dark:text-white">
                {FEATURED.name}
              </span>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">
                · {FEATURED.role}
              </span>
            </figcaption>
            <div className="mt-7 flex flex-wrap gap-6 border-t border-neutral-100 pt-6 dark:border-white/10">
              {FEATURED.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-gradient-brand md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-[0.15em] text-neutral-500 uppercase dark:text-neutral-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src={FEATURED.photo}
              alt="NXT Remote media buyer placed with a performance agency"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card to-transparent" />
          </div>
        </motion.figure>

        {/* Uniform quote grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.1 }}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 dark:border-white/10 dark:bg-card"
            >
              <p className="font-display text-base font-bold text-neutral-900 dark:text-white">
                &ldquo;{t.title}&rdquo;
              </p>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-white/5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1090e0] to-[#7a3bff] font-mono text-[10px] font-bold text-white">
                  {t.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-100">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
