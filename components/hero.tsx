"use client";

import React from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import { motion } from "motion/react";
import { LinesGradientShader } from "./lines-gradient-shader";
import { Badge } from "./badge";
import { IconArrowRight, IconCircleCheckFilled } from "@tabler/icons-react";
import { whatsappLink } from "@/lib/site";

const STATS = [
  { value: "Top 3%", label: "acceptance rate" },
  { value: "8 hrs", label: "timezone overlap" },
  { value: "70%", label: "payroll savings" },
  { value: "Day 8", label: "interview-ready" },
];

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      <LinesGradientShader
        className="absolute inset-0 bg-transparent opacity-60 dark:bg-transparent"
        bandSpacing={40}
        bandThickness={100}
        waveAmplitude={0.2}
        speed={1}
      />
      {/* Soft radial glow behind the dossier */}
      <div className="pointer-events-none absolute top-1/3 right-[-10%] -z-0 h-[560px] w-[560px] rounded-full bg-brand-secondary/15 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pt-36 pb-20 md:px-8 md:pt-44 md:pb-28 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: message */}
        <div>
          <Badge href="/about">Built exclusively for digital marketing agencies</Badge>

          <h1 className="font-display mt-6 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Elite offshore marketing talent,{" "}
            <span className="bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
              vetted like it&apos;s your own hire
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-300">
            Skip the local hiring crunch. We place pre-vetted media buyers, SEO
            strategists, and automation specialists into your agency — full
            timezone overlap, audited home offices, a fraction of the cost.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/hire">
              <Button size="lg">
                Find your next hire <IconArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore roles
              </Button>
            </Link>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-neutral-200 pt-8 sm:grid-cols-4 dark:border-white/10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                  {stat.value}
                </dd>
                <dd className="mt-1 font-mono text-[10px] tracking-[0.15em] text-neutral-500 uppercase dark:text-neutral-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: the vetting dossier */}
        <DossierCard />
      </div>
    </div>
  );
}

const VETTING_STEPS = [
  { label: "Marketing skill audit", detail: "Meta · Google · GHL", delay: 0.5 },
  { label: "Portfolio & campaign review", detail: "ROAS verified", delay: 0.9 },
  { label: "Hardware & power audit", detail: "UPS + backup fiber", delay: 1.3 },
  { label: "English & culture fit", detail: "Western agency ready", delay: 1.7 },
];

function DossierCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
      {/* Offset card behind, hinting at the shortlist stack */}
      <div className="absolute inset-0 -rotate-3 translate-x-3 translate-y-3 rounded-2xl border border-neutral-200/60 bg-white/40 dark:border-white/5 dark:bg-white/[0.03]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0D1B3E]/90 dark:shadow-[0_24px_80px_rgba(3,10,30,0.6)]"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase dark:text-neutral-500">
            Candidate dossier
          </span>
          <span className="rounded-full bg-brand-accent/15 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-emerald-600 uppercase dark:text-brand-accent">
            Triple-vetted
          </span>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-primary font-display text-sm font-bold text-white">
            SM
          </div>
          <div>
            <p className="font-display text-lg font-bold text-neutral-900 dark:text-white">
              Senior Media Buyer
            </p>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              LATAM · full US EST overlap
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {VETTING_STEPS.map((step) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.delay, duration: 0.4 }}
              className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/80 px-3.5 py-2.5 dark:border-white/5 dark:bg-white/[0.04]"
            >
              <div className="flex items-center gap-2.5">
                <IconCircleCheckFilled className="size-4 shrink-0 text-brand-accent" />
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                  {step.label}
                </span>
              </div>
              <span className="hidden font-mono text-[10px] text-neutral-400 sm:block dark:text-neutral-500">
                {step.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Timezone overlap bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-wider text-neutral-400 uppercase dark:text-neutral-500">
            <span>Your 9–5</span>
            <span>8h shared hours</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "83%" }}
              transition={{ delay: 2.1, duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent"
            />
          </div>
        </div>

        <Link
          href={whatsappLink("Hi NXT Remote, I'd like to meet a shortlist of vetted specialists.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-between rounded-xl bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary/90 dark:bg-white dark:text-brand-primary dark:hover:bg-neutral-100"
        >
          Meet your shortlist
          <IconArrowRight className="size-4" />
        </Link>
      </motion.div>
    </div>
  );
}
