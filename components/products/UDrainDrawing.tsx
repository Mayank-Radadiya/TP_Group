"use client";

import { motion } from "framer-motion";
import { DrawingStage, useDrawHelpers } from "@/components/site/TechDrawing";

/* cross-section spans the widest T-25 unit overall */
const SPAN_M = 1.2;

function UDrainSvg() {
  const { draw, fade } = useDrawHelpers();

  return (
    <svg
      viewBox="0 0 600 430"
      className="h-auto w-full text-ink/70"
      role="img"
      aria-label="Technical cross-section of the precast U drain: lid rated to 10 tonnes over a U-shaped channel 300 to 900 mm internal width, wall thickness 65 to 150 mm by duty class, depth 375 to 1170 mm, bedded on 100 mm PCC with dry mortar and groove joints"
    >
      <defs>
        <pattern id="ud-hatch" width="9" height="9" patternUnits="userSpaceOnUse">
          <path d="M0 9 L9 0" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>

      {/* lid */}
      <motion.rect
        x="170" y="64" width="260" height="30"
        fill="none" stroke="currentColor" strokeWidth="1.75"
        {...draw(0.1)}
      />
      <motion.path d="M182 79 H418" stroke="currentColor" strokeWidth="0.5" opacity="0.35" fill="none" {...fade(0.9)} />

      {/* outer U */}
      <motion.path
        d="M160 94 V298 A38 38 0 0 0 198 336 H402 A38 38 0 0 0 440 298 V94"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        {...draw(0.35)}
      />

      {/* inner U */}
      <motion.path
        d="M192 94 V282 A24 24 0 0 0 216 306 H384 A24 24 0 0 0 408 282 V94"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        {...draw(0.55)}
      />

      {/* haunch lines */}
      <motion.path d="M192 224 L176 240 M408 224 L424 240" stroke="currentColor" strokeWidth="0.75" opacity="0.5" fill="none" {...fade(1)} />

      {/* internal width dim */}
      <motion.g {...fade(1.15)}>
        <line x1="192" y1="50" x2="408" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="192" y1="45" x2="192" y2="55" stroke="currentColor" strokeWidth="1" />
        <line x1="408" y1="45" x2="408" y2="55" stroke="currentColor" strokeWidth="1" />
        <text x="300" y="40" textAnchor="middle" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          300 – 900 MM INTERNAL
        </text>
      </motion.g>

      {/* wall thickness dim */}
      <motion.g {...fade(1.25)}>
        <line x1="128" y1="94" x2="128" y2="160" stroke="currentColor" strokeWidth="1" />
        <path d="M136 94 h-16 M136 160 h-16" stroke="currentColor" strokeWidth="0.75" />
        <text x="118" y="130" textAnchor="end" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="currentColor">
          WALL c 65–85
          <tspan x="118" dy="14">T-25 110–150</tspan>
        </text>
      </motion.g>

      {/* depth dim */}
      <motion.g {...fade(1.35)}>
        <line x1="472" y1="94" x2="472" y2="336" stroke="currentColor" strokeWidth="1" />
        <line x1="467" y1="94" x2="477" y2="94" stroke="currentColor" strokeWidth="1" />
        <line x1="467" y1="336" x2="477" y2="336" stroke="currentColor" strokeWidth="1" />
        <text
          x="486" y="215" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor"
          transform="rotate(90 486 215)" textAnchor="middle"
        >
          H 375 – 1170 MM
        </text>
      </motion.g>

      {/* bedding */}
      <motion.g {...fade(1.45)}>
        <line x1="80" y1="368" x2="520" y2="368" stroke="currentColor" strokeWidth="1.5" />
        <rect x="80" y="369" width="440" height="10" fill="url(#ud-hatch)" opacity="0.5" />
      </motion.g>

      {/* leader: lid */}
      <motion.g {...fade(1.55)}>
        <circle cx="330" cy="79" r="3.5" fill="var(--red)" />
        <path d="M330 79 L376 56 H540" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.55)} />
        <text x="382" y="48" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          LID H′ 75–150 MM — ≤ 10 T AXLE
        </text>
      </motion.g>

      {/* leader: joint + inserts */}
      <motion.g {...fade(1.7)}>
        <circle cx="160" cy="150" r="3.5" fill="var(--red)" />
        <path d="M160 150 L120 122 H44" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.7)} />
        <text x="44" y="112" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          GROOVE JOINTS · LIFTING INSERTS
        </text>
      </motion.g>

      {/* base captions */}
      <motion.g {...fade(1.85)}>
        <text x="300" y="398" textAnchor="middle" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="currentColor">
          100 MM PCC + 20 MM DRY MORTAR BED
        </text>
        <text x="300" y="418" textAnchor="middle" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="currentColor">
          UNIT L = 2000 MM · T-6 LIGHT / T-25 HEAVY DUTY
        </text>
      </motion.g>
    </svg>
  );
}

export default function UDrainDrawing() {
  return (
    <DrawingStage spanM={SPAN_M}>
      <UDrainSvg />
    </DrawingStage>
  );
}
