import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { landingData } from "@/data/landing";
import { GlassPanel } from "../ui/GlassPanel";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-surface-300">
      <Container>
        <div className="flex flex-col gap-16">
          <SectionHeading
            title="Como o sistema inteligente trabalha por você"
            description="Um fluxo claro e automatizado que garante que nenhum lead seja perdido."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {/* Linha conectora no desktop */}
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-white/10 z-0"></div>

            {landingData.howItWorks.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-surface-100 flex items-center justify-center border border-primary-500/30 text-2xl font-bold text-primary-400 shadow-[0_0_30px_rgba(255,91,0,0.15)]">
                  {step.step}
                </div>
                
                <GlassPanel className="w-full text-center p-6 bg-surface-200/50 hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
