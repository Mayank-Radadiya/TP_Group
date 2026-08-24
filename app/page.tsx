import Hero from "@/components/landing/hero";
import About from "@/components/About";
import OurProduct from "@/components/OurProduct";
import CarouselDemo from "@/components/CarouselDemo";
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
        <div id="about">
          <About />
        </div>
        <OurProduct />
        <CarouselDemo />
      </div>
    </main>
  );
};

export default HomePage;
