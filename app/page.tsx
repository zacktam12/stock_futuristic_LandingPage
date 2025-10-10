import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <DemoSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
