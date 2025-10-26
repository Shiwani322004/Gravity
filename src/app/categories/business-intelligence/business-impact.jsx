'use client';

import { TrendingUp, Users, Zap, BarChart, LineChart, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BusinessImpact() {
  const [graphData, setGraphData] = useState([30, 50, 70, 90, 60]);
  const [graphLabels] = useState(['Q1', 'Q2', 'Q3', 'Q4', 'Q5']);
  const [graphAnimation, setGraphAnimation] = useState(false);
  const [stats, setStats] = useState({
    companies: 0,
    efficiency: 0,
    roi: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        companies: 5000,
        efficiency: 45,
        roi: 127
      });
      setGraphAnimation(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Business Intelligence <span className="text-[#007bff]">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how BI implementation drives measurable improvements across key business metrics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Graph Visualization */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Performance Metrics</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium">
                  Quarterly
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                  Yearly
                </button>
              </div>
            </div>

            {/* Bar Graph */}
            <div className="space-y-6">
              {graphLabels.map((label, index) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="w-20 text-sm font-medium text-gray-600">{label}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: graphAnimation ? `${graphData[index]}%` : '0%'
                      }}
                    ></div>
                  </div>
                  <span className="w-12 text-right font-semibold text-gray-900">
                    {graphAnimation ? graphData[index] : 0}%
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Before BI Implementation</span>
                <span>After BI Implementation</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  +{stats.roi}%
                </div>
                <div className="text-gray-600">Average ROI</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stats.companies.toLocaleString()}+
                </div>
                <div className="text-gray-600">Businesses Served</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  +{stats.efficiency}%
                </div>
                <div className="text-gray-600">Operational Efficiency</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Businesses Choose BI
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <BarChart className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                    <p className="text-gray-600">Make informed decisions based on real-time data insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LineChart className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictive Analytics</h4>
                    <p className="text-gray-600">Forecast trends and identify opportunities before competitors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
                    <p className="text-gray-600">Streamline operations and maximize resource utilization</p>
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