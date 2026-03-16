import { cn } from "@/lib/utils";
import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function GlassPanel({ children, interactive = false, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden",
        interactive && "glass-panel-hover",
        className
      )}
      {...props}
    >
      {/* Decorative subtle top border highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
