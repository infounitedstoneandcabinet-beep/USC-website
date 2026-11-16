import { roomHref } from "./logic.js";

const list = document.getElementById("rooms");

function empty() {
  list.outerHTML = '<p class="empty">No rooms yet.</p>';
}

try {
  const res = await fetch("data/catalog.json");
  const catalog = res.ok ? await res.json() : { rooms: [] };
  if (!catalog.rooms.length) {
    empty();
  } else {
    for (const r of catalog.rooms) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "room-card";
      a.href = roomHref(r.id); // a plain link: every room is its own page (full page load)
      const img = Object.assign(document.createElement("img"), { src: r.thumb, alt: "", loading: "lazy" });
      const name = Object.assign(document.createElement("span"), { textContent: r.name });
      a.append(img, name);
      li.append(a);
      list.append(li);
    }
  }
} catch {
  empty();
}
