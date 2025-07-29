"use client";

import PremiumDashboardCard from "@/components/ui/PremiumDashboardCard";
import EnhancedDashboardCard from "@/components/ui/EnhancedDashboardCard";
import { 
  Settings, 
  Activity, 
  TrendingUp, 
  Zap,
  Database,
  Shield,
  Cpu,
  BarChart3
} from "lucide-react";

export default function AllCardsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Database className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Complete Card Collection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Premium Dashboard
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Card Variations
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore different implementations with neumorphic icons, animated patterns, 
            and premium interactions for modern dashboard interfaces.
          </p>
        </div>

        {/* Premium Cards Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Standard Premium Cards</h2>
          <div className="space-y-8">
            <div className="flex justify-center">
              <PremiumDashboardCard
                title="Analytics Hub"
                subtitle="Data Intelligence"
                description="Transform your data into actionable insights with our advanced analytics platform. Monitor KPIs, track performance, and make data-driven decisions."
                icon={<TrendingUp className="w-6 h-6" />}
                phase="1"
                gradient="from-blue-600 to-purple-600"
                isLight={true}
                features={["Real-time Analytics", "Custom Dashboards", "Data Visualization", "Performance Metrics"]}
                primaryAction="View Analytics"
                secondaryAction="Learn More"
              />
            </div>
            
            <div className="flex justify-center">
              <PremiumDashboardCard
                title="System Control"
                subtitle="Operations Management"
                description="Streamline your operations with intelligent automation and monitoring tools. Ensure optimal performance across all systems."
                icon={<Settings className="w-6 h-6" />}
                phase="2"
                gradient="from-emerald-600 to-teal-600"
                isLight={false}
                features={["System Monitoring", "Automated Tasks", "Resource Optimization", "Performance Tuning"]}
                primaryAction="Manage Systems"
                secondaryAction="View Details"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Cards Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Enhanced Cards with SVG Patterns</h2>
          <div className="space-y-8">
            <div className="flex justify-center">
              <EnhancedDashboardCard
                title="Performance Engine"
                subtitle="Optimization Suite"
                description="Boost your application performance with our intelligent optimization engine. Analyze, optimize, and accelerate your digital infrastructure."
                icon={<Zap className="w-6 h-6" />}
                phase="1"
                gradient="from-orange-600 to-yellow-600"
                isLight={true}
                features={["Speed Optimization", "Resource Management", "Cache Control", "Load Balancing"]}
                primaryAction="Optimize Now"
                secondaryAction="Performance Guide"
                patternType="dots"
              />
            </div>
            
            <div className="flex justify-center">
              <EnhancedDashboardCard
                title="Security Center"
                subtitle="Protection & Compliance"
                description="Comprehensive security monitoring and threat detection to protect your digital assets and ensure regulatory compliance."
                icon={<Shield className="w-6 h-6" />}
                phase="2"
                gradient="from-red-600 to-pink-600"
                isLight={false}
                features={["Threat Detection", "Compliance Monitoring", "Access Control", "Security Audits"]}
                primaryAction="Security Dashboard"
                secondaryAction="View Reports"
                patternType="waves"
              />
            </div>
            
            <div className="flex justify-center">
              <EnhancedDashboardCard
                title="Resource Monitor"
                subtitle="Infrastructure Intelligence"
                description="Monitor and manage your infrastructure resources with real-time insights and predictive analytics for optimal performance."
                icon={<Cpu className="w-6 h-6" />}
                phase="3"
                gradient="from-indigo-600 to-blue-600"
                isLight={true}
                features={["Resource Tracking", "Capacity Planning", "Cost Optimization", "Predictive Scaling"]}
                primaryAction="View Resources"
                secondaryAction="Setup Alerts"
                patternType="grid"
              />
            </div>
            
            <div className="flex justify-center">
              <EnhancedDashboardCard
                title="Business Intelligence"
                subtitle="Strategic Insights"
                description="Advanced business intelligence platform with machine learning capabilities for strategic decision making and growth optimization."
                icon={<BarChart3 className="w-6 h-6" />}
                phase="4"
                gradient="from-violet-600 to-purple-600"
                isLight={false}
                features={["Strategic Analytics", "ML Insights", "Forecasting", "Business Metrics"]}
                primaryAction="Explore Insights"
                secondaryAction="View Forecasts"
                patternType="geometric"
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features Implemented</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Neumorphic Design",
                description: "Soft shadows and realistic depth effects for modern UI aesthetics",
                icon: "🎨"
              },
              {
                title: "Animated Patterns",
                description: "Dynamic SVG patterns and CSS animations for engaging backgrounds",
                icon: "✨"
              },
              {
                title: "Responsive Layout",
                description: "Perfect adaptation across all device sizes and orientations",
                icon: "📱"
              },
              {
                title: "Smooth Transitions",
                description: "Framer Motion powered animations for premium interactions",
                icon: "🎬"
              },
              {
                title: "Premium Buttons",
                description: "Gradient buttons with hover effects and micro-interactions",
                icon: "🎯"
              },
              {
                title: "Phase Badges",
                description: "Floating badges with backdrop blur and subtle shadows",
                icon: "🏷️"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-slate-200">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="bg-slate-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Implementation Guide</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">1. Install Dependencies</h3>
              <code className="text-sm text-slate-300">npm install framer-motion lucide-react</code>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-400 mb-2">2. Import Components</h3>
              <code className="text-sm text-slate-300">import PremiumDashboardCard from "@/components/ui/PremiumDashboardCard"</code>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">3. Customize Tailwind Config</h3>
              <code className="text-sm text-slate-300">Add custom shadows and animations to extend theme</code>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="font-semibold text-pink-400 mb-2">4. Use in Your Dashboard</h3>
              <code className="text-sm text-slate-300">Pass props for title, description, features, and styling</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
