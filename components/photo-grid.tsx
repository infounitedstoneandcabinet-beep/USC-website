"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Lightbox } from "./lightbox";

export type GridPhoto = { src: string; alt: string; label: string };

/** Gallery grid; clicking a photo opens it full size, with arrows to move through the whole grid. */
export function PhotoGrid({ photos, featureFirst = false, className }: { photos: GridPhoto[]; featureFirst?: boolean; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {photos.map(({ src, alt, label }, i) => {
          const big = featureFirst && i === 0;
          return (
            <li key={src} className={big ? "sm:col-span-2 lg:row-span-2" : undefined}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`View ${alt} full size`}
                className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-sm text-left shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <img
                  src={src}
                  alt={alt}
                  loading={i < 3 ? "eager" : "lazy"}
                  className={cn(
                    "aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",
                    big && "lg:aspect-auto lg:h-full",
                  )}
                />
                <span className="absolute bottom-0 left-0 bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {open !== null && (
        <Lightbox
          images={photos.map(({ src, alt, label }) => ({ src, alt, caption: label }))}
          index={open}
          onIndex={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
