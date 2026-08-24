import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/constants";
import { Reveal } from "./reveal";

const Projects = () => {
  const [feature, ...rest] = featuredProjects;

  return (
    <section className="border-t hairline">
      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="flex items-baseline justify-between py-4">
          <h2 className="label-mono">04 / Selected Work</h2>
          <p className="label-mono">Poured &amp; Delivered</p>
        </header>

        <div className="py-16">
          <Reveal>
            <Link href="/projects" className="group block">
              <div className="relative aspect-[16/10] overflow-hidden border border-ink">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="92vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="label-mono">
                  {feature.client} · {feature.completion} · {feature.category}
                </p>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-safety md:text-2xl lg:text-4xl">
                  {feature.title}
                </h3>
              </div>
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:ml-[25%] lg:grid-cols-2">
            {rest.map((project) => (
              <Reveal key={project.id}>
                <Link href="/projects" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-ink">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="label-mono mt-4">
                    {project.client} · {project.completion} ·{" "}
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-safety">
                    {project.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Link
          href="/projects"
          className="block w-full border-t hairline px-6 py-6 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:text-safety focus-visible:text-safety"
        >
          All Projects →
        </Link>
      </div>
    </section>
  );
};

export default Projects;
