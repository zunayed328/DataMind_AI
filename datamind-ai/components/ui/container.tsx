import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn("relative max-w-[1280px] mx-auto px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
