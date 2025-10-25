'use client';

import { CheckCircle } from 'lucide-react';

const CRMAutomationSection = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 border border-gray-200/60 shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full bg-blue-50 rounded-lg p-4 text-center border border-blue-200 text-blue-700 font-medium">
                Lead Captured
              </div>
              <div className="text-2xl text-blue-500">↓</div>
              <div className="w-full bg-cyan-50 rounded-lg p-4 text-center border border-cyan-200 text-cyan-700 font-medium">
                AI Qualification
              </div>
              <div className="text-2xl text-cyan-500">↓</div>
              <div className="w-full bg-blue-50 rounded-lg p-4 text-center border border-blue-200 text-blue-700 font-medium">
                Automated Follow-up
              </div>
              <div className="text-2xl text-blue-500">↓</div>
              <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-4 text-center font-semibold text-white">
                Deal Closed
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Intelligent Automation{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Meets Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our platform combines powerful automation with deep analytics to give you unprecedented insights into your sales process and customer behavior.
          </p>
          <div className="space-y-4">
            {[
              "AI-powered lead scoring and routing",
              "Automated workflow triggers and actions",
              "Real-time performance analytics",
              "Predictive revenue forecasting"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAutomationSection;