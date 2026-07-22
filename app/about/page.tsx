import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { CTA } from "@/components/cta";
import { LinesGradientShader } from "@/components/lines-gradient-shader";
import { Award, Compass, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Offshore Staffing for Elite Marketers | NXT Remote",
  description:
    "We build the backend execution engines for the world's fastest-growing digital marketing brands. Sourcing specialized remote talent who live and breathe performance marketing.",
  openGraph: {
    title: "About Us - Offshore Staffing for Elite Marketers | NXT Remote",
    description:
      "We build the backend execution engines for the world's fastest-growing digital marketing brands. Sourcing specialized remote talent who live and breathe performance marketing.",
    type: "website",
  },
};

export default function AboutPage() {
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
            Our Story & Mission
          </Subheading>
          <Heading as="h1" className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Bridging the Gap Between Top Agencies and Elite Remote Talent
          </Heading>
          <p className="mt-6 text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We build the backend execution engines for the world’s fastest-growing digital marketing brands.
          </p>
        </Container>
      </section>

      {/* Story & Mission Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-transparent">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-4 md:px-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Subheading className="text-brand-highlight font-semibold tracking-wider text-xs uppercase">
              How we started
            </Subheading>
            <Heading as="h2" className="mt-2 mb-6 text-3xl md:text-4xl font-bold">
              Built by Marketers, For Marketers
            </Heading>
            <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                At NXT Remote, we don't believe in generic virtual assistants. We know that a high-growth digital marketing agency needs specialized technical execution to thrive. That’s why we built a dedicated offshore staffing solution focused exclusively on the digital marketing domain.
              </p>
              <p>
                We scout high-currency, top-talent hubs globally to find experienced professionals who live and breathe ROAS, algorithm changes, and conversion rate optimization. We ensure they seamlessly blend into your agency’s culture, communication tools, and core workflows from day one.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            <div className="p-6 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-white/5 shadow-xs">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                  <Compass className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-neutral-800 dark:text-neutral-100">
                    Laser Focus
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-200 mt-1 leading-relaxed">
                    100% digital marketing specialization. No generalists, no administrative fillers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-white/5 shadow-xs">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Award className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-neutral-800 dark:text-neutral-100">
                    Rigorous Standard
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-200 mt-1 leading-relaxed">
                    Our triple-vetted pipeline accepts only the top 3% of global digital applicants.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-white/5 shadow-xs">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-[#09B4E4]/10 text-[#09B4E4]">
                  <Heart className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-neutral-800 dark:text-neutral-100">
                    Seamless Fit
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-200 mt-1 leading-relaxed">
                    Natively trained in Slack, Jira, ClickUp, and Asana for zero integration lag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-20 bg-neutral-50 dark:bg-neutral-900/20 border-y border-neutral-200/30 dark:border-white/5">
        <Container className="max-w-4xl text-center px-4">
          <Subheading className="text-brand-accent font-semibold tracking-wider text-xs uppercase">
            Our Philosophy
          </Subheading>
          <blockquote className="mt-6 text-xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-relaxed max-w-3xl mx-auto">
            "Local strategy paired with global execution creates the ultimate competitive advantage for modern digital marketing agencies."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-1 w-8 rounded-full bg-brand-secondary" />
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-200">
              NXT Remote Core Belief
            </span>
            <div className="h-1 w-8 rounded-full bg-brand-secondary" />
          </div>
        </Container>
      </section>

      {/* Bottom Call to Action */}
      <CTA />
    </main>
  );
}
