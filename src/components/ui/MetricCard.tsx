import { cn } from "@/lib/utils";
import React from "react";
import { GlassPanel } from "./GlassPanel";

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  accentColor?: "primary" | "success" | "info" | "danger" | "default";
}

export function MetricCard({
  value,
  label,
  description,
  icon,
  accentColor = "default",
  className,
  ...props
}: MetricCardProps) {
  
  const accentStyles = {
    primary: "text-primary-400 bg-primary-400/10",
    success: "text-emerald-400 bg-emerald-400/10",
    info: "text-blue-400 bg-blue-400/10",
    danger: "text-red-400 bg-red-400/10",
    default: "text-white bg-white/5",
  };

  return (
    <GlassPanel className={cn("flex flex-col gap-3", className)} {...props} interactive>
      {icon && (
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-2", accentStyles[accentColor])}>
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <span className="text-3xl font-bold tracking-tight text-white">{value}</span>
        <span className="text-sm font-medium text-white/80 uppercase tracking-wider">{label}</span>
      </div>
      {description && (
        <p className="text-xs text-muted leading-relaxed mt-2">{description}</p>
      )}
    </GlassPanel>
  );
}
