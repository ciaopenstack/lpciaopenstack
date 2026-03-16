---
description: Estrutura de pastas (sections, ui, data, lib), page.tsx limpa, seções desacopladas
globs: "**/app/**/*,**/components/**/*"
alwaysApply: false
---

# Arquitetura obrigatória

Use uma arquitetura baseada em seções independentes. Cada seção da landing page deve ser um componente separado.

## Estrutura de pastas

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    sections/
      hero.tsx
      benefits.tsx
      process.tsx
      proof.tsx
      faq.tsx
      cta.tsx
    ui/
      button.tsx
      container.tsx
      section-title.tsx
  lib/
    gsap.ts
    utils.ts
  data/
    landing.ts
```

## Regras de organização

**Sections:** Blocos grandes da landing ficam em `components/sections`. Cada seção é independente e com responsabilidade única. A página principal apenas compõe as seções.

**UI compartilhada:** Componentes reutilizáveis em `components/ui` (Button, Container, Badge, SectionTitle, Card).

**Dados:** Textos estáticos, listas, benefícios, FAQs em `data/`. Evite hardcode excessivo nas seções quando fizer sentido extrair.

**Libs:** Configurações reutilizáveis, helpers e integrações em `lib/`.

## page.tsx limpa

A página principal deve apenas importar e organizar as seções:

```tsx
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Process from "@/components/sections/process";
import Proof from "@/components/sections/proof";
import Faq from "@/components/sections/faq";
import Cta from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Process />
      <Proof />
      <Faq />
      <Cta />
    </>
  );
}
```

## Seções desacopladas

- Não criar dependência forte entre seções
- Cada seção deve poder ser removida, reordenada ou reutilizada facilmente

## Implementação geral

- **Responsividade:** Todas as seções mobile-first; boa experiência em celular, tablet e desktop
- **Sem código desnecessário:** Não gerar abstrações exageradas; priorizar clareza e escalabilidade
