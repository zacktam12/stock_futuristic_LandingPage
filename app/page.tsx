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
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      {/* Navbar */}
      <header className="border-b border-gray-200 dark:border-white/10 backdrop-blur-sm bg-white/80 dark:bg-black/50 fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Boxes className="h-8 w-8 text-blue-500" />
            <span className="font-bold text-xl tracking-tight font-mono">
              StockPilot
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
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
            src="/Inventory-Management.jpg?height=600&width=1200"
            alt="Dashboard Preview"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-t-lg shadow-2xl shadow-blue-500/10"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              Powerful Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our system combines cutting-edge technology with intuitive design
              to deliver a seamless inventory management experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time Stock Tracking",
                description:
                  "Monitor inventory levels across multiple locations with live updates and alerts.",
                icon: <Layers className="h-10 w-10 text-blue-500" />,
              },
              {
                title: "Barcode Scanning",
                description:
                  "Quickly process items with built-in barcode and QR code scanning capabilities.",
                icon: <Scan className="h-10 w-10 text-green-500" />,
              },
              {
                title: "Role-Based Access",
                description:
                  "Control who can view and modify data with customizable permission levels.",
                icon: <Users className="h-10 w-10 text-purple-500" />,
              },
              {
                title: "Purchase & Sales Automation",
                description:
                  "Streamline your workflow with automated purchase orders and sales processing.",
                icon: <Database className="h-10 w-10 text-yellow-500" />,
              },
              {
                title: "Advanced Security",
                description:
                  "Enterprise-grade security with encryption and multi-factor authentication.",
                icon: <Shield className="h-10 w-10 text-red-500" />,
              },
              {
                title: "Analytics & Reporting",
                description:
                  "Gain insights with customizable dashboards and exportable reports.",
                icon: <BarChart4 className="h-10 w-10 text-cyan-500" />,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-50/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 backdrop-blur-sm hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-mono">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
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
        className="py-20 bg-gradient-to-b from-transparent to-blue-50/80 dark:to-blue-950/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              Powered By Modern Tech
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with the latest technologies to ensure performance,
              security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              { name: "React", color: "text-blue-500 dark:text-blue-400" },
              { name: "Node.js", color: "text-green-500 dark:text-green-400" },
              { name: "Express", color: "text-gray-500 dark:text-gray-400" },
              { name: "MySQL", color: "text-orange-500 dark:text-orange-400" },
              { name: "Redux", color: "text-purple-500 dark:text-purple-400" },
              { name: "Tailwind", color: "text-cyan-500 dark:text-cyan-400" },
              { name: "JWT", color: "text-pink-500 dark:text-pink-400" },
              {
                name: "WebSockets",
                color: "text-yellow-500 dark:text-yellow-400",
              },
              { name: "Docker", color: "text-blue-500 dark:text-blue-400" },
              { name: "GraphQL", color: "text-pink-500 dark:text-pink-400" },
              { name: "TypeScript", color: "text-blue-500 dark:text-blue-400" },
              { name: "Jest", color: "text-red-500 dark:text-red-400" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-3 ${tech.color} border border-gray-200 dark:border-gray-700 shadow-sm`}
                >
                  <span className="text-2xl font-bold">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-mono">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots/Demo Section */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              See It In Action
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                },
                {
                  title: "Product Management",
                  description:
                    "Easily add, edit, and categorize inventory items",
                  image: "/product-management.png",
                },
                {
                  title: "Sales Processing",
                  description: "Streamlined checkout and order management",
                  image: "/sales-processing.png",
                },
                {
                  title: "Analytics & Reports",
                  description: "Customizable charts and exportable data",
                  image: "/analytics-reports.png",
                },
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-gray-50/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto rounded-t-lg"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 font-mono">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="py-20 bg-gradient-to-b from-transparent to-purple-50/80 dark:to-purple-950/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              Industry Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tailored for various industries with specific inventory management
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Retail",
                description:
                  "Manage multiple stores, track bestsellers, and optimize stock levels.",
                icon: <Boxes className="h-8 w-8" />,
              },
              {
                title: "Warehousing",
                description:
                  "Organize large inventories with location tracking and batch processing.",
                icon: <Database className="h-8 w-8" />,
              },
              {
                title: "Pharmaceuticals",
                description:
                  "Track expiration dates, manage regulated items, and ensure compliance.",
                icon: <Shield className="h-8 w-8" />,
              },
              {
                title: "Electronics",
                description:
                  "Handle serial numbers, warranties, and component tracking with ease.",
                icon: <QrCode className="h-8 w-8" />,
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="bg-gray-50/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 backdrop-blur-sm hover:border-purple-200 dark:hover:border-purple-900/50 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 w-fit">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-lg font-mono">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-100/60 to-purple-100/60 dark:from-blue-900/40 dark:to-purple-900/40 rounded-2xl p-10 border border-blue-200/50 dark:border-white/10 backdrop-blur-sm shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                Ready to Transform Your Inventory Management?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that have streamlined their
                operations with our next-generation stock management system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/10 py-10 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Boxes className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-lg tracking-tight font-mono">
                StockPilot
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
            © {new Date().getFullYear()} StockPilot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
