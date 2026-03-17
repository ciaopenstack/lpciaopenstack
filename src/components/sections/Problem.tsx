import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { landingData } from "@/data/landing";
import { XCircle } from "lucide-react";

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 relative bg-surface-300">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <SectionHeading
            title={landingData.problem.title}
          />
          
          <div className="mt-16 w-full max-w-2xl bg-surface-100/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
            
            <p className="text-xl font-medium text-white mb-8">
              {landingData.problem.subtitle}
            </p>

            <ul className="flex flex-col gap-5">
              {landingData.problem.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <XCircle size={14} className="text-red-400" />
                  </div>
                  <span className="text-lg text-muted/90 leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-2xl font-bold text-white tracking-tight">
                {landingData.problem.conclusion}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
