"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Github, Linkedin } from "lucide-react";

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex items-center gap-3 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative h-12 w-auto flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logo.png"
                alt="StockPilot Logo"
                width={150}
                height={48}
                className="object-contain h-8 w-auto"
              />
            </motion.div>
            <div>
              <p className="text-xs text-gray-400">
                v2.5.0 • Modern Inventory Management
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Link
                href="https://www.linkedin.com/in/zekariastamiru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Link
                href="https://github.com/zacktam12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 font-medium text-sm"
                  onClick={(e) => {
                    if (link.href === "#contact") {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-6 text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          © {new Date().getFullYear()} StockPilot. All rights reserved. Built with ❤️ for modern businesses.
        </motion.div>
      </div>
    </footer>
  );
}
