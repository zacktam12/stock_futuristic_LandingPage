"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Lock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { getLoginUrl } from "@/lib/config";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#trust", label: "Why Us" },
  { href: "#demo", label: "Demo" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className="border-b border-gray-800 backdrop-blur-sm bg-black/95 fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative h-14 w-auto flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo.png"
              alt="StockPilot Logo"
              width={180}
              height={56}
              className="object-contain h-10 w-auto"
              priority
            />
          </motion.div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="text-base font-semibold text-gray-300 hover:text-white transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-gray-800"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-3 w-0 h-0.5 bg-white group-hover:w-[calc(100%-1.5rem)] transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ThemeToggle />
          <Link href={getLoginUrl()} target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="hidden sm:inline-flex border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-medium rounded-lg px-4 py-2 transition-all duration-300 text-sm"
              >
                Existing Users
              </Button>
            </motion.div>
          </Link>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-sm"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="block text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          
          {/* Mobile Login Button */}
          <motion.div
            className="pt-3 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Link href={getLoginUrl()} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-semibold rounded-xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login <Lock className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
