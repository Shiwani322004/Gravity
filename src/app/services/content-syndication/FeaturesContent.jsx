'use client'
import React from 'react';
import { Share2, BarChart, Shield, Filter } from 'lucide-react';

const FeaturesContent = () => {
  const features = [
    {
      icon: Share2,
      title: "Multi-Platform Distribution",
      description: "Simultaneously publish across 500+ premium B2B platforms and industry networks",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Comprehensive tracking with real-time insights and ROI measurement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "Guaranteed placement on reputable, brand-safe platforms only",
      image: "https://images.unsplash.com/photo-1678132218412-0f18fab9b537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Filter,
      title: "Smart Targeting",
      description: "AI-powered audience targeting for maximum engagement",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Advanced Syndication
            <span className="block bg-gradient-to-r from-[#007BFF] to-[#00D4FF] bg-clip-text text-transparent">
              Platform Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools and intelligent features to maximize your content's reach and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-[#007BFF] transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#007BFF] group-hover:to-[#00D4FF] transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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

export default FeaturesContent;