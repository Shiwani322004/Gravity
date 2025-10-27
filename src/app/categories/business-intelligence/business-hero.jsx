'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function BusinessHero({ onOpenQuestionnaire }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const providerCards = [
    {
      provider: "Tableau",
      vendorLogo: "/images/tableau.png",
      price: "Starts at $70 per user/month",
      features: [
        "Quick, attractive data visualization",
        "Drag-and-drop interface",
        "Real-time data reflection",
        "Tableau Pulse AI insights"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "Sisense",
      vendorLogo: "/images/sisense.png",
      price: "Custom pricing available",
      features: [
        "Embedded analytics",
        "AI-powered Ask Data feature",
        "In-Chip technology",
        "Handles large datasets well"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "Qlik Sense",
      vendorLogo: "/images/qlikicon.png",
      price: "Starts at $30 per user/month",
      features: [
        "Powerful visualization tools",
        "Associative data model",
        "Self-service analytics",
        "Quality Mobile BI"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "Zoho Analytics",
      vendorLogo: "/images/zoho copy.png",
      price: "Starts at $24 per user/month",
      features: [
        "Generative AI-Infused BI",
        "Top-notch collaboration tools",
        "Advanced analytics",
        "Competitive pricing"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "IBM Cognos Analytics",
      vendorLogo: "/images/Activtrak.png",
      price: "Custom pricing available",
      features: [
        "Advanced reporting capabilities",
        "AI-powered insights",
        "Enterprise-grade security",
        "Comprehensive data integration"
      ],
      buttonText: "Compare Quotes",
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Content Section */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-8 text-left">
            <span className="text-black">What is </span>
            <span className="text-[#007bff]">Business Intelligence?</span>
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              <strong className="text-[#007bff]">Business intelligence (BI) software</strong> is any application that collects and processes large amounts of unstructured data from internal and external systems and prepares data for analysis. The software is generally used for querying and reporting complex business data. The ultimate goal of BI software is to drive better business decisions, increase revenue, improve operational efficiency, and gain competitive advantages.
            </p>

            {!showMore ? (
              <>
                <p>
                  Business intelligence tools gather data from various sources, such as databases, spreadsheets, and other business applications, and transform it into an understandable format for analysis. The software performs tasks such as data mining, forecasting, and reporting, as well as visualizing data through charts and graphs, allowing users to identify data trends and patterns...
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setShowMore(true)}
                    className="px-6 py-2 bg-gradient-to-r from-[#007bff] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    MORE +
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>
                  Business intelligence tools gather data from various sources, such as databases, spreadsheets, and other business applications, and transform it into an understandable format for analysis. The software performs tasks such as data mining, forecasting, and reporting, as well as visualizing data through charts and graphs, allowing users to identify data trends and patterns. BI software also comes with reporting capabilities so users can create custom reports and presentations shareable with stakeholders.
                </p>

                <div className="space-y-6 pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
                    My Top Picks for Business Intelligence Software
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      "Tableau: Best for data visualization - Known for quick, attractive data visualization and drag-and-drop interface good for beginners.",
                      "Sisense: Best for embedded analytics - Excellent for embedded analytics with AI-powered Ask Data feature and In-Chip technology.",
                      "Qlik Sense: Best mobile BI software - Offers powerful visualization tools and associative data model with quality mobile BI capabilities.",
                      "Zoho Analytics: Best self-service BI software - Features Generative AI-Infused BI with top-notch collaboration tools and competitive pricing.",
                      "IBM Cognos Analytics: Best for reporting - Provides advanced reporting capabilities with AI-powered insights and enterprise-grade security."
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">{item.split(':')[0]}:</strong> {item.split(':')[1]}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-lg font-semibold text-gray-900 mt-8 pt-6 border-t border-gray-200">
                    Check out my picks for the top business intelligence software below. Compare features, pricing, and get personalized recommendations for your business needs.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Provider Cards Grid */}
        <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {providerCards.map((card, index) => (
              <div
                key={card.provider}
                className="group relative bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3 p-6 flex flex-col h-full hover:border-blue-200"
              >
                {/* Content Section */}
                <div className="flex-1">
                  {/* Provider Logo */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-full h-20 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image 
                          src={card.vendorLogo}
                          alt={`${card.provider} logo`}
                          width={80}
                          height={40}
                          className="object-contain w-full h-full"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        {/* Fallback text */}
                        <div className="hidden text-2xl font-bold text-blue-600">
                          {card.provider}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Provider Name */}
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {card.provider}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <p className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {card.price}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-gray-700 group/feature">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                        <span className="text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <button 
                    onClick={onOpenQuestionnaire}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-sm font-medium">{card.buttonText}</span>
                    <ArrowRight size={16} className="relative group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}