'use client';

import { 
  Phone, 
  Video, 
  Users, 
  BarChart3, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Play,
  Star
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
      vendor: "Ooma",
      price: "Starts at $19.95 per user/month",
      features: ["No Contract", "50+ Standard Features", "Virtual receptionist"],
      buttonText: "Compare Quotes"
    },
    {
      badge: "Best for Enterprises",
      provider: "RingEX",
      vendor: "RingCentral",
      price: "Starts at $20/user/month paid monthly",
      features: ["100 participant video meetings", "24/7 customer support", "Advanced analytics"],
      buttonText: "Compare Quotes"
    },
    {
      badge: "Video Conferencing",
      provider: "Zoom Phone",
      vendor: "Zoom",
      price: "Starts at $10 monthly per user/month",
      features: ["International Calling", "24/7 customer support", "Team Chat"],
      buttonText: "Compare Quotes"
    },
    {
      badge: "Best for Support",
      provider: "Dialpad",
      vendor: "dialpad",
      price: "Standard at $15 per user/month",
      features: ["HD calls and meetings", "Live transcripts", "Instant call summaries"],
      buttonText: "Compare Quotes"
    },
    {
      badge: "Best Value",
      provider: "Vonage",
      vendor: "VONAGE",
      price: "Starts at $15.99 per user/month",
      features: ["Unlimited domestic dialing", "Desktop and mobile apps", "Voicemail to email"],
      buttonText: "Compare Quotes"
    },
    {
      badge: "Most Reliable",
      provider: "Nextiva",
      vendor: "NEXTIVA",
      price: "Starts at $18.95 per user/month",
      features: ["99.999% uptime", "Unlimited voice & video", "CRM integrations"],
      buttonText: "Compare Quotes"
    }
  ];

  return (
    <div>
      {/* Phone Systems Hero Section */}
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
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 font-medium text-sm transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <Phone size={16} />
                Compare Top Business Phone Systems
              </div>

              {/* Main Heading */}
              <div className="space-y-4 max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Find the Perfect
                  </span>
                  <span className={`block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Business Phone System
                  </span>
                </h1>
                
                <p className={`text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Get free quotes from top vendors and compare pricing, features, and reviews to find the best VoIP and UCaaS solution for your business needs.
                </p>
              </div>

              {/* Key Benefits */}
              <div className={`flex flex-wrap justify-center gap-6 pt-4 transition-all duration-700 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {["AI-Driven Analytics", "Auto-Attendants", "Seamless Integrations", "24/7 Support", "Crystal-Clear Quality"].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Provider Cards Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providerCards.map((card, index) => (
                <div
                  key={card.provider}
                  className={`group bg-white rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-2 p-6`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium mb-4">
                    <Star size={12} className="fill-blue-500 text-blue-500" />
                    {card.badge}
                  </div>

                  {/* Provider & Vendor */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{card.provider}</h3>
                    <p className="text-gray-500 font-medium">{card.vendor}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-gray-900">{card.price}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn">
                    {card.buttonText}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
              <p className="text-gray-600 mb-6">
                Our experts will help you compare features and pricing from top vendors to find the perfect phone system for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
                  Get Free Quotes
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-300 hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  <Play size={18} className="text-blue-600" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Categories Content (if you want to keep it) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Categories</h1>
            <p className="text-lg text-gray-600">Explore our comprehensive range of business communication solutions</p>
          </div>
        </div>
      </section>
    </div>
  )
}