import React from 'react';
import { ArrowRight, Lightbulb, Target, Rocket, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge strategies",
      delay: "0"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Data-driven targeting",
      delay: "100"
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "Accelerated results",
      delay: "200"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "40+ countries",
      delay: "300"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#007BFF]/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-[#007BFF]/5 to-transparent opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-[#082540]">
                Connecting You With
              </span>
              <br />
              <span className="text-[#007BFF]">
                The World
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-[#007BFF] mb-8 rounded-full"></div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
              B2B Gravity is a global B2B marketing company that caters to Enterprise and Technology companies across the globe to improve ROI on your marketing spend and shorten sales cycles with market insight and demand generation services.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
              Our intelligent marketing strategies are driven by research and data, fueled by a powerful content engine, producing creative and dynamic client brand experiences.
            </p>

            <a
              href="/about"
              className="group inline-flex items-center justify-center gap-3 bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#007BFF]/25"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Content - Enhanced Cards */}
          <div className="relative">
            {/* Floating Background Element */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#007BFF]/10 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm border border-gray-100/50 bg-white/80 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  {/* Background Color */}
                  <div className="absolute inset-0 bg-[#007BFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-[#007BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[2px] rounded-3xl bg-white"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#007BFF] text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#082540] mb-2 group-hover:text-[#007BFF] transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#007BFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;