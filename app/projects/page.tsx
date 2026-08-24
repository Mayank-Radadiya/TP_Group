"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { featuredProjects, recentProjects } from "@/constants";

const ProjectsPage = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeInUpVariants}
              className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
            >
              Our <span className="text-ink">Projects</span>
            </motion.h1>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Discover our portfolio of successful precast concrete projects
              across commercial, residential, infrastructure, and industrial
              sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
            >
              <span className="relative z-10">Featured Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -z-10"></span>
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Highlighting our most innovative and impactful precast concrete
              projects that showcase our expertise and craftsmanship.
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  variants={
                    index % 2 === 0 ? fadeInLeftVariants : fadeInRightVariants
                  }
                  className="relative"
                >
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "-right-5" : "-left-5"
                    } -bottom-5 w-full h-full border-4 border-purple-200 rounded-xl -z-10 translate-x-4 translate-y-4`}
                  ></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </motion.div>

                <motion.div
                  variants={
                    index % 2 === 0 ? fadeInRightVariants : fadeInLeftVariants
                  }
                >
                  <span className="text-sm font-semibold text-purple-600 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-500 block">
                        Client
                      </span>
                      <span className="font-semibold">{project.client}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500 block">
                        Completed
                      </span>
                      <span className="font-semibold">
                        {project.completion}
                      </span>
                    </div>
                  </div>
                  <Button className="rounded-full px-6 py-2">
                    View Details
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >

            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
            >
              <span className="relative z-10">Recent Projects</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 opacity-60 "></span>
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              A selection of our recent work across various sectors and
              applications.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariants}
                custom={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <span className="text-white font-bold text-sm px-4 py-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors"
                  >
                    View Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
            >
              <span className="relative z-10">Our Expertise</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -z-10"></span>
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We specialize in precast concrete solutions across various
              sectors, delivering excellence in every project.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Commercial",
                icon: "🏢",
                description:
                  "Office buildings, retail centers, and corporate facilities designed for both functionality and aesthetic appeal.",
              },
              {
                title: "Residential",
                icon: "🏘️",
                description:
                  "Multi-family housing, apartment complexes, and custom residential projects with efficiency and quality.",
              },
              {
                title: "Infrastructure",
                icon: "🌉",
                description:
                  "Bridges, highways, retaining walls, and public infrastructure built to last generations.",
              },
              {
                title: "Industrial",
                icon: "🏭",
                description:
                  "Manufacturing facilities, warehouses, and specialized industrial structures designed for operational efficiency.",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariants}
                custom={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 border border-gray-200 m-12 shadow-lg rounded-lg bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Have a Project in Mind?
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s discuss how our precast concrete solutions can bring
              your vision to life with quality, efficiency, and innovation.
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-white text-purple-700 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:bg-gray-100">
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
