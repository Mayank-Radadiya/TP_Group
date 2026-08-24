"use client";

import { useEffect, useRef, useState } from "react";

const PlantBand = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showVideo) videoRef.current?.play().catch(() => {});
  }, [showVideo]);

  return (
    <section ref={sectionRef} className="relative h-[70vh] overflow-hidden">
      {showVideo ? (
        <video
          ref={videoRef}
          src="/videoplayback.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/main.jpg"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="h-full w-full bg-bone bg-cover bg-center"
          style={{ backgroundImage: "url(/images/main.jpg)" }}
        />
      )}
      <div aria-hidden className="absolute inset-0 bg-ink/40" />
      <p className="label-mono absolute bottom-6 left-6 text-bone md:bottom-8 md:left-8">
        INSIDE THE PLANT — YELAHANKA, BENGALURU
      </p>
    </section>
  );
};

export default PlantBand;
