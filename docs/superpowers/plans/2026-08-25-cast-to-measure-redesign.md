# Tirupati Precast — "Cast to Measure" Full Redesign

Approved design (chat, 2026-08-25). Source of truth: `brand/brand.md`.

## Concept
Engineering drawing sheet as visual metaphor. Modular grid with hairline column
rules, numbered sections (`01 / SYSTEM`), CAD-style dimension lines carrying real
numbers (75mm, M30, A=3175), mono spec chips. Light concrete paper base, TP red
single accent. Zero border-radius.

## Tokens
- `paper #F2F0EB`, `ink #1A1917`, `concrete #8B8680`, `tp-red ~#D7282F`
- Archivo variable + `wdth` axis (condensed 62% display / expanded micro-labels),
  Inter body, Plex Mono specs. Grain overlay on dark bands only.

## Motion
Lenis smooth scroll (disabled on reduced-motion) + framer-motion: kinetic clip-mask
headline reveals, parallax in masks, pinned-diagram product pages, count-ups,
panel-slat image reveals (clip-path inset stagger), template.tsx fade/rise page
transitions, red underline sweeps / button wipes.

## IA
- `/` hero → clients → intro+stats → products index rows → process → award band
  (dark) → video band → branch network → CTA/footer
- `/about` story, vision/mission verbatim, why-us 8-grid, tech (JIS/pre-stressed)
- `/products` index; `/products/compound-wall|u-drain|retaining-wall` detail:
  pinned SVG diagram + spec tables from brand.md dims, variant tables, finishes,
  performance band
- `/projects` sector filter grid + TATA Silver award feature (Shakti Sthala 52 MWp)
- `/contact` 3 phones, email, HO address, map, form

## Content truth
All fabricated content purged ("Techwave", "since 2014", "Neon Nights"). Copy fills
gaps around verified facts only. Typographic SVG logo lockup (no vector exists).
Images: existing `/public/images/*.jpg` now; client replaces later.

## Verification
bun run build, lint, dev walkthrough, reduced-motion pass.
