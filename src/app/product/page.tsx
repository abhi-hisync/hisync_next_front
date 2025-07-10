"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Monitor, Shield, Zap, Users, Globe, Clock, AlertTriangle, Database, BarChart3, Settings, FileText, Search, MapPin, Wifi, Layers, CheckCircle, Star, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ProblemSection from "@/components/product/ProblemSection";
import SolutionSection from "@/components/product/SolutionSection";
import FeaturesSection from "@/components/product/FeaturesSection";
import RoadmapSection from "@/components/product/RoadmapSection";
import WorkflowSection from "@/components/product/WorkflowSection";
import ReVerificationSection from "@/components/product/ReVerificationSection";
import CaseStudySection from "@/components/product/CaseStudySection";
import ProductHero from "@/components/product/ProductHero";
import ProductCTA from "@/components/product/ProductCTA";
import FAQSection from "@/components/product/FAQSection";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <ProductHero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <RoadmapSection />
      <WorkflowSection />
      <ReVerificationSection />
      <CaseStudySection />
      <FAQSection />
      <ProductCTA />
      
      <FooterSection />
    </div>
  );
}
