'use client'
import React from 'react';
import { ArrowRight, Award, Target } from 'lucide-react';
import { missionContent } from '@/data/aboutData';

const OurMission = () => {
  const timelineData = [
    {
      year: "2010",
      title: "Foundation Era",
      description: "Established with a vision to transform digital marketing landscape",
      milestone: "Start",
      achievements: ["First client onboarded", "Core team formed", "Initial strategy developed"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      year: "2015",
      title: "Growth Phase",
      description: "Expanded operations globally with innovative solutions",
      milestone: "Expansion",
      achievements: ["20+ countries", "50+ team members", "Revenue growth 300%"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      year: "2020",
      title: "Digital Leadership",
      description: "Became industry leaders in AI-driven marketing solutions",
      milestone: "Leadership",
      achievements: ["AI integration", "Industry awards", "100+ clients"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Pioneering next-generation digital transformation solutions",
      milestone: "Innovation",
      achievements: ["Global dominance", "Tech innovation", "Market leadership"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl shadow-blue-500/30 mb-8 cursor-pointer hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-300">
            <Award className="w-5 h-5" />
            Our Mission
            <ArrowRight className="w-5 h-5" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#082540] mb-6">
            Timeline of <span className="text-[#007BFF]">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            A decade-long journey of innovation, growth, and digital transformation leadership
          </p>
        </div>

        {/* Enhanced Horizontal Timeline */}
        <div className="relative">
          {/* Main Timeline Track */}
          <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 h-2 bg-gray-200 rounded-full z-0"></div>
          
          {/* Progress Fill */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-2 bg-gradient-to-r from-[#007BFF] to-[#00D4FF] rounded-full z-10 w-3/4"></div>

          {/* Timeline Nodes & Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-20">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 -top-6">
                  <div className="relative">
                    <div className={`w-5 h-5 bg-white border-4 ${
                      index === timelineData.length - 1 
                        ? 'border-[#007BFF] ring-4 ring-blue-100 animate-pulse' 
                        : 'border-[#007BFF]'
                    } rounded-full transform group-hover:scale-125 transition-all duration-300`}>
                      {index === timelineData.length - 1 && (
                        <div className="absolute inset-0 rounded-full bg-[#007BFF] animate-ping"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`bg-white rounded-2xl overflow-hidden border-2 ${
                  index === timelineData.length - 1 
                    ? 'border-[#007BFF] shadow-2xl shadow-blue-500/20' 
                    : 'border-gray-100 shadow-lg'
                } transform transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#007BFF]/50 group-hover:scale-105 h-full flex flex-col`}>
                  
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {item.milestone}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-xl font-black mb-3 leading-tight ${
                      index === timelineData.length - 1 ? 'text-[#007BFF]' : 'text-[#082540]'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 font-light text-sm flex-1">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connection Arrows - Enhanced */}
          <div className="hidden lg:block">
            {timelineData.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="absolute top-1/2 transform -translate-y-1/2 z-10 group"
                style={{
                  left: `${(index + 1) * 25 - 12.5}%`,
                }}
              >
                <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6 text-[#007BFF]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border-2 border-[#007BFF]/10 shadow-lg">
            <h3 className="text-2xl font-black text-[#082540] mb-4">Our Driving Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              {missionContent.description[0]}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-[#007BFF] text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <Target className="w-5 h-5" />
              Continue Our Journey
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;