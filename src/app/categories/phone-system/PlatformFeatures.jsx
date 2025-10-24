'use client'
import React, { useState } from 'react';
import { BarChart3, Users, Shield, Check } from 'lucide-react';

export default function PlatformFeatures() {
  const [activePopup, setActivePopup] = useState(null);

  const popupBlocks = [
    {
      id: 1,
      title: "Call Analytics Dashboard",
      description: "Real-time insights into call performance metrics, customer behavior patterns, and agent productivity with comprehensive reporting and AI-driven recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Real-time metrics", "Custom reports", "Performance tracking", "Trend analysis", "AI insights"]
    },
    {
      id: 2,
      title: "Team Collaboration Hub",
      description: "Seamless communication and file sharing platform for distributed teams with integrated video conferencing and project management tools",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Video calls", "File sharing", "Team messaging", "Screen sharing", "Project management"]
    },
    {
      id: 3,
      title: "Security Command Center",
      description: "Enterprise-grade security monitoring with real-time threat detection and compliance management across all communication channels",
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Threat detection", "Compliance monitoring", "Access control", "Audit logs", "Real-time alerts"]
    }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #007bff 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0a2540]">
            Interactive Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hover over each block to explore our powerful features in detail
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {popupBlocks.map((block, index) => (
            <div
              key={block.id}
              className="relative mb-32"
              onMouseEnter={() => setActivePopup(block.id)}
              onMouseLeave={() => setActivePopup(null)}
            >
              {/* Main Block */}
              <div className={`bg-white rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer group h-full flex flex-col ${
                activePopup === block.id 
                  ? 'border-[#007bff] shadow-2xl scale-105' 
                  : 'border-gray-200 hover:border-[#007bff]/50 hover:shadow-xl'
              }`}>
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 ${
                  activePopup === block.id
                    ? 'bg-gradient-to-r from-[#007bff] to-blue-600 text-white scale-110'
                    : 'bg-[#007bff]/10 text-[#007bff]'
                }`}>
                  {block.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-[#0a2540] mb-4 leading-tight">{block.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-1">{block.description}</p>
                
                <div className="flex gap-2 flex-wrap">
                  {block.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popup Block */}
              {activePopup === block.id && (
                <div className="absolute top-full left-0 right-0 mt-8 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-20 animate-fade-in">
                  <img 
                    src={block.image} 
                    alt={block.title}
                    className="w-full h-56 object-cover rounded-xl mb-4"
                  />
                  <div className="space-y-3 mb-4">
                    {block.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-[#007bff] text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-300">
                    Explore Feature
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}