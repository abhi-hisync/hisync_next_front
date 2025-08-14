"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function FooterSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Single Grid Section: Logo, Desc, Newsletter, Links */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Left Column: Logo, Description, Newsletter */}
          <div className="lg:col-span-2 flex flex-col pr-5">
            <div className="flex items-center space-x-3 mb-12">
              <Image
                src="/images/logo/HISYNC.png"
                alt="HISYNC Logo"
                width={170}
                height={40}
                priority
              />
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Integrated transformation partner for enterprise success. Strategic consulting meets custom technology solutions.
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Stay Updated
              </h4>
              {isSubscribed ? (
                <div className="flex items-center space-x-3 bg-slate-800/50 border border-green-500/30 rounded-xl p-4 text-white">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium">Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 border-t border-b border-l border-slate-600 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700 transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Services",
                links: [
                  { name: "Business Consulting", href: "#" },
                  { name: "Custom ERP Solutions", href: "#" },
                  { name: "Process Optimization", href: "#" },
                  { name: "Digital Transformation", href: "#" },
                  { name: "Cloud Migration", href: "#" }
                ]
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "#" },
                  { name: "Our Team", href: "#" },
                  { name: "Case Studies", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "News", href: "#" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { name: "Documentation", href: "#" },
                  { name: "Help Center", href: "#" },
                  { name: "API Reference", href: "#" },
                  { name: "System Status", href: "#" },
                  { name: "Partners", href: "#" }
                ]
              },
              {
                title: "Support",
                links: [
                  { name: "Contact Sales", href: "#" },
                  { name: "Get Support", href: "#" },
                  { name: "Schedule Demo", href: "#" },
                  { name: "Community", href: "#" },
                  { name: "Training", href: "#" }
                ]
              }
            ].map((column, index) => (
              <div
                key={index}
                className={`space-y-4 animate-fade-in-delay-${(index + 1) * 100}`}
              >
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Left Side - Copyright & Social */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-slate-400 text-sm">
                © 2025 HiSync, Inc. All rights reserved.
              </p>
              {/* Social Links */}
              <div className="flex space-x-6">
                {[
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/hisync", icon: "linkedin" },
                  { name: "X", href: "#", icon: "X" },
                  { name: "GitHub", href: "#", icon: "github" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-px"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      )}
                      {social.icon === "X" && (
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.65 19.57h2.61l-10.59-12.08L1.39 1.153H-1.3l10.89 12.48L21.86 22.846h-4.61l-6.1-8.22-1.74-2.35-.05-.07z"/>
                      )}
                      {social.icon === "github" && (
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {/* Right Side - Legal Links */}
            <div className="flex flex-wrap gap-8">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Security", href: "#" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
