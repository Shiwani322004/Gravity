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

        <h2 className="text-4xl md:text-6xl font-black mb-6">
          <span className="text-[#082540]">Let's Drive Your</span><br />
          <span className="text-[#007BFF]">
            Business Growth
          </span>
        </h2>
        <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8 rounded-full"></div>
        <p className="text-sm sm:text-base text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Partner with B2B Gravity and discover how our data-driven strategies can transform your marketing ROI. 
          Let's find those opportunities together.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
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