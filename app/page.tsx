import Link from "next/link";
import { ArrowRight, ClipboardList, Gem, LayoutGrid, MessageSquare, Ruler } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaBand, SectionHeading } from "@/components/sections";

const categories = [
  {
    title: "Stone Countertops",
    text: "Countertops for kitchens, bathrooms, islands and bars, chosen to match the way you live.",
    photo: "[Photo: stone countertop]",
    icon: Gem,
  },
  {
    title: "Cabinets",
    text: "Kitchen and bathroom cabinetry that pairs with your countertop for one finished look.",
    photo: "[Photo: kitchen cabinets]",
    icon: LayoutGrid,
  },
];

const steps = [
  { icon: MessageSquare, title: "Tell us about your project", text: "Share your room, rough size and the look you want." },
  { icon: Ruler, title: "Choose stone and cabinets", text: "Pick colors, finishes and styles that work together." },
  { icon: ClipboardList, title: "Get your quote", text: "We put your countertops and cabinets into one clear quote." },
];

export default function Home() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Countertops &amp; Cabinetry
            </p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Stone and cabinets, planned together.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              United Stone &amp; Cabinet helps you choose countertops and cabinets for your kitchen, bathroom and
              more, so every piece fits and matches.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Request a Quote <ArrowRight aria-hidden="true" className="size-5" />
              </ButtonLink>
              <ButtonLink href="/products" variant="light">
                View Products
              </ButtonLink>
            </div>
          </div>
          <PhotoPlaceholder label="[Hero photo: finished kitchen]" className="aspect-[4/3] w-full shadow-xl" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Two products, one team"
            intro="Countertops and cabinets are the heart of a kitchen or bath. Working with one company keeps colors, sizes and timing in step."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {categories.map(({ title, text, photo, icon: Icon }) => (
              <Link
                key={title}
                href="/products"
                className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <PhotoPlaceholder label={photo} className="aspect-[16/10] rounded-none border-0" />
                <div className="flex flex-1 flex-col p-6">
                  <Icon aria-hidden="true" className="size-7 text-primary" />
                  <h3 className="mt-3 text-2xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">
                    Learn more
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="How it works" title="From idea to quote in three steps" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="rounded-xl bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary text-on-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-heading text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Our work" title="Recent projects" />
            <ButtonLink href="/gallery" variant="outline">
              See the gallery
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoPlaceholder label="[Project photo: kitchen]" className="aspect-[4/3]" />
            <PhotoPlaceholder label="[Project photo: bathroom]" className="aspect-[4/3]" />
            <PhotoPlaceholder label="[Project photo: island or bar]" className="aspect-[4/3] sm:col-span-2 lg:col-span-1" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
