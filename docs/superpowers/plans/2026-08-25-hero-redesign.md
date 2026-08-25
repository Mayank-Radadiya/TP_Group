# Hero Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current hero section with a full-bleed cinematic video layout featuring an asymmetric editorial text composition, VinylBar left strip, film grain overlay, and staggered entrance animations.

**Architecture:** The `<video>` element fills the entire viewport behind a dark gradient vignette. Text is anchored bottom-left over the vignette. A narrow vertical orange strip (`VinylBar`) rides the far-left viewport edge, cycling through 3 engineering callouts. All animations are guarded by `useReducedMotion`.

**Tech Stack:** Next.js 15, React 18, Framer Motion 11, Tailwind CSS 3, TypeScript, IBM Plex Mono / Archivo / Inter (Google Fonts via next/font)

**Spec:** `docs/superpowers/specs/2026-08-25-hero-redesign-design.md`

## Global Constraints

- Zero border-radius on all elements — `rounded-none` or no rounding
- Brand tokens only: `bone` (#F2F0EB), `ink` (#191817), `concrete` (#8B8680), `safety` (#E84E0F)
- Font families: `font-display` (Archivo), `font-sans` (Inter), `font-mono` (IBM Plex Mono)
- All Framer Motion animations must check `useReducedMotion()` and render static final state when true
- No new dependencies — framer-motion already installed
- Tailwind only for styling; no CSS Modules, no styled-components
- `globals.css` changes limited to one new `@keyframes vinyl-fade` block

---

### Task 1: Add `@keyframes vinyl-fade` to globals.css

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Produces: CSS animation `vinyl-fade` usable as `animation: vinyl-fade 0.4s ease forwards`

- [ ] **Step 1: Add the keyframe block to globals.css**

Open `app/globals.css`. After the existing `@keyframes marquee { ... }` block (around line 104–108), add:

```css
@keyframes vinyl-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes vinyl-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}
```

- [ ] **Step 2: Verify the file builds cleanly**

```bash
bun run build
```
Expected: exit code 0, no CSS errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: add vinyl-fade keyframes for VinylBar callout transitions"
```

---

### Task 2: Rewrite hero.tsx — skeleton and video layer

**Files:**
- Modify: `components/landing/hero.tsx` (full replacement)

**Interfaces:**
- Produces: `<Hero />` default export that renders:
  - A `<section>` with `position: relative`, `min-h-svh`, `overflow: hidden`
  - A full-bleed `<video>` behind everything with `autoPlay muted loop playsInline`
  - A dark gradient vignette `<div>` over the video's lower 45%
  - A film grain overlay `<div>` (SVG filter technique)
  - An empty `<div className="relative z-10">` placeholder for text content (filled in Task 3)
  - The marquee strip at the bottom (kept from original)
- Consumes: nothing from other tasks

- [ ] **Step 1: Replace the entire file with the skeleton**

```tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

// ─── constants ────────────────────────────────────────────────────────────────

const SPECS = [
  "1500+ PROJECTS DELIVERED",
  "POURING SINCE 2014",
  "ISO CERTIFIED FACILITY",
  "M25 GRADE CONCRETE",
  "CAST IN STEEL MOULDS",
  "ERECTED IN DAYS, NOT MONTHS",
];

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── sub-components (filled in Task 3) ───────────────────────────────────────

// VinylBar and Hoist go here in Task 3

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Video gently zooms as you scroll the hero out of view
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* ── Film grain SVG filter (defined once, referenced by CSS) ── */}
      <svg
        aria-hidden
        className="absolute"
        style={{ width: 0, height: 0, position: "absolute" }}
      >
        <defs>
          <filter id="tp-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* ── Video (full-bleed, behind everything) ── */}
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ scale: reduced ? undefined : videoScale }}
      >
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          poster="/images/1.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Film grain overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          filter: "url(#tp-grain)",
          opacity: 0.045,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Dark gradient vignette (lower 45%) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[85%] bg-gradient-to-t from-ink/85 via-ink/40 to-transparent"
      />

      {/* ── Main content layer (VinylBar + text + CTAs) — Task 3 fills this ── */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* placeholder — replaced in Task 3 */}
        <div className="flex-1" />
      </div>

      {/* ── Marquee strip ── */}
      <div
        className="marquee relative z-10 overflow-hidden border-t border-bone/10 py-4"
        aria-label="Company specifications"
      >
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {SPECS.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-bone/60"
                >
                  <span className="mx-6 h-1.5 w-1.5 bg-safety" aria-hidden />
                  {spec}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Start dev server and verify video plays full-bleed**

```bash
bun run dev
```

Open `http://localhost:3000`. Expected:
- Video fills the entire viewport including behind the header
- Film grain barely perceptible
- Gradient vignette darkens lower portion
- Marquee runs at bottom over the dark video
- No layout shift, no console errors

- [ ] **Step 3: Commit**

```bash
git add components/landing/hero.tsx
git commit -m "feat(hero): full-bleed video skeleton with grain + vignette"
```

---

### Task 3: Add VinylBar, text content, and all entrance animations

**Files:**
- Modify: `components/landing/hero.tsx`

**Interfaces:**
- Consumes: `EASE`, `reduced` (from Task 2 scaffold)
- Produces: Complete visual hero — VinylBar, animated headline, orange rule, body text, CTAs

- [ ] **Step 1: Replace the entire file with the complete implementation**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

// ─── constants ────────────────────────────────────────────────────────────────

const SPECS = [
  "1500+ PROJECTS DELIVERED",
  "POURING SINCE 2014",
  "ISO CERTIFIED FACILITY",
  "M25 GRADE CONCRETE",
  "CAST IN STEEL MOULDS",
  "ERECTED IN DAYS, NOT MONTHS",
];

const VINYL_CALLOUTS = [
  "EST. 2014 — BENGALURU",
  "ISO CERTIFIED FACILITY",
  "M25 GRADE CONCRETE",
];

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Hoist ────────────────────────────────────────────────────────────────────
// Masked overflow reveal — slides a line up from below its container clip.

function Hoist({
  delay,
  reduced,
  children,
}: {
  delay: number;
  reduced: boolean;
  children: React.ReactNode;
}) {
  if (reduced) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ─── JointTicks ───────────────────────────────────────────────────────────────
// Small tick marks at the baseline of each headline line — engineering detail.

function JointTicks() {
  return (
    <>
      <span
        aria-hidden
        className="absolute -bottom-[5px] left-0 h-2.5 w-px bg-safety/60"
      />
      <span
        aria-hidden
        className="absolute -bottom-[5px] right-0 h-2.5 w-px bg-safety/60"
      />
    </>
  );
}

// ─── VinylBar ─────────────────────────────────────────────────────────────────
// Narrow vertical strip on the far-left viewport edge.
// An orange line draws down on load. Rotated mono text cycles every 4 seconds.

function VinylBar({ reduced }: { reduced: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) return;

    const cycle = () => {
      // fade out
      setVisible(false);
      setTimeout(() => {
        setActiveIdx((i) => (i + 1) % VINYL_CALLOUTS.length);
        // fade in
        setVisible(true);
      }, 400);
    };

    const id = setInterval(cycle, 4000);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div
      aria-hidden
      className="absolute left-0 top-0 hidden h-full w-14 flex-col items-center lg:flex"
      style={{ zIndex: 20 }}
    >
      {/* Orange vertical line */}
      <motion.span
        className="absolute left-[27px] top-0 w-[2px] bg-safety origin-top"
        style={{ height: "100%" }}
        initial={reduced ? false : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
      />

      {/* Small safety square at midpoint */}
      <span
        className="absolute left-[24px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 bg-safety"
      />

      {/* Rotating callout text */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        <span
          className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/50 transition-opacity duration-400"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {VINYL_CALLOUTS[activeIdx]}
        </span>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* ── Film grain SVG filter ── */}
      <svg
        aria-hidden
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="tp-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* ── Video ── */}
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ scale: reduced ? undefined : videoScale }}
      >
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          poster="/images/1.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Film grain overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          filter: "url(#tp-grain)",
          opacity: 0.045,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Dark gradient vignette ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[85%] bg-gradient-to-t from-ink/85 via-ink/40 to-transparent"
      />

      {/* ── VinylBar — left edge strip ── */}
      <VinylBar reduced={reduced} />

      {/* ── Main content layer ── */}
      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:pl-24">
          {/* Eyebrow */}
          <motion.p
            className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tirupati Precast Concrete Works
          </motion.p>

          {/* Headline */}
          <h1
            className="font-display font-black uppercase leading-[0.88] tracking-tight text-bone"
            style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
          >
            <span className="relative block divide-y divide-bone/10">
              <span className="relative block py-1">
                <Hoist delay={0.5} reduced={reduced}>
                  Poured
                </Hoist>
                <JointTicks />
              </span>

              {/* Orange horizontal rule — between "Poured" and "Once." */}
              <span className="relative block py-1">
                <Hoist delay={0.62} reduced={reduced}>
                  Once
                  <span className="text-safety">.</span>
                </Hoist>
                <JointTicks />
              </span>
            </span>

            {/* Orange separator rule */}
            <motion.span
              aria-hidden
              className="my-3 block h-[2px] w-[55%] bg-safety origin-left"
              initial={reduced ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            />

            <span className="relative block divide-y divide-bone/10">
              <span className="relative block py-1">
                <Hoist delay={0.74} reduced={reduced}>
                  <span className="type-concrete">Standing</span>
                </Hoist>
                <JointTicks />
              </span>
              <span className="relative block py-1">
                <Hoist delay={0.86} reduced={reduced}>
                  For Decades
                  <span className="text-safety">.</span>
                </Hoist>
                <JointTicks />
              </span>
            </span>
          </h1>

          {/* Body + CTAs */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              className="max-w-[42ch] font-sans text-base leading-relaxed text-bone/65 md:text-lg"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              Factory-cast panels arrive on site finished and ready to erect —
              walls go up in days, not months.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              <Link
                href="/products"
                className="btn-wipe bg-bone px-8 py-4 font-mono text-xs uppercase tracking-widest text-ink"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border border-bone/50 px-8 py-4 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Marquee strip ── */}
      <div
        className="marquee relative z-10 overflow-hidden border-t border-bone/10 py-4"
        aria-label="Company specifications"
      >
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {SPECS.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-bone/60"
                >
                  <span className="mx-6 h-1.5 w-1.5 bg-safety" aria-hidden />
                  {spec}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Start dev server and verify the full composition**

```bash
bun run dev
```

Open `http://localhost:3000` and check each item:
- Video plays full-bleed, edge-to-edge including under the header
- Film grain is barely perceptible (tactile, not noisy)
- VinylBar: orange vertical line draws down, callout text rotates every 4s with fade
- Eyebrow label fades in around 0.4s
- Headline lines hoist up in sequence (Poured → Once. → rule → Standing → For Decades.)
- Orange rule scales in from left between "ONCE." and "STANDING"
- "Standing" shows concrete texture image clip (`.type-concrete`)
- Body text and CTA buttons fade+slide in last
- CTA primary: bone background, ink text
- CTA secondary: bone border, bone text, inverts on hover
- Scroll: video very gently zooms as you scroll past
- Marquee shows bone text over dark bottom strip
- Mobile 375px: poster shows, headline fills viewport width, CTAs stack

- [ ] **Step 3: Check `prefers-reduced-motion`**

In Chrome DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`. Verify all animations are absent and final state is shown immediately.

- [ ] **Step 4: Commit**

```bash
git add components/landing/hero.tsx
git commit -m "feat(hero): complete redesign — video-first, VinylBar, editorial typography"
```

---

### Task 4: Production build verification and cleanup

**Files:**
- Read: `components/landing/hero.tsx`, `app/globals.css`

**Interfaces:**
- Consumes: everything from Tasks 1–3
- Produces: zero-error production build; committed, clean working tree

- [ ] **Step 1: Run production build**

```bash
bun run build
```

Expected: exit code 0. Zero TypeScript errors, zero ESLint errors.

If there are TypeScript errors:
- `useTransform` return type: wrap `videoScale` usage in `reduced ? undefined : videoScale` if needed
- `mixBlendMode` type: cast as `React.CSSProperties["mixBlendMode"]` if TS complains

- [ ] **Step 2: Spot-check bundle for video asset**

The video is served from `/public/videoplayback.mp4` as a static asset — it should NOT appear in the build output as a chunk. Confirm the build log shows no unusual warnings about large assets in `/_next/`.

- [ ] **Step 3: Final visual review on dev server**

```bash
bun run dev
```

Walk through the full visual checklist one last time:
- [ ] Video plays, full-bleed
- [ ] Film grain present (subtle)
- [ ] VinylBar: orange line + rotating callout
- [ ] Staggered entrance animation complete
- [ ] Orange rule between headline blocks
- [ ] "Standing" texture clip renders
- [ ] CTAs correct colours (bone/ink inverted)
- [ ] Scroll parallax on video works
- [ ] Mobile layout stacks correctly
- [ ] Marquee runs

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore(hero): production build verified — hero redesign complete"
```
