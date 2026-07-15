"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Subheading, Eyebrow } from "./subheading";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: "Our ad accounts have never been cleaner",
    quote:
      "We handed our Meta and Google accounts to an NXT media buyer in week one. ROAS is up 34% and I got my evenings back.",
    name: "Daniel R.",
    role: "Founder, performance agency · Austin",
  },
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
    title: "The infrastructure audit sold me",
    quote:
      "Backup power, backup internet, noise-cancelled calls. After two years of freelancers ghosting mid-campaign, that audit is worth the fee alone.",
    name: "Priya N.",
    role: "Agency owner · New York",
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
  {
    title: "Scaling without the payroll panic",
    quote:
      "We've added three NXT specialists in six months. Flat monthly pricing means I can quote new retainers knowing my margin to the dollar.",
    name: "Tom E.",
    role: "Founder, full-service agency · Dublin",
  },
];

export function Testimonials() {
  return (
    <section className="relative z-10 border-t border-neutral-100 bg-white section-pad dark:border-white/5 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Agencies that switched</Eyebrow>
          <Heading as="h2" className="mt-3">
            Trusted by founders who were done gambling on freelancers
          </Heading>
          <Subheading className="mx-auto mt-4 max-w-2xl">
            Agency owners across the US, UK, and Australia run their delivery
            teams on NXT Remote placements.
          </Subheading>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 3) * 0.12 }}
      className={cn(
        "break-inside-avoid rounded-2xl border border-neutral-200 bg-white p-6",
        "shadow-sm transition-colors hover:border-brand-secondary/40",
        "dark:border-white/10 dark:bg-card dark:hover:border-brand-accent/30",
      )}
    >
      <p className="font-display text-base font-bold text-neutral-900 dark:text-white">
        &ldquo;{testimonial.title}&rdquo;
      </p>
      <blockquote className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-white/5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 font-mono text-[10px] font-bold text-brand-secondary dark:bg-brand-accent/10 dark:text-brand-accent">
          {testimonial.name.split(" ").map((part) => part[0]).join("")}
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-100">
            {testimonial.name}
          </p>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
