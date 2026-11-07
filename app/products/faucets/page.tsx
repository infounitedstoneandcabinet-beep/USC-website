import type { Metadata } from "next";
import { FixtureGrid } from "@/components/fixture-grid";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { faucets } from "@/lib/fixtures";

export const metadata: Metadata = { title: "Faucets & Drains" };

export default function FaucetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Faucets & Drains"
        title="Faucets and drains"
        intro={`${faucets.length} models: kitchen faucets, sink drains and disposal flanges to finish your sink.`}
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Faucets & Drains" title="Available models" />
          <FixtureGrid items={faucets} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
