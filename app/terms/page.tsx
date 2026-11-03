import type { Metadata } from "next";
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
      <PageHero eyebrow="Legal" title="Terms of Use" intro="Last updated: [Effective date]" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          <p className="rounded-sm border border-dashed border-slate-400 bg-card p-4 text-muted-foreground">
            [Full terms of use text reviewed by your legal adviser]
          </p>
          {sections.map(({ title, text }) => (
            <div key={title}>
              <h2 className="text-xl font-semibold uppercase tracking-[0.08em] text-ink">{title}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{text}</p>
            </div>
          ))}
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
