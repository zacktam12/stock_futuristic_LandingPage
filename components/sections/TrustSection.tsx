"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Zap, Shield, Clock } from "lucide-react";
import { AnimatedBadge } from "@/components/ui/animated-badge";

const stats = [
  {
    icon: Users,
    value: "Growing",
    label: "User Base",
    color: "blue",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
    color: "green",
  },
  {
    icon: Zap,
    value: "Fast",
    label: "Performance",
    color: "amber",
  },
  {
    icon: Shield,
    value: "Enterprise",
    label: "Security",
    color: "purple",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-white dark:bg-[#121212] relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedBadge icon={Award} text="Trusted by Thousands" color="indigo" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-6 font-heading text-gray-900 dark:text-white">
            Built for Scale, Trusted for Reliability
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Join thousands of businesses worldwide that trust StockPilot for their inventory management needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-soft hover:shadow-medium transition-all duration-300">
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

