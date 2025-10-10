import React from "react";
import Image from "next/image";
import { Smartphone, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const demoItems = [
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
];

export function DemoSection() {
  return (
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
            {demoItems.map((item, index) => (
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
  );
}

