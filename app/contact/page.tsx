import type { Metadata } from "next";
import { Clock, Mail, MapPin, Map as MapIcon, Phone } from "lucide-react";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

const details = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email },
  { icon: MapPin, label: "Showroom", value: site.address, href: site.mapHref, external: true },
  { icon: MapIcon, label: "Areas we serve", value: site.serviceArea },
];

const checklist = [
  "Which room: kitchen, bathroom or other",
  "Rough size or a simple sketch of the space",
  "Whether you need countertops, cabinets or both",
  "Colors or styles you like",
  "When you would like the project done",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote"
        intro="Call or email us to talk about your countertops and cabinets."
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <ul className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-3">
            {details.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label} className="flex gap-4 rounded-sm border border-border bg-card p-6 shadow-sm">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-slate-300 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink">{label}</h2>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-1 inline-block break-words rounded text-primary underline-offset-4 transition-colors duration-200 hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words text-muted-foreground">{value}</p>
                  )}
                </div>
              </li>
            ))}
            <li className="rounded-sm border border-border bg-card p-6 shadow-sm sm:col-span-2">
              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-slate-300 text-primary">
                  <Clock aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink">Hours</h2>
              </div>
              <dl className="mt-4 divide-y divide-border">
                {site.hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between gap-4 py-2">
                    <dt className="font-medium text-ink">{day}</dt>
                    <dd className={time === "Closed" ? "text-muted-foreground" : "text-foreground"}>{time}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
          <aside className="rounded-sm bg-slate-700 p-6 text-slate-200 sm:p-8 lg:col-span-2">
            <h2 className="text-xl font-semibold uppercase tracking-[0.1em] text-white">Helpful to have ready</h2>
            <p className="mt-2">These details help us prepare an accurate quote:</p>
            <ol className="mt-6 space-y-3">
              {checklist.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-on-accent">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
