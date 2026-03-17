"use client";

import { useRef, useEffect } from "react";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { landingData } from "@/data/landing";
import { StatusBadge } from "../ui/StatusBadge";
import { GlassPanel } from "../ui/GlassPanel";
import { GridBackground } from "../ui/GridBackground";
import { BlurOrb } from "../ui/BlurOrb";
import { CheckCircle2, Play, MessageCircle, BarChart3, BotMessageSquare } from "lucide-react";
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
            <div className="hero-text-element inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
              <span className="text-sm font-medium text-white/90">{landingData.hero.badge}</span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="hero-text-element text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-gradient-gold">
                {landingData.hero.title}
              </h1>
              <p className="hero-text-element text-xl md:text-2xl font-medium text-primary-400">
                {landingData.hero.subtitle}
              </p>
              <p className="hero-text-element text-lg text-muted leading-relaxed mt-2 max-w-xl">
                {landingData.hero.description}
              </p>
            </div>

            <div className="hero-text-element flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <CTAButton size="lg" icon={<span className="ml-1">→</span>}>
                {landingData.hero.primaryCta}
              </CTAButton>
              <CTAButton variant="outline" size="lg" icon={<Play size={18} />}>
                {landingData.hero.secondaryCta}
              </CTAButton>
            </div>

            <div className="hero-text-element flex flex-wrap items-center gap-y-3 gap-x-6 pt-4">
              {landingData.hero.checkItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Mock Dashboard */}
          <div className="hero-image-element relative mx-auto w-full max-w-[600px] lg:max-w-none">
            {/* Main Application Window */}
            <GlassPanel className="p-1 rounded-2xl border border-white/10 shadow-2xl bg-[#0F0F13]/80 backdrop-blur-xl aspect-[3/4] sm:aspect-square md:aspect-auto md:h-[500px]">
              
              {/* App Header */}
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-surface-50"></div>
                  <div className="w-3 h-3 rounded-full bg-surface-50"></div>
                  <div className="w-3 h-3 rounded-full bg-surface-50"></div>
                </div>
                <div className="mx-auto flex h-6 w-48 rounded bg-white/5"></div>
              </div>

              {/* App Body - Dashboard Layout */}
              <div className="p-3 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-[calc(100%-3rem)] overflow-hidden">
                
                {/* Left col dashboard metrics */}
                <div className="flex flex-col gap-4">
                  <div className="bg-surface-100 rounded-xl p-4 border border-white/5 h-24">
                    <p className="text-xs text-muted font-medium mb-1">Taxa de Conversão</p>
                    <p className="text-2xl font-bold text-white mb-2">24.8%</p>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      +4.2% esta semana
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex-1 relative overflow-hidden flex flex-col justify-end">
                    <p className="text-xs text-muted font-medium absolute top-4 left-4">Leads Recebidos</p>
                    {/* Fake Bar Chart */}
                    <div className="flex items-end gap-2 h-20 mt-6 mt-auto">
                      <div className="w-full bg-primary-500/20 rounded-t-sm h-[40%]"></div>
                      <div className="w-full bg-primary-500/40 rounded-t-sm h-[60%]"></div>
                      <div className="w-full bg-primary-500/60 rounded-t-sm h-[85%]"></div>
                      <div className="w-full bg-primary-500/80 rounded-t-sm h-[70%]"></div>
                      <div className="w-full bg-primary-500 rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(255,91,0,0.4)]"></div>
                      <div className="w-full bg-primary-500/60 rounded-t-sm h-[50%]"></div>
                    </div>
                  </div>
                </div>

                {/* Right col dashboard lists */}
                <div className="bg-surface-100 rounded-xl p-3 sm:p-4 border border-white/5 flex flex-col gap-2 sm:gap-3">
                  <p className="text-xs text-muted font-medium mb-1">Últimos Atendimentos (IA)</p>
                  
                  {/* List Items */}
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-surface-200 border border-white/[0.02]">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                        <MessageCircle size={14} className="text-muted" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-2 w-20 bg-white/20 rounded mb-1.5"></div>
                        <div className="h-1.5 w-12 bg-white/10 rounded"></div>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  ))}
                </div>

              </div>
            </GlassPanel>

            {/* Floating Badges */}
            <div className="hero-floating-badge absolute -top-4 right-2 sm:-right-6 lg:-right-12">
              <StatusBadge status="success" pulse icon={<MessageCircle size={14} />}>
                WhatsApp Conectado
              </StatusBadge>
            </div>
            
            <div className="hero-floating-badge absolute top-1/2 -left-2 sm:-left-8 lg:-left-16 shadow-2xl">
              <StatusBadge status="warning" icon={<BotMessageSquare size={14} className="text-primary-400" />} className="bg-[#1A1A1E]/90 border-primary-500/30">
                <span className="text-white font-medium text-xs sm:text-sm">IA qualificando leads</span>
              </StatusBadge>
            </div>
            
            <div className="hero-floating-badge absolute -bottom-6 right-4 sm:right-8 lg:-bottom-6 lg:right-10 shadow-2xl">
              <div className="glass-panel px-4 py-3 rounded-xl flex items-center gap-3 bg-[#1A1A1E]/95 border-white/10">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                  <BarChart3 size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted leading-tight mb-0.5">Leads Hoje</p>
                  <p className="text-sm font-bold text-white leading-tight">+124</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
