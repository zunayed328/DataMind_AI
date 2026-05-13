import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  gradient?: boolean;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] leading-[1.1]",
  h2: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]",
  h3: "text-2xl sm:text-3xl font-semibold tracking-[-0.015em] leading-[1.25]",
  h4: "text-xl sm:text-2xl font-semibold tracking-[-0.01em] leading-[1.3]",
};

export function Heading({
  as: Tag = "h2",
  gradient = false,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        headingStyles[Tag],
        gradient ? "text-gradient" : "text-white",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "body-lg" | "body-sm" | "caption";
}

const textStyles: Record<string, string> = {
  body: "text-base text-text-secondary leading-[1.65]",
  "body-lg": "text-lg text-text-secondary leading-[1.6]",
  "body-sm": "text-sm text-text-tertiary leading-[1.5]",
  caption: "text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em]",
};

export function Text({
  variant = "body",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={cn(textStyles[variant], className)} {...props}>
      {children}
    </p>
  );
}
