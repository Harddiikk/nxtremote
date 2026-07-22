import { Metadata } from "next";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import { CTA } from "@/components/cta";
import { ArrowRight, Clock3 } from "lucide-react";
import { BOOKING_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | NXT Remote",
  description:
    "Playbooks, benchmarks, and hiring insight for agencies building offshore digital marketing teams.",
};

const POSTS = [
  {
    category: "Hiring",
    title: "The Real Cost of a Bad Marketing Hire, and How Vetting Prevents It",
    excerpt:
      "A mis-hire costs an agency far more than a salary. Here is the screening system that keeps them off your payroll.",
    read: "6 min read",
    date: "July 18, 2026",
    image: "/talent/in-01.jpg",
  },
  {
    category: "Offshore Teams",
    title: "How Agencies Cut Payroll up to 70% Without Cutting Output",
    excerpt:
      "The currency-arbitrage math behind offshore staffing, and where the savings actually come from.",
    read: "8 min read",
    date: "July 14, 2026",
    image: "/talent/in-06.jpg",
  },
  {
    category: "Paid Media",
    title: "What a Top 3% Media Buyer Does Differently in Meta and Google Ads",
    excerpt:
      "Signals we test for in live-tool exams: structure, pacing, creative iteration, and reporting discipline.",
    read: "7 min read",
    date: "July 9, 2026",
    image: "/talent/in-08.jpg",
  },
  {
    category: "AI & Automation",
    title: "Zapier, n8n, Make, GPT and Claude: the New Agency Operations Stack",
    excerpt:
      "Where AI automation actually saves agency hours today, from lead routing to reporting.",
    read: "9 min read",
    date: "July 2, 2026",
    image: "/talent/in-17.jpg",
  },
  {
    category: "SEO & Content",
    title: "Building an SEO Pod That Ships: Roles, Rituals, and Reporting",
    excerpt:
      "How a two-person offshore SEO pod plugs into your delivery calendar without adding management load.",
    read: "5 min read",
    date: "June 25, 2026",
    image: "/talent/in-19.jpg",
  },
  {
    category: "Operations",
    title: "Timezone Overlap Is a Design Choice: Scheduling Offshore Teams Right",
    excerpt:
      "Dedicated working-hours overlap beats midnight standups. The scheduling patterns that work.",
    read: "6 min read",
    date: "June 18, 2026",
    image: "/talent/in-12.jpg",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="section-pad pt-36 md:pt-44">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Subheading className="text-brand-secondary font-semibold uppercase tracking-wider text-xs">
              Insights for Agency Builders
            </Subheading>
            <Heading as="h1" className="mt-2">
              The NXT Remote <span className="text-gradient-brand">Blog</span>
            </Heading>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
              Playbooks, benchmarks, and hiring insight for agencies building
              offshore digital marketing teams.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <article key={post.title} className="spin-card group">
                <div className="spin-inner flex h-full flex-col overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="h-44 w-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-secondary shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-bold leading-snug text-white">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-300">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-neutral-300">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="size-3.5" /> {post.read}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-neutral-300">
              Want these insights applied to your agency instead of your reading
              list?
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block"
            >
              <Button size="lg">
                Book a Discovery Call <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
