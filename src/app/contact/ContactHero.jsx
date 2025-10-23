'use client';

import { 
  Phone, 
  Clock,
  Rocket,
  BarChart3,
  Target,
  Users,
  Zap
} from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function ContactHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
      className="bg-[#0a2540] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#007bff] to-[#0a2540] rounded-xl flex items-center justify-center">
                  <Rocket className="text-white" size={28} />
                </div>
                <div>
                  <h1 className="font-bold text-4xl bg-gradient-to-r from-[#007bff] to-white bg-clip-text text-transparent">
                    B2B Gravity
                  </h1>
                  <p className="text-white/70 mt-1">Contact Us</p>
                </div>
              </div>
              
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Let's Start Your<br />
                <span className="text-[#007bff]">Success Story</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Ready to transform your business with data-driven solutions? 
                Our expert team is here to help you achieve remarkable growth 
                and measurable results.
              </p>
              
              <div className="flex items-center gap-6 p-6 bg-white/10 rounded-2xl border border-white/20">
                <div className="w-14 h-14 rounded-full bg-[#007bff]/20 flex items-center justify-center">
                  <Phone className="text-[#007bff]" size={24} />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Speak with an expert</p>
                  <p className="text-2xl font-semibold">+1 (800) 555-1234</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Professional Card */}
          <div className="lg:w-2/5">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Why Choose B2B Gravity?</h3>
              <div className="w-16 h-1 bg-[#007bff] rounded-full mb-6"></div>
              
              <div className="space-y-4 mb-8">
                {[
                  { text: "Data-driven strategies for measurable results", icon: BarChart3 },
                  { text: "Industry-specific expertise", icon: Target },
                  { text: "Proven track record of success", icon: Users },
                  { text: "Customized business solutions", icon: Zap }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#007bff]/20 flex items-center justify-center shrink-0">
                      <item.icon className="text-[#007bff]" size={18} />
                    </div>
                    <p className="text-white/90 pt-1.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">Response Time</p>
                    <p className="text-lg font-semibold">Within 4 Hours</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-[#007bff] flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}