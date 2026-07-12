"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  Network, 
  Mail, 
  BarChart3, 
  CheckSquare, 
  ArrowRight, 
  Sparkles,
  Layers,
  ArrowUpRight
} from "lucide-react";

// Image Fallback Component
interface LogoFallbackProps {
  baseName: string;
  alt: string;
  fallbackText: string;
  brandColor: string;
  glowColor: string;
}

function LogoFallback({ baseName, alt, fallbackText, brandColor, glowColor }: LogoFallbackProps) {
  const formats = [".png", ".svg", ".webp", ".jpg", ".jpeg"];
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
        "relative flex items-center justify-center size-12 md:size-14 rounded-xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md transition-all duration-300 shadow-sm",
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
      
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 px-3 py-1 text-xs font-semibold text-brand-secondary dark:text-brand-accent backdrop-blur-md mb-4">
            <Sparkles className="size-3.5" />
            <span>Operational Stack Mastery</span>
          </div>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl md:text-5xl">
            Integrated with Your Existing Workflows
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Our pre-vetted marketing talent arrives fully operational from day one. Expert-level execution mapped across your agency's core software stack.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Card 1: CRM - HubSpot & GoHighLevel */}
          <GlassBentoCard className="md:col-span-2 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 -z-10 size-48 rounded-full bg-amber-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />
            
            <CardSkeleton className="h-32 flex-col justify-center items-center gap-3 relative">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              
              {/* Dynamic Connection Path Visual */}
              <div className="flex items-center gap-4 md:gap-12 relative z-10">
                <LogoFallback 
                  baseName="crm1-Photoroom" 
                  alt="HubSpot" 
                  fallbackText="HS" 
                  brandColor="bg-[#FF7A59]"
                  glowColor="group-hover:shadow-[0_0_20px_rgba(255,122,89,0.3)]"
                />
                
                {/* Connection line */}
                <div className="w-8 md:w-16 h-[1px] bg-neutral-200 dark:bg-neutral-800" />

                <LogoFallback 
                  baseName="crm2-Photoroom" 
                  alt="GoHighLevel" 
                  fallbackText="GHL" 
                  brandColor="bg-[#188BF6]"
                  glowColor="group-hover:shadow-[0_0_20px_rgba(24,139,246,0.3)]"
                />
              </div>
              
              {/* Feature mini indicators */}
              <div className="flex gap-2 relative z-10 flex-wrap justify-center">
                {["Pipeline Automation", "Lead Distribution", "CRM Sync"].map((tag) => (
                  <span key={tag} className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/5 text-amber-600 dark:text-amber-400 border border-amber-500/10 backdrop-blur-md">
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
                    HubSpot & GoHighLevel
                  </CardTitle>
                  <CardDescription className="text-left mt-2 max-w-lg">
                    Build customized pipelines, capture lead flows, and sync sales processes flawlessly with pre-vetted specialists.
                  </CardDescription>
                </div>
                <div className="hidden sm:flex size-10 rounded-full border border-amber-500/20 bg-amber-500/5 items-center justify-center text-amber-500">
                  <Network className="size-5" />
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 2: Email Marketing - Klaviyo, Brevo */}
          <GlassBentoCard className="md:col-span-1 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 -z-10 size-48 rounded-full bg-violet-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />
            
            <CardSkeleton className="h-32 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              
              {/* Stacked Flow Visual */}
              <div className="flex items-center gap-4 relative z-10">
                <LogoFallback 
                  baseName="klaviologo" 
                  alt="Klaviyo" 
                  fallbackText="KL" 
                  brandColor="bg-[#2B1A4A]"
                  glowColor="group-hover:shadow-[0_0_20px_rgba(43,26,74,0.4)]"
                />
                
                <div className="flex flex-col gap-1.5 justify-center items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="size-6 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center"
                  >
                    <Mail className="size-3 text-brand-accent" />
                  </motion.div>
                  <span className="text-[9px] text-neutral-400 font-mono">FLOW ACTIVE</span>
                </div>

                <LogoFallback 
                  baseName="em2-Photoroom" 
                  alt="Brevo" 
                  fallbackText="BV" 
                  brandColor="bg-[#00E5AA]"
                  glowColor="group-hover:shadow-[0_0_20px_rgba(0,229,170,0.3)]"
                />
              </div>

              <div className="flex gap-1.5 relative z-10">
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
                    Klaviyo & Brevo
                  </CardTitle>
                  <CardDescription className="text-left mt-2">
                    Maximize client retention and subscription LTV. From abandoned cart drip flows to targeted newsletter segmenting.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 3: Analytics - GA4 & Campaign Manager 360 */}
          <GlassBentoCard className="md:col-span-1 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -left-10 -bottom-10 -z-10 size-48 rounded-full bg-blue-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />
            
            <CardSkeleton className="h-32 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              
              {/* Horizontal layout */}
              <div className="flex items-center gap-3 relative z-10">
                <LogoFallback 
                  baseName="ads3-Photoroom" 
                  alt="GA4" 
                  fallbackText="GA4" 
                  brandColor="bg-[#E37400]"
                  glowColor="group-hover:shadow-[0_0_20px_rgba(227,116,0,0.4)]"
                />
                <div className="w-6 h-[1px] bg-neutral-200 dark:bg-neutral-800" />
                <LogoFallback 
                  baseName="cm360logo" 
                  alt="Campaign Manager 360" 
                  fallbackText="CM" 
                  brandColor="bg-[#4285F4]"
                  glowColor="group-hover:shadow-[0_0_20px_rgba(66,133,244,0.4)]"
                />
              </div>
              
              <div className="flex gap-1.5 relative z-10">
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
                    GA4 & Campaign Manager 360
                  </CardTitle>
                  <CardDescription className="text-left mt-2">
                    Optimize attribution models, configure custom conversions, and analyze cross-channel audience metrics with certified specialists.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </GlassBentoCard>

          {/* Card 4: Project Management - Slack, ClickUp, Asana & Jira */}
          <GlassBentoCard className="md:col-span-2 relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -left-10 -bottom-10 -z-10 size-48 rounded-full bg-emerald-500/10 blur-[50px] transition-all duration-500 group-hover:scale-125" />
            
            <CardSkeleton className="h-32 relative flex-col justify-center items-center gap-3">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
              
              {/* Horizontal grid with connectors */}
              <div className="grid grid-cols-4 gap-4 md:gap-8 relative z-10">
                <div className="flex flex-col items-center gap-2">
                  <LogoFallback 
                    baseName="slacklogo" 
                    alt="Slack" 
                    fallbackText="SL" 
                    brandColor="bg-[#4A154B]"
                    glowColor="group-hover:shadow-[0_0_20px_rgba(74,21,75,0.4)]"
                  />
                  <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">Slack</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LogoFallback 
                    baseName="clickuplogo" 
                    alt="ClickUp" 
                    fallbackText="CU" 
                    brandColor="bg-[#7B68EE]"
                    glowColor="group-hover:shadow-[0_0_20px_rgba(123,104,238,0.4)]"
                  />
                  <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">ClickUp</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LogoFallback 
                    baseName="asanalogo" 
                    alt="Asana" 
                    fallbackText="AS" 
                    brandColor="bg-[#F06A6A]"
                    glowColor="group-hover:shadow-[0_0_20px_rgba(240,106,106,0.4)]"
                  />
                  <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">Asana</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LogoFallback 
                    baseName="jiralogo" 
                    alt="Jira" 
                    fallbackText="JR" 
                    brandColor="bg-[#0052CC]"
                    glowColor="group-hover:shadow-[0_0_20px_rgba(0,82,204,0.4)]"
                  />
                  <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500">Jira</span>
                </div>
              </div>

              <div className="flex gap-1.5 relative z-10 flex-wrap justify-center">
                {["Sprint Delivery", "Asynchronous Comm", "Agile Task Allocation"].map((tag) => (
                  <span key={tag} className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardSkeleton>

            <CardContent>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-500 dark:text-emerald-400">
                    Operations & Projects
                  </span>
                  <CardTitle className="text-left mt-1 text-lg font-bold">
                    Slack, ClickUp, Asana & Jira
                  </CardTitle>
                  <CardDescription className="text-left mt-2 max-w-lg">
                    Perfect alignment with your sprint routines and communication protocols. Minimize friction and ensure zero missed tasks.
                  </CardDescription>
                </div>
                <div className="hidden sm:flex size-10 rounded-full border border-emerald-500/20 bg-emerald-500/5 items-center justify-center text-emerald-500">
                  <CheckSquare className="size-5" />
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
        "group relative flex flex-col justify-between gap-2.5 rounded-2xl p-5 md:p-6 overflow-hidden",
        "bg-white/40 dark:bg-card/60 backdrop-blur-xl",
        "border border-neutral-200/60 dark:border-white/5",
        "shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]",
        "hover:shadow-[0_20px_50px_rgba(11,117,226,0.06)] dark:hover:shadow-[0_20px_50px_rgba(0,229,170,0.06)]",
        "hover:border-neutral-300 dark:hover:border-white/10",
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
    <div className={cn("flex items-center justify-center rounded-xl bg-neutral-100/50 dark:bg-white/[0.03] border border-neutral-200/30 dark:border-white/5 overflow-hidden", className)}>
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
    <p className={cn("text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed", className)}>
      {children}
    </p>
  );
}
