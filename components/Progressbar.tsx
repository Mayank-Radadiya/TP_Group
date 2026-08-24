"use client";

import { motion, useScroll } from "framer-motion";

export const Progressbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-safety z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
