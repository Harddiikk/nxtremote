"use client";

import { cn } from "@/lib/utils";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import { Container } from "./container";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { X, HelpCircle, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";

type BillingCycle = "monthly" | "quarterly" | "half-yearly" | "annual";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const cycles = [
    { id: "monthly", label: "Monthly Billing", discount: 0 },
    { id: "quarterly", label: "Quarterly Billing", labelBadge: "Save 10%", discount: 0.10 },
    { id: "half-yearly", label: "Half Yearly", labelBadge: "Save 12%", discount: 0.12 },
    { id: "annual", label: "Annual Billing", labelBadge: "Save 15%", discount: 0.15 }
  ];

  const getPrice = (basePrice: number) => {
    const cycle = cycles.find((c) => c.id === billingCycle);
    if (!cycle) return basePrice;
    const discounted = Math.round(basePrice * (1 - cycle.discount));
    return discounted;
  };

  const plans = [
    {
      id: "growth",
      name: "Growth (1-2 Specialists)",
      description: "Ideal for boutique agencies hiring their first offshore specialist.",
      basePrice: 1799,
      features: [
        "1:1 Pre-vetted matching",
        "30-Day Free Replacement Guarantee",
        "HR & Payroll Administration Included",
        "Flexible Timezone Alignment (up to 4 hours overlap)",
        "Slack & PM Tool Native Integration",
        "Strict Hardware & Power Audit Checked"
      ],
      buttonText: "Book Call to Hire",
      link: "https://wa.me/1234567890?text=Hi%20NXT%20Remote,%20I'd%20like%20to%20discuss%20the%20Growth%20tier."
    },
    {
      id: "scale",
      name: "Scale (3-5 Specialists)",
      description: "Ideal for mid-sized agencies scaling up specific service verticals.",
      basePrice: 1599,
      features: [
        "1:1 Pre-vetted matching",
        "90-Day Free Replacement Guarantee",
        "HR & Payroll Administration Included",
        "Dedicated Shift Overlap (Full 8-hour overlap)",
        "Slack & PM Tool Native Integration",
        "Strict Hardware & Power Audit Checked",
        "Prioritized Discovery & Placement Support"
      ],
      featured: true,
      buttonText: "Scale Your Team",
      link: "https://wa.me/1234567890?text=Hi%20NXT%20Remote,%20I'd%20like%20to%20discuss%20the%20Scale%20tier."
    },
    {
      id: "enterprise",
      name: "Enterprise (Custom Team)",
      description: "Ideal for large agencies looking to build a full backend execution engine.",
      basePrice: 0,
      customQuote: true,
      features: [
        "Dedicated Account Director + Custom Vetting",
        "Lifetime Replacement Protection",
        "HR & Payroll Administration Included",
        "Custom Shift Schedules Tailored",
        "Enterprise-grade Security Integration",
        "Strict Hardware & Power Audit Checked",
        "Dedicated Coordinator Support Uptime"
      ],
      buttonText: "Contact Enterprise",
      link: "https://wa.me/1234567890?text=Hi%20NXT%20Remote,%20I'd%20like%20to%20discuss%20the%20Enterprise%20custom%20tier."
    }
  ];

  const comparisonData = [
    {
      criteria: "Industry Specialization",
      nxt: "100% Digital Marketing Focus. Sourcing and vetting only for agency roles like Media Buyers, SEOs, and Automators.",
      market: "Generalist Marketplaces. Competing for attention alongside plumbing contractors, transcriptionists, and coders."
    },
    {
      criteria: "Vetting Rigor",
      nxt: "Triple-Vetted (Top 3%). Hands-on marketing skill audits, portfolio validation, and hardware/uptime diagnostic screening.",
      market: "Self-Vetted Profiles. Anyone can claim experience, upload unverified screenshots, or ghost before project starts."
    },
    {
      criteria: "Communication Channels",
      nxt: "WhatsApp Velocity. Direct, frictionless access to coordinators and specialists on the app you already live in daily.",
      market: "Restricted Ecosystems. Forced to use rigid, laggy built-in chats. Sharing contact details can trigger account bans."
    },
    {
      criteria: "Infrastructure Redundancy",
      nxt: "Audited Setup. Mandatory secondary high-speed internet, power backups (UPS/Inverter), and noise-cancelling equipment.",
      market: "Zero Overlooks. Frequent sudden power drops, laggy bandwidth, and distracting background noise on client-facing calls."
    },
    {
      criteria: "Data Protection & Legal",
      nxt: "Full GDPR Compliance. Ironclad corporate NDAs, secure credential sharing vaults (LastPass/1Password), and background checks.",
      market: "High Liability. No unified data safeguards. High risk of contractors mishandling credential keys or client tracking lists."
    },
    {
      criteria: "Integration & Tools",
      nxt: "Agency Tool Fluent. Fully operational from Day 1 in Asana, Jira, Slack, ClickUp, GoHighLevel, and HubSpot.",
      market: "High Training Overhead. Weeks of onboarding required just to align them to modern project management tools and tasks."
    },
    {
      criteria: "Retention & Stability",
      nxt: "Dedicated & Full-Time. Integrated entirely into your brand culture, working exclusively on your agency accounts.",
      market: "Split Focus. Freelancers routinely juggle 3 to 5 clients at once, leading to missed deadlines during client crunch times."
    },
    {
      criteria: "Risk Protection",
      nxt: "30 to 90 Day Free Replacement. If a placement does not fit technically or culturally, we replace them immediately at no cost.",
      market: "No Security. If a freelancer ghosts, you lose weeks of operational progress and have to restart the search from scratch."
    }
  ];

  return (
    <Container as="section" className="flex w-full flex-col py-10 md:py-16">
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-0">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
            Predictable, Flat-Rate Model
          </Subheading>
          <Heading
            as="h2"
            className="pt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100"
          >
            Predictable, Transparent Pricing. No Hidden Hiring Fees.
          </Heading>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-350 max-w-2xl mx-auto leading-relaxed">
            Stop paying 20%–30% recruitment fees. Choose a flexible monthly subscription model built around your agency's scaling velocity.
          </p>
        </div>

        {/* Pricing Flexibility Billing Switch */}
        <div className="flex justify-center items-center flex-wrap gap-2 mb-12">
          {cycles.map((cycle) => (
            <button
              key={cycle.id}
              onClick={() => setBillingCycle(cycle.id as BillingCycle)}
              className={cn(
                "relative px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer",
                billingCycle === cycle.id
                  ? "bg-brand-primary text-white border-brand-primary dark:bg-brand-secondary dark:border-brand-secondary shadow-sm"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800"
              )}
            >
              {cycle.label}
              {cycle.labelBadge && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold text-white bg-brand-accent text-neutral-900 rounded-full">
                  {cycle.labelBadge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="relative grid w-full grid-cols-1 gap-6 overflow-hidden p-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = plan.customQuote ? 0 : getPrice(plan.basePrice);
            return (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-xl bg-white border border-neutral-200 p-6 flex flex-col justify-between dark:bg-neutral-950 dark:border-neutral-800 shadow-xs transition-all duration-200 hover:border-brand-secondary/40",
                  plan.featured && "ring-2 ring-brand-secondary border-transparent dark:bg-neutral-900/60"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 right-6 rounded-full bg-brand-secondary px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase text-white">
                    Most Popular
                  </div>
                )}
                
                <div>
                  <div className="flex items-start justify-between">
                    <p className="text-base font-bold text-neutral-900 dark:text-white">
                      {plan.name}
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 min-h-8">
                    {plan.description}
                  </p>
                  
                  <div className="my-6 border-y border-neutral-100 dark:border-white/5 py-4">
                    {plan.customQuote ? (
                      <span className="text-3xl font-extrabold text-neutral-900 dark:text-neutral-50">
                        Custom Quote
                      </span>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-extrabold text-neutral-900 dark:text-neutral-50">
                          ${price.toLocaleString()}
                        </span>
                        <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
                          / month per role
                        </span>
                      </div>
                    )}
                    {!plan.customQuote && billingCycle !== "monthly" && (
                      <span className="text-[10px] font-semibold text-brand-accent mt-1 block">
                        Calculated at {cycles.find(c => c.id === billingCycle)?.labelBadge} savings
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 dark:bg-brand-accent/15">
                          <IconCheck className="h-3 w-3 stroke-[4px] text-[#00E5AA]" />
                        </div>
                        <span className="text-xs text-neutral-600 dark:text-neutral-350">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant={plan.featured ? "default" : "outline"} 
                      className="w-full justify-center text-xs py-2.5"
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Hidden Cost Comparison Section */}
        <div className="mt-20 rounded-2xl bg-neutral-950 p-6 md:p-10 border border-neutral-800 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 opacity-5 pointer-events-none">
            <HelpCircle className="size-96" />
          </div>
          
          <div className="relative z-10">
            <Subheading className="text-brand-accent font-semibold tracking-wider text-xs uppercase">
              Cost Arbitrage Calculator
            </Subheading>
            <Heading as="h3" className="text-2xl md:text-3xl font-bold mt-2 text-white">
              Why Agency Founders Choose NXT Remote Over Local US/UK Hires
            </Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 border-t border-white/10 pt-8">
              {/* Local Hire Column */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-2 text-red-400 mb-4">
                  <AlertCircle className="size-4" />
                  <span className="font-semibold text-sm">Hiring Digital Marketer Locally</span>
                </div>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="flex justify-between">
                    <span>Base salary:</span>
                    <span className="font-semibold">$6,500/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Taxes & benefits:</span>
                    <span className="font-semibold">$1,200/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Upfront recruiting fees:</span>
                    <span className="font-semibold">$5,000 (one-time)</span>
                  </li>
                  <li className="flex justify-between border-t border-white/10 pt-3 font-bold text-white text-base">
                    <span>Total Year 1 Cost:</span>
                    <span>~$97,400</span>
                  </li>
                </ul>
              </div>

              {/* NXT Remote Column */}
              <div className="bg-brand-secondary/10 rounded-xl p-6 border border-brand-secondary/30 relative">
                <div className="absolute -top-3 left-6 rounded-full bg-brand-accent px-3 py-0.5 text-[9px] font-extrabold tracking-widest uppercase text-neutral-900">
                  The Efficient Alternative
                </div>
                <div className="flex items-center gap-2 text-[#00E5AA] mb-4">
                  <ShieldCheck className="size-4" />
                  <span className="font-semibold text-sm">NXT Remote Dedicated Specialist</span>
                </div>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="flex justify-between">
                    <span>Flat rate:</span>
                    <span className="font-semibold">$1,599/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tax & benefits:</span>
                    <span className="font-semibold">$0</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Recruiting fees:</span>
                    <span className="font-semibold">$0</span>
                  </li>
                  <li className="flex justify-between border-t border-[#00E5AA]/20 pt-3 font-bold text-[#00E5AA] text-base">
                    <span>Total Year 1 Cost:</span>
                    <span>~$19,188</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Savings Callout */}
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-[#00E5AA]/10 rounded-xl p-6 border border-[#00E5AA]/20">
              <div>
                <span className="text-[10px] font-bold text-[#00E5AA] uppercase tracking-wider">
                  Annual Budget Efficiency
                </span>
                <p className="text-xl md:text-2xl font-black text-white mt-1">
                  Net Annual Savings per Role: <span className="text-[#00E5AA]">$78,212</span>
                </p>
              </div>
              <Link 
                href="https://wa.me/1234567890?text=Hi%20NXT%20Remote,%20I'd%20like%20to%20discuss%20hiring%20specialists%20and%20saving%2078k%20annually." 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 md:mt-0"
              >
                <Button className="bg-[#00E5AA] text-neutral-950 hover:bg-[#00E5AA]/90 py-2">
                  Calculate My Team Savings
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Evaluation Comparison Table */}
        <div className="mt-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Subheading className="text-brand-secondary font-semibold tracking-wider text-xs uppercase">
              Rigorous Evaluation
            </Subheading>
            <Heading as="h3" className="text-2xl md:text-3xl font-bold mt-2">
              Comparison Chart for Services We Offer
            </Heading>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-neutral-900/40 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-neutral-950/20 text-xs font-bold uppercase tracking-wider text-neutral-500">
                  <th className="px-6 py-4 w-1/4">Evaluation Criteria</th>
                  <th className="px-6 py-4 bg-brand-secondary/5 dark:bg-brand-secondary/10 w-3/8 text-neutral-900 dark:text-neutral-100 font-bold border-x border-neutral-200/50 dark:border-neutral-800">
                    NXT Remote (Our Standard)
                  </th>
                  <th className="px-6 py-4 w-3/8">General Freelancers (Upwork, Fiverr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/5 text-xs leading-relaxed">
                {comparisonData.map((row) => (
                  <tr key={row.criteria} className="hover:bg-neutral-50/30 dark:hover:bg-neutral-900/20">
                    <td className="px-6 py-4 font-bold text-neutral-800 dark:text-neutral-200">{row.criteria}</td>
                    <td className="px-6 py-4 bg-brand-secondary/5 dark:bg-brand-secondary/5 border-x border-neutral-200/50 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-200">
                      {row.nxt}
                    </td>
                    <td className="px-6 py-4 text-neutral-500 dark:text-neutral-400">{row.market}</td>
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
                className="p-5 rounded-2xl bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 shadow-xs space-y-3"
              >
                <h4 className="font-bold text-sm text-neutral-850 dark:text-neutral-100 border-b border-neutral-100 dark:border-white/5 pb-2">
                  {row.criteria}
                </h4>
                <div>
                  <span className="text-[10px] font-bold text-brand-secondary dark:text-brand-accent uppercase tracking-widest block">
                    NXT Remote Standard
                  </span>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-1">
                    {row.nxt}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block">
                    General Freelance Markets
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {row.market}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Container>
  );
}
