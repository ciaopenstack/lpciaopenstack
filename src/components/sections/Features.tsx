import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FeatureItem } from "../ui/FeatureItem";
import { landingData } from "@/data/landing";
import { MessageSquare, Tags, Clock, BarChart4, Target } from "lucide-react";

export function Features() {
  const icons = [
    <MessageSquare key="1" />,
    <Tags key="2" />,
    <Clock key="3" />,
    <BarChart4 key="4" />,
    <Target key="5" />
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative bg-surface-200">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          <SectionHeading
            title={landingData.features.title}
            description={
              <>
                Perfeito para empresas que querem{" "}
                <span className="text-white font-medium">
                  parar de perder leads por desorganização.
                </span>
              </>
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16 mt-8">
            {landingData.features.items.map((feature, i) => (
              <FeatureItem
                key={i}
                icon={icons[i]}
                title={feature.title}
                description={feature.description}
                className="hover:bg-surface-100/30 p-4 -m-4 rounded-2xl transition-colors"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
