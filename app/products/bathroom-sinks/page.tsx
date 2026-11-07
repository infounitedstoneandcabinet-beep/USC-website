import type { Metadata } from "next";
import { FixtureGrid } from "@/components/fixture-grid";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { bathroomSinks } from "@/lib/fixtures";

export const metadata: Metadata = { title: "Bathroom Sinks" };

export default function BathroomSinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Bathroom Sinks"
        title="Bathroom sinks"
        intro={`${bathroomSinks.length} models: ceramic undermount and drop-in sinks for your vanity top.`}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Bathroom Sinks" title="Available models" />
          <FixtureGrid items={bathroomSinks} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
