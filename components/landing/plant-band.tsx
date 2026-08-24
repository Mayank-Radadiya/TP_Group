const PlantBand = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <video
        src="/videoplayback.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/main.jpg"
        className="h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/40" />
      <p className="label-mono absolute bottom-6 left-6 text-bone md:bottom-8 md:left-8">
        INSIDE THE PLANT — YELAHANKA, BENGALURU
      </p>
    </section>
  );
};

export default PlantBand;
