"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { cn } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: "Talent & Vetting",
    items: [
      {
        question: "How does the NXT Remote vetting process work?",
        answer:
          "Every specialist undergoes a rigorous 3-stage vetting process: domain-specific portfolio checks, advanced English & cultural nuance communication screening, and diagnostic reviews of their physical remote infrastructure (redundant power, secondary internet lines, hardware specifications)."
      },
      {
        question: "Are candidates experienced in agency environments?",
        answer:
          "Yes. Our talent is sourced specifically for digital agency environments and is fully operational from day one. They are natively trained in workflows like Asana, ClickUp, Jira, and Slack, and have background records working within agency environments."
      },
      {
        question: "What specific marketing roles can I hire?",
        answer:
          "We offer specialized remote placements for Paid Media & Performance (Meta, Google, TikTok), Technical SEO & Content Strategists, Brand & Short-form Video Editors, and Operations Engineers (HubSpot, GoHighLevel, Zapier)."
      }
    ]
  },
  {
    title: "Operations & Integration",
    items: [
      {
        question: "How long does a placement typically take?",
        answer:
          "Our placement time is highly optimized. Sourcing and role profiling takes 1-2 days, vetting and live testing take 2-3 days, and an interview-ready shortlist reaches you by day 5. Onboarding setup follows right after."
      },
      {
        question: "What communication channels are used?",
        answer:
          "NXT Remote operates with WhatsApp Velocity. We don't hide behind slow email support tickets or clunky portals. You communicate directly with your dedicated account coordinators and specialists on the messaging app you use daily."
      },
      {
        question: "What if a placement does not work out?",
        answer:
          "We replace them free of charge within 15 to 45 days, and on an ongoing basis for Enterprise builds. If a candidate does not fit technically or culturally, we find you a new one right away."
      }
    ]
  },
  {
    title: "Infrastructure & Compliances",
    items: [
      {
        question: "How do you keep work shifts reliable?",
        answer:
          "We validate candidate workstations. Every resource operates on a machine tailored to your business requirements, as discussed in the interview sessions, holds a professional noise-canceling headset, and keeps secondary power backups (UPS/inverters) plus a secondary high-speed internet source."
      },
      {
        question: "How is my proprietary data protected?",
        answer:
          "All remote specialists are contractually bound to strict corporate NDAs and complete GDPR data protection training. We enforce secure credential-sharing practices (using LastPass or 1Password) and strict data security safeguards."
      }
    ]
  }
];

export function FAQs() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleQuestion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-4xl overflow-hidden px-4 section-pad md:px-8">
      <div className="text-center">
        <Heading as="h2">Frequently Asked Questions</Heading>
        <Subheading className="mx-auto mt-4 max-w-2xl">
          Everything you need to know about scaling your digital marketing agency with top-tier remote talent.
        </Subheading>
      </div>

      <div
        ref={containerRef}
        className="relative mt-16 flex flex-col gap-12 px-4 md:px-8"
      >
        {faqData.map((section) => (
          <div key={section.title}>
            <h3 className="mb-6 text-lg font-medium text-neutral-800 dark:text-neutral-200">
              {section.title}
            </h3>
            <div className="flex flex-col gap-3">
              {section.items.map((item, index) => {
                const id = `${section.title}-${index}`;
                const isActive = activeId === id;

                return (
                  <div
                    key={id}
                    className={cn(
                      "relative rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-card dark:shadow-white/5 dark:ring-white/10"
                        : "hover:bg-neutral-50 dark:hover:bg-white/5",
                    )}
                  >
                    {isActive && (
                      <div className="absolute inset-0">
                        <GridLineHorizontal
                          className="-top-[2px]"
                          offset="100px"
                        />
                        <GridLineHorizontal
                          className="-bottom-[2px]"
                          offset="100px"
                        />
                        <GridLineVertical
                          className="-left-[2px]"
                          offset="100px"
                        />
                        <GridLineVertical
                          className="-right-[2px] left-auto"
                          offset="100px"
                        />
                      </div>
                    )}
                    <button
                      onClick={() => toggleQuestion(id)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-neutral-700 md:text-base dark:text-neutral-300">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 shrink-0"
                      >
                        <IconPlus className="size-5 text-neutral-500 dark:text-neutral-400" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.15, ease: "easeInOut" }}
                          className="relative"
                        >
                          <p className="max-w-[90%] px-4 pb-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
