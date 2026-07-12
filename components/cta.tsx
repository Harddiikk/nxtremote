"use client";

import { IconArrowRight, IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "./button";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { whatsappLink } from "@/lib/site";

type TalentCard = {
  initials: string;
  role: string;
  region: string;
  tools: string[];
};

const TALENT: TalentCard[] = [
  { initials: "MB", role: "Senior Media Buyer", region: "LATAM · EST", tools: ["Meta", "Google", "TikTok"] },
  { initials: "SEO", role: "Technical SEO Lead", region: "EU · GMT", tools: ["Ahrefs", "GSC", "Screaming Frog"] },
  { initials: "EM", role: "Retention Specialist", region: "APAC · Flex", tools: ["Klaviyo", "Brevo"] },
  { initials: "AE", role: "Automation Engineer", region: "LATAM · CST", tools: ["GHL", "HubSpot", "Zapier"] },
  { initials: "VE", role: "Short-form Video Editor", region: "APAC · Flex", tools: ["Premiere", "CapCut"] },
  { initials: "AM", role: "Account Manager", region: "EU · GMT", tools: ["Slack", "ClickUp", "Asana"] },
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
      <div className="max-w-xl">
        <Heading as="h2">
          Stop vetting resumes. Start scaling operations.
        </Heading>
        <Subheading className="mt-6 max-w-lg">
          Skip the scrolling, the ghosting, and the onboarding headaches. Tell
          us which specialist your agency is missing — we&apos;ll bring you an
          interview-ready shortlist by day eight.
        </Subheading>
        <Link
          href={whatsappLink("Hi NXT Remote, I'd like to schedule a WhatsApp discovery call.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="mt-8">
            Book a WhatsApp discovery call
            <IconArrowRight className="size-4" />
          </Button>
        </Link>
      </div>

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
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-card">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-primary font-mono text-[10px] font-bold text-white">
          {talent.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-neutral-900 dark:text-white">
            {talent.role}
          </p>
          <p className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
            {talent.region}
          </p>
        </div>
      </div>
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
  );
}
