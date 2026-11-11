import { showroom } from "./showroom";

// Quartz colors from the owner's price list (Final Price List, 2026-11-10), in price-list order.
// Photos are the owner's: the slab photo first, then every showroom photo of that stone from the gallery.
export type Stone = {
  name: string;
  slug: string;
  src: string;
  images: string[];
  availableIn: "Slab / Prefab" | "Prefab";
  finish: "Polished" | "Polished / E-Printed";
};

const SP = "Slab / Prefab" as const;
const PF = "Prefab" as const;
const PO = "Polished" as const;
const PE = "Polished / E-Printed" as const;

const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// [name, slab photo file base, extension, available in, finish]
const rows: [string, string, string, Stone["availableIn"], Stone["finish"]][] = [
  ["Aran White", "Aran-white", "webp", SP, PO],
  ["Bianco Swan", "Bianco-Swan", "webp", SP, PO],
  ["Black Star", "Black-Star", "jpg", SP, PO],
  ["Calacata Alaska", "Calacata-Alaska", "webp", SP, PO],
  ["Calacata Alto", "Calacata-Alto", "webp", SP, PO],
  ["Calacata Caramel", "Calacata-Caramel", "webp", SP, PO],
  ["Calacata Laza", "Calacata-Laza", "webp", SP, PO],
  ["Calacata White", "Calacata-White", "webp", SP, PO],
  ["Carrara White", "Carrara-White", "webp", SP, PO],
  ["Charcoal Grey", "Charcoal-Grey", "webp", SP, PO],
  ["Calacata Rocky", "Calacata-Rocky", "webp", SP, PO],
  ["Calacata Vega", "Calacata-Vega", "webp", SP, PO],
  ["Crystal White", "Crystal-White", "webp", SP, PO],
  ["Fleece", "Fleece", "webp", SP, PO],
  ["Pure White", "Pure-White", "webp", SP, PO],
  ["Snow White", "Snow-White", "webp", SP, PO],
  ["Sparkling Grey", "Sparkling-Grey", "webp", SP, PO],
  ["Taj Mahal", "Taj-Mahal", "webp", SP, PO],
  ["Calacata Elegant", "Calacata-Elegant", "png", PF, PO],
  ["Concrete Grey", "Concrete-Grey", "jpg", PF, PO],
  ["French Grey", "French-Grey", "webp", PF, PO],
  ["Volakas White", "Volakas-White", "webp", PF, PO],
  ["Calacata Borghini", "Calacata-Borghini", "webp", SP, PE],
  ["Calacata Montana", "Calacata-Montana", "webp", SP, PE],
  ["Calacata Oceanic", "Calacata-Oceanic", "webp", SP, PE],
  ["Calacata River", "Calacata-River", "webp", SP, PE],
  ["Perla Bianco", "Perla-Bianco", "webp", SP, PE],
  ["Perla Venata", "Perla-Venata", "webp", SP, PE],
  ["Luccid Gold", "Luccid-Gold", "webp", PF, PE],
];

export const stones: Stone[] = rows.map(([name, base, ext, availableIn, finish]) => {
  const images = [`/client/补资料-${base}.${ext}`, ...showroom.filter((p) => p.stone === name).map((p) => p.src)];
  return { name, slug: toSlug(name), src: images[0], images, availableIn, finish };
});

export const stoneColorCount = "100+";

export function stoneSpecs(s: Stone): [string, string][] {
  return [
    ["Material-Type", "Quartz"],
    ["Origin", "Asia"],
    ["Application", "Indoors"],
    ["Thickness", "2CM"],
    ["Finish", s.finish],
    ["Available In", s.availableIn],
    [
      "Size",
      s.availableIn === "Prefab"
        ? 'Prefab 110" x 26" / 36" / 42" / 52"'
        : 'Slab 126" x 63"; Prefab 110" x 26" / 36" / 42" / 52"',
    ],
    ["In Stock", "Upland, CA"],
  ];
}

export function stoneDescription(s: Stone): string[] {
  return [
    "Quartz is an engineered stone made mostly from natural quartz bound with resin. It gives you a consistent color and pattern from piece to piece, so what you choose is close to what gets installed.",
    "The surface is non-porous, so it does not need sealing and resists everyday stains from coffee, wine and oil better than most natural stone. It is a practical choice for kitchen countertops, islands, bathroom vanities and bar tops.",
    s.availableIn === "Prefab"
      ? `${s.name} is available as prefab pieces sized for kitchen counters, islands and vanities. Pair it with our cabinets, sinks and faucets for one finished look.`
      : `${s.name} is available as full slabs or prefab pieces sized for kitchen counters, islands and vanities. Pair it with our cabinets, sinks and faucets for one finished look.`,
  ];
}

export const stoneCare = [
  "Wipe daily with a soft cloth, warm water and mild dish soap.",
  "Do not use bleach, oven cleaner, scouring pads or other harsh or abrasive cleaners.",
  "Always use a trivet or hot pad under hot pots and pans. Quartz can be damaged by sudden high heat.",
  "Use a cutting board; do not cut directly on the surface.",
  "Wipe up spills promptly, especially oil, wine and coffee.",
  "Quartz is for indoor use. Keep it out of long, direct sunlight, which can fade the color over time.",
];
