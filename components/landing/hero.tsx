"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  animate,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const POST_X = [120, 420, 720, 1020, 1320];
const POST_W = 36;
const WALL_TOP = 120;
const GROUND_Y = 500;
const COURSES = [185, 250, 315, 380, 445];
const BAYS = POST_X.slice(0, -1).map((x, i) => ({
  left: x + POST_W / 2,
  right: POST_X[i + 1] - POST_W / 2,
}));

const HATCH = Array.from({ length: 30 }, (_, i) => `M${24 + i * 48} 502l-16 16`).join(" ");

function Fade({
  delay,
  reduced,
  className,
  children,
}: {
  delay: number;
  reduced: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

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
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Draw({
  d,
  delay,
  reduced,
  className = "stroke-ink",
  sw = 1,
}: {
  d: string;
  delay: number;
  reduced: boolean;
  className?: string;
  sw?: number;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      strokeWidth={sw}
      className={className}
      initial={reduced ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    />
  );
}

function Tick({ x, y, delay, reduced }: { x: number; y: number; delay: number; reduced: boolean }) {
  return (
    <motion.path
      d="M-4 4L4 -4"
      transform={`translate(${x} ${y})`}
      className="stroke-ink"
      strokeWidth={1}
      initial={reduced ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.3, delay, ease: EASE }}
    />
  );
}

function HeightValue({ reduced, delay }: { reduced: boolean; delay: number }) {
  const [v, setV] = useState(reduced ? 2.1 : 0);

  useEffect(() => {
    if (reduced) return;
    const controls = animate(0, 2.1, {
      duration: 0.9,
      delay,
      ease: "easeOut",
      onUpdate: setV,
    });
    return () => controls.stop();
  }, [reduced, delay]);

  return <>{v.toFixed(2)} m</>;
}

const TITLE_ROWS = [
  ["Product", "Compound wall panels"],
  ["Concrete", "M25 grade, steel moulds"],
  ["Plant", "Yelahanka, Bengaluru"],
  ["Lead time", "Erected in days"],
];

const Hero = () => {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const [bay, setBay] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const drawY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative left-1/2 w-screen -translate-x-1/2 bg-bone text-ink"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col px-6">
        <div className="relative z-10 flex-1 pt-14 pb-[calc(min(44vh,520px)+2rem)] lg:pt-24 lg:pb-[calc(min(44vh,520px)+3rem)]">
          <h1 className="font-display text-[clamp(2.9rem,7.6vw,7.75rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]">
            <Hoist delay={0.35} reduced={reduced}>
              Drawn to scale<span className="text-safety">.</span>
            </Hoist>
            <Hoist delay={0.47} reduced={reduced}>
              Built to outlast<span className="text-safety">.</span>
            </Hoist>
          </h1>

          <Fade
            reduced={reduced}
            delay={0.75}
            className="mt-8 max-w-md text-sm leading-relaxed text-ink/60 md:text-[15px]"
          >
            Walls cast at our Yelahanka plant. Erected on your site in
            days.
          </Fade>

          <Fade
            reduced={reduced}
            delay={0.85}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/products"
              className="btn-wipe bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-bone"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="border border-ink/30 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
            >
              Get a Quote
            </Link>
          </Fade>
        </div>

        <Fade
          reduced={reduced}
          delay={1.25}
          className="absolute right-6 bottom-10 z-20 hidden lg:block"
        >
          <dl className="grid grid-cols-[auto_auto] border border-ink/15 bg-bone/95">
            {TITLE_ROWS.map(([k, v], r) => (
              <div key={k} className="col-span-2 grid grid-cols-subgrid">
                <dt
                  className={`border-r border-ink/10 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45 ${
                    r < TITLE_ROWS.length - 1 ? "border-b" : ""
                  }`}
                >
                  {k}
                </dt>
                <dd
                  className={`px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink ${
                    r < TITLE_ROWS.length - 1 ? "border-b border-ink/10" : ""
                  }`}
                >
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Fade>
      </div>

      <motion.div
        aria-hidden
          className="absolute inset-x-0 bottom-0 z-0 h-[44vh] max-h-[520px] overflow-hidden"
        style={reduced ? undefined : { y: drawY }}
      >
        <svg
          viewBox="0 0 1440 560"
          preserveAspectRatio="xMidYMax slice"
          className="h-full w-full"
        >
          <Draw d={HATCH} delay={0.2} reduced={reduced} className="stroke-ink/50" />
          <Draw d={`M0 ${GROUND_Y}H1440`} delay={0.15} reduced={reduced} sw={1.5} />

          {BAYS.map((b, j) => (
            <g key={j}>
              {COURSES.map((y, k) => (
                <Draw
                  key={y}
                  d={`M${b.left} ${y}H${b.right}`}
                  delay={0.55 + j * 0.06 + k * 0.045}
                  reduced={reduced}
                  className="stroke-ink/60"
                />
              ))}
            </g>
          ))}

          {POST_X.map((x, i) => (
            <Draw
              key={x}
              d={`M${x - POST_W / 2} ${GROUND_Y}V${WALL_TOP}H${x + POST_W / 2}V${GROUND_Y}`}
              delay={0.3 + i * 0.08}
              reduced={reduced}
            />
          ))}

          {BAYS.map((b, i) => (
            <g
              key={i}
              onMouseEnter={() => setBay(i)}
              onMouseLeave={() => setBay(null)}
            >
              <motion.rect
                x={b.left}
                y={WALL_TOP}
                width={b.right - b.left}
                height={GROUND_Y - WALL_TOP}
                className="cursor-crosshair"
                initial={false}
                animate={{
                  fill: bay === i ? "rgba(25,24,23,0.05)" : "rgba(25,24,23,0)",
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.text
                x={(b.left + b.right) / 2}
                y={WALL_TOP + 28}
                textAnchor="middle"
                className="stroke-bone font-mono text-[11px] uppercase tracking-[0.1em]"
                style={{ paintOrder: "stroke" }}
                strokeWidth={4}
                initial={false}
                animate={{
                  opacity: bay === i ? 1 : 0,
                  fill: bay === i ? "#E84E0F" : "#8B8680",
                }}
                transition={{ duration: 0.25 }}
              >
                3.00 m
              </motion.text>
            </g>
          ))}

          <Draw d="M120 504V532" delay={0.9} reduced={reduced} className="stroke-ink/35" />
          <Draw d="M1320 504V532" delay={0.9} reduced={reduced} className="stroke-ink/35" />
          <Draw d="M120 528H1320" delay={1} reduced={reduced} className="stroke-ink/60" />
          <Tick x={120} y={528} delay={1.05} reduced={reduced} />
          <Tick x={1320} y={528} delay={1.05} reduced={reduced} />
          <motion.text
            x={720}
            y={520}
            textAnchor="middle"
            className="stroke-bone fill-ink/60 font-mono text-[11px] uppercase tracking-[0.12em]"
            style={{ paintOrder: "stroke" }}
            strokeWidth={4}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.15 }}
          >
            12.60 m — 4 bays
          </motion.text>

          <Draw d="M64 120H98" delay={0.9} reduced={reduced} className="stroke-ink/35" />
          <Draw d="M64 500H98" delay={0.9} reduced={reduced} className="stroke-ink/35" />
          <Draw d="M68 120V500" delay={1} reduced={reduced} className="stroke-ink/60" />
          <Tick x={68} y={120} delay={1.05} reduced={reduced} />
          <Tick x={68} y={500} delay={1.05} reduced={reduced} />
          <motion.text
            x={58}
            y={314}
            textAnchor="end"
            className="stroke-bone font-mono text-[11px] tracking-[0.08em]"
            style={{ paintOrder: "stroke" }}
            strokeWidth={4}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <HeightValue reduced={reduced} delay={1.1} />
          </motion.text>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
