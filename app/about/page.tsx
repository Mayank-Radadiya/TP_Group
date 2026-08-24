"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CircleUser, MapPin } from "lucide-react";
import Link from "next/link";
import { Progressbar } from "@/components/Progressbar";

const AboutPage = () => {
  const mainRef = useRef<HTMLElement | null>(null);
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
              variants={fadeInUpVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="text-ink">Tirupati Precast</span>
            </motion.h1>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Decades of excellence in precast concrete solutions, delivering
              quality, innovation, and reliability to construction projects
              across the region.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeftVariants} className="relative">
              <div className="absolute -right-5 -bottom-5 w-full h-full border-4 border-purple-200 rounded-xl -z-10 translate-x-4 translate-y-4"></div>
              <Image
                src="/images/5.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div variants={fadeInRightVariants}>
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                <span className="relative z-10">Our Story</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -z-10"></span>
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Tirupati Precast has been a trusted name in the concrete
                industry for over 11 years, known for strength, quality, and top
                service. They offer a range of products including boundary
                walls, manhole covers, and asbestos posts for commercial,
                residential, and industrial use. With advanced machinery and a
                modern plant, they continuously innovate and commit to
                delivering the highest quality products without compromise.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Through the decades, we&apos;ve remained committed to our
                founding principles of quality, innovation, and customer
                satisfaction. Our journey has been marked by continuous
                improvements in technology, processes, and expertise, allowing
                us to stay at the forefront of the industry.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, Tirupati Precast stands as a testament to perseverance
                and excellence, serving a diverse range of clients from
                individual homeowners to large construction companies and
                government projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              <span className="relative z-10">Our Mission & Vision</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 "></span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeftVariants}
              className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:shadow-xl"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-700"
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
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative precast concrete solutions that exceed
                customer expectations in quality, durability, and value. We are
                committed to sustainable practices, operational excellence, and
                fostering a culture of continuous improvement and innovation.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRightVariants}
              className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:shadow-xl"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of precast concrete solutions,
                recognized nationally for excellence in product quality,
                innovation, and customer service. We aspire to transform the
                construction landscape by making premium precast solutions
                accessible, sustainable, and aligned with modern building needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies List */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              <span className="relative z-10">Our Partners</span>
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-purple-200 "></span>
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We are proud to collaborate with some of the most reputable
              companies in the industry.
            </motion.p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex gap-8 px-6 animate-marquee">
              {Array.from({ length: 14 }, (_, i) => (
                <div
                  key={`logo${i + 1}`}
                  className="flex-shrink-0 w-52 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-110 transition-transform mx-4 group relative"
                >
                  <Image
                    src={`/images/logo${i + 1}.jpg`}
                    alt={`Company Logo ${i + 1}`}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </section>

      {/* Branches Section */}
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
              <span className="relative z-10">Our Branches</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 -z-10"></span>
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our dedicated team of professionals is committed to delivering the
              highest quality precast concrete solutions, ensuring that each
              project meets our rigorous standards of excellence.
            </motion.p>
          </motion.div>

          <div className="flex items-center justify-center w-full">
            {/* Branch List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeftVariants}
              className="w-full max-w-6xl group relative"
            >
              <div className="relative w-full h-[500px]">
                <Image
                  src={"/images/branch1.png"}
                  alt="Branch Image"
                  layout="fill"
                  className="rounded-lg shadow-lg object-contain"
                />

                {/* Hover Overlay with States */}
                <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md bg-white/40 rounded-lg flex-col">
                  {/* State List */}
                  <span className="text-ink text-3xl font-semibold">
                    Branch List
                  </span>

                  {[
                    "KARNATAKA",
                    "TELANGANA",
                    "ANDHRA PRADESH",
                    "MAHARASHTRA",
                    "ODISHA",
                    "TAMIL NADU",
                    "GUJARAT",
                  ].map((state) => (
                    <div
                      key={state}
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 text-black rounded-full shadow-md font-semibold text-sm"
                    >
                      <MapPin className="w-4 h-4 text-red-500" />
                      {state}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 border border-gray-200 m-12 shadow-lg rounded-lg bg-gradient-to-b from-purple-50 to-white ">
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg mb-8 max-w-2xl mx-auto"
            >
              Contact us today to discuss how our precast concrete solutions can
              bring quality and efficiency to your construction project.
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/contact">
                <Button className="bg-white text-purple-700 rounded-full px-8 py-6 text-lg  shadow-lg hover:bg-gray-100 gap-4">
                  <CircleUser /> Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
