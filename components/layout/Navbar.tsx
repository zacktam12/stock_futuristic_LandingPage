import React from "react";
import Link from "next/link";
import { Building2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { getLoginUrl } from "@/lib/config";

export function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 fixed top-0 w-full z-50 shadow-soft">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#3f51b5] to-[#303f9f] rounded-xl flex items-center justify-center shadow-medium">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-xl tracking-tight font-heading text-gray-900 dark:text-white">
              StockPilot
            </span>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              Inventory Management
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#3f51b5] dark:hover:text-[#3f51b5] transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#tech"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#3f51b5] dark:hover:text-[#3f51b5] transition-colors duration-200"
          >
            Tech Stack
          </Link>
          <Link
            href="#demo"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#3f51b5] dark:hover:text-[#3f51b5] transition-colors duration-200"
          >
            Demo
          </Link>
          <Link
            href="#use-cases"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#3f51b5] dark:hover:text-[#3f51b5] transition-colors duration-200"
          >
            Use Cases
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href={getLoginUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[#3f51b5] text-[#3f51b5] dark:text-[#3f51b5] hover:bg-[#3f51b5]/10 dark:hover:bg-[#3f51b5]/20 font-medium rounded-xl"
            >
              Login <Lock className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

