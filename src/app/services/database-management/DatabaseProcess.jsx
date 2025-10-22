'use client'
import React from 'react';
import { CheckCircle, Cloud, Server, BarChart3, Workflow } from 'lucide-react';

const DatabaseProcess = () => {
  const managementProcess = [
    {
      step: 1,
      icon: Cloud,
      title: "Data Migration & Setup",
      description: "Seamlessly migrate your existing databases with zero downtime. Our automated migration tools ensure data integrity and minimal disruption.",
      features: ["Automated Schema Migration", "Zero Downtime Transfer", "Data Validation", "Performance Testing"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: Server,
      title: "Configuration & Optimization",
      description: "AI-powered configuration tuning automatically optimizes your database settings for maximum performance and efficiency.",
      features: ["AI-Powered Tuning", "Performance Optimization", "Resource Allocation", "Auto-scaling Setup"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      icon: BarChart3,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring and advanced analytics provide deep insights into your database performance and usage patterns.",
      features: ["Real-time Dashboards", "Performance Metrics", "Query Analysis", "Trend Forecasting"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 4,
      icon: Workflow,
      title: "Automated Maintenance",
      description: "Smart automation handles routine maintenance tasks, backups, and updates while ensuring continuous availability.",
      features: ["Automated Backups", "Security Updates", "Performance Tuning", "Health Checks"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Streamlined Database
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Management Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive 4-step process ensures your databases are optimized, secure, and performing at their best from day one.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-cyan-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {managementProcess.map((process, index) => (
              <div 
                key={process.step}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-white text-2xl font-black">{process.step}</span>
                      </div>
                      <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-blue-100">
                        <process.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {process.title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {process.description}
                    </p>

                    <div className="space-y-3">
                      {process.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className={`w-6 h-6 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50">
                      <img 
                        src={process.image}
                        alt={process.title}
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-400/30 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>

                {/* Mobile Connecting Dots */}
                <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg -bottom-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabaseProcess;