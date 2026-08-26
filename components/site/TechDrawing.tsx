"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* Motion-prop factories for drafting-style reveal: strokes draw in via
   pathLength, annotations fade. whileInView so below-fold drawings play
   when scrolled to; reduced-motion users get the finished drawing. */
export function useDrawHelpers() {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: reduce ? false : ({ pathLength: 0 } as const),
    whileInView: { pathLength: 1 },
    viewport: { once: true },
    transition: { duration: 0.9, delay, ease: EASE },
  });
  const fade = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0 } as const),
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.7, delay },
  });
  return { draw, fade, reduce };
}

/* CAD-style crosshair: hairlines + metric readout that trail the pointer
   over a drawing. Pointer-fine devices only. */
export function CadCursor({
  zoneRef,
  spanM,
}: {
  zoneRef: React.RefObject<HTMLDivElement | null>;
  spanM: number;
}) {
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

  /* pointer px → metres at the drawing's stated real-world span */
  const readout = useTransform([sx, sy], ([x, y]: number[]) => {
    const r = zoneRef.current?.getBoundingClientRect();
    if (!r || r.width === 0) return "";
    const mPerPx = spanM / r.width;
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

/* Self-contained stage for an animated technical drawing:
   gentle pointer parallax + CAD cursor around the SVG passed as children.
   spanM = real-world width of the drawing, drives the cursor readout. */
export function DrawingStage({
  spanM,
  children,
}: {
  spanM: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const zoneRef = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 55, damping: 18 });
  const sy = useSpring(py, { stiffness: 55, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 5);
  };

  return (
    <div ref={zoneRef} className="relative" onMouseMove={onMove}>
      <CadCursor zoneRef={zoneRef} spanM={spanM} />
      <motion.div style={reduce ? undefined : { x: sx, y: sy }}>
        {children}
      </motion.div>
    </div>
  );
}
