const files = [
  "White-Shaker.png",
  "Cream-Shaker.png",
  "Light-Gray-Shaker.png",
  "Dark-Gray-Shaker.png",
  "Light-Sage-Shaker.png",
  "Pale-Green-Shaker.png",
  "green-shaker.png",
  "Blue-Shaker.png",
  "Black-Shaker.png",
  "White-Oak-Shaker.png",
  "Double-Slim-Ivory.webp",
  "Double-Slim-Oak.webp",
  "Double-Slim-Mocha.webp",
];

export const cabinets = files.map((file) => ({
  name: file
    .replace(/\.\w+$/, "")
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" "),
  src: `/client/补资料-${file}`,
}));
