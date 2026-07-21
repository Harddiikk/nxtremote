"use client";
import React from "react";
import { motion } from "motion/react";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
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
              { id: "us", image: "/talent/in-01.jpg", name: "US Client", location: { lat: 40.71, lng: -74.0 } },
              { id: "uk", image: "/talent/in-05.jpg", name: "UK Client", location: { lat: 51.5, lng: -0.12 } },
              { id: "au", image: "/talent/in-03.jpg", name: "Australia Client", location: { lat: -33.86, lng: 151.2 } },
              { id: "hub", image: "/talent/in-06.jpg", name: "India Talent Hub", location: { lat: 20.59, lng: 78.96 } },
            ]}
          />
          <p className="mt-2 text-center font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
            Deployed from India to the US, UK & Australia
          </p>
        </div>
        </div>
      </div>

      <FocusComparison />

      <div className="border-t border-neutral-100 dark:border-white/5 my-12" />

      {/* Triple Vetted standard */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
          Rigorous Sourcing Standard
        </Subheading>
        <Heading as="h2" className="mt-2 mb-4">
          We Don't Just Vet Their Skills. We Validate Their{" "}
          <span className="text-gradient-brand">Infrastructure</span>.
        </Heading>
        <p className="text-base text-neutral-600 dark:text-neutral-200 max-w-2xl mx-auto leading-relaxed">
          Every candidate undergoes a grueling 3-stage technical, operational, and physical screening before joining a client shortlist. Skip the resume scrolling and avoid administrative friction.
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

const OTHERS_SPOKES = [
  "Branding", "Market Research", "Email Marketing", "Social Media Mgmt",
  "Web Development", "SEO", "Content Writing", "Video Production",
  "Graphic Design", "Offline Marketing",
];
const NXT_SPOKES = [
  "SEO", "Social Media Ads", "Paid Advertising",
  "Content Marketing", "Analytics",
];

function RadialHub({
  spokes,
  center1,
  center2,
  nxt = false,
}: {
  spokes: string[];
  center1: string;
  center2: string;
  nxt?: boolean;
}) {
  const N = spokes.length;
  const cx = 240, cy = 210, nodeR = 58, ring = 120;
  return (
    <svg viewBox="0 0 480 420" className="w-full overflow-visible">
      <defs>
        <linearGradient id="nxthub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4F2FE5" />
          <stop offset="1" stopColor="#09B4E4" />
        </linearGradient>
      </defs>
      {spokes.map((s, i) => {
        const ang = (-90 + i * (360 / N)) * (Math.PI / 180);
        const ex = cx + ring * Math.cos(ang);
        const ey = cy + ring * Math.sin(ang);
        const sx = cx + nodeR * Math.cos(ang);
        const sy = cy + nodeR * Math.sin(ang);
        const right = Math.cos(ang) >= 0;
        return (
          <g key={s}>
            <line
              x1={sx} y1={sy} x2={ex} y2={ey} strokeWidth={nxt ? 1.6 : 1.2}
              className={nxt ? "stroke-[#4F2FE5]" : "stroke-neutral-300 dark:stroke-neutral-500"}
            />
            <circle
              cx={ex} cy={ey} r={7} strokeWidth="1.5"
              className={nxt ? "fill-[#09B4E4] stroke-[#4F2FE5]" : "fill-neutral-200 stroke-neutral-300 dark:fill-neutral-400 dark:stroke-neutral-500"}
            />
            <text
              x={ex + (right ? 12 : -12)} y={ey + 3}
              fontSize="11" fontWeight="600"
              textAnchor={right ? "start" : "end"}
              className="fill-neutral-600 dark:fill-neutral-200"
            >
              {s}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={nodeR} fill={nxt ? "url(#nxthub)" : undefined} strokeWidth="2" className={nxt ? "stroke-[#4F2FE5]" : "fill-neutral-200 stroke-neutral-300 dark:fill-neutral-600 dark:stroke-neutral-500"} />
      <text x={cx} y={cy - 3} textAnchor="middle" fontSize={nxt ? 15 : 13} fontWeight="800" className={nxt ? "fill-white" : "fill-neutral-700 dark:fill-white"}>
        {center1}
      </text>
      <text x={cx} y={cy + 15} textAnchor="middle" fontSize="10" fontWeight="600" className={nxt ? "fill-white" : "fill-neutral-500 dark:fill-neutral-200"}>
        {center2}
      </text>
    </svg>
  );
}

function FocusComparison() {
  return (
    <div className="mb-24 md:mb-32">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <Heading as="h2" className="text-2xl md:text-3xl lg:text-3xl">
          Others do everything.{" "}
          <span className="text-gradient-brand">NXT Remote</span> focuses on one thing.
        </Heading>
      </div>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
        {/* Others */}
        <div className="rounded-2xl border border-border bg-muted/40 p-4 md:p-6">
          <div className="mx-auto mb-2 w-fit rounded-lg bg-neutral-800 px-4 py-1.5 text-center dark:bg-neutral-200">
            <p className="text-xs font-bold uppercase tracking-wide text-white dark:text-neutral-900">
              Others / Traditional Agencies
            </p>
            <p className="text-[10px] text-white/70 dark:text-neutral-300">Doing all the stuff</p>
          </div>
          <RadialHub spokes={OTHERS_SPOKES} center1="ALL" center2="ROLES" />
        </div>
        {/* NXT Remote brand mark — the pivot between the two approaches */}
        <div className="flex shrink-0 flex-col items-center justify-center px-2 py-2">
          <div className="rounded-2xl border border-brand-secondary/25 bg-background/70 px-5 py-4 shadow-[0_10px_30px_rgba(32,28,103,0.10)] backdrop-blur-sm">
            <img
              src="/logo-nxr.png"
              alt="NXT Remote"
              className="h-9 w-auto md:h-11 dark:hidden"
            />
            <img
              src="/logo-nxr-white.png"
              alt="NXT Remote"
              className="hidden h-9 w-auto md:h-11 dark:block"
            />
          </div>
        </div>
        {/* NXT Remote */}
        <div className="card-premium rounded-2xl p-4 md:p-6">
          <div className="mx-auto mb-2 w-fit rounded-lg border border-brand-secondary/40 px-4 py-1.5 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-secondary">
              NXT Remote
            </p>
            <p className="text-[10px] text-muted-foreground">Focused on one thing</p>
          </div>
          <RadialHub spokes={NXT_SPOKES} center1="100%" center2="DIGITAL MKT" nxt />
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
      <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-200">{label}</span>
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
    <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-neutral-500 dark:text-neutral-200">
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
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-200">
        {description}
      </p>
    </div>
  );
}
