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
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-px",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
