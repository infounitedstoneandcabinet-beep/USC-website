"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lightbox } from "./lightbox";

const ZOOM = 2.5;

export function ProductGallery({
  images,
  alt,
  caption,
  fit = "cover",
}: {
  images: string[];
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
}) {
  const [current, setCurrent] = useState(0);
  const [origin, setOrigin] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="relative overflow-hidden rounded-sm border border-border bg-white">
        {/* Hover magnifier: the photo scales up around the mouse so the texture can be seen up close. */}
        <div
          className="cursor-zoom-in overflow-hidden"
          onClick={() => setOpen(true)}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
          }}
          onMouseLeave={() => setOrigin(null)}
        >
          <img
            src={images[current]}
            alt={alt}
            style={origin ? { transform: `scale(${ZOOM})`, transformOrigin: origin } : undefined}
            className={cn(
              "aspect-square w-full transition-transform duration-150 ease-out motion-reduce:transition-none",
              fit === "cover" ? "object-cover" : "object-contain p-6",
            )}
          />
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View full size"
          className="absolute right-3 top-3 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
        >
          <ZoomIn aria-hidden="true" className="size-5" />
        </button>
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

      {open && (
        <Lightbox
          images={images.map((src) => ({ src, alt, caption }))}
          index={current}
          onIndex={setCurrent}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
