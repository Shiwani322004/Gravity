'use client';

import { 
  Phone, 
  Clock,
  Rocket,
  BarChart3,
  Target,
  Users,
  Zap,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactHero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="hero"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#0a2540] via-[#0d2b4d] to-[#1e3a5f] text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#007bff]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-10 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#007bff]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[length:50px_50px] bg-grid-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content - Enhanced with Animations */}
          <div className="lg:w-1/2">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Enhanced Header with Staggered Animation */}
              <div className="space-y-4">
                
                
                <div className="space-y-2">
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                    <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      Let's Start
                    </span>
                    <span className={`block bg-gradient-to-r from-[#007bff] via-[#00d4ff] to-[#007bff] bg-clip-text text-transparent transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      Your Success Story
                    </span>
                  </h1>
                </div>
              </div>

              {/* Enhanced Description */}
              <p className={`text-xl lg:text-2xl text-white/80 leading-relaxed transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Ready to transform your business with data-driven solutions? 
                Our expert team is here to help you achieve <span className="text-[#007bff] font-semibold">remarkable growth</span> 
                and measurable results.
              </p>

              

              {/* CTA Button */}
              <div className={`flex gap-4 transition-all duration-700 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <button className="px-8 py-4 bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#007bff]/30 transition-all duration-300 transform hover:-translate-y-1">
                  Contact Us Now
                </button>
                
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Professional Card */}
          <div className="lg:w-2/5">
            <div className={`bg-white/10 rounded-3xl p-8 border border-white/20 backdrop-blur-sm shadow-2xl shadow-black/20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
              <div className="text-center mb-8">
                
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Why Choose B2B Gravity?
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#007bff] to-[#00d4ff] rounded-full mx-auto mt-4"></div>
              </div>
              
              <div className="space-y-6 mb-8">
                {[
                  { text: "Data-driven strategies for measurable results", icon: BarChart3 },
                  { text: "Industry-specific expertise", icon: Target },
                  { text: "Proven track record of success", icon: Users },
                  { text: "Customized business solutions", icon: Zap }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105 delay-${(index + 1) * 200}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#007bff] to-[#00d4ff] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <p className="text-white/90 text-lg font-medium pt-2 flex-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
        .bg-grid-white {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
}