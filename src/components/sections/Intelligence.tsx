"use client";

import { Container } from "../ui/Container";
import { landingData } from "@/data/landing";
import { GlassPanel } from "../ui/GlassPanel";
import { Database, TrendingUp, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function Intelligence() {
  const dataIcons = [
    <Database key="1" className="text-blue-400" size={24} />,
    <Activity key="2" className="text-emerald-400" size={24} />,
    <Users key="3" className="text-purple-400" size={24} />,
    <TrendingUp key="4" className="text-primary-400" size={24} />
  ];

  return (
    <section id="intelligence" className="py-24 md:py-32 relative bg-surface-300 overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0"></div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Esquerda: Conteúdo */}
          {/* Esquerda: Conteúdo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-gradient-gold">
              {landingData.intelligence.title}
            </h2>
            <p className="text-xl text-primary-400 font-medium">
              {landingData.intelligence.subtitle}
            </p>
            
            <ul className="flex flex-col gap-4">
              {landingData.intelligence.items.map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  key={i} 
                  className="flex items-center gap-3 text-lg text-muted/90"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 glow-primary"></div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10 mt-2">
              <p className="text-xl font-bold text-white">
                {landingData.intelligence.conclusion}
              </p>
            </div>
          </motion.div>

          {/* Direita: Elementos de Inteligência/Dados */}
          {/* Direita: Elementos de Inteligência/Dados */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px]"
          >
             
            {/* Grid abstrato simulando painel de Data Science */}
            <div className="grid grid-cols-2 gap-4">
               {landingData.intelligence.items.map((item, i) => (
                 <GlassPanel interactive key={i} className="p-5 flex flex-col gap-4 bg-surface-200/80 border-white/5 hover:scale-105 transition-transform duration-300">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                     {dataIcons[i]}
                   </div>
                   <div>
                     <p className="text-xs text-muted uppercase tracking-wider mb-1">Rastreando</p>
                     <p className="font-bold text-white leading-tight">{item}</p>
                   </div>
                 </GlassPanel>
               ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
