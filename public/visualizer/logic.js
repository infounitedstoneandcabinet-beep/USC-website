// Pure helpers shared by the room list (index.html) and the room page (room/index.html).
// No DOM access here, so node --test can run them.

const SAFE = /^[a-z0-9-]+$/;

/** Read ?id= and ?stone= from a query string; anything else, or odd characters, is dropped. */
export function parseQuery(search) {
  const params = new URLSearchParams(search);
  const out = {};
  for (const key of ["id", "stone"]) {
    const v = params.get(key);
    if (v && SAFE.test(v)) out[key] = v;
  }
  return out;
}

/** Which room the room page should show, or null to go back to the room list. */
export function roomIdFor(query, catalog) {
  if (query.id) return catalog.rooms.some((r) => r.id === query.id) ? query.id : null;
  if (query.stone && catalog.rooms.length && catalog.stones.some((s) => s.slug === query.stone)) {
    return catalog.rooms[0].id;
  }
  return null;
}

/** Each room has its own page; the room list links to it with a plain link. */
export function roomHref(roomId) {
  return "room/?id=" + roomId; // folder address: the live host (Vercel) answers 404 for .html URLs
}

/** With ?stone=, pre-select that stone on every stone surface that has it rendered. */
export function presetFor(query, manifest) {
  const preset = {};
  if (!query.stone) return preset;
  for (const s of manifest.surfaces) {
    if (s.kind === "stone" && s.layers[query.stone]) preset[s.id] = query.stone;
  }
  return preset;
}

function catalogList(catalog, kind) {
  return catalog[kind + "s"] || [];
}

/** Products the visitor can pick for a surface: rendered ones only, in catalog order. */
export function productsFor(surface, catalog) {
  return catalogList(catalog, surface.kind).filter((p) => surface.layers[p.slug]);
}

/** "Label: Product name" for every surface with a chosen product, in surface order. */
function chosenParts(manifest, catalog, selection) {
  const parts = [];
  for (const s of manifest.surfaces) {
    const slug = selection[s.id];
    if (!slug) continue;
    const p = catalogList(catalog, s.kind).find((x) => x.slug === slug);
    if (p) parts.push(`${s.label}: ${p.name}`);
  }
  return parts;
}

/** mailto: link whose subject lists the chosen products by surface label. */
export function quoteHref(email, manifest, catalog, selection) {
  const parts = chosenParts(manifest, catalog, selection);
  const subject = "Quote request: " + (parts.length ? parts.join(", ") : "Room Visualizer");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

/** One line naming what is chosen on every surface ("" when nothing is). */
export function selectionSummary(manifest, catalog, selection) {
  return chosenParts(manifest, catalog, selection).join(" · ");
}

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const pct = (v) => `${Math.round(v * 100) / 100}%`;

/**
 * Label position as CSS. The horizontal anchor follows the position (left edge →
 * label's left side, middle → centred, right edge → label's right side), so a label
 * of any width stays inside the photo on the narrowest phone.
 */
export function labelPosition(labelAt, size) {
  const x = pct(clamp((labelAt[0] / size[0]) * 100, 0, 100));
  return {
    left: x,
    top: pct(clamp((labelAt[1] / size[1]) * 100, 6, 94)),
    transform: `translate(-${x}, -50%)`,
  };
}
