import { Container } from "../ui/Container";
import { landingData } from "@/data/landing";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-300 border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#e6cf4a] flex items-center justify-center shadow-lg shadow-[#e6cf4a]/30">
                <span className="text-white font-bold text-lg leading-none">C</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {landingData.company}
              </span>
            </div>
            <p className="text-sm text-muted max-w-xs mx-auto md:mx-0">
              Sistema Inteligente de Aquisição e Conversão Comercial.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="flex flex-col items-center md:items-start gap-3">
              <li><a href="#features" className="text-sm text-muted hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="text-sm text-muted hover:text-white transition-colors">Planos</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Integrações</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="flex flex-col items-center md:items-start gap-3">
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="flex flex-col items-center md:items-start gap-3">
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact Icons - Full Width Row */}
          <div className="col-span-2 md:col-span-4 flex justify-center md:justify-start pt-8 md:pt-4 md:border-none">
            <div className="flex flex-row gap-4">
              <a 
                href={landingData.contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-surface-200 flex items-center justify-center text-muted hover:text-primary-400 hover:bg-primary-500/20 transition-all border border-white/5 group"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={landingData.contact.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-surface-200 flex items-center justify-center text-muted hover:text-emerald-400 hover:bg-emerald-500/20 transition-all border border-white/5"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href={`mailto:${landingData.contact.email}`} 
                className="w-10 h-10 rounded-full bg-surface-200 flex items-center justify-center text-muted hover:text-blue-400 hover:bg-blue-500/20 transition-all border border-white/5"
                title={`Email: ${landingData.contact.email}`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {landingData.year} {landingData.company}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
