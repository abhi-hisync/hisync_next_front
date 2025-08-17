"use client";

import {
  Shield,
  Zap,
  Users,
  Rocket,
  TrendingUp,
  BarChart3,
  Cloud,
  Settings,
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Layers,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  const prefersReduced = useReducedMotion();
  const mainServices = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise ERP Solutions",
      description:
        "Complete end-to-end ERP implementation and customization for Fortune 500 companies",
      features: [
        "Custom ERP Development",
        "SAP Implementation & Migration",
        "Oracle Cloud Integration",
        "Legacy System Modernization",
        "Real-time Analytics Dashboard",
      ],
      color: "blue",
      popular: true,
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Process Automation",
      description:
        "AI-powered workflow automation to streamline your business operations",
      features: [
        "Workflow Design & Optimization",
        "Robotic Process Automation",
        "AI-powered Decision Making",
        "Integration with Existing Systems",
        "Performance Monitoring",
      ],
      color: "indigo",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Digital Transformation Consulting",
      description:
        "Expert guidance from Ex-Big 4 consultants for complete digital transformation",
      features: [
        "Strategy Development",
        "Technology Roadmap",
        "Change Management",
        "Training & Support",
        "ROI Optimization",
      ],
      color: "purple",
    },
  ];

  const additionalServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Transform data into actionable insights",
      color: "emerald",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless transition to cloud infrastructure",
      color: "cyan",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "System Integration",
      description: "Connect disparate systems efficiently",
      color: "orange",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description: "Native & cross-platform mobile apps",
      color: "pink",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive web applications",
      color: "teal",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "API Development",
      description: "Scalable API architecture & integration",
      color: "violet",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
      indigo:
        "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100",
      purple:
        "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
      emerald:
        "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100",
      cyan: "bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100",
      orange:
        "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100",
      pink: "bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100",
      teal: "bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100",
      violet:
        "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColors = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      indigo: "text-indigo-600",
      purple: "text-purple-600",
      emerald: "text-emerald-600",
      cyan: "text-cyan-600",
      orange: "text-orange-600",
      pink: "text-pink-600",
      teal: "text-teal-600",
      violet: "text-violet-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getGradientClasses = (color: string) => {
    const gradients: Record<string, string> = {
  blue: "bg-gradient-to-br from-blue-200/40 via-blue-100/25 to-white/10",
  indigo: "bg-gradient-to-br from-indigo-200/40 via-indigo-100/25 to-white/10",
  purple: "bg-gradient-to-br from-purple-200/40 via-purple-100/25 to-white/10",
  emerald: "bg-gradient-to-br from-emerald-200/40 via-emerald-100/25 to-white/10",
  cyan: "bg-gradient-to-br from-cyan-200/40 via-cyan-100/25 to-white/10",
  orange: "bg-gradient-to-br from-orange-200/40 via-orange-100/25 to-white/10",
  pink: "bg-gradient-to-br from-pink-200/40 via-pink-100/25 to-white/10",
  teal: "bg-gradient-to-br from-teal-200/40 via-teal-100/25 to-white/10",
  violet: "bg-gradient-to-br from-violet-200/40 via-violet-100/25 to-white/10",
    };
    return gradients[color] || gradients.blue;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
  {/* (removed top-level fixed background so hero's own animated background is used) */}

      <Navbar />

      {/* Hero Section */}
  <section className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-500">
        {/* Background Elements (animated orbs, shapes, grid) */}
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
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
          {/* Extra floating accents for Services hero */}
          <motion.div
            aria-hidden
            animate={prefersReduced ? { opacity: 0.06 } : { y: [0, -12, 0], opacity: [0.06, 0.14, 0.06] }}
            transition={prefersReduced ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-6 top-6 w-3 h-3 bg-blue-300/40 rounded-full blur-sm pointer-events-none"
          />
          <motion.div
            aria-hidden
            animate={prefersReduced ? { opacity: 0.07 } : { y: [0, -16, 0], rotate: [0, 26, 0], opacity: [0.07, 0.18, 0.07] }}
            transition={prefersReduced ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute right-32 top-32 w-6 h-6 bg-indigo-300/28 rounded-sm rotate-45 pointer-events-none blur"
          />
          <motion.div
            aria-hidden
            animate={prefersReduced ? { opacity: 0.06 } : { x: [0, 14, 0], opacity: [0.06, 0.12, 0.06] }}
            transition={prefersReduced ? { duration: 0 } : { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-12 left-1/3 w-7 h-7 bg-cyan-200/28 rounded-full blur-xl pointer-events-none"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="relative inline-block">
              <Badge
                variant="outline"
                className="mb-6 px-4 py-2 bg-slate-800/60 backdrop-blur-sm text-slate-300 border-slate-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Award className="w-4 h-4 mr-2 text-blue-400" />
                Enterprise-Grade Solutions
              </Badge>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            {/* Main Heading with Stagger Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-50 leading-tight tracking-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Transform
                </span>{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-300 delay-75">
                  Your
                </span>{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-300 delay-150">
                  Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 delay-225">
                  Operations
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Ex-Big 4 consultants and elite engineers deliver end-to-end
              solutions. From ERP implementation to AI-powered automation:
              <span className="text-slate-100 font-medium"> One Team</span> for
              complete digital transformation.
            </p>

            {/* Stats with Enhanced Hover Effects */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                {
                  value: "500+",
                  label: "Enterprise Clients",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  value: "95%",
                  label: "Success Rate",
                  icon: <TrendingUp className="w-5 h-5" />,
                },
                {
                  value: "20+",
                  label: "Years Experience",
                  icon: <Shield className="w-5 h-5" />,
                },
                {
                  value: "4.2x",
                  label: "Average ROI",
                  icon: <Rocket className="w-5 h-5" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 border border-slate-600 shadow-lg hover:shadow-2xl hover:border-blue-500 hover:scale-[1.04] hover:shadow-[0_4px_24px_0_rgba(59,130,246,0.25)] transition-all duration-300 cursor-pointer group"
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

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Main Services with Enhanced Interactions */}
      <section className="py-24 px-4 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <Badge
                variant="outline"
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 font-medium hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
              >
                <Target className="w-4 h-4 mr-2" />
                Core Services
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 hover:text-slate-700 transition-colors duration-300">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive services designed to scale with Fortune 500
              companies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl border-2 border-slate-200/60 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden flex flex-col h-full"
              >
                {/* Animated Background Fill */}
                <div
                  className={`absolute inset-0 ${getGradientClasses(service.color)} opacity-0 group-hover:opacity-90 transform-gpu group-hover:scale-[1.03] filter group-hover:brightness-110 group-hover:saturate-125 transition-all duration-500 rounded-3xl pointer-events-none`}
                />

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 text-sm rounded-full shadow-md ring-1 ring-white/10 backdrop-blur-sm transition-shadow duration-300">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`${getIconColors(
                      service.color
                    )} mb-6 w-12 h-12 flex items-center justify-center transform-gpu origin-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 min-h-[72px]">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 group/item"
                      >
                        <CheckCircle
                          className={`w-5 h-5 ${getIconColors(
                            service.color
                          )} group-hover/item:scale-110 transition-transform duration-300`}
                        />
                        <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg hover:scale-105 mt-auto">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 ${
                    getColorClasses(service.color).split(" ")[0]
                  } opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-3xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services with Modern Grid */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-white via-slate-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 hover:text-slate-700 transition-colors duration-300">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Complete technology stack coverage for modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border-2 border-slate-200/60 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 ${getGradientClasses(service.color)} opacity-0 group-hover:opacity-90 transform-gpu group-hover:scale-[1.03] filter group-hover:brightness-110 group-hover:saturate-125 transition-all duration-500 rounded-2xl pointer-events-none`}
                />

                {/* Icon with Enhanced Animation */}
                <div
                  className={`${getIconColors(
                    service.color
                  )} mb-4 w-10 h-10 flex items-center justify-center transform-gpu origin-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 relative z-10 overflow-hidden`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight
                    className={`w-5 h-5 ${getIconColors(service.color)}`}
                  />
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white text-center overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            {/* Animated Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-500" />

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-xl opacity-30 group-hover:opacity-70 group-hover:rotate-12 transition-all duration-500" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:scale-105 transition-transform duration-300">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed group-hover:text-blue-50 transition-colors duration-300">
                Join 500+ enterprise clients who trust us with their digital
                transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="group/btn bg-white text-slate-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group/btn border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
