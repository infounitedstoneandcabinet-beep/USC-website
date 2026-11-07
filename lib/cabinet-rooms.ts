// Finished-room photos supplied by the owner, named after the cabinet color shown.
const items: [cabinet: string, file: string, room: string][] = [
  ["White Shaker", "Room-White-Shaker.webp", "White kitchen with gold hardware and range hood"],
  ["White Shaker", "Room-White-Shaker-2.webp", "White L-shape kitchen with glass-front uppers"],
  ["Vanilla Shaker", "Room-Vanilla-Shaker.webp", "Open kitchen with vanilla cabinets and wood floor"],
  ["Vanilla Shaker", "Room-Vanilla-Shaker-2.webp", "Vanilla kitchen with stainless appliances"],
  ["White Oak Shaker", "Room-White-Oak-Shaker.webp", "White oak kitchen with large island"],
  ["White Oak Shaker", "Room-White-Oak-Shaker-2.webp", "White oak kitchen with island seating"],
  ["Sea Salt Green", "Room-Sea-Salt-Green.webp", "Bathroom vanity with lighted mirror"],
  ["Sea Salt Green", "Room-Sea-Salt-Green-2.webp", "Sea salt green kitchen with stainless appliances"],
  ["Taupe Gray", "Room-Taupe-Gray.webp", "Bathroom vanity with walk-in shower"],
  ["Taupe Gray", "Room-Taupe-Gray-2.webp", "Bathroom vanity with freestanding tub"],
  ["Light Gray Shaker", "Room-Light-Gray-Shaker.webp", "Bathroom vanity with floating shelves"],
  ["Light Gray Shaker", "Room-Light-Gray-Shaker-2.webp", "Light gray L-shape kitchen"],
  ["Dark Gray Shaker", "Room-Dark-Gray-Shaker.webp", "Laundry room with tall storage cabinet"],
  ["Dark Gray Shaker", "Room-Dark-Gray-Shaker-2.webp", "Reception desk and wall cabinets"],
];

export const cabinetRooms = items.map(([cabinet, file, room]) => ({
  cabinet,
  room,
  src: `/client/补资料-${file}`,
  alt: `${room} in ${cabinet} cabinets`,
}));
