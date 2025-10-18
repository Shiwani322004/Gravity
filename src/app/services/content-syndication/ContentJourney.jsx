'use client'
import React from 'react';
import { FileText, Share2, Users, BarChart } from 'lucide-react';

const ContentJourney = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#007BFF] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF] rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Your Content Journey
            <span className="block bg-gradient-to-r from-[#007BFF] to-[#00D4FF] bg-clip-text text-transparent">
              In 4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From submission to results, see how we transform your content into lead-generating assets
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#007BFF] via-[#00A3FF] to-[#00D4FF] transform -translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:text-right lg:pr-16">
                <div className="inline-block bg-gradient-to-r from-[#007BFF] to-[#00A3FF] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  STEP 01
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Content Submission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Share your whitepapers, case studies, or blog posts with us. Our team reviews and optimizes them for maximum syndication impact.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">Quick Setup</span>
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">24h Review</span>
                </div>
              </div>
              
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-full items-center justify-center shadow-2xl z-10 border-4 border-white">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <div className="lg:w-1/2 lg:pl-16">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Content Submission"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Upload Your Content</div>
                      <div className="text-sm text-gray-600">All formats accepted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-16 order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Strategic Distribution"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-lg flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">AI-Powered Targeting</div>
                      <div className="text-sm text-gray-600">500+ premium platforms</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-full items-center justify-center shadow-2xl z-10 border-4 border-white">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              
              <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2 lg:text-left">
                <div className="inline-block bg-gradient-to-r from-[#007BFF] to-[#00A3FF] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  STEP 02
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Strategic Distribution</h3>
                <p className="text-gray-600 leading-relaxed">
                  We distribute your content across our network of 500+ verified B2B platforms, targeting your ideal audience with precision.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">AI Targeting</span>
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">Brand Safe</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:text-right lg:pr-16">
                <div className="inline-block bg-gradient-to-r from-[#007BFF] to-[#00A3FF] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  STEP 03
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Lead Generation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch as qualified leads start flowing in. Our platform captures detailed prospect information and engagement metrics in real-time.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">Real-time</span>
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">Qualified</span>
                </div>
              </div>
              
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-full items-center justify-center shadow-2xl z-10 border-4 border-white">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <div className="lg:w-1/2 lg:pl-16">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Lead Generation"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Quality Leads</div>
                      <div className="text-sm text-gray-600">Decision-maker focused</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-16 order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Analytics & Insights"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-lg flex items-center justify-center">
                      <BarChart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Detailed Analytics</div>
                      <div className="text-sm text-gray-600">ROI tracking included</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#007BFF] to-[#00A3FF] rounded-full items-center justify-center shadow-2xl z-10 border-4 border-white">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              
              <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2 lg:text-left">
                <div className="inline-block bg-gradient-to-r from-[#007BFF] to-[#00A3FF] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  STEP 04
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Analytics & Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access comprehensive analytics dashboards with performance metrics, ROI tracking, and actionable insights to optimize your strategy.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">Dashboard</span>
                  <span className="px-3 py-1 bg-blue-100 text-[#007BFF] rounded-full text-sm font-semibold">ROI Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentJourney;