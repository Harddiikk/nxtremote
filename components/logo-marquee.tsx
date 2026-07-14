"use client";

import React from "react";

const PLATFORMS = [
  { name: "HubSpot", category: "CRM & Automation", color: "from-[#FF7A59] to-[#FF8F73]" },
  { name: "GoHighLevel", category: "Agency Stack", color: "from-[#188BF6] to-[#4CA7F9]" },
  { name: "Meta Ads", category: "Paid Media & ROAS", color: "from-[#0064E0] to-[#3B8CF7]" },
  { name: "Google Ads", category: "Search & PPC", color: "from-[#4285F4] to-[#71A5F7]" },
  { name: "TikTok Ads", category: "Short-form Social", color: "from-[#69C9D0] to-[#EE1D52]" },
  { name: "Klaviyo", category: "Email Marketing", color: "from-[#5D3FD3] to-[#8B6FE8]" },
  { name: "Slack", category: "Asynchronous Ops", color: "from-[#9B59B6] to-[#C39BD3]" },
  { name: "ClickUp", category: "Agile PM Tools", color: "from-[#7B68EE] to-[#A092F5]" },
  { name: "Asana", category: "Workflow Mgmt", color: "from-[#F06A6A] to-[#F59595]" },
  { name: "Jira", category: "Task Sprints", color: "from-[#0052CC] to-[#3375D6]" },
  { name: "Salesforce", category: "Enterprise Scale", color: "from-[#009EDB] to-[#33B1E2]" },
  { name: "Google Analytics", category: "Data Analytics", color: "from-[#E37400] to-[#F29433]" },
];

function PlatformCard({ platform }: { platform: (typeof PLATFORMS)[number] }) {
  return (
    <div className="group relative w-56 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 dark:border-white/10 dark:bg-card dark:hover:border-white/20">
      <div
        className={`absolute inset-0 -z-10 bg-linear-to-br ${platform.color} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.1]`}
      />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-neutral-800 transition-colors group-hover:text-brand-secondary dark:text-neutral-200 dark:group-hover:text-brand-accent">
            {platform.name}
          </span>
          <div className={`size-1.5 rounded-full bg-linear-to-br ${platform.color}`} />
        </div>
        <span className="truncate text-xs text-neutral-500 dark:text-neutral-400">
          {platform.category}
        </span>
      </div>
    </div>
  );
}

// Two counter-scrolling rows; each track doubled for a seamless infinite loop.
export function LogoMarquee() {
  const rowA = PLATFORMS.slice(0, 6);
  const rowB = PLATFORMS.slice(6);

  return (
    <section className="border-t border-neutral-100 py-14 dark:border-white/5">
      <p className="mx-auto max-w-2xl px-4 text-center font-mono text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase dark:text-neutral-500">
        Day-one fluency across your entire stack
      </p>

      <div className="marquee-mask mt-8 space-y-4 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {[...rowA, ...rowA].map((platform, i) => (
            <PlatformCard key={`${platform.name}-${i}`} platform={platform} />
          ))}
        </div>
        <div
          className="animate-marquee flex w-max gap-4"
          style={{ animationDirection: "reverse", animationDuration: "42s" }}
        >
          {[...rowB, ...rowB].map((platform, i) => (
            <PlatformCard key={`${platform.name}-${i}`} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
