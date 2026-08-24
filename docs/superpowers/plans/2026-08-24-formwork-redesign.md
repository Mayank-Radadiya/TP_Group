# "The Formwork" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace generic purple-gradient landing with brutalist-industrial editorial design ("The Formwork") across home page + shared shell.

**Architecture:** Design-token rewrite in `globals.css`/`tailwind.config.ts`, new `components/landing/*` section components composed in `app/page.tsx`, rebuilt `Header`/`Footer`. Framer-motion reused for reveals/count-ups behind `prefers-reduced-motion`.

**Tech Stack:** Next.js 15 App Router · Tailwind 3.4 · framer-motion 11 (installed) · next/font Google fonts

**Spec:** `docs/superpowers/specs/2026-08-24-formwork-redesign-design.md`

## Global Constraints

- Colors only: bone `#F2F0EB`, ink `#191817`, concrete `#8B8680`, orange `#E84E0F` (+ alpha variants). No gradients.
- Radius 0 everywhere (`--radius: 0rem`). No glass/glow/floating animations.
- Fonts via next/font only: Archivo (display), Inter (body), IBM Plex Mono (labels).
- Company age claim: "Since 2014". Stats: 1,500+ projects, ISO certified.
- All motion gated on `prefers-reduced-motion`; reveal-once only, ≤500ms.
- Verify every task: `npm run lint` && `npm run build` clean.
- Commit after each task.

---

### Task 1: Design tokens

**Files:**
- Modify: `app/globals.css`, `tailwind.config.ts`

**Interfaces:**
- Produces: utility classes `.label-mono`, `.hairline`; Tailwind colors `bone/ink/concrete/safety`; fonts `font-display/font-sans/font-mono` via CSS vars `--font-archivo/--font-inter/--font-plex-mono`; shadcn vars re-pointed (primary→ink, background→bone, ring→orange, radius 0).

- [ ] **Step 1: Purge old utilities from globals.css**

Remove every purple/gradient/glass/float/spin/pulse rule: `.gradient-bg-1`, `.gradient-bg-2`, `.gradient-text`, `.glass-effect`, floating circle keyframes/animations.

- [ ] **Step 2: Re-point shadcn tokens + add brand tokens**

Keep HSL var skeleton (ui/button etc. depend on it). Set:

```css
:root {
  /* brand */
  --bone: #F2F0EB;
  --ink: #191817;
  --concrete: #8B8680;
  --orange: #E84E0F;
  /* shadcn skeleton re-pointed to Formwork palette (HSL triplets) */
  --background: 45 12% 94%;      /* bone */
  --foreground: 20 6% 9%;        /* ink */
  --primary: 20 6% 9%;           /* ink */
  --primary-foreground: 45 12% 94%;
  --secondary: 30 4% 53%;        /* concrete */
  --secondary-foreground: 45 12% 94%;
  --muted: 45 8% 88%;
  --muted-foreground: 30 4% 40%;
  --accent: 21 100% 48%;         /* safety orange */
  --accent-foreground: 45 12% 94%;
  --destructive: 0 72% 51%;
  --border: 20 6% 9%;            /* hairlines use /10 alpha in usage */
  --input: 20 6% 9%;
  --ring: 21 100% 48%;           /* orange */
  --radius: 0rem;
}
```

- [ ] **Step 3: tailwind.config.ts**

Extend colors `{ bone: "#F2F0EB", ink: "#191817", concrete: "#8B8680", safety: { DEFAULT: "#E84E0F" } }`, fontFamily `{ display: ["var(--font-archivo)", "sans-serif"], sans: ["var(--font-inter)", "sans-serif"], mono: ["var(--font-plex-mono)", "monospace"] }`. Delete `float`, `spin-slow`, `line-shadow` animations/keyframes. Keep tailwindcss-animate plugin.

- [ ] **Step 4: Component layer utilities**

```css
@layer components {
  .label-mono {
    @apply font-mono text-xs uppercase tracking-[0.2em] text-concrete;
  }
  .hairline {
    @apply border-ink/10;
  }
}
```

Button wipe hover utility (for CTAs, used by later tasks):

```css
.btn-wipe {
  @apply relative overflow-hidden;
}
.btn-wipe::after {
  content: "";
  @apply absolute inset-0 -translate-x-full bg-safety transition-transform duration-300;
  z-index: -1;
}
.btn-wipe:hover::after,
.btn-wipe:focus-visible::after {
  @apply translate-x-0;
}
```

- [ ] **Step 5: Verify**

Run: `npm run lint && npm run build`
Expected: clean exit.

- [ ] **Step 6: Commit**

```bash
git add app/globals.css tailwind.config.ts
git commit -m "feat: formwork design tokens"
```

### Task 2: Fonts + shell swap in layout

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: CSS vars `--font-archivo`, `--font-inter`, `--font-plex-mono` names fixed here; Tasks 3–9 rely on `font-display`, `font-mono` utilities resolving through them.
- Produces: `<body className="bg-bone text-ink font-sans antialiased selection:bg-safety selection:text-bone">`.

- [ ] **Step 1: Replace Geist fonts with Formwork stack**

```tsx
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["800", "900"],
  subsets: ["latin"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});
```

Apply all three `variable` classes on `<html>` alongside existing className.

- [ ] **Step 2: Body classes + metadata**

Body: `bg-bone text-ink font-sans antialiased selection:bg-safety selection:text-bone`. Remove purple gradient body bg.

Metadata:
```tsx
export const metadata: Metadata = {
  title: "Tirupati Precast — Precast Concrete Works, Bengaluru",
  description:
    "Precast compound walls, structural elements and decorative concrete, manufactured in our Yelahanka plant and erected fast. Since 2014.",
};
```

Keep Toaster + Analytics providers intact.

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: clean exit.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: formwork fonts and shell"
```

### Task 3: Motion primitives

**Files:**
- Create: `components/landing/reveal.tsx`
- Create: `components/landing/count-up.tsx`

**Interfaces:**
- Produces: `<Reveal delay?: number; y?: number; className?: string; children: React.ReactNode>` — wraps children in motion.div, initial `{ opacity: 0, y: y ?? 16 }`, whileInView → visible, viewport once, transition 0.5s ease-out with optional delay. Uses `useReducedMotion()`; when true renders plain div.
- Produces: `<CountUp to: number; suffix?: string; duration?: number>` — mono tabular numerals, animates 0→`to` when in view once via framer-motion `animate()`; reduced-motion renders static formatted value.

- [ ] **Step 1: Implement Reveal**

```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  delay = 0,
  y = 16,
  className,
  children,
}: {
  delay?: number;
  y?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Implement CountUp**

```tsx
"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CountUp({
  to,
  suffix = "",
  duration = 1.2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) return setVal(to);
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: clean exit (components compile; visual use comes in Tasks 5–6).

- [ ] **Step 4: Commit**

```bash
git add components/landing/reveal.tsx components/landing/count-up.tsx
git commit -m "feat: reveal and count-up motion primitives"
```

### Task 4: Header rebuild

**Files:**
- Rewrite: `components/Header.tsx`
- Modify: `components/Progressbar.tsx`

**Interfaces:**
- Produces: sticky site Header rendered in layout above page content; nav links mono uppercase: Products `/products`, Projects `/projects`, Gallery `/gallery`, About `/about`, Contact `/contact`.
- Consumes: fonts/colors/tokens from Tasks 1–2.

- [ ] **Step 1: Restyle Progressbar as orange scroll line**

framer-motion `useScroll().scrollYProgress` → motion.div `fixed top-0 left-0 right-0 h-0.5 bg-safety origin-left z-[60]` with `style={{ scaleX }}`. Keep component name/default export so layout import unchanged.

- [ ] **Step 2: Rebuild Header**

Sticky top-0 z-50, `bg-bone/95 border-b hairline`. Left: wordmark "TIRUPATI PRECAST" font-display 800 small + `.label-mono` sub "EST. 2014 — BENGALURU". Desktop right: mono uppercase nav links + solid ink rectangle button `+91 88840 88778` (tel link). Mobile: hamburger (lucide Menu/X) toggling full-screen `fixed inset-0 bg-ink text-bone` overlay with large display links + contact info. Active route link gets `text-safety`. Focus-visible rings on all interactive elements.

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: clean exit.

- [ ] **Step 4: Commit**

```bash
git add components/Header.tsx components/Progressbar.tsx
git commit -m "feat: formwork header with scroll progress line"
```

### Task 5: Hero

**Files:**
- Create: `components/landing/hero.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `Reveal`, `CountUp` signatures from Task 3.
- Produces: default export `Hero` section replacing old Hero in page composition.

- [ ] **Step 1: Build hero section**

Server component wrapping client primitives. Structure:

- Section `min-h-[92svh] relative flex flex-col`, container `mx-auto max-w-7xl px-6`.
- Grid `lg:grid-cols-12 gap-10 pt-24 lg:pt-32 pb-16 items-end`.
- Left `lg:col-span-7`: kicker `.label-mono` "TIRUPATI PRECAST CONCRETE WORKS — BENGALURU"; h1 `font-display font-black uppercase leading-[0.95] tracking-tight` size `clamp(3rem, 8vw, 7rem)` via arbitrary class `text-[clamp(3rem,8vw,7rem)]`, three lines: "POURED ONCE." / "STANDING" / "FOR DECADES." with "FOR DECADES." wrapped `text-safety`; body paragraph Inter max-w-prose ~18ch measure about precast speed vs brick; CTA row: solid ink rect link "EXPLORE PRODUCTS" → /products (`btn-wipe`), outlined "GET A QUOTE" → /contact.
- Right `lg:col-span-5`: technical plate — `relative border border-ink p-2` frame around next/image `/images/main.jpg` (fill within aspect-[4/5] wrapper, sizes appropriate); corner registration marks as 4 absolute L-shaped divs (`w-3 h-3 border-t-2 border-l-2 border-ink` variants rotated per corner, offset outside frame `-top-1.5 -left-1.5` etc.); one horizontal dimension annotation line above image: absolute `border-t border-dashed border-concrete` w/ mono label "2400 MM"; caption row below plate: `.label-mono` "FIG. 01 — PRECAST COMPOUND WALL PANEL".
- Stat strip below grid: `grid grid-cols-1 sm:grid-cols-3 border-t hairline divide-y sm:divide-y-0 sm:divide-x hairline`; each cell py-6: big display numeral + `.label-mono` caption — `<CountUp to={1500} suffix="+" /> / PROJECTS DELIVERED`, "2014 / POURING SINCE", "ISO / CERTIFIED FACILITY".
- Stagger Reveals: kicker delay 0, headline .05, body .15, CTAs .25, plate .2.

- [ ] **Step 2: Wire into page.tsx**

Replace old `Hero` import/component with `landing/hero`. Add page-wide seam wrapper: `<div className="relative mx-auto max-w-7xl">` containing two absolute vertical lines `absolute top-0 bottom-0 w-px bg-ink/5 left-[8.333%] hidden md:block` and same at `left-[91.667%]`, sections inside. Old Hero file deletion happens in Task 9 cleanup.

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Visual: `npm run dev`, check 375px / 768px / 1440px widths — headline scales, plate annotations don't overflow, stat strip stacks.

- [ ] **Step 4: Commit**

```bash
git add components/landing/hero.tsx app/page.tsx
git commit -m "feat: formwork hero"
```

### Task 6: Client strip + Who We Are

**Files:**
- Create: `components/landing/client-strip.tsx`
- Create: `components/landing/about.tsx`
- Modify: `constants/index.tsx`

**Interfaces:**
- Consumes: `Reveal`, `CountUp` from Task 3; tokens/fonts from Tasks 1–2.
- Produces: `ClientStrip` and `About` sections; rewritten about copy in constants.

- [ ] **Step 1: ClientStrip**

Section py-16 border-t hairline. `.label-mono` heading "TRUSTED BY". Flex wrap gap row of 13 logos `/images/logo1.jpg`…`logo13.jpg`: `h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition` each in next/image with width/height set (approx 120×40 display). Wrap each in Reveal? No — single Reveal on whole row keeps DOM light.

- [ ] **Step 2: About copy rewrite in constants/index.tsx**

Add exported `ABOUT_COPY`: two short paragraphs — precision manufacturing story (plant-cast panels, quality controlled at pour not on site), decade track record ("Since 2014"), Bengaluru plant capability. Tone: dry, factual, confident. Also fix any other age claims found in constants ("Since 2014" standard).

- [ ] **Step 3: About section "01 / WHO WE ARE"**

Section pattern header: `border-t hairline` top, flex justify-between py-4: `.label-mono` "01 / WHO WE ARE" left, right annotation ".label-mono" "PRECISION, POURED". Grid `lg:grid-cols-12 gap-10 py-16`:
- Left `lg:col-span-5`: photo plate `/images/people.avif` (aspect-[4/3], registration marks same technique as hero plate), `.label-mono` caption "THE CREW — YELAHANKA PLANT". Oversized index numeral "01" behind/below plate: `font-display font-black text-[10rem] leading-none text-transparent` with `-webkit-text-stroke: 1px var(--concrete)` inline style, sticky top-32 on lg.
- Right `lg:col-span-7`: paragraphs from ABOUT_COPY (max-w-[52ch]), inline stat callout row (CountUp 1500+ · 2014), outlined link "MORE ABOUT US →" → /about.

- [ ] **Step 4: Verify**

Run: `npm run lint && npm run build`
Visual dev pass both sections desktop+mobile.

- [ ] **Step 5: Commit**

```bash
git add components/landing/client-strip.tsx components/landing/about.tsx constants/index.tsx
git commit -m "feat: client strip and who-we-are editorial section"
```

### Task 7: Products index list

**Files:**
- Create: `components/landing/products-index.tsx`

**Interfaces:**
- Consumes: Reveal from Task 3.
- Produces: `ProductsIndex` client component; data local: `[{ id: "01", title: "COMPOUND WALLS", img: "/images/9.jpg", desc }, { id: "02", title: "STRUCTURAL ELEMENTS", img: "/images/11.jpg", desc }, { id: "03", title: "DECORATIVE CONCRETE", img: "/images/12.jpg", desc }]` with rewritten one-line descriptions.

- [ ] **Step 1: Build interactive index rows**

`"use client"`. Section header "02 / WHAT WE MAKE" + annotation "INDEX OF PRODUCTS".

Desktop (lg+): rows `group border-t hairline last:border-b`; each row a focusable element (button role, aria-expanded for mobile accordion state shared): grid `grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-8` — mono number, display title `text-4xl lg:text-6xl font-display font-extrabold uppercase`, ArrowUpRight icon. Hover/focus-within: row `bg-ink text-bone` transition-colors duration-300, arrow `text-safety`. Right preview panel (hidden lg:block, sticky within section): crossfading images keyed to active row index (opacity transitions, next/image fill aspect-[4/3]).

Mobile (<lg): tap toggles accordion body under row (`aria-expanded`, chevron rotate): image + desc revealed, `grid-rows` animation or simple conditional render with height auto.

Footer row: full-width link "VIEW ALL PRODUCTS →" → /products, mono, hover text-safety.

Keyboard: rows are real buttons; Enter/Space toggles on mobile breakpoint behavior harmless on desktop (also sets active preview).

- [ ] **Step 2: Verify**

Run: `npm run lint && npm run build`
Visual: hover invert + preview crossfade on desktop; tap accordion mobile; Tab reaches rows, Enter activates.

- [ ] **Step 3: Commit**

```bash
git add components/landing/products-index.tsx
git commit -m "feat: products index list with hover inversion"
```

### Task 8: Process + Projects

**Files:**
- Create: `components/landing/process.tsx`
- Create: `components/landing/projects.tsx`

**Interfaces:**
- Consumes: Reveal from Task 3; `featuredProjects` from `constants/index.tsx` (fields: title, category, year, client, description, image).
- Produces: `Process` and `Projects` sections.

- [ ] **Step 1: Process "03 / HOW WE WORK"**

Steps data local: `[{ n: "01", verb: "CAST", line: "Panels poured and cured in controlled plant conditions." }, { n: "02", verb: "CURE", line: "Strength develops off-site — no weather delays, no site curing time." }, { n: "03", verb: "HAUL", line: "Finished panels trucked to your plot on schedule." }, { n: "04", verb: "ERECT", line: "Crane-set and bolted in days, not months of masonry." }]`.

Layout: `lg:grid-cols-4` with connectors — between steps, absolute `hidden lg:block border-t hairline w-full top-8 left-full` style connector lines; each step: mono number `.label-mono`, display verb `text-3xl font-display font-extrabold uppercase`, one-line desc Inter text-sm text-concrete. Stacked mobile with left hairline spine.

- [ ] **Step 2: Projects "04 / SELECTED WORK"**

From `featuredProjects`: feature project (first) large — image plate aspect-[16/10], next/image fill, hover `scale-[1.02]` transition max; caption row mono: `${client} · ${year} · ${category}` + title display xl. Below-right offset: remaining two projects in `lg:grid-cols-2 lg:ml-[25%]` (asymmetric push), smaller plates aspect-[4/3]. Each wrapped in Reveal. Footer link "ALL PROJECTS →" → /projects.

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Visual dev pass both sections.

- [ ] **Step 4: Commit**

```bash
git add components/landing/process.tsx components/landing/projects.tsx
git commit -m "feat: process steps and selected work sections"
```

### Task 9: Plant band + CTA + Footer + page assembly + cleanup

**Files:**
- Create: `components/landing/plant-band.tsx`
- Create: `components/landing/cta-band.tsx`
- Rewrite: `components/Footer.tsx`
- Modify: `app/page.tsx`
- Delete: `components/CarouselDemo.tsx`, `components/Card.tsx`, `components/NumberTickerDemo.tsx`, old `components/Hero.tsx`, `components/About.tsx`, `components/OurProduct.tsx`

**Interfaces:**
- Consumes: everything prior. Contact facts: phone +91 8884088878, email tirupatiprecast27@gmail.com, address Sonnenahali Village, Bytha Post, Yelahanka to Rajankhunte Madhure Temple Road, Bangalore North, Karnataka-560089, hours Mon–Sun 9AM–6PM.

- [ ] **Step 1: PlantBand**

Full-width band `relative h-[70vh] overflow-hidden`: `<video src="/videoplayback.mp4" autoPlay muted loop playsInline preload="none" poster="/images/main.jpg" className="h-full w-full object-cover">`. Ink overlay gradient-free: absolute inset-0 bg-ink/40. Bottom-left overlay `.label-mono text-bone` "INSIDE THE PLANT — YELAHANKA, BENGALURU".

- [ ] **Step 2: CTABand**

Ink band py-24: huge display headline "LET'S BUILD YOUR PERIMETER." (bone, "PERIMETER." orange), body line, direct mono links tel:+918884088878 and mailto:tirupatiprecast27@gmail.com, orange solid rect button "GET A QUOTE" → /contact.

- [ ] **Step 3: Footer rewrite**

`bg-ink text-bone border-t hairline` (border-bone/10 variant). Grid 4 cols lg: wordmark + blurb / mono nav (navItems) / contact block (address, phone, email, hours) / socials (existing contactLinks URLs). Bottom bar: © 2026 Tirupati Precast Concrete Works + "Site by The Formwork" mono microcopy. Giant clipped wordmark at base: `font-display font-black uppercase text-[18vw] leading-none opacity-5 whitespace-nowrap overflow-hidden select-none` "TIRUPATI PRECAST".

- [ ] **Step 4: Assemble page.tsx**

Compose: Hero → ClientStrip → About → ProductsIndex → Process → Projects → PlantBand → CTABand inside seam wrapper from Task 5. Remove ALL imports of deleted components.

- [ ] **Step 5: Delete dead files**

`rm components/CarouselDemo.tsx components/Card.tsx components/NumberTickerDemo.tsx components/Hero.tsx components/About.tsx components/OurProduct.tsx`. Grep repo for imports of these names — remove stragglers. Prune unused magicui imports anywhere they remain.

- [ ] **Step 6: Full verify**

Run: `npm run lint && npm run build`
Visual final pass: `npm run dev` — all breakpoints 375/768/1440, keyboard-only nav sweep, `prefers-reduced-motion` emulation shows static page, no console errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: complete formwork landing assembly"
```
