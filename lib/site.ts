export const site = {
  name: "United Stone & Cabinet",
  phone: "(909) 377-5010",
  phoneHref: "tel:+19093775010",
  email: "Info@unitedstoneandcabinet.com",
  emailHref: "mailto:Info@unitedstoneandcabinet.com",
  founded: "June 2026",
  address: "972 W 9th St, Upland, CA 91786",
  mapHref: "https://www.google.com/maps/search/?api=1&query=972+W+9th+St%2C+Upland%2C+CA+91786",
  hoursSummary: "Mon–Fri 8:00 AM–5:00 PM · Sat 8:00 AM–2:00 PM · Sun Closed",
  hoursRows: [
    { days: "Mon – Fri", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  hours: [
    { day: "Monday", time: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
    { day: "Thursday", time: "8:00 AM – 5:00 PM" },
    { day: "Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  serviceArea: "California, Oregon, Nevada & Arizona",
};

// plain: render a normal <a> (full page load) instead of Next.js <Link>. The Room
// Visualizer is a separate static page; see 房间可视化工具/方案-2026-11-16.md section 0.10.
export type NavItem = { href: string; label: string; plain?: boolean; children?: { href: string; label: string }[] };

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/stone", label: "Stone" },
      { href: "/products/cabinets", label: "Cabinets" },
      { href: "/products/kitchen-sinks", label: "Kitchen Sinks" },
      { href: "/products/bathroom-sinks", label: "Bathroom Sinks" },
      { href: "/products/faucets", label: "Faucets & Drains" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/visualizer/", label: "Visualizer", plain: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
