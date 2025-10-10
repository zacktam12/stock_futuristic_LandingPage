import React from "react";
import { Boxes, Database, QrCode, Shield, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const useCases = [
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
];

export function UseCasesSection() {
  return (
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
          {useCases.map((useCase, index) => (
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
  );
}

