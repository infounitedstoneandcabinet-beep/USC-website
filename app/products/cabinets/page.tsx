import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";

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
          <PhotoPlaceholder
            label="[Cabinet style and color photos]"
            className="mx-auto mt-12 aspect-[16/9] w-full max-w-4xl"
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
