import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <DemoSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
