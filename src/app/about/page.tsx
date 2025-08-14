"use client";

import {
  Code,
  Puzzle,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Award,
  Users,
  CheckCircle,
  Globe,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

// import { Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutPage() {
  const founders = [
    {
      name: "Rohit Gaur",
      role: "Founder",
      background: "IT Professional",
      journey:
        "Rohit is a seasoned technology leader with a strong background in app development, web technologies, research, and digital product launches. Rohit has over 13 years of experience spanning several multinational corporations, including those connected to Silicon Valley. For over five years, he served as Product Head at The Infinite Reality, a multi billion-dollar organization.",
      expertise:
        "His expertise lies in bridging technical innovation with business outcomes, making him a valuable asset in today's fast-evolving digital landscape.",
      experience: "13+ years",
      image: "/images/our_team/rohit.webp",
    },
    {
      name: "Avinash K Tripathi",
      role: "Founder",
      background: "IT Professional",
      journey:
        "Avinash is an accomplished product leader with over 14 years of experience in the technology industry, specializing in SaaS products and digital innovation. Holding a Bachelor of Engineering degree, he served as the Director of Product Management at RektGlobal Inc. His deep understanding of product lifecycle management and forward-thinking approach make him a key force behind successful, user-centric SaaS platforms.",
      expertise:
        "His visionary leadership in product strategy has transformed multiple enterprises across global markets.",
      experience: "14+ years",
      image: "/images/our_team/avinash.webp",
    },
    {
      name: "Amit S. Chauhan",
      role: "Co-Founder",
      background: "Ex-Big 4 Consultant",
      journey:
        "Amit has endeavoured through his 20+ years of professional adventure in world's leading consulting firms playing a pivotal role in the pursuits team along with gaining himself the position as the Director in Protiviti. He has led several large scale asset management transformational projects in 15+ countries.",
      expertise:
        "Amit has completed his PGDBM (India) and holds professional certification from Institute of Risk Management.",
      experience: "20+ years",
      image: "/images/our_team/amit.webp",
    },
    {
      name: "Ujjwal Agrawal",
      role: "Co-Founder",
      background: "Ex-Big 4 Consultant",
      journey:
        "Ujjwal has over 14 years of professional experience and worked with two of the world's leading consulting firms for over a decade in Risk and Business Advisory domain. Ujjwal, in his last role served as an Associate Director with KPMG where he led Enterprise Asset Management solution.",
      expertise:
        "Ujjwal is a Chartered Accountant from India qualified at young age of 22.",
      experience: "14+ years",
      image: "/images/our_team/ujjwal.png",
    },
  ];

  const storySteps = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "The Beginning",
      subtitle: "Two IT Professionals with a Vision",
      description:
        "Alex and Sarah, seasoned IT professionals, recognized a critical gap in the market. While they excelled at building robust technical solutions, they realized that truly transformative software requires deep understanding of business processes.",
      highlight: "Expert at IT, but lacking business process understanding",
    },
    {
      icon: <Puzzle className="w-12 h-12" />,
      title: "The Missing Piece",
      subtitle: "Recognizing the Gap",
      description:
        "Despite their technical prowess, they found that the most successful projects required more than just coding expertise. They needed partners who understood how businesses actually operate, how processes flow, and how technology can truly simplify operations.",
      highlight: "Great technology needs great business insight",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "The Perfect Match",
      subtitle: "Big 4 Expertise Joins the Team",
      description:
        "Michael and Emily, seasoned consultants from top-tier firms, brought exactly what was missing. Process experts with deep business acumen, they understood operations but knew nothing about IT coding. Together, they formed the perfect complement.",
      highlight: "Process experts who didn't know IT coding",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "The Transformation",
      subtitle: "Where Magic Happens",
      description:
        "The fusion was extraordinary. Technical excellence met business wisdom. Complex coding capabilities merged with process optimization expertise. The result? Solutions that don't just work—they transform how businesses operate.",
      highlight: "60 years of combined experience across 20+ countries",
    },
  ];

  const achievements = [
    {
      number: "60+",
      label: "Years Combined Experience",
      description: "Decades of expertise across IT and business consulting",
    },
    {
      number: "20+",
      label: "Countries Served",
      description: "Global experience across diverse markets and cultures",
    },
    {
      number: "4",
      label: "Complementary Experts",
      description: "Perfect balance of technical and business expertise",
    },
    {
      number: "100%",
      label: "Client Success Rate",
      description: "Every project delivers measurable business value",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background elements start Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl"
          />

          {/* Floating Shapes */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-yellow-500/10 to-transparent rounded-full"
          />
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [45, 52, 45] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute bottom-32 right-1/3 w-40 h-40 bg-yellow-500/10 to-transparent rounded-3xl"
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0
                    ? "bg-yellow-400"
                    : i % 3 === 1
                    ? "bg-yellow-400"
                    : "bg-yellow-400"
                }`}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
              />
            ))}
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(246, 243, 59, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 218, 59, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>
        {/* Background Elements End */}

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-8 shadow-lg mt-28">
              <Award className="w-4 h-4 mr-2" />A Story of Perfect
              Complementarity
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              When IT Meets
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
                Business Wisdom
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our story began with a simple realization: the best software
              solutions come from the perfect marriage of technical excellence
              and deep business understanding. Here's how four professionals
              from completely different worlds came together to create something
              extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-pointer  inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Discover Our Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="cursor-pointer text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical expertise to business wisdom - the story of how
              complementary skills created something greater than the sum of its
              parts.
            </p>
          </div>

          <div className="relative">
            {/* Background Elements Start*/}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated Gradient Orbs */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4,
                }}
                className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl"
              />

              {/* Floating Geometric Shapes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [12, 18, 12],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl"
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full"
              />

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [45, 52, 45],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"
              />

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.8,
                    }}
                    className={`absolute w-2 h-2 rounded-full ${
                      i % 3 === 0
                        ? "bg-blue-400"
                        : i % 3 === 1
                        ? "bg-indigo-400"
                        : "bg-purple-400"
                    }`}
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                  />
                ))}
              </div>

              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>
            </div>

            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden lg:block"></div>

            {storySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-blue-400 flex items-center justify-center text-blue-600 shadow-lg z-10 hidden lg:flex">
                  {step.icon}
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Background Elements start */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Animated Gradient Orbs */}
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-3xl"
                      />

                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2,
                        }}
                        className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/10 rounded-full blur-3xl"
                      />

                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.25, 0.45, 0.25],
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 4,
                        }}
                        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl"
                      />

                      {/* Floating Geometric Shapes */}
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          rotate: [12, 18, 12],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl"
                      />

                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full"
                      />

                      <motion.div
                        animate={{
                          y: [0, -15, 0],
                          rotate: [45, 52, 45],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 3,
                        }}
                        className="absolute bottom-32 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"
                      />

                      {/* Floating Particles */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -30, 0],
                              x: [0, 15, 0],
                              opacity: [0.3, 0.8, 0.3],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 4 + i * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.8,
                            }}
                            className={`absolute w-2 h-2 rounded-full ${
                              i % 3 === 0
                                ? "bg-blue-400"
                                : i % 3 === 1
                                ? "bg-indigo-400"
                                : "bg-purple-400"
                            }`}
                            style={{
                              left: `${20 + i * 10}%`,
                              top: `${30 + (i % 2) * 40}%`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Grid Pattern */}
                      <div className="absolute inset-0 opacity-[0.02]">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                          }}
                        />
                      </div>
                    </div>
                    {/* end background elements */}

                    <div className="flex items-center mb-4 lg:hidden">
                      <div className="text-blue-600 mr-4">{step.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {step.subtitle}
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 rounded-lg text-sm font-medium">
                      <Target className="w-4 h-4 mr-2" />
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet the Dream Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four professionals who discovered that their individual expertise,
              when combined, creates solutions that transform businesses across
              the globe.
            </p>
          </div>

          {/* IT Founders */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                The Technical Visionaries
              </h3>
              <p className="text-gray-600">
                Where it all began - two IT professionals with a bigger vision
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.slice(0, 2).map((founder, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2 border-l-4 border-blue-500">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {founder.name}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-2">
                        {founder.role}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-3">
                        <Code className="w-3 h-3 mr-1" />
                        {founder.background}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {founder.journey}
                      </p>
                      <div className="border-t pt-3">
                        <p className="text-xs text-gray-500 font-medium mb-1">
                          Expertise: {founder.expertise}
                        </p>
                        <p className="text-xs text-gray-500">
                          Experience: {founder.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Founders */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                The Business Strategists
              </h3>
              <p className="text-gray-600">
                The missing pieces that completed the puzzle
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.slice(2, 4).map((founder, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2 border-l-4 border-purple-500">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {founder.name}
                      </h4>
                      <p className="text-purple-600 font-semibold mb-2">
                        {founder.role}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium mb-3">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {founder.background}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {founder.journey}
                      </p>
                      <div className="border-t pt-3">
                        <p className="text-xs text-gray-500 font-medium mb-1">
                          Expertise: {founder.expertise}
                        </p>
                        <p className="text-xs text-gray-500">
                          Experience: {founder.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Power of Unity
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              When diverse expertise comes together, extraordinary things
              happen. Here's what our combined experience brings to every
              project.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white bg-opacity-10 rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-5xl font-bold text-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <h3 className="text-xl font-bold text-blue mb-3">
                    {achievement.label}
                  </h3>
                  <p className="text-blue text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique combination creates a perspective that others simply
              cannot replicate.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 mb-6">
                <Lightbulb className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Excellence Meets Business Insight
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just build software - we craft solutions that
                understand your business processes and transform how you
                operate.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-purple-600 mb-6">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Perspective, Local Understanding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With experience across 20+ countries, we bring global best
                practices while understanding local business nuances.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-teal-600 mb-6">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Learning & Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our diverse backgrounds mean we're constantly learning from each
                other, bringing fresh perspectives to every challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let our unique blend of technical mastery and business wisdom
            transform your operations. Experience what happens when IT
            excellence meets strategic consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Transformation
              <CheckCircle className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              <Users className="w-5 h-5 mr-2" />
              Meet the Team
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
