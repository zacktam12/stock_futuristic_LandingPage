import React from "react";
import {
  BarChart4,
  Database,
  Layers,
  Scan,
  Shield,
  Users,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
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
];

export function FeaturesSection() {
  return (
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
          {features.map((feature, index) => (
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
  );
}

