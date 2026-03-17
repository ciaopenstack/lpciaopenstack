import { cn } from "@/lib/utils";
import React from "react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", children, icon, ...props }, ref) => {
    const baseStyles = "glass-btn-reflection inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6cf4a]";
    
    const variants = {
      primary: "bg-[#e6cf4a]/90 backdrop-blur-md text-surface-300 font-bold border border-[#e6cf4a]/30 shadow-[0_4px_20px_rgba(230,207,74,0.2)] hover:scale-105 hover:bg-[#e6cf4a] hover:shadow-[0_8px_32px_rgba(230,207,74,0.35)] hover:border-[#e6cf4a]/50 active:shadow-[0_2px_10px_rgba(230,207,74,0.15)]",
      secondary: "bg-white/10 backdrop-blur-md text-white border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-white/20 hover:border-white/25 hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)] hover:-translate-y-0.5",
      outline: "bg-white/5 backdrop-blur-sm text-white border border-white/15 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 shadow-[0_2px_12px_rgba(0,0,0,0.1)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {icon && <span className="ml-2 -mr-1">{icon}</span>}
      </button>
    );
  }
);
CTAButton.displayName = "CTAButton";
