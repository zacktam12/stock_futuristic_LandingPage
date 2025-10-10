"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedBadgeProps {
  icon: LucideIcon;
  text: string;
  color?: "blue" | "green" | "purple" | "indigo" | "amber";
}

const colorClasses = {
  blue: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900",
  green: "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-100 dark:border-green-900",
  purple: "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-900",
  indigo: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-900",
  amber: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-900",
};

export function AnimatedBadge({ icon: Icon, text, color = "blue" }: AnimatedBadgeProps) {
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${colorClasses[color]}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      style={{
        background: `linear-gradient(135deg, ${colorClasses[color].includes('blue') ? 'rgba(59, 130, 246, 0.1)' : 'rgba(99, 102, 241, 0.1)'}, ${colorClasses[color].includes('blue') ? 'rgba(99, 102, 241, 0.1)' : 'rgba(59, 130, 246, 0.1)'})`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon className="h-4 w-4" />
      </motion.div>
      <span className="font-semibold">{text}</span>
    </motion.div>
  );
}

