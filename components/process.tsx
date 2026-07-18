"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ClipboardCheck, MessagesSquare, MonitorPlay, Handshake, ArrowRight } from "lucide-react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { BOOKING_URL } from "@/lib/site";

const STEPS = [
  {
    icon: <ClipboardCheck className="size-6 text-brand-secondary" />,
    step: "01",
    title: "We Audit",
    detail: "Portfolio, campaign history, and infrastructure, verified before anyone talks to you.",
  },
  {
    icon: <MessagesSquare className="size-6 text-brand-secondary" />,
    step: "02",
    title: "We Interview",
    detail: "Multiple expert rounds for skill, English fluency, and agency culture fit.",
  },
  {
    icon: <MonitorPlay className="size-6 text-brand-secondary" />,
    step: "03",
    title: "We Test Live",
    detail: "Hands-on exam in real tools like Meta, Google, and GHL. Not multiple-choice quizzes.",
  },
  {
    icon: <Handshake className="size-6 text-brand-secondary" />,
    step: "04",
    title: "You Meet the Top 3%",
    detail: "An interview-ready shortlist on your desk by day five. You pick, we onboard.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-t border-border section-pad">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
            The System Behind Every Placement
          </Subheading>
          <Heading as="h2" className="mt-2">
            Four Steps Before You Ever{" "}
            <span className="text-gradient-brand">Meet a Candidate</span>
          </Heading>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line (desktop) */}
          <div
            aria-hidden
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-[#1090e0] via-[#4040e0] to-[#7a3bff] opacity-40 lg:block"
          />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              className="group relative text-center"
            >
              <div className="glass-tile relative z-10 mx-auto flex size-14 items-center justify-center rounded-2xl">
                {s.icon}
              </div>
              <p className="text-gradient-brand mt-4 font-mono text-sm font-bold tracking-[0.25em]">
                {s.step}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Book a Discovery Call <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
