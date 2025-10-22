import React from 'react';
import { BarChart3, Target, Users, Clock } from 'lucide-react';

const EmailAnalytics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Deep Insights with
              <span className="bg-gradient-to-r from-[#007BFF] to-[#00D4FF] bg-clip-text text-transparent"> Advanced Analytics</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Track every aspect of your email campaigns with comprehensive analytics that help you understand what works and what doesn't.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: BarChart3, text: "Real-time performance tracking" },
                { icon: Target, text: "Conversion funnel analysis" },
                { icon: Users, text: "Audience engagement metrics" },
                { icon: Clock, text: "Optimal send time recommendations" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#007BFF] to-[#00D4FF] rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0A2B4F] to-[#007BFF] rounded-3xl p-8 text-white shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">Campaign Performance</h3>
                <div className="space-y-4">
                  {[
                    { label: "Open Rate", value: "42.8%", trend: "+5.2%" },
                    { label: "Click Rate", value: "18.3%", trend: "+3.1%" },
                    { label: "Conversion", value: "12.7%", trend: "+2.8%" },
                    { label: "Revenue", value: "$24.5K", trend: "+15.3%" }
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-blue-100">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{metric.value}</span>
                        <span className="text-green-300 text-sm font-semibold">{metric.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-black/20 rounded-2xl p-6">
                <h4 className="font-semibold mb-3">Top Performing Segments</h4>
                <div className="space-y-3">
                  {["Active Subscribers", "Recent Purchasers", "Cart Abandoners"].map((segment, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{segment}</span>
                      <div className="w-24 h-2 bg-white/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cyan-300 rounded-full"
                          style={{ width: `${70 - index * 15}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00D4FF] rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#007BFF] rounded-full animate-bounce delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailAnalytics;