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

          <div className="relative mt-12 z-10">
            {/* Glow / Sombra colorida atrás dos cards */}
            <div className="absolute inset-x-0 inset-y-12 bg-primary-500/10 blur-[120px] rounded-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {landingData.pricingPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative bg-surface-100/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-col h-full border ${
                    plan.popular
                      ? "border-primary-500/50 shadow-[0_8px_40px_rgba(255,91,0,0.15)] ring-1 ring-primary-500/30"
                      : "border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-[0_0_20px_rgba(255,91,0,0.4)] whitespace-nowrap">
                      Mais Procurado
                    </div>
                  )}
                  
                  {/* Header do Plano */}
                  <div className="mb-6 flex-none">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{plan.planName}</h3>
                    <p className="text-sm text-muted mt-2 min-h-[40px] leading-relaxed">{plan.subtitle}</p>
                  </div>

                  <div className="h-px w-full bg-white/5 mb-6 flex-none"></div>

                  {/* Preços */}
                  <div className="flex flex-col gap-4 mb-6 flex-none">
                    {/* Taxa de Implementação */}
                    <div className="flex flex-col gap-1 pb-4 border-b border-white/5">
                      <p className="text-[11px] font-bold text-muted uppercase tracking-widest">Implementação (Taxa Única)</p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-sm text-white font-medium">R$</span>
                        <span className="text-2xl font-bold text-white tracking-tight">{plan.implementation}</span>
                      </div>
                    </div>

                    {/* Mensalidade */}
                    <div className="flex flex-col gap-1 pt-2">
                      <p className="text-[11px] font-bold text-muted uppercase tracking-widest">
                        {plan.planName === 'Plano GROWTH CRM' ? 'Fee mensal' : 'Mensalidade'}
                      </p>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-base text-primary-400 font-medium">R$</span>
                        <span className="text-4xl font-extrabold text-white tracking-tight">{plan.monthly}</span>
                      </div>
                    </div>

                    {/* Condições Especiais */}
                    {plan.conditions && plan.conditions.length > 0 && (
                      <div className="flex flex-col gap-1.5 mt-3 bg-white/[0.03] rounded-xl p-3 border border-white/5">
                        {plan.conditions.map((cond, i) => (
                          <div key={i} className="flex justify-between items-center text-xs">
                            <span className="text-muted/80">{cond.label}:</span>
                            <span className="text-white/90 font-medium tracking-wide">{cond.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="flex-none mb-8">
                    <CTAButton 
                      size="md" 
                      className={`w-full text-base py-4 font-semibold ${plan.popular ? 'shadow-[0_0_20px_rgba(255,91,0,0.2)]' : ''}`}
                      href={landingData.contact.whatsapp}
                    >
                      {plan.cta}
                    </CTAButton>
                  </div>

                  {/* Features */}
                  <div className="flex-1 flex flex-col">
                    <p className="font-semibold text-white text-sm mb-4 tracking-wide">O que está incluso:</p>
                    <ul className="flex flex-col gap-3.5 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check size={18} className="text-primary-400 mt-0.5 shrink-0" />
                          <span className="text-muted/90 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Spacer to push IdealFor to the bottom */}
                    <div className="mt-auto"></div>

                    {/* Ideal For */}
                    {plan.idealFor && (
                      <div className="mt-6 pt-5 border-t border-white/5 text-center">
                        <p className="text-xs text-muted/70 italic leading-relaxed">
                          "{plan.idealFor}"
                        </p>
                      </div>
                    )}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
