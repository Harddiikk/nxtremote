"use client";
import React from "react";

import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const MotionLink = motion.create(Link);

export const Badge = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <MotionLink
      href={href}
      className="flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground transition duration-200 hover:bg-muted active:scale-98 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:bg-white/10"
      whileHover="animate"
      initial="initial"
    >
      {children}{" "}
      <motion.span
        variants={{
          initial: { x: 0 },
          animate: { x: 2 },
        }}
      >
        <IconArrowRight className="size-4" />
      </motion.span>
    </MotionLink>
  );
};
