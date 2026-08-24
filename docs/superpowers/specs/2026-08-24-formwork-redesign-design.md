# "The Formwork" — Tirupati Precast Landing Redesign

**Date:** 2026-08-24
**Status:** Approved
**Scope:** Home page (`/`) + shared shell (Header, Footer, global tokens). Other routes inherit the design system unchanged.

## Problem

Current landing page is generic AI-SaaS: purple gradients (`#6d28d9` / `#8b5cf6` / `#4f46e5`), floating/spinning/pulsing circles, glass cards, rounded corners, decorative framer-motion everywhere. Wrong register for an industrial B2B precast concrete manufacturer.

## Concept

**"The Formwork"** — brutalist-industrial editorial. Concrete pours once into a formwork; the site borrows its language: formwork seam grid lines, technical annotation labels, registration marks, massive condensed type. Art-directed product site, not template.

Inspiration register (not copies): 21st.dev, Linear, Vercel, Stripe quality bar.

Explicitly banned: bento grids, gradients, glassmorphism, glow blobs, floating/spinning/pulsing/bouncing animation, border radius.

## Design Tokens

| Token | Value | Use |
|---|---|---|
| bone | `#F2F0EB` | page background |
| ink | `#191817` | foreground, dark bands |
| concrete | `#8B8680` | secondary text |
| safety orange | `#E84E0F` | sole accent (+ alpha variants) |

- Radius **0** everywhere (`--radius: 0rem`). shadcn HSL var skeleton retained (ui components depend on it) but re-pointed: primary→ink, background→bone, ring→orange.
- No gradients anywhere. No shadows-as-decoration.

### Typography (next/font/google only)

- **Archivo** 800–900 — display: headlines uppercase, tight tracking, leading ~0.95
- **Inter** — body copy, ~18ch measure
- **IBM Plex Mono** 400/500 — labels, nav, captions, annotations

Utility classes: `.label-mono` (mono, uppercase, tracking-widest, xs, concrete), `.hairline` (`border-ink/10`), button wipe hover.

## Page Sections (home, in order)

1. **Header** — sticky, bone/95, hairline bottom border; wordmark + "EST. 2014"; mono uppercase nav; phone CTA ink rectangle; mobile = full-screen ink overlay menu. Orange scroll-progress line (restyle existing Progressbar.tsx) pinned under border.
2. **Hero** — min-h-[92svh], 12-col grid. Kicker label; stacked display headline "POURED ONCE. STANDING FOR DECADES." (last phrase orange); body; CTAs "EXPLORE PRODUCTS" (solid ink) + "GET A QUOTE" (outlined) → /products, /contact. Right: `/images/main.jpg` as technical plate — thin ink frame, corner registration marks, dimension annotation lines w/ mono labels ("2400 MM"), caption "FIG. 01 — PRECAST COMPOUND WALL PANEL". Stat strip below: 3 hairline cells — 1,500+ projects delivered (count-up) · Since 2014 · ISO certified facility.
3. **Client strip** — logo1–13.jpg single row, grayscale/60% opacity → color on hover. Label "TRUSTED BY".
4. **01 / Who We Are** — asymmetric editorial: sticky oversized index numeral + `/images/people.avif` plate w/ registration marks left; narrow-measure rewritten copy right; inline stat callouts; "MORE ABOUT US →".
5. **02 / Products Index List** — numbered full-width rows (anti-card): COMPOUND WALLS (`9.jpg`), STRUCTURAL ELEMENTS (`11.jpg`), DECORATIVE CONCRETE (`12.jpg`). Desktop: hover/focus-within row inverts ink↔bone + preview image crossfades in right panel. Mobile: tap accordion. Keyboard accessible, `aria-expanded`. Footer row "VIEW ALL PRODUCTS →".
6. **03 / Process** — Cast→Cure→Haul→Erect; 4 steps, hairline connectors, horizontal lg / stacked mobile. Copy tells speed-vs-brick story.
7. **04 / Selected Work** — featuredProjects constants: 1 large feature + 2 offset smaller; mono captions client·year·category; "ALL PROJECTS →".
8. **Plant band** — full-width `videoplayback.mp4`, muted loop playsInline autoPlay `preload="none"` poster main.jpg; overlay label "INSIDE THE PLANT — YELAHANKA, BENGALURU".
9. **CTA band** — ink bg, huge type "LET'S BUILD YOUR PERIMETER.", direct phone/email mono links, orange rect button "GET A QUOTE".
10. **Footer** — ink, hairline columns (wordmark+blurb / mono nav / contact address·phone·email·hours / socials), © 2026 legal row, giant clipped wordmark `text-[18vw] opacity-5`.

Page-wide vertical grid seams (`w-px bg-ink/5`) live in `app/page.tsx` wrapper shared by all sections.

Section header pattern (all numbered sections): hairline top border, mono label left "NN / NAME", right-aligned mono annotation.

## Motion Rules

Subtle scroll reveals ONLY: fade/rise once ≤500ms, count-ups, hover wipes. Everything behind `prefers-reduced-motion`. Reveal-once (no re-trigger). No parallax, no float/spin/pulse/bounce.

Primitives: `<Reveal delay={n} y={px}>` (whileInView once), `<CountUp to={1500} suffix="+" />`.

## Copy Standards

- Rewrite all home-page copy with sharper industrial storytelling.
- Age claim standardized: **"Since 2014"** (~decade+). Fixes current inconsistency (© 2014 vs "years of experience").
- Stats: 1,500+ projects delivered · Since 2014 · ISO certified.
- Contact (unchanged): +91 8884088878 · tirupatiprecast27@gmail.com · Sonnenahali Village, Bytha Post, Yelahanka to Rajankhunte Madhure Temple Road, Bangalore North, Karnataka-560089 · Mon–Sun 9AM–6PM.

## File Map

Rewrite: `globals.css`, `tailwind.config.ts`, `app/layout.tsx`, `components/Header.tsx`, `components/Footer.tsx`, `app/page.tsx`.
Create: `components/landing/{reveal,count-up,hero,client-strip,about,products-index,process,projects,plant-band,cta-band}.tsx`.
Delete: `CarouselDemo.tsx`, `Card.tsx`, `NumberTickerDemo.tsx`, old `Hero.tsx`, `About.tsx`, `OurProduct.tsx`; prune magicui usage.
Update: `constants/index.tsx` (copy rewrite).

## Accessibility & Performance

- Focus-visible rings everywhere; keyboard-operable products index; semantic headings h1→h2; alt text real descriptions.
- next/image throughout, sized to prevent CLS; video preload none + poster; fonts via next/font (self-hosted, no FOUT layout shift).

## Verification

No test framework in repo. Per-task gate: `npm run lint` && `npm run build` clean + dev-server visual pass. Final pass: all breakpoints + `prefers-reduced-motion` spot check.
