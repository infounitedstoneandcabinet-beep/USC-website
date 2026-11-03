const items: [name: string, file: string][] = [
  ["White Shaker", "White-Shaker.png"],
  ["Taupe Gray", "Cream-Shaker.png"],
  ["Light Gray Shaker", "Light-Gray-Shaker.png"],
  ["Dark Gray Shaker", "Dark-Gray-Shaker.png"],
  ["Double Light Gray", "Light-Sage-Shaker.png"],
  ["Sea Salt Green", "Pale-Green-Shaker.png"],
  ["Green Shaker", "green-shaker.png"],
  ["Blue Shaker", "Blue-Shaker-2.png"],
  ["Black Shaker", "Black-Shaker-2.png"],
  ["White Oak Shaker", "White-Oak-Shaker.png"],
  ["Double Slim Ivory", "Double-Slim-Ivory.webp"],
  ["Double Slim Oak", "Double-Slim-Oak.webp"],
  ["Double Slim Mocha", "Double-Slim-Mocha.webp"],
  ["Vanilla Shaker", "Vanilla-Shaker.png"],
];

export const cabinets = items.map(([name, file]) => ({
  name,
  src: `/client/补资料-${file}`,
}));
