"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progressbar } from "@/components/Progressbar";

import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const ProductsPage = () => {
  const mainRef = useRef<HTMLElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "walls", name: "Precast Walls" },
    { id: "pavers", name: "Concrete Pavers" },
    { id: "structural", name: "Structural Elements" },
    { id: "decorative", name: "Decorative Concrete" },
  ];

  const products = [
    {
      id: 1,
      name: "Reinforced Concrete Walls",
      category: "walls",
      description:
        "High-strength reinforced precast concrete walls designed for maximum durability and load-bearing capacity.",
      features: [
        "Superior strength",
        "Fire resistant",
        "Sound insulation",
        "Quick installation",
      ],
      image: "/images/1.jpg",
    },
    {
      id: 2,
      name: "Interlocking Pavers",
      category: "pavers",
      description:
        "Precision-engineered interlocking concrete pavers for driveways, walkways, and patios.",
      features: [
        "Weather resistant",
        "Non-slip surface",
        "Various patterns",
        "Color options",
      ],
      image: "/images/2.jpg",
    },
    {
      id: 3,
      name: "Precast Concrete Beams",
      category: "structural",
      description:
        "Engineered precast concrete beams for commercial and residential construction projects.",
      features: [
        "High load capacity",
        "Reduced construction time",
        "Consistent quality",
        "Custom lengths",
      ],
      image: "/images/3.jpg",
    },
    {
      id: 4,
      name: "Decorative Concrete Façades",
      category: "decorative",
      description:
        "Architectural precast concrete façade panels that combine aesthetics with durability.",
      features: [
        "Customizable designs",
        "Weather resistant",
        "Low maintenance",
        "Elegant finish",
      ],
      image: "/images/4.jpg",
    },
    {
      id: 5,
      name: "Boundary Walls",
      category: "walls",
      description:
        "Secure and durable precast concrete boundary walls for residential and commercial properties.",
      features: [
        "Security focused",
        "Quick installation",
        "Customizable height",
        "Low maintenance",
      ],
      image: "/images/5.jpg",
    },
    {
      id: 6,
      name: "Hexagonal Pavers",
      category: "pavers",
      description:
        "Modern hexagonal concrete pavers for creating distinctive outdoor spaces.",
      features: [
        "Unique design",
        "High durability",
        "Easy installation",
        "Multiple color options",
      ],
      image: "/images/6.jpg",
    },
    {
      id: 7,
      name: "Precast Columns",
      category: "structural",
      description:
        "Load-bearing precast concrete columns for structural stability in building construction.",
      features: [
        "High strength",
        "Precise dimensions",
        "Reduced labor costs",
        "Faster construction",
      ],
      image: "/images/7.jpg",
    },
    {
      id: 8,
      name: "Ornamental Concrete Elements",
      category: "decorative",
      description:
        "Decorative concrete elements for enhancing architectural appeal of buildings.",
      features: [
        "Artistic designs",
        "Weather resistant",
        "Lightweight options",
        "Custom finishes",
      ],
      image: "/images/8.jpg",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main ref={mainRef} className="pt-20 overflow-hidden">
      <Progressbar />

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
              variants={fadeInVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="gradient-text">Products</span>
            </motion.h1>
            <motion.p
              variants={fadeInVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Discover our comprehensive range of high-quality precast concrete
              solutions designed for durability, strength, and aesthetic appeal.
            </motion.p>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full border-4 border-purple-100 opacity-40 animate-spin-slow"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-indigo-100 opacity-30 animate-float"></div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium shadow-sm transition-all ${
                  selectedCategory === category.id
                    ? "gradient-bg-1 text-white shadow-md"
                    : "bg-white text-gray-700 hover:shadow border border-gray-200"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {categories.find((c) => c.id === product.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-5">{product.description}</p>

                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <svg
                            className="w-4 h-4 text-purple-500 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end items-center">
                    <Button
                      className="gradient-bg-1 text-white rounded-full shadow-md hover:shadow-lg"
                      onClick={() => {
                        toast.success(
                          "Please fill out the form to get a quote or contact us."
                        );
                        redirect("/contact");
                      }}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                <span className="relative z-10">Custom Solutions</span>
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-purple-200"></span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond our standard product range, we specialize in creating
                custom precast solutions tailored to your specific project
                requirements. Our team of engineers and designers work closely
                with you to develop unique precast elements that perfectly match
                your vision.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need specialized architectural elements,
                custom-sized structural components, or unique decorative pieces,
                our state-of-the-art manufacturing facility can bring your ideas
                to life with precision and excellence.
              </p>

              <div className="space-y-4">
                {[
                  "Architectural consulting",
                  "Custom mold creation",
                  "Specialized finishes",
                  "Project-specific engineering",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 rounded-full p-1 bg-purple-100 text-purple-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="gradient-bg-1 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg">
                  Discuss Your Custom Project
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-5 -bottom-5 w-full h-full border-4 border-purple-200 rounded-xl -z-10 -translate-x-4 translate-y-4"></div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/9.jpg"
                  alt="Custom Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
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
              variants={fadeInVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Construction Project?
            </motion.h2>
            <motion.p
              variants={fadeInVariants}
              className="text-lg mb-8 max-w-2xl mx-auto"
            >
              Our precast concrete products offer the perfect balance of
              quality, durability, and cost-effectiveness. Contact us today for
              a consultation or quote.
            </motion.p>
            <motion.div
              variants={fadeInVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                onClick={() => {
                  toast.success(
                    "Please fill out the form to get a quote or contact us."
                  );
                  redirect("/contact");
                }}
                className="bg-white text-purple-700 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:bg-gray-100"
              >
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
