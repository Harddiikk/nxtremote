import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { FeaturesOne } from "@/components/features-one";
import { FeaturesTwo } from "@/components/features-two";
import Hero from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offshore Staffing Solutions for Digital Marketing Agencies | NXT Remote",
  description:
    "Scale your digital agency efficiently. Hire pre-vetted remote media buyers, SEO experts, and marketing automation specialists with NXT Remote. Save up to 70% on payroll.",
  openGraph: {
    title: "Offshore Staffing Solutions for Digital Marketing Agencies | NXT Remote",
    description:
      "Scale your digital agency efficiently. Hire pre-vetted remote media buyers, SEO experts, and marketing automation specialists with NXT Remote. Save up to 70% on payroll.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offshore Staffing Solutions for Digital Marketing Agencies | NXT Remote",
    description:
      "Scale your digital agency efficiently. Hire pre-vetted remote media buyers, SEO experts, and marketing automation specialists with NXT Remote. Save up to 70% on payroll.",
  },
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      <LogoCloud />
      <FeaturesOne />
      <Testimonials />
      <FeaturesTwo />
      <Pricing />
      <FAQs />
      <CTA />
    </main>
  );
}
