'use client';

import { Activity, TrendingUp, LineChart, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BusinessAnalysis() {
  const [sineWavePoints, setSineWavePoints] = useState([]);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [sineData, setSineData] = useState([
    { label: 'Seasonal Trends', value: 0, frequency: 2 },
    { label: 'Market Cycles', value: 0, frequency: 1.5 },
    { label: 'User Activity', value: 0, frequency: 3 },
    { label: 'Revenue Patterns', value: 0, frequency: 1 }
  ]);

  // Sine wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 0.05) % (2 * Math.PI));
      
      // Generate sine wave points
      const points = [];
      const width = 600;
      const height = 200;
      const amplitude = 80;
      const frequency = 0.02;
      
      for (let x = 0; x < width; x += 10) {
        const y = height / 2 + amplitude * Math.sin(frequency * x + animationPhase);
        points.push({ x, y });
      }
      setSineWavePoints(points);

      // Update sine data values
      setSineData(prev => prev.map(item => ({
        ...item,
        value: Math.floor(50 + 40 * Math.sin(animationPhase * item.frequency))
      })));
    }, 50);

    return () => clearInterval(interval);
  }, [animationPhase]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Predictive Analytics <span className="text-cyan-400">Wave Patterns</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
            Visualize cyclical business patterns and seasonal trends with real-time sine wave analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Sine Wave Visualization */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Real-time Pattern Analysis</h3>
              <div className="flex items-center gap-2 text-cyan-400">
                <Activity size={20} />
                <span className="text-sm font-medium">LIVE</span>
              </div>
            </div>

            {/* Sine Wave Container */}
            <div className="relative h-48 sm:h-56 lg:h-64 bg-gray-900/50 rounded-xl border border-gray-700/50 p-2 sm:p-4">
              <div className="absolute inset-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="absolute w-full h-px bg-gray-500" style={{ top: `${i * 25}%` }}></div>
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute h-full w-px bg-gray-500" style={{ left: `${i * 12.5}%` }}></div>
                  ))}
                </div>
                
                {/* Sine Wave */}
                <svg width="100%" height="100%" className="overflow-visible">
                  <defs>
                    <linearGradient id="sineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  {sineWavePoints.length > 0 && (
                    <path
                      d={`M ${sineWavePoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
                      stroke="url(#sineGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  )}
                  
                  {/* Animated dots along the sine wave */}
                  {sineWavePoints.filter((_, i) => i % 6 === 0).map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="2"
                      fill="#06b6d4"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </svg>
                
                {/* Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                  <span>Past</span>
                  <span>Present</span>
                  <span>Future</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Seasonal Trends</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Real-time Data</span>
              </div>
            </div>
          </div>

          {/* Sine Data Metrics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Pattern Analysis Metrics</h3>
            
            {sineData.map((item, index) => (
              <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.label}
                  </h4>
                  <span className="text-2xl font-bold text-cyan-400">
                    {item.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  {index === 0 && "Cyclical patterns in consumer behavior"}
                  {index === 1 && "Market fluctuation and economic cycles"}
                  {index === 2 && "Peak usage hours and engagement patterns"}
                  {index === 3 && "Revenue forecasting and growth projections"}
                </p>
              </div>
            ))}

            {/* Insights */}
            <div className="bg-cyan-900/20 rounded-2xl p-6 border border-cyan-500/30">
              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <TrendingUp size={18} />
                Key Insight
              </h4>
              <p className="text-cyan-100 text-sm">
                Sine wave analysis helps identify recurring patterns in business data, enabling better forecasting and strategic planning based on historical cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div className="bg-gray-800/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 text-center border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LineChart className="text-blue-400" size={24} />
            </div>
            <h4 className="font-semibold text-white mb-2">Pattern Recognition</h4>
            <p className="text-gray-400 text-sm">Identify recurring business cycles and seasonal trends</p>
          </div>
          <div className="bg-gray-800/30 rounded-2xl p-6 text-center border border-gray-700/30 hover:border-green-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="text-green-400" size={24} />
            </div>
            <h4 className="font-semibold text-white mb-2">Accurate Forecasting</h4>
            <p className="text-gray-400 text-sm">Predict future trends based on historical wave patterns</p>
          </div>
          <div className="bg-gray-800/30 rounded-2xl p-6 text-center border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-purple-400" size={24} />
            </div>
            <h4 className="font-semibold text-white mb-2">Real-time Analysis</h4>
            <p className="text-gray-400 text-sm">Live data streaming with instant pattern detection</p>
          </div>
        </div>
      </div>
    </section>
  );
}