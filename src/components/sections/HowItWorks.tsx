"use client";

import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { landingData } from "@/data/landing";
import { GlassPanel } from "../ui/GlassPanel";
import { motion } from "framer-motion";

export function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-surface-300">
      <Container>
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Como o sistema inteligente trabalha por você"
              description="Um fluxo claro e automatizado que garante que nenhum lead seja perdido."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {/* Linha conectora no desktop */}
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-primary-500/20 z-0"></div>

            {landingData.howItWorks.map((step, i) => (
              <motion.div 
                key={isMobile ? `mobile-${step.title}-${i}` : `desktop-${step.title}-${i}`}
                className="flex flex-col items-center text-center gap-6 relative z-10 h-full"
                // No desktop (isMobile=false), sempre vem da esquerda: x=-80
                // No mobile (isMobile=true), comportamento atual alternado: x= -60 ou 60
                initial={{ opacity: 0, x: isMobile ? (i % 2 === 0 ? -60 : 60) : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: isMobile ? "-100px" : "-50px" }}
                // No desktop, o delay garante que um espere o outro (0.5s cada, já que a duration é 0.6)
                // No mobile, mantém o comportamento atual: delay i * 0.15
                transition={{ duration: 0.6, delay: isMobile ? i * 0.15 : i * 0.5, ease: "easeOut" }}
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-surface-100 flex items-center justify-center border border-primary-500/30 text-2xl font-bold text-primary-400 shadow-[0_0_30px_rgba(255,91,0,0.15)]">
                  {step.step}
                </div>
                
                <GlassPanel interactive className="w-full flex-1 text-center p-6 bg-surface-200/50 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-start">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
