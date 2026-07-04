"use client";

import React from "react";
import { motion } from "motion/react";

export function LogoCloud() {
  const platforms = [
    { name: "HubSpot", category: "CRM & Automation", color: "from-[#FF7A59] to-[#FF8F73]" },
    { name: "GoHighLevel", category: "Agency Stack", color: "from-[#188BF6] to-[#4CA7F9]" },
    { name: "Meta Ads", category: "Paid Media & ROAS", color: "from-[#0064E0] to-[#3B8CF7]" },
    { name: "Google Ads", category: "Search & PPC", color: "from-[#4285F4] to-[#71A5F7]" },
    { name: "TikTok Ads", category: "Short-form Social", color: "from-[#000000] to-[#333333]" },
    { name: "Klaviyo", category: "Email Marketing", color: "from-[#2B1A4A] to-[#453272]" },
    { name: "Slack", category: "Asynchronous Ops", color: "from-[#4A154B] to-[#732975]" },
    { name: "ClickUp", category: "Agile PM Tools", color: "from-[#7B68EE] to-[#A092F5]" },
    { name: "Asana", category: "Workflow Mgmt", color: "from-[#F06A6A] to-[#F59595]" },
    { name: "Jira", category: "Task Sprints", color: "from-[#0052CC] to-[#3375D6]" },
    { name: "Salesforce", category: "Enterprise Scale", color: "from-[#009EDB] to-[#33B1E2]" },
    { name: "Google Analytics", category: "Data Analytics", color: "from-[#E37400] to-[#F29433]" },
  ];

  return (
    <section className="py-10 md:py-20 lg:py-24 border-t border-neutral-100 dark:border-white/5 bg-neutral-50/30 dark:bg-neutral-900/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mx-auto max-w-2xl text-center text-lg font-medium text-neutral-600 dark:text-neutral-400">
          Our elite remote talent is fully operational from day one. <br className="hidden sm:block" />
          <span className="text-neutral-400 dark:text-neutral-500 font-normal text-base mt-2 block">
            Pre-vetted expert execution across the industry's leading marketing & operations stacks.
          </span>
        </h2>
        <div className="mx-auto mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{
                y: 10,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: (index % 6) * 0.05,
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              className="relative group overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-xs transition-all duration-200 hover:border-transparent dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Background gradient mask on hover */}
              <div className={`absolute inset-0 -z-10 bg-linear-to-br ${platform.color} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.08]`} />
              
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200 transition-colors group-hover:text-brand-secondary dark:group-hover:text-brand-accent">
                    {platform.name}
                  </span>
                  <div className={`size-1.5 rounded-full bg-linear-to-br ${platform.color}`} />
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                  {platform.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
