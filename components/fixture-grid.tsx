import type { Fixture } from "@/lib/fixtures";

export function FixtureGrid({ items }: { items: Fixture[] }) {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map(({ model, desc, src }) => (
        <li key={model}>
          <figure className="flex h-full flex-col rounded-sm border border-border bg-white p-4">
            <img src={src} alt={`${model} ${desc}`} loading="lazy" className="aspect-[4/3] w-full object-contain" />
            <figcaption className="mt-3 text-center">
              <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-ink">{model}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{desc}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
