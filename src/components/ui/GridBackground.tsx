import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  intensity?: number;
}

export function GridBackground({ children, className, intensity = 0.02, ...props }: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)} {...props}>
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-x-0 top-0 h-full w-full pointer-events-none animate-[grid-drift_6s_linear_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,${intensity}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,${intensity}) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'linear-gradient(to bottom, white, transparent)'
        }}
      />
      {children}
    </div>
  );
}
