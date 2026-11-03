import { cn } from "@/lib/utils";

/** A row of cabinet door samples on a neutral backdrop, used where a wide photo frame is needed. */
export function CabinetDoorStrip({
  doors,
  className,
}: {
  doors: { name: string; src: string }[];
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-3 bg-slate-100 px-6 py-6 sm:gap-4", className)}>
      {doors.map(({ name, src }) => (
        <img
          key={name}
          src={src}
          alt={`${name} cabinet door sample`}
          loading="lazy"
          className="aspect-[1/2] h-full max-h-full w-auto min-w-0 object-cover shadow-md"
        />
      ))}
    </div>
  );
}
