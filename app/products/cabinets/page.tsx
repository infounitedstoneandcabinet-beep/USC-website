import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { cabinets } from "@/lib/cabinets";

export const metadata: Metadata = { title: "Cabinets" };

const uses = ["Kitchen cabinets", "Bathroom vanities", "Matching countertop and cabinet colors"];

export default function CabinetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Cabinets"
        title="Kitchen and bathroom cabinets"
        intro="15 cabinet styles and colors to choose from, planned together with your countertop for one finished look."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Cabinets" title="Cabinet styles and colors" />
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3">
            {uses.map((u) => (
              <li key={u} className="flex items-center gap-2">
                <Check aria-hidden="true" className="size-5 shrink-0 text-primary" />
                <span>{u}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
            {cabinets.map(({ name, src }) => (
              <li key={name}>
                <figure>
                  <img
                    src={src}
                    alt={`${name} cabinet door sample`}
                    loading="lazy"
                    className="aspect-[1/2] w-full rounded-sm border border-border object-cover"
                  />
                  <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink sm:text-sm">
                    {name}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
