import type { Metadata } from "next";
import { Handshake, Layers, MessageCircle } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";

export const metadata: Metadata = { title: "About" };

const values = [
  { icon: Layers, title: "Stone and cabinets together", text: "One team for both, so the pieces of your project fit." },
  { icon: MessageCircle, title: "Clear communication", text: "We explain your options and your quote in plain words." },
  { icon: Handshake, title: "Your home, your choice", text: "We help you compare, and the final say is always yours." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About United Stone & Cabinet"
        intro="A countertop and cabinet company focused on helping you get both right."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our story" title="Who we are" align="left" />
            <p className="mt-6 rounded-sm border border-dashed border-slate-400 bg-card p-4 text-lg text-muted-foreground">
              [Company story: when you started, who runs the business and what you are proud of]
            </p>
          </div>
          <PhotoPlaceholder label="[Photo: team or showroom]" className="aspect-[4/3] w-full" />
        </div>
      </section>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="How we work" title="What you can expect" />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col items-center rounded-sm bg-card p-8 text-center shadow-sm">
                <span className="grid size-12 place-items-center rounded-full border border-slate-300 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.08em] text-ink">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
