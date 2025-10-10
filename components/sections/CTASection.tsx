"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/lib/config";
import { AnimatedButton } from "@/components/ui/animated-button";

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-3xl p-10 border border-blue-200 dark:border-blue-900 backdrop-blur-sm shadow-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-soft border border-blue-100 dark:border-blue-900">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-4 w-4" />
                </motion.div>
                Ready to Transform Your Business?
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Start Your Free Trial Today
            </motion.h2>

            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Experience the power of StockPilot's professional inventory management 
              system. Start your free trial and see the difference today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
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
                  Request Enterprise Demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 font-semibold rounded-lg px-8 py-3 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact Sales Team
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {["Custom implementation", "Enterprise security", "Dedicated support"].map((text, i) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
