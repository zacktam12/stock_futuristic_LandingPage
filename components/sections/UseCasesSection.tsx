"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, Database, QrCode, Shield, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedBadge } from "@/components/ui/animated-badge";

const useCases = [
  {
    title: "Retail",
    description:
      "Manage multiple stores, track bestsellers, and optimize stock levels with real-time insights.",
    icon: <Boxes className="h-8 w-8 text-white" />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Warehousing",
    description:
      "Organize large inventories with location tracking and batch processing capabilities.",
    icon: <Database className="h-8 w-8 text-white" />,
    gradient: "from-green-500 to-green-700",
  },
  {
    title: "Pharmaceuticals",
    description:
      "Track expiration dates, manage regulated items, and ensure compliance with industry standards.",
    icon: <Shield className="h-8 w-8 text-white" />,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "Electronics",
    description:
      "Handle serial numbers, warranties, and component tracking with advanced features.",
    icon: <QrCode className="h-8 w-8 text-white" />,
    gradient: "from-amber-500 to-amber-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="py-20 bg-white dark:bg-[#121212] relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedBadge icon={Globe} text="Industry Solutions" color="purple" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-6 font-heading text-gray-900 dark:text-white">
            Tailored for Every Industry
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Tailored for various industries with specific inventory management
            needs and compliance requirements.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Card
                className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-soft hover:shadow-strong transition-all duration-300 group h-full relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                <CardHeader className="pb-2 relative">
                  <motion.div
                    className={`mb-3 w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-soft`}
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {useCase.icon}
                  </motion.div>
                  <CardTitle className="text-lg font-heading text-gray-900 dark:text-white">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px -5px rgba(59, 130, 246, 0.3)`,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
