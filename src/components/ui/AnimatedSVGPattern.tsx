"use client";

import { motion } from "framer-motion";

interface AnimatedSVGPatternProps {
  patternType?: 'dots' | 'waves' | 'grid' | 'geometric';
  color?: string;
  opacity?: number;
  size?: number;
  isLight?: boolean;
}

export default function AnimatedSVGPattern({
  patternType = 'dots',
  color = '#3b82f6',
  opacity = 0.1,
  size = 40,
  isLight = true
}: AnimatedSVGPatternProps) {
  
  const renderPattern = () => {
    switch (patternType) {
      case 'dots':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="dots-pattern"
                x="0"
                y="0"
                width={size}
                height={size}
                patternUnits="userSpaceOnUse"
              >
                <motion.circle
                  cx={size / 2}
                  cy={size / 2}
                  r="2"
                  fill={color}
                  opacity={opacity}
                  animate={{
                    r: [1.5, 3, 1.5],
                    opacity: [opacity * 0.5, opacity, opacity * 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        );

      case 'waves':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="waves-pattern"
                x="0"
                y="0"
                width={size * 2}
                height={size}
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d={`M0 ${size/2} Q${size/2} ${size/4} ${size} ${size/2} T${size*2} ${size/2}`}
                  stroke={color}
                  strokeWidth="1"
                  fill="none"
                  opacity={opacity}
                  animate={{
                    d: [
                      `M0 ${size/2} Q${size/2} ${size/4} ${size} ${size/2} T${size*2} ${size/2}`,
                      `M0 ${size/2} Q${size/2} ${size*3/4} ${size} ${size/2} T${size*2} ${size/2}`,
                      `M0 ${size/2} Q${size/2} ${size/4} ${size} ${size/2} T${size*2} ${size/2}`
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves-pattern)" />
          </svg>
        );

      case 'grid':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="grid-pattern"
                x="0"
                y="0"
                width={size}
                height={size}
                patternUnits="userSpaceOnUse"
              >
                <motion.path
                  d={`M ${size} 0 L 0 0 0 ${size}`}
                  stroke={color}
                  strokeWidth="1"
                  fill="none"
                  opacity={opacity}
                  animate={{
                    opacity: [opacity * 0.3, opacity, opacity * 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        );

      case 'geometric':
        return (
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="geometric-pattern"
                x="0"
                y="0"
                width={size}
                height={size}
                patternUnits="userSpaceOnUse"
              >
                <motion.polygon
                  points={`${size/2},5 ${size-5},${size/2} ${size/2},${size-5} 5,${size/2}`}
                  fill={color}
                  opacity={opacity}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ transformOrigin: `${size/2}px ${size/2}px` }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {renderPattern()}
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, ${
            isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
          } 100%)`
        }}
      />
    </div>
  );
}
