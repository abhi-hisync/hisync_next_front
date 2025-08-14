"use client";

import { Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
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
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-8">
            {[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-500 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
