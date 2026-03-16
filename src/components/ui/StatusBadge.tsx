import { cn } from "@/lib/utils";
import React from "react";

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  status?: "success" | "info" | "warning" | "default";
  pulse?: boolean;
}

export function StatusBadge({
  children,
  icon,
  status = "default",
  pulse = false,
  className,
  ...props
}: StatusBadgeProps) {
  const statusStyles = {
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    warning: "bg-primary-500/10 text-primary-400 border-primary-500/20",
    default: "bg-surface-50 text-muted border-white/10",
  };

  const dotStyles = {
    success: "bg-emerald-400",
    info: "bg-blue-400",
    warning: "bg-primary-400",
    default: "bg-muted",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm",
        statusStyles[status],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", dotStyles[status])} />
          <span className={cn("relative inline-flex rounded-full h-2 w-2", dotStyles[status])} />
        </span>
      )}
      {icon && <span className="opacity-80">{icon}</span>}
      {children}
    </div>
  );
}
