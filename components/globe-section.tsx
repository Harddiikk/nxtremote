import { GlobeViz } from "./globe";
import { Subheading, Eyebrow } from "./subheading";

const STATS = [
  { value: "3", label: "continents deployed" },
  { value: "12 hrs", label: "working-hours coverage" },
  { value: "1", label: "flat monthly rate" },
];

export function GlobeSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0A0C1E] section-pad">
      {/* soft dark-blue blur wash so the band feels alive, not flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 60% at 78% 30%, rgba(79,47,229,0.28), transparent 60%), radial-gradient(45% 55% at 15% 80%, rgba(9,180,228,0.16), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-4">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <Eyebrow className="text-brand-accent">Global Deployment</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            We deploy elite digital marketers from{" "}
            <span className="text-gradient-brand">India to the world</span>
          </h2>
          <Subheading className="mt-4 max-w-xl text-white/65">
            One vetted talent hub, deployed into agencies across the US, UK,
            Europe, the Middle East, and APAC, matched to your working hours and
            embedded in your stack.
          </Subheading>

          <div className="mt-8 flex flex-wrap gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-extrabold text-gradient-brand">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-white/45 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Globe */}
        <div className="order-1 lg:order-2">
          <GlobeViz />
        </div>
      </div>
    </section>
  );
}
