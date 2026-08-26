import Link from "next/link";
import Logo from "./Logo";
import { CropMarks, GRID_PAPER_DARK } from "@/components/site/CropMarks";
import { BRANCH_STATES, COMPANY, PHONES } from "@/lib/data";

const SITE_LINKS: [string, string][] = [
  ["Products", "/products"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="dark-band grain relative overflow-hidden bg-ink text-paper">
      {/* inverted blueprint ground */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={GRID_PAPER_DARK} />
      <CropMarks light />
      <div className="sheet relative pb-10 pt-20 md:pt-28">
        {/* CTA */}
        <div className="hairline-b pb-14 md:pb-16">
          <p className="label-mono !text-paper/50 mb-5 flex items-center gap-3">
            <span className="inline-block h-2 w-2 bg-red" aria-hidden />
            Start a wall
          </p>
          <Link
            href="/contact"
            className="font-display block text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] text-paper transition-colors hover:text-red"
          >
            Get a quote<span className="text-red">.</span>
          </Link>
        </div>

        {/* info columns */}
        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="border-paper/15 md:col-span-5 md:border-t md:pt-8">
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              Factory-cast compound walls, U-drains and retaining walls —
              manufactured in Bengaluru, erected in days.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-red">
              {COMPANY.certification}
            </p>
          </div>

          <nav className="border-paper/15 md:col-span-3 md:border-t md:pt-8" aria-label="Footer">
            <p className="label-mono !text-paper/40 mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.22em] text-red">01</span>
              Site
            </p>
            <ul className="space-y-3 text-sm">
              {SITE_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="link-sweep text-paper/70 hover:text-paper">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-paper/15 md:col-span-4 md:border-t md:pt-8">
            <p className="label-mono !text-paper/40 mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.22em] text-red">02</span>
              Head office
            </p>
            <address className="text-sm not-italic leading-relaxed text-paper/60">
              {COMPANY.headOffice}
            </address>
            <div className="mt-6 space-y-2">
              <a
                href={PHONES[0].href}
                className="link-sweep block font-mono text-sm tracking-[0.08em] text-paper/80 hover:text-paper"
              >
                {PHONES[0].value}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="link-sweep block font-mono text-sm tracking-[0.08em] text-paper/80 hover:text-paper"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        {/* branch line */}
        <p className="hairline-t py-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-paper/40">
          <span className="mr-3 text-red">03</span>
          Branch network — {BRANCH_STATES.length.toString().padStart(2, "0")} states · 16 branches ·{" "}
          {BRANCH_STATES.join(" · ")}
        </p>

        {/* legal bar */}
        <div className="hairline-t flex flex-col gap-3 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/35">
            © {new Date().getFullYear()} {COMPANY.name} · {COMPANY.group} · {COMPANY.tagline}
          </p>
          <div className="flex gap-6">
            {COMPANY.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 hover:text-red"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
