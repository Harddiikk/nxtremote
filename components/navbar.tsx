"use client";

import { cn } from "@/lib/utils";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

export function Navbar() {
  const navItems = [
    { name: "About Us", link: "/about" },
    { name: "How We Hire", link: "/services#process" },
    { name: "Hire Marketers", link: "/services" },
    { name: "Pricing", link: "/pricing" },
    {
      name: "Resources",
      link: "#",
      children: [
        { name: "FAQs", link: "/pricing#faq" },
        { name: "Our Story", link: "/about" },
        { name: "Vetting Process", link: "/services#process" },
      ],
    },
  ];

  return (
    <header className="fixed inset-x-0 top-6 z-50 mx-auto w-full max-w-7xl px-4 md:px-8">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </header>
  );
}

const DesktopNav = ({ navItems }: { navItems: any[] }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <motion.div
      className={cn(
        "liquid-glass relative z-50 mx-auto hidden w-full flex-row items-center justify-between rounded-full px-6 py-3 lg:flex",
      )}
    >
      <Logo />
      
      <div className="flex-1 flex flex-row items-center justify-center">
        <Menu setActive={setActive}>
          <Link href="/about" className="flex items-center">
            <span className="cursor-pointer text-sm font-semibold text-neutral-800 hover:text-brand-secondary transition-colors px-3 py-1">
              About Us
            </span>
          </Link>
          
          <Link href="/services#process" className="flex items-center">
            <span className="cursor-pointer text-sm font-semibold text-neutral-800 hover:text-brand-secondary transition-colors px-3 py-1">
              How We Hire
            </span>
          </Link>

          <Link href="/services" className="flex items-center">
            <span className="cursor-pointer text-sm font-semibold text-neutral-800 hover:text-brand-secondary transition-colors px-3 py-1">
              Hire Marketers
            </span>
          </Link>

          <Link href="/pricing" className="flex items-center">
            <span className="cursor-pointer text-sm font-semibold text-neutral-800 hover:text-brand-secondary transition-colors px-3 py-1">
              Pricing
            </span>
          </Link>

          <MenuItem setActive={setActive} active={active} item="Resources">
            <div className="flex flex-col space-y-3 text-sm min-w-40 p-2">
              <HoveredLink href="/pricing#faq">FAQs</HoveredLink>
              <HoveredLink href="/about">Our Story</HoveredLink>
              <HoveredLink href="/services#process">Vetting Process</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/apply">
          <span className="text-xs font-bold text-neutral-700 hover:text-brand-secondary transition-colors px-4 py-2 cursor-pointer border border-neutral-300 rounded-full bg-transparent hover:bg-neutral-100">
            Apply as Talent
          </span>
        </Link>

        <Link href="/hire">
          <button className="rounded-full bg-brand-primary text-xs px-5 py-2.5 font-bold text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] hover:opacity-90 transition-opacity cursor-pointer">
            Hire Talent
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems }: { navItems: any[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <motion.div
        animate={{ borderRadius: open ? "16px" : "9999px" }}
        key={String(open)}
        className="liquid-glass relative mx-auto flex w-full flex-col items-center justify-between px-6 py-4"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
                <button
              onClick={() => setOpen(!open)}
              className="text-neutral-900 focus:outline-none cursor-pointer"
            >
              {open ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 flex w-full flex-col items-start justify-start gap-4 border-t border-neutral-200 pt-6"
            >
              {navItems.map((navItem: any, idx: number) => (
                <div key={`navItem-${idx}`} className="w-full">
                  {navItem.children ? (
                    <MobileChildNavItems navItem={navItem} />
                  ) : (
                    <Link
                      href={navItem.link}
                      onClick={() => setOpen(false)}
                      className="relative text-sm font-semibold text-neutral-800 hover:text-brand-secondary block py-1.5"
                    >
                      <motion.span className="block">
                        {navItem.name}
                      </motion.span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col gap-3 w-full mt-4 border-t border-neutral-200 pt-4">
                <Link 
                  href="/apply" 
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  <button className="w-full rounded-lg border border-neutral-300 py-2.5 font-semibold text-neutral-700 text-sm cursor-pointer hover:bg-neutral-100 transition-colors">
                    Apply as Talent
                  </button>
                </Link>
                
                <Link 
                  href="/hire" 
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  <button className="w-full rounded-lg bg-brand-primary py-2.5 font-bold text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] text-sm cursor-pointer hover:opacity-90 transition-opacity">
                    Hire Talent
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const MobileChildNavItems = ({ navItem }: { navItem: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex w-full items-center justify-between text-sm font-semibold text-neutral-800 hover:text-brand-secondary py-1.5 cursor-pointer focus:outline-none"
      >
        <motion.span className="block">{navItem.name}</motion.span>
        <IconChevronDown className={cn("h-4 w-4 text-neutral-500 transition-transform duration-200", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pl-4 flex flex-col gap-2 mt-1.5 border-l border-neutral-200 ml-1.5"
          >
            {navItem.children.map((child: any, childIdx: number) => (
              <Link
                key={`child-${childIdx}`}
                href={child.link}
                className="relative text-xs font-medium text-neutral-600 hover:text-brand-secondary block py-1"
              >
                <motion.span className="block">{child.name}</motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Logo = () => {
  return (
    // Native anchor (not next/link): a Next Link preventDefaults the click and
    // relies on the client router, which was silently failing to send the logo
    // home. A plain href does a guaranteed browser navigation to Home.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/"
      aria-label="NXT Remote home"
      className="relative z-20 flex items-center"
    >
      {/* Dark wordmark on the white liquid-glass bar, sized up per client */}
      <img
        src="/logo-nxr.png"
        alt="NXT Remote"
        className="h-8 md:h-9 w-auto object-contain"
      />
    </a>
  );
};

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm font-semibold text-neutral-800 hover:text-brand-secondary transition-colors px-3 py-1 flex items-center gap-1"
      >
        {item}
        <IconChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", active === item && "rotate-180")} />
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 -translate-x-1/2 transform pt-4">
              <div className="">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="overflow-hidden rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-neutral-200"
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="h-full w-max p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex justify-center items-center space-x-2"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex gap-4">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-base font-normal text-black">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-600 hover:text-brand-secondary transition-colors block py-0.5"
    >
      {children}
    </Link>
  );
};
