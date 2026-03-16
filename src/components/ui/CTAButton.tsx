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
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-95";
    
    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-400 glow-primary hover:glow-primary-strong",
      secondary: "bg-white text-surface-300 hover:bg-gray-100",
      outline: "border border-white/20 bg-transparent text-white hover:bg-white/5",
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
