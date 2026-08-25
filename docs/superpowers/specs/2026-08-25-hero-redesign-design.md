# Hero Redesign — "The Pour" + "The Panel" (Option B + C)

**Project:** Tirupati Precast Concrete Works — Landing Page  
**Date:** 2026-08-25  
**Scope:** `components/landing/hero.tsx` only — no other sections touched.

---

## Background

The existing hero is technically competent — good typographic rhythm, engineering markers, and parallax — but the layout is predictable (left type / right image) and the 18MB video at `/public/videoplayback.mp4` is entirely unused. The redesign unlocks the full visual potential of the brand's strongest assets: real footage and an ownable engineering-precision design language.

---

## Design Direction

**"The Pour"** — a cinematic, video-first hero with asymmetric editorial overlay.

The video fills the entire viewport edge-to-edge (including under the header). Over it, text is anchored to the lower-left. A narrow vertical strip on the far left carries rotating engineering metadata. All surfaces are geometric, zero border-radius.

---

## Visual Composition

### Desktop Layout

```
┌────────────────────────────────────────────────────────────────┐
│  [VIDEO FULL BLEED — muted, autoplay, loop, object-cover]     │
│  [subtle CSS film-grain overlay via SVG feTurbulence filter]  │
│                                                               │
│ ┊ EST. 2014 ← thin orange vertical left bar, rotated text     │
│ ┊ BENGALURU    cycles 3 callouts every 4s via CSS fade        │
│ ┊ M25 GRADE                                                   │
│                                                               │
│                                                               │
│                                                               │
│  POURED              ← Archivo Black, uppercase               │
│  ONCE.                 clamp(4rem, 11vw, 10rem), leading 0.88 │
│  ──────────────────    safety orange rule, scaleX animated    │
│  STANDING              .type-concrete texture clip            │
│  FOR DECADES.                                                 │
│                                                               │
│  Factory-cast panels…  [Explore Products →]  [Get a Quote →] │
│                                                               │
│  ████ gradient vignette — ink/80 → transparent, lower 45%    │
│                                                               │
│▬▬▬▬ 1500+ PROJECTS DELIVERED ◉ POURING SINCE 2014 ◉ ... ▬▬▬│
└────────────────────────────────────────────────────────────────┘
```

### Mobile Layout

- `<video>` falls back to `poster="/images/1.jpg"` (autoplay unreliable on mobile)
- VinylBar hidden (`hidden lg:flex`)
- Headline: `clamp(3rem, 14vw, 10rem)` — fills mobile width
- CTAs stack vertically

---

## Component Architecture

**File:** `components/landing/hero.tsx` — full replacement, single file.

### Retained
- `Hoist` masked-overflow line reveal animation
- `JointTicks` tick marks at line joins
- `SPECS` array and marquee strip
- `EASE` spring constant `[0.16, 1, 0.3, 1]`
- `useReducedMotion` guard
- `.type-concrete` texture clip on "Standing"
- `.btn-wipe` on primary CTA

### Removed
- `RULER_MARKS` ruler column
- `CORNER_MARKS` registration frame on figure
- `<figure>` / `<figcaption>` image columns (both desktop and mobile variants)
- Old `useScroll` / `useTransform` image parallax

### Added
- `<video autoPlay muted loop playsInline poster="/images/1.jpg">` — full-bleed, `aria-hidden`
- `VinylBar` — left edge vertical strip with rotating callouts
- Film grain — SVG `feTurbulence` filter, opacity 0.04, `mix-blend-mode: overlay`
- Dark vignette — `bg-gradient-to-t from-ink/80 via-ink/30 to-transparent`, lower 45%
- Scroll parallax — `useScroll` + `useTransform` on `<video>`: `scale` 1.0→1.06
- Horizontal orange rule between "ONCE." and "STANDING" — `motion.span`, scaleX 0→1
- Text layer: `position: absolute`, bottom-anchored, left-padded

---

## Motion Table

All animations respect `useReducedMotion`. When reduced, render final state immediately.

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Video | opacity 0→1 | 1.2s ease-out | 0s |
| Orange left bar | scaleY 0→1 (origin top) | 0.9s ease-in-out | 0.1s |
| Eyebrow label | opacity 0→1 | 0.6s | 0.4s |
| "Poured" | Hoist | 0.9s spring | 0.5s |
| Orange rule | scaleX 0→1 (origin left) | 0.6s ease-out | 0.65s |
| "Once." | Hoist | 0.9s spring | 0.62s |
| "Standing" | Hoist | 0.9s spring | 0.74s |
| "For Decades." | Hoist | 0.9s spring | 0.86s |
| Body text | opacity+y 16px→0 | 0.6s ease-out | 1.0s |
| CTAs | opacity+y 12px→0 | 0.6s ease-out | 1.1s |
| VinylBar callouts | cross-dissolve fade | 0.4s | every 4s |
| Video on scroll | scale 1.0→1.06 | continuous | — |

---

## Typography

- **Headline:** Archivo Black, uppercase, `clamp(4rem, 11vw, 10rem)`, leading `0.88`, tracking `-0.02em`, `text-bone`
- **"Standing":** `.type-concrete` (texture clip, `/images/5.jpg`) — material grounding
- **Orange rule:** `h-[2px] w-[55%] bg-safety` between "ONCE." and "STANDING"
- **Eyebrow:** IBM Plex Mono, 10px, `tracking-[0.2em]`, uppercase, `text-bone/50`
- **Body:** Inter, 16-18px, `text-bone/70`, `max-w-[42ch]`

---

## Colors on Dark Background

| Token | Normal | On video |
|---|---|---|
| Headline | `text-ink` | `text-bone` |
| Body | `text-ink/70` | `text-bone/70` |
| Safety orange | `#E84E0F` | unchanged |
| CTA primary | `bg-ink text-bone` | `bg-bone text-ink` |
| CTA secondary | `border-ink text-ink` | `border-bone/50 text-bone` |

---

## VinylBar

A `56px`-wide strip, `position: absolute left-0`, spanning full height.

1. `2px` safety orange vertical line, full height, `scaleY` animated on load
2. Rotated metadata text: `writing-mode: vertical-rl; rotate(180deg)`
3. 3 callouts cycling: `EST. 2014 — BENGALURU` / `ISO CERTIFIED` / `M25 GRADE CONCRETE`
4. Small `6×6px` safety orange square at vertical midpoint

---

## Film Grain

Inline SVG filter (`feTurbulence` + `feColorMatrix saturate=0`), applied via CSS `filter: url(#grain)` to a `position: absolute inset-0` div. Opacity: `0.04`. Mix blend mode: `overlay`. `pointer-events: none`. Tasteful — texture without distraction.

---

## Files Changed

| File | Change |
|---|---|
| `components/landing/hero.tsx` | Full replacement |
| `app/globals.css` | Add `@keyframes vinyl-fade` for VinylBar cross-dissolve |

---

## Verification Plan

```bash
bun run build   # zero errors, zero type errors
bun run dev     # visual check at localhost:3000
```

Visual checklist:
- [ ] Video plays immediately, full-bleed, no layout shift
- [ ] Film grain barely perceptible (texture, not noise)
- [ ] Entrance animation sequence plays (staggered hoists)
- [ ] Orange left bar draws down on load
- [ ] "Standing" shows concrete texture clip
- [ ] Orange rule scales in between lines
- [ ] Marquee runs at bottom
- [ ] Scroll: video gently zooms
- [ ] CTA colours correct (bone/ink inverted)
- [ ] Mobile (375px): poster image, headline fills width, stacks vertically
- [ ] `prefers-reduced-motion`: static, no animation
