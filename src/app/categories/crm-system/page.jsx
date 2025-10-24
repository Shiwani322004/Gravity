'use client';

import { 
  BarChart3, 
  Users, 
  Workflow, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic'

export default function CRMPage() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const crmCards = [
    {
      badge: "Best for Growing Businesses",
      provider: "Zoho CRM",
      //vendor: "Zoho",
      vendorLogo: "/images/zoho.png",
      price: "Starts at $14 per user per month",
      features: ["Office 365 integration", "Zoho Marketplace", "24/7 customer support"],
      buttonText: "Compare Quotes",
      icon: <Zap className="text-blue-500" size={20} />,
      accentColor: "hover:border-blue-400/50"
    },
    {
      badge: "Best for Customer Lifecycle",
      provider: "Creatio",
      //vendor: "Creatio",
      vendorLogo: "/images/creatio.png",
      price: "Starts at $25 per user per month",
      features: ["14-day free trial", "No-code automation", "24/7 customer support"],
      buttonText: "Compare Quotes",
      icon: <Workflow className="text-cyan-500" size={20} />,
      accentColor: "hover:border-cyan-400/50"
    },
    {
      badge: "Best for Sales & Marketing",
      provider: "HubSpot CRM",
     // vendor: "HubSpot",
      vendorLogo: "/images/hubspot.png",
      price: "Starts at $9 per month per user",
      features: ["1,000 marketing contacts", "Email chat support", "Marketing automation"],
      buttonText: "Compare Quotes",
      icon: <Users className="text-blue-600" size={20} />,
      accentColor: "hover:border-blue-500/50"
    },
    {
      badge: "Best All-In-One Option",
      provider: "HoneyBook",
     // vendor: "HoneyBook",
      vendorLogo: "/images/honeybook.png",
      price: "Starts at $29 per user per month",
      features: ["7-day free trial", "Project management", "24/7 phone and email support"],
      buttonText: "Compare Quotes",
      icon: <BarChart3 className="text-blue-400" size={20} />,
      accentColor: "hover:border-blue-400/50"
    },
    {
      badge: "Best for Automation",
      provider: "Pipedrive",
      //vendor: "Pipedrive",
      vendorLogo: "/images/pipedrive.png",
      price: "Starts at $14 per user per month",
      features: ["Free 14-day trial", "Sales automation", "24/7 online chat support"],
      buttonText: "Compare Quotes",
      icon: <Brain className="text-cyan-600" size={20} />,
      accentColor: "hover:border-cyan-500/50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 text-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      

      {/* Enhanced Hero Section */}
      <section 
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              {/* Main Heading */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Find the Perfect
                  </span>
                  <span className={`block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    CRM Software
                  </span>
                </h1>
                
                <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  At Compare-bazaar, we know how important it is to find the right tools to support your business. 
                  That's why we suggest using the best CRM software—designed to work effortlessly with today's 
                  VoIP systems and help you build stronger customer relationships.
                </p>
              </div>

              {/* Key Benefits */}
              <div className={`flex flex-wrap justify-center gap-6 pt-6 transition-all duration-700 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {["AI-Powered Insights", "Smart Automation", "Real-Time Analytics", "Seamless Integration", "24/7 Support"].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200/60">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CRM Provider Cards Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {crmCards.map((card, index) => (
                <div
                  key={card.provider}
                  className={`group relative bg-white rounded-2xl border-2 border-gray-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 p-6 ${card.accentColor} hover:bg-blue-50/30 flex flex-col h-full`}
                  style={{ 
                    animationDelay: `${(index + 1) * 200}ms`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Content Section */}
                  <div className="flex-1">
                    {/* Badge with Icon */}
                    <div className="relative flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium">
                        {card.icon}
                        <span className="max-w-[100px] truncate">{card.badge}</span>
                      </div>
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    </div>

                    {/* Provider & Vendor with Larger Logo */}
                    <div className="relative mb-4">
                      <h3 className="text-lg font-bold text-gray-900 truncate">{card.provider}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="relative w-55 h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-200/60 flex items-center justify-center p-1">
                          {/* Fallback text if image fails to load */}
                          <div className="text-lg font-bold text-blue-600 bg-white px-4 py-2 rounded-lg border border-blue-200 shadow-sm">
                            {card.vendor}
                          </div>
                          {/* Uncomment below when you have actual images */}
                          {/*
                          <Image 
                            src={card.vendorLogo}
                            alt={`${card.vendor} logo`}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.target.style.display = 'none';
                            }}
                          />
                          */}
                        </div>
                        <p className="text-gray-500 text-sm font-semibold">{card.vendor}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="relative mb-4">
                      <p className="text-md font-semibold text-gray-900">{card.price}</p>
                    </div>

                    {/* Features */}
                    <div className="relative space-y-2">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-gray-600 group/feature">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                          <span className="text-xs leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4 border-t border-gray-200/60">
                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-sm">{card.buttonText}</span>
                      <ArrowRight size={14} className="relative group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-lg max-w-2xl mx-auto relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right CRM?</h3>
                <p className="text-gray-600 mb-6">
                  Our experts will help you compare features and pricing from top CRM vendors to find the perfect solution for your business growth.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group/cta mx-auto">
                  Get Free Quotes
                  <ArrowRight size={18} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page sections remain the same */}
      <div className="relative z-10">
        {/* Features Grid Section */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your sales process and drive revenue growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👥",
                title: "Customer Management",
                description: "Centralize all customer data with intelligent segmentation and relationship tracking"
              },
              {
                icon: "📊",
                title: "Sales Analytics",
                description: "Real-time sales performance metrics with predictive forecasting and KPI tracking"
              },
              {
                icon: "⚡",
                title: "Workflow Automation",
                description: "Automate repetitive tasks and create custom workflows to boost team productivity"
              },
              {
                icon: "🤖",
                title: "AI Insights",
                description: "AI-powered recommendations and insights to optimize your sales strategies"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer hover:border-blue-300"
              >
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
                <div className="mt-4 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Automation & Analytics Section */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-200/60 shadow-lg">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full bg-blue-50 rounded-lg p-4 text-center border border-blue-200 text-blue-700 font-medium">
                    Lead Captured
                  </div>
                  <div className="text-2xl text-blue-500">↓</div>
                  <div className="w-full bg-cyan-50 rounded-lg p-4 text-center border border-cyan-200 text-cyan-700 font-medium">
                    AI Qualification
                  </div>
                  <div className="text-2xl text-cyan-500">↓</div>
                  <div className="w-full bg-blue-50 rounded-lg p-4 text-center border border-blue-200 text-blue-700 font-medium">
                    Automated Follow-up
                  </div>
                  <div className="text-2xl text-blue-500">↓</div>
                  <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-4 text-center font-semibold text-white">
                    Deal Closed
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                  <span className="text-sm font-semibold text-white">AI Processing</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Intelligent Automation{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Meets Analytics
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our platform combines powerful automation with deep analytics to give you unprecedented insights into your sales process and customer behavior.
              </p>
              <div className="space-y-4">
                {[
                  "AI-powered lead scoring and routing",
                  "Automated workflow triggers and actions",
                  "Real-time performance analytics",
                  "Predictive revenue forecasting"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}