import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/blog";
import { Button } from "@/components/button";
import { CTA } from "@/components/cta";
import { ArrowLeft, ArrowRight, Clock3, CheckCircle2 } from "lucide-react";
import { BOOKING_URL } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog | NXT Remote" };
  return {
    title: `${post.title} | NXT Remote Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <article className="section-pad pt-36 md:pt-44">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:underline"
          >
            <ArrowLeft className="size-4" /> All articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
            <span className="rounded-full bg-brand-secondary/20 px-3 py-1 font-bold uppercase tracking-wider text-brand-accent">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5" /> {post.read}
            </span>
          </div>

          <h1 className="mt-4 text-3xl leading-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            {post.excerpt}
          </p>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt=""
              className="h-64 w-full object-cover object-[center_15%] md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12]/60 to-transparent" />
          </div>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-xl md:text-2xl">{section.heading}</h2>
              {section.body.map((para, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-neutral-200"
                >
                  {para}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-12 rounded-2xl border border-brand-secondary/30 bg-brand-secondary/10 p-6">
            <h3 className="text-lg">Key takeaways</h3>
            <ul className="mt-4 space-y-3">
              {post.takeaways.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-neutral-100">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center md:p-8">
            <h3 className="text-xl">
              Want this working inside your agency?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-neutral-300">
              Meet interview-ready, pre-vetted specialists in 5 days. One
              30-minute call scopes your team.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block"
            >
              <Button>
                Book a Discovery Call <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <h3 className="text-lg">Keep reading</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-accent/50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                    {r.category}
                  </span>
                  <p className="mt-1.5 font-display text-sm font-bold leading-snug text-white group-hover:text-brand-accent">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </main>
  );
}
