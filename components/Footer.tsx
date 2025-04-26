"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactLinks } from "@/constants";

const Footer = () => {
  const fadeInUpVariants = {
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

  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "Projects", link: "/projects" },
    { id: 5, name: "Contact", link: "/contact" },
    { id: 6, name: "Gallery", link: "/gallery" },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUpVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="Tirupati Precast"
                width={180}
                height={80}
                className="bg-white p-3 rounded-lg shadow-lg"
              />
            </motion.div>
            <p className="text-gray-300 mb-6">
              Four decades of excellence in providing premium precast concrete
              solutions that combine strength, durability, and innovation for
              construction projects of all scales.
            </p>
            <div className="flex space-x-4">
              {contactLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-purple-500/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <motion.li key={item.id} whileHover={{ x: 5 }}>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-3 h-3 mr-2 text-purple-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-purple-500/30">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-purple-300 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  Sonnenahali Village, Bytha Post, Yelahanka to Rajankhunte
                  Madhure Temple Road, Bangalore North, Karnataka-560089, INDIA
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-purple-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">
                  tirupatiprecast27@gmail.com
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-purple-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300">+91 8884088878</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-purple-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  Mon - Sun: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/10 py-6 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2014 Tirupati Precast. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
