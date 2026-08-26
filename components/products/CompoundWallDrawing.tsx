"use client";

import { motion } from "framer-motion";
import { DrawingStage, useDrawHelpers } from "@/components/site/TechDrawing";

/* two bays of the standard module — the drawn span */
const SPAN_M = 6.35;

const COL_W = 18;
const COL_X = [40, 291, 542];
const PANEL_X = [58, 309];
const PANEL_W = 233;
const TOP = 64;
const GROUND_Y = 340;
const PANEL_TOP = 92;

function CompoundWallSvg() {
  const { draw, fade } = useDrawHelpers();

  return (
    <svg
      viewBox="0 0 600 430"
      className="h-auto w-full text-ink/70"
      role="img"
      aria-label="Technical elevation of the 75mm single-panel compound wall: two bays of precast panels between 200 × 200 mm columns at 3175 mm centres on dashed footings, panel 3048 mm long and 1828 mm high in M30 concrete with TMT weld mesh"
    >
      <defs>
        <pattern id="cw-hatch" width="9" height="9" patternUnits="userSpaceOnUse">
          <path d="M0 9 L9 0" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>

      {/* columns */}
      {COL_X.map((x, i) => (
        <motion.rect
          key={`c${i}`}
          x={x}
          y={TOP}
          width={COL_W}
          height={GROUND_Y - TOP}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          {...draw(0.1 + i * 0.08)}
        />
      ))}

      {/* panels */}
      {PANEL_X.map((x, b) => (
        <motion.rect
          key={`p${b}`}
          x={x}
          y={PANEL_TOP}
          width={PANEL_W}
          height={GROUND_Y - PANEL_TOP}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          {...draw(0.35 + b * 0.09)}
        />
      ))}

      {/* footings */}
      {COL_X.map((x, i) => (
        <motion.rect
          key={`f${i}`}
          x={x - 9}
          y={GROUND_Y + 6}
          width={COL_W + 18}
          height={13}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="4 3"
          {...draw(0.75)}
        />
      ))}

      {/* ground line + hatch */}
      <motion.g {...fade(0.95)}>
        <line
          x1="16"
          y1={GROUND_Y}
          x2="584"
          y2={GROUND_Y}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect x="16" y={GROUND_Y + 1} width="568" height="11" fill="url(#cw-hatch)" opacity="0.5" />
      </motion.g>

      {/* vertical dim: panel height */}
      <motion.g {...fade(1.15)}>
        <line x1="26" y1={PANEL_TOP} x2="26" y2={GROUND_Y} stroke="currentColor" strokeWidth="1" />
        <line x1="21" y1={PANEL_TOP} x2="31" y2={PANEL_TOP} stroke="currentColor" strokeWidth="1" />
        <line x1="21" y1={GROUND_Y} x2="31" y2={GROUND_Y} stroke="currentColor" strokeWidth="1" />
        <text
          x="14"
          y="216"
          className="font-mono"
          fontSize="12"
          letterSpacing="0.12em"
          fill="currentColor"
          transform="rotate(-90 14 216)"
          textAnchor="middle"
        >
          1828 MM — 6 FT
        </text>
      </motion.g>

      {/* top dim: panel length + thickness */}
      <motion.g {...fade(1.25)}>
        <line x1="58" y1="76" x2="291" y2="76" stroke="currentColor" strokeWidth="1" />
        <line x1="58" y1="71" x2="58" y2="81" stroke="currentColor" strokeWidth="1" />
        <line x1="291" y1="71" x2="291" y2="81" stroke="currentColor" strokeWidth="1" />
        <text x="174" y="66" textAnchor="middle" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          L = 3048 MM · t = 75 MM
        </text>
      </motion.g>

      {/* bottom dim: column centres */}
      <motion.g {...fade(1.35)}>
        <line x1="49" y1="392" x2="551" y2="392" stroke="currentColor" strokeWidth="1" />
        <line x1="49" y1="387" x2="49" y2="397" stroke="currentColor" strokeWidth="1" />
        <line x1="551" y1="387" x2="551" y2="397" stroke="currentColor" strokeWidth="1" />
        <text x="300" y="412" textAnchor="middle" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          A = 3175 MM — COLUMN CENTRES
        </text>
      </motion.g>

      {/* leader: panel build-up */}
      <motion.g {...fade(1.5)}>
        <circle cx="174" cy="210" r="3.5" fill="var(--red)" />
        <path d="M174 210 L232 178 H420" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.5)} />
        <text x="238" y="170" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          PANEL — CAST IN STEEL MOULDS
          <tspan x="238" dy="15">
            M30 · 8MM TMT BAR WELD MESH
          </tspan>
        </text>
      </motion.g>

      {/* leader: column section */}
      <motion.g {...fade(1.65)}>
        <circle cx="300" cy="330" r="3.5" fill="var(--red)" />
        <path d="M300 330 V352" fill="none" stroke="currentColor" strokeWidth="1" {...draw(1.65)} />
        <text x="314" y="360" className="font-mono" fontSize="12" letterSpacing="0.12em" fill="currentColor">
          COLUMN 200 × 200 MM
          <tspan x="314" dy="15">
            10 NOS Ø4MM PS WIRE
          </tspan>
        </text>
      </motion.g>

      {/* footing note */}
      <motion.g {...fade(1.8)}>
        <text x="46" y="380" className="font-mono" fontSize="11" letterSpacing="0.12em" fill="currentColor">
          C = 450
        </text>
      </motion.g>
    </svg>
  );
}

export default function CompoundWallDrawing() {
  return (
    <DrawingStage spanM={SPAN_M}>
      <CompoundWallSvg />
    </DrawingStage>
  );
}
