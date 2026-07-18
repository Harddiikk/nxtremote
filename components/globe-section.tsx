import { GlobeViz } from "./globe";
import { Heading } from "./heading";
import { Subheading, Eyebrow } from "./subheading";

const STATS = [
  { value: "3", label: "continents deployed" },
  { value: "12 hrs", label: "working-hours coverage" },
  { value: "1", label: "flat monthly rate" },
];

export function GlobeSection() {
  return (
    <section className="relative overflow-hidden border-t border-border section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-4">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <Eyebrow>Global Deployment</Eyebrow>
          <Heading as="h2" className="mt-3 max-w-xl">
            We deploy elite digital marketers from{" "}
            <span className="text-gradient-brand">India to the world</span>
          </Heading>
          <Subheading className="mt-4 max-w-xl">
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
                <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
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
