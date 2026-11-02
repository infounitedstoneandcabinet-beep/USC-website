import type { Metadata } from "next";
import { Clock, Mail, MapPin, Map as MapIcon, Phone } from "lucide-react";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

const details = [
  { icon: Phone, label: "Phone", value: site.phone },
  { icon: Mail, label: "Email", value: site.email },
  { icon: MapPin, label: "Showroom", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
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
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {details.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-4 rounded-xl bg-card p-6 shadow-md">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary text-on-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-heading text-lg font-semibold text-ink">{label}</h2>
                  <p className="mt-1 break-words text-muted-foreground">{value}</p>
                </div>
              </li>
            ))}
          </ul>
          <aside className="rounded-xl bg-ink p-6 text-slate-200 sm:p-8 lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">Helpful to have ready</h2>
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
