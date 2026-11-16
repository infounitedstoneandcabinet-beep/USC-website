import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  accent: "bg-accent text-on-accent hover:opacity-90",
  primary: "bg-primary text-on-primary hover:bg-blue-700",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
  light: "border-2 border-white text-white hover:bg-white hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "accent",
  className,
  plain = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  /** Render a normal <a> (full page load) instead of Next.js <Link>. */
  plain?: boolean;
}) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-px",
    variants[variant],
    className,
  );
  return plain ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
