export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
  date: string;
  image: string;
  sections: { heading: string; body: string[] }[];
  takeaways: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "real-cost-of-a-bad-marketing-hire",
    category: "Hiring",
    title: "The Real Cost of a Bad Marketing Hire, and How Vetting Prevents It",
    excerpt:
      "A mis-hire costs an agency far more than a salary. Here is the screening system that keeps them off your payroll.",
    read: "6 min read",
    date: "July 18, 2026",
    image: "/talent/in-01.jpg",
    sections: [
      {
        heading: "The invoice nobody sends you",
        body: [
          "When a marketing hire does not work out, the salary you paid is the smallest line on the real bill. The bigger costs hide in plain sight: campaigns that ran for months with weak structure, client trust that eroded one missed deadline at a time, and the hours your senior team spent re-checking work they expected to be finished.",
          "Agency owners consistently underestimate this because each individual incident feels small. A rewritten ad set here, a client call that needed smoothing there. Add them up over one quarter and a single mis-hire routinely costs three to five times their salary in lost margin and rework.",
        ],
      },
      {
        heading: "Why interviews alone keep failing",
        body: [
          "A confident interview tells you someone can talk about marketing. It does not tell you whether they can rebuild a Meta campaign structure under a deadline, or write an email flow that actually converts. Skills decay, portfolios get borrowed, and reference checks are usually a formality.",
          "The fix is boring and effective: make candidates do the actual work before they ever reach a client. Live tool exams inside Meta Business Manager and Google Ads. Portfolio walkthroughs where they explain every decision. Communication drills that simulate a difficult client message.",
        ],
      },
      {
        heading: "What a real vetting funnel looks like",
        body: [
          "At NXT Remote, roughly 100 applicants enter the funnel for every 3 who reach a client shortlist. The stages: portfolio and campaign history verification, multiple expert interview rounds, a hands-on skills exam inside real tools, and an infrastructure check covering hardware, backup internet, and power.",
          "That last stage surprises people, but it matters. A brilliant media buyer with an unreliable power supply is an unreliable media buyer. Screening the workstation is part of screening the person.",
        ],
      },
    ],
    takeaways: [
      "A mis-hire costs 3 to 5 times their salary once rework and client damage are counted.",
      "Interviews measure confidence. Live tool exams measure competence.",
      "Screen the infrastructure, not just the person.",
    ],
  },
  {
    slug: "cut-payroll-70-percent-without-cutting-output",
    category: "Offshore Teams",
    title: "How Agencies Cut Payroll up to 70% Without Cutting Output",
    excerpt:
      "The currency-arbitrage math behind offshore staffing, and where the savings actually come from.",
    read: "8 min read",
    date: "July 14, 2026",
    image: "/talent/in-06.jpg",
    sections: [
      {
        heading: "The math, without the hype",
        body: [
          "A mid-level performance marketer in the US or UK costs 75k to 95k USD a year before recruiter fees, payroll taxes, and benefits. An equally experienced specialist in India commands a strong local salary at a fraction of that number, because the cost of living differs by multiples, not percentages.",
          "This is currency arbitrage, not corner-cutting. The specialist earns a top-tier local wage, often above what local agencies pay. You pay far less than a local hire. Both sides of the arrangement genuinely win, which is why the model has stuck.",
        ],
      },
      {
        heading: "Where the savings actually land",
        body: [
          "Up to 70% of payroll cost is the headline, but the second-order effects matter more. Agencies reinvest the difference into more ad spend management capacity, faster creative production, and thicker margins that survive a slow quarter.",
          "The savings collapse, though, if you spend them managing chaos. Unvetted freelancers, timezone confusion, and no HR layer will quietly consume everything the arbitrage gave you. The model only works when someone handles vetting, payroll, and management discipline.",
        ],
      },
      {
        heading: "What to check before you commit",
        body: [
          "Ask how candidates are screened, who runs payroll and compliance, what the replacement policy is, and how working-hours overlap with your timezone is scheduled. If the answers are vague, the discount is not a discount. It is deferred cost.",
        ],
      },
    ],
    takeaways: [
      "Offshore savings come from cost-of-living arbitrage, not lower quality.",
      "Reinvested payroll savings compound: more capacity, better margins.",
      "Unmanaged offshore chaos eats the entire saving. Management is the product.",
    ],
  },
  {
    slug: "what-top-media-buyers-do-differently",
    category: "Paid Media",
    title: "What a Top 3% Media Buyer Does Differently in Meta and Google Ads",
    excerpt:
      "Signals we test for in live-tool exams: structure, pacing, creative iteration, and reporting discipline.",
    read: "7 min read",
    date: "July 9, 2026",
    image: "/talent/in-08.jpg",
    sections: [
      {
        heading: "Structure before spend",
        body: [
          "Average buyers launch campaigns. Elite buyers design account structures: clean naming conventions, deliberate audience segmentation, and budget paths that make performance readable at a glance. In our live exams, we can predict a candidate's ceiling within minutes of watching them structure an account.",
          "Sloppy structure is not cosmetic. It hides losers, starves winners, and makes every optimization decision slower for the rest of the account's life.",
        ],
      },
      {
        heading: "Creative iteration as a system",
        body: [
          "The top 3% treat creative testing as a weekly manufacturing process: hypothesis, variation, verdict, archive. They keep a log of what died and why. Average buyers test when they remember to, and repeat dead angles because nobody wrote anything down.",
          "In interviews we ask one question that separates the tiers instantly: show us your last ten losing ads and what each one taught you. Elite buyers have the receipts.",
        ],
      },
      {
        heading: "Reporting that clients actually read",
        body: [
          "Great buyers translate ROAS movements into two sentences a founder can forward to their own boss. That communication skill is tested in our screening as rigorously as the media buying itself, because agency clients churn over silence far more often than over performance.",
        ],
      },
    ],
    takeaways: [
      "Account structure quality predicts long-term performance ceiling.",
      "Creative testing must be a logged, weekly system, not an occasional event.",
      "Client-readable reporting retains accounts as much as performance does.",
    ],
  },
  {
    slug: "new-agency-operations-stack",
    category: "AI & Automation",
    title: "Zapier, n8n, Make, GPT and Claude: the New Agency Operations Stack",
    excerpt:
      "Where AI automation actually saves agency hours today, from lead routing to reporting.",
    read: "9 min read",
    date: "July 2, 2026",
    image: "/talent/in-17.jpg",
    sections: [
      {
        heading: "Automation that pays rent",
        body: [
          "Skip the demos. The automations that reliably save agency hours today are unglamorous: lead routing from forms into the CRM with scoring, weekly reporting drafts assembled from GA4 and ad platforms, client onboarding checklists that trigger themselves, and inbox triage that labels and drafts.",
          "Each one saves 2 to 6 hours a week. Stack five of them and you have returned a full working day to every account manager.",
        ],
      },
      {
        heading: "Where GPT and Claude fit",
        body: [
          "LLMs slot into the stack as the reasoning layer between triggers and actions: summarizing a call transcript into CRM notes, drafting the first version of a weekly client update, or scoring inbound leads against your ideal profile. The automation platforms move the data. The models decide and draft.",
          "The failure mode is letting models act without review on anything client-facing. The winning pattern keeps a human on the last step and lets the machine do the first 80%.",
        ],
      },
      {
        heading: "Buying the skill instead of the tool",
        body: [
          "Every platform in this stack is cheap. The scarce resource is the person who can look at your agency's operations, spot the five automations worth building, and ship them reliably. That is exactly the AI Automation specialist profile we vet for.",
        ],
      },
    ],
    takeaways: [
      "Boring automations (routing, reporting, onboarding) deliver the real hours back.",
      "LLMs are the reasoning layer; keep a human on the final client-facing step.",
      "The tools are cheap. The specialist who wires them well is the asset.",
    ],
  },
  {
    slug: "building-an-seo-pod-that-ships",
    category: "SEO & Content",
    title: "Building an SEO Pod That Ships: Roles, Rituals, and Reporting",
    excerpt:
      "How a two-person offshore SEO pod plugs into your delivery calendar without adding management load.",
    read: "5 min read",
    date: "June 25, 2026",
    image: "/talent/in-19.jpg",
    sections: [
      {
        heading: "The two-person pod",
        body: [
          "The most efficient SEO unit we place is a pair: one technical and strategy specialist, one content operator. The strategist owns audits, architecture, and the roadmap. The content operator turns briefs into shipped pages on a fixed weekly cadence.",
          "A pod beats a lone SEO generalist because the two skill sets rarely peak in one person, and it beats a large team because two people can share full context on every account without meetings multiplying.",
        ],
      },
      {
        heading: "Rituals that keep it shipping",
        body: [
          "One weekly planning call inside your existing standup. A shared delivery board in your ClickUp or Asana, not a separate tool. A monthly report template agreed in advance so reporting takes an hour, not a day. The pod runs inside your operating system rather than beside it.",
        ],
      },
      {
        heading: "What to measure in the first 90 days",
        body: [
          "Weeks 1 to 4: technical debt cleared and content velocity established. Weeks 5 to 8: first ranking movements on long-tail targets. Weeks 9 to 12: pipeline of pages compounding and the first commercial-intent wins. Judge the pod on shipped output and trajectory, not on vanity rankings in week 3.",
        ],
      },
    ],
    takeaways: [
      "A strategist plus content operator pair outperforms lone generalists.",
      "Run the pod inside your existing tools and standups, never beside them.",
      "First 90 days: judge shipped output and trajectory, not early rankings.",
    ],
  },
  {
    slug: "timezone-overlap-is-a-design-choice",
    category: "Operations",
    title: "Timezone Overlap Is a Design Choice: Scheduling Offshore Teams Right",
    excerpt:
      "Dedicated working-hours overlap beats midnight standups. The scheduling patterns that work.",
    read: "6 min read",
    date: "June 18, 2026",
    image: "/talent/in-12.jpg",
    sections: [
      {
        heading: "The overlap window",
        body: [
          "India sits ahead of the US and behind Australia, which makes it a scheduling hinge rather than a problem. A specialist working a shifted local day gives a US agency 3 to 4 hours of live overlap every morning, and an Australian agency the same in their afternoon.",
          "The mistake is leaving overlap to chance. We contract it explicitly: dedicated working-hours overlap is agreed at placement, so your standup time is their scheduled time, every day.",
        ],
      },
      {
        heading: "Design the day around the handoff",
        body: [
          "The strongest pattern is the overnight handoff: you brief at your end of day, work happens while you sleep, and results are waiting at your morning standup. Agencies describe it as compressing the calendar, because feedback loops that took two days now close in one.",
        ],
      },
      {
        heading: "Protecting the specialist",
        body: [
          "Sustainable overlap means a sane shifted schedule, not permanent night work. Specialists who keep humane hours stay for years, and tenure is where offshore teams compound in value. Burned-out night shifts churn, and churn destroys the savings.",
        ],
      },
    ],
    takeaways: [
      "Contract the overlap window explicitly instead of hoping for it.",
      "Use the overnight handoff to compress feedback loops.",
      "Humane schedules drive tenure, and tenure is where the value compounds.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
