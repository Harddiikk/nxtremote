"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  ClipboardCheck,
  MessagesSquare,
  MonitorPlay,
  ListChecks,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { BOOKING_URL } from "@/lib/site";

const STEPS = [
  {
    day: "Day 1",
    icon: ClipboardCheck,
    title: "Audit & Sourcing",
    detail:
      "We verify portfolios, campaign history, and infrastructure before anyone reaches you.",
  },
  {
    day: "Day 2",
    icon: MessagesSquare,
    title: "Expert Interviews",
    detail:
      "Multiple expert rounds test real skill, English fluency, and agency culture fit.",
  },
  {
    day: "Day 3",
    icon: MonitorPlay,
    title: "Live Skills Test",
    detail:
      "A hands-on exam inside real tools like Meta, Google, and GHL. Not quizzes.",
  },
  {
    day: "Day 4",
    icon: ListChecks,
    title: "Shortlist Prep",
    detail:
      "We score, reference check, and package only the strongest candidates for you.",
  },
  {
    day: "Day 5",
    icon: Handshake,
    title: "You Meet the Top 3%",
    detail:
      "Your interview-ready shortlist lands. You pick, and we onboard your hire.",
  },
];

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-border section-pad">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
            The System Behind Every Placement
          </Subheading>
          <Heading as="h2" className="mt-2">
            Five Days From Brief to Your{" "}
            <span className="text-gradient-brand">Top 3% Shortlist</span>
          </Heading>
        </motion.div>

        {/* Day-by-day timeline */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Animated gradient spine that draws down on scroll */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-2 bottom-2 left-[27px] w-0.5 -translate-x-1/2 overflow-hidden rounded-full md:left-1/2"
          >
            {/* faint track */}
            <div className="absolute inset-0 rounded-full bg-border" />
            {/* growing gradient fill */}
            <motion.div
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "0px 0px -120px 0px" }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute inset-0 rounded-full bg-gradient-to-b from-[#4F2FE5] via-[#6E5CEC] to-[#09B4E4]"
            />
          </div>

          <ol className="relative space-y-10 md:space-y-0">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const leftSide = i % 2 === 0; // desktop alternation
              return (
                <li
                  key={s.day}
                  className="group relative md:grid md:min-h-[132px] md:grid-cols-2 md:items-center"
                >
                  {/* Circular day node sitting on the spine */}
                  <motion.div
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.34, 1.56, 0.64, 1],
                      delay: reduce ? 0 : 0.25 + i * 0.18,
                    }}
                    className="absolute top-0 left-0 z-10 -translate-x-1/2 md:top-1/2 md:left-1/2 md:-translate-y-1/2"
                  >
                    <div className="glass-tile flex size-14 items-center justify-center rounded-full">
                      <Icon className="size-6 text-brand-secondary" />
                    </div>
                    {/* sequential glow pulse */}
                    {!reduce && (
                      <motion.span
                        aria-hidden
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                          opacity: [0, 0.55, 0],
                          scale: [0.8, 1.6, 1.9],
                        }}
                        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                        transition={{
                          duration: 1.1,
                          ease: "easeOut",
                          delay: 0.35 + i * 0.18,
                        }}
                        className="absolute inset-0 rounded-full bg-brand-accent/40"
                      />
                    )}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -70px 0px" }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: reduce ? 0 : 0.35 + i * 0.18,
                    }}
                    className={[
                      "card-premium relative ml-16 rounded-2xl bg-card p-5 md:ml-0 md:max-w-sm",
                      leftSide
                        ? "md:col-start-1 md:mr-auto md:justify-self-end md:pr-6 md:text-right"
                        : "md:col-start-2 md:ml-auto md:justify-self-start md:pl-6 md:text-left",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "text-gradient-brand inline-flex font-mono text-xs font-bold tracking-[0.25em] uppercase",
                        leftSide ? "md:justify-end" : "",
                      ].join(" ")}
                    >
                      {s.day}
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-brand-primary">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.detail}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
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
