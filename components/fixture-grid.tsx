import Link from "next/link";
import { categoryInfo, type Fixture } from "@/lib/fixtures";

export function FixtureGrid({ items }: { items: Fixture[] }) {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map(({ model, slug, desc, src, category, specialOrder }) => (
        <li key={slug}>
          <Link
            href={`${categoryInfo[category].href}/${slug}`}
            className="group flex h-full flex-col rounded-sm border border-border bg-white p-4 transition-shadow duration-200 hover:shadow-md"
          >
            <img src={src} alt={`${model} ${desc}`} loading="lazy" className="aspect-[4/3] w-full object-contain" />
            <span className="mt-3 block text-center text-sm font-semibold uppercase tracking-[0.12em] text-ink group-hover:text-primary">
              {model}
            </span>
            <span className="mt-1 block text-center text-sm text-muted-foreground">{desc}</span>
            {specialOrder && (
              <span className="mt-2 block text-center text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Special Order
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
