"use client";

import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import React from "react";
import { motion } from "motion/react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { X, ShieldCheck, AlertCircle, CalendarCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/site";

export function Pricing() {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      teamSize: "1–2 Specialists",
      description: "Ideal for boutique agencies hiring their first offshore specialist.",
      features: [
        "1:1 Pre-vetted matching",
        "Free replacement within 15 days",
        "HR & Payroll Administration Included",
        "Flexible Timezone Alignment (Dedicated working-hours overlap)",
        "Slack & PM Tool Native Integration",
        "Strict Hardware & Power Audit Checked"
      ],
      buttonText: "Book a Discovery Call"
    },
    {
      id: "growth",
      name: "Standard",
      teamSize: "3–5 Specialists",
      description: "Ideal for mid-sized agencies scaling up specific service verticals.",
      features: [
        "1:1 Pre-vetted matching",
        "Free replacement within 30 days",
        "HR & Payroll Administration Included",
        "Dedicated Shift Overlap (Working-hours overlap)",
        "Slack & PM Tool Native Integration",
        "Strict Hardware & Power Audit Checked",
        "Prioritized Discovery & Placement Support"
      ],
      featured: true,
      buttonText: "Book a Discovery Call"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      teamSize: "Custom Team",
      description: "Ideal for large agencies looking to build a full backend execution engine.",
      features: [
        "Dedicated Account Director + Custom Vetting",
        "Free replacement within 45 days",
        "HR & Payroll Administration Included",
        "Custom Shift Schedules Tailored",
        "Enterprise-grade Security Integration",
        "Strict Hardware & Power Audit Checked",
        "Dedicated Coordinator Support Uptime"
      ],
      buttonText: "Book an Enterprise Call"
    }
  ];

  const featureTiers = [
    { key: "basic", name: "Basic", subtitle: "1 Remote Marketing Specialist", featured: false },
    { key: "standard", name: "Standard", subtitle: "2-5 Remote Specialists", featured: true },
    { key: "enterprise", name: "Enterprise", subtitle: "5+ Remote Specialists", featured: false }
  ];

  // Each cell value is either a boolean (true = check, false = X) or a string label.
  const featureMatrix: {
    group: string;
    rows: { label: string; values: [boolean | string, boolean | string, boolean | string] }[];
  }[] = [
    {
      group: "Hiring",
      rows: [
        { label: "Pre-vetted Talent", values: [true, true, true] },
        { label: "Hiring Timeline", values: ["7-10 Days", "5-7 Days", "Priority"] },
        { label: "Specialists", values: ["1", "2-5", "5+"] },
        { label: "Custom Hiring Process", values: [false, false, true] }
      ]
    },
    {
      group: "Management",
      rows: [
        { label: "HR & Payroll Management", values: [true, true, true] },
        { label: "Timezone Alignment", values: [true, true, true] },
        { label: "Recruitment Manager", values: [false, true, true] },
        { label: "Account Director", values: [false, false, true] },
        { label: "Weekly Performance Reviews", values: [false, false, true] },
        { label: "Team Scaling Support", values: [false, true, true] }
      ]
    },
    {
      group: "Support",
      rows: [
        { label: "Free Replacement", values: ["15 days", "30 days", "45 days"] },
        { label: "Priority Support", values: ["If Required", "Twice a Week", "Weekdays"] }
      ]
    },
    {
      group: "Security",
      rows: [
        { label: "Enterprise Security Compliance", values: [false, false, true] }
      ]
    }
  ];

  const renderFeatureCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-accent/20 dark:bg-brand-accent/15">
          <IconCheck className="size-3.5 stroke-[4px] text-[#8B5CF6]" />
        </span>
      );
    }
    if (value === false) {
      return (
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-neutral-100 dark:bg-white/5">
          <X className="size-3.5 text-neutral-400 dark:text-neutral-600" />
        </span>
      );
    }
    return (
      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
        {value}
      </span>
    );
  };

  const comparisonData = [
    {
      criteria: "Industry Specialization",
      nxt: "100% Digital Marketing Focus. Sourcing and vetting only for agency roles like Media Buyers, SEOs, and Automators.",
      market: "Generalist Staffing. They place VAs, admins, and bookkeepers for every industry, not vetted digital marketing specialists."
    },
    {
      criteria: "Vetting Rigor",
      nxt: "Triple-Vetted (Top 3%). Hands-on marketing skill audits, portfolio validation, and hardware/uptime diagnostic screening.",
      market: "Loose Screening. Anyone on their bench can be labelled experienced, with no hands-on marketing skill audit or portfolio validation."
    },
    {
      criteria: "Communication Channels",
      nxt: "WhatsApp Velocity. Direct, frictionless access to coordinators and specialists on the app you already live in daily.",
      market: "Layered Account Managers. Requests pass through slow email threads and coordinators before reaching the person actually doing the work."
    },
    {
      criteria: "Infrastructure Redundancy",
      nxt: "Audited Setup. Mandatory secondary high-speed internet, power backups (UPS/Inverter), and noise-cancelling equipment.",
      market: "Unaudited Setups. No mandatory power backups or backup internet, so calls drop and deadlines slip during client crunch."
    },
    {
      criteria: "Data Protection & Compliances",
      nxt: "Full GDPR Compliance. Ironclad corporate NDAs, secure credential sharing vaults (LastPass/1Password), and background checks.",
      market: "Thin Safeguards. Generic paperwork with no marketing-specific NDAs or secure credential vaults for client ad and CRM access."
    },
    {
      criteria: "Integration & Tools",
      nxt: "Agency Tool Fluent. Fully operational from Day 1 in Asana, Jira, Slack, ClickUp, GoHighLevel, and HubSpot.",
      market: "High Training Overhead. Jack-of-all-trades staff know tools only at surface level and need weeks to learn GoHighLevel, HubSpot, and your stack."
    },
    {
      criteria: "Retention & Stability",
      nxt: "Dedicated & Full-Time. Integrated entirely into your brand culture, working exclusively on your agency accounts.",
      market: "Split Focus. Staff are rotated across many unrelated roles and accounts at once, leading to missed deadlines during client crunch times."
    },
    {
      criteria: "Risk Protection",
      nxt: "Free replacement within 15 to 30 days. If a placement does not fit, we replace them at no cost.",
      market: "Slow Recovery. If a placement drops off, you reopen a ticket and wait through their queue while operational progress stalls."
    }
  ];

  return (
    <div className="bg-neutral-50/50 dark:bg-white/[0.02] border-y border-neutral-100 dark:border-white/5 relative z-10 section-pad">
    <Container as="section" className="flex w-full flex-col">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-0">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
            Flat-Rate Engagements, Zero Recruiter Fees
          </Subheading>
          <Heading
            as="h2"
            className="pt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100"
          >
            Your Team, <span className="text-gradient-brand">Your Terms</span>. Scoped on a <span className="text-gradient-brand">Single Call</span>.
          </Heading>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            One flat monthly rate. Zero recruiter fees. Quoted on a single 30-minute call.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="relative grid w-full grid-cols-1 gap-6 overflow-hidden p-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, planIdx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: planIdx * 0.1 }}
              className={cn(
                "relative rounded-xl bg-white border border-neutral-200 p-6 flex flex-col justify-between dark:bg-card dark:border-white/10 shadow-sm transition-all duration-300",
                "hover:-translate-y-2 hover:scale-[1.02] hover:border-brand-secondary dark:hover:border-brand-accent",
                "hover:shadow-[0_20px_40px_rgba(11,117,226,0.08)] dark:hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)]",
                plan.featured
                  ? "ring-2 ring-brand-secondary border-transparent dark:bg-card shadow-[0_4px_20px_rgba(11,117,226,0.15)] dark:shadow-[0_4px_20px_rgba(139,92,246,0.15)]"
                  : ""
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-brand-secondary px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase text-white">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between">
                  <p className="text-lg font-bold text-neutral-900 dark:text-white">
                    {plan.name}
                  </p>
                  <span className="rounded-full bg-brand-secondary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-secondary dark:bg-brand-accent/10 dark:text-brand-accent">
                    {plan.teamSize}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 min-h-8">
                  {plan.description}
                </p>

                <div className="my-6 flex items-center gap-3 border-y border-neutral-100 dark:border-white/5 py-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10 dark:bg-brand-accent/10">
                    <CalendarCheck className="size-5 text-brand-secondary dark:text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">
                      Flat monthly rate
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Custom quote on your discovery call
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 dark:bg-brand-accent/15">
                        <IconCheck className="h-3 w-3 stroke-[4px] text-[#8B5CF6]" />
                      </div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    className="w-full justify-center text-xs py-2.5"
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tier Feature Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Subheading className="text-brand-secondary font-semibold tracking-wider text-xs uppercase">
              What Each Tier Includes
            </Subheading>
            <Heading as="h3" className="text-2xl md:text-3xl font-bold mt-2">
              Compare <span className="text-gradient-brand">Every Feature</span> Across Tiers
            </Heading>
          </div>

          {/* Horizontally scrollable so it never breaks page width on mobile */}
          <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md shadow-lg">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-white/10 bg-neutral-100/50 dark:bg-neutral-950/40">
                  <th className="px-6 py-5 align-bottom text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 w-[28%]">
                    Features
                  </th>
                  {featureTiers.map((tier) => (
                    <th
                      key={tier.key}
                      className={cn(
                        "px-6 py-5 align-top text-center w-[24%]",
                        tier.featured &&
                          "bg-[#0b75e2]/5 dark:bg-[#8b5cf6]/5 border-x border-[#0b75e2]/15 dark:border-[#8b5cf6]/10"
                      )}
                    >
                      {tier.featured && (
                        <span className="mb-2 inline-block rounded-full bg-brand-secondary px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                          Most Popular
                        </span>
                      )}
                      <div
                        className={cn(
                          "text-base font-extrabold text-neutral-900 dark:text-white",
                          tier.featured && "text-brand-secondary dark:text-brand-accent"
                        )}
                      >
                        {tier.name}
                      </div>
                      <div className="mt-1 text-xs font-normal normal-case text-neutral-500 dark:text-neutral-400">
                        {tier.subtitle}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {featureMatrix.map((section) => (
                  <React.Fragment key={section.group}>
                    <tr className="bg-neutral-50/70 dark:bg-white/[0.03] border-y border-neutral-200/70 dark:border-white/5">
                      <td
                        colSpan={4}
                        className="px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-brand-secondary dark:text-brand-accent"
                      >
                        {section.group}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-neutral-200/60 dark:border-white/5 last:border-0 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-neutral-700 dark:text-neutral-200">
                          {row.label}
                        </td>
                        {row.values.map((value, i) => (
                          <td
                            key={i}
                            className={cn(
                              "px-6 py-4 text-center",
                              featureTiers[i].featured &&
                                "bg-[#0b75e2]/5 dark:bg-[#8b5cf6]/5 border-x border-[#0b75e2]/10 dark:border-[#8b5cf6]/5"
                            )}
                          >
                            {renderFeatureCell(value)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* The Hidden Cost Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 rounded-2xl bg-[#081633] p-6 md:p-10 border border-white/10 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <Subheading className="text-brand-accent font-semibold tracking-wider text-xs uppercase">
              The Offshore Advantage
            </Subheading>
            <Heading as="h3" className="text-2xl md:text-3xl font-bold mt-2 text-white">
              Why Agency Founders Choose NXT Remote Over Local US/UK Hires
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 border-t border-white/10 pt-8">
              {/* Local Hire Column */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-2 text-red-400 mb-4">
                  <AlertCircle className="size-4" />
                  <span className="font-semibold text-base">Hiring a Digital Marketer Locally</span>
                </div>
                <ul className="space-y-3 text-base text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <X className="size-4 text-red-400 shrink-0 mt-1" />
                    <span>$75k–$95k+ yearly, before a single ad runs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="size-4 text-red-400 shrink-0 mt-1" />
                    <span>20-30% recruiter fees on top</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="size-4 text-red-400 shrink-0 mt-1" />
                    <span>Months of sourcing, interviewing, onboarding</span>
                  </li>
                </ul>
              </div>

              {/* NXT Remote Column */}
              <div className="bg-brand-secondary/10 rounded-xl p-6 border border-brand-secondary/30 relative">
                <div className="absolute -top-3 left-6 rounded-full bg-brand-accent px-3 py-0.5 text-[9px] font-extrabold tracking-widest uppercase text-neutral-900">
                  The Efficient Alternative
                </div>
                <div className="flex items-center gap-2 text-[#8B5CF6] mb-4">
                  <ShieldCheck className="size-4" />
                  <span className="font-semibold text-base">NXT Remote Dedicated Specialist</span>
                </div>
                <ul className="space-y-3 text-base text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <IconCheck className="size-4 stroke-[3px] text-[#8B5CF6] shrink-0 mt-1" />
                    <span>One flat monthly rate, up to 70% below a local hire's total cost</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <IconCheck className="size-4 stroke-[3px] text-[#8B5CF6] shrink-0 mt-1" />
                    <span>Zero recruiting fees, zero payroll taxes, zero benefits admin</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <IconCheck className="size-4 stroke-[3px] text-[#8B5CF6] shrink-0 mt-1" />
                    <span>Interview-ready shortlist by day five, fully vetted and audited</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking Callout */}
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-[#8B5CF6]/10 rounded-xl p-6 border border-[#8B5CF6]/20">
              <div>
                <span className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-wider">
                  30 Minutes, Zero Obligation
                </span>
                <p className="text-xl md:text-2xl font-black text-white mt-1">
                  Get your custom flat rate on one discovery call.
                </p>
              </div>
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0"
              >
                <Button className="bg-[#8B5CF6] text-neutral-950 hover:bg-[#8B5CF6]/90 py-2">
                  Book Your Call
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Evaluation Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Subheading className="text-brand-secondary font-semibold tracking-wider text-xs uppercase">
              Rigorous Evaluation
            </Subheading>
            <Heading as="h3" className="text-2xl md:text-3xl font-bold mt-2">
              Comparison Chart for <span className="text-gradient-brand">Services We Offer</span>
            </Heading>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/30 backdrop-blur-md shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-white/10 bg-neutral-100/50 dark:bg-neutral-950/40 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  <th className="px-6 py-5 w-1/4">Evaluation Criteria</th>
                  <th className="px-6 py-5 bg-[#0b75e2]/5 dark:bg-[#8b5cf6]/5 w-3/8 text-neutral-950 dark:text-white font-extrabold border-x border-[#0b75e2]/15 dark:border-[#8b5cf6]/10 text-sm">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="size-4 text-[#8B5CF6]" />
                      NXT Remote (Our Standard)
                    </span>
                  </th>
                  <th className="px-6 py-5 w-3/8 text-neutral-600 dark:text-neutral-400 text-sm">Generalist Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/60 dark:divide-white/5 text-sm leading-relaxed">
                {comparisonData.map((row) => (
                  <tr key={row.criteria} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/10 transition-colors">
                    <td className="px-6 py-5 font-display text-base font-bold text-neutral-800 md:text-lg dark:text-white">{row.criteria}</td>
                    <td className="px-6 py-5 bg-[#0b75e2]/5 dark:bg-[#8b5cf6]/5 border-x border-[#0b75e2]/10 dark:border-[#8b5cf6]/5 font-semibold text-neutral-950 dark:text-neutral-100">
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="size-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{row.nxt}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-start gap-2.5">
                        <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.market}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Grid */}
          <div className="md:hidden space-y-6">
            {comparisonData.map((row) => (
              <div
                key={row.criteria}
                className="p-6 rounded-2xl bg-white/70 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 backdrop-blur-md shadow-md space-y-4"
              >
                <h4 className="font-extrabold text-lg text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-white/5 pb-2">
                  {row.criteria}
                </h4>

                <div className="bg-[#0b75e2]/5 dark:bg-[#8b5cf6]/5 p-4 rounded-xl border border-[#0b75e2]/10 dark:border-[#8b5cf6]/10">
                  <span className="flex items-center gap-1.5 text-[10px] font-black text-brand-secondary dark:text-brand-accent uppercase tracking-widest">
                    <ShieldCheck className="size-3.5" />
                    NXT Remote Standard
                  </span>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-2">
                    {row.nxt}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-neutral-950/20">
                  <span className="flex items-center gap-1.5 text-[10px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                    <X className="size-3.5 text-red-400" />
                    Generalist Agencies
                  </span>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                    {row.market}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Container>
    </div>
  );
}
