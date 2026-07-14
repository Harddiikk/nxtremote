"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { CalendarCheck, ArrowUpRight } from "lucide-react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import { BOOKING_URL } from "@/lib/site";

const CAL_EMBED_JS = "https://app.cal.id/embed.js";
const CAL_ORIGIN = "https://cal.id";
const CAL_LINK = "nxtremote";

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      loaded?: boolean;
      ns?: Record<string, unknown>;
      q?: unknown[];
    };
  }
}

// Official Cal (cal.id fork) inline embed — plain iframes are blocked by
// X-Frame-Options, so this uses their embed.js loader instead.
export function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [embedFailed, setEmbedFailed] = useState(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Cal's embed posts messages once the booker actually renders; if none
    // arrive (script blocked, Cloudflare challenge, network), swap to the
    // fallback card instead of an endless spinner.
    let gotCalMessage = false;
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin === "string" && e.origin.includes("cal.id")) {
        gotCalMessage = true;
      }
    };
    window.addEventListener("message", onMessage);
    const timeout = window.setTimeout(() => {
      if (!gotCalMessage) setEmbedFailed(true);
    }, 15000);
    const cleanup = () => {
      window.removeEventListener("message", onMessage);
      window.clearTimeout(timeout);
    };

    // Cal.com's official loader stub (queues calls until embed.js arrives).
    (function (C: Window, A: string, L: string) {
      const p = function (a: { q: unknown[] }, ar: unknown) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal!;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            script.onerror = () => setEmbedFailed(true);
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = function (...apiArgs: unknown[]) {
              p(api as unknown as { q: unknown[] }, apiArgs);
            };
            (api as unknown as { q: unknown[] }).q = [];
            const namespace = args[1];
            if (typeof namespace === "string") {
              (cal.ns as Record<string, unknown>)[namespace] = api;
              p(cal as unknown as { q: unknown[] }, args);
            } else {
              p(cal as unknown as { q: unknown[] }, args);
            }
            return;
          }
          p(cal as unknown as { q: unknown[] }, args);
        };
    })(window, CAL_EMBED_JS, "init");

    window.Cal!("init", { origin: CAL_ORIGIN });
    window.Cal!("inline", {
      elementOrSelector: "#cal-inline-booking",
      calLink: CAL_LINK,
      config: { theme: "dark" },
    });

    return cleanup;
  }, []);

  return (
    <section
      id="book"
      className="relative section-pad border-t border-neutral-100 dark:border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
            No Forms, No Waiting
          </Subheading>
          <Heading as="h2" className="pt-2">
            Pick a Slot. Meet Your Shortlist.
          </Heading>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Grab 30 minutes with our placement team — walk out with a custom
            flat rate and a hiring plan for your first specialist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#0A1834]"
        >
          {/* Cal's script owns this node's children — never unmount it, or its
              <cal-inline> element gets re-parented into whatever replaces it. */}
          <div
            id="cal-inline-booking"
            ref={containerRef}
            className={embedFailed ? "hidden" : "h-160 w-full overflow-auto"}
          />
          {embedFailed && (
            <div className="flex h-105 flex-col items-center justify-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-secondary/10 dark:bg-brand-accent/10">
                <CalendarCheck className="size-7 text-brand-secondary dark:text-brand-accent" />
              </div>
              <p className="max-w-sm text-center text-sm font-semibold text-neutral-600 dark:text-neutral-300">
                The inline calendar couldn&apos;t load — book directly on our
                scheduling page instead.
              </p>
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button>
                  Book your discovery call
                  <ArrowUpRight className="size-4" />
                </Button>
              </Link>
            </div>
          )}
        </motion.div>

        <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
          Calendar not loading?{" "}
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-secondary underline-offset-2 hover:underline dark:text-brand-accent"
          >
            Open the booking page
          </Link>
        </p>
      </div>
    </section>
  );
}
