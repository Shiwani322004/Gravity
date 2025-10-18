'use client'
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const ContentReach = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#082540] to-[#0A2B4F] backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black mb-6 text-white">
            Ready to Amplify Your Content Reach?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of B2B companies already leveraging our content syndication platform 
            to generate qualified leads and establish market leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#007BFF] to-[#00A3FF] hover:from-[#00A3FF] hover:to-[#007BFF] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-3">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#007BFF] border-2 border-[#007BFF] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 transform hover:scale-105">
              <Mail className="w-5 h-5" />
              <span>Email Marketing</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentReach;