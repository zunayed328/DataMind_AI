import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Add dot-pattern background overlay */
  dots?: boolean;
}

export function Section({ className, dots = false, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("relative py-24 sm:py-32 overflow-hidden", className)}
      {...props}
    >
      {dots && <div className="absolute inset-0 dot-pattern opacity-20" />}
      {children}
    </section>
  );
}
