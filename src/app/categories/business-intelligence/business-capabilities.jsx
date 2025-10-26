'use client';

import { Database, Cpu, Cloud, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BusinessCapabilities() {
  const [verticalGraphData, setVerticalGraphData] = useState([
    { label: 'Data Processing', value: 0, color: 'from-blue-500 to-cyan-500' },
    { label: 'Real-time Analytics', value: 0, color: 'from-green-500 to-emerald-500' },
    { label: 'AI Insights', value: 0, color: 'from-purple-500 to-pink-500' },
    { label: 'Report Generation', value: 0, color: 'from-orange-500 to-red-500' },
    { label: 'Data Integration', value: 0, color: 'from-indigo-500 to-blue-500' }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVerticalGraphData([
        { label: 'Data Processing', value: 85, color: 'from-blue-500 to-cyan-500' },
        { label: 'Real-time Analytics', value: 72, color: 'from-green-500 to-emerald-500' },
        { label: 'AI Insights', value: 68, color: 'from-purple-500 to-pink-500' },
        { label: 'Report Generation', value: 91, color: 'from-orange-500 to-red-500' },
        { label: 'Data Integration', value: 78, color: 'from-indigo-500 to-blue-500' }
      ]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Business Intelligence Platform <span className="text-[#007bff]">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of key BI platform features and their performance metrics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Vertical Bar Graph */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Feature Performance Analysis
            </h3>
            
            {/* Graph Container with Y-axis */}
            <div className="relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500 font-medium">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Graph Content */}
              <div className="ml-12">
                {/* X-axis baseline */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Bars Container */}
                <div className="flex items-end justify-between h-64 gap-6 px-2">
                  {verticalGraphData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 group relative">
                      {/* Bar */}
                      <div className="relative w-full flex justify-center">
                        <div 
                          className={`w-12 bg-gradient-to-t ${item.color} rounded-t-lg transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:scale-105 relative`}
                          style={{ height: `${item.value * 2}px` }}
                        >
                          {/* Value Tooltip */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                            {item.value}%
                          </div>
                        </div>
                      </div>
                      
                      {/* X-axis label */}
                      <div className="mt-3 w-full">
                        <span className="text-sm font-medium text-gray-700 text-center block group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {item.label.split(' ').map((word, i) => (
                            <span key={i} className="block">
                              {word}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">88%</div>
                <div className="text-sm text-gray-600">Implementation Success</div>
              </div>
            </div>
          </div>

          {/* Feature Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced Data Processing</h4>
                  <p className="text-gray-600">
                    Handle large datasets with efficient processing algorithms and real-time data streaming capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analytics</h4>
                  <p className="text-gray-600">
                    Leverage machine learning algorithms for predictive analytics and automated insights generation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cloud Integration</h4>
                  <p className="text-gray-600">
                    Seamless integration with cloud platforms and scalable infrastructure for growing businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}