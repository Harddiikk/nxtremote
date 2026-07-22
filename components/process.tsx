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
    image: "/talent/in-13.jpg",
    title: "Screening & Sourcing",
    detail:
      "We verify portfolios, campaign history, and infrastructure before anyone reaches you.",
  },
  {
    day: "Day 2",
    icon: MessagesSquare,
    image: "/talent/in-05.jpg",
    title: "Expert Interviews",
    detail:
      "Multiple expert rounds test real skill, English fluency, and agency culture fit.",
  },
  {
    day: "Day 3",
    icon: MonitorPlay,
    image: "/talent/in-02.jpg",
    title: "Live Skills Test",
    detail:
      "A hands-on exam inside real tools like Meta, Google, and GHL. Not quizzes.",
  },
  {
    day: "Day 4",
    icon: ListChecks,
    image: "/talent/in-19.jpg",
    title: "Shortlisted Portfolios",
    detail:
      "We score, reference check, and package only the strongest candidates for you.",
  },
  {
    day: "Day 5",
    icon: Handshake,
    image: "/talent/in-06.jpg",
    title: "You Meet the Top 3%",
    detail:
      "Your interview-ready shortlist lands. You pick, and we onboard your hire.",
  },
];

/**
 * Horizontal 5-step row of glassy terminal cards with candidate imagery.
 * Cards straighten and expand on hover to reveal each step's detail.
 * Reused on the home page and the services "How We Hire" section.
 */
export function ProcessSteps() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* gradient rail behind the row, draws in on scroll */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-4 left-4 hidden h-0.5 -translate-y-1/2 overflow-hidden rounded-full lg:block"
      >
        <div className="absolute inset-0 bg-white/10" />
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{ originX: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-[#4F2FE5] via-[#2A7EE9] to-[#09B4E4]"
        />
      </div>

      <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.li
              key={s.day}
              initial={reduce ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -70px 0px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: reduce ? 0 : 0.15 + i * 0.14,
              }}
              className="pcard group relative z-10 p-4"
            >
              {/* terminal traffic lights */}
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff605c] shadow-[-3px_3px_4px_rgba(0,0,0,0.28)]" />
                <span className="size-2.5 rounded-full bg-[#ffbd44] shadow-[-3px_3px_4px_rgba(0,0,0,0.28)]" />
                <span className="size-2.5 rounded-full bg-[#00ca4e] shadow-[-3px_3px_4px_rgba(0,0,0,0.28)]" />
                <span className="ml-auto font-mono text-[10px] font-bold tracking-[0.2em] text-brand-accent uppercase">
                  {s.day}
                </span>
              </div>

              {/* step imagery */}
              <div className="relative mt-3 overflow-hidden rounded-lg">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-24 w-full object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12]/70 via-transparent to-transparent" />
                <div className="absolute bottom-1.5 left-1.5 flex size-7 items-center justify-center rounded-md bg-white/90 shadow-md">
                  <Icon className="size-4 text-brand-secondary" />
                </div>
              </div>

              <h3 className="mt-3 font-display text-sm font-bold text-white">
                {s.title}
              </h3>

              {/* revealed on hover */}
              <div className="pcard-detail">
                <p className="mt-2 text-xs leading-relaxed text-neutral-200">
                  {s.detail}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

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

        <div className="mt-16">
          <ProcessSteps />
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
