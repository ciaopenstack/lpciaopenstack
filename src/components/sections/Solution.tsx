import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { landingData } from "@/data/landing";
import { GlassPanel } from "../ui/GlassPanel";
import { Users, Bot, Layers, Network } from "lucide-react";

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
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              title={landingData.solution.title}
              description={landingData.solution.subtitle}
            />
            
            <div className="flex flex-col gap-6">
              {landingData.solution.conclusion.map((text, i) => (
                <p key={i} className="text-xl text-white font-medium border-l-2 border-primary-500 pl-4 py-1">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Direita: Elementos Gráficos (Cards Conectados) */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            
            {/* Círculo Central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center glow-primary z-10 backdrop-blur-md">
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary-500/30">
                IA
              </div>
            </div>

            {/* Linhas de conexão abstratas */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
              <line x1="200" y1="200" x2="100" y2="100" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="300" y2="100" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="100" y2="300" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="200" y1="200" x2="300" y2="300" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* 4 Cards em volta */}
            <div className="w-full h-full relative z-20">
              {landingData.solution.items.map((item, i) => {
                const positions = [
                  "top-4 left-4 md:top-8 md:left-8",
                  "top-4 right-4 md:top-8 md:right-8",
                  "bottom-4 left-4 md:bottom-8 md:left-8",
                  "bottom-4 right-4 md:bottom-8 md:right-8"
                ];
                
                return (
                  <GlassPanel 
                    key={i} 
                    className={`absolute w-36 h-36 md:w-48 md:h-48 p-4 flex flex-col items-center justify-center text-center gap-3 bg-surface-100/80 ${positions[i]}`}
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                      {icons[i]}
                    </div>
                    <p className="text-sm md:text-base font-bold text-white">{item}</p>
                  </GlassPanel>
                )
              })}
            </div>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
