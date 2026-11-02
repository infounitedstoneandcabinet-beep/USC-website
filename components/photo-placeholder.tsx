import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-slate-400 bg-gradient-to-br from-slate-200 via-muted to-slate-300 p-4 text-center text-sm font-medium text-muted-foreground",
        className,
      )}
    >
      <ImageIcon aria-hidden="true" className="size-8 text-slate-500" />
      <span>{label}</span>
    </div>
  );
}
