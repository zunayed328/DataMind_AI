import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md border",
        variant === "default" && "bg-white/[0.03] text-text-tertiary border-white/[0.06]",
        variant === "accent" && "bg-accent/[0.06] text-accent-light border-accent/[0.12]",
        variant === "outline" && "bg-transparent text-text-secondary border-white/[0.08]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
