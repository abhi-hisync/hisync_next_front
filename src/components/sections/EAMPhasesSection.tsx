"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  ClipboardList, 
  Settings, 
  Activity, 
  TrendingUp, 
  Recycle,
  ArrowRight,
  Zap
} from "lucide-react";

const eamPhases = [
  {
    id: 1,
    title: "PLAN",
    subtitle: "Asset Planning & Strategy",
    description: "Define asset requirements, lifecycle planning, and investment strategies to optimize performance and minimize costs.",
    icon: <ClipboardList className="w-6 h-6" />,
    color: "from-blue-600 to-blue-700",
    bgGradient: "from-slate-800 to-slate-900",
    textColor: "text-white",
    accentColor: "blue",
    features: ["Asset Registry", "Lifecycle Planning", "Budget Forecasting", "Risk Assessment"]
  },
  {
    id: 2,
    title: "ACQUIRE",
    subtitle: "Smart Procurement & Onboarding",
    description: "Streamline procurement processes, vendor management, and asset onboarding with automated workflows.",
    icon: <Settings className="w-6 h-6" />,
    color: "from-indigo-600 to-indigo-700",
    bgGradient: "from-slate-700 to-slate-800",
    textColor: "text-white",
    accentColor: "indigo",
    features: ["Vendor Management", "Purchase Orders", "Asset Onboarding", "Quality Control"]
  },
  {
    id: 3,
    title: "OPERATE",
    subtitle: "Daily Operations Excellence",
    description: "Monitor real-time performance, schedule maintenance, and ensure optimal asset utilization across operations.",
    icon: <Activity className="w-6 h-6" />,
    color: "from-purple-600 to-purple-700",
    bgGradient: "from-slate-600 to-slate-700",
    textColor: "text-white",
    accentColor: "purple",
    features: ["Real-time Monitoring", "Preventive Maintenance", "Performance Tracking", "Workflow Automation"]
  },
  {
    id: 4,
    title: "OPTIMIZE",
    subtitle: "Performance Enhancement",
    description: "Analyze data patterns, optimize maintenance schedules, and improve asset performance through AI-driven insights.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-pink-600 to-pink-700",
    bgGradient: "from-slate-500 to-slate-600",
    textColor: "text-white",
    accentColor: "pink",
    features: ["Data Analytics", "AI Insights", "Performance Optimization", "Predictive Analytics"]
  },
  {
    id: 5,
    title: "RETIRE",
    subtitle: "End-of-Life Management",
    description: "Manage asset retirement, disposal, and replacement planning while ensuring compliance and value recovery.",
    icon: <Recycle className="w-6 h-6" />,
    color: "from-emerald-600 to-emerald-700",
    bgGradient: "from-slate-400 to-slate-500",
    textColor: "text-white",
    accentColor: "emerald",
    features: ["Retirement Planning", "Value Recovery", "Compliance Management", "Sustainable Disposal"]
  }
];

export default function EAMPhasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="relative bg-slate-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Enterprise Asset Management</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Complete EAM
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lifecycle Flow
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the seamless flow of our 5-phase EAM approach. 
            Watch how each phase builds upon the next.
          </p>
        </div>
      </div>

      {/* Sticky Cards Section */}
      <div className="relative">
        {eamPhases.map((phase, index) => {
          const targetScale = 1 - ((eamPhases.length - index) * 0.02);
          const cardRef = useRef<HTMLDivElement>(null);
          
          return (
            <div 
              key={phase.id} 
              ref={cardRef}
              className="sticky top-0 flex items-center justify-center px-4"
              style={{ 
                height: '80vh',
                top: `${index * 20}px`
              }}
            >
              <motion.div
                style={{
                  scale: targetScale,
                  top: `${index * 20}px`
                }}
                className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-[7fr_3fr] gap-0 h-[500px] relative">
                  {/* Light Side - 70% */}
                  <div className="bg-gradient-to-br from-white to-slate-50/80 p-10 flex flex-col justify-center relative">
                    {/* Subtle Light Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]">
                      <div 
                        className="absolute inset-0" 
                        style={{
                          backgroundImage: `
                            linear-gradient(30deg, transparent 12%, rgba(59, 130, 246, 0.05) 12.5%, rgba(59, 130, 246, 0.05) 14%, transparent 14%),
                            linear-gradient(150deg, transparent 12%, rgba(99, 102, 241, 0.05) 12.5%, rgba(99, 102, 241, 0.05) 14%, transparent 14%),
                            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
                          `,
                          backgroundSize: '60px 80px, 60px 80px, 120px 120px'
                        }}
                      />
                    </div>

                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${phase.color} text-white shadow-lg`}>
                          {phase.icon}
                        </div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Phase {phase.id} of 5
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
                          {phase.title}
                        </h3>
                        <p className={`text-lg font-medium mb-4 text-${phase.accentColor}-600`}>
                          {phase.subtitle}
                        </p>
                        <p className="text-base leading-relaxed text-slate-600">
                          {phase.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {phase.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: featureIndex * 0.05 
                            }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/80 backdrop-blur-sm border border-slate-200/50"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-${phase.accentColor}-500`}></div>
                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dark Side - 30% */}
                  <div className={`bg-gradient-to-br ${phase.bgGradient} p-8 flex flex-col justify-center items-center relative`}>
                    {/* Complex Dark Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div 
                        className="absolute inset-0" 
                        style={{
                          backgroundImage: `
                            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
                            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
                            linear-gradient(45deg, transparent 46%, rgba(255, 255, 255, 0.03) 47%, rgba(255, 255, 255, 0.03) 53%, transparent 54%),
                            conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255, 255, 255, 0.05) 90deg, transparent 180deg)
                          `,
                          backgroundSize: '80px 80px, 100px 100px, 15px 15px, 120px 120px'
                        }}
                      />
                    </div>

                    {/* Main Visual Container */}
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 1, -1, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      className="relative z-10"
                    >
                      <div className="w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl">
                        {/* Inner Glow Pattern */}
                        <div className="absolute inset-3 rounded-xl opacity-30">
                          <div 
                            className="absolute inset-0" 
                            style={{
                              backgroundImage: `
                                conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(255, 255, 255, 0.2) 90deg, transparent 180deg, rgba(255, 255, 255, 0.1) 270deg, transparent 360deg)
                              `
                            }}
                          />
                        </div>
                        
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut"
                          }}
                          className={`p-4 rounded-xl bg-gradient-to-br ${phase.color} text-white shadow-xl relative z-10`}
                        >
                          <div className="scale-125">
                            {phase.icon}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Floating Elements in Dark Side */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.2, 0.4, 0.2],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.8
                        }}
                        className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
                        style={{
                          left: `${25 + i * 20}%`,
                          top: `${20 + i * 25}%`
                        }}
                      />
                    ))}

                    {/* Phase Number in Dark Side */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <span className="text-sm font-bold text-white/90">
                          {phase.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-50 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-7xl mx-auto px-4"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <span>Start Your EAM Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
