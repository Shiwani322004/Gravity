'use client';
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
          <span className="text-[#082540]">Ready to Automate Your</span><br />
          <span className="text-[#007BFF]">
            B2B Marketing?
          </span>
        </h2>
        <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join 500+ B2B companies using our AI-powered platform to generate 3x more qualified leads and automate their entire sales pipeline.
        </p>
        <div className="flex items-center justify-center gap-8 mb-12 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Free 14-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Setup in 5 minutes</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#007BFF]/60 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3] to-[#004494] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-3">
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;