"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/lib/config";
import { AnimatedButton } from "@/components/ui/animated-button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Inventory-Management.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight text-white"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Professional Inventory Management SaaS
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            StockPilot delivers enterprise-grade inventory management with real-time analytics, 
            automated workflows, and comprehensive reporting for growing businesses.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-8 py-3 text-lg shadow-soft hover:shadow-medium border border-blue-500 hover:border-blue-600 transition-all duration-200"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Demo
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg px-8 py-3 text-lg bg-transparent"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-8 text-sm text-white/80"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            {["Enterprise-grade security", "Custom implementation", "Dedicated support"].map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
