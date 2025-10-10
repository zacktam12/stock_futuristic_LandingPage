import React from "react";
import { Server } from "lucide-react";

const techStack = [
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
];

export function TechStackSection() {
  return (
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
          {techStack.map((tech, index) => (
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
  );
}

