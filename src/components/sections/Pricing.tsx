"use client";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { CTAButton } from "../ui/CTAButton";
import { landingData } from "@/data/landing";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-surface-300">
      <Container>
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Comece a organizar suas vendas hoje"
              description="Escolha a condição ideal para transformar seu WhatsApp em uma máquina de conversão."
            />
          </motion.div>

          <div className="relative mt-8">
            {/* Glow / Sombra colorida atrás do card principal */}
            <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Pricing Card Principal */}
            {/* Pricing Card Principal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 bg-surface-100/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col lg:flex-row gap-12"
            >
              
              {/* Esquerda: Info do Plano */}
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm font-bold tracking-wider uppercase mb-4 border border-primary-500/20">
                    PREÇO
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{landingData.pricing.planName}</h3>
                  <p className="text-muted mt-2">{landingData.pricing.subtitle}</p>
                </div>

                <div className="h-px w-full bg-white/5 my-2"></div>

                <div className="flex flex-col gap-4">
                  <p className="font-medium text-white">O que está incluso:</p>
                  <ul className="flex flex-col gap-3">
                    {landingData.features.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-primary-400 mt-0.5 shrink-0" />
                        <span className="text-muted/90 text-sm">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direita: Preços e CTA */}
              <div className="lg:w-[400px] flex flex-col gap-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                
                {/* Taxa de Implementação */}
                <div className="flex flex-col gap-1 pb-6 border-b border-white/10">
                  <p className="text-sm font-medium text-muted">Implementação</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-white font-medium">R$</span>
                    <span className="text-4xl font-bold text-white tracking-tight">{landingData.pricing.implementation}</span>
                    <span className="text-xs text-emerald-400 font-medium ml-2 px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">Taxa Única</span>
                  </div>
                </div>

                {/* Mensalidade */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-white">Mensalidade</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-primary-400 font-medium">R$</span>
                    <span className="text-5xl font-extrabold text-white tracking-tight">{landingData.pricing.monthly}</span>
                    <span className="text-muted">/mês</span>
                  </div>
                </div>

                {/* Condições Especiais */}
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-sm font-medium text-white mb-2">Condições especiais:</p>
                  {landingData.pricing.conditions.map((cond, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted">{cond.label}:</span>
                      <span className="text-white font-medium">{cond.value}</span>
                    </div>
                  ))}
                </div>

                <CTAButton size="lg" className="w-full mt-4 text-lg py-5 shadow-[0_0_30px_rgba(255,91,0,0.25)]" href={landingData.contact.whatsapp}>
                  {landingData.pricing.cta}
                </CTAButton>
                
                <p className="text-center text-xs text-muted">
                  Configuração finalizada em até 24h.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
