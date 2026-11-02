import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/sections";
import { showroom } from "@/lib/showroom";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Showroom designs"
        intro="Kitchens, bathrooms and more, showing our stone countertops paired with cabinets."
      />
      <section className="bg-white py-16 md:py-24">
        <ul className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {showroom.map(({ src, alt, stone }, i) => (
            <li key={src} className={i === 0 ? "sm:col-span-2 lg:row-span-2" : undefined}>
              <figure className="group relative h-full overflow-hidden rounded-sm shadow-sm">
                <img
                  src={src}
                  alt={alt}
                  loading={i < 3 ? "eager" : "lazy"}
                  className={
                    i === 0
                      ? "aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:aspect-auto lg:h-full"
                      : "aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  }
                />
                <figcaption className="absolute bottom-0 left-0 bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                  {stone}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
