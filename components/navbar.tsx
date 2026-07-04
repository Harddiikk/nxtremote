"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/button";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const resourcesColumn = [
    {
      title: "Blog",
      href: "#",
      description: "Latest news and articles",
    },
    {
      title: "Documentation",
      href: "#",
      description: "Guides and API references",
    },
    {
      title: "Help Center",
      href: "#",
      description: "Get support and FAQs",
    },
    {
      title: "Changelog",
      href: "#",
      description: "See what's new",
    },
    {
      title: "Tutorials",
      href: "#",
      description: "Learn with video guides",
    },
  ];

  const { scrollY } = useScroll();

  const paddingHorizontal = useTransform(scrollY, [0, 50], [0, 16]);
  const paddingVertical = useTransform(scrollY, [0, 50], [0, 8]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 10);

    const scrollingDown = latest > lastScrollY.current;
    const scrollDelta = Math.abs(latest - lastScrollY.current);

    if (scrollDelta > 5) {
      if (scrollingDown && latest > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = latest;
    }
  });

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical,
      }}
      className="fixed inset-x-0 z-50 mx-auto w-full max-w-7xl"
    >
      <motion.div
        animate={{
          borderRadius: hasScrolled ? 24 : 0,
          backdropFilter: hasScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        className={`flex h-14 items-center justify-between px-4 transition-colors duration-300 sm:h-16 md:px-8 ${
          hasScrolled
            ? "bg-white/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-neutral-900/80 dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.3),0_1px_2px_-1px_rgba(0,0,0,0.3)]"
            : "bg-transparent shadow-none"
        }`}
        data-scrolled={hasScrolled}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <LogoIcon className="relative z-20 size-6 text-brand-secondary" />

          <span className="text-base font-bold text-black sm:text-lg dark:text-white">
            NXT Remote
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Services & Specializations
          </Link>

          <Link
            href="/pricing"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Pricing
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 lg:flex lg:gap-4">
          <Link
            href="https://wa.me/1234567890?text=Hi%20NXT%20Remote,%20I'd%20like%20to%20schedule%20a%20discovery%20call."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-4 py-2 text-sm">
              Book WhatsApp Call
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex size-10 items-center justify-center rounded-md lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <CloseIcon className="size-5 text-neutral-900 dark:text-white" />
          ) : (
            <MenuIcon className="size-5 text-neutral-900 dark:text-white" />
          )}
        </button>
      </motion.div>

      {/* Mobile Menu - Full Screen Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`fixed inset-0 top-14 z-40 flex flex-col bg-white sm:top-16 lg:hidden dark:bg-neutral-900 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-2">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
            >
              About Us
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
            >
              Services & Specializations
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
            >
              Pricing
            </Link>
          </div>

          {/* Bottom section with login and CTA */}
          <div className="mt-auto pt-6">
            <div className="mb-6 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.15)_20%,rgba(0,0,0,0.15)_80%,transparent)] mask-[repeating-linear-gradient(to_right,black_0px,black_4px,transparent_4px,transparent_8px)] dark:hidden" />
            <div className="mb-6 hidden h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0.2)_80%,transparent)] mask-[repeating-linear-gradient(to_right,black_0px,black_4px,transparent_4px,transparent_8px)] dark:block" />
            <Link
              href="https://wa.me/1234567890?text=Hi%20NXT%20Remote,%20I'd%20like%20to%20schedule%20a%20discovery%20call."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center"
            >
              <Button className="w-full rounded-xl px-4 py-3.5 text-base">
                Book WhatsApp Call
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

const BlogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

const DocsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const HelpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const CommunityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ChangelogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TutorialsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};

const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 20V4l12 16V4" className="stroke-brand-secondary" />
      <circle cx="18" cy="18" r="2" className="fill-brand-accent stroke-brand-accent animate-pulse" />
    </svg>
  );
};

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
};

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

const Arrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M15 16l4 -4" />
      <path d="M15 8l4 4" />
    </svg>
  );
};
