import Link from "next/link";
import { ArrowRight, ClipboardList, MessageSquare, Ruler } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaBand, SectionHeading } from "@/components/sections";
import { site } from "@/lib/site";

const stoneSwatches = [1, 2, 3, 4, 5, 6].map((n) => `[Stone color photo ${n}]`);
const cabinetSwatches = [1, 2, 3, 4].map((n) => `[Cabinet finish photo ${n}]`);

const collections = [
  {
    title: "Stone Countertops",
    text: "Countertops for kitchens, bathrooms, islands and bars, chosen to match the way you live.",
    photo: "[Photo: stone countertop]",
    href: "/products#countertops",
  },
  {
    title: "Cabinets",
    text: "Kitchen and bathroom cabinetry that pairs with your countertop for one finished look.",
    photo: "[Photo: kitchen cabinets]",
    href: "/products#cabinets",
  },
];

const steps = [
  { icon: MessageSquare, title: "Tell us about your project", text: "Share your room, rough size and the look you want." },
  { icon: Ruler, title: "Choose stone and cabinets", text: "Pick colors, finishes and styles that work together." },
  { icon: ClipboardList, title: "Get your quote", text: "We put your countertops and cabinets into one clear quote." },
];

const stats = [
  { value: "[Years in business]", label: "Years of experience" },
  { value: "[Projects completed]", label: "Projects completed" },
  { value: site.serviceArea, label: "Areas we serve" },
];

function SwatchGrid({ labels, cols }: { labels: string[]; cols: string }) {
  return (
    <ul className={`mt-12 grid gap-3 sm:gap-4 ${cols}`}>
      {labels.map((label) => (
        <li key={label}>
          <Link
            href="/products"
            className="block rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <PhotoPlaceholder label={label} className="aspect-[3/5] w-full" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <section className="bg-white pt-4 sm:pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative">
            <PhotoPlaceholder
              label="[Hero photo: finished kitchen]"
              className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:h-[36rem] lg:items-end lg:pr-16"
            />
            <div className="relative -mt-10 mx-3 bg-white p-6 text-center shadow-xl sm:mx-10 sm:p-8 lg:absolute lg:left-12 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[26rem] lg:-translate-y-1/2">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Countertops &amp; Cabinetry
              </p>
              <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-ink sm:text-4xl lg:text-3xl xl:text-4xl">
                Stone and cabinets, planned together
              </h1>
              <span aria-hidden="true" className="mx-auto mt-5 block h-px w-16 bg-slate-400" />
              <p className="mt-5 text-muted-foreground">
                United Stone &amp; Cabinet helps you choose countertops and cabinets for your kitchen, bathroom and
                more, so every piece fits and matches.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="/contact">
                  Request a Quote <ArrowRight aria-hidden="true" className="size-5" />
                </ButtonLink>
                <ButtonLink href="/products" variant="outline">
                  View Products
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title="Natural stone inspiration"
            intro="A first look at the stone colors you can choose for your countertops."
          />
          <SwatchGrid labels={stoneSwatches} cols="grid-cols-3 lg:grid-cols-6" />
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title="Cabinet finish colors"
            intro="Cabinet finishes that pair with your countertop for one finished look."
          />
          <SwatchGrid labels={cabinetSwatches} cols="mx-auto max-w-4xl grid-cols-2 sm:grid-cols-4" />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title="View our collections"
            intro="Countertops and cabinets are the heart of a kitchen or bath. Working with one company keeps colors, sizes and timing in step."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {collections.map(({ title, text, photo, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col overflow-hidden rounded-sm bg-card shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <PhotoPlaceholder label={photo} className="aspect-[16/10] rounded-none border-0" />
                <div className="flex flex-1 flex-col items-center p-6 text-center md:p-8">
                  <h3 className="text-xl font-semibold uppercase tracking-[0.12em] text-ink">{title}</h3>
                  <p className="mt-3 text-muted-foreground">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                    Read more
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading title="How it works" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex flex-col items-center rounded-sm bg-card p-8 text-center shadow-sm">
                <span className="grid size-12 place-items-center rounded-full border border-slate-300 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.08em] text-ink">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading title={`About ${site.name}`} />
        </div>
        <div className="mt-10 border-y border-border bg-[repeating-linear-gradient(135deg,#f8fafc_0,#f8fafc_6px,#eef2f7_6px,#eef2f7_7px)]">
          <ul className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
            {stats.map(({ value, label }) => (
              <li key={label} className="text-center">
                <p className="font-heading text-xl font-light text-ink md:text-2xl">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center py-12">
          <ButtonLink href="/about" variant="outline">
            Learn more about us
          </ButtonLink>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
