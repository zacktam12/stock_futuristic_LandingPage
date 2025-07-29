import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden ${className || ""}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.2),transparent_40%)]" />
        <div className="grid grid-cols-12 h-full opacity-20 dark:opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-gray-300 dark:border-white/5 h-full"
            />
          ))}
        </div>
        <div className="grid grid-rows-12 w-full h-full opacity-20 dark:opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-b border-gray-300 dark:border-white/5 w-full"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Next-Gen Inventory Control
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            A futuristic stock management system designed for the modern
            enterprise. Real-time tracking, powerful analytics, and seamless
            integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Login to Dashboard <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 dark:hover:bg-purple-500/20"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent z-10 h-20 bottom-0 top-auto" />
        <Image
          src="/Inventory-Management.jpg"
          alt="Dashboard Preview"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-t-lg shadow-2xl shadow-blue-500/10"
        />
      </div>
    </section>
  );
};

export default HeroSection;

