import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { Pricing } from "@/components/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | NXT Remote",
  description:
    "Flat-rate monthly pricing for pre-vetted offshore marketing specialists. No recruiter fees, no hidden costs.",
  openGraph: {
    title: "Pricing | NXT Remote",
    description:
      "Flat-rate monthly pricing for pre-vetted offshore marketing specialists. No recruiter fees, no hidden costs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | NXT Remote",
    description:
      "Flat-rate monthly pricing for pre-vetted offshore marketing specialists. No recruiter fees, no hidden costs.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <div className="pt-10 md:pt-24">
        <Pricing />
      </div>
      <FAQs />
      <CTA />
    </main>
  );
}
