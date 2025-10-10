import React from "react";
import Link from "next/link";
import { Building2, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3f51b5] to-[#303f9f] rounded-xl flex items-center justify-center shadow-medium">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight font-heading text-gray-900 dark:text-white">
                StockPilot
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                v2.5.0 • Modern Inventory Management
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} StockPilot. All rights reserved. Built with ❤️ for modern businesses.
        </div>
      </div>
    </footer>
  );
}

