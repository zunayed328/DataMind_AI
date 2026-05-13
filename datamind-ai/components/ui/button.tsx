import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg whitespace-nowrap",
          // Sizes
          size === "sm" && "px-3 py-1.5 text-[13px]",
          size === "md" && "px-5 py-2.5 text-[14px]",
          size === "lg" && "px-6 py-3 text-[15px]",
          // Variants
          variant === "primary" &&
            "bg-white text-black hover:bg-white/90 hover:-translate-y-px shadow-[0_10px_40px_rgba(255,255,255,0.06)]",
          variant === "secondary" &&
            "bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.15]",
          variant === "ghost" &&
            "text-text-secondary hover:text-white hover:bg-white/[0.05]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
