import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button-link";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-20">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-ink md:text-5xl">{title}</h1>
        <span aria-hidden="true" className="mx-auto mt-6 block h-px w-16 bg-slate-400" />
        <p className="mt-6 text-lg text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.1em] text-ink md:text-3xl">{title}</h2>
      <span
        aria-hidden="true"
        className={cn("mt-5 block h-px w-16 bg-slate-400", align === "center" && "mx-auto")}
      />
      {intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-slate-700">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 md:py-16">
        <h2 className="text-2xl font-semibold uppercase tracking-[0.1em] text-white md:text-3xl">
          Ready to plan your countertops or cabinets?
        </h2>
        <p className="max-w-2xl text-lg text-slate-200">
          Tell us about your project and we will get back to you with a quote.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">
            Request a Quote <ArrowRight aria-hidden="true" className="size-5" />
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="light">
            <Phone aria-hidden="true" className="size-5" /> Call {site.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
