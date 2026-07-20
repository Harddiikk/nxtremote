import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import { CTA } from "@/components/cta";
import { LinesGradientShader } from "@/components/lines-gradient-shader";
import { 
  Megaphone, 
  Search, 
  Palette, 
  Settings2, 
  ArrowRight, 
  SearchCode, 
  UserCheck, 
  Users, 
  Activity 
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dedicated Remote Marketing Specialists & Media Buyers | NXT Remote",
  description:
    "On-demand offshore staffing for every marketing vertical. Hire pre-vetted remote media buyers, SEO strategists, designers, and HubSpot/GoHighLevel architects. Interview-ready shortlist in 5 days.",
  keywords: [
    "offshore staffing solutions",
    "digital marketing remote talent",
    "hire remote media buyers",
    "agency staffing solutions",
    "offshore marketing team"
  ],
  openGraph: {
    title: "Dedicated Remote Marketing Specialists & Media Buyers | NXT Remote",
    description:
      "On-demand offshore staffing for every marketing vertical. Sourcing pre-vetted specialists in Paid Media, SEO, Social, and Marketing Operations.",
    type: "website",
  },
};

const specializations = [
  {
    role: "Paid Media & Performance",
    competencies: "Meta Ads, Google PPC, TikTok Ads, ROAS Optimization, Media Buying",
    time: "3 to 5 Days",
    icon: <Megaphone className="size-5 text-[#09B4E4]" />,
    color: "border-[#0B75E2]/30 dark:border-[#0B75E2]/15"
  },
  {
    role: "SEO & Content Strategy",
    competencies: "Technical Screening, Link Building, On-Page SEO, Content Operations",
    time: "Within 5 Days",
    icon: <Search className="size-5 text-[#09B4E4]" />,
    color: "border-[#06BCB0]/30 dark:border-[#06BCB0]/15"
  },
  {
    role: "Social & Creative",
    competencies: "Brand Strategy, Copywriting, Video Editing (Short-form), Design",
    time: "3 to 5 Days",
    icon: <Palette className="size-5 text-[#09B4E4]" />,
    color: "border-purple-500/30 dark:border-purple-500/15"
  },
  {
    role: "Operations & Tech",
    competencies: "Hubspot/GoHighLevel Architecture, Marketing Automation, Data Analytics",
    time: "Within 5 Days",
    icon: <Settings2 className="size-5 text-[#09B4E4]" />,
    color: "border-pink-500/30 dark:border-pink-500/15"
  }
];

const timelineSteps = [
  {
    day: "Day 1-2",
    title: "Discovery & Role Profiling",
    description: "We analyze your agency's tech stack, current client deliverables, and workflow dynamics to map out the ideal candidate persona.",
    icon: <SearchCode className="size-5 text-[#0B1D45] dark:text-[#09B4E4]" />,
    gradient: "bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10 border-brand-secondary/20 dark:from-brand-secondary/15 dark:to-brand-accent/10 dark:border-brand-secondary/25"
  },
  {
    day: "Day 3",
    title: "Rigorous Vetting & Screening",
    description: "Our industry experts screen candidates through multi-stage technical assessments, live portfolio reviews, and communication evaluations.",
    icon: <UserCheck className="size-5 text-[#0B1D45] dark:text-[#09B4E4]" />,
    gradient: "bg-gradient-to-br from-brand-secondary/12 to-brand-accent/12 border-brand-secondary/20 dark:from-brand-secondary/18 dark:to-brand-accent/12 dark:border-brand-secondary/25"
  },
  {
    day: "Day 4",
    title: "Curated Shortlist Interviews",
    description: "You interview the top 2-3 handpicked candidates who perfectly match your culture and skill requirements.",
    icon: <Users className="size-5 text-[#0B1D45] dark:text-[#09B4E4]" />,
    gradient: "bg-gradient-to-br from-brand-secondary/10 to-brand-accent/14 border-brand-accent/20 dark:from-brand-secondary/15 dark:to-brand-accent/16 dark:border-brand-accent/25"
  },
  {
    day: "Day 5",
    title: "Onboarding & Integration",
    description: "We manage contracts, payroll setup, and initial onboarding safeguards for a seamless transition into your Slack, ClickUp, or Asana workspaces.",
    icon: <Activity className="size-5 text-[#0B1D45] dark:text-[#09B4E4]" />,
    gradient: "bg-gradient-to-br from-brand-secondary/8 to-brand-accent/16 border-brand-accent/20 dark:from-brand-secondary/12 dark:to-brand-accent/18 dark:border-brand-accent/25"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 border-b border-neutral-100 dark:border-white/5 bg-white dark:bg-transparent">
        <LinesGradientShader
          className="absolute inset-0 bg-transparent dark:bg-transparent -z-10"
          bandSpacing={50}
          bandThickness={80}
          waveAmplitude={0.15}
          speed={0.8}
        />
        <Container className="relative z-10 text-center max-w-4xl px-4">
          <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
            Offshore Specializations
          </Subheading>
          <Heading as="h1" className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            On-Demand Offshore Staffing for Every Marketing Vertical
          </Heading>
          <p className="mt-6 text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            From media buyers to technical SEOs, we source the exact skill sets you need to deliver exceptional client results.
          </p>
        </Container>
      </section>

      {/* Specializations Table Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-transparent">
        <Container className="px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Subheading className="text-brand-highlight font-semibold tracking-wider text-xs uppercase">
              Our Competence Focus
            </Subheading>
            <Heading as="h2" className="mt-2 text-2xl md:text-4xl font-bold">
              Core Specializations
            </Heading>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/5 shadow-xs bg-white dark:bg-neutral-900/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-neutral-950/20">
                  <th className="px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Specialized Roles</th>
                  <th className="px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">Core Competencies</th>
                  <th className="px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300 text-right">Typical Placement Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/5">
                {specializations.map((spec) => (
                  <tr key={spec.role} className="hover:bg-neutral-50/30 dark:hover:bg-neutral-900/20 transition-colors">
                    <td className="px-6 py-6 font-bold text-sm text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
                      <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-[#0B1D45] dark:bg-neutral-800">
                        {spec.icon}
                      </div>
                      {spec.role}
                    </td>
                    <td className="px-6 py-6 text-base text-neutral-600 dark:text-neutral-300 max-w-lg">
                      {spec.competencies}
                    </td>
                    <td className="px-6 py-6 text-base font-semibold text-neutral-800 dark:text-neutral-200 text-right text-brand-secondary dark:text-brand-accent">
                      {spec.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Grid View */}
          <div className="md:hidden space-y-4">
            {specializations.map((spec) => (
              <div 
                key={spec.role} 
                className={`p-5 rounded-2xl border bg-white dark:bg-neutral-900/60 shadow-xs flex flex-col gap-3 ${spec.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-[#0B1D45] dark:bg-neutral-800 shrink-0">
                    {spec.icon}
                  </div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-50">
                    {spec.role}
                  </h3>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                    Competencies
                  </span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-0.5">
                    {spec.competencies}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-neutral-100 dark:border-white/5 pt-3 mt-1">
                  <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                    Placement Time
                  </span>
                  <span className="text-xs font-bold text-brand-secondary dark:text-brand-accent">
                    {spec.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hiring Process Workflow Section */}
      <section className="py-16 md:py-24 border-t border-neutral-200/30 dark:border-white/5 bg-neutral-50/30 dark:bg-neutral-900/5">
        <Container className="px-4 md:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Subheading className="text-brand-secondary font-semibold tracking-wider text-xs uppercase">
              Onboarding Safeguards
            </Subheading>
            <Heading as="h2" className="mt-2 mb-4">
              Our Hiring Process Workflow
            </Heading>
            <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Our seamless onboarding structure ensures your new team member hits the ground running without disrupting your current operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {timelineSteps.map((step, idx) => (
              <div
                key={step.title}
                className={`relative group p-6 rounded-2xl border shadow-xs flex flex-col gap-4 ${step.gradient}`}
              >
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/70 dark:bg-white/10 text-[#0B1D45] dark:text-[#09B4E4] group-hover:bg-[#0B75E2]/10 group-hover:text-[#0B75E2] transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-secondary/15 text-brand-secondary dark:bg-brand-secondary/20 dark:text-brand-accent">
                    {step.day}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-neutral-800 dark:text-neutral-50">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-neutral-300 dark:text-neutral-700">
                    <ArrowRight className="size-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing and Whatsapp callout CTA */}
      <CTA />
    </main>
  );
}
