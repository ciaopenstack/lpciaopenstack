import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { MetricCard } from "../ui/MetricCard";
import { landingData } from "@/data/landing";
import { Zap, TrendingUp, Handshake, Target } from "lucide-react";

export function Results() {
  const metrics = [
    { value: "0min", label: "Tempo de resposta", desc: "A IA atende imediatamente, 24/7.", icon: <Zap size={20} />, color: "primary" },
    { value: "+30%", label: "Conversão", desc: "Leads quentes priorizados automaticamente.", icon: <TrendingUp size={20} />, color: "success" },
    { value: "100%", label: "Organização", desc: "Todos os contatos centralizados.", icon: <Target size={20} />, color: "info" },
    { value: "-90%", label: "Desperdício", desc: "Fim das perdas de histórico.", icon: <Handshake size={20} />, color: "danger" },
  ];

  return (
    <section id="results" className="py-24 md:py-32 relative bg-surface-200">
      <Container>
        <div className="flex flex-col gap-16">
          <SectionHeading
            title={landingData.results.title}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {landingData.results.items.map((item, i) => (
              <MetricCard
                key={i}
                value={metrics[i].value}
                label={metrics[i].label}
                description={item}
                icon={metrics[i].icon}
                accentColor={metrics[i].color as "primary" | "success" | "info" | "danger" | "default"}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
