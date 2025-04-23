"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 80) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 80) {
      handlePrevious();
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrent((prevCurrent) => {
          setDirection(1);
          return prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1;
        });
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    pauseAutoPlay();
    setDirection(-1);
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleNext = () => {
    pauseAutoPlay();
    setDirection(1);
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const handleDotClick = (index: number) => {
    pauseAutoPlay();
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <div
      className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden bg-gradient-to-r from-purple-900/5 to-indigo-900/10"
      onMouseEnter={pauseAutoPlay}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[current].src}
              alt={slides[current].title}
              fill
              className="object-cover"
              loading="eager"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 85vw, 80vw"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
              <div className="text-center w-full max-w-3xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
                >
                  {slides[current].title}
                </motion.h2>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="gradient-bg-1 text-white text-sm sm:text-base rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {slides[current].button}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Previous/Next buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handlePrevious}
          className="glass-effect rounded-full p-2 sm:p-3 text-white shadow-md pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleNext}
          className="glass-effect rounded-full p-2 sm:p-3 text-white shadow-md pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-0 right-0">
        <div className="flex justify-center space-x-1 sm:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80"
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
