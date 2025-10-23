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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
         
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Solutions That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Drive Excellence
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your B2B marketing with our comprehensive suite of data-driven services 
            designed to deliver <span className="font-semibold text-blue-600">measurable results</span> and accelerate growth
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-90"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with Enhanced Design */}
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl shadow-lg w-16 h-16 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative h-44 mb-6 rounded-2xl overflow-hidden group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                  {service.description}
                </p>
                
                {/* Enhanced Button */}
                <button
                  onClick={() => handleExploreService(service.link)}
                  className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 border border-blue-500/20 w-full justify-center"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ServicesSection;