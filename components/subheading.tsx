import React from "react";
import { cn } from "@/lib/utils";

type SubheadingTag = "p" | "span" | "div";

interface SubheadingProps extends React.HTMLAttributes<HTMLElement> {
  tag?: SubheadingTag;
  children: React.ReactNode;
}

export function Subheading({
  tag: Tag = "p",
  children,
  className,
  ...props
}: SubheadingProps) {
  return (
    <Tag
      className={cn(
        "text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-200",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/** Small uppercase label that sits above section headings. */
export function Eyebrow({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-secondary dark:text-brand-accent",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
