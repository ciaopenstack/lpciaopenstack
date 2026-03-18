"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { landingData } from "@/data/landing";
import { StatusBadge } from "../ui/StatusBadge";
import { GlassPanel } from "../ui/GlassPanel";
import { GridBackground } from "../ui/GridBackground";
import { BlurOrb } from "../ui/BlurOrb";
import { Play, MessageCircle, BarChart3, BotMessageSquare } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entry animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-text-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
      );

      tl.fromTo(
        ".hero-image-element",
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        "-=0.6"
      );
      
      tl.fromTo(
        ".hero-floating-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <GridBackground className="absolute inset-0 z-0" intensity={0.06} />
      <BlurOrb color="primary" position="top-right" className="opacity-70" />
      <BlurOrb color="blue" position="bottom-left" className="opacity-20" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="flex flex-col gap-4">
              <h1 className="hero-text-element text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-gradient-gold">
                {landingData.hero.title}
              </h1>
              <p className="hero-text-element text-xl md:text-2xl font-medium text-primary-400">
                {landingData.hero.subtitle}
              </p>
              <p className="hero-text-element text-lg text-muted leading-relaxed mt-2 max-w-xl">
                O <span className="text-white font-medium">Sistema Inteligente de Atendimento da CiaOpenStack</span> organiza seus leads, qualifica automaticamente e acompanha cada conversa para que nenhum cliente interessado seja perdido. <span className="text-white font-medium">Tudo isso sem precisar contratar mais pessoas ou usar várias ferramentas diferentes.</span>
              </p>
            </div>

            <div className="hero-text-element flex flex-wrap items-center gap-y-3 gap-x-6 pt-4">
              {landingData.hero.featureBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                  <span className="text-base">{badge.emoji}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            <p className="hero-text-element text-sm font-semibold text-primary-400 pt-2">
              {landingData.hero.implementationNote}
            </p>

            <div className="hero-text-element flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <CTAButton size="lg" icon={<span className="ml-1">→</span>} href={landingData.contact.whatsapp}>
                {landingData.hero.primaryCta}
              </CTAButton>
              <CTAButton variant="outline" size="lg" icon={<Play size={18} />} href={landingData.contact.whatsapp}>
                {landingData.hero.secondaryCta}
              </CTAButton>
            </div>
          </div>

          {/* Right Column: App Interface Preview - New Concept: Floating & Glow */}
          <div className="hero-image-element relative mx-auto w-full max-w-[750px] lg:max-w-none">
            {/* Ambient Glow behind the image */}
            <div className="absolute inset-0 z-0">
              <BlurOrb 
                color="primary" 
                position="center" 
                className="opacity-40 scale-150 blur-[150px] animate-pulse" 
              />
            </div>

            {/* Floating Container */}
            <div className="hero-main-visual relative z-10 hero-floating-animation">
              {/* Main Application Window - Snug and Glassy */}
                <Image 
                  src="/analise-funils-desktop.webp" 
                  alt="Interface CiaOpenStack - Análise de Funis" 
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-[20px]"
                  priority
                />

              {/* Floating Badges - Positioned as independent layers */}
              <div className="hero-floating-badge absolute top-2 left-2 md:top-8 md:left-10 z-20 shadow-xl scale-[0.8] md:scale-100 origin-left transform hover:scale-105 transition-all duration-300">
                <StatusBadge status="success" pulse icon={<MessageCircle size={14} />}>
                  WhatsApp Conectado
                </StatusBadge>
              </div>
              
              <div className="hero-floating-badge absolute top-1/4 -right-2 md:-right-12 z-20 shadow-2xl scale-[0.8] md:scale-100 origin-right transform hover:scale-105 transition-all duration-300">
                <StatusBadge status="warning" icon={<BotMessageSquare size={14} className="text-primary-400" />} className="bg-[#1A1A1E]/95 border-primary-500/30 backdrop-blur-md">
                  <span className="text-white font-medium text-xs sm:text-sm">IA qualificando leads</span>
                </StatusBadge>
              </div>
              
              <div className="hero-floating-badge absolute bottom-6 left-4 md:bottom-20 md:left-1/4 z-20 shadow-2xl scale-[0.85] md:scale-100 origin-bottom-left transform hover:scale-105 transition-all duration-300">
                <div className="glass-panel px-4 py-3 md:px-5 md:py-3.5 rounded-2xl flex items-center gap-3 md:gap-4 bg-[#1A1A1E]/90 border-white/10 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 shadow-inner">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider mb-0.5 font-bold">Leads Hoje</p>
                    <p className="text-lg font-black text-white leading-tight">+124</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Addition of a CSS animation for floating effect if GSAP is not enough */}
            <style jsx global>{`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
              }
              .hero-floating-animation {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
      </Container>
    </section>
  );
}
