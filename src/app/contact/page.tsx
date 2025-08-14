"use client";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Building2, 
  Globe, 
  Users, 
  Calendar,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import FooterSection from "@/components/sections/FooterSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setError(null);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        // Handle validation errors or other failures
        console.error('Submission failed:', result);
        setError(result.message || 'An error occurred while submitting your inquiry. Please try again.');

      }
    } catch (error) {
      console.error('Network error:', error);
      setError('A network error occurred. Please check your connection and try again.');

    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoneChange = (phone: string) => {
    setFormData({
      ...formData,
      phone: phone,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9891700140 | 8826532801 | 8447304372"],
      subtitle: "Your voice matters. We’re always here to listen—and solve.",
      colors: {
        bg: "from-blue-100/70 to-blue-200/60",
        hoverBg: "hover:from-blue-200/80 hover:to-blue-300/70",
        iconBg: "from-blue-600 to-indigo-600",
        iconText: "text-white"
      }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@hisync.in"],
      subtitle: "Drop us a line. We reply faster than you can say ‘inbox zero’!",
      colors: {
        bg: "from-emerald-100/70 to-emerald-200/60",
        hoverBg: "hover:from-emerald-200/80 hover:to-emerald-300/70",
        iconBg: "from-emerald-600 to-green-600",
        iconText: "text-white"
      }
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["A708 ATS Bouquet, Sector 132, Noida", "Uttar Pradesh - 201304, India"],
      subtitle: "Our door is open (literally). Come by for coffee and solutions!",
      colors: {
        bg: "from-purple-100/70 to-purple-200/60",
        hoverBg: "hover:from-purple-200/80 hover:to-purple-300/70",
        iconBg: "from-purple-600 to-violet-600",
        iconText: "text-white"
      }
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 9:30 AM - 6:30 PM IST (Indian Standard Time)"],
      subtitle: "We align with global time zones – just ask!",
      colors: {
        bg: "from-slate-200/70 to-slate-300/60",
        hoverBg: "hover:from-slate-300/80 hover:to-slate-400/70",
        iconBg: "from-slate-600 to-gray-600",
        iconText: "text-white"
      }
    },
  ];

  const services = [
    "ERP Implementation",
    "Process Automation",
    "Business Consulting",
    "Digital Transformation",
    "System Integration",
    "Training & Support",
    "Custom Development",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden flex items-center justify-center px-4">
          {/* Premium Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:32px_32px]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="text-center max-w-md mx-auto animate-fade-in-scale relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
            <p className="text-slate-600 mb-8">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 transition-transform duration-200 shadow-xl"
            >
              Send Another Message
            </Button>
          </div>
        </div>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        
        {/* Corporate Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:60px_60px]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Professional Accent Elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-500/15 rounded-full animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-blue-400/20 rounded-full animate-pulse animation-delay-400"></div>
        
        {/* Corporate Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-200/20 to-transparent"></div>
        
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-1 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200/50 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Enterprise Contact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Let's Build Something
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Amazing</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-delay-200">
              <Card className="p-8 shadow-xl border-0 bg-white/70 backdrop-blur-xl">
                <div className="mb-0.6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Get In Touch</h2>
                  <p className="text-slate-600">Tell us about your project and we'll get back to you soon.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                      
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                        
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        containerClass="w-full"
                        inputClass="!w-full !h-auto !py-3 !pl-14 !pr-4 !rounded-xl !border !border-slate-200 focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent !transition-all !duration-300 !bg-white/80"
                        buttonClass="!bg-transparent !border-0 !border-r !border-slate-200 !rounded-l-xl hover:!bg-slate-50"
                        placeholder="12345 67890"
                        inputProps={{ name: "phone", required: true, }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  {error && (
                    <div className="sm:col-span-2 text-red-600 bg-red-100 border border-red-300 p-3 rounded-lg text-sm">
                      <strong>Error:</strong> {error}
                    </div>
                  )}

                  <div className="hover:scale-105 transition-transform duration-200">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-8 lg:gap-0 lg:justify-between h-full animate-fade-in-delay-400">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`animate-fade-in-delay-${(index + 1) * 100}`}
                >
                  <Card className={cn(
                    "p-5 shadow-lg border-0 backdrop-blur-xl transition-all duration-300 group",
                    "bg-gradient-to-br",
                    info.colors.bg,
                    info.colors.hoverBg
                  )}>
                    <div className="flex items-start space-x-4">
                      <div className={cn(
                        "w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                        info.colors.iconBg,
                        info.colors.iconText
                      )}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{info.title}</h3>
                                                {info.title === 'Phone' && (
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {info.details[0].split(' | ').map((phone, phoneIdx) => (
                              <a key={phoneIdx} href={`tel:${phone.replace(/\s/g, '')}`} className="text-slate-700 font-medium hover:text-blue-600 transition-colors">
                                {phone.trim()}
                              </a>
                            ))}
                          </div>
                        )}
                        {info.title === 'Email' && info.details.map((detail, idx) => (
                          <a key={idx} href={`mailto:${detail}`} className="text-slate-700 font-medium mb-1 block hover:text-blue-600 transition-colors">
                            {detail}
                          </a>
                        ))}
                        {info.title === 'Address' && (
                          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.details.join(', '))}`} target="_blank" rel="noopener noreferrer" className="block group/address">
                            {info.details.map((line, lineIdx) => (
                              <p key={lineIdx} className="text-slate-700 font-medium mb-1 group-hover/address:text-blue-600 transition-colors">{line}</p>
                            ))}
                          </a>
                        )}
                        {info.title === 'Office Hours' && info.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-700 font-medium mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-slate-500 mt-2">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Located in Noida, Sector 132, our office is easily accessible and equipped with modern facilities for client meetings.
            </p>
          </div>
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 animate-fade-in-delay-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.039911959824!2d77.3943493753556!3d28.53850897571698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a800000001%3A0x1914a7a5057558f6!2sATS%20Bouquet!5e0!3m2!1sen!2sin!4v1716191234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HiSync Office Location"
              className="grayscale-[20%] contrast-125"
            ></iframe>
          </div>
        </div>
      </section>
      </div>
      <FooterSection />
    </>
  );
}
