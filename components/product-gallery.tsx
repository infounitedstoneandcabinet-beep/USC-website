"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, alt, fit = "cover" }: { images: string[]; alt: string; fit?: "cover" | "contain" }) {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <div className="overflow-hidden rounded-sm border border-border bg-white">
        <img
          src={images[current]}
          alt={alt}
          className={cn("aspect-square w-full", fit === "cover" ? "object-cover" : "object-contain p-6")}
        />
      </div>
      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show photo ${i + 1} of ${images.length}`}
                aria-pressed={i === current}
                className={cn(
                  "block w-full cursor-pointer overflow-hidden rounded-sm border-2 transition-colors duration-200",
                  i === current ? "border-primary" : "border-transparent hover:border-slate-300",
                )}
              >
                <img src={src} alt="" loading="lazy" className="aspect-square w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
