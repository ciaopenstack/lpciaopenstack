"use client";

import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const COMPANHIAS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/cliente${i + 1}.webp`,
  alt: `Cliente ${i + 1}`,
}));

export function SocialProof() {
  return (
    <section className="py-16 border-y border-white/5 bg-surface-300 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5 pointer-events-none" />
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-muted uppercase tracking-wider text-center"
          >
            Empresas que estão organizando suas vendas com o sistema CiaOpenStack
          </motion.p>
          
          {/* Scroll container */}
          <div className="relative flex w-full max-w-5xl overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-8">
            <div className="flex w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] transition-all duration-500">
              
              {/* First set of logos */}
              <div className="flex w-max items-center justify-center gap-12 md:gap-20 px-6 md:px-10">
                {COMPANHIAS.map((company) => (
                  <div key={company.id} className="flex items-center justify-center cursor-default group">
                    <div className="bg-gradient-to-br from-white/90 to-slate-200/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl shadow-black/40 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20 md:h-24 border border-white/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary-500/20 group-hover:border-primary-500/40">
                      <Image 
                        src={company.src} 
                        alt={company.alt}
                        width={200}
                        height={80}
                        className="max-h-[100%] max-w-[100%] w-auto h-auto object-contain shrink-0 brightness-95 group-hover:brightness-100 transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Duplicated set for seamless looping */}
              <div className="flex w-max items-center justify-center gap-12 md:gap-20 px-6 md:px-10" aria-hidden="true">
                {COMPANHIAS.map((company) => (
                  <div key={`dup-${company.id}`} className="flex items-center justify-center cursor-default group">
                    <div className="bg-gradient-to-br from-white/90 to-slate-200/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl shadow-black/40 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-20 md:h-24 border border-white/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-primary-500/20 group-hover:border-primary-500/40">
                      <Image 
                        src={company.src} 
                        alt={company.alt}
                        width={200}
                        height={80}
                        className="max-h-[100%] max-w-[100%] w-auto h-auto object-contain shrink-0 brightness-95 group-hover:brightness-100 transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </Container>
      
      {/* Inline styles for custom keyframes that don't depend on tailwind.config */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            to {
              transform: translateX(-50%);
            }
          }
        `
      }} />
    </section>
  );
}
