import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allFixtures, categoryInfo, type Category } from "@/lib/fixtures";
import { ProductDetail } from "./product-detail";

type Props = { params: Promise<{ slug: string }> };

/** Static params, metadata and page for one fixture category's detail pages. */
export function fixtureDetailRoute(category: Category) {
  const items = allFixtures.filter((f) => f.category === category);
  const find = (slug: string) => items.find((f) => f.slug === slug);

  return {
    generateStaticParams: () => items.map((f) => ({ slug: f.slug })),
    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const { slug } = await params;
      const f = find(slug);
      return f ? { title: `${f.model} ${f.name}`, description: f.about } : {};
    },
    Page: async function FixtureDetailPage({ params }: Props) {
      const { slug } = await params;
      const f = find(slug);
      if (!f) notFound();
      const info = categoryInfo[category];
      const specs: [string, string][] = [
        ...f.specs,
        ...(f.specialOrder ? ([["Availability", "Special Order"]] as [string, string][]) : []),
      ];
      return (
        <ProductDetail
          crumbs={[
            { href: "/products", label: "Products" },
            { href: info.href, label: info.label },
          ]}
          eyebrow={info.label}
          title={f.name}
          model={f.model}
          images={[f.src]}
          imageFit="contain"
          alt={`${f.model} ${f.name}`}
          specs={specs}
          description={[f.about]}
          listTitle="Features"
          list={f.features}
          relatedTitle={`More ${info.label.toLowerCase()}`}
          relatedFit="contain"
          related={items
            .filter((o) => o.slug !== f.slug)
            .map((o) => ({ href: `${info.href}/${o.slug}`, title: o.model, subtitle: o.desc, src: o.src }))}
        />
      );
    },
  };
}
