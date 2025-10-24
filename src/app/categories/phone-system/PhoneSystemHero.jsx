'use client';

import { 
  Phone, 
  Video, 
  Users, 
  BarChart3, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic'

export default function Categories() {
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

  const providerCards = [
    {
      badge: "Best for Ease of Use",
      provider: "Ooma Office",
      //vendor: "Ooma",
      vendorLogo: "/images/ooma.png",
      price: "Starts at $19.95 per user/month",
      features: ["No Contract", "50+ Standard Features", "Virtual receptionist"],
      buttonText: "Compare Quotes",
      icon: <Zap className="text-yellow-500" size={20} />,
      accentColor: "hover:border-yellow-400/50"
    },
    {
      badge: "Best for Enterprises",
      provider: "RingEX",
      //vendor: "RingCentral",
      vendorLogo: "/images/ringcentral.png",
      price: "Starts at $20/user/month paid monthly",
      features: ["100 participant video meetings", "24/7 customer support", "Advanced analytics"],
      buttonText: "Compare Quotes",
      icon: <Users className="text-purple-500" size={20} />,
      accentColor: "hover:border-purple-400/50"
    },
    {
      badge: "Video Conferencing",
      provider: "Zoom Phone",
      //vendor: "Zoom",
      vendorLogo: "/images/zoom.png",
      price: "Starts at $10 monthly per user/month",
      features: ["International Calling", "24/7 customer support", "Team Chat"],
      buttonText: "Compare Quotes",
      icon: <Video className="text-blue-500" size={20} />,
      accentColor: "hover:border-blue-400/50"
    },
    {
      badge: "Best for Support",
      provider: "Dialpad",
      //vendor: "dialpad",
      vendorLogo: "/images/dialpad.png",
      price: "Standard at $15 per user/month",
      features: ["HD calls and meetings", "Live transcripts", "Instant call summaries"],
      buttonText: "Compare Quotes",
      icon: <MessageCircle className="text-green-500" size={20} />,
      accentColor: "hover:border-green-400/50"
    },
    {
      badge: "Best for Support",
      provider: "Vonage",
      vendorLogo: "/images/vonage.png",
      price: "Starts at $13.99 per user/month",
      features: ["Unlimited domestic calling", "Supports desktop and mobile apps", "Team messaging"],
      buttonText: "Compare Quotes",
      icon: <MessageCircle className="text-red-500" size={20} />,
      accentColor: "hover:border-red-400/50"
    }
  ];

  return (
    <div>
      {/* Enhanced Phone Systems Hero Section */}
      <section 
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section - Removed top badge */}
          <div className="text-center mb-16">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              {/* Main Heading */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Find the Perfect
                  </span>
                  <span className={`block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Business Phone System
                  </span>
                </h1>
                
                
              </div>

              {/* Key Benefits */}
              <div className={`flex flex-wrap justify-center gap-6 pt-6 transition-all duration-700 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {["AI-Driven Analytics", "Auto-Attendants", "Seamless Integrations", "24/7 Support", "Crystal-Clear Quality"].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200/60">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Provider Cards Grid - 5 Cards Horizontal */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {providerCards.map((card, index) => (
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
                  
                  {/* Content Section - Takes available space */}
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

                  {/* CTA Button - Strictly at bottom with consistent alignment */}
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

          {/* Bottom CTA - Removed Watch Demo button */}
          <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-lg max-w-2xl mx-auto relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
                <p className="text-gray-600 mb-6">
                  Our experts will help you compare features and pricing from top vendors to find the perfect phone system for your business.
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
    </div>
  )
}