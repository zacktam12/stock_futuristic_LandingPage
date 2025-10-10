import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/lib/config";

export function CTASection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#3f51b5]/10 to-[#6366f1]/10 dark:from-[#3f51b5]/20 dark:to-[#6366f1]/20 rounded-3xl p-10 border border-[#3f51b5]/20 dark:border-[#3f51b5]/30 backdrop-blur-sm shadow-strong">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-[#3f51b5] px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-soft">
              <Zap className="h-4 w-4" />
              Ready to Transform Your Business?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-900 dark:text-white">
              Start Your Free Trial Today
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of businesses that have streamlined their
              operations with our next-generation stock management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLoginUrl()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#3f51b5] hover:bg-[#303f9f] text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-xl px-8 py-3 text-lg"
              >
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

