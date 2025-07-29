"use client";

import { motion } from "framer-motion";
import { 
  Settings, 
  ArrowRight, 
  ExternalLink,
  TrendingUp
} from "lucide-react";

interface PremiumDashboardCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  phase?: string;
  gradient: string;
  isLight?: boolean;
  features?: string[];
  primaryAction?: string;
  secondaryAction?: string;
  className?: string;
}

export default function PremiumDashboardCard({
  title,
  subtitle,
  description,
  icon,
  phase = "1",
  gradient = "from-blue-600 to-purple-600",
  isLight = true,
  features = ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  primaryAction = "Get Started",
  secondaryAction = "Learn More",
  className = ""
}: PremiumDashboardCardProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden relative transition-all duration-300 hover:shadow-3xl ${className}`}
      whileHover={{ y: -2 }}
    >
      <div className="grid lg:grid-cols-[65fr_35fr] gap-0 h-[400px] relative">
        
        {/* Phase Badge - Top Right */}
        <div className="absolute top-6 right-6 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`px-4 py-2 rounded-full backdrop-blur-md border shadow-lg ${
              isLight 
                ? 'bg-white/95 border-white/60 text-slate-700' 
                : 'bg-slate-800/95 border-slate-700/60 text-white'
            }`}
          >
            <span className="text-xs font-bold tracking-wider">
              PHASE {phase}
            </span>
          </motion.div>
        </div>

        {/* Left Content Section - 65% */}
        <div className={`${isLight 
          ? 'bg-gradient-to-br from-white via-slate-50/50 to-slate-100/30' 
          : 'bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900'
          } px-10 py-8 flex flex-col justify-center relative overflow-hidden`}>

          <div className="space-y-6 relative z-10">
            {/* Icon and Subtitle */}
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {icon}
              </motion.div>
              <div className={`text-sm font-semibold uppercase tracking-wider ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                {subtitle}
              </div>
            </div>
            
            {/* Title and Description */}
            <div className="space-y-3">
              <h3 className={`text-3xl md:text-4xl font-bold leading-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {title}
              </h3>
              <p className={`text-base leading-relaxed max-w-md ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                {description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(71, 85, 105, 0.7)' 
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm border cursor-pointer transition-all duration-300 ${
                    isLight 
                      ? 'bg-white/70 border-slate-200/70 hover:border-slate-300 hover:shadow-sm' 
                      : 'bg-slate-700/50 border-slate-600/50 hover:border-slate-500 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} shadow-sm`}></div>
                  <span className={`text-sm font-medium ${
                    isLight ? 'text-slate-700' : 'text-slate-200'
                  }`}>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  `bg-gradient-to-r ${gradient} text-white hover:shadow-xl shadow-lg`
                }`}
              >
                {primaryAction}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 ${
                  isLight
                    ? 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md'
                    : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50 hover:shadow-lg'
                }`}
              >
                {secondaryAction}
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Animated Pattern Section - 35% */}
        <div className={`relative overflow-hidden ${isLight 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100'
          }`}>
          
          {/* Primary Animated Diagonal Stripes */}
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                ${isLight ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'} 0px,
                ${isLight ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'} 2px,
                transparent 2px,
                transparent 50px
              )`,
              backgroundSize: '71px 71px'
            }}
          />

          {/* Secondary Pattern Layer */}
          <motion.div 
            className="absolute inset-0 opacity-60"
            animate={{ 
              backgroundPosition: ['100% 0%', '0% 100%'],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                ${isLight ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'} 0px,
                ${isLight ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'} 1px,
                transparent 1px,
                transparent 70px
              )`,
              backgroundSize: '99px 99px'
            }}
          />

          {/* Radial Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 50%, transparent 0%, ${
                isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'
              } 100%)`
            }}
          />

          {/* Central Neumorphic Floating Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.15,
                y: -6,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Main Neumorphic Container */}
              <div 
                className={`w-24 h-24 rounded-2xl relative ${
                  isLight 
                    ? 'bg-slate-800' 
                    : 'bg-slate-100'
                }`}
                style={{
                  boxShadow: isLight 
                    ? '16px 16px 32px rgba(0, 0, 0, 0.4), -16px -16px 32px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : '16px 16px 32px rgba(0, 0, 0, 0.15), -16px -16px 32px rgba(255, 255, 255, 0.9), inset 0 0 0 1px rgba(0, 0, 0, 0.05)'
                }}
              >
                
                {/* Inner Icon Container */}
                <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-95`}>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                    className="text-white scale-110"
                  >
                    {icon}
                  </motion.div>
                </div>

                {/* Inner Glow Effect */}
                <div 
                  className="absolute inset-3 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4), transparent 60%)`
                  }}
                />
              </div>

              {/* Orbiting Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                  style={{
                    transformOrigin: '50% 50%'
                  }}
                >
                  <div
                    className={`absolute w-1 h-1 rounded-full ${
                      isLight ? 'bg-white/30' : 'bg-slate-600/40'
                    }`}
                    style={{
                      top: `${10 + i * 5}%`,
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Corner Decorative Element */}
          <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
            <div 
              className={`w-full h-full ${isLight ? 'bg-white' : 'bg-slate-700'}`}
              style={{
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
              }}
            />
          </div>

          {/* Bottom Corner Element */}
          <div className="absolute bottom-0 left-0 w-12 h-12 opacity-10">
            <div 
              className={`w-full h-full ${isLight ? 'bg-white' : 'bg-slate-700'}`}
              style={{
                clipPath: 'polygon(0 100%, 0 0, 100% 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
