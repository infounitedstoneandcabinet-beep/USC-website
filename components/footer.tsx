import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-bold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs">Stone countertops and cabinets for kitchens, bathrooms and more.</p>
        </div>
        <nav aria-label="Footer">
          <p className="font-heading font-semibold uppercase tracking-wider text-white">Pages</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded transition-colors duration-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-heading font-semibold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3"><Phone aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.phone}</li>
            <li className="flex gap-3"><Mail aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.email}</li>
            <li className="flex gap-3"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.address}</li>
            <li className="flex gap-3"><Clock aria-hidden="true" className="mt-1 size-4 shrink-0" />{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-400 sm:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
