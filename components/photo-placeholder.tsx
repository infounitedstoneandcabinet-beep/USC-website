import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 overflow-hidden rounded-sm border border-dashed border-slate-400 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-3 text-center text-sm font-medium text-slate-600",
        className,
      )}
    >
      <ImageIcon aria-hidden="true" className="size-7 shrink-0 text-slate-500" />
      <span>{label}</span>
    </div>
  );
}
