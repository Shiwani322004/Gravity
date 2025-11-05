import React from 'react';
import { ArrowRight } from 'lucide-react';



const GetStarted = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#007BFF]/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#082540]">
          Opportunities Are Out There
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's go find them together. Partner with B2B Gravity and transform your marketing ROI with data-driven strategies and proven results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="group bg-[#007BFF] hover:bg-[#0056b3] text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[#007BFF]/50 flex items-center gap-3"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/services"
            className="bg-[#FFFFFF] hover:bg-gray-50 text-[#082540] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 border-[#007BFF] hover:border-[#0056b3] shadow-lg hover:shadow-xl"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;