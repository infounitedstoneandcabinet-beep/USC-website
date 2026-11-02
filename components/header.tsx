"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button-link";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="hidden border-b border-border md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <a
            href={site.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded transition-colors duration-200 hover:text-primary"
          >
            <MapPin aria-hidden="true" className="size-3.5" />
            {site.address}
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded transition-colors duration-200 hover:text-primary"
          >
            <Phone aria-hidden="true" className="size-3.5" />
            {site.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20">
        <Link href="/" className="flex items-center gap-3 rounded-md leading-none" aria-label={`${site.name} home`}>
          {/* Crop the USC monogram out of the full logo file */}
          <span className="relative block aspect-[3/2] h-10 shrink-0 overflow-hidden md:h-12">
            <img
              src="/client/补资料-4984cdcd5e963ef2f3deea3f4cf25208-2.webp"
              alt="United Stone & Cabinet logo"
              className="size-full origin-[50%_25%] scale-[2.65] object-cover"
            />
          </span>
          <span className="flex flex-col">
            <span className="font-heading text-2xl font-semibold tracking-[0.12em] text-ink">UNITED</span>
            <span className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Stone &amp; Cabinet
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = item.children ? pathname.startsWith(item.href) : pathname === item.href;
              if (item.children) {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setSubOpen(true)}
                    onMouseLeave={() => setSubOpen(false)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setSubOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setSubOpen(false);
                    }}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn(
                          "rounded-md border-b-2 py-2 pl-4 pr-1 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200",
                          active
                            ? "border-primary text-ink"
                            : "border-transparent text-muted-foreground hover:text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setSubOpen((v) => !v)}
                        aria-expanded={subOpen}
                        aria-controls="products-menu"
                        aria-label={`${item.label} menu`}
                        className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors duration-200 hover:text-primary"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={cn("size-4 transition-transform duration-200", subOpen && "rotate-180")}
                        />
                      </button>
                    </div>
                    <div
                      id="products-menu"
                      className={cn(
                        "absolute left-0 top-full pt-2 transition-all duration-200",
                        subOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                      )}
                    >
                      <ul className="min-w-48 rounded-sm border border-border bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className={cn(
                                "block px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:bg-muted hover:text-primary",
                                pathname === child.href ? "text-primary" : "text-ink",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }
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
                {item.children && (
                  <ul className="ml-4 border-l border-border pl-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className={cn(
                            "block rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:bg-muted",
                            pathname === child.href ? "text-primary" : "text-muted-foreground",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted"
              >
                <Phone aria-hidden="true" className="size-4" />
                {site.phone}
              </a>
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
