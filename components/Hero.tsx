"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { LineShadowText } from "./magicui/line-shadow-text";

const Hero = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-bl-full opacity-40" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-indigo-50 rounded-tr-full opacity-70" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-8 border-purple-100 opacity-30 animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-indigo-100 opacity-40 animate-float" />
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Building <span className="gradient-text text-7xl">Stronger</span>{" "}
              Building
              <LineShadowText className="italic ml-3 text-7xl">
                Faster
              </LineShadowText>
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Decades of expertise in providing high-quality precast concrete
              solutions for construction projects of all sizes.
            </motion.p>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href={"/products"}>
                <Button className="gradient-bg-1 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg">
                  Explore Products
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button className="bg-white text-gray-800 rounded-full px-8 py-6 shadow-sm border border-gray-200 hover:shadow">
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                <div className="w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold shadow-sm">
                  40+
                </div>
                <div className="w-14 h-14 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold shadow-sm">
                  1500+
                </div>
                <div className="w-14 h-14 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold shadow-sm">
                  100%
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">
                  Trusted by hundreds of clients
                </span>
                <br />
                Over 1500 projects completed with 100% satisfaction
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 ml-auto">
              {/* <Image
                src="/images/main.jpg"
                alt="Tirupati Precast"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover"
              /> */}
              <video
                src="videoplayback.mp4"
                autoPlay
                loop
                muted
                className="rounded-2xl shadow-2xl object-fill w-full h-[200px] sm:w-[650px] sm:h-[350px]"
              />
              <div className="absolute -bottom-12 -left-6 bg-white p-4 rounded-lg shadow-lg ">
                <div className="flex items-center gap-3 ">
                  <div className="gradient-bg-1 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
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
                  <div>
                    <p className="font-semibold">ISO Certified</p>
                    <p className="text-xs text-gray-500">
                      Quality Assured Products
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute z-10 -top-12 -right-4 md:-right-10 bg-white p-3 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-purple-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="z-99">
                  <p className="font-semibold text-sm">High Efficiency</p>
                  <p className="text-xs text-gray-500">Durable Products</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
