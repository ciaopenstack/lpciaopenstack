import { Container } from "../ui/Container";

export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-surface-200">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            Empresas que estão organizando suas vendas com o sistema CiaOpenStack
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logo Placeholders elegantes */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white/20"></div>
                <div className="h-4 w-24 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
