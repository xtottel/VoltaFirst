"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/ui/Button";
import Image from "next/image";
import { Container } from "./Container";

import {
  Radio,
  X,
  AlignRight,
} from "lucide-react";

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Politics",
    href: "/politics",
  },
  {
    name: "Sports",
    href: "/sports",
  },
  {
    name: "Business",
    href: "/business",
  },
  {
    name: "LifeStyle",
    href: "/lifestyle",
  },
  {
    name: "Opinion",
    href: "/opinion",
  },
];

export function ExaHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/80 dark:border-gray-800/80 shadow-sm"
          : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeAllMenus}
          >
            <Image
              src="/images/logo.png" // Update with your blog logo path
              width={120}
              height={40}
              alt="Blog Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Live Button - Only remaining button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                variant="live"
                className="gap-2 px-3 py-2"
                onClick={() => (window.location.href = "/live")}
              >
                <Radio className="w-4 h-4" />
                <span>Live</span>
                {/* <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span> */}
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <AlignRight className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeAllMenus}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full max-w-md bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-xl z-50 border-l border-gray-200/80 dark:border-gray-800/80"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 h-20">
                {/* Blog Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={closeAllMenus}
                >
                  <Image
                    src="https://cdn.sendexa.co/images/logo/exaweb.png" // Update with your blog logo path
                    width={120}
                    height={40}
                    alt="Blog Logo"
                    className="h-8 w-auto"
                  />
                </Link>

                <button
                  onClick={closeAllMenus}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-[calc(100vh-5rem)] overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block p-4 rounded-lg transition-all ${
                        pathname === item.href
                          ? "bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={closeAllMenus}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}

                  {/* Mobile Live Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2"
                  >
                    <Button
                      variant="live"
                      className="w-full gap-2 justify-start pl-4"
                      onClick={() => {
                        closeAllMenus();
                        window.location.href = "/live";
                      }}
                    >
                      <Radio className="w-4 h-4" />
                      <span>Live</span>
                      {/* <span className="ml-auto h-2 w-2 rounded-full bg-red-500 animate-pulse"></span> */}
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}