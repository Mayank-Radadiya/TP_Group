import Hero from "@/components/landing/hero";
import ClientStrip from "@/components/landing/client-strip";
import About from "@/components/landing/about";
import ProductsIndex from "@/components/landing/products-index";
import Process from "@/components/landing/process";
import Projects from "@/components/landing/projects";
import PlantBand from "@/components/landing/plant-band";
import CTABand from "@/components/landing/cta-band";
import { Progressbar } from "@/components/Progressbar";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <Progressbar />
      <div className="relative mx-auto max-w-7xl">
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-[8.333%] hidden w-px bg-ink/5 md:block"
        />
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-[91.667%] hidden w-px bg-ink/5 md:block"
        />
        <Hero />
        <ClientStrip />
        <About />
        <ProductsIndex />
        <Process />
        <Projects />
        <PlantBand />
        <CTABand />
      </div>
    </main>
  );
};

export default HomePage;
