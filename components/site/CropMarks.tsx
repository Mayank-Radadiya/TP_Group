import type { CSSProperties } from "react";

/* drafting-table ground: 32px minor / 160px major graph grid,
   lit from upper-centre and faded toward the fold */
export const GRID_PAPER: CSSProperties = {
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

/* inverted blueprint ground for dark bands */
export const GRID_PAPER_DARK: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(242,240,235,0.05) 1px, transparent 1px)," +
    "linear-gradient(90deg, rgba(242,240,235,0.05) 1px, transparent 1px)," +
    "linear-gradient(rgba(242,240,235,0.09) 1px, transparent 1px)," +
    "linear-gradient(90deg, rgba(242,240,235,0.09) 1px, transparent 1px)",
  backgroundSize: "32px 32px, 32px 32px, 160px 160px, 160px 160px",
};

/* drafting crop marks pinned to the sheet corners */
export function CropMarks({ light = false }: { light?: boolean }) {
  const base = `pointer-events-none absolute h-3.5 w-3.5 ${
    light ? "border-paper/30" : "border-ink/30"
  }`;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-4 hidden md:block">
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}
