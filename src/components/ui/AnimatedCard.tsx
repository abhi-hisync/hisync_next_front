"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

interface AnimatedCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  phase: string;
  gradient: string;
  isLight?: boolean;
  patternType: 'diagonal-stripes' | 'triangular-grid' | 'vertical-bars';
  primaryAction?: string;
  secondaryAction?: string;
  className?: string;
}

export default function AnimatedCard({
  title,
  subtitle,
  description,
  icon,
  phase,
  gradient = "from-blue-600 to-purple-600",
  isLight = true,
  patternType = 'diagonal-stripes',
  primaryAction = "Get Started",
  secondaryAction = "Learn More",
  className = ""
}: AnimatedCardProps) {

  // Diagonal Stripes Pattern Component
  const DiagonalStripes = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary animated diagonal stripes */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${isLight ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} 0px,
            ${isLight ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} 2px,
            transparent 2px,
            transparent 40px
          )`,
          backgroundSize: '56px 56px'
        }}
      />
      
      {/* Secondary gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['100% 0%', '0% 100%']
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            ${isLight ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'} 0px,
            ${isLight ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'} 1px,
            transparent 1px,
            transparent 60px
          )`,
          backgroundSize: '84px 84px'
        }}
      />
    </div>
  );

  // Triangular Grid Pattern Component
  const TriangularGrid = () => (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id={`triangular-pattern-${phase}`}
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            {/* Animated triangular shapes */}
            <motion.polygon
              points="30,5 55,45 5,45"
              fill="none"
              stroke={isLight ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
              strokeWidth="1"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: '30px 32px' }}
            />
            <motion.polygon
              points="30,5 55,45 5,45"
              fill={isLight ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'}
              animate={{
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </pattern>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill={`url(#triangular-pattern-${phase})`}
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );

  // Vertical Bars Pattern Component
  const VerticalBars = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-around">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 rounded-t-sm ${
              isLight ? 'bg-white/10' : 'bg-black/10'
            }`}
            style={{
              height: `${30 + (i % 4) * 20}%`
            }}
            animate={{
              height: [
                `${30 + (i % 4) * 20}%`,
                `${50 + (i % 3) * 25}%`,
                `${30 + (i % 4) * 20}%`
              ],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      
      {/* Sliding overlay effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(90deg, transparent 0%, ${
              isLight ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            } 50%, transparent 100%)`,
            `linear-gradient(90deg, transparent 40%, ${
              isLight ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            } 90%, transparent 100%)`,
            `linear-gradient(90deg, transparent 0%, ${
              isLight ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            } 50%, transparent 100%)`
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );

  // Render the appropriate pattern based on type
  const renderPattern = () => {
    switch (patternType) {
      case 'diagonal-stripes':
        return <DiagonalStripes />;
      case 'triangular-grid':
        return <TriangularGrid />;
      case 'vertical-bars':
        return <VerticalBars />;
      default:
        return <DiagonalStripes />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      className={`w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden relative group transition-all duration-500 hover:shadow-2xl ${className}`}
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <div className="grid lg:grid-cols-[55fr_45fr] gap-0 h-[380px] relative">
        
        {/* Phase Badge - Top Right */}
        <div className="absolute top-5 right-5 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className={`px-3 py-1.5 rounded-full backdrop-blur-md border shadow-md transition-all duration-300 ${
              isLight 
                ? 'bg-white/90 border-white/50 text-slate-700 hover:bg-white' 
                : 'bg-slate-800/90 border-slate-700/50 text-white hover:bg-slate-800'
            }`}
          >
            <span className="text-xs font-bold tracking-wider">
              PHASE {phase}
            </span>
          </motion.div>
        </div>

        {/* Left Content Section - 55% */}
        <div className={`${isLight 
          ? 'bg-gradient-to-br from-white via-slate-50/20 to-slate-100/10' 
          : 'bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900'
          } px-8 py-7 flex flex-col justify-center relative overflow-hidden`}>

          <div className="space-y-5 relative z-10">
            {/* Icon and Subtitle */}
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="scale-105">
                  {icon}
                </div>
              </motion.div>
              <div className="space-y-1">
                <div className={`text-xs font-semibold uppercase tracking-wider ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {subtitle}
                </div>
                {/* Progress indicator dots */}
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: '6px' }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                      className={`h-1 rounded-full bg-gradient-to-r ${gradient}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Title and Description */}
            <div className="space-y-3">
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`text-2xl md:text-3xl font-bold leading-tight ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}
              >
                {title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`text-sm leading-relaxed max-w-md ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {description}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg ${
                  `bg-gradient-to-r ${gradient} text-white`
                }`}
              >
                {primaryAction}
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm border transition-all duration-300 ${
                  isLight
                    ? 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md'
                    : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50 hover:shadow-lg'
                }`}
              >
                {secondaryAction}
                <ExternalLink className="w-3 h-3" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Pattern Section - 45% */}
        <div className={`relative overflow-hidden ${isLight 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100'
          }`}>
          
          {/* Animated Background Pattern */}
          {renderPattern()}

          {/* Central Neumorphic Floating Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.15,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Neumorphic Container */}
              <motion.div 
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-20 h-20 rounded-2xl relative ${
                  isLight 
                    ? 'bg-slate-800' 
                    : 'bg-slate-100'
                }`}
                style={{
                  boxShadow: isLight 
                    ? '12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    : '12px 12px 24px rgba(0, 0, 0, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.9), inset 0 0 0 1px rgba(0, 0, 0, 0.05)'
                }}
              >
                
                {/* Inner Icon Container */}
                <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-90`}>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                    className="text-white scale-110"
                  >
                    {icon}
                  </motion.div>
                </div>

                {/* Inner Glow Effect */}
                <motion.div 
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-3 rounded-lg group-hover:opacity-70 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4), transparent 60%)`
                  }}
                />
              </motion.div>

              {/* Orbiting Elements */}
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
                  <motion.div
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.6
                    }}
                    className={`absolute w-1 h-1 rounded-full ${
                      isLight ? 'bg-white/40' : 'bg-slate-600/50'
                    }`}
                    style={{
                      top: `${10 + i * 3}%`,
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Corner Decorative Elements */}
          <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className={`w-full h-full ${isLight ? 'bg-white' : 'bg-slate-700'}`}
              style={{
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
