import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { stones } from "@/lib/stones";

export const metadata: Metadata = { title: "Stone" };

const uses = ["Kitchen countertops", "Islands and bars", "Bathroom vanity tops"];

export default function StonePage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Stone"
        title="Stone countertops"
        intro="Quartz countertops in 40 colors to choose from. Browse a selection below and ask us to see the full range."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Stone colors" title="Browse our stone colors" />
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3">
            {uses.map((u) => (
              <li key={u} className="flex items-center gap-2">
                <Check aria-hidden="true" className="size-5 shrink-0 text-primary" />
                <span>{u}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {stones.map(({ name, src }) => (
              <li key={name}>
                <figure>
                  <img
                    src={src}
                    alt={`${name} stone slab`}
                    loading="lazy"
                    className="aspect-square w-full rounded-sm border border-border object-cover"
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
