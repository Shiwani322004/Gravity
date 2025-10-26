'use client';

import { TrendingUp, Zap, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LiveDashboard() {
  const [movingData, setMovingData] = useState([
    { id: 1, label: 'Sales Data', value: 75, speed: 15 },
    { id: 2, label: 'Customer Insights', value: 60, speed: 20 },
    { id: 3, label: 'Operational Metrics', value: 85, speed: 12 },
    { id: 4, label: 'Financial Reports', value: 45, speed: 25 },
    { id: 5, label: 'Market Trends', value: 70, speed: 18 },
    { id: 6, label: 'Performance KPIs', value: 90, speed: 10 }
  ]);

  // Moving analytics animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMovingData(prev => 
        prev.map(item => ({
          ...item,
          value: Math.min(100, Math.max(10, item.value + (Math.random() * 10 - 5)))
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Live Analytics <span className="text-[#007bff]">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time data visualization showing dynamic business metrics and performance indicators
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Moving Analytics Bars */}
          <div className="space-y-6 mb-8">
            {movingData.map((item) => (
              <div key={item.id} className="flex items-center gap-4 group">
                <span className="w-48 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {item.label}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out relative"
                    style={{ width: `${item.value}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
                <span className="w-12 text-right font-semibold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                  {Math.round(item.value)}%
                </span>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center p-4 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-blue-600 mb-1">1.2M+</div>
              <div className="text-sm text-gray-600">Data Points</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-green-600 mb-1">99.8%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-purple-600 mb-1">2.4s</div>
              <div className="text-sm text-gray-600">Avg. Response</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h4>
            <p className="text-gray-600">Live data streaming with instant visualization updates</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-green-600" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Processing</h4>
            <p className="text-gray-600">High-speed data processing with minimal latency</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-purple-600" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Analytics</h4>
            <p className="text-gray-600">AI-powered insights and predictive analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
}