import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { SectionBadgeProps } from "@/types/components";

export function SectionBadge({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionBadgeProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment, className)}>
      <Badge variant="outline" className="uppercase tracking-widest">
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
