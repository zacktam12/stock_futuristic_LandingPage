import React from "react";

interface TechStackProps {
  className?: string;
}

const TechStackSection: React.FC<TechStackProps> = ({ className }) => {
  const techStack = [
    { name: "React", color: "text-blue-500 dark:text-blue-400" },
    { name: "Node.js", color: "text-green-500 dark:text-green-400" },
    { name: "Express", color: "text-gray-500 dark:text-gray-400" },
    { name: "MySQL", color: "text-orange-500 dark:text-orange-400" },
    { name: "Redux", color: "text-purple-500 dark:text-purple-400" },
    { name: "Tailwind", color: "text-cyan-500 dark:text-cyan-400" },
    { name: "JWT", color: "text-pink-500 dark:text-pink-400" },
    { name: "WebSockets", color: "text-yellow-500 dark:text-yellow-400" },
    { name: "Docker", color: "text-blue-500 dark:text-blue-400" },
    { name: "GraphQL", color: "text-pink-500 dark:text-pink-400" },
    { name: "TypeScript", color: "text-blue-500 dark:text-blue-400" },
    { name: "Jest", color: "text-red-500 dark:text-red-400" },
  ];

  return (
    <section
      id="tech"
      className={`py-20 bg-gradient-to-b from-transparent to-blue-50/80 dark:to-blue-950/20 ${className || ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Powered By Modern Tech
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built with the latest technologies to ensure performance, security, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
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
  );
};

export default TechStackSection;

