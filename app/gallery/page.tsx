import type { Metadata } from "next";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { CtaBand, PageHero } from "@/components/sections";

export const metadata: Metadata = { title: "Gallery" };

const photos = [1, 2, 3, 4, 5, 6].map((n) => `[Project photo ${n}]`);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Projects we have worked on"
        intro="A look at countertops and cabinets in real homes."
      />
      <section className="bg-white py-16 md:py-24">
        <ul className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {photos.map((label, i) => (
            <li key={label} className={i === 0 ? "lg:col-span-2 lg:row-span-2" : undefined}>
              <PhotoPlaceholder
                label={label}
                className={i === 0 ? "aspect-[4/3] w-full lg:aspect-auto lg:h-full" : "aspect-[4/3] w-full"}
              />
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
