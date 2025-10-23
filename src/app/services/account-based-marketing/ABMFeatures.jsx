'use client'
import React from 'react';
import { Target, Users, BarChart3 } from 'lucide-react';

const ABMFeatures = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Account Targeting",
      description: "Identify and engage high-value accounts with laser-focused targeting using intent data and firmographic insights.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Engagement",
      description: "Reach entire buying committees with personalized messaging across multiple channels and touchpoints simultaneously.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: BarChart3,
      title: "Revenue Intelligence Platform",
      description: "Track account engagement, measure pipeline impact, and optimize campaigns with real-time analytics and AI-driven insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Enterprise-Grade ABM
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Platform Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced account-based marketing tools designed to drive revenue growth, accelerate sales cycles, and maximize enterprise deal size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 hover:shadow-3xl hover:shadow-blue-200/50 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ABMFeatures;