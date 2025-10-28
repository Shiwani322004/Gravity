'use client'
import React from 'react';
import { BarChart3, Users, Shield, Headphones, MessageCircle, Phone } from 'lucide-react';

export default function ContactCenterPlatform() {
  const platformBlocks = [
    {
      id: 1,
      title: "Omnichannel Dashboard",
      description: "Unified interface managing voice, email, chat, and social media interactions with real-time queue monitoring and intelligent routing capabilities",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Queue management", "Channel routing", "Performance metrics", "Custom workflows"]
    },
    {
      id: 2,
      title: "Agent Workspace",
      description: "Comprehensive agent desktop with customer context, interaction history, and collaboration tools for enhanced productivity and customer satisfaction",
      icon: <Users className="w-8 h-8" />,
      features: ["Customer profiles", "Interaction history", "Screen pop", "Internal chat", "Knowledge base"]
    },
    {
      id: 3,
      title: "Quality Management",
      description: "Advanced quality monitoring and coaching platform with automated scoring, call recording, and performance analytics for continuous improvement",
      icon: <Shield className="w-8 h-8" />,
      features: ["Call recording", "Quality scoring", "Coaching tools", "Compliance monitoring", "Performance tracking"]
    },
    {
      id: 4,
      title: "Voice Intelligence",
      description: "AI-powered conversation analytics with real-time transcription, sentiment analysis, and automated insights for data-driven decision making",
      icon: <Headphones className="w-8 h-8" />,
      features: ["Speech analytics", "Sentiment tracking", "Keyword spotting", "Compliance alerts", "Coaching insights"]
    },
    {
      id: 5,
      title: "Customer Journey",
      description: "Complete customer interaction tracking across all touchpoints with journey mapping and experience optimization capabilities",
      icon: <MessageCircle className="w-8 h-8" />,
      features: ["Journey mapping", "Touchpoint tracking", "Experience analytics", "Satisfaction scoring", "Feedback collection"]
    },
    {
      id: 6,
      title: "Workforce Optimization",
      description: "Comprehensive workforce management with forecasting, scheduling, adherence monitoring, and performance optimization tools",
      icon: <Phone className="w-8 h-8" />,
      features: ["Forecasting", "Scheduling", "Adherence tracking", "Performance analytics", "Resource planning"]
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #007bff 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0a2540]">
            Contact Center Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive contact center capabilities designed for exceptional customer service
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {platformBlocks.map((block, index) => (
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