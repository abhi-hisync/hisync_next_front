"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  ArrowRight,
  Play,
  Eye,
  Users,
  TrendingUp,
  Shield,
  Rocket,
} from "lucide-react";
import PremiumButton from "@/components/PremiumButton";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface HeroSectionProps {
  showTooltip: string | null;
  setShowTooltip: (tooltip: string | null) => void;
}

// export default function HeroSection({ showTooltip, setShowTooltip }: HeroSectionProps) {
//   const [showVideo, setShowVideo] = useState(false); // <-- Add this line

export default function HeroSection({
  showTooltip,
  setShowTooltip,
}: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [45, 52, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10"> 
        <div className="text-center space-y-8">
          {/* Badge */}
          <div>
            <Badge 
              variant="outline" 
              className="mb-6 px-4 py-2 bg-slate-800/60 backdrop-blur-sm text-slate-300 border-slate-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="w-4 h-4 mr-2 text-blue-400" />
              Ready to Automate your Business
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 leading-tight tracking-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Holistically
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            We are your agile end-to-end partner: Ex-Big 4 consultants streamline 
            operations and elite engineers build custom ERP Solutions. 
            <span className="text-slate-100 font-medium">One Team</span> for any Business Size, 
            designed to scale with you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <PremiumButton 
              size="lg" 
              className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl group transition-all duration-300"
              onClick={() => { console.log("Get Started clicked"); }}
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </PremiumButton>
            
            <div className="relative group">
              <PremiumButton
                variant="outline"
                size="lg"
                icon={<Play className="w-5 h-5" />}
                iconPosition="left"
                className="px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 text-slate-100 hover:bg-white/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                onClick={() => {
                  setShowTooltip('demo');
                  setTimeout(() => setShowTooltip(null), 3000);
                }}
              >
                Watch Demo
              </PremiumButton>
              
              {/* Tooltip */}
              {showTooltip === 'demo' && (
                <div 
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-xl z-50 whitespace-nowrap text-sm font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>2-minute demo coming soon!</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
                </div>
              )}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "Fresh",
                label: "Startup",
                icon: <Rocket className="w-5 h-5" />,
              },
              {
                value: "100%",
                label: "Dedication",
                icon: <TrendingUp className="w-5 h-5" />,
              },
              {
                value: "24/7",
                label: "Available",
                icon: <Shield className="w-5 h-5" />,
              },
              {
                value: "Ready",
                label: "To Scale",
                icon: <Users className="w-5 h-5" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="
                  relative bg-slate-800/70
                  backdrop-blur-md rounded-2xl p-6
                  border border-slate-600
                  shadow-lg hover:shadow-2xl hover:border-blue-500 hover:scale-[1.04]
                  hover:shadow-[0_4px_24px_0_rgba(59,130,246,0.25)]
                  transition-all duration-300 cursor-pointer group
                "
                onClick={() => {
                  setShowTooltip(`stat-${index}`);
                  setTimeout(() => setShowTooltip(null), 2000);
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-blue-400 group-hover:text-blue-500 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-base text-slate-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                {/* Stat Tooltip */}
                {showTooltip === `stat-${index}` && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md shadow-xl z-50 whitespace-nowrap text-xs font-medium">
                    Click for details
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-800" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

