"use client";

import { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { landingData } from "@/data/landing";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-surface-300/80 backdrop-blur-md border-white/10 py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-gold-bg flex items-center justify-center shadow-lg shadow-[#FF4500]/30">
            <span className="text-white font-bold text-lg leading-none">C</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            {landingData.header.logo}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {landingData.header.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <CTAButton size="sm">{landingData.header.cta}</CTAButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface-200 border-b border-white/10 p-4 flex flex-col gap-4 md:hidden shadow-2xl">
          {landingData.header.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <CTAButton className="w-full mt-2" size="md">
            {landingData.header.cta}
          </CTAButton>
        </div>
      )}
    </header>
  );
}
