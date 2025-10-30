'use client';

import { Database, Cpu, Cloud, CheckCircle, TrendingUp, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BusinessCapabilities() {
  const [verticalGraphData, setVerticalGraphData] = useState([
    { label: 'Data Processing', value: 0, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
    { label: 'Real-time Analytics', value: 0, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10' },
    { label: 'AI Insights', value: 0, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
    { label: 'Report Generation', value: 0, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500/10' },
    { label: 'Data Integration', value: 0, color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-500/10' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVerticalGraphData([
        { label: 'Data Processing', value: 85, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
        { label: 'Real-time Analytics', value: 72, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10' },
        { label: 'AI Insights', value: 68, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
        { label: 'Report Generation', value: 91, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-500/10' },
        { label: 'Data Integration', value: 78, color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-500/10' }
      ]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Responsive */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Business Intelligence Platform <span className="text-[#007bff]">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Comprehensive analysis of key BI platform features and their performance metrics
          </p>
        </div>

        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Enhanced Vertical Bar Graph - Responsive */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <BarChart3 className="text-[#007bff]" size={20} />
                  Feature Performance
                </h3>
                <p className="text-xs text-gray-500 mt-1">Operational efficiency metrics</p>
              </div>
              <div className="px-3 py-1 sm:px-4 sm:py-2 bg-[#007bff]/10 rounded-lg self-start sm:self-auto">
                <span className="text-xs font-semibold text-[#007bff]">Q4 2024</span>
              </div>
            </div>
            
            {/* Professional Graph Container */}
            <div className="relative bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-gray-100 overflow-x-auto">
              {/* Grid lines */}
              <div className="absolute left-12 sm:left-14 md:left-16 right-4 sm:right-6 top-4 sm:top-6 bottom-20 sm:bottom-24 pointer-events-none">
                <div className="h-full w-full relative">
                  {[0, 25, 50, 75, 100].map((val, idx) => (
                    <div 
                      key={val} 
                      className="absolute w-full border-t border-gray-200 border-dashed"
                      style={{ bottom: `${val}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-2 sm:left-3 top-4 sm:top-6 bottom-20 sm:bottom-24 w-8 sm:w-10 md:w-12 flex flex-col justify-between text-xs text-gray-600 font-semibold">
                <span className="text-xs">100</span>
                <span className="text-xs">75</span>
                <span className="text-xs">50</span>
                <span className="text-xs">25</span>
                <span className="text-xs">0</span>
              </div>

              {/* Y-axis label - Hidden on mobile, shown on tablet and up */}
              <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">Performance (%)</span>
              </div>

              {/* Graph Content */}
              <div className="ml-10 sm:ml-12 md:ml-14 mr-2">
                {/* Bars Container */}
                <div className="flex items-end justify-between h-48 sm:h-56 md:h-64 lg:h-72 gap-2 sm:gap-3 px-1 sm:px-2 mb-3 sm:mb-4 relative">
                  {verticalGraphData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 group relative h-full">
                      {/* Bar with background */}
                      <div className="relative w-full flex justify-center h-full items-end">
                        {/* Background track */}
                        <div className={`absolute bottom-0 w-full max-w-[32px] sm:max-w-[40px] md:max-w-[48px] lg:max-w-[52px] h-full ${item.bgColor} rounded-lg border border-gray-200`} />
                        
                        {/* Animated bar */}
                        <div 
                          className={`relative w-full max-w-[32px] sm:max-w-[40px] md:max-w-[48px] lg:max-w-[52px] bg-gradient-to-t ${item.color} rounded-lg transition-all duration-1000 ease-out group-hover:shadow-lg shadow-md cursor-pointer border border-white/20`}
                          style={{ 
                            height: `${(item.value / 100) * 100}%`,
                            transform: 'scale(1)',
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Value badge on hover */}
                          <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs sm:text-sm font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-10 scale-95 group-hover:scale-100">
                            {item.value}%
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                          </div>

                          {/* Static value on bar - always visible */}
                          <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-800 bg-white px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded shadow-sm group-hover:opacity-0 transition-opacity duration-300 whitespace-nowrap border border-gray-200">
                            {item.value}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* X-axis baseline */}
                <div className="border-t-2 border-gray-300 relative">
                  {/* Arrow */}
                  <div className="absolute -right-2 -top-1.5 w-0 h-0 border-l-8 border-l-gray-300 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </div>
                
                {/* X-axis labels */}
                <div className="flex items-start justify-between gap-2 sm:gap-3 px-1 sm:px-2 mt-2 sm:mt-3">
                  {verticalGraphData.map((item, index) => (
                    <div key={index} className="flex-1 group cursor-pointer min-w-0">
                      <span className="text-[10px] xs:text-xs font-semibold text-gray-700 text-center block group-hover:text-[#007bff] transition-colors duration-300 leading-tight break-words">
                        {item.label.split(' ').map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* X-axis label */}
              <div className="text-center mt-3 sm:mt-4">
                <span className="text-xs font-semibold text-gray-500">Capability Areas</span>
              </div>
            </div>
          </div>

          {/* Enhanced Feature Details - Responsive */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm flex-shrink-0">
                  <Database className="text-blue-600" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#007bff] transition-colors duration-300">Advanced Data Processing</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Handle large datasets with efficient processing algorithms and real-time data streaming capabilities. Supports batch and stream processing with optimized performance.
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-xs font-semibold text-green-600">85% Efficiency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm flex-shrink-0">
                  <Cpu className="text-green-600" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">AI-Powered Analytics</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Leverage machine learning algorithms for predictive analytics and automated insights generation. Advanced pattern recognition and anomaly detection included.
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-xs font-semibold text-green-600">72% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm flex-shrink-0">
                  <Cloud className="text-purple-600" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Cloud Integration</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Seamless integration with cloud platforms and scalable infrastructure for growing businesses. Multi-cloud support with automated deployment and monitoring.
                  </p>
                  <div className="mt-2 sm:mt-3 flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-xs font-semibold text-green-600">99.9% Uptime</span>
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