"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { redirect, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Products", link: "/products" },
  { id: 4, name: "Projects", link: "/projects" },
  { id: 5, name: "Contact", link: "/contact" },
  { id: 6, name: "Gallery", link: "/gallery" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    setActiveLink(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Framer Motion variants
  const logoVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const navItemVariants = {
    hover: { y: -3, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2 glass-effect shadow-lg" : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              className="flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="Tirupati Precast"
                width={150}
                height={60}
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10 w-auto" : "h-12 w-auto"
                }`}
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 hover:text-blue-500">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                variants={navItemVariants}
                whileHover="hover"
              >
                <Link
                  href={item.link}
                  className={`relative font-medium text-base transition-colors  ${
                    pathname.includes(item.link) && item.link !== "/"
                      ? "text-purple-700 font-semibold"
                      : "text-gray-800 hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeLink === item.link
                        ? "w-full text-primary/80"
                        : "w-0"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={() => {
                toast.success(
                  "Please fill out the form to get a quote or contact us."
                );
                redirect("/contact");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg-1 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Get Quote
            </motion.button>
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-20"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className="w-6 h-0.5 bg-gray-800 block mb-1.5 transition-all"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-gray-800 block mb-1.5 transition-all"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className="w-6 h-0.5 bg-gray-800 block transition-all"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="fixed top-0 right-0 h-full w-[75%] glass-effect z-40 md:hidden"
      >
        <div className="pt-20 px-6 h-full flex flex-col">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`text-lg ${
                  activeLink === item.link
                    ? "text-primary font-semibold"
                    : "text-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-auto mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg-1 text-white px-5 py-2 w-full rounded-full shadow-md"
            >
              Get Quote
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Background overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
