"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart4,
  Package,
  Users,
  Truck,
  Receipt,
  ShoppingCart,
  AlertTriangle,
  DollarSign,
  UserCircle,
  Settings,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedBadge } from "@/components/ui/animated-badge";

const features = [
  {
    title: "Real-time Dashboard",
    description:
      "Monitor your business with live KPIs, revenue tracking, and interactive analytics dashboard.",
    icon: <BarChart4 className="h-10 w-10 text-white" />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Product Management",
    description:
      "Complete inventory control with product tracking, categories, and stock level monitoring.",
    icon: <Package className="h-10 w-10 text-white" />,
    gradient: "from-green-500 to-green-700",
  },
  {
    title: "Customer Database",
    description:
      "Manage customer relationships with comprehensive customer profiles and sales history.",
    icon: <Users className="h-10 w-10 text-white" />,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "Supplier Management",
    description:
      "Track vendors, manage purchase orders, and analyze supplier performance metrics.",
    icon: <Truck className="h-10 w-10 text-white" />,
    gradient: "from-amber-500 to-amber-700",
  },
  {
    title: "Sales Processing",
    description:
      "Streamlined sales transactions with receipt generation and payment tracking.",
    icon: <Receipt className="h-10 w-10 text-white" />,
    gradient: "from-red-500 to-red-700",
  },
  {
    title: "Purchase Orders",
    description:
      "Automated purchase order management with supplier integration and cost tracking.",
    icon: <ShoppingCart className="h-10 w-10 text-white" />,
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    title: "Low Stock Alerts",
    description:
      "Intelligent inventory monitoring with customizable alerts and reorder suggestions.",
    icon: <AlertTriangle className="h-10 w-10 text-white" />,
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Inventory Valuation",
    description:
      "Track inventory value, cost analysis, and financial insights with detailed reporting.",
    icon: <DollarSign className="h-10 w-10 text-white" />,
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    title: "User Management",
    description:
      "Role-based access control with admin and staff permissions for secure operations.",
    icon: <UserCircle className="h-10 w-10 text-white" />,
    gradient: "from-cyan-500 to-cyan-700",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedBadge icon={Star} text="Powerful Features" color="blue" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-6 font-heading text-gray-900 dark:text-white">
            Complete Inventory Management Solution
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            StockPilot provides everything you need to manage your inventory, track sales, 
            monitor suppliers, and grow your business with powerful analytics and reporting.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                rotateX: 2,
                rotateY: 2,
              }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-soft hover:shadow-strong transition-all duration-300 group h-full relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <CardHeader className="relative">
                  <motion.div
                    className={`mb-4 w-16 h-16 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-soft`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-heading text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
