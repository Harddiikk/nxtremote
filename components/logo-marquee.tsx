"use client";

import React from "react";

const TOOLS = [
  { name: "Meta Ads", logo: "/logos/meta.svg" },
  { name: "Google Ads", logo: "/logos/googleads.svg" },
  { name: "TikTok Ads", logo: "/logos/tiktok.svg" },
  { name: "Google Analytics", logo: "/logos/googleanalytics.svg" },
  { name: "CM360", logo: "/logos/googlemarketingplatform.svg" },
  { name: "Semrush", logo: "/logos/semrush.svg" },
  { name: "Search Console", logo: "/logos/googlesearchconsole.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Klaviyo", logo: "/logos/klaviyo.svg" },
  { name: "Brevo", logo: "/logos/brevo.svg" },
  { name: "Mailchimp", logo: "/logos/mailchimp.svg" },
  { name: "Canva", logo: "/logos/canva.svg" },
  { name: "Photoshop", logo: "/logos/adobephotoshop.svg" },
  { name: "Adobe Express", logo: "/logos/adobe.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "ClickUp", logo: "/logos/clickup.svg" },
  { name: "Asana", logo: "/logos/asana.svg" },
  { name: "Jira", logo: "/logos/jira.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
];

function ToolCard({ tool }: { tool: (typeof TOOLS)[number] }) {
  return (
    <div className="flex w-52 shrink-0 items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-[0_4px_16px_rgba(32,28,103,0.12)] transition-transform duration-200 hover:-translate-y-0.5">
      <img src={tool.logo} alt={tool.name} className="size-6 shrink-0" loading="lazy" />
      <span className="truncate text-sm font-bold text-neutral-900">{tool.name}</span>
    </div>
  );
}

// White pill cards with real tool logos, two counter-scrolling rows.
export function LogoMarquee() {
  const rowA = TOOLS.slice(0, 10);
  const rowB = TOOLS.slice(10);

  return (
    <section className="border-t border-border py-14">
      <p className="mx-auto max-w-2xl px-4 text-center font-mono text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        Day-one fluency across your entire stack
      </p>

      <div className="marquee-mask mt-8 space-y-4 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {[...rowA, ...rowA].map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
        <div
          className="animate-marquee flex w-max gap-4"
          style={{ animationDirection: "reverse", animationDuration: "44s" }}
        >
          {[...rowB, ...rowB].map((tool, i) => (
            <ToolCard key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
