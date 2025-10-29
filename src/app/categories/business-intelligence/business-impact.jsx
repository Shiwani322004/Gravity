'use client';

import { TrendingUp, Users, Zap, BarChart, LineChart, Target, ArrowUpRight, Play, Pause, Award, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function BusinessImpact() {
  const [graphData, setGraphData] = useState([30, 50, 70, 90, 60]);
  const [graphLabels] = useState(['Revenue', 'Efficiency', 'Customer', 'Operational', 'Market']);
  const [graphAnimation, setGraphAnimation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeMetric, setActiveMetric] = useState(0);
  const [stats, setStats] = useState({
    companies: 0,
    efficiency: 0,
    roi: 0
  });
  const [visibleElements, setVisibleElements] = useState({
    hero: false,
    leftCards: false,
    rightCards: false,
    bottomStats: false
  });

  useEffect(() => {
    // Staggered entrance animations
    const timers = [
      setTimeout(() => setVisibleElements(prev => ({ ...prev, hero: true })), 200),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, leftCards: true })), 400),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, rightCards: true })), 600),
      setTimeout(() => setVisibleElements(prev => ({ ...prev, bottomStats: true })), 800),
    ];

    const statsTimer = setTimeout(() => {
      setStats({
        companies: 5000,
        efficiency: 45,
        roi: 127
      });
      setGraphAnimation(true);
    }, 1000);

    // Auto-rotate metrics
    const metricInterval = setInterval(() => {
      if (isPlaying) {
        setActiveMetric((prev) => (prev + 1) % graphLabels.length);
      }
    }, 3000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(statsTimer);
      clearInterval(metricInterval);
    };
  }, [isPlaying, graphLabels.length]);



  const businessBenefits = [
    {
      icon: BarChart,
      title: 'Real-Time Data-Driven Decisions',
      description: 'Empower your leadership team to make informed strategic decisions based on real-time data insights, comprehensive analytics, and predictive modeling. Our BI platform consolidates data from multiple sources into actionable intelligence.',
      stats: '3x faster decisions'
    },
    {
      icon: LineChart,
      title: 'Advanced Predictive Analytics',
      description: 'Stay ahead of market trends and identify emerging opportunities before your competitors. Our AI-powered analytics engine uses machine learning algorithms to forecast business outcomes with remarkable accuracy.',
      stats: '95% accuracy rate'
    },
    {
      icon: Target,
      title: 'Comprehensive Performance Optimization',
      description: 'Streamline operations across all departments and maximize resource utilization through intelligent automation. Monitor KPIs in real-time, identify bottlenecks instantly, and optimize workflows for peak efficiency.',
      stats: '40% cost reduction'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security & Compliance',
      description: 'Protect your valuable business data with military-grade encryption and comprehensive compliance frameworks. Our platform meets all major regulatory requirements including GDPR, HIPAA, and SOC 2.',
      stats: 'ISO 27001 certified'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section with Animation */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visibleElements.hero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Business Intelligence <span className="text-[#007bff]">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our Business Intelligence platform drives measurable improvements across key business metrics, 
            transforms decision-making processes, and delivers exceptional ROI for organizations of all sizes
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Left Column - Performance Metrics with Slide-in from Left */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${visibleElements.leftCards ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            {/* Interactive Graph Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <BarChart className="text-[#007bff]" size={28} />
                    Performance Metrics
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">Real-time impact visualization across key business areas</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 hover:bg-blue-50 rounded-xl transition-all duration-200 border border-gray-200 hover:border-blue-300 group-hover:scale-105"
                    aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
                  >
                    {isPlaying ? <Pause size={18} className="text-gray-700" /> : <Play size={18} className="text-gray-700" />}
                  </button>
                </div>
              </div>

              {/* Enhanced Bar Graph */}
              <div className="space-y-5 mb-6">
                {graphLabels.map((label, index) => (
                  <div 
                    key={label}
                    className="group/bar cursor-pointer"
                    onMouseEnter={() => setActiveMetric(index)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          activeMetric === index 
                            ? 'bg-[#007bff] scale-125 shadow-lg shadow-blue-300' 
                            : 'bg-gray-300'
                        }`}></div>
                        <span className="text-sm font-semibold text-gray-700 group-hover/bar:text-[#007bff] transition-colors duration-300">
                          {label} Impact
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">
                          {graphAnimation ? graphData[index] : 0}%
                        </span>
                        <ArrowUpRight 
                          size={16} 
                          className={`text-green-500 transition-all duration-300 ${
                            activeMetric === index ? 'opacity-100 scale-110' : 'opacity-0 scale-75'
                          }`} 
                        />
                      </div>
                    </div>
                    <div className="relative h-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-[#007bff] via-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out relative group-hover/bar:shadow-lg"
                        style={{
                          width: graphAnimation ? `${graphData[index]}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Legend */}
              <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600 font-medium">Baseline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#007bff] to-cyan-500 rounded-full"></div>
                    <span className="text-gray-600 font-medium">With BI Platform</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-blue-50 rounded-lg">
                  <span className="text-xs font-semibold text-[#007bff]">Active: {graphLabels[activeMetric]}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: `+${stats.roi}%`, label: 'Average ROI', gradient: 'from-blue-500 to-cyan-500', delay: 0 },
                { value: stats.companies > 0 ? '5K+' : '0', label: 'Businesses', gradient: 'from-green-500 to-emerald-500', delay: 100 },
                { value: `+${stats.efficiency}%`, label: 'Efficiency Gain', gradient: 'from-purple-500 to-pink-500', delay: 200 }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`bg-gradient-to-br ${stat.gradient} text-white rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                  style={{ transitionDelay: `${stat.delay}ms` }}
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/90 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Impact Stats with Slide-in from Right */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${visibleElements.rightCards ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Transformative Impact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="text-[#007bff]" size={28} />
                Transformative Business Impact
              </h3>
              
              <div className="space-y-5">
                {[
                  {
                    icon: TrendingUp,
                    color: 'blue',
                    title: 'Average ROI',
                    value: '+127%',
                    description: 'Return on investment achieved within the first year of implementation',
                    metric: 'Within 12 months'
                  },
                  {
                    icon: Users,
                    color: 'green',
                    title: 'Businesses Transformed',
                    value: '5,000+',
                    description: 'Companies worldwide have transformed their operations with our BI solutions',
                    metric: 'Across 45 countries'
                  },
                  {
                    icon: Zap,
                    color: 'purple',
                    title: 'Operational Efficiency',
                    value: '+45%',
                    description: 'Average improvement in process efficiency and workflow optimization',
                    metric: 'Sustained growth'
                  }
                ].map((stat, index) => (
                  <div 
                    key={stat.title}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 hover:from-blue-50/50 hover:to-cyan-50/50 border border-gray-100 hover:border-blue-200 transition-all duration-500 group cursor-pointer"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-14 h-14 bg-${stat.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm flex-shrink-0`}>
                      <stat.icon className={`text-${stat.color}-600`} size={26} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-[#007bff] transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-sm font-semibold text-gray-500">{stat.title}</div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">{stat.description}</p>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-lg text-xs font-medium text-gray-500 border border-gray-200">
                        <TrendingUp size={12} className="text-green-500" />
                        {stat.metric}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Highlights - Removed */}
          </div>
        </div>

        {/* Bottom Benefits Section with Fade-in from Bottom */}
        <div className={`transition-all duration-1000 delay-600 ${visibleElements.bottomStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Leading Businesses Choose Our <span className="text-[#007bff]">BI Platform</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your organization with enterprise-grade business intelligence that delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 group cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                  <img 
                    src={
                      index === 0 ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop' :
                      index === 1 ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop' :
                      index === 2 ? 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=400&fit=crop' :
                      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=400&fit=crop'
                    }
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <benefit.icon className="text-[#007bff]" size={24} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#007bff] transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {benefit.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg text-xs font-semibold text-[#007bff]">
                      <Sparkles size={12} />
                      {benefit.stats}
                    </div>
                    <ChevronRight size={18} className="text-gray-400 group-hover:text-[#007bff] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </section>
  );
}