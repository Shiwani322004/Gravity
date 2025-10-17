'use client'
import React from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Strategy Development",
      description: "We analyze your target market and develop a customized lead generation strategy",
      duration: "3-5 days",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Implementation of tools and systems for seamless lead capture and management",
      duration: "2-4 days",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      step: "03",
      title: "Execution & Monitoring",
      description: "Active campaign management with real-time performance tracking and optimization",
      duration: "Ongoing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      step: "04",
      title: "Analysis & Reporting",
      description: "Comprehensive reporting with insights and recommendations for continuous improvement",
      duration: "Weekly",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#007BFF]/5 to-[#082540]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#082540]">
            Our 4-Step
            <span className="block text-[#007BFF]">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that delivers consistent, high-quality leads month after month.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                {step.step}
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-[#082540] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center gap-2 text-[#007BFF] font-semibold text-sm">
                      Learn more
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;