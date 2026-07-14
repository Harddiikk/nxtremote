// Central place for site-wide constants.
export const WHATSAPP_NUMBER = "919211925035";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// cal.id booking page — every "book a call" CTA routes here.
export const BOOKING_URL = "https://cal.id/nxtremote";

export const SITE = {
  name: "NXT Remote",
  tagline: "Connecting Talent. Creating Impact.",
  title:
    "Offshore Staffing for Digital Marketing Agencies | NXT Remote",
  description:
    "Hire pre-vetted remote media buyers, SEO strategists, and marketing automation specialists. Full timezone overlap, audited infrastructure, up to 70% payroll savings.",
};
