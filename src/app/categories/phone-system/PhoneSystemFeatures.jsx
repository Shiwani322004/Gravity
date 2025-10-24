'use client'
import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, Globe, Download, Shield, MessageCircle } from 'lucide-react';

export default function PhoneSystemFeatures() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTimelineItems(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: "2024",
      title: "AI-Powered Call Analytics",
      description: "Advanced machine learning algorithms for call pattern analysis and real-time insights with predictive analytics",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 50+ new countries with local numbers and regional support teams deployed worldwide",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Mobile App 3.0",
      description: "Complete redesign with offline capabilities and enhanced user experience across all platforms",
      icon: <Download className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance certifications for enterprise clients with advanced threat protection",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      year: "2024 Q4",
      title: "Voice AI Assistant",
      description: "Next-generation voice AI for automated customer support and intelligent call handling with natural language processing",
      icon: <MessageCircle className="w-6 h-6" />,
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0a2540]">
            Our Innovation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Milestones that shaped our vision for modern business communication
          </p>
        </div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] via-blue-400 to-[#007bff] transform -translate-x-1/2 hidden lg:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] via-blue-400 to-[#007bff] lg:hidden"></div>

          <div className="space-y-12 lg:space-y-0">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 transition-all duration-700 transform ${
                  visibleTimelineItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                } ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 lg:left-1/2 top-6 w-4 h-4 bg-white border-4 border-[#007bff] rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-[#007bff]/25"></div>
                
                {/* Content Card */}
                <div 
                  className={`flex-1 lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  } ml-12 lg:ml-0`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  <div className={`bg-white rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer group hover:shadow-2xl min-h-[200px] flex flex-col justify-between ${
                    activeTimeline === index 
                      ? 'border-[#007bff] shadow-xl scale-105' 
                      : 'border-gray-200 hover:border-[#007bff]/50'
                  }`}>
                    {/* Year Badge */}
                    <div className="absolute -top-3 -left-3 px-4 py-2 rounded-full text-white font-bold text-sm bg-gradient-to-r from-[#007bff] to-blue-600 shadow-lg">
                      {item.year}
                    </div>

                    <div className="flex items-start gap-4 mt-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#007bff] to-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-[#0a2540] mb-3 leading-tight group-hover:text-[#007bff] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 flex items-center gap-2 pt-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-[#007bff] to-blue-600 transition-all duration-1000"
                          style={{
                            width: activeTimeline === index ? '100%' : '0%',
                            transitionDelay: activeTimeline === index ? '300ms' : '0ms'
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {activeTimeline === index ? 'Completed' : 'Milestone'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="lg:w-2/12 hidden lg:block"></div>
              </div>
            ))}
          </div>

          {/* Floating Connection Lines */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {timelineData.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className={`absolute left-1/2 h-8 bg-gradient-to-r from-[#007bff] to-blue-600 transform -translate-x-1/2 transition-all duration-1000 ${
                  visibleTimelineItems.includes(index) ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  top: `${(index * 25) + 12}%`,
                  width: '2px',
                  transitionDelay: `${(index + 1) * 200}ms`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
            <div className="text-sm text-gray-600">Journey Progress</div>
            <div className="flex items-center gap-2">
              <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#007bff] to-blue-600 rounded-full transition-all duration-1000"
                  style={{ width: `${((activeTimeline + 1) / timelineData.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-[#007bff]">
                {activeTimeline + 1}/{timelineData.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}