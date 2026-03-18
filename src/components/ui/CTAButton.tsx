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
      primary: "bg-gradient-to-r from-[#e6cf4a]/70 via-[#f89549]/70 via-[60%] to-[#ea764c]/70 backdrop-blur-2xl text-white font-bold border border-white/30 shadow-[0_4px_24px_rgba(230,207,74,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)] hover:scale-105 hover:from-[#ea764c] hover:via-[#ea764c] hover:to-[#ea764c] hover:shadow-[0_8px_32px_rgba(234,118,76,0.5),inset_0_1px_2px_rgba(255,255,255,0.7)] hover:border-white/50 active:shadow-[0_2px_10px_rgba(234,118,76,0.3)]",
      secondary: "bg-white/10 backdrop-blur-md text-white border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#ea764c] hover:border-[#ea764c] hover:shadow-[0_8px_32px_rgba(234,118,76,0.4)] hover:-translate-y-0.5",
      outline: "bg-white/5 backdrop-blur-sm text-white border border-white/15 hover:bg-[#ea764c] hover:border-[#ea764c] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(234,118,76,0.4)] shadow-[0_2px_12px_rgba(0,0,0,0.1)]",
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
