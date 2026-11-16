// Room page: the whole visualizer is on the page from the start (photo, labels,
// product panel). Nothing is inserted after a click, and there is no in-page
// routing: other rooms and the room list are plain links to other pages.
import { labelPosition, parseQuery, presetFor, productsFor, quoteHref, roomIdFor, selectionSummary } from "./logic.js";

const EMAIL = "Info@unitedstoneandcabinet.com";
const HINT = '<p class="hint">Tap a label on the photo to see the colors you can try.</p>';

const catalog = await fetch("data/catalog.json").then((r) => (r.ok ? r.json() : null)).catch(() => null);
const query = parseQuery(location.search);
const roomId = catalog && roomIdFor(query, catalog);
const manifest = roomId && (await fetch(`data/rooms/${roomId}/manifest.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null));

if (!manifest) {
  location.replace("./"); // the room list (resolved from <base href="../">)
} else {
  start(manifest);
}

function start(m) {
  const [W, H] = m.size;
  const room = document.getElementById("room");
  const list = document.getElementById("list");
  const crumb = document.getElementById("crumb");
  document.getElementById("room-name").textContent = m.name;
  room.style.setProperty("--ar", `${W} / ${H}`);
  room.style.setProperty("--arn", W / H);
  const pct = (v, total) => `${(v / total) * 100}%`;

  room.append(Object.assign(document.createElement("img"), { src: m.base, className: "base", alt: m.name }));

  const selection = {};
  const failed = new Set(); // "<surface>/<slug>" layers that did not load
  const layerEl = {};
  const tagEl = {};
  let active = null;

  for (const s of m.surfaces) {
    const [x0, y0, x1, y1] = s.bbox;
    const img = document.createElement("img");
    img.alt = "";
    Object.assign(img.style, { left: pct(x0, W), top: pct(y0, H), width: pct(x1 - x0, W), height: pct(y1 - y0, H), display: "none" });
    img.addEventListener("error", () => layerFailed(s.id, img));
    room.append(img);
    layerEl[s.id] = img;
  }
  for (const s of m.surfaces) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tag";
    b.textContent = s.label;
    b.setAttribute("aria-pressed", "false");
    Object.assign(b.style, labelPosition(s.label_at, m.size));
    b.addEventListener("click", () => selectSurface(s.id));
    room.append(b);
    tagEl[s.id] = b;
  }

  function surfaceById(id) {
    return m.surfaces.find((s) => s.id === id);
  }

  function show(id) {
    const img = layerEl[id];
    const slug = selection[id];
    if (slug) {
      img.dataset.slug = slug;
      img.src = surfaceById(id).layers[slug];
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }

  function layerFailed(id, img) {
    // Keep the original photo visible rather than a broken image over it.
    failed.add(`${id}/${img.dataset.slug}`);
    img.style.display = "none";
    delete selection[id];
    updateQuote();
    if (active === id) renderList();
  }

  function selectSurface(id) {
    active = id;
    for (const [sid, b] of Object.entries(tagEl)) b.setAttribute("aria-pressed", String(sid === id));
    const s = surfaceById(id);
    for (const p of productsFor(s, catalog)) new Image().src = s.layers[p.slug]; // preload this surface
    renderList();
  }

  function renderList() {
    const s = surfaceById(active);
    crumb.innerHTML = "";
    crumb.append("Products › ", Object.assign(document.createElement("b"), { textContent: s.label }));
    list.innerHTML = "";
    const options = [{ slug: "", name: "Original photo" }, ...productsFor(s, catalog)];
    for (const p of options) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "item";
      b.setAttribute("aria-pressed", String((selection[s.id] || "") === p.slug));
      const thumb = p.swatch
        ? Object.assign(document.createElement("img"), { src: p.swatch, alt: "" })
        : Object.assign(document.createElement("span"), { className: "none", textContent: "as is" });
      const label = Object.assign(document.createElement("span"), { textContent: p.name });
      if (failed.has(`${s.id}/${p.slug}`)) {
        b.disabled = true;
        label.append(Object.assign(document.createElement("small"), { textContent: "Not available" }));
      }
      b.append(thumb, label);
      b.addEventListener("click", () => choose(s.id, p.slug));
      list.append(b);
    }
  }

  function choose(id, slug) {
    if (slug) selection[id] = slug;
    else delete selection[id];
    show(id);
    renderList();
    updateQuote();
  }

  function updateQuote() {
    document.getElementById("quote").href = quoteHref(EMAIL, m, catalog, selection);
    document.getElementById("chosen").textContent = selectionSummary(m, catalog, selection);
  }

  document.getElementById("reset").addEventListener("click", () => {
    for (const id of Object.keys(selection)) delete selection[id];
    for (const s of m.surfaces) show(s.id);
    if (active) renderList();
    else list.innerHTML = HINT;
    updateQuote();
  });

  Object.assign(selection, presetFor(query, m));
  for (const s of m.surfaces) show(s.id);
  updateQuote();
}
