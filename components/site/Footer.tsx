import Link from "next/link";
import Logo from "./Logo";
import { BRANCH_STATES, COMPANY, PHONES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="dark-band grain relative bg-ink text-paper">
      <div className="sheet relative pb-10 pt-20 md:pt-28">
        {/* CTA row */}
        <div className="hairline-b flex flex-col gap-8 pb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono !text-paper/50 mb-5">Start a wall</p>
            <Link
              href="/contact"
              className="font-display block text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] text-paper transition-colors hover:text-red"
            >
              Get a quote<span className="text-red">.</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            {PHONES.map((p) => (
              <a
                key={p.value}
                href={p.href}
                className="link-sweep font-mono text-sm tracking-[0.08em] text-paper/80 hover:text-paper"
              >
                {p.value}
                <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-paper/40">
                  {p.label}
                </span>
              </a>
            ))}
            <a
              href={`mailto:${COMPANY.email}`}
              className="link-sweep font-mono text-sm tracking-[0.08em] text-paper/80 hover:text-paper"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* columns */}
        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              {COMPANY.descriptor}
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-red">
              {COMPANY.certification}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="label-mono !text-paper/40 mb-5">Site</p>
            <ul className="space-y-3 text-sm">
              {[
                ["Products", "/products"],
                ["Projects", "/projects"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="link-sweep text-paper/70 hover:text-paper">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="label-mono !text-paper/40 mb-5">Branch network — 16 across India</p>
            <p className="text-sm leading-relaxed text-paper/60">
              {BRANCH_STATES.join(" · ")}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-paper/60">
              {COMPANY.headOffice}
            </p>
          </div>
        </div>

        {/* legal */}
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
                className="link-sweep font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 hover:text-paper"
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
