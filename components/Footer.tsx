import React from "react";
import Link from "next/link";
import { Boxes, Github } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`border-t border-gray-200 dark:border-white/10 py-10 bg-white dark:bg-black ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Boxes className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-lg tracking-tight font-mono">
              StockX
            </span>
            <span className="text-xs text-gray-500 ml-2">v2.5.0</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} StockX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

