import React, { useState } from 'react';
import { ArrowRight, Calculator, MapPin, Route, BarChart3, Navigation, Satellite, Cpu } from 'lucide-react';

export default function GPSAction() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // ========== CONFIGURATION ==========
  const PAYROLL_SOFTWARE_URL = '/categories/payroll-software'; 
  // ===================================

  const demoFeatures = [
    {
      title: "Real-Time Fleet Tracking",
      description: "Monitor your entire fleet with live GPS updates, vehicle status, and driver behavior in real-time from any device",
      steps: ["Vehicle location", "Status updates", "Driver monitoring", "Live alerts"],
      icon: Satellite,
      color: "from-blue-500 to-cyan-400",
      mapPoints: [
        { top: "20%", left: "30%", delay: "0s" },
        { top: "60%", left: "50%", delay: "0.2s" },
        { top: "40%", left: "70%", delay: "0.4s" },
        { top: "80%", left: "40%", delay: "0.6s" }
      ]
    },
    {
      title: "Route Optimization",
      description: "AI-powered route planning that considers traffic, delivery windows, and vehicle constraints for maximum efficiency",
      steps: ["Route analysis", "Traffic optimization", "Schedule planning", "Efficiency tracking"],
      icon: Route,
      color: "from-green-500 to-emerald-400",
      mapPoints: [
        { top: "30%", left: "20%", delay: "0s" },
        { top: "50%", left: "40%", delay: "0.3s" },
        { top: "70%", left: "60%", delay: "0.6s" },
        { top: "40%", left: "80%", delay: "0.9s" }
      ]
    },
    {
      title: "Fleet Analytics Dashboard",
      description: "Comprehensive performance analytics with customizable dashboards, reporting, and actionable insights",
      steps: ["Data collection", "Performance analysis", "Report generation", "Insight delivery"],
      icon: BarChart3,
      color: "from-purple-500 to-pink-400",
      mapPoints: [
        { top: "25%", left: "25%", delay: "0s" },
        { top: "25%", left: "75%", delay: "0.1s" },
        { top: "75%", left: "25%", delay: "0.2s" },
        { top: "75%", left: "75%", delay: "0.3s" }
      ]
    }
  ];

  const FeatureIcon = demoFeatures[activeFeature]?.icon || Satellite;

  return (
    <>
      {/* Redesigned GPS Action Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[length:50px_50px] bg-[linear-gradient(to_right,#007bff_1px,transparent_1px),linear-gradient(to_bottom,#007bff_1px,transparent_1px)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
           
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              See Your Fleet in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our GPS fleet management platform through interactive visual demonstrations
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Map Visualization */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 shadow-2xl border border-gray-800">
                {/* Map Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-white font-semibold text-sm">Live Fleet Overview</span>
                  </div>
                </div>

                {/* Map Container */}
                <div className="relative bg-gray-800 rounded-2xl h-96 overflow-hidden border border-gray-700">
                  {/* Base Map Grid */}
                  <div className="absolute inset-0 opacity-20 bg-[length:40px_40px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>
                  
                  {/* Animated Route Lines */}
                  <div className="absolute inset-0">
                    {demoFeatures[activeFeature].mapPoints.map((point, index, array) => {
                      if (index < array.length - 1) {
                        const nextPoint = array[index + 1];
                        return (
                          <div
                            key={index}
                            className="absolute bg-gradient-to-r from-blue-400/50 to-cyan-400/50 h-0.5 rounded-full animate-pulse"
                            style={{
                              top: `calc(${point.top} + 12px)`,
                              left: point.left,
                              width: `calc(${nextPoint.left} - ${point.left})`,
                              transform: `rotate(${Math.atan2(
                                parseInt(nextPoint.top) - parseInt(point.top),
                                parseInt(nextPoint.left) - parseInt(point.left)
                              )}rad)`
                            }}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>

                  {/* Animated Vehicle Points */}
                  {demoFeatures[activeFeature].mapPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`absolute w-6 h-6 rounded-full bg-gradient-to-r ${demoFeatures[activeFeature].color} border-2 border-white shadow-lg animate-float`}
                      style={{
                        top: point.top,
                        left: point.left,
                        animationDelay: point.delay
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                      <MapPin className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  ))}

                  {/* Data Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                          <FeatureIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">
                            {demoFeatures[activeFeature].title}
                          </h3>
                          <p className="text-gray-300 text-xs">
                            Active vehicles: {demoFeatures[activeFeature].mapPoints.length}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 text-sm font-semibold">Live</div>
                        <div className="text-gray-400 text-xs">Updated just now</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Steps */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {demoFeatures[activeFeature].steps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${demoFeatures[activeFeature].color} flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300`}>
                          {index + 1}
                        </div>
                        <span className="text-white text-sm font-medium">{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Selection */}
            <div className="space-y-6 order-1 lg:order-2">
              {demoFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-white rounded-2xl p-6 border-2 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105 ${
                      activeFeature === index 
                        ? 'border-blue-500 shadow-xl bg-blue-50/50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                          {activeFeature === index && (
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {feature.steps.map((step, stepIndex) => (
                            <span
                              key={stepIndex}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                                activeFeature === index
                                  ? 'bg-blue-100 text-blue-700 border-blue-200'
                                  : 'bg-gray-100 text-gray-700 border-gray-200 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200'
                              }`}
                            >
                              {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Keep exactly the same */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="bg-gradient-to-r from-[#007bff] to-cyan-600 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                    Need to Streamline Payroll Management?
                  </h3>
                  <p className="text-base md:text-lg text-blue-50 max-w-2xl">
                    Discover our comprehensive Payroll Software for automated payroll processing, tax compliance, and employee management solutions
                  </p>
                </div>

                <a
                  href="/categories/payroll-software"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group bg-white text-[#007bff] px-6 md:px-8 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 whitespace-nowrap no-underline"
                >
                  <Calculator className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Explore Payroll Software</span>
                  <ArrowRight 
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}