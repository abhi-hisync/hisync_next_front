/*
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
    features: ["Asset Registry", "Lifecycle Planning", "Budget Forecasting", "Risk Assessment"],
    isLight: true // Light theme for card 1
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
    features: ["Vendor Management", "Purchase Orders", "Asset Onboarding", "Quality Control"],
    isLight: false // Dark theme for card 2
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
    features: ["Real-time Monitoring", "Preventive Maintenance", "Performance Tracking", "Workflow Automation"],
    isLight: true // Light theme for card 3
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
    features: ["Data Analytics", "AI Insights", "Performance Optimization", "Predictive Analytics"],
    isLight: false // Dark theme for card 4
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
    features: ["Retirement Planning", "Value Recovery", "Compliance Management", "Sustainable Disposal"],
    isLight: true // Light theme for card 5
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
      (Header Section) */
//       <div className="max-w-7xl mx-auto px-4  pb-10">
//         <div className="text-center">
//           <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
//             <Zap className="w-4 h-4 text-blue-600" />
//             <span className="cursor-pointer text-sm font-medium text-blue-700">Introducing AssetX </span>  
//             {/* Enterprise Asset Management */}
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//             Complete EAM
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Lifecycle Flow
//             </span>
//           </h2>
          
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Experience the seamless flow of our 5-phase EAM approach. 
//             Watch how each phase builds upon the next.
//           </p>
//         </div>
//       </div>

//       {/* Sticky Cards Section */}
//       <div className="relative">
//         {eamPhases.map((phase, index) => {
//           const cardRef = useRef<HTMLDivElement>(null);
          
//           return (
//             <div 
//               key={phase.id} 
//               ref={cardRef}
//               className="sticky top-0 flex items-center justify-center px-4"
//               style={{ 
//                 height: '80vh',
//                 top: `${index * 20}px`
//               }}
//             >
//               <motion.div
//                 style={{
//                   scale: 1,
//                   top: `${index * 20}px`
//                 }}
//                 className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
//               >
//                 <div className="grid lg:grid-cols-[65fr_35fr] gap-0 h-[480px] relative">
//                   {/* Phase Badge - Top Right */}
//                   <div className="absolute top-4 right-4 z-30">
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.2, duration: 0.3 }}
//                       className={`px-4 py-2 rounded-full backdrop-blur-md border shadow-lg ${
//                         phase.isLight 
//                           ? 'bg-white/90 border-white/50 text-slate-700' 
//                           : 'bg-slate-800/90 border-slate-700/50 text-white'
//                       }`}
//                     >
//                       <span className="text-xs font-semibold tracking-wider">
//                         PHASE {phase.id}
//                       </span>
//                     </motion.div>
//                   </div>

//                   {/* Left Content Section - 65% */}
//                   <div className={`${phase.isLight 
//                     ? 'bg-gradient-to-br from-white via-white to-slate-50/30' 
//                     : 'bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900'
//                     } px-10 py-8 flex flex-col justify-center relative overflow-hidden`}>

//                     <div className="space-y-6 relative z-10">
//                       {/* Icon and Phase Indicator */}
//                       <div className="flex items-center gap-4">
//                         <motion.div 
//                           whileHover={{ scale: 1.05, rotate: 5 }}
//                           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                           className={`p-4 rounded-2xl bg-gradient-to-br ${phase.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
//                           {phase.icon}
//                         </motion.div>
//                         <div className={`text-xs font-semibold uppercase tracking-wider ${
//                           phase.isLight ? 'text-slate-400' : 'text-slate-500'
//                         }`}>
//                           {phase.subtitle}
//                         </div>
//                       </div>
                      
//                       {/* Title and Description */}
//                       <div className="space-y-3">
//                         <h3 className={`text-3xl md:text-4xl font-bold leading-tight ${
//                           phase.isLight ? 'text-slate-900' : 'text-white'
//                         }`}>
//                           {phase.title}
//                         </h3>
//                         <p className={`text-base leading-relaxed max-w-lg ${
//                           phase.isLight ? 'text-slate-600' : 'text-slate-300'
//                         }`}>
//                           {phase.description}
//                         </p>
//                       </div>

//                       {/* Features Grid */}
//                       <div className="grid grid-cols-2 gap-2">
//                         {phase.features.map((feature, featureIndex) => (
//                           <motion.div
//                             key={featureIndex}
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             whileHover={{ 
//                               scale: 1.02, 
//                               backgroundColor: phase.isLight ? 'rgba(255, 255, 255, 0.8)' : 'rgba(71, 85, 105, 0.6)' 
//                             }}
//                             transition={{ 
//                               duration: 0.4, 
//                               delay: featureIndex * 0.05 
//                             }}
//                             viewport={{ once: true }}
//                             className={`flex items-center gap-3 p-2.5 rounded-xl backdrop-blur-sm border cursor-pointer transition-all duration-300 ${
//                               phase.isLight 
//                                 ? 'bg-white/60 border-slate-200/60 hover:border-slate-300/80 hover:shadow-md' 
//                                 : 'bg-slate-700/40 border-slate-600/40 hover:border-slate-500/60 hover:shadow-lg'
//                             }`}>
//                             <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} shadow-sm`}></div>
//                             <span className={`text-xs font-medium ${
//                               phase.isLight ? 'text-slate-700' : 'text-slate-200'
//                             }`}>{feature}</span>
//                           </motion.div>
//                         ))}
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex gap-3 pt-1">
//                         <motion.button
//                           whileHover={{ scale: 1.02, y: -1 }}
//                           whileTap={{ scale: 0.98 }}
//                           className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
//                             phase.isLight
//                               ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
//                               : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl'
//                           }`}
//                         >
//                           Learn More
//                         </motion.button>
//                         <motion.button
//                           whileHover={{ scale: 1.02, y: -1 }}
//                           whileTap={{ scale: 0.98 }}
//                           className={`px-5 py-2.5 rounded-xl font-medium border transition-all duration-300 text-sm ${
//                             phase.isLight
//                               ? 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:shadow-md'
//                               : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50 hover:shadow-lg'
//                           }`}
//                         >
//                           View Demo
//                         </motion.button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right Animated Pattern Section - 35% */}
//                   <div className={`relative overflow-hidden ${phase.isLight 
//                     ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
//                     : 'bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100'
//                     }`}>
                    
//                     {/* Animated Diagonal Stripes */}
//                     <motion.div 
//                       className="absolute inset-0"
//                       animate={{ 
//                         backgroundPosition: ['0% 0%', '100% 100%'],
//                       }}
//                       transition={{
//                         duration: 20,
//                         repeat: Infinity,
//                         ease: "linear"
//                       }}
//                       style={{
//                         backgroundImage: `repeating-linear-gradient(
//                           45deg,
//                           ${phase.isLight ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 0px,
//                           ${phase.isLight ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 1px,
//                           transparent 1px,
//                           transparent 60px
//                         )`,
//                         backgroundSize: '84px 84px'
//                       }}
//                     />

//                     {/* Secondary Pattern Layer */}
//                     <motion.div 
//                       className="absolute inset-0 opacity-40"
//                       animate={{ 
//                         backgroundPosition: ['100% 0%', '0% 100%'],
//                       }}
//                       transition={{
//                         duration: 30,
//                         repeat: Infinity,
//                         ease: "linear"
//                       }}
//                       style={{
//                         backgroundImage: `repeating-linear-gradient(
//                           -45deg,
//                           ${phase.isLight ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'} 0px,
//                           ${phase.isLight ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'} 2px,
//                           transparent 2px,
//                           transparent 80px
//                         )`,
//                         backgroundSize: '113px 113px'
//                       }}
//                     />

//                     {/* Floating Neumorphic Icon */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <motion.div
//                         animate={{ 
//                           y: [0, -12, 0],
//                           rotate: [0, 2, -2, 0]
//                         }}
//                         transition={{ 
//                           duration: 6, 
//                           repeat: Infinity, 
//                           ease: "easeInOut",
//                           delay: index * 0.4
//                         }}
//                         whileHover={{ 
//                           scale: 1.1,
//                           y: -8
//                         }}
//                         className="relative group cursor-pointer"
//                       >
//                         {/* Neumorphic Container */}
//                         <div className={`w-28 h-28 rounded-3xl relative ${
//                           phase.isLight 
//                             ? 'bg-slate-800' 
//                             : 'bg-slate-100'
//                         }`}
//                         style={{
//                           boxShadow: phase.isLight 
//                             ? '20px 20px 40px rgba(0, 0, 0, 0.4), -20px -20px 40px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
//                             : '20px 20px 40px rgba(0, 0, 0, 0.1), -20px -20px 40px rgba(255, 255, 255, 0.9), inset 0 0 0 1px rgba(0, 0, 0, 0.05)'
//                         }}>
                          
//                           {/* Inner Gradient */}
//                           <div className={`absolute inset-2 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center transition-all duration-500 group-hover:scale-95`}>
//                             <motion.div
//                               animate={{ 
//                                 scale: [1, 1.1, 1],
//                               }}
//                               transition={{ 
//                                 duration: 4, 
//                                 repeat: Infinity, 
//                                 ease: "easeInOut"
//                               }}
//                               className="text-white scale-125"
//                             >
//                               {phase.icon}
//                             </motion.div>
//                           </div>

//                           {/* Subtle Inner Glow */}
//                           <div 
//                             className="absolute inset-3 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
//                             style={{
//                               background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent 70%)`
//                             }}
//                           />
//                         </div>

//                         {/* Floating Particles */}
//                         {[...Array(4)].map((_, i) => (
//                           <motion.div
//                             key={i}
//                             animate={{
//                               y: [0, -20, 0],
//                               opacity: [0.1, 0.3, 0.1],
//                               scale: [0.8, 1.2, 0.8]
//                             }}
//                             transition={{
//                               duration: 4 + i * 0.7,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                               delay: i * 1.2
//                             }}
//                             className={`absolute w-1 h-1 rounded-full ${
//                               phase.isLight ? 'bg-white/20' : 'bg-slate-600/30'
//                             }`}
//                             style={{
//                               left: `${20 + i * 15}%`,
//                               top: `${15 + i * 20}%`
//                             }}
//                           />
//                         ))}
//                       </motion.div>
//                     </div>

//                     {/* Corner Accent */}
//                     <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
//                       <div 
//                         className={`w-full h-full ${phase.isLight ? 'bg-white' : 'bg-slate-700'}`}
//                         style={{
//                           clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom CTA */}
//       <div className="bg-slate-50 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center max-w-7xl mx-auto px-4"
//         >
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
//             <span>Start Your EAM Journey</span>
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }*/

// File disabled: keep the full implementation above inside the comment.
// To re-enable: remove the block comment markers (/* ... */) wrapping the code above.

export default function EAMPhasesSection() {
  return null;
}
