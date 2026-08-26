"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { KineticHeadline } from "@/components/site/Reveal";

/* client-verified facts only — no invented numbers */
const STATS_BAR = [
  { k: "Installation speed", v: "100 m of wall installed in 2 days" },
  { k: "Quality system", v: "ISO 9001:2015 Certified" },
  { k: "Circular by design", v: "~100% of panels & 90% of columns reusable" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* Wall elevation geometry (viewBox 1200×470) */
const COL_W = 18;
const BAY_W = 245;
const ROW_H = 112;
const ROWS = 3;
const TOP = 24;
const WALL_BOT = TOP + ROWS * ROW_H; // 360
const COL_X = [96, 359, 622, 885, 1148];
const PANEL_X = [114, 377, 640, 903];
const GROUND_Y = 384;
/* real-world span of the drawing, for the CAD readout */
const SPAN_M = 12.7;

function RedPeriod({ delay }: { delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      className="ml-[0.07em] inline-block h-[0.13em] w-[0.13em] bg-red"
    />
  );
}

/* drafting crop marks pinned to the sheet corners */
function CropMarks() {
  const base = "pointer-events-none absolute h-3.5 w-3.5 border-ink/30";
  return (
    <div aria-hidden className="hidden md:block">
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

function WallElevation() {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: reduce ? false : ({ pathLength: 0 } as const),
    animate: { pathLength: 1 },
    transition: { duration: 0.9, delay, ease: EASE },
  });
  const fade = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0 } as const),
    animate: { opacity: 1 },
    transition: { duration: 0.7, delay },
  });

  return (
    <svg
      viewBox="0 0 1200 512"
      className="h-auto w-full text-ink/70"
      role="img"
      aria-label="Technical elevation drawing of the 75mm single-panel compound wall: four bays of stacked precast panels between 200 × 200 mm columns on a hatched ground line, dimensioned 1.83 metres high and 12.70 metres across, cast in M30 concrete"
    >
      <defs>
        <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 10 L10 0" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>

      {/* columns */}
      {COL_X.map((x, i) => (
        <motion.rect
          key={`c${i}`}
          x={x}
          y={TOP}
          width={COL_W}
          height={WALL_BOT - TOP}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          {...draw(0.35 + i * 0.07)}
        />
      ))}

      {/* panels: 4 bays × 3 rows */}
      {PANEL_X.map((x, b) =>
        Array.from({ length: ROWS }).map((_, r) => (
          <motion.rect
            key={`p${b}-${r}`}
            x={x}
            y={TOP + r * ROW_H}
            width={BAY_W}
            height={ROW_H}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            {...draw(0.55 + (b * ROWS + r) * 0.04)}
          />
        ))
      )}

      {/* footings */}
      {COL_X.map((x, i) => (
        <motion.rect
          key={`f${i}`}
          x={x - 8}
          y={WALL_BOT + 8}
          width={COL_W + 16}
          height={16}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          {...draw(1.05)}
        />
      ))}

      {/* ground line + hatch */}
      <motion.g {...fade(1.2)}>
        <line
          x1="40"
          y1={GROUND_Y}
          x2="1196"
          y2={GROUND_Y}
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <rect x="40" y={GROUND_Y + 1} width="1156" height="11" fill="url(#hatch)" opacity="0.55" />
      </motion.g>

      {/* vertical dimension: 1.83 M */}
      <motion.g {...fade(1.35)}>
        <line x1="64" y1={TOP} x2="64" y2={WALL_BOT} stroke="currentColor" strokeWidth="1" />
        <line x1="58" y1={TOP} x2="70" y2={TOP} stroke="currentColor" strokeWidth="1" />
        <line x1="58" y1={WALL_BOT} x2="70" y2={WALL_BOT} stroke="currentColor" strokeWidth="1" />
        <text x="10" y="200" className="font-mono" fontSize="13" letterSpacing="0.12em" fill="currentColor">
          1.83 M
        </text>
      </motion.g>

      {/* horizontal dimension: 12.70 M — 4 BAYS */}
      <motion.g {...fade(1.45)}>
        <line x1="96" y1="428" x2="1166" y2="428" stroke="currentColor" strokeWidth="1" />
        <line x1="96" y1="422" x2="96" y2="434" stroke="currentColor" strokeWidth="1" />
        <line x1="1166" y1="422" x2="1166" y2="434" stroke="currentColor" strokeWidth="1" />
        <text
          x="631"
          y="422"
          textAnchor="middle"
          className="font-mono"
          fontSize="13"
          letterSpacing="0.12em"
          fill="currentColor"
        >
          12.70 M — 4 BAYS
        </text>
      </motion.g>

      {/* leader annotation */}
      <motion.g {...fade(1.6)}>
        <circle cx="760" cy="80" r="3.5" fill="var(--red)" />
        <path
          d="M760 80 L836 56 H1010"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          {...draw(1.6)}
        />
        <text x="842" y="48" className="font-mono" fontSize="13" letterSpacing="0.12em" fill="currentColor">
          PANEL — CAST IN STEEL MOULDS
        </text>
      </motion.g>

      {/* leader: column section + reinforcement */}
      <motion.g {...fade(1.75)}>
        <circle cx="368" cy="376" r="3.5" fill="var(--red)" />
        <path d="M368 376 V476" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.75)} />
        <text x="382" y="480" className="font-mono" fontSize="13" letterSpacing="0.12em" fill="currentColor">
          COLUMN 200 × 200 MM
          <tspan x="382" dy="16">
            10 NOS Ø4MM PS WIRE
          </tspan>
        </text>
      </motion.g>

      {/* leader: concrete grade + panel reinforcement */}
      <motion.g {...fade(1.9)}>
        <circle cx="894" cy="376" r="3.5" fill="var(--red)" />
        <path d="M894 376 V476" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.9)} />
        <text x="908" y="480" className="font-mono" fontSize="13" letterSpacing="0.12em" fill="currentColor">
          M30 CONCRETE
          <tspan x="908" dy="16">
            8MM TMT BAR + WELD MESH
          </tspan>
        </text>
      </motion.g>
    </svg>
  );
}

/* CAD-style crosshair: hairlines + metric readout that trail the pointer
   over the elevation drawing. Pointer-fine devices only. */
function CadCursor({ zoneRef }: { zoneRef: React.RefObject<HTMLDivElement | null> }) {
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 400, damping: 35 });
  const sy = useSpring(my, { stiffness: 400, damping: 35 });

  /* pointer px → metres at the drawing's stated 12.70 m span */
  const readout = useTransform([sx, sy], ([x, y]: number[]) => {
    const r = zoneRef.current?.getBoundingClientRect();
    if (!r || r.width === 0) return "";
    const mPerPx = SPAN_M / r.width;
    return `X ${(x * mPerPx).toFixed(2)} M — Y ${(y * mPerPx).toFixed(2)} M`;
  });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  if (reduce || !fine) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
      onMouseMoveCapture={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <motion.div
        className="absolute inset-y-0 w-px bg-ink/20"
        style={{ x: sx, left: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute inset-x-0 h-px bg-ink/20"
        style={{ y: sy, top: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute"
        style={{ x: sx, y: sy }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span className="absolute left-3 top-3 whitespace-nowrap border border-ink/15 bg-paper/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-concrete backdrop-blur-sm">
          {readout}
        </motion.span>
      </motion.div>
    </div>
  );
}

/* drafting-table ground: 32px minor / 160px major graph grid,
   lit from upper-centre and faded toward the fold */
const GRID_STYLE: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(26,25,23,0.04) 1px, transparent 1px)," +
    "linear-gradient(90deg, rgba(26,25,23,0.04) 1px, transparent 1px)," +
    "linear-gradient(rgba(26,25,23,0.085) 1px, transparent 1px)," +
    "linear-gradient(90deg, rgba(26,25,23,0.085) 1px, transparent 1px)",
  backgroundSize: "32px 32px, 32px 32px, 160px 160px, 160px 160px",
  maskImage:
    "radial-gradient(120% 90% at 50% 0%, black 35%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(120% 90% at 50% 0%, black 35%, transparent 100%)",
};

export default function Hero() {
  const reduce = useReducedMotion();
  const zoneRef = useRef<HTMLDivElement>(null);
  const secRef = useRef<HTMLElement>(null);

  /* gentle pointer parallax on the elevation drawing */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 55, damping: 18 });
  const sy = useSpring(py, { stiffness: 55, damping: 18 });

  /* scroll drift: grid recedes slower than the drawing sits forward */
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const drawY = useTransform(scrollYProgress, [0, 1], [0, -26]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !secRef.current) return;
    const r = secRef.current.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 5);
  };

  return (
    <section
      ref={secRef}
      onMouseMove={onMove}
      className="grain relative overflow-hidden pt-28 md:pt-36"
    >
      {/* graph-paper ground */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={reduce ? undefined : { y: gridY, ...GRID_STYLE }}
      />

      {/* soft edge vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(26,25,23,0.07)]"
      />

      <div className="relative">
        <div className="sheet relative">
          <CropMarks />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="label-mono mb-6 flex items-center gap-3"
          >
            <span className="inline-block h-2 w-2 bg-red" aria-hidden />
            Tirupati Precast · Yelahanka, Bengaluru
          </motion.p>

          <h1 className="font-display text-ink">
            <span className="block text-[clamp(2.75rem,10.5vw,9rem)] leading-[0.94]">
              <KineticHeadline text="Drawn to scale" delay={0.15} />
            </span>
            <span className="type-outline block text-[clamp(2.75rem,10.5vw,9rem)] leading-[0.94]">
              <KineticHeadline text="Built to outlast" delay={0.35} />
              <RedPeriod delay={1} />
            </span>
          </h1>

          {/* concise copy + focused CTA */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mb-10 mt-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 md:mt-12 md:mb-14"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
              Factory-cast compound walls, drains and retaining walls —
              erected in days.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="/contact" className="btn btn-red">
                Get a quote
              </a>
              <a
                href="/products"
                className="link-sweep font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
              >
                Explore products →
              </a>
            </div>
          </motion.div>
        </div>

        {/* verified-fact strip */}
        <div className="hairline-t hairline-b relative bg-paper/80 backdrop-blur-sm">
          <div className="sheet grid gap-y-5 py-7 sm:grid-cols-3 sm:gap-x-10">
            {STATS_BAR.map((s) => (
              <div key={s.k}>
                <p className="label-mono mb-2 flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 bg-red" aria-hidden />
                  {s.k}
                </p>
                <p className="font-display text-base leading-tight text-ink md:text-lg">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* wall elevation drawing */}
        <div className="sheet pb-12 pt-2 md:pb-16">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={reduce ? undefined : { x: sx, y: sy }}
          >
            <motion.div style={reduce ? undefined : { y: drawY }}>
              <div ref={zoneRef} className="relative">
                <CadCursor zoneRef={zoneRef} />
                <WallElevation />
              </div>
            </motion.div>
            {/* one of several standard wall-height configurations */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
              <p className="label-mono">
                Standard heights · 6 / 8 / 10 / 12 ft
              </p>
              <a
                href="/products"
                className="link-sweep font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
              >
                All configurations →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
