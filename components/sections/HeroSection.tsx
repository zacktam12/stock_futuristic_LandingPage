import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(63,81,181,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(63,81,181,0.2),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.2),transparent_40%)]" />
        <div className="grid grid-cols-12 h-full opacity-10 dark:opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-gray-300 dark:border-white/5 h-full"
            />
          ))}
        </div>
        <div className="grid grid-rows-12 w-full h-full opacity-10 dark:opacity-20">
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
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Next-Generation Inventory Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3f51b5] to-[#6366f1] dark:from-[#3f51b5] dark:to-[#6366f1]">
            Streamline Your Stock Control
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            A modern, intelligent inventory management system designed for the digital age. 
            Real-time tracking, powerful analytics, and seamless integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href={getLoginUrl()} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#3f51b5] hover:bg-[#303f9f] text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-medium hover:shadow-strong transition-all duration-300"
              >
                Get Started Free <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-xl px-8 py-3 text-lg"
            >
              Watch Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent z-10 h-20 bottom-0 top-auto" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-strong border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Image
              src="/Inventory-Management.jpg?height=600&width=1200"
              alt="StockPilot Dashboard Preview"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

