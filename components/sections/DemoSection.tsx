"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X, Smartphone } from "lucide-react";
import { AnimatedBadge } from "@/components/ui/animated-badge";

const demoVideo = {
  title: "StockPilot Demo Video",
  description: "Watch our comprehensive demo showcasing all major features and workflows of StockPilot",
  thumbnail: "/Inventory-Management.jpg", // This will be your video thumbnail/placeholder
  videoUrl: "/stockpilot-demo.mp4", // Replace with your actual video URL
  features: ["Complete App Walkthrough", "Real Features Demo", "User Interface Tour", "Workflow Examples"],
};

export function DemoSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="demo" className="py-20 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedBadge icon={Smartphone} text="See It In Action" color="green" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-6 font-heading text-gray-900 dark:text-white">
            See StockPilot in Action
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Discover how StockPilot streamlines your inventory management with 
            professional-grade features and intuitive design.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-strong hover:shadow-xl transition-all duration-300">
            {/* Video Preview */}
            <motion.div
              className="relative cursor-pointer group overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              onClick={() => openVideo(demoVideo.videoUrl)}
            >
              {/* Autoplay Video Preview */}
              <video
                className="w-full h-auto object-cover"
                width={800}
                height={450}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={demoVideo.thumbnail}
              >
                <source src={demoVideo.videoUrl} type="video/mp4" />
                <source src={demoVideo.videoUrl} type="video/webm" />
                {/* Fallback image if video doesn't load */}
                <Image
                  src={demoVideo.thumbnail}
                  alt={demoVideo.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-auto"
                />
              </video>
              
              {/* Video Play Button Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-white/95 dark:bg-gray-800/95 rounded-full p-6 shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="h-12 w-12 text-blue-600 dark:text-blue-400 ml-1" fill="currentColor" />
                </motion.div>
              </motion.div>
              
              {/* Video indicator */}
              <div className="absolute top-6 right-6 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Watch Demo
              </div>
              
              {/* Duration indicator */}
              <div className="absolute bottom-6 right-6 bg-black/70 text-white px-2 py-1 rounded text-sm">
                5:30
              </div>
              
              {/* Live preview indicator */}
              <div className="absolute top-6 left-6 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium shadow-lg flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Live Preview
              </div>
            </motion.div>

            {/* Video Info */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900 dark:text-white">
                {demoVideo.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                {demoVideo.description}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {demoVideo.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeVideo}
        >
          <motion.div
            className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              onClick={closeVideo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Video Player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                preload="metadata"
              >
                <source src={selectedVideo} type="video/mp4" />
                <source src={selectedVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                StockPilot Demo Video
              </h3>
              <p className="text-white/80 text-sm">
                Watch our comprehensive demo showcasing all major features and workflows
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
