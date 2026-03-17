import { Container } from "../ui/Container";

const COMPANHIAS = [
  {
    name: "TechPulse",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "GlobalMídia",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3v18M15 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Construtora Nova",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Dr. Sorriso",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "AutoPrime",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-surface-200 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-sm font-medium text-muted uppercase tracking-wider text-center">
            Empresas que estão organizando suas vendas com o sistema CiaOpenStack
          </p>
          
          {/* Scroll container */}
          <div className="relative flex w-full max-w-5xl overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              
              {/* First set of logos */}
              <div className="flex w-max items-center justify-center gap-8 md:gap-16 px-4 md:px-8">
                {COMPANHIAS.map((company, i) => (
                  <div key={i} className="flex items-center gap-3 transition-transform hover:scale-105 duration-300 cursor-default">
                    <div className="text-white/80 shrink-0">
                      {company.logo}
                    </div>
                    <span className="text-xl font-semibold text-white/80 tracking-tight whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Duplicated set for seamless looping */}
              <div className="flex w-max items-center justify-center gap-8 md:gap-16 px-4 md:px-8" aria-hidden="true">
                {COMPANHIAS.map((company, i) => (
                  <div key={i} className="flex items-center gap-3 transition-transform hover:scale-105 duration-300 cursor-default">
                    <div className="text-white/80 shrink-0">
                      {company.logo}
                    </div>
                    <span className="text-xl font-semibold text-white/80 tracking-tight whitespace-nowrap">
                      {company.name}
                    </span>
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
