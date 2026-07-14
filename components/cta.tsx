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
    name: "Ethan Kowalski",
    initials: "EK",
    role: "Senior Media Buyer",
    region: "EU · GMT",
    tools: ["Meta", "Google", "TikTok"],
    photo: "/talent/talent-1.jpg",
    gradient: "from-brand-secondary to-brand-primary",
  },
  {
    name: "Camila Duarte",
    initials: "CD",
    role: "Retention Specialist",
    region: "LATAM · EST",
    tools: ["Klaviyo", "Brevo"],
    photo: "/talent/talent-2.jpg",
    gradient: "from-brand-accent to-brand-secondary",
  },
  {
    name: "Diego Salinas",
    initials: "DS",
    role: "Automation Engineer",
    region: "LATAM · CST",
    tools: ["GHL", "HubSpot", "Zapier"],
    photo: "/talent/talent-3.jpg",
    gradient: "from-brand-highlight to-brand-primary",
  },
  {
    name: "Priya Nandakumar",
    initials: "PN",
    role: "Technical SEO Lead",
    region: "APAC · Flex",
    tools: ["Ahrefs", "GSC", "Screaming Frog"],
    photo: "/talent/talent-4.jpg",
    gradient: "from-brand-primary to-brand-secondary",
  },
  {
    name: "Marcus Bellweather",
    initials: "MB",
    role: "Account Manager",
    region: "EU · GMT",
    tools: ["Slack", "ClickUp", "Asana"],
    photo: "/talent/talent-5.jpg",
    gradient: "from-brand-secondary to-brand-highlight",
  },
  {
    name: "Hana Ishikawa",
    initials: "HI",
    role: "Short-form Video Editor",
    region: "APAC · Flex",
    tools: ["Premiere", "CapCut"],
    photo: "/talent/talent-6.jpg",
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#12275C] to-[#0A1834] shadow-[0_8px_32px_rgba(3,10,30,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-accent/40 hover:shadow-[0_20px_48px_rgba(0,229,170,0.15)]">
      {/* Portrait — brand duotone treatment for a consistent art-directed look */}
      <div className="relative aspect-[4/4.4] overflow-hidden">
        {talent.photo ? (
          <img
            src={talent.photo}
            alt={`${talent.name} — ${talent.role}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${talent.gradient}`}
          >
            <span className="font-display text-4xl font-bold text-white/90">
              {talent.initials}
            </span>
          </div>
        )}
        {/* Scrim so the name block reads over the portrait */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#081428] via-[#081428]/60 to-transparent" />
        <span className="absolute top-2.5 right-2.5 rounded-full border border-brand-accent/30 bg-[#050C21]/70 px-2 py-0.5 font-mono text-[8px] font-semibold tracking-[0.15em] text-brand-accent uppercase backdrop-blur-sm">
          Vetted
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 pb-3">
          <p className="truncate text-sm font-bold text-white">
            {talent.name}
          </p>
          <p className="truncate text-xs font-semibold text-brand-accent">
            {talent.role}
          </p>
          <p className="mt-0.5 font-mono text-[10px] text-neutral-300/80">
            {talent.region}
          </p>
        </div>
      </div>

      <div className="p-4 pt-3">
        <div className="flex flex-wrap gap-1.5">
          {talent.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-neutral-200"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1.5 border-t border-white/5 pt-2.5">
          <IconCircleCheckFilled className="size-3.5 text-brand-accent" />
          <span className="font-mono text-[9px] font-semibold tracking-[0.15em] text-neutral-400 uppercase">
            Triple-vetted · Top 3%
          </span>
        </div>
      </div>
    </div>
  );
}
