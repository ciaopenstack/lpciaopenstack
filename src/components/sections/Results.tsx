"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { MetricCard } from "../ui/MetricCard";
import { landingData } from "@/data/landing";
import { Zap, TrendingUp, Handshake, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Results() {
  const containerRef = useRef<HTMLDivElement>(null);

  const metrics = [
    { value: "0min", label: "Tempo de resposta", desc: "A IA atende imediatamente, 24/7.", icon: <Zap size={20} />, color: "primary" },
    { value: "+30%", label: "Conversão", desc: "Leads quentes priorizados automaticamente.", icon: <TrendingUp size={20} />, color: "success" },
    { value: "100%", label: "Organização", desc: "Todos os contatos centralizados.", icon: <Target size={20} />, color: "info" },
    { value: "-90%", label: "Desperdício", desc: "Fim das perdas de histórico.", icon: <Handshake size={20} />, color: "danger" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entry animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        defaults: { ease: "power3.out" }
      });

      tl.fromTo(
        ".results-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      tl.fromTo(
        ".results-image-element",
        { x: -50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        "-=0.6"
      );
      
      tl.fromTo(
        ".results-metric-card",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="results" className="py-24 md:py-32 relative bg-surface-200 overflow-hidden" ref={containerRef}>
      <Container>
        <div className="flex flex-col gap-16">
          <div className="results-heading">
            <SectionHeading
              title={landingData.results.title}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image with Floating Animation */}
            <div className="results-image-element relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="results-floating-animation relative z-10">
                <Image 
                  src="/desempenho-vendas-mobile.webp" 
                  alt="Desempenho de Vendas Mobile" 
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-[20px] shadow-2xl border border-white/5"
                  priority
                />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-primary-500/10 blur-3xl -z-10 rounded-full animate-pulse" />
            </div>

            {/* Right Column: 2x2 Metric Grid */}
            <div className="grid grid-cols-2 gap-4">
              {landingData.results.items.map((item, i) => (
                <div key={i} className="results-metric-card">
                  <MetricCard
                    value={metrics[i].value}
                    label={metrics[i].label}
                    description={item}
                    icon={metrics[i].icon}
                    accentColor={metrics[i].color as "primary" | "success" | "info" | "danger" | "default"}
                    className="h-full p-5 sm:p-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* CSS animation for floating effect */}
      <style jsx global>{`
        @keyframes float-results {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .results-floating-animation {
          animation: float-results 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
