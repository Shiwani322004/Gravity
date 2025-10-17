'use client'
import React, { useState, useEffect } from 'react';
import { BarChart3, Settings, TrendingUp, Shield, Globe, Rocket, Zap } from 'lucide-react';

const ProvenResults = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const resultsData = [
    {
      icon: TrendingUp,
      metric: "245%",
      description: "Increase in Qualified Leads",
    },
    {
      icon: Shield,
      metric: "98%",
      description: "Data Accuracy Rate",
    },
    {
      icon: Rocket,
      metric: "3.2x",
      description: "Higher Conversion Rates",
    },
    {
      icon: Globe,
      metric: "50+",
      description: "Countries Reached",
    },
    {
      icon: BarChart3,
      metric: "89%",
      description: "Client Retention Rate",
    }
  ];

  // Auto-slide animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % resultsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [resultsData.length]);

  return (
    <>
      {/* Animated Results Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#082540]">
              Proven <span className="text-[#007BFF]">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our services drive measurable success for businesses worldwide
            </p>
          </div>

          {/* Animated Carousel Container */}
          <div className="relative">
            {/* Track for infinite scrolling */}
            <div className="flex space-x-8 animate-scroll hover:animate-pause">
              {/* First Set */}
              {resultsData.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-black text-gray-900 mb-3">{item.metric}</div>
                      <div className="text-lg font-semibold text-gray-600">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate Set for Seamless Loop */}
              {resultsData.map((item, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-black text-gray-900 mb-3">{item.metric}</div>
                      <div className="text-lg font-semibold text-gray-600">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {resultsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#007BFF] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-80rem - 2rem));
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .hover\:animate-pause:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

     
    </>
  );
};

export default ProvenResults;