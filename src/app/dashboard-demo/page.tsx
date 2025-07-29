"use client";

import PremiumDashboardCard from "@/components/ui/PremiumDashboardCard";
import { 
  Settings, 
  Activity, 
  TrendingUp, 
  Zap,
  Database,
  Shield
} from "lucide-react";

export default function DashboardCardsDemo() {
  const cardData = [
    {
      title: "Analytics Hub",
      subtitle: "Data Intelligence",
      description: "Transform your data into actionable insights with our advanced analytics platform. Monitor KPIs, track performance, and make data-driven decisions.",
      icon: <TrendingUp className="w-6 h-6" />,
      phase: "1",
      gradient: "from-blue-600 to-purple-600",
      isLight: true,
      features: ["Real-time Analytics", "Custom Dashboards", "Data Visualization", "Performance Metrics"],
      primaryAction: "View Analytics",
      secondaryAction: "Learn More"
    },
    {
      title: "Operations Control",
      subtitle: "System Management",
      description: "Streamline your operations with intelligent automation and monitoring tools. Ensure optimal performance across all systems.",
      icon: <Settings className="w-6 h-6" />,
      phase: "2",
      gradient: "from-emerald-600 to-teal-600",
      isLight: false,
      features: ["System Monitoring", "Automated Tasks", "Resource Optimization", "Performance Tuning"],
      primaryAction: "Manage Systems",
      secondaryAction: "View Details"
    },
    {
      title: "Security Center",
      subtitle: "Protection & Compliance",
      description: "Comprehensive security monitoring and threat detection to protect your digital assets and ensure compliance.",
      icon: <Shield className="w-6 h-6" />,
      phase: "3",
      gradient: "from-red-600 to-pink-600",
      isLight: true,
      features: ["Threat Detection", "Compliance Monitoring", "Access Control", "Security Audits"],
      primaryAction: "Security Dashboard",
      secondaryAction: "View Reports"
    },
    {
      title: "Performance Engine",
      subtitle: "Optimization Suite",
      description: "Boost your application performance with our intelligent optimization engine. Analyze, optimize, and accelerate.",
      icon: <Zap className="w-6 h-6" />,
      phase: "4",
      gradient: "from-orange-600 to-yellow-600",
      isLight: false,
      features: ["Speed Optimization", "Resource Management", "Cache Control", "Load Balancing"],
      primaryAction: "Optimize Now",
      secondaryAction: "Performance Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Database className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Premium Dashboard Components</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Enhanced Dashboard
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Card Components
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience our redesigned dashboard cards with neumorphic floating icons, 
            animated patterns, and premium interactions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-8">
          {cardData.map((card, index) => (
            <div key={index} className="flex justify-center">
              <PremiumDashboardCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                icon={card.icon}
                phase={card.phase}
                gradient={card.gradient}
                isLight={card.isLight}
                features={card.features}
                primaryAction={card.primaryAction}
                secondaryAction={card.secondaryAction}
                className="transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Code Sample Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Usage Example</h2>
          <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`import PremiumDashboardCard from "@/components/ui/PremiumDashboardCard";
import { TrendingUp } from "lucide-react";

<PremiumDashboardCard
  title="Analytics Hub"
  subtitle="Data Intelligence"
  description="Transform your data into actionable insights..."
  icon={<TrendingUp className="w-6 h-6" />}
  phase="1"
  gradient="from-blue-600 to-purple-600"
  isLight={true}
  features={["Real-time Analytics", "Custom Dashboards"]}
  primaryAction="View Analytics"
  secondaryAction="Learn More"
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
