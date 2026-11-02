import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaBand, PageHero } from "@/components/sections";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Products" };

const products = [
  {
    id: "countertops",
    eyebrow: "Countertops",
    title: "Stone countertops",
    text: "A countertop is the surface you use every day. We help you compare colors and finishes so your choice looks right and suits how you cook and clean.",
    uses: ["Kitchen countertops", "Islands and bars", "Bathroom vanity tops"],
    list: "[Stone materials and colors you carry]",
    photo: "[Photo: stone slabs or countertop close-up]",
  },
  {
    id: "cabinets",
    eyebrow: "Cabinets",
    title: "Kitchen and bathroom cabinets",
    text: "Cabinets set the layout and storage of a room. Choosing them together with your countertop keeps sizes, colors and timing aligned.",
    uses: ["Kitchen cabinets", "Bathroom vanities", "Matching countertop and cabinet colors"],
    list: "[Cabinet styles and finishes you offer]",
    photo: "[Photo: cabinet styles or finishes]",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Countertops and cabinets for every room"
        intro="Explore our two product lines. Not sure what fits? Ask us and we will help you compare."
      />
      {products.map((p, i) => (
        <section key={p.id} id={p.id} className={cn("scroll-mt-28 py-16 md:py-24", i % 2 === 1 && "bg-muted")}>
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <PhotoPlaceholder label={p.photo} className={cn("aspect-[4/3] w-full", i % 2 === 1 && "lg:order-2")} />
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">{p.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">{p.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{p.text}</p>
              <ul className="mt-6 space-y-3">
                {p.uses.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-lg border border-dashed border-slate-400 bg-card p-4 text-muted-foreground">
                {p.list}
              </p>
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
