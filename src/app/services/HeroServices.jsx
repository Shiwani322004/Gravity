'use client'
import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Mail, Database, Target, Users, FileText } from 'lucide-react';

const HeroServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Users,
      title: "Lead Generation",
      description: "Strategic B2B lead generation campaigns that deliver qualified prospects and drive sustainable revenue growth through targeted outreach.",
      features: ["Targeted Prospecting", "Lead Scoring", "Multi-channel Approach", "Quality Assurance"]
    },
    {
      icon: FileText,
      title: "Content Syndication",
      description: "Amplify your content reach through strategic distribution across premium B2B platforms and industry networks.",
      features: ["Content Distribution", "Audience Amplification", "Performance Analytics", "ROI Tracking"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Personalized email campaigns that engage decision-makers and convert prospects into long-term customers.",
      features: ["Automated Campaigns", "A/B Testing", "Performance Tracking", "Personalization"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Comprehensive database solutions to maintain, enrich, and leverage your prospect data effectively.",
      features: ["Data Enrichment", "CRM Integration", "Regular Updates", "Data Cleansing"]
    },
    {
      icon: Target,
      title: "Account-Based Marketing",
      description: "Targeted ABM strategies that focus on high-value accounts for maximum ROI and engagement.",
      features: ["Account Targeting", "Personalized Outreach", "Revenue Alignment", "Strategic Planning"]
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#082540] to-[#0A2B4F] text-white overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#00A3FF] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 mb-8">
            Our Services
            <ArrowRight className="w-4 h-4" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
            B2B Marketing
            <span className="block bg-gradient-to-r from-[#007BFF] to-[#00D4FF] bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive marketing solutions designed to generate quality leads, 
            amplify your reach, and accelerate revenue growth through proven strategies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#007BFF] transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center gap-2 text-[#00D4FF] font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Two Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#007BFF] transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
              onMouseEnter={() => setActiveService(index + 3)}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center gap-2 text-[#00D4FF] font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroServices;