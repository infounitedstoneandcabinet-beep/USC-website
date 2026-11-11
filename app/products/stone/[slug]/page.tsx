import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { stoneCare, stoneDescription, stoneSpecs, stones } from "@/lib/stones";

export const dynamicParams = false;

export function generateStaticParams() {
  return stones.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stone = stones.find((s) => s.slug === slug);
  return stone
    ? { title: `${stone.name} Quartz`, description: `${stone.name} quartz countertops, 2CM, ${stone.availableIn.toLowerCase()}.` }
    : {};
}

export default async function StoneDetailPage({ params }: Props) {
  const { slug } = await params;
  const stone = stones.find((s) => s.slug === slug);
  if (!stone) notFound();
  return (
    <ProductDetail
      crumbs={[
        { href: "/products", label: "Products" },
        { href: "/products/stone", label: "Stone" },
      ]}
      eyebrow="Quartz"
      title={stone.name}
      images={stone.images}
      alt={`${stone.name} quartz slab`}
      note="Images are for reference only. Color and pattern can vary from slab to slab. Please call us or visit our Upland showroom to see the material in person."
      specs={stoneSpecs(stone)}
      description={stoneDescription(stone)}
      listTitle="Care & Maintenance"
      list={stoneCare}
      relatedTitle="Other quartz colors"
      related={stones
        .filter((s) => s.slug !== stone.slug)
        .map((s) => ({ href: `/products/stone/${s.slug}`, title: s.name, src: s.src }))}
    />
  );
}
