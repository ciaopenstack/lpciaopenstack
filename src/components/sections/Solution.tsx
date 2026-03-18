"use client";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { landingData } from "@/data/landing";
import { GlassPanel } from "../ui/GlassPanel";
import { Users, Bot, Layers, Network } from "lucide-react";
import { motion } from "framer-motion";

export function Solution() {
  const icons = [
    <Network key="1" className="text-emerald-400" size={32} />,
    <Bot key="2" className="text-primary-400" size={32} />,
    <Users key="3" className="text-blue-400" size={32} />,
    <Layers key="4" className="text-purple-400" size={32} />,
  ];

  return (
    <section id="solution" className="py-24 md:py-32 relative bg-surface-200 overflow-hidden">
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Esquerda: Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <SectionHeading
              align="left"
              title={landingData.solution.title}
              description={landingData.solution.subtitle}
            />
            
            <div className="flex flex-col gap-6">
              {landingData.solution.conclusion.map((text, i) => (
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  key={i} 
                  className="text-xl text-white font-medium border-l-2 border-primary-500 pl-4 py-1"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Direita: Elementos Gráficos (Cards Conectados) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
          >
            
            {/* Linhas de conexão - SVG atrás de tudo */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <line x1="200" y1="200" x2="80" y2="80" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
              <line x1="200" y1="200" x2="320" y2="80" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
              <line x1="200" y1="200" x2="80" y2="320" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
              <line x1="200" y1="200" x2="320" y2="320" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
            </svg>

            {/* Grid 3x3 para posicionar cards nos cantos e IA no centro */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 z-10">
              {/* Card 0: Top-left */}
              <div className="flex items-center justify-center">
                <GlassPanel interactive className="w-full max-w-[160px] md:max-w-[180px] p-4 flex flex-col items-center justify-center text-center gap-2 bg-surface-100/80 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    {icons[0]}
                  </div>
                  <p className="text-xs md:text-sm font-bold text-white">{landingData.solution.items[0]}</p>
                </GlassPanel>
              </div>
              {/* Top-center: vazio */}
              <div />
              {/* Card 1: Top-right */}
              <div className="flex items-center justify-center">
                <GlassPanel interactive className="w-full max-w-[160px] md:max-w-[180px] p-4 flex flex-col items-center justify-center text-center gap-2 bg-surface-100/80 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    {icons[1]}
                  </div>
                  <p className="text-xs md:text-sm font-bold text-white">{landingData.solution.items[1]}</p>
                </GlassPanel>
              </div>
              {/* Middle-left: vazio */}
              <div />
              {/* Center: Círculo IA */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center glow-primary backdrop-blur-md animate-pulse">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg shadow-primary-500/30">
                    IA
                  </div>
                </div>
              </div>
              {/* Middle-right: vazio */}
              <div />
              {/* Card 2: Bottom-left */}
              <div className="flex items-center justify-center">
                <GlassPanel interactive className="w-full max-w-[160px] md:max-w-[180px] p-4 flex flex-col items-center justify-center text-center gap-2 bg-surface-100/80 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    {icons[2]}
                  </div>
                  <p className="text-xs md:text-sm font-bold text-white">{landingData.solution.items[2]}</p>
                </GlassPanel>
              </div>
              {/* Bottom-center: vazio */}
              <div />
              {/* Card 3: Bottom-right */}
              <div className="flex items-center justify-center">
                <GlassPanel interactive className="w-full max-w-[160px] md:max-w-[180px] p-4 flex flex-col items-center justify-center text-center gap-2 bg-surface-100/80 hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    {icons[3]}
                  </div>
                  <p className="text-xs md:text-sm font-bold text-white">{landingData.solution.items[3]}</p>
                </GlassPanel>
              </div>
            </div>
            
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
