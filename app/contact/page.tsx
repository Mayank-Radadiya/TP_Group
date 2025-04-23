"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contactLinks } from "@/constants";
import { Progressbar } from "@/components/Progressbar";

const ContactPage = () => {
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
      <Progressbar target={mainRef} />
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
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Have questions about our precast concrete solutions? We&apos;re
              here to help with expert advice and personalized service.
            </motion.p>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full border-4 border-purple-100 opacity-40 animate-spin-slow"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-indigo-100 opacity-30 animate-float"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeftVariants}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block">
                <span className="relative z-10">Contact Information</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -z-10"></span>
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-700">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Sonnenahali Village, Bytha Post, Yelahanka to Rajankhunte
                      Madhure Temple Road, Bangalore North, Karnataka-560089,
                      INDIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-700">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+91 8884088878</p>
                    <p className="text-gray-600">+91 9886612024</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-700">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">tirupatiprecast27@gmail.com</p>
                    <p className="text-gray-600">
                      info@tirupaticompoundwall.co
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-700">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {contactLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      className="bg-gray-100 hover:bg-purple-100 transition-colors p-3 rounded-full text-gray-600 hover:text-purple-700"
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRightVariants}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="+91 99XXX XXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              <span className="relative z-10">Our Location</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200"></span>
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Visit our facility to see our precast concrete solutions firsthand
              and meet our team of experts.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="relative rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
          >
            {/* Image background */}
            <Image
              src="/map.png"
              alt="Map location"
              fill
              className="object-top sm:object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10" />

            {/* Floating box */}
            <motion.div
              variants={fadeInRightVariants}
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 w-full p-4 sm:p-6 z-20 flex justify-center"
            >
              <Link
                href="https://maps.app.goo.gl/RMMszxZdo4YJkHbJA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm text-center sm:text-left transition-all hover:text-purple-600 hover:shadow-2xl"
              >
                <h3 className="text-lg font-bold">Tirupati Precast</h3>
                <p className="text-sm text-gray-600">
                  Click here for directions
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <span className="relative z-10">Frequently Asked Questions</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200 -z-10"></span>
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Find answers to common questions about our precast concrete
              solutions and services.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question:
                  "What is the lead time for precast concrete products?",
                answer:
                  "Lead times vary depending on the complexity and scale of the project, but typically range from 2-6 weeks. We provide detailed timelines during the initial consultation phase.",
              },
              {
                question:
                  "Do you provide installation services for precast products?",
                answer:
                  "Yes, we offer comprehensive installation services with our trained technicians. We also provide technical support if you're working with your own installation team.",
              },
              {
                question: "Can you create custom designs for precast elements?",
                answer:
                  "Absolutely! We specialize in custom precast concrete solutions. Our design team works closely with clients to create products that meet their specific requirements and aesthetic preferences.",
              },
              {
                question: "What quality standards do your products meet?",
                answer:
                  "All our precast concrete products comply with BIS standards and international quality benchmarks. We conduct rigorous testing throughout the production process to ensure durability and performance.",
              },
              {
                question: "Do you offer warranties on your products?",
                answer:
                  "Yes, we provide warranties on all our precast concrete products, typically ranging from 15-25 years depending on the product type and application.",
              },
              {
                question: "Can I visit your facility before placing an order?",
                answer:
                  "We welcome facility visits! It's a great way to see our production process and product quality firsthand. Please contact us to schedule a visit.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariants}
                custom={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg mb-8 max-w-2xl mx-auto"
            >
              Contact our team today to discuss your precast concrete needs and
              get a personalized consultation.
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button className="bg-white text-purple-700 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:bg-gray-100">
                Call Now: +91 8884088878
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
