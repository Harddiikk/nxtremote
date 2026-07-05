"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { WorldMapSkeleton } from "./world-map-skeleton";
import { KeyboardSkeleton } from "./keyboard-skeleton";
import { LoginSkeleton } from "./login-skeleton";
import { ChatConversation } from "./chat";
import { VerticalPulseLines } from "./vertical-pulse-lines";
import { FlippingImagesWithBar } from "./flipping-images";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { Container } from "../container";
import { Award, Coins, Briefcase } from "lucide-react";

export function FeaturesOne() {
  return (
    <Container as="section" id="product" className="py-10 md:py-20 lg:py-32">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
          The Scaling Dilemma
        </Subheading>
        <Heading className="mt-2 text-neutral-900 dark:text-neutral-100">
          High Local Salaries Shouldn't Stall Your Agency’s Growth
        </Heading>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Finding skilled media buyers, SEO strategists, and account managers in local markets is becoming unsustainably expensive. NXT Remote solves this by sourcing, vetting, and embedding top-tier offshore digital marketing talent directly into your workflow.
        </p>
      </div>

      <div className="mx-auto mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:grid-rows-2">
        <Card className="md:row-span-2">
          <CardContent className="flex h-full flex-col">
            <CardHeader>
              <CardTitle>Strict Technical Sourcing</CardTitle>
              <CardDescription>
                We vet candidates specifically for digital agency roles—no generic VAs allowed.
              </CardDescription>
            </CardHeader>
            <CardSkeleton className="mt-auto flex flex-1 items-center justify-center overflow-hidden pt-4">
              <LoginSkeleton />
            </CardSkeleton>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex h-full flex-col">
            <CardHeader>
              <CardTitle>Global Talent Pool</CardTitle>
              <CardDescription>
                We source top talent from global currency-arbitrage hubs, matching your timezone seamlessly.
              </CardDescription>
            </CardHeader>
            <CardSkeleton className="mt-auto flex flex-1 items-center justify-center pt-4">
              <WorldMapSkeleton />
            </CardSkeleton>
          </CardContent>
        </Card>

        <Card className="md:row-span-2">
          <CardContent className="flex h-full flex-col">
            <CardHeader>
              <CardTitle>Instant Workspace Integration</CardTitle>
              <CardDescription>
                Candidates are fully operational from Day 1 in your Slack, ClickUp, or Asana environments.
              </CardDescription>
            </CardHeader>
            <CardSkeleton className="mt-auto flex flex-1 flex-col items-center justify-between gap-2 overflow-hidden pt-4">
              <ChatConversation className="min-h-0 shrink p-2" />
              <VerticalPulseLines className="h-24 shrink-0" />
              <div className="shrink-0 scale-75">
                <FlippingImagesWithBar />
              </div>
            </CardSkeleton>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex h-full flex-col">
            <CardHeader>
              <CardTitle>Zero Training Lag</CardTitle>
              <CardDescription>
                We verify agency stack fluency across Meta Business Manager, HubSpot, and GoHighLevel.
              </CardDescription>
            </CardHeader>
            <CardSkeleton className="mt-auto flex flex-1 items-center justify-center overflow-hidden mask-r-from-50% pt-4">
              <KeyboardSkeleton />
            </CardSkeleton>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3">
        <FeatureCard
          icon={<Award className="text-brand-secondary dark:text-brand-accent size-6" />}
          title="Pre-Vetted Expertise"
          description="Only the top 3% of marketing professionals pass our rigorous technical and communication assessments."
        />
        <FeatureCard
          icon={<Coins className="text-brand-secondary dark:text-brand-accent size-6" />}
          title="Up to 70% Cost Efficiency"
          description="Reinvest your overhead savings directly into client acquisition and scaling your agency operations."
        />
        <FeatureCard
          icon={<Briefcase className="text-brand-secondary dark:text-brand-accent size-6" />}
          title="Zero HR Overhead"
          description="We handle the sourcing, payroll, and compliance, so you can focus entirely on strategy and delivery."
        />
      </div>
    </Container>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2 p-6", className)}>{children}</div>
  );
}

function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-base md:text-lg font-semibold text-neutral-900 dark:text-white",
        className,
      )}
    >
      {children}
    </h3>
  );
}

function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-base text-balance text-neutral-600 dark:text-neutral-400 leading-relaxed",
        className,
      )}
    >
      {children}
    </p>
  );
}

function CardSkeleton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl bg-white p-6 dark:bg-neutral-900">
      {icon}
      <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-base text-balance text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
