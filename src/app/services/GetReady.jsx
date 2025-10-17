'use client'
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const GetReady = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#082540]">
          Ready to Transform Your Marketing?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how our B2B marketing services can drive sustainable growth for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#007BFF] to-[#00A3FF] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform transition-all duration-300">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default GetReady;