"use client";
import React from "react";
import { motion } from "motion/react";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { AnimatedBeamPathIllustration } from "./animated-path";
import { WorldMapSkeleton } from "../features-one/world-map-skeleton";
import { SecuritySkeleton } from "./security-skeleton";
import { EdgeComputing } from "./edge-computing";
import { Compliance } from "./compliance";
import { 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  FileText, 
  MessagesSquare, 
  GitBranch, 
  Sparkles, 
  HardDrive,
  Headphones,
  Power,
  Check,
  X
} from "lucide-react";

export function FeaturesTwo() {
  return (
    <div className="bg-white dark:bg-transparent relative z-10 border-t border-neutral-100 dark:border-white/5">
    <Container className="px-4 section-pad">
      {/* Hyper-Specialization Section */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center mb-24 md:mb-32">
        <div className="max-w-xl">
          <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
            Zero Noise. Zero Generalists. No VAs.
          </Subheading>
          <Heading as="h2" className="mt-2 mb-6">
            100% <span className="text-gradient-brand">Digital Marketing Mastery</span>.
          </Heading>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            Most offshore staffing agencies handle everything from general data entry to accounting. They try to be everything to everyone, and end up providing surface-level generalists who don't know a pixel from a pillar page.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-semibold">
            At NXT Remote, we do one thing passionately: We place elite offshore talent exclusively within the digital marketing domain.
          </p>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Our infrastructure is built for agency founders and marketing directors. We live and breathe performance marketing, conversion metrics (ROAS, LTV), search marketing, custom web building, content operations, and automation architecture.
          </p>
        </div>
        
        {/* Global talent map + specialized connections */}
        <div className="flex w-full flex-col gap-6">
        <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200/50 bg-neutral-50/50 p-4 dark:border-white/5 dark:bg-neutral-900/20">
          <WorldMapSkeleton
            className="w-full"
            pins={[
              { id: "latam", image: "/talent/clean-9.jpg", name: "Camila · LATAM", location: { lat: -12.05, lng: -77.04 } },
              { id: "ee", image: "/talent/clean-7.jpg", name: "Lukas · Eastern Europe", location: { lat: 50.45, lng: 30.52 } },
              { id: "apac", image: "/talent/clean-16.jpg", name: "Dario · APAC", location: { lat: 14.6, lng: 121.0 } },
              { id: "hq", image: "/talent/clean-1.jpg", name: "Your Agency · US/UK", location: { lat: 40.71, lng: -74.0 } },
            ]}
          />
          <p className="mt-2 text-center font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
            Vetted specialists across LATAM, Eastern Europe & APAC
          </p>
        </div>
        <div className="relative flex h-56 w-full items-center justify-center rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/20 border border-neutral-200/50 dark:border-white/5 overflow-hidden">
          <div className="absolute top-1/2 left-[calc(100%/6)] z-10 -translate-x-1/2 -translate-y-1/2">
            <BeamCircle label="Meta Ads" />
          </div>
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <BeamCircle label="NXT Remote" active />
          </div>
          <div className="absolute top-1/2 left-[calc(500%/6)] z-10 -translate-x-1/2 -translate-y-1/2">
            <BeamCircle label="GoHighLevel" />
          </div>
          <div className="absolute top-1/2 left-[calc(100%/6)] w-[calc(200%/6)] -translate-y-1/2">
            <AnimatedBeamPathIllustration />
          </div>
          <div className="absolute top-1/2 left-[calc(300%/6)] w-[calc(200%/6)] -translate-y-1/2">
            <AnimatedBeamPathIllustration delay={1.4} />
          </div>
        </div>
        </div>
      </div>

      <SpecializationCompare />

      <div className="border-t border-neutral-100 dark:border-white/5 my-12" />

      {/* Triple Vetted standard */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
          Rigorous Sourcing Standard
        </Subheading>
        <Heading as="h2" className="mt-2 mb-4">
          We Don't Just Vet Their Skills. We Audit Their{" "}
          <span className="text-gradient-brand">Infrastructure</span>.
        </Heading>
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Every candidate undergoes a grueling 3-stage technical, operational, and physical audit before joining a client shortlist. Skip the resume scrolling and avoid administrative friction.
        </p>
      </div>

      {/* Sourcing & Vetting Pillars Grid Intro */}

      {/* The 7 Mandatory Sourcing Pillars Grid */}
      <div className="mx-auto mt-16 max-w-6xl">
        <h3 className="text-center font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-8">
          Our Sourcing & Vetting Pillars
        </h3>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pillar 1 */}
          <PillarCard
            icon={<Cpu className="size-5 text-brand-secondary" />}
            number="I"
            title="Domain Industry Experience"
            description="Verified history of working utilizing technical skills within digital agencies or e-commerce brands."
          />
          {/* Pillar 2 */}
          <PillarCard
            icon={<Terminal className="size-5 text-brand-secondary" />}
            number="II"
            title="Marketing Stack Fluency"
            description="Fully operational from Day 1 across Meta Business Manager, HubSpot, Klaviyo, and Google Ads."
          />
          {/* Pillar 3 */}
          <PillarCard
            icon={<FileText className="size-5 text-brand-secondary" />}
            number="III"
            title="Portfolio Verification"
            description="Manual reviews of previous project portfolio links, campaign dashboards, and case study files."
          />
          {/* Pillar 4 */}
          <PillarCard
            icon={<MessagesSquare className="size-5 text-brand-secondary" />}
            number="IV"
            title="Communication Nuance"
            description="Rigorously tested for Western client alignment, conceptual speech, and asynchronous copywriting."
          />
          {/* Pillar 5 */}
          <PillarCard
            icon={<GitBranch className="size-5 text-brand-secondary" />}
            number="V"
            title="Project Management Mastery"
            description="Native fluency in agile team tools including Jira, Asana, Slack, and ClickUp workflows."
          />
          {/* Pillar 6 */}
          <PillarCard
            icon={<Sparkles className="size-5 text-brand-secondary" />}
            number="VI"
            title="AI-Ready Workflows"
            description="Assessed on modern AI tooling: prompt-driven ad copy, programmatic SEO, and automated reporting."
          />
          {/* Pillar 7 (Compliance) */}
          <PillarCard
            icon={<ShieldCheck className="size-5 text-brand-secondary" />}
            number="VII"
            title="GDPR & Data Protection"
            description="Contractually bound to NDA terms, credential vault practices (1Password/LastPass), and security training."
          />
        </div>
      </div>
    </Container>
    </div>
  );
}

const GENERALIST_ROLES = [
  "Virtual Assistants",
  "Data Entry",
  "Bookkeeping",
  "Cold Calling",
  "Transcription",
  "Admin Support",
  "Customer Service",
  "General SEO",
  "Web Design",
];

const NXT_ROLES = [
  "Paid Media",
  "SEO & Content",
  "Email & Retention",
  "Creative & Design",
  "Analytics",
  "Automation",
];

function SpecializationCompare() {
  return (
    <div className="mb-24 md:mb-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        {/* Generalist agencies */}
        <div className="rounded-2xl border border-border bg-muted/60 p-6 md:p-8">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-neutral-300/70 text-neutral-600">
              <X className="size-3.5" strokeWidth={3} />
            </span>
            <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
              Generalist Agencies
            </span>
          </div>
          <h3 className="mt-3 font-display text-lg font-bold text-neutral-500">
            A little of everything, mastery of nothing
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {GENERALIST_ROLES.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-neutral-400 line-through decoration-neutral-300"
              >
                {r}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Every role under one roof, so no one is truly vetted for your
            marketing stack. You supervise the gaps.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-[#4f2fe5] to-[#09b4e4] font-display text-sm font-extrabold text-white shadow-md">
            vs
          </span>
        </div>

        {/* NXT Remote */}
        <div className="card-premium relative overflow-hidden rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#4f2fe5] to-[#09b4e4] text-white">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-brand-secondary uppercase">
                NXT Remote
              </span>
            </div>
            <span className="rounded-full bg-gradient-to-r from-[#4f2fe5] to-[#09b4e4] px-2.5 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
              100% Digital Marketing
            </span>
          </div>
          <h3 className="mt-3 font-display text-lg font-bold text-brand-primary dark:text-white">
            One domain, mastered end to end
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {NXT_ROLES.map((r) => (
              <span
                key={r}
                className="rounded-full border border-brand-secondary/25 bg-brand-secondary/5 px-3 py-1.5 text-xs font-semibold text-brand-primary dark:border-brand-accent/40 dark:bg-brand-accent/10 dark:text-white"
              >
                {r}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Every specialist is vetted, tested, and placed exclusively within
            digital marketing. No VAs, no filler.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover="animate"
      initial="initial"
      className="flex min-w-60 flex-col items-center"
    >
      {children}
    </motion.div>
  );
}

function BeamCircle({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${active ? 'border-brand-accent bg-brand-primary' : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900'} shadow-sm`}>
        <div className={`h-3 w-3 rounded-full ${active ? 'bg-brand-accent animate-pulse' : 'bg-brand-secondary'}`} />
      </div>
      <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">{label}</span>
    </div>
  );
}

function FeatureTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-center text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
      {children}
    </h3>
  );
}

function FeatureDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
}

function PillarCard({
  icon,
  number,
  title,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-xl border border-neutral-200 bg-white p-5 shadow-xs transition-all duration-200 hover:border-brand-accent dark:border-white/10 dark:bg-card">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-50 dark:bg-neutral-800/80 group-hover:bg-brand-secondary/10 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-brand-secondary tracking-widest uppercase">
              Pillar {number}
            </span>
          </div>
          <h4 className="text-base font-bold text-neutral-800 dark:text-neutral-100 mt-0.5">
            {title}
          </h4>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
