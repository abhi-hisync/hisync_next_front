"use client";

import AnimatedCard from "@/components/ui/AnimatedCard";
import { 
  TrendingUp, 
  Settings, 
  Shield, 
  Zap,
  BarChart3,
  Cpu,
  Database,
  Activity
} from "lucide-react";

export default function AnimatedCardsShowcase() {
  const cardData = [
    {
      title: "Analytics Dashboard",
      subtitle: "Data Intelligence",
      description: "Transform raw data into actionable insights with our comprehensive analytics platform. Monitor performance metrics and track KPIs in real-time.",
      icon: <TrendingUp className="w-5 h-5" />,
      phase: "01",
      gradient: "from-blue-600 to-cyan-600",
      isLight: true,
      patternType: 'diagonal-stripes' as const,
      primaryAction: "View Analytics",
      secondaryAction: "Explore"
    },
    {
      title: "System Control Hub",
      subtitle: "Operations Management",
      description: "Streamline operations with intelligent automation and monitoring. Ensure optimal performance across all your systems and infrastructure.",
      icon: <Settings className="w-5 h-5" />,
      phase: "02",
      gradient: "from-emerald-600 to-teal-600",
      isLight: false,
      patternType: 'triangular-grid' as const,
      primaryAction: "Manage Systems",
      secondaryAction: "Configure"
    },
    {
      title: "Security Center",
      subtitle: "Protection Suite",
      description: "Comprehensive security monitoring and threat detection. Protect your digital assets with advanced compliance and access control features.",
      icon: <Shield className="w-5 h-5" />,
      phase: "03",
      gradient: "from-red-600 to-pink-600",
      isLight: true,
      patternType: 'vertical-bars' as const,
      primaryAction: "Security Panel",
      secondaryAction: "Reports"
    },
    {
      title: "Performance Engine",
      subtitle: "Optimization Suite",
      description: "Boost application performance with intelligent optimization algorithms. Analyze bottlenecks and accelerate your digital infrastructure.",
      icon: <Zap className="w-5 h-5" />,
      phase: "04",
      gradient: "from-orange-600 to-yellow-600",
      isLight: false,
      patternType: 'diagonal-stripes' as const,
      primaryAction: "Optimize Now",
      secondaryAction: "Analyze"
    },
    {
      title: "Business Intelligence",
      subtitle: "Strategic Insights",
      description: "Advanced business intelligence with machine learning capabilities. Make strategic decisions with predictive analytics and forecasting.",
      icon: <BarChart3 className="w-5 h-5" />,
      phase: "05",
      gradient: "from-purple-600 to-indigo-600",
      isLight: true,
      patternType: 'triangular-grid' as const,
      primaryAction: "View Insights",
      secondaryAction: "Forecast"
    },
    {
      title: "Resource Monitor",
      subtitle: "Infrastructure Intelligence",
      description: "Monitor and manage infrastructure resources with real-time insights. Optimize capacity planning and cost management strategies.",
      icon: <Cpu className="w-5 h-5" />,
      phase: "06",
      gradient: "from-violet-600 to-purple-600",
      isLight: false,
      patternType: 'vertical-bars' as const,
      primaryAction: "View Resources",
      secondaryAction: "Optimize"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Database className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Animated Card Components</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Modern Dashboard
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Card Collection
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Interactive cards with custom animated backgrounds, neumorphic icons, 
            and smooth entrance animations for modern web dashboards.
          </p>
        </div>

        {/* Cards Grid - Responsive layout with more spacing */}
        <div className="grid gap-8 lg:gap-10">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="flex justify-center"
            >
              <AnimatedCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                icon={card.icon}
                phase={card.phase}
                gradient={card.gradient}
                isLight={card.isLight}
                patternType={card.patternType}
                primaryAction={card.primaryAction}
                secondaryAction={card.secondaryAction}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Pattern Types Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Background Pattern Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Diagonal Stripes",
                description: "Animated diagonal lines with smooth movement and gradient overlays",
                icon: "📐",
                features: ["Dual-layer animation", "Gradient effects", "Smooth movement"]
              },
              {
                name: "Triangular Grid",
                description: "Geometric triangular patterns with fade and scale animations",
                icon: "🔺",
                features: ["SVG-based patterns", "Scale animations", "Fade effects"]
              },
              {
                name: "Vertical Bars",
                description: "Dynamic vertical bars with height animations and sliding effects",
                icon: "📊",
                features: ["Height animations", "Opacity effects", "Sliding overlay"]
              }
            ].map((pattern, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-center mb-4">
                  <span className="text-3xl mb-2 block">{pattern.icon}</span>
                  <h3 className="font-bold text-slate-900 text-lg">{pattern.name}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4 text-center">{pattern.description}</p>
                <div className="space-y-2">
                  {pattern.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="mt-12 bg-slate-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Implementation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Component Usage</h3>
              <div className="bg-slate-800 rounded-lg p-4 text-sm">
                <pre className="text-green-300 whitespace-pre-wrap">{`<AnimatedCard
  title="Analytics Dashboard"
  subtitle="Data Intelligence"
  description="Transform data insights..."
  icon={<TrendingUp className="w-5 h-5" />}
  phase="01"
  gradient="from-blue-600 to-cyan-600"
  isLight={true}
  patternType="diagonal-stripes"
  primaryAction="View Analytics"
  secondaryAction="Explore"
/>`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Responsive design with optimized spacing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Three custom animated background patterns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Neumorphic floating icons with hover effects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span>Light/dark theme support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>Smooth entrance and interaction animations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Performance-optimized animations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add import for motion
import { motion } from "framer-motion";
