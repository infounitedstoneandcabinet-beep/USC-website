"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; alt: string; caption?: string };

/** Full-screen image viewer: arrows, keyboard (← → Esc) and swipe to move between photos. */
export function Lightbox({
  images,
  index,
  onIndex,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const count = images.length;
  const go = (step: number) => onIndex((index + step + count) % count);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && count > 1) onIndex((index - 1 + count) % count);
      else if (e.key === "ArrowRight" && count > 1) onIndex((index + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onIndex, onClose]);

  const img = images[index];
  const navBtn =
    "absolute top-1/2 z-10 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-black"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null || count < 2) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-sm text-white/80">
        <span aria-live="polite">
          {index + 1} / {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex size-11 cursor-pointer items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
        >
          <X aria-hidden="true" className="size-6" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 sm:px-20">
        {count > 1 && (
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className={`${navBtn} left-2 sm:left-5`}
          >
            <ChevronLeft aria-hidden="true" className="size-7" />
          </button>
        )}
        <figure className="flex h-full max-w-full flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <img key={img.src} src={img.src} alt={img.alt} className="min-h-0 max-w-full flex-1 object-contain" />
          {img.caption && (
            <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white">
              {img.caption}
            </figcaption>
          )}
        </figure>
        {count > 1 && (
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className={`${navBtn} right-2 sm:right-5`}
          >
            <ChevronRight aria-hidden="true" className="size-7" />
          </button>
        )}
      </div>
    </div>
  );
}
