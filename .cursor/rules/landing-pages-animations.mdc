---
description: GSAP, ScrollTrigger, performance de animação, cleanup com gsap.context()
globs: "**/*.tsx"
alwaysApply: false
---

# Regras de animação

## GSAP com critério

- Usar animação apenas onde agrega valor visual
- Priorizar hero e reveals de seções
- Evitar exagero

## Animações isoladas por seção

Cada seção controla sua própria animação. Exemplo: Hero anima sua entrada; Benefits anima seus cards no scroll; CTA anima seus elementos localmente.

## Performance-first nas animações

**Animar preferencialmente:** `transform`, `opacity`

**Evitar animar:** `width`, `height`, `top`, `left`, blur excessivo, filtros pesados, `box-shadow` animado em excesso

## ScrollTrigger

- Usar apenas quando necessário
- Aplicar para reveal de elementos ao entrar na viewport
- Evitar pinning excessivo
- Evitar timelines gigantes para a página inteira

## Cleanup obrigatório

Sempre limpar animações corretamente em componentes React client-side. Usar `gsap.context()` e `ctx.revert()` no cleanup:

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    // animações da seção
  }, ref);
  return () => ctx.revert();
}, []);
```
