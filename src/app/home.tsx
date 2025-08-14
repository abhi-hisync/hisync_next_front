"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AssessmentSection from "@/components/sections/AssessmentSection";
import ProcessSection from "@/components/sections/ProcessSection";
import EAMPhasesSection from "@/components/sections/EAMPhasesSection";
import CTASection from "@/components/sections/CTASection";
import AboutSection from "@/components/sections/AboutSection";
import FooterSection from "@/components/sections/FooterSection";
import PremiumDashboardCard from "@/components/ui/PremiumDashboardCard";
import { TrendingUp } from "lucide-react";

export default function Home() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <HeroSection showTooltip={showTooltip} setShowTooltip={setShowTooltip} />

      <ServicesSection />

      <EAMPhasesSection />

      {/* <AssessmentSection showTooltip={showTooltip} setShowTooltip={setShowTooltip} /> */}

      <ProcessSection />

      <CTASection />

      <AboutSection />

      <FooterSection />
    </div>
  );
}


















// "use client";

// import { useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/sections/HeroSection";
// import ServicesSection from "@/components/sections/ServicesSection";
// import AssessmentSection from "@/components/sections/AssessmentSection";
// import ProcessSection from "@/components/sections/ProcessSection";
// import EAMPhasesSection from "@/components/sections/EAMPhasesSection";
// import CTASection from "@/components/sections/CTASection";
// import AboutSection from "@/components/sections/AboutSection";
// import FooterSection from "@/components/sections/FooterSection";
// import PremiumDashboardCard from "@/components/ui/PremiumDashboardCard";
// import { TrendingUp } from "lucide-react";

// export default function Home() {
//   const [showTooltip, setShowTooltip] = useState<string | null>(null);
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
//   const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
      
//       <motion.div
//         style={{ scale, opacity }}
//         className="sticky top-0"
//       >
//         <HeroSection showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
//       </motion.div>
      
//       <div className="relative z-10 bg-white">
//         <ServicesSection />
//       </div>
      
//       <EAMPhasesSection />
      
//       {/* <AssessmentSection showTooltip={showTooltip} setShowTooltip={setShowTooltip} /> */}
      
//       <ProcessSection />
      
//       <CTASection />
      
//       <AboutSection />
   
//       <FooterSection />
//     </div>
//   );
// }