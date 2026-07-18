"use client";

import React from "react";
import { Button } from "@/components/button";
import Link from "next/link";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { LinesGradientShader } from "./lines-gradient-shader";
import { BOOKING_URL } from "@/lib/site";

const STATS = [
  { value: "Top 3%", label: "Vetted Candidates" },
  { value: "70%", label: "payroll savings" },
  { value: "Day 5", label: "interview-ready" },
];

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.14, duration: 0.6, ease: [0.21, 0.65, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden text-foreground">
      {/* Flowing gradient bands — the visible hero background animation */}
      <LinesGradientShader
        className="absolute inset-0 bg-transparent opacity-50"
        bandSpacing={44}
        bandThickness={110}
        waveAmplitude={0.22}
        speed={1}
      />
      {/* Ambient aurora — slow drifting glow orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[15%] right-[5%] -z-0 h-[480px] w-[480px] rounded-full bg-brand-secondary/15 blur-[140px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 40, 0], y: [0, 35, -25, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[30%] left-[2%] -z-0 h-[420px] w-[420px] rounded-full bg-brand-accent/8 blur-[130px]"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-36 pb-16 text-center md:px-8 md:pt-44 md:pb-24">
        <motion.h1
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-display text-4xl font-bold tracking-tight text-balance text-primary sm:text-6xl md:text-7xl"
        >
          Elite offshore <span className="text-gradient-brand">digital marketing</span> talent
        </motion.h1>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl"
        >
          Fully managed, vetted like it&apos;s your own hire
        </motion.p>

        {/* The giant TOP 3% treatment */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-14"
        >
          <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Discover
          </p>
          <p className="font-display mt-2 text-7xl leading-none font-extrabold tracking-tight sm:text-8xl md:text-[9rem]">
            <span className="text-outline">TOP</span>{" "}
            <span className="bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
              3%
            </span>
          </p>
          <p className="font-display mt-4 text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">
            <span className="text-gradient-brand">Digital Marketing</span>{" "}
            <span className="font-normal text-muted-foreground">Specialists</span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            26 months average specialist tenure.
            <br className="sm:hidden" /> Interview-ready shortlist in 5 days.
          </p>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-12 flex w-full max-w-md flex-col items-center gap-3"
        >
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button size="lg" className="w-full justify-center">
              Book a call today <IconArrowRight className="size-4" />
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">No commitment.</span>{" "}
            30 minutes. Shortlist in 5 days.
          </p>
        </motion.div>

        <motion.dl
          variants={rise}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mx-auto mt-16 grid w-full max-w-xl grid-cols-3 gap-x-8 gap-y-6 border-t border-border pt-8"
        >
          {STATS.map((stat, statIdx) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + statIdx * 0.1, duration: 0.45, ease: "easeOut" }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
