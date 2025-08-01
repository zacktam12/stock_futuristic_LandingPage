import Link from "next/link";
import Image from "next/image";
import {
  BarChart4,
  Boxes,
  ChevronRight,
  Database,
  Github,
  Layers,
  Lock,
  QrCode,
  Scan,
  Shield,
  Users,
  Building2,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Smartphone,
  Cloud,
  Server,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Navbar */}
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
            <Link href="/login">
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

      {/* Hero Section */}
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
              <Button
                size="lg"
                className="bg-[#3f51b5] hover:bg-[#303f9f] text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-medium hover:shadow-strong transition-all duration-300"
              >
                Get Started Free <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
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

      {/* Features Section */}
      <section id="features" className="py-20 relative bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Powerful Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-900 dark:text-white">
              Everything You Need to Succeed
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Our comprehensive system combines cutting-edge technology with intuitive design
              to deliver a seamless inventory management experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time Stock Tracking",
                description:
                  "Monitor inventory levels across multiple locations with live updates and intelligent alerts.",
                icon: <Layers className="h-10 w-10 text-[#3f51b5]" />,
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "Smart Barcode Scanning",
                description:
                  "Quickly process items with built-in barcode and QR code scanning capabilities.",
                icon: <Scan className="h-10 w-10 text-green-500" />,
                gradient: "from-green-500 to-green-600",
              },
              {
                title: "Role-Based Access Control",
                description:
                  "Control who can view and modify data with customizable permission levels.",
                icon: <Users className="h-10 w-10 text-purple-500" />,
                gradient: "from-purple-500 to-purple-600",
              },
              {
                title: "Purchase & Sales Automation",
                description:
                  "Streamline your workflow with automated purchase orders and sales processing.",
                icon: <Database className="h-10 w-10 text-amber-500" />,
                gradient: "from-amber-500 to-amber-600",
              },
              {
                title: "Enterprise Security",
                description:
                  "Bank-grade security with encryption, multi-factor authentication, and compliance.",
                icon: <Shield className="h-10 w-10 text-red-500" />,
                gradient: "from-red-500 to-red-600",
              },
              {
                title: "Advanced Analytics",
                description:
                  "Gain insights with customizable dashboards and exportable reports.",
                icon: <BarChart4 className="h-10 w-10 text-cyan-500" />,
                gradient: "from-cyan-500 to-cyan-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className={`mb-4 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-heading text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Server className="h-4 w-4" />
              Built with Modern Tech
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-900 dark:text-white">
              Powered By Cutting-Edge Technology
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Built with the latest technologies to ensure performance,
              security, and scalability for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              { name: "React", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30" },
              { name: "Node.js", color: "text-green-500 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/30" },
              { name: "Express", color: "text-gray-500 dark:text-gray-400", bg: "bg-gray-50 dark:bg-gray-900/30" },
              { name: "MySQL", color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/30" },
              { name: "Redux", color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/30" },
              { name: "Tailwind", color: "text-cyan-500 dark:text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-900/30" },
              { name: "JWT", color: "text-pink-500 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-900/30" },
              { name: "WebSockets", color: "text-yellow-500 dark:text-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/30" },
              { name: "Docker", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30" },
              { name: "GraphQL", color: "text-pink-500 dark:text-pink-400", bg: "bg-pink-50 dark:bg-pink-900/30" },
              { name: "TypeScript", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30" },
              { name: "Jest", color: "text-red-500 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/30" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div
                  className={`w-16 h-16 rounded-xl ${tech.bg} flex items-center justify-center mb-3 ${tech.color} border border-gray-200 dark:border-gray-700 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110`}
                >
                  <span className="text-2xl font-bold">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots/Demo Section */}
      <section id="demo" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Smartphone className="h-4 w-4" />
              See It In Action
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-900 dark:text-white">
              Experience the Interface
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Explore the intuitive interface and powerful features of our stock
              management system.
            </p>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  title: "Dashboard Overview",
                  description: "Real-time metrics and KPIs at a glance",
                  image: "/dashboard-overview.png",
                  features: ["Live Analytics", "Quick Actions", "Smart Alerts"],
                },
                {
                  title: "Product Management",
                  description: "Easily add, edit, and categorize inventory items",
                  image: "/product-management.png",
                  features: ["Bulk Operations", "Advanced Filters", "Image Upload"],
                },
                {
                  title: "Sales Processing",
                  description: "Streamlined checkout and order management",
                  image: "/sales-processing.png",
                  features: ["Quick Checkout", "Payment Integration", "Receipt Generation"],
                },
                {
                  title: "Analytics & Reports",
                  description: "Customizable charts and exportable data",
                  image: "/analytics-reports.png",
                  features: ["Interactive Charts", "Export Options", "Scheduled Reports"],
                },
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto rounded-t-2xl"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 font-heading text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="h-4 w-4" />
              Industry Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-900 dark:text-white">
              Tailored for Every Industry
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Tailored for various industries with specific inventory management
              needs and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Retail",
                description:
                  "Manage multiple stores, track bestsellers, and optimize stock levels with real-time insights.",
                icon: <Boxes className="h-8 w-8" />,
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "Warehousing",
                description:
                  "Organize large inventories with location tracking and batch processing capabilities.",
                icon: <Database className="h-8 w-8" />,
                gradient: "from-green-500 to-green-600",
              },
              {
                title: "Pharmaceuticals",
                description:
                  "Track expiration dates, manage regulated items, and ensure compliance with industry standards.",
                icon: <Shield className="h-8 w-8" />,
                gradient: "from-purple-500 to-purple-600",
              },
              {
                title: "Electronics",
                description:
                  "Handle serial numbers, warranties, and component tracking with advanced features.",
                icon: <QrCode className="h-8 w-8" />,
                gradient: "from-amber-500 to-amber-600",
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300 group hover:scale-105"
              >
                <CardHeader className="pb-2">
                  <div className={`mb-3 w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300`}>
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-gray-900 dark:text-white">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                <Button
                  size="lg"
                  className="bg-[#3f51b5] hover:bg-[#303f9f] text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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

      {/* Footer */}
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
    </div>
  );
}
