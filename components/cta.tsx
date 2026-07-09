"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const images = [
  {
    src: "/resume1.jpg",
    alt: "Candidate Resume 1",
  },
  {
    src: "/resume2.jpeg",
    alt: "Candidate Resume 2",
  },
  {
    src: "/resume3.jpeg",
    alt: "Candidate Resume 3",
  },
  {
    src: "/resume4.jpeg",
    alt: "Candidate Resume 4",
  },
  {
    src: "/resume5.jpg",
    alt: "Candidate Resume 5",
  },
  {
    src: "/resume6.avif",
    alt: "Candidate Resume 6",
  },
];

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 50,
};

export function CTA() {
  const target = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end end"],
  });

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    SPRING_CONFIG,
  );
  const translateYNegative = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    SPRING_CONFIG,
  );

  return (
    <section
      ref={target}
      className="mx-auto my-10 grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 md:my-16 md:grid-cols-2 md:gap-16 md:px-8"
    >
      <div className="max-w-xl">
        <Heading
          as="h2"
          className="text-4xl font-bold tracking-tight text-balance text-black md:text-5xl dark:text-white animate-pulse-once"
        >
          Stop Vetting Resumes. Start Scaling Operations.
        </Heading>
        <Subheading className="mt-6 max-w-lg text-lg text-neutral-600 md:text-xl dark:text-neutral-400 leading-relaxed">
          Skip the scrolling, the ghosting, and the onboarding headaches. Tell us the digital marketing specialist your agency is missing, and let us handle the rest.
        </Subheading>
        <Link href="https://wa.me/1234567890?text=Hi%20NXT%20Remote,%20I'd%20like%20to%20schedule%20a%20WhatsApp%20discovery%20call." target="_blank" rel="noopener noreferrer">
          <Button className="mt-6">
            <span>Schedule a WhatsApp Discovery Call</span>
            <IconArrowRight className="mt-0.5 h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="relative max-h-140 overflow-hidden rounded-2xl bg-white/60 mask-t-from-50% mask-b-from-50% p-3 dark:bg-neutral-950/50">
        <div className="grid h-full grid-cols-2 gap-3">
          <motion.div className="flex flex-col gap-3" style={{ y: translateY }}>
            {images.slice(0, 3).map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-xl shadow-sm ring-1 shadow-black/10 ring-black/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={320}
                  className="h-44 w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="mt-10 flex flex-col gap-3"
            style={{ y: translateYNegative }}
          >
            {images.slice(3).map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-xl shadow-sm ring-1 shadow-black/10 ring-black/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={320}
                  className="h-44 w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
