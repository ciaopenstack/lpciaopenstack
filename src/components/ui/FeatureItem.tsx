import { cn } from "@/lib/utils";
import React from "react";

interface FeatureItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function FeatureItem({ icon, title, description, className, ...props }: FeatureItemProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 sm:gap-6", className)} {...props}>
      {icon && (
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-50 border border-white/5 text-primary-400">
            {icon}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        <p className="text-muted leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  );
}
