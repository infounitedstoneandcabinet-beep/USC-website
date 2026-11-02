import type { Metadata } from "next";
import { ArrowRight, Check, Droplets, LayoutGrid } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Products" };

const extras = [
  {
    icon: Droplets,
    title: "Sinks",
    text: "Stainless steel kitchen sinks and ceramic bathroom sinks, with 20 options to choose from.",
  },
  { icon: LayoutGrid, title: "Flooring", text: "Flooring in 30+ colors to complete your room." },
];

const products: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  uses: string[];
  list: string;
  photo: string;
  image?: { src: string; alt: string };
  href: string;
  cta: string;
}[] = [
  {
    id: "countertops",
    eyebrow: "Countertops",
    title: "Stone countertops",
    text: "A countertop is the surface you use every day. We help you compare colors and finishes so your choice looks right and suits how you cook and clean.",
    uses: ["Kitchen countertops", "Islands and bars", "Bathroom vanity tops"],
    list: "Quartz countertops in 40 colors to choose from.",
    photo: "[Photo: stone slabs or countertop close-up]",
    image: { src: "/client/补资料-Calacata-Elegant.png", alt: "Calacata Elegant stone slab close-up" },
    href: "/products/stone",
    cta: "See all stone colors",
  },
  {
    id: "cabinets",
    eyebrow: "Cabinets",
    title: "Kitchen and bathroom cabinets",
    text: "Cabinets set the layout and storage of a room. Choosing them together with your countertop keeps sizes, colors and timing aligned.",
    uses: ["Kitchen cabinets", "Bathroom vanities", "Matching countertop and cabinet colors"],
    list: "15 cabinet styles and colors to choose from.",
    photo: "[Photo: cabinet styles or finishes]",
    href: "/products/cabinets",
    cta: "View cabinets",
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
        <section
          key={p.id}
          id={p.id}
          className={cn("scroll-mt-32 py-16 md:py-24", i % 2 === 1 ? "bg-background" : "bg-white")}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            {p.image ? (
              <img
                src={p.image.src}
                alt={p.image.alt}
                className={cn("aspect-[4/3] w-full rounded-sm object-cover shadow-md", i % 2 === 1 && "lg:order-2")}
              />
            ) : (
              <PhotoPlaceholder label={p.photo} className={cn("aspect-[4/3] w-full", i % 2 === 1 && "lg:order-2")} />
            )}
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-primary">{p.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.1em] text-ink md:text-3xl">{p.title}</h2>
              <span aria-hidden="true" className="mt-5 block h-px w-16 bg-slate-400" />
              <p className="mt-4 text-lg text-muted-foreground">{p.text}</p>
              <ul className="mt-6 space-y-3">
                {p.uses.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-sm border-l-4 border-primary bg-card p-4 font-medium text-ink">{p.list}</p>
              <ButtonLink href={p.href} variant="outline" className="mt-6">
                {p.cta} <ArrowRight aria-hidden="true" className="size-5" />
              </ButtonLink>
            </div>
          </div>
        </section>
      ))}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Also available" title="Sinks and flooring" />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {extras.map(({ icon: Icon, title, text }) => (
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
