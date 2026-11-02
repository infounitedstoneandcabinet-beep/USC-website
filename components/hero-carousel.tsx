"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = { src: string; alt: string };

// Auto-advances right to left; the first slide is cloned at the end so the loop never runs backwards.
export function HeroCarousel({ slides, className }: { slides: Slide[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing || hovered) return;
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, 5000);
    return () => window.clearInterval(id);
  }, [playing, hovered]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const onTransitionEnd = () => {
    if (index >= slides.length) {
      setAnimate(false);
      setIndex(0);
    }
  };

  const current = index % slides.length;
  const track = [...slides, slides[0]];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Showroom designs"
      className={cn("group relative overflow-hidden rounded-sm bg-slate-200", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn("flex h-full", animate && "transition-transform duration-700 ease-in-out")}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={onTransitionEnd}
      >
        {track.map((s, i) => (
          <img
            key={`${s.src}-${i}`}
            src={s.src}
            alt={i === slides.length ? "" : s.alt}
            aria-hidden={i !== current || i === slides.length ? true : undefined}
            loading={i === 0 ? "eager" : "lazy"}
            className="h-full w-full shrink-0 object-cover"
          />
        ))}
      </div>

      <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-md lg:bottom-4 lg:right-4 lg:top-auto">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => {
              setAnimate(true);
              setIndex(i);
            }}
            aria-label={`Show slide ${i + 1} of ${slides.length}`}
            aria-current={i === current ? "true" : undefined}
            className="grid size-6 place-items-center rounded-full"
          >
            <span
              className={cn(
                "block size-2.5 rounded-full transition-colors duration-200",
                i === current ? "bg-primary" : "bg-slate-400 hover:bg-slate-600",
              )}
            />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          className="grid size-7 place-items-center rounded-full text-ink transition-colors duration-200 hover:bg-muted"
        >
          {playing ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
        </button>
      </div>
    </div>
  );
}
