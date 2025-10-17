import React from 'react';
import { stats } from '@/data/aboutData';

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#082540] to-[#082540]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#FFFFFF]/20 hover:bg-[#FFFFFF]/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#007BFF]/20">
                  <Icon className="w-12 h-12 text-[#007BFF] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#007BFF] transition-colors">
                    {stat.number}
                  </h3>
                  <p className="text-[#FFFFFF] font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;