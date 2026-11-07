import type { Metadata } from "next";
import { FixtureGrid } from "@/components/fixture-grid";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { kitchenSinks } from "@/lib/fixtures";

export const metadata: Metadata = { title: "Kitchen Sinks" };

export default function KitchenSinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Kitchen Sinks"
        title="Kitchen sinks"
        intro={`${kitchenSinks.length} models: stainless steel, black stainless and white farmhouse sinks, sized to fit your countertop cutout.`}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Kitchen Sinks" title="Available models" />
          <FixtureGrid items={kitchenSinks} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
