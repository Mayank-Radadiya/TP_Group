"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/**
 * Image revealed as staggered vertical panel slats (clip-path inset),
 * with subtle scroll parallax inside the mask. The slat rhythm echoes
 * the precast panel system itself.
 */
export default function PanelImage({
  src,
  alt,
  caption,
  priority = false,
  slats = 4,
  className = "",
  parallax = true,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  slats?: number;
  className?: string;
  parallax?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imgY = parallax && !reduce ? y : 0;

  return (
    <figure ref={ref} className={`group relative ${className}`}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
        <motion.div
          className="absolute inset-x-0"
          style={{ y: imgY, top: "-8%", bottom: "-8%" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </motion.div>

        {/* slat mask reveal */}
        <div className="absolute inset-0 flex" aria-hidden>
          {Array.from({ length: slats }).map((_, i) => (
            <motion.span
              key={i}
              className="h-full flex-1"
              style={{ backgroundColor: "var(--mask, var(--paper))" }}
              initial={reduce ? false : { clipPath: "inset(0 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 100% 0)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.09,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}
        </div>

        {/* hairline frame + corner ticks */}
        <div className="pointer-events-none absolute inset-0 border border-ink/15" aria-hidden />
      </div>

      {caption && (
        <figcaption className="mt-3 flex items-start gap-3">
          <span className="mt-1.5 h-px w-6 shrink-0 bg-red" aria-hidden />
          <span className="label-mono !tracking-[0.14em]">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
