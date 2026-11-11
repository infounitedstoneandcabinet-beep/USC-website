import type { Metadata } from "next";
import { PhotoGrid } from "@/components/photo-grid";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { cabinetRooms } from "@/lib/cabinet-rooms";
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PhotoGrid featureFirst photos={showroom.map(({ src, alt, stone }) => ({ src, alt, label: stone }))} />
        </div>
      </section>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Cabinets"
            title="Cabinet designs"
            intro="Finished kitchens, bathrooms and more, labeled with the cabinet color shown."
          />
          <PhotoGrid
            className="mt-12"
            photos={cabinetRooms.map(({ src, alt, cabinet }) => ({ src, alt, label: cabinet }))}
          />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
