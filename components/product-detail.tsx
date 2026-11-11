import Link from "next/link";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { ProductGallery } from "./product-gallery";
import { CtaBand } from "./sections";

export type RelatedItem = { href: string; title: string; subtitle?: string; src: string };

export function ProductDetail({
  crumbs,
  eyebrow,
  title,
  model,
  images,
  imageFit,
  alt,
  note,
  specs,
  description,
  listTitle,
  list,
  relatedTitle,
  related,
  relatedFit = "cover",
}: {
  crumbs: { href: string; label: string }[];
  eyebrow: string;
  title: string;
  model?: string;
  images: string[];
  imageFit?: "cover" | "contain";
  alt: string;
  note?: string;
  specs: [string, string][];
  description: string[];
  listTitle: string;
  list: string[];
  relatedTitle: string;
  related: RelatedItem[];
  relatedFit?: "cover" | "contain";
}) {
  const quoteHref = `${site.emailHref}?subject=${encodeURIComponent(`Quote request: ${model ?? title}`)}`;
  return (
    <>
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-1">
                  <Link href={c.href} className="rounded underline-offset-4 hover:text-primary hover:underline">
                    {c.label}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-4" />
                </li>
              ))}
              <li aria-current="page" className="text-ink">
                {model ?? title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              {note && <p className="mb-3 text-sm italic text-muted-foreground">{note}</p>}
              <ProductGallery images={images} alt={alt} caption={model ?? title} fit={imageFit} />
            </div>
            <div className="min-w-0">
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
              <h1 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] text-ink md:text-4xl">{title}</h1>
              {model && (
                <p className="mt-3 text-muted-foreground">
                  Model: <span className="font-semibold text-ink">{model}</span>
                </p>
              )}
              <p className="mt-4 text-lg font-semibold text-ink">Call for Price</p>

              <dl className="mt-6 divide-y divide-border border-y border-border">
                {specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[9rem_1fr] gap-4 py-3 sm:grid-cols-[11rem_1fr]">
                    <dt className="font-semibold text-ink">{k}</dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={quoteHref}>
                  <Mail aria-hidden="true" className="size-5" /> Request a Quote
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline">
                  <Phone aria-hidden="true" className="size-5" /> Call {site.phone}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <h2 className="text-xl font-semibold uppercase tracking-[0.1em] text-ink md:text-2xl">Description</h2>
            <span aria-hidden="true" className="mt-4 block h-px w-16 bg-slate-400" />
            <div className="mt-5 space-y-4 text-lg text-foreground">
              {description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-semibold uppercase tracking-[0.1em] text-ink md:text-2xl">{listTitle}</h2>
            <span aria-hidden="true" className="mt-4 block h-px w-16 bg-slate-400" />
            <ul className="mt-5 list-disc space-y-2 pl-5 text-lg text-foreground marker:text-primary">
              {list.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl font-semibold uppercase tracking-[0.1em] text-ink md:text-2xl">{relatedTitle}</h2>
            <span aria-hidden="true" className="mt-4 block h-px w-16 bg-slate-400" />
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="group block rounded-sm">
                    <img
                      src={r.src}
                      alt=""
                      loading="lazy"
                      className={
                        relatedFit === "cover"
                          ? "aspect-square w-full rounded-sm border border-border object-cover"
                          : "aspect-[4/3] w-full rounded-sm border border-border bg-white object-contain p-2"
                      }
                    />
                    <span className="mt-2 block text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink group-hover:text-primary sm:text-sm">
                      {r.title}
                    </span>
                    {r.subtitle && (
                      <span className="mt-1 block text-center text-xs text-muted-foreground">{r.subtitle}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
