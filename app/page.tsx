import { AiAcademy } from "@/components/ai-academy";
import { Booking } from "@/components/booking";
import { FAQs } from "@/components/faqs";
import { TalentShowcase } from "@/components/talent-showcase";
import { FeaturesOne } from "@/components/features-one";
import { FeaturesTwo } from "@/components/features-two";
import { GlobeSection } from "@/components/globe-section";
import Hero from "@/components/hero";
import { IntegrationsBento } from "@/components/integrations-bento";
import { LogoMarquee } from "@/components/logo-marquee";
import { Process } from "@/components/process";
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
      <LogoMarquee />
      <TalentShowcase />
      <IntegrationsBento />
      <FeaturesOne />
      <Process />
      <Testimonials />
      <GlobeSection />
      <FeaturesTwo />
      <AiAcademy />
      <Booking />
      <FAQs />
    </main>
  );
}
