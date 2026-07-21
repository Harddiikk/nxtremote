"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Sparkles, Layers } from "lucide-react";

// Image Fallback Component
interface LogoFallbackProps {
  baseName: string;
  alt: string;
  fallbackText: string;
  brandColor: string;
  glowColor: string;
}

function LogoFallback({ baseName, alt, fallbackText, brandColor, glowColor }: LogoFallbackProps) {
  const formats = [".svg", ".png", ".webp", ".jpg", ".jpeg"];
  const [formatIndex, setFormatIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const currentSrc = `/${baseName}${formats[formatIndex]}`;

  const handleError = () => {
    if (formatIndex < formats.length - 1) {
      setFormatIndex((prev) => prev + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center size-12 md:size-14 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/95 backdrop-blur-md transition-all duration-300 shadow-md animate-[logoFloat_5s_ease-in-out_infinite]",
        "group-hover:scale-105 group-hover:border-white/20",
        glowColor
      )}
    >
      {failed ? (
        <div 
          className={cn("flex items-center justify-center font-semibold text-xs tracking-wider rounded-xl text-white select-none w-full h-full shadow-inner", brandColor)}
          title={alt}
        >
          {fallbackText}
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          className="object-contain w-full h-full p-2.5 transition-transform duration-300 rounded-xl"
          onError={handleError}
        />
      )}
    </div>
  );
}

export function IntegrationsBento() {
  return (
    <section className="relative overflow-hidden section-pad border-t border-neutral-100 dark:border-white/5 bg-neutral-50/10 dark:bg-transparent">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 px-3 py-1 text-xs font-semibold text-brand-secondary dark:text-brand-accent backdrop-blur-md mb-4">
            <Sparkles className="size-3.5" />
            <span>Operational Stack Mastery</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl md:text-5xl">
            Integrated with Your <span className="text-gradient-brand">Existing Workflows</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Day-one fluency in the tools your agency already runs on.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          
          {/* Card 1: CRM - HubSpot, GoHighLevel & Zapier */}
          <GlassBentoCard className="md:col-span-1 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 -z-10 size-48 rounded-full bg-amber-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />

            <CardSkeleton className="py-4 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

              {/* Layer 1: sub-section eyebrow label */}
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.15em] text-amber-500/80 dark:text-amber-400/80">
                Connected Platforms
              </span>

              {/* Layer 2 + 3: logos with tool names */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 relative z-10">
                {[
                  { base: "logos/hubspot", alt: "HubSpot", fb: "HS", color: "bg-[#FF7A59]", glow: "group-hover:shadow-[0_0_20px_rgba(255,122,89,0.3)]" },
                  { base: "logos/gohighlevel", alt: "GoHighLevel", fb: "GHL", color: "bg-[#188BF6]", glow: "group-hover:shadow-[0_0_20px_rgba(24,139,246,0.3)]" },
                  { base: "logos/zapier", alt: "Zapier", fb: "ZP", color: "bg-[#FF4A00]", glow: "group-hover:shadow-[0_0_20px_rgba(255,74,0,0.3)]" },
                ].map((t) => (
                  <div key={t.alt} className="flex flex-col items-center gap-2">
                    <LogoFallback baseName={t.base} alt={t.alt} fallbackText={t.fb} brandColor={t.color} glowColor={t.glow} />
                  </div>
                ))}
              </div>

              {/* Feature mini indicators */}
              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["Pipeline Automation", "Lead Distribution", "CRM Sync"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/5 text-amber-600 dark:text-amber-400 border border-amber-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-500 dark:text-amber-400">
                    CRM & Pipelines
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    HubSpot, GoHighLevel & Zapier
                  </CardTitle>
                  <CardDescription className="text-left mt-2">
                    Pipelines, lead capture, and CRM sync, handled.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 2: Retention - Klaviyo, Brevo & Mailchimp */}
          <GlassBentoCard className="md:col-span-1 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 -z-10 size-48 rounded-full bg-violet-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />

            <CardSkeleton className="py-4 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

              {/* Layer 1: sub-section eyebrow label */}
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.15em] text-violet-500/80 dark:text-violet-400/80">
                Lifecycle Flows
              </span>

              {/* Layer 2 + 3: logos with tool names */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 relative z-10">
                {[
                  { base: "logos/klaviyo", alt: "Klaviyo", fb: "KL", color: "bg-[#2B1A4A]", glow: "group-hover:shadow-[0_0_20px_rgba(43,26,74,0.4)]" },
                  { base: "logos/brevo", alt: "Brevo", fb: "BV", color: "bg-[#8B5CF6]", glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]" },
                  { base: "logos/mailchimp", alt: "Mailchimp", fb: "MC", color: "bg-[#FFE01B]", glow: "group-hover:shadow-[0_0_20px_rgba(255,224,27,0.4)]" },
                ].map((t) => (
                  <div key={t.alt} className="flex flex-col items-center gap-2">
                    <LogoFallback baseName={t.base} alt={t.alt} fallbackText={t.fb} brandColor={t.color} glowColor={t.glow} />
                  </div>
                ))}
              </div>

              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["Flows & Segments", "LTV Retention"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-500/5 text-violet-600 dark:text-violet-400 border border-violet-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-violet-500 dark:text-violet-400">
                    Retention & Flows
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    Klaviyo, Brevo & Mailchimp
                  </CardTitle>
                  <CardDescription className="text-left mt-2">
                    Flows and segments that grow client LTV.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 3: Analytics - GA4, CM360 & Search Console */}
          <GlassBentoCard className="md:col-span-1 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -left-10 -bottom-10 -z-10 size-48 rounded-full bg-blue-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />

            <CardSkeleton className="py-4 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

              {/* Layer 1: sub-section eyebrow label */}
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-500/80 dark:text-blue-400/80">
                Measurement Stack
              </span>

              {/* Layer 2 + 3: logos with tool names */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 relative z-10">
                {[
                  { base: "logos/googleanalytics", alt: "GA4", fb: "GA4", color: "bg-[#E37400]", glow: "group-hover:shadow-[0_0_20px_rgba(227,116,0,0.4)]" },
                  { base: "logos/googlemarketingplatform", alt: "CM360", fb: "CM", color: "bg-[#4285F4]", glow: "group-hover:shadow-[0_0_20px_rgba(66,133,244,0.4)]" },
                  { base: "logos/googlesearchconsole", alt: "Search Console", fb: "SC", color: "bg-[#458CF5]", glow: "group-hover:shadow-[0_0_20px_rgba(69,140,245,0.4)]" },
                ].map((t) => (
                  <div key={t.alt} className="flex flex-col items-center gap-2">
                    <LogoFallback baseName={t.base} alt={t.alt} fallbackText={t.fb} brandColor={t.color} glowColor={t.glow} />
                  </div>
                ))}
              </div>

              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["GA4 Config", "CM360 Tracking"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/5 text-blue-600 dark:text-blue-400 border border-blue-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-blue-500 dark:text-blue-400">
                    Analytics & Performance
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    GA4, CM360 & Search Console
                  </CardTitle>
                  <CardDescription className="text-left mt-2">
                    Attribution, conversions, and reporting, done right.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 4: Operations - Slack, ClickUp & Asana */}
          <GlassBentoCard className="md:col-span-1 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -left-10 -bottom-10 -z-10 size-48 rounded-full bg-emerald-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />

            <CardSkeleton className="py-4 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

              {/* Layer 1: sub-section eyebrow label */}
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.15em] text-teal-500/80 dark:text-teal-400/80">
                Delivery Workflow
              </span>

              {/* Layer 2 + 3: logos with tool names */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 relative z-10">
                {[
                  { base: "logos/slack", alt: "Slack", fb: "SL", color: "bg-[#4A154B]", glow: "group-hover:shadow-[0_0_20px_rgba(74,21,75,0.4)]" },
                  { base: "logos/clickup", alt: "ClickUp", fb: "CU", color: "bg-[#7B68EE]", glow: "group-hover:shadow-[0_0_20px_rgba(123,104,238,0.4)]" },
                  { base: "logos/asana", alt: "Asana", fb: "AS", color: "bg-[#F06A6A]", glow: "group-hover:shadow-[0_0_20px_rgba(240,106,106,0.4)]" },
                ].map((t) => (
                  <div key={t.alt} className="flex flex-col items-center gap-2">
                    <LogoFallback baseName={t.base} alt={t.alt} fallbackText={t.fb} brandColor={t.color} glowColor={t.glow} />
                  </div>
                ))}
              </div>

              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["Sprint Delivery", "Async Comm", "Task Allocation"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-teal-500 dark:text-teal-400">
                    Operations & Projects
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    Slack, ClickUp & Asana
                  </CardTitle>
                  <CardDescription className="text-left mt-2">
                    Slots straight into your sprints. Zero missed tasks.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 5: Design & Creative - Canva, Photoshop, Illustrator & Adobe Express */}
          <GlassBentoCard className="md:col-span-2 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 -z-10 size-48 rounded-full bg-fuchsia-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />

            <CardSkeleton className="py-4 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

              {/* Layer 1: sub-section eyebrow label */}
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.15em] text-fuchsia-500/80 dark:text-fuchsia-400/80">
                Creative Production
              </span>

              {/* Layer 2 + 3: logos with tool names */}
              <div className="grid grid-cols-4 gap-5 md:gap-8 relative z-10">
                {[
                  { base: "logos/canva", alt: "Canva", fb: "CV", color: "bg-[#00C4CC]" },
                  { base: "logos/adobephotoshop", alt: "Photoshop", fb: "PS", color: "bg-[#001E36]" },
                  { base: "logos/illustrator", alt: "Illustrator", fb: "Ai", color: "bg-[#330000]" },
                  { base: "logos/adobe", alt: "Adobe Express", fb: "AE", color: "bg-[#0D0E1A]" },
                ].map((t) => (
                  <div key={t.alt} className="flex flex-col items-center gap-2">
                    <LogoFallback
                      baseName={t.base}
                      alt={t.alt}
                      fallbackText={t.fb}
                      brandColor={t.color}
                      glowColor="group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["Ad Creatives", "Brand Kits", "Static & Motion Assets"].map((tag) => (
                  <span key={tag} className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-fuchsia-500/5 text-fuchsia-500 dark:text-fuchsia-400 border border-fuchsia-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-fuchsia-500 dark:text-fuchsia-400">
                    Design & Creative
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    Canva, Photoshop, Illustrator & Adobe Express
                  </CardTitle>
                  <CardDescription className="text-left mt-2 max-w-lg">
                    Scroll-stopping creatives, on brand, on schedule.
                  </CardDescription>
                </div>
                <div className="hidden sm:flex size-10 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 items-center justify-center text-fuchsia-500">
                  <Layers className="size-5" />
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 6: Multimedia & Animation - DaVinci, Premiere Pro, After Effects & CapCut */}
          <GlassBentoCard className="md:col-span-1 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 -z-10 size-48 rounded-full bg-fuchsia-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />

            <CardSkeleton className="py-4 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

              {/* Layer 1: sub-section eyebrow label */}
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.15em] text-fuchsia-500/80 dark:text-fuchsia-400/80">
                Video & Motion
              </span>

              {/* Layer 2 + 3: logos with tool names */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 relative z-10">
                {[
                  { base: "logos/davinci", alt: "DaVinci Resolve", fb: "DR", color: "bg-[#233A6C]" },
                  { base: "logos/premierepro", alt: "Premiere Pro", fb: "Pr", color: "bg-[#00005B]" },
                  { base: "logos/aftereffects", alt: "After Effects", fb: "Ae", color: "bg-[#00005B]" },
                  { base: "logos/capcut", alt: "CapCut", fb: "CC", color: "bg-[#000000]" },
                ].map((t) => (
                  <div key={t.alt} className="flex flex-col items-center gap-2">
                    <LogoFallback
                      baseName={t.base}
                      alt={t.alt}
                      fallbackText={t.fb}
                      brandColor={t.color}
                      glowColor="group-hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["Short-form Reels", "Motion Graphics", "Video Editing"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-fuchsia-500/5 text-fuchsia-600 dark:text-fuchsia-400 border border-fuchsia-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-fuchsia-500 dark:text-fuchsia-400">
                    Multimedia & Animation
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    DaVinci, Premiere Pro, After Effects & CapCut
                  </CardTitle>
                  <CardDescription className="text-left mt-2">
                    Scroll-stopping edits, reels, and motion graphics.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 7: AI Automation - Zapier, n8n, Make & GPT */}
          <GlassBentoCard className="md:col-span-2 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 -z-10 size-48 rounded-full bg-indigo-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />

            <CardSkeleton className="py-6 relative flex-1 flex-col justify-center items-center gap-4">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

              {/* Layer 1: sub-section eyebrow label */}
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.15em] text-indigo-500/80 dark:text-indigo-400/80">
                Workflow Automation
              </span>

              {/* Layer 2 + 3: logos with tool names */}
              <div className="grid grid-cols-5 gap-4 md:gap-8 relative z-10">
                {[
                  { base: "logos/zapier", alt: "Zapier", fb: "ZP", color: "bg-[#FF4A00]" },
                  { base: "logos/n8n", alt: "n8n", fb: "n8n", color: "bg-[#EA4B71]" },
                  { base: "logos/make", alt: "Make", fb: "Make", color: "bg-[#6D00CC]" },
                  { base: "logos/chatgpt", alt: "ChatGPT", fb: "GPT", color: "bg-[#10A37F]" },
                  { base: "logos/claude", alt: "Claude", fb: "Cl", color: "bg-[#C15F3C]" },
                ].map((t) => (
                  <div key={t.alt} className="flex flex-col items-center gap-2">
                    <LogoFallback
                      baseName={t.base}
                      alt={t.alt}
                      fallbackText={t.fb}
                      brandColor={t.color}
                      glowColor="group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["Lead Routing", "AI Ops", "No-Code Workflows"].map((tag) => (
                  <span key={tag} className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/5 text-indigo-500 dark:text-indigo-400 border border-indigo-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
                    AI Automation
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    Zapier, n8n, Make, GPT & Claude
                  </CardTitle>
                  <CardDescription className="text-left mt-2 max-w-lg">
                    Automated workflows, lead routing, and AI ops.
                  </CardDescription>
                </div>
                <div className="hidden sm:flex size-10 rounded-full border border-indigo-500/20 bg-indigo-500/5 items-center justify-center text-indigo-500">
                  <Sparkles className="size-5" />
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

        </div>
      </div>
    </section>
  );
}

// Subcomponents helper to match user styling
function GlassBentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        // Site runs forced-dark; card-premium is a custom class so it can't
        // sit behind a dark: variant (Tailwind variants only compose real
        // utilities) — apply it directly.
        "group relative flex flex-col justify-between gap-2.5 rounded-2xl p-5 md:p-6 overflow-hidden",
        "card-premium",
        "shadow-[0_16px_48px_rgba(32,28,103,0.08)]",
        "hover:shadow-[0_24px_64px_rgba(79,47,229,0.12)]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Glossy sweep-shine overlay effect on card hover */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent pointer-events-none -z-10" />
      {children}
    </motion.div>
  );
}

function CardSkeleton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center rounded-xl bg-muted border border-border overflow-hidden", className)}>
      {children}
    </div>
  );
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col mt-2">{children}</div>;
}

function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-neutral-900 dark:text-neutral-100 tracking-tight", className)}>
      {children}
    </h3>
  );
}

function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm text-neutral-500 dark:text-neutral-200 leading-relaxed", className)}>
      {children}
    </p>
  );
}
