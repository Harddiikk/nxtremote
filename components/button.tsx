"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

export function Button({
  className,
  variant = "default",
  size = "md",
  children,
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={cn(
        "group/btn relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-3.5 text-base",
        variant === "default" && [
          "bg-brand-secondary text-white",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.2)]",
          "hover:bg-[#1a83f0]",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(11,117,226,0.45)]",
        ],
        variant === "outline" && [
          "bg-card text-foreground",
          "ring-1 ring-border",
          "shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
          "hover:bg-muted hover:ring-brand-secondary/40",
          "dark:bg-white/5 dark:text-neutral-100 dark:ring-white/15 dark:hover:bg-white/10 dark:hover:ring-white/25",
        ],
        variant === "ghost" && [
          "bg-transparent text-foreground hover:bg-muted",
          "dark:text-neutral-200 dark:hover:bg-white/5",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
