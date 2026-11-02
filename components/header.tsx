"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button-link";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="hidden border-b border-border md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-3.5" />
            {site.address}
          </span>
          <span className="flex items-center gap-2">
            <Phone aria-hidden="true" className="size-3.5" />
            {site.phone}
          </span>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20">
        <Link href="/" className="flex flex-col rounded-md leading-none" aria-label={`${site.name} home`}>
          <span className="font-heading text-2xl font-semibold tracking-[0.12em] text-ink">UNITED</span>
          <span className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Stone &amp; Cabinet
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md border-b-2 px-4 py-2 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200",
                      active
                        ? "border-primary text-ink"
                        : "border-transparent text-muted-foreground hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Request a Quote
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-lg text-ink transition-colors duration-200 hover:bg-muted lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:bg-muted",
                    pathname === item.href ? "text-primary" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 px-3 py-3 text-sm text-muted-foreground">
              <Phone aria-hidden="true" className="size-4" />
              {site.phone}
            </li>
            <li className="pt-2 sm:hidden">
              <ButtonLink href="/contact" className="w-full">
                Request a Quote
              </ButtonLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
