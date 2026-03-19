"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { landingData } from "@/data/landing";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        <div 
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image 
            src="/ciaopenstack-logo.webp" 
            alt="CiaOpenStack Logo" 
            width={180}
            height={48}
            className="h-12 w-auto"
            priority
          />
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

        <div className="hidden md:flex items-center">
          <CTAButton size="sm" href={landingData.contact.whatsapp}>
            {landingData.header.cta}
          </CTAButton>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-surface-200 border-b border-white/10 p-4 flex flex-col gap-4 md:hidden shadow-2xl overflow-hidden"
          >
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
            <CTAButton className="w-full mt-2" size="md" href={landingData.contact.whatsapp}>
              {landingData.header.cta}
            </CTAButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
