'use client'
import React from 'react';
import { services } from '@/data/aboutData';
import { ArrowRight, Award, Target, Users, BarChart } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-gray-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-[#007BFF]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-[#082540]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl shadow-blue-500/30 mb-8 cursor-pointer hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-300">
            <Award className="w-5 h-5" />
            Our Services
            <ArrowRight className="w-5 h-5" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#082540] leading-tight">
            Comprehensive B2B
            <span className="block text-[#007BFF]">
              Marketing Solutions
            </span>
          </h2>
          
          
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Guided by your specific objectives, supported with hard data and customer-focused creativity, 
            our marketing team pinpoints and puts you in touch with highly-qualified contacts who want your products.
          </p>
        </div>

        {/* Enhanced Services Grid - Circular Design */}
        <div className="relative">
          {/* Central Connection Lines */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-[#007BFF]/20 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#007BFF]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#007BFF]/10 transform transition-all duration-500 group-hover:border-[#007BFF] group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col">
                    
                    {/* Animated Icon Container */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-3 bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative w-16 h-16 bg-[#007BFF] rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-[#082540] mb-4 group-hover:text-[#007BFF] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed font-light flex-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default WhatWeDo;