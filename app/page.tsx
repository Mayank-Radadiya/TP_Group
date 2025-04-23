"use client";
import React, { useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurProduct from "@/components/OurProduct";
import CarouselDemo from "@/components/CarouselDemo";
import { Progressbar } from "@/components/Progressbar";

const HomePage = () => {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <main ref={mainRef} className="overflow-x-hidden">
      <Progressbar target={mainRef} />
      <Hero />
      <div id="about">
        <About />
      </div>
      <OurProduct />
      <CarouselDemo />
    </main>
  );
};

export default HomePage;
