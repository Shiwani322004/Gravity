'use client'
import React, { useState } from 'react';
import { Target, Users, BarChart3, Zap, CheckCircle } from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Target,
      title: "Targeted Prospecting",
      description: "Precision targeting of decision-makers and key influencers in your industry",
      stats: "92% Accuracy Rate"
    },
    {
      icon: Users,
      title: "Multi-Channel Outreach",
      description: "Strategic engagement across email, social media, and professional networks",
      stats: "3.5x Response Rate"
    },
    {
      icon: BarChart3,
      title: "Lead Scoring & Qualification",
      description: "Intelligent scoring system to prioritize high-value prospects",
      stats: "45% Conversion Boost"
    },
    {
      icon: Zap,
      title: "Automated Nurturing",
      description: "Smart follow-up sequences to convert cold leads into warm opportunities",
      stats: "68% Faster Conversion"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#082540]">
            Advanced Lead Generation
            <span className="block text-[#007BFF]">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge technology and proven strategies to fill your pipeline with qualified, sales-ready leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer ${
                activeFeature === index 
                  ? 'border-[#007BFF] shadow-2xl scale-105' 
                  : 'border-gray-100 hover:border-[#007BFF]/50 hover:shadow-xl'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-2xl flex items-center justify-center transition-transform duration-300 ${
                  activeFeature === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                }`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-[#082540] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-[#007BFF] px-4 py-2 rounded-full text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {feature.stats}
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

export default FeaturesSection;