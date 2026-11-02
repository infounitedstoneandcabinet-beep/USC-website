import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./button-link";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Ready to plan your countertops or cabinets?</h2>
          <p className="mt-2 text-lg text-blue-100">Tell us about your project and we will get back to you with a quote.</p>
        </div>
        <ButtonLink href="/contact" className="shrink-0">
          Request a Quote <ArrowRight aria-hidden="true" className="size-5" />
        </ButtonLink>
      </div>
    </section>
  );
}
