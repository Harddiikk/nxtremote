"use client";

import { IconArrowRight, IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "./button";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { BOOKING_URL } from "@/lib/site";

type TalentCard = {
  name: string;
  initials: string;
  role: string;
  region: string;
  tools: string[];
  photo?: string;
  gradient: string;
};

const TALENT: TalentCard[] = [
  {
    name: "Camila Duarte",
    initials: "CD",
    role: "Senior Media Buyer",
    region: "LATAM · EST",
    tools: ["Meta", "Google", "TikTok"],
    gradient: "from-brand-secondary to-brand-primary",
  },
  {
    name: "Marcus Bellweather",
    initials: "MB",
    role: "Technical SEO Lead",
    region: "EU · GMT",
    tools: ["Ahrefs", "GSC", "Screaming Frog"],
    gradient: "from-brand-accent to-brand-secondary",
  },
  {
    name: "Priya Nandakumar",
    initials: "PN",
    role: "Retention Specialist",
    region: "APAC · Flex",
    tools: ["Klaviyo", "Brevo"],
    gradient: "from-brand-highlight to-brand-primary",
  },
  {
    name: "Diego Salinas",
    initials: "DS",
    role: "Automation Engineer",
    region: "LATAM · CST",
    tools: ["GHL", "HubSpot", "Zapier"],
    gradient: "from-brand-primary to-brand-secondary",
  },
  {
    name: "Hana Ishikawa",
    initials: "HI",
    role: "Short-form Video Editor",
    region: "APAC · Flex",
    tools: ["Premiere", "CapCut"],
    gradient: "from-brand-secondary to-brand-highlight",
  },
  {
    name: "Freya Lindqvist",
    initials: "FL",
    role: "Account Manager",
    region: "EU · GMT",
    tools: ["Slack", "ClickUp", "Asana"],
    gradient: "from-brand-accent to-brand-primary",
  },
];

export function CTA() {
  const target = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 100, damping: 50 };
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    springConfig,
  );
  const translateYNegative = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    springConfig,
  );

  return (
    <section
      ref={target}
      className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 section-pad md:grid-cols-2 md:gap-16 md:px-8"
    >
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Heading as="h2">
          Stop vetting resumes. Start scaling operations.
        </Heading>
        <Subheading className="mt-6 max-w-lg">
          Skip the scrolling, the ghosting, and the onboarding headaches. Tell
          us which specialist your agency is missing — we&apos;ll bring you an
          interview-ready shortlist by day eight.
        </Subheading>
        <Link
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="mt-8">
            Book a discovery call
            <IconArrowRight className="size-4" />
          </Button>
        </Link>
      </motion.div>

      <div className="relative max-h-140 overflow-hidden rounded-2xl mask-t-from-50% mask-b-from-50% p-3">
        <div className="grid h-full grid-cols-2 gap-3">
          <motion.div className="flex flex-col gap-3" style={{ y: translateY }}>
            {TALENT.slice(0, 3).map((talent) => (
              <TalentCardItem key={talent.role} talent={talent} />
            ))}
          </motion.div>
          <motion.div
            className="mt-10 flex flex-col gap-3"
            style={{ y: translateYNegative }}
          >
            {TALENT.slice(3).map((talent) => (
              <TalentCardItem key={talent.role} talent={talent} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TalentCardItem({ talent }: { talent: TalentCard }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-card">
      {/* Photo / gradient identity block — swap in a real headshot via talent.photo when available */}
      <div
        className={`relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-br ${talent.gradient}`}
      >
        <div
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:14px_14px] transition-transform duration-500 group-hover:scale-110"
          aria-hidden
        />
        <span className="font-display text-3xl font-bold text-white/90 transition-transform duration-300 group-hover:scale-105">
          {talent.initials}
        </span>
        <span className="absolute top-2 right-2 rounded-full bg-black/25 px-2 py-0.5 font-mono text-[8px] font-semibold tracking-[0.15em] text-white uppercase backdrop-blur-sm">
          Vetted
        </span>
      </div>

      <div className="p-4">
        <p className="truncate text-sm font-bold text-neutral-900 dark:text-white">
          {talent.name}
        </p>
        <p className="truncate text-xs font-semibold text-brand-secondary dark:text-brand-accent">
          {talent.role}
        </p>
        <p className="mt-0.5 font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
          {talent.region}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {talent.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-600 dark:bg-white/5 dark:text-neutral-300"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 border-t border-neutral-100 pt-2.5 dark:border-white/5">
          <IconCircleCheckFilled className="size-3.5 text-brand-accent" />
          <span className="font-mono text-[9px] font-semibold tracking-[0.15em] text-neutral-500 uppercase dark:text-neutral-400">
            Triple-vetted · Top 3%
          </span>
        </div>
      </div>
    </div>
  );
}
