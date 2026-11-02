// Showroom design photos supplied by the owner, named after the stone shown.
export const showroom = [
  { file: "Calacata-Borghini-3.webp", stone: "Calacata Borghini", room: "Kitchen island with waterfall edge and full-height backsplash" },
  { file: "Calacata-Laza-1-2.webp", stone: "Calacata Laza", room: "White kitchen with waterfall island and wine display" },
  { file: "Calacata-Montana-1.webp", stone: "Calacata Montana", room: "Kitchen peninsula with waterfall edge and oak cabinets" },
  { file: "Luccid-Gold-1.webp", stone: "Luccid Gold", room: "Kitchen island with waterfall edge and greige cabinets" },
  { file: "Volakas-White-1.webp", stone: "Volakas White", room: "Open kitchen island with waterfall edge and stone hood" },
  { file: "Calacata-Vega-1.webp", stone: "Calacata Vega", room: "Kitchen island with grey shaker cabinets" },
  { file: "Calacata-Vega-1-2.webp", stone: "Calacata Vega", room: "Kitchen island and grey cabinets, wide view" },
  { file: "Perla-Venata-1.webp", stone: "Perla Venata", room: "Kitchen island with wood-tone cabinets" },
  { file: "French-Grey-1.webp", stone: "French Grey", room: "White kitchen with grey island countertop" },
  { file: "Calacata-Caramel-1.webp", stone: "Calacata Caramel", room: "L-shape kitchen with white cabinets" },
  { file: "Calacata-Rocky-1.webp", stone: "Calacata Rocky", room: "U-shape kitchen with navy cabinets" },
  { file: "Calacata-Laza-1.webp", stone: "Calacata Laza", room: "Fireplace surround" },
  { file: "Calacata-Alaska-1.webp", stone: "Calacata Alaska", room: "Bathroom vanity top" },
  { file: "Pure-White.webp", stone: "Pure White", room: "Double bathroom vanity top" },
  { file: "Snow-White.webp", stone: "Snow White", room: "Double bathroom vanity top" },
].map((p) => ({ ...p, src: `/client/补资料-${p.file}`, alt: `${p.room} in ${p.stone} stone` }));

export const heroSlides = showroom.slice(0, 5);
