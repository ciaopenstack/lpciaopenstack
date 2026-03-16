import { cn } from "@/lib/utils";
import React from "react";

interface BlurOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "primary" | "emerald" | "blue" | "white";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

export function BlurOrb({ color = "primary", position = "center", className, ...props }: BlurOrbProps) {
  const colorStyles = {
    primary: "bg-primary-500/20",
    emerald: "bg-emerald-500/15",
    blue: "bg-blue-500/15",
    white: "bg-white/5",
  };

  const positionStyles = {
    "top-left": "-top-40 -left-40",
    "top-right": "-top-40 -right-40",
    "bottom-left": "-bottom-40 -left-40",
    "bottom-right": "-bottom-40 -right-40",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-[100px] sm:blur-[120px] mix-blend-screen pointer-events-none w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]",
        colorStyles[color],
        positionStyles[position],
        className
      )}
      {...props}
    />
  );
}
