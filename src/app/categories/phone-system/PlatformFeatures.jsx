'use client'
import React from 'react';
import { BarChart3, Users, Shield } from 'lucide-react';

export default function PlatformFeatures() {
  const popupBlocks = [
    {
      id: 1,
      title: "Call Analytics Dashboard",
      description: "Real-time insights into call performance metrics, customer behavior patterns, and agent productivity with comprehensive reporting and AI-driven recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time metrics", "Custom reports", "Performance tracking", "Trend analysis", "AI insights"]
    },
    {
      id: 2,
      title: "Team Collaboration Hub",
      description: "Seamless communication and file sharing platform for distributed teams with integrated video conferencing and project management tools",
      icon: <Users className="w-8 h-8" />,
      features: ["Video calls", "File sharing", "Team messaging", "Screen sharing", "Project management"]
    },
    {
      id: 3,
      title: "Security Command Center",
      description: "Enterprise-grade security monitoring with real-time threat detection and compliance management across all communication channels",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat detection", "Compliance monitoring", "Access control", "Audit logs", "Real-time alerts"]
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #007bff 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0a2540]">
            Interactive Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our powerful features designed for your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {popupBlocks.map((block, index) => (
            <div
              key={block.id}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#007bff] hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-[#007bff]/10 text-[#007bff] group-hover:bg-gradient-to-r group-hover:from-[#007bff] group-hover:to-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {block.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4 leading-tight">{block.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-1">{block.description}</p>
              
              <div className="flex gap-2 flex-wrap">
                {block.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}