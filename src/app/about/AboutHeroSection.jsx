'use client'
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#082540] via-[#0a2a46] to-[#0c2f4c] overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        {/* Subtle Corner Gradients - Non Circular */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#007BFF] to-transparent opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-[#00D4FF] to-transparent opacity-5"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[length:30px_30px] md:bg-[length:50px_50px] bg-[linear-gradient(to_right,#007BFF_1px,transparent_1px),linear-gradient(to_bottom,#007BFF_1px,transparent_1px)]"></div>
      </div>


      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full py-8 md:py-16">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Enhanced Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                We Are
                <span className="block text-transparent bg-gradient-to-r from-[#007BFF] via-[#00A3FF] to-[#00D4FF] bg-clip-text animate-gradient-x">
                  Digital
                </span>
                Innovators
              </h1>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#00D4FF] rounded-full"></div>
            </div>
            
            {/* Enhanced Description */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
                We specialize in <span className="text-[#00D4FF] font-semibold">B2B digital marketing</span> and publishing, 
                connecting businesses with innovative solutions that drive growth and success in the digital landscape.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                Our expertise helps companies navigate the complex world of digital transformation 
                with strategic approaches and cutting-edge technologies.
              </p>
            </div>
          </div>

          {/* Right Content - Enhanced Animated Cards */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md space-y-4 md:space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Digital Marketing",
                  description: "Comprehensive digital strategies that drive business growth and market presence.",
                  delay: "animation-delay-0"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  ),
                  title: "Global Publishing",
                  description: "Worldwide content distribution and publishing solutions for businesses.",
                  delay: "animation-delay-300"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Business Solutions",
                  description: "Tailored solutions that address specific business challenges and opportunities.",
                  delay: "animation-delay-600"
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className={`
                    group bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 
                    transform transition-all duration-500 ease-out
                    animate-card-slide-in opacity-0
                    hover:bg-white/10 hover:border-[#007BFF]/40 hover:scale-105
                    hover:shadow-xl md:hover:shadow-2xl hover:shadow-[#007BFF]/20
                    ${card.delay}
                  `}
                  style={{
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#007BFF] to-[#00D4FF] rounded-lg md:rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3 transition-all duration-300 group-hover:text-[#00D4FF] truncate">
                        {card.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-sm md:text-base transition-all duration-300 group-hover:text-white/90 line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes gradientX {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-card-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }
        
        .animation-delay-0 {
          animation-delay: 0ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }

        /* Line clamp utility for text truncation */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile-first responsive design */
        @media (max-width: 640px) {
          .animate-card-slide-in {
            animation: slideIn 0.6s ease-out forwards;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHeroSection;
