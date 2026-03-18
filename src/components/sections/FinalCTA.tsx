import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { landingData } from "@/data/landing";
import { BlurOrb } from "../ui/BlurOrb";
import { GridBackground } from "../ui/GridBackground";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-surface-200 border-t border-white/5">
      {/* Elementos de Fundo */}
      <div className="absolute inset-0 bg-primary-500/5 z-0" />
      <BlurOrb color="primary" position="center" className="opacity-30 mix-blend-screen" />
      
      <GridBackground className="absolute inset-0 z-0" intensity={0.06} />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gradient-gold">
            {landingData.finalCTA.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted font-medium max-w-2xl">
            {landingData.finalCTA.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <CTAButton size="lg" className="px-10 py-5 text-lg" href={landingData.contact.whatsapp}>
              {landingData.finalCTA.primaryCta}
            </CTAButton>
            <CTAButton variant="secondary" size="lg" className="px-10 py-5 text-lg" href={landingData.contact.whatsapp}>
              {landingData.finalCTA.secondaryCta}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
