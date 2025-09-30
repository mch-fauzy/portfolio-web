import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/types/components";

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12", className)}
      {...props}
    />
  );
}
