"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSVGPattern from "./AnimatedSVGPattern";

interface EnhancedDashboardCardProps {
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
  patternType?: 'dots' | 'waves' | 'grid' | 'geometric';
  className?: string;
}

export default function EnhancedDashboardCard({
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
  patternType = 'dots',
  className = ""
}: EnhancedDashboardCardProps) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden relative group transition-all duration-500 hover:shadow-3xl ${className}`}
      whileHover={{ y: -4 }}
    >
      <div className="grid lg:grid-cols-[60fr_40fr] gap-0 h-[480px] relative">
        
        {/* Phase Badge - Top Right */}
        <div className="absolute top-6 right-6 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className={`px-5 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 ${
              isLight 
                ? 'bg-white/95 border-white/60 text-slate-700 hover:bg-white' 
                : 'bg-slate-800/95 border-slate-700/60 text-white hover:bg-slate-800'
            }`}
          >
            <span className="text-xs font-bold tracking-wider">
              PHASE {phase}
            </span>
          </motion.div>
        </div>

        {/* Left Content Section - 60% */}
        <div className={`${isLight 
          ? 'bg-gradient-to-br from-white via-slate-50/30 to-slate-100/20' 
          : 'bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900'
          } px-14 py-11 flex flex-col justify-center relative overflow-hidden`}>

          {/* Subtle Background Texture */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div 
              className={`absolute inset-0 ${isLight ? 'bg-slate-600' : 'bg-slate-400'}`}
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          <div className="space-y-8 relative z-10">
            {/* Icon and Subtitle */}
            <div className="flex items-center gap-5">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="scale-110">
                  {icon}
                </div>
              </motion.div>
              <div className="space-y-1">
                <div className={`text-sm font-semibold uppercase tracking-wider ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {subtitle}
                </div>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: '8px' }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                      className={`h-1 rounded-full bg-gradient-to-r ${gradient}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Title and Description */}
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`text-5xl md:text-6xl font-bold leading-tight ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}
              >
                {title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`text-xl leading-relaxed max-w-2xl ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {description}
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.03,
                    x: 4,
                    backgroundColor: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(71, 85, 105, 0.7)' 
                  }}
                  className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm border cursor-pointer transition-all duration-300 ${
                    isLight 
                      ? 'bg-white/70 border-slate-200/70 hover:border-slate-300 hover:shadow-md' 
                      : 'bg-slate-700/50 border-slate-600/50 hover:border-slate-500 hover:shadow-lg'
                  }`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} shadow-sm`}
                  />
                  <span className={`text-base font-medium ${
                    isLight ? 'text-slate-700' : 'text-slate-200'
                  }`}>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg ${
                  `bg-gradient-to-r ${gradient} text-white`
                }`}
              >
                {primaryAction}
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border transition-all duration-300 text-lg ${
                  isLight
                    ? 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md'
                    : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50 hover:shadow-lg'
                }`}
              >
                {secondaryAction}
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Animated Pattern Section - 40% */}
        <div className={`relative overflow-hidden ${isLight 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100'
          }`}>
          
          {/* SVG Pattern Background */}
          <AnimatedSVGPattern
            patternType={patternType}
            color={isLight ? '#ffffff' : '#1e293b'}
            opacity={isLight ? 0.08 : 0.06}
            size={60}
            isLight={isLight}
          />

          {/* Additional Animated Diagonal Stripes */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                ${isLight ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 0px,
                ${isLight ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 2px,
                transparent 2px,
                transparent 80px
              )`,
              backgroundSize: '113px 113px'
            }}
          />

          {/* Central Neumorphic Floating Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.2,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Enhanced Neumorphic Container */}
              <motion.div 
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-32 h-32 rounded-3xl relative ${
                  isLight 
                    ? 'bg-slate-800' 
                    : 'bg-slate-100'
                }`}
                style={{
                  boxShadow: isLight 
                    ? '20px 20px 60px rgba(0, 0, 0, 0.5), -20px -20px 60px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : '20px 20px 60px rgba(0, 0, 0, 0.15), -20px -20px 60px rgba(255, 255, 255, 1), inset 0 0 0 1px rgba(0, 0, 0, 0.05)'
                }}
              >
                
                {/* Inner Icon Container with Pulsing Effect */}
                <motion.div 
                  animate={{
                    boxShadow: [
                      `inset 0 0 20px rgba(59, 130, 246, 0.3)`,
                      `inset 0 0 30px rgba(59, 130, 246, 0.5)`,
                      `inset 0 0 20px rgba(59, 130, 246, 0.3)`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute inset-3 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-90`}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                    className="text-white scale-125"
                  >
                    {icon}
                  </motion.div>
                </motion.div>

                {/* Enhanced Inner Glow Effect */}
                <motion.div 
                  animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-4 rounded-2xl group-hover:opacity-80 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.6), transparent 60%)`
                  }}
                />
              </motion.div>

              {/* Enhanced Orbiting Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20 + i * 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                  style={{
                    transformOrigin: '50% 50%'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [0.8, 1.4, 0.8],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.8
                    }}
                    className={`absolute w-1.5 h-1.5 rounded-full ${
                      isLight ? 'bg-white/40' : 'bg-slate-600/50'
                    }`}
                    style={{
                      top: `${8 + i * 4}%`,
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Corner Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-15">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className={`w-full h-full ${isLight ? 'bg-white' : 'bg-slate-700'}`}
              style={{
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
              }}
            />
          </div>

          <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10">
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
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
