import { TrendingUp, Zap, BarChart3, ArrowRight, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BIConclusion() {
  // ========== CONFIGURATION ==========
  // Replace with your Fleet Management page URL
  const FLEET_MANAGEMENT_URL = '/categories/GPS-fleet-management-software'; // 👈 Change this to your actual URL
  // ===================================

  const [movingData, setMovingData] = useState([
    { id: 1, label: 'Sales Data', value: 75, speed: 15 },
    { id: 2, label: 'Customer Insights', value: 60, speed: 20 },
    { id: 3, label: 'Operational Metrics', value: 85, speed: 12 },
    { id: 4, label: 'Financial Reports', value: 45, speed: 25 },
    { id: 5, label: 'Market Trends', value: 70, speed: 18 },
    { id: 6, label: 'Performance KPIs', value: 90, speed: 10 }
  ]);

  const [isHovered, setIsHovered] = useState(false);

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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transform Data into <span className="text-[#007bff]">Actionable Insights</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time analytics dashboard empowering data-driven decisions for your business growth
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
          {/* Moving Analytics Bars */}
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {movingData.map((item) => (
              <div key={item.id} className="flex items-center gap-3 md:gap-4 group">
                <span className="w-32 md:w-48 text-xs md:text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                  {item.label}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-5 md:h-6 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out relative"
                    style={{ width: `${item.value}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
                <span className="w-10 md:w-12 text-right font-semibold text-gray-900 text-sm md:text-base group-hover:scale-110 transition-transform duration-300">
                  {Math.round(item.value)}%
                </span>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-gray-200">
            <div className="text-center p-3 md:p-4 bg-blue-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">1.2M+</div>
              <div className="text-xs md:text-sm text-gray-600">Data Points</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-green-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">99.8%</div>
              <div className="text-xs md:text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-purple-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-purple-600 mb-1">2.4s</div>
              <div className="text-xs md:text-sm text-gray-600">Avg. Response</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-orange-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-xs md:text-sm text-gray-600">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          <div className="text-center p-5 md:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={28} />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h4>
            <p className="text-sm md:text-base text-gray-600">Live data streaming with instant visualization updates</p>
          </div>
          <div className="text-center p-5 md:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-green-600" size={28} />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Fast Processing</h4>
            <p className="text-sm md:text-base text-gray-600">High-speed data processing with minimal latency</p>
          </div>
          <div className="text-center p-5 md:p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-purple-600" size={28} />
            </div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Smart Analytics</h4>
            <p className="text-sm md:text-base text-gray-600">AI-powered insights and predictive analytics</p>
          </div>
        </div>

        {/* CTA Section - Navigation to Fleet Management */}
        <div className="mt-12 md:mt-16 relative">
          <div className="bg-gradient-to-r from-[#007bff] to-cyan-600 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                  Ready to Track Your Fleet?
                </h3>
                <p className="text-base md:text-lg text-blue-50 max-w-2xl">
                  Discover our GPS Fleet Management Software for real-time vehicle tracking, route optimization, and comprehensive fleet analytics
                </p>
              </div>

              <a
                href={FLEET_MANAGEMENT_URL}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group bg-white text-[#007bff] px-6 md:px-8 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 whitespace-nowrap no-underline"
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                <span>Explore GPS Management</span>
                <ArrowRight 
                  className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}