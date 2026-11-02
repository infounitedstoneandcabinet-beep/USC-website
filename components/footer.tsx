import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex flex-col leading-none text-white">
            <span className="font-heading text-3xl font-semibold tracking-[0.12em]">UNITED</span>
            <span className="mt-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Stone &amp; Cabinet
            </span>
          </p>
          <p className="mt-5 max-w-xs">Stone countertops and cabinets for kitchens, bathrooms and more.</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            For expert guidance, contact us
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3"><Phone aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.phone}</li>
            <li className="flex gap-3"><Mail aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.email}</li>
            <li className="flex gap-3"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.address}</li>
            <li className="flex gap-3"><Clock aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-600">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs font-medium uppercase tracking-[0.15em] text-slate-300 sm:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
