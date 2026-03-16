import { Container } from "../ui/Container";
import { landingData } from "@/data/landing";

export function Footer() {
  return (
    <footer className="bg-surface-300 border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-bold text-lg text-white">
                {landingData.company}
              </span>
            </div>
            <p className="text-sm text-muted max-w-xs">
              Sistema Inteligente de Aquisição e Conversão Comercial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#features" className="text-sm text-muted hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="text-sm text-muted hover:text-white transition-colors">Planos</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {landingData.year} {landingData.company}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholder */}
            {['x', 'in', 'ig'].map(n => (
              <a key={n} href="#" className="w-8 h-8 rounded-full bg-surface-200 border border-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-surface-100 transition-colors">
                 <span className="text-[10px] uppercase font-bold">{n}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
