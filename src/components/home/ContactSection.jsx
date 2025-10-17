import React from 'react';
import { ArrowRight, Megaphone } from 'lucide-react';

const ContactSection = () => {
  const handleExploreNow = () => {
    window.location.href = '/services';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#007BFF]/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #007BFF 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6">
          <span className="bg-gradient-to-r from-[#007BFF]/10 to-[#007BFF]/10 text-[#007BFF] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-[#007BFF]/20">
            Ready to Get Started?
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          <span className="text-[#082540]">Let's Drive Your</span><br />
          <span className="text-[#007BFF]">
            Business Growth
          </span>
        </h2>
        <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Partner with B2B Gravity and discover how our data-driven strategies can transform your marketing ROI. 
          Let's find those opportunities together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleExploreNow}
            className="group bg-[#007BFF] hover:bg-[#0056b3] text-[#FFFFFF] px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[#007BFF]/50 flex items-center gap-3 border-2 border-transparent hover:border-[#FFFFFF]/50"
          >
            <Megaphone className="w-6 h-6" />
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/contact"
            className="bg-[#FFFFFF] hover:bg-gray-50 text-[#082540] px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 border-2 border-[#007BFF] hover:border-[#0056b3] shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;