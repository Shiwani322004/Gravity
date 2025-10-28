'use client'
import React from 'react';
import { Video, Users, Monitor, MessageCircle, Shield, Settings } from 'lucide-react';

export default function VideoConferencingPlatform() {
  const platformBlocks = [
    {
      id: 1,
      title: "HD Video & Audio",
      description: "Crystal-clear video quality with advanced audio processing, noise cancellation, and adaptive bandwidth optimization for seamless communication",
      icon: <Video className="w-8 h-8" />,
      features: ["4K video quality", "Noise cancellation", "Auto-framing", "Virtual backgrounds", "Audio enhancement"]
    },
    {
      id: 2,
      title: "Screen Sharing",
      description: "Advanced screen sharing capabilities with annotation tools, remote control, and multi-screen support for effective presentations and collaboration",
      icon: <Monitor className="w-8 h-8" />,
      features: ["Full screen sharing", "Application sharing", "Annotation tools", "Remote control", "Multi-monitor support"]
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Integrated collaboration tools including chat, file sharing, whiteboarding, and breakout rooms for enhanced team productivity",
      icon: <Users className="w-8 h-8" />,
      features: ["Real-time chat", "File sharing", "Digital whiteboard", "Breakout rooms", "Polling & Q&A"]
    },
    {
      id: 4,
      title: "Meeting Management",
      description: "Comprehensive meeting controls with scheduling, recording, transcription, and participant management for organized virtual meetings",
      icon: <MessageCircle className="w-8 h-8" />,
      features: ["Meeting scheduling", "Cloud recording", "Auto transcription", "Participant controls", "Meeting analytics"]
    },
    {
      id: 5,
      title: "Security & Compliance",
      description: "Enterprise-grade security with end-to-end encryption, access controls, and compliance certifications for secure communications",
      icon: <Shield className="w-8 h-8" />,
      features: ["End-to-end encryption", "Waiting rooms", "Meeting passwords", "Admin controls", "Compliance certifications"]
    },
    {
      id: 6,
      title: "Integration & APIs",
      description: "Seamless integration with business applications, calendar systems, and custom development through comprehensive APIs",
      icon: <Settings className="w-8 h-8" />,
      features: ["Calendar integration", "CRM connectivity", "API access", "Third-party apps", "Custom development"]
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
            Video Conferencing Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive video conferencing capabilities designed for seamless virtual collaboration
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