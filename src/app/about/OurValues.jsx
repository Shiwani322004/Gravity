'use client'
import React from 'react';
import { values } from '@/data/aboutData';
import { ArrowRight, Award, Sparkles, Star, Heart, Shield, Globe } from 'lucide-react';

const OurValues = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-gray-50/30 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl shadow-blue-500/30 mb-8 cursor-pointer hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-300">
            <Award className="w-5 h-5" />
            Our Values
            <ArrowRight className="w-5 h-5" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#082540] leading-tight">
            Principles That
            <span className="block text-[#007BFF]">Define Us</span>
          </h2>
        </div>

        {/* Grid Layout - Two Cards Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            
            return (
              <div key={idx} className="group relative">
                {/* Hover Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#007BFF]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#007BFF]/10 transform transition-all duration-500 group-hover:border-[#007BFF] group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col">
                  
                  {/* Icon and Header Row */}
                  <div className="flex items-center gap-6 mb-6">
                    {/* Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-4 bg-gradient-to-br from-[#007BFF]/10 to-transparent rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#0056b3] rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-[#082540] group-hover:text-[#007BFF] transition-colors duration-300 flex-1">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light text-lg mb-6 flex-1">
                    {value.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#007BFF] to-[#00D4FF] rounded-full transform origin-left transition-all duration-1000 ease-out"
                        style={{ 
                          width: '0%',
                          animation: `fillProgress 1s ease-out ${idx * 0.2}s forwards`
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-[#007BFF]">
                      {((idx + 1) / values.length * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Adjusted spacing */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform transition-all duration-300 cursor-pointer">
            <Shield className="w-5 h-5" />
            Live Our Values
            <Globe className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fillProgress {
          from {
            width: 0%;
          }
          to {
            width: ${100 / values.length * (values.length)}%;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default OurValues;