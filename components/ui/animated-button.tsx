"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  icon?: boolean;
}

export function AnimatedButton({ 
  href, 
  children, 
  variant = "primary", 
  size = "lg",
  icon = false 
}: AnimatedButtonProps) {
  const isPrimary = variant === "primary";
  const isLarge = size === "lg";

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.button
        className={`
          ${isLarge ? "px-8 py-3 text-lg" : "px-6 py-2 text-base"}
          font-semibold rounded-lg transition-all duration-200 
          ${isPrimary 
            ? "bg-blue-500 hover:bg-blue-600 text-white shadow-soft hover:shadow-medium border border-blue-500 hover:border-blue-600" 
            : "bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span 
          className="flex items-center justify-center gap-2"
          initial={{ x: 0 }}
          whileHover={{ x: icon ? 5 : 0 }}
        >
          {children}
          {icon && <ArrowRight className="h-5 w-5" />}
        </motion.span>
      </motion.button>
    </Link>
  );
}

