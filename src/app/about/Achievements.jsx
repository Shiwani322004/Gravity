import React from 'react';
import { achievements } from '@/data/aboutData';

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#082540] to-[#082540]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#FFFFFF]">
            Our Achievements<br />
            <span className="text-[#007BFF]">& Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="group bg-[#FFFFFF]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#FFFFFF]/20 hover:bg-[#FFFFFF]/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#007BFF]/20 text-center"
              >
                <Icon className="w-12 h-12 text-[#007BFF] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">{achievement.title}</h3>
                <p className="text-[#FFFFFF]/80 text-sm">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;