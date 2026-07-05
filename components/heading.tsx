import React from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
  children: React.ReactNode;
}

export function Heading({
  as: Tag = "h1",
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-3xl tracking-tight text-balance text-neutral-800 md:text-5xl lg:text-6xl dark:text-neutral-200 font-bold",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
