import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

const sections = [
  {
    title: "Using this website",
    text: `This website is provided by ${site.name} to share information about our stone countertops and cabinets. By using the site, you agree to these terms.`,
  },
  {
    title: "Product information",
    text: "Natural stone varies from slab to slab, and colors on screen may differ from the real material. Photos are for reference. Please visit us or ask for samples before you decide.",
  },
  {
    title: "Quotes",
    text: "Information on this site is not a quote or an offer. Prices and availability are confirmed only in a written quote from us.",
  },
  {
    title: "Content",
    text: `Text, photos and logos on this site belong to ${site.name} or are used with permission. Please do not copy them without asking us first.`,
  },
  {
    title: "Changes",
    text: "We may update this page from time to time. The latest version is always the one posted here.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" intro="Last updated: November 1, 2026" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          {sections.map(({ title, text }) => (
            <div key={title}>
              <h2 className="text-xl font-semibold uppercase tracking-[0.08em] text-ink">{title}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{text}</p>
            </div>
          ))}
          <div className="rounded-sm border-l-4 border-amber-600 bg-amber-50 p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold uppercase tracking-[0.08em] text-ink">
              <AlertTriangle aria-hidden="true" className="size-5 shrink-0 text-amber-700" />
              Stone safety warning
            </h2>
            <p className="mt-3 text-lg text-slate-800">
              <strong className="text-red-800">Warning:</strong> Our stone products are not hazardous as shipped or in
              finished form. During fabrication (cutting, sawing, grinding, drilling, sanding) and installation, dust
              and powder that contains crystalline silica may cause irritation to the skin, eyes, nose and airways.
              Unprotected and prolonged exposure to such dust can cause illnesses such as silicosis, lung fibrosis,
              lung cancer and kidney disease. Whenever the product is fabricated, wear an OSHA-approved respirator for
              silica dust. A silica control program must be in place in accordance with all applicable laws and
              regulations. For more information and requirements, see{" "}
              <a
                href="https://www.p65warnings.ca.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded font-medium text-primary underline underline-offset-4"
              >
                www.P65Warnings.ca.gov
              </a>{" "}
              and{" "}
              <a
                href="https://www.osha.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded font-medium text-primary underline underline-offset-4"
              >
                www.osha.gov
              </a>
              .
            </p>
            <p className="mt-3 text-lg text-slate-800">
              <strong className="text-red-800">First aid:</strong> If the eyes or skin become irritated, flush with
              plenty of water for at least 15 minutes until symptoms subside. If excessive dust is inhaled, move to a
              place with fresh air. Consult a physician if you have difficulty breathing or any physical discomfort.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold uppercase tracking-[0.08em] text-ink">Contact</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Questions about these terms? Call{" "}
              <a href={site.phoneHref} className="rounded font-medium text-primary underline underline-offset-4">
                {site.phone}
              </a>{" "}
              or email{" "}
              <a href={site.emailHref} className="break-all rounded font-medium text-primary underline underline-offset-4">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
