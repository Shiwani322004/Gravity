import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/homeData';

const ServicesSection = () => {
  const handleExploreNow = () => {
    window.location.href = '/services';
  };

  const handleExploreService = (link) => {
    window.location.href = link;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-[#007BFF]/10 to-[#007BFF]/10 text-[#007BFF] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-[#007BFF]/20">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-[#082540]">Solutions That</span>{' '}
            <span className="text-[#007BFF]">
              Drive Results
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive B2B marketing services designed to accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-[#FFFFFF] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#007BFF]/20 overflow-hidden"
            >
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082540]/50 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#082540] mb-4 group-hover:text-[#007BFF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={() => handleExploreService(service.link)}
                className="inline-flex items-center gap-2 text-[#007BFF] font-bold group-hover:gap-3 transition-all bg-[#007BFF]/10 hover:bg-[#007BFF] hover:text-[#FFFFFF] px-4 py-2 rounded-full"
              >
                Explore More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleExploreNow}
            className="inline-flex items-center gap-3 bg-[#007BFF] hover:bg-[#0056b3] text-[#FFFFFF] px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#007BFF]/50 border-2 border-transparent hover:border-[#FFFFFF]/50"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;