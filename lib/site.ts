// Central place for site-wide constants.
// IMPORTANT: replace WHATSAPP_NUMBER with the real business number before launch.
export const WHATSAPP_NUMBER = "1234567890";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: "NXT Remote",
  tagline: "Connecting Talent. Creating Impact.",
  title:
    "Offshore Staffing for Digital Marketing Agencies | NXT Remote",
  description:
    "Hire pre-vetted remote media buyers, SEO strategists, and marketing automation specialists. Full timezone overlap, audited infrastructure, up to 70% payroll savings.",
};
