import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wider text-primary-400 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-gradient-gold">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
