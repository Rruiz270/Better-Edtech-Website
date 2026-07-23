# Better-Edtech-Website

Rebuild do site institucional/marketing da Better Tech: landing e páginas de produto (Learn, Pay, Systems, Labs, Edtech) apresentando o ecossistema de soluções educacionais com IA. Site estático, sem back-end.

## Stack

- **Linguagem:** TypeScript (`strict: true`).
- **Framework:** Next.js 14.0.4 (App Router) + React 18.
- **Estilo:** Tailwind CSS 3.3 (config em `tailwind.config.js`, PostCSS + Autoprefixer).
- **Ícones:** lucide-react.
- **Banco:** nenhum.
- **Deploy:** exportação estática (`output: 'export'` em `next.config.js`) — hospedável em qualquer host estático (Vercel, etc.).
- **Package manager:** npm (`package-lock.json`).

## Comandos

- `npm run dev` — servidor de desenvolvimento (`next dev`, porta 3000).
- `npm run build` — build + export estático (`next build`; gera saída estática por causa de `output: 'export'`).
- `npm start` — `next start` (nota: com export estático, sirva a pasta de saída estática; use `dev` para desenvolvimento).
- `npm run lint` — `next lint`.
- Não há script de testes.

## Estrutura

- `app/` — App Router: `layout.tsx`, `page.tsx` (home), `globals.css` e páginas de produto:
  - `app/learn/`, `app/pay/`, `app/systems/`, `app/labs/`, `app/edtech/`.
- `components/` — seções de página: `Hero.tsx`, `Navigation.tsx`, `Manifesto.tsx`, `ProductShowcase.tsx`, `CaseStudies.tsx`, `SuccessCases.tsx`, `Partnerships.tsx`, `Contact.tsx`, `Footer.tsx`, `InteractiveFormula.tsx`, etc.
  - `components/products/` — heros/features por produto (`BetterLearnHero.tsx`, `BetterPayHero.tsx`, `BetterSystemsHero.tsx`, `BetterLabsHero.tsx`, `BetterPayFeatures.tsx`).
- `public/` — imagens e estáticos.

## Convenções de código

- TypeScript estrito; componentes React em PascalCase, um por arquivo.
- Tailwind 3 com `tailwind.config.js` — usar classes utilitárias; centralizar cores/tema no config.
- ESLint via `eslint-config-next` (rode `npm run lint`).
- Como é export estático, **não** usar recursos server-only (rotas de API, Server Actions, `next/image` otimizado remoto). `images.unoptimized: true` já está setado.

## Variáveis de ambiente

- Nenhuma variável de ambiente é usada (site estático de marketing). Qualquer valor exposto ao cliente exigiria prefixo `NEXT_PUBLIC_`; nunca commitar valores.

## CI/CD & Deploy

- **Deploy:** build estático publicado (Vercel auto-deploy da `main` ou upload da saída estática).
- **CI:** não há GitHub Actions. Recomendado workflow mínimo em PR: `npm ci` → `npm run lint` → `npx tsc --noEmit` → `npm run build`.

## Boas práticas de PR

- Branches: `feat/…`, `fix/…`, `chore/…`; commits em **Conventional Commits**.
- PRs pequenos; ≥1 review; **squash merge**; `main` sempre deployável.
- Checklist: `npm run build` (export) passa, lint limpo, sem segredos, screenshots antes/depois em mudanças visuais (é um site de marketing — visual importa).

## Testes

- Não há testes. Recomendação mínima proporcional a um site estático: rodar `npm run build` (garante que o export não quebra) e checagem visual/responsiva manual das páginas.

## Segurança & dados

- **Nunca** commitar `.env*` ou segredos.
- Sem dados pessoais coletados no build (formulário de contato precisa de destino externo, não back-end aqui). Se adicionar captura de leads, avaliar LGPD.
- Revisar dependências periodicamente (`npm audit`) — Next 14 é uma major mais antiga que os demais repos i10.

## Gotchas

- `output: 'export'` + `trailingSlash: true`: rotas geram pastas com `index.html` e barra final. Nada de server runtime — recursos dinâmicos do Next não funcionam.
- `images.unoptimized: true`: imagens não passam pela otimização do Next; dimensione os assets manualmente.
- Next 14 usa `next lint` e ESLint 8 (config legada), diferente dos repos i10 mais novos.
