"use client";

import { motion } from "framer-motion";
import { DrawingStage, useDrawHelpers } from "@/components/site/TechDrawing";

/* cross-section spans the widest standard base */
const SPAN_M = 2.05;

function RetainingWallSvg() {
  const { draw, fade } = useDrawHelpers();

  return (
    <svg
      viewBox="0 0 600 430"
      className="h-auto w-full text-ink/70"
      role="img"
      aria-label="Technical cross-section of the L-shaped precast retaining wall: stem height 1000 to 3000 mm and base 850 to 2050 mm in JIS self-compacting RCC, flange-coupled joints, drain hole through the stem, founded on bedding mortar, foundation concrete and crushed stone"
    >
      <defs>
        <pattern id="rw-soil" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 10 L10 0" stroke="currentColor" strokeWidth="0.75" />
        </pattern>
        <pattern id="rw-bed" width="9" height="9" patternUnits="userSpaceOnUse">
          <path d="M0 9 L9 0" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>

      {/* retained soil */}
      <motion.g {...fade(0.1)}>
        <line x1="36" y1="52" x2="226" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="5 4" opacity="0.7" />
        <text x="40" y="40" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="currentColor">
          RETAINED SOIL
        </text>
        <rect x="36" y="54" width="182" height="240" fill="url(#rw-soil)" opacity="0.28" />
      </motion.g>

      {/* L unit: outer */}
      <motion.path
        d="M226 52 V300 H434"
        fill="none" stroke="currentColor" strokeWidth="3"
        {...draw(0.3)}
      />

      {/* L unit: inner */}
      <motion.path
        d="M258 52 V268 H402"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        {...draw(0.5)}
      />

      {/* flange coupling */}
      <motion.path
        d="M226 104 h-12 v16 h12 M258 104 h12 v16 h-12"
        fill="none" stroke="currentColor" strokeWidth="1"
        {...draw(0.85)}
      />

      {/* drain hole */}
      <motion.circle cx="242" cy="272" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" {...draw(1)} />
      <motion.path d="M242 283 V296" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" fill="none" {...fade(1.15)} />

      {/* H dim */}
      <motion.g {...fade(1.25)}>
        <line x1="96" y1="52" x2="96" y2="300" stroke="currentColor" strokeWidth="1" />
        <line x1="91" y1="52" x2="101" y2="52" stroke="currentColor" strokeWidth="1" />
        <line x1="91" y1="300" x2="101" y2="300" stroke="currentColor" strokeWidth="1" />
        <text
          x="82" y="176" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor"
          transform="rotate(-90 82 176)" textAnchor="middle"
        >
          H 1000 – 3000 MM
        </text>
      </motion.g>

      {/* B dim */}
      <motion.g {...fade(1.35)}>
        <line x1="226" y1="330" x2="434" y2="330" stroke="currentColor" strokeWidth="1" />
        <line x1="226" y1="325" x2="226" y2="335" stroke="currentColor" strokeWidth="1" />
        <line x1="434" y1="325" x2="434" y2="335" stroke="currentColor" strokeWidth="1" />
        <text x="330" y="350" textAnchor="middle" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          B 850 – 2050 MM · UNIT L = 2000
        </text>
      </motion.g>

      {/* foundation build-up */}
      <motion.g {...fade(1.45)}>
        <line x1="60" y1="368" x2="540" y2="368" stroke="currentColor" strokeWidth="1.5" />
        <rect x="60" y="369" width="480" height="10" fill="url(#rw-bed)" opacity="0.5" />
        <text x="300" y="398" textAnchor="middle" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="currentColor">
          BEDDING MORTAR → FOUNDATION CONCRETE → CRUSHED STONE
        </text>
      </motion.g>

      {/* leader: JIS concrete */}
      <motion.g {...fade(1.55)}>
        <circle cx="290" cy="160" r="3.5" fill="var(--red)" />
        <path d="M290 160 L332 132 H500" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.55)} />
        <text x="338" y="124" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          JIS SELF-COMPACTING RCC
          <tspan x="338" dy="15">
            FLANGE-COUPLED JOINTS
          </tspan>
        </text>
      </motion.g>

      {/* leader: drain */}
      <motion.g {...fade(1.7)}>
        <circle cx="242" cy="272" r="3.5" fill="var(--red)" />
        <path d="M242 272 L196 236 H80" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.7)} />
        <text x="44" y="226" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          Ø70/75 DRAIN · PARTICLE FILTER
        </text>
      </motion.g>
    </svg>
  );
}

export default function RetainingWallDrawing() {
  return (
    <DrawingStage spanM={SPAN_M}>
      <RetainingWallSvg />
    </DrawingStage>
  );
}
