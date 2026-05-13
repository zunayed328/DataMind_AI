import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-white/[0.06] bg-bg-tertiary transition-all duration-300",
          hover && "hover:border-white/[0.12] hover:bg-bg-elevated",
          glow && "hover:border-accent/[0.2]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };
export type { CardProps };
