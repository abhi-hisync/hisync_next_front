"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, CheckCircle, Linkedin, Github } from "lucide-react";

export default function FooterSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  // Custom icon for X as it's not in lucide-react by default
  const XIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.65 19.57h2.61l-10.59-12.08L1.39 1.153H-1.3l10.89 12.48L21.86 22.846h-4.61l-6.1-8.22-1.74-2.35-.05-.07z" />
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-800">
      {/* The py-12 class below adds the desired vertical padding */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content - Commented Out */}
        {/*
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          ...
        </div>
        */}

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Copyright & Socials */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <p className="text-slate-500 text-sm">
              © 2025 HISYNC, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/hisync"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-white hover:-translate-y-1 transform transition-all duration-300"
              >
                <Linkedin />
              </a>
              {/* <a
                href="#"
                aria-label="X"
                className="text-slate-400 hover:text-white hover:-translate-y-1 transform transition-all duration-300"
              >
                <XIcon />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-slate-400 hover:text-white hover:-translate-y-1 transform transition-all duration-300"
              >
                <Github />
              </a> */}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}