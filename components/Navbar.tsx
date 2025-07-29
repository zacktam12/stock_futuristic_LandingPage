import React from "react";
import Link from "next/link";
import { Boxes, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={`border-b border-gray-200 dark:border-white/10 backdrop-blur-sm bg-white/80 dark:bg-black/50 fixed top-0 w-full z-50 ${className || ""}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Boxes className="h-8 w-8 text-blue-500" />
          <span className="font-bold text-xl tracking-tight font-mono">
            StockX
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#tech"
            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Tech Stack
          </Link>
          <Link
            href="#demo"
            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Demo
          </Link>
          <Link
            href="#use-cases"
            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Use Cases
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-500/20"
            >
              Login <Lock className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

