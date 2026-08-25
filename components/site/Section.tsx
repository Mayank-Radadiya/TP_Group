import { ReactNode } from "react";

export function Section({
  n,
  label,
  children,
  className = "",
  dark = false,
}: {
  n?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "dark-band" : ""} ${className}`}>
      <div className="sheet">
        {(n || label) && (
          <div className="sec-head mb-12 md:mb-16">
            {n && <span className="idx">{n}</span>}
            {label && (
              <span className={`label-mono ${dark ? "!text-paper/60" : ""}`}>{label}</span>
            )}
            <span className={`rule ${dark ? "!bg-paper/15" : ""}`} aria-hidden />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
