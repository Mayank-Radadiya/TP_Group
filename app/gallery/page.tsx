"use client";
import { NextPage } from "next";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

interface PageProps {}

const GalleryPage: NextPage<PageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "precast", name: "Precast Concrete" },
    { id: "commercial", name: "Commercial" },
    { id: "residential", name: "Residential" },
    { id: "infrastructure", name: "Infrastructure" },
  ];

  const galleryItems = [
    { id: 1, src: "/images/1.jpg", alt: "Project 1", category: "precast" },
    { id: 2, src: "/images/2.jpg", alt: "Project 2", category: "commercial" },
    { id: 3, src: "/images/3.jpg", alt: "Project 3", category: "residential" },
    {
      id: 4,
      src: "/images/4.jpg",
      alt: "Project 4",
      category: "infrastructure",
    },
    { id: 5, src: "/images/5.jpg", alt: "Project 5", category: "precast" },
    { id: 6, src: "/images/6.jpg", alt: "Project 6", category: "commercial" },
    { id: 7, src: "/images/7.jpg", alt: "Project 7", category: "residential" },
    {
      id: 8,
      src: "/images/8.jpg",
      alt: "Project 8",
      category: "infrastructure",
    },
    { id: 9, src: "/images/9.jpg", alt: "Project 9", category: "precast" },
    {
      id: 10,
      src: "/images/10.jpg",
      alt: "Project 10",
      category: "commercial",
    },
    {
      id: 11,
      src: "/images/11.jpg",
      alt: "Project 11",
      category: "residential",
    },
    { id: 12, src: "/images/12.jpg", alt: "Project 12", category: "precast" },
  ];

  // Create filtered image paths array for ParallaxScroll component
  const filteredImagePaths = useMemo(() => {
    const filtered =
      selectedCategory === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory);

    return filtered.map((item) => item.src);
  }, [selectedCategory, galleryItems]);

  return (
    <main className="overflow-x-hidden">
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 relative inline-block">
                <span className="relative z-10">Our Gallery</span>
                <span className="absolute left-0 bottom-1 h-2 w-full bg-purple-200 rounded-sm"></span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg"
            >
              Explore our impressive collection of completed projects that
              showcase our expertise and commitment to excellence in
              construction.
            </motion.p>

            {/* Decorative shapes */}
            <div className="absolute -right-10 sm:-right-16 top-0 w-24 sm:w-36 h-24 sm:h-36 rounded-full border-4 border-purple-200 opacity-20 animate-spin-slow"></div>
            <div className="absolute -left-10 sm:-left-20 -bottom-8 sm:-bottom-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-purple-100 opacity-30 animate-float"></div>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white hover:bg-purple-100 text-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Parallax Scroll Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {filteredImagePaths.length > 0 ? (
              <ParallaxScroll
                images={filteredImagePaths}
                className="rounded-xl shadow-lg bg-white/5 backdrop-blur-sm"
              />
            ) : (
              <div className="text-center py-20 text-gray-500">
                No projects found in this category.
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
