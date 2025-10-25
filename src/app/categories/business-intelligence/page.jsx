'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, Brain, Zap, PieChart, TrendingUp, Users, CloudUpload, Share2, Database, ArrowRight, CheckCircle, Star, Lock, Sparkles, Target, Clock, DollarSign, Activity, Globe, Shield, Code, LineChart, Award, Briefcase, Eye, Filter, RefreshCw } from 'lucide-react';

const BusinessIntelligencePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ revenue: 0, time: 0, decisions: 0, users: 0 });
  const [activeTab, setActiveTab] = useState('analytics');
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible['section-results']) {
      const animateCounter = (target, setter, key, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setter((prev) => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setter((prev) => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 16);
      };

      animateCounter(45, setCounters, 'revenue');
      animateCounter(70, setCounters, 'time');
      animateCounter(98, setCounters, 'decisions');
      animateCounter(15000, setCounters, 'users');
    }
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedMetric((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Our BI specialists will contact you within 24 hours.');
  };

  const features = [
    { 
      icon: Brain, 
      title: 'AI-Powered Analytics', 
      desc: 'Advanced machine learning algorithms automatically detect patterns, anomalies, and opportunities in your data. Get predictive insights that help you stay ahead of market trends.',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: Zap, 
      title: 'Real-Time Processing', 
      desc: 'Process millions of data points per second with our lightning-fast analytics engine. Make decisions based on live data, not yesterday\'s reports.',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: Eye, 
      title: 'Interactive Visualizations', 
      desc: 'Transform complex datasets into beautiful, interactive charts and graphs. Drill down into details with dynamic filtering and cross-dimensional analysis.',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: Shield, 
      title: 'Enterprise Security', 
      desc: 'Bank-level encryption, role-based access control, and compliance with GDPR, SOC 2, and ISO 27001 standards. Your data is always protected.',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: Globe, 
      title: 'Global Scalability', 
      desc: 'Built on cloud infrastructure that scales automatically. Handle terabytes of data across multiple regions without performance degradation.',
      color: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: RefreshCw, 
      title: 'Automated Reporting', 
      desc: 'Schedule reports, set up alerts, and automate data workflows. Spend less time on manual tasks and more time on strategic decisions.',
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  const capabilities = [
    { icon: Target, title: 'Predictive Forecasting', desc: 'AI models predict future trends with 95% accuracy' },
    { icon: Filter, title: 'Advanced Filtering', desc: 'Multi-dimensional data segmentation and analysis' },
    { icon: Activity, title: 'Performance Monitoring', desc: 'Real-time KPI tracking and alerts' },
    { icon: Code, title: 'Custom Integrations', desc: 'REST APIs and webhooks for any system' }
  ];

  const integrations = [
    { name: 'Salesforce', icon: Users, desc: 'CRM Data' },
    { name: 'SAP', icon: Database, desc: 'ERP Systems' },
    { name: 'AWS', icon: CloudUpload, desc: 'Cloud Storage' },
    { name: 'HubSpot', icon: TrendingUp, desc: 'Marketing' },
    { name: 'Slack', icon: Share2, desc: 'Team Collaboration' },
    { name: 'Tableau', icon: BarChart3, desc: 'Visualization' }
  ];

  const metrics = [
    { label: 'Revenue Growth', value: '45%', change: '+12%', icon: DollarSign, color: 'text-green-500' },
    { label: 'Time Saved', value: '70%', change: '+25%', icon: Clock, color: 'text-blue-500' },
    { label: 'Decision Accuracy', value: '98%', change: '+18%', icon: Target, color: 'text-purple-500' }
  ];

  const testimonials = [
    {
      company: 'TechVision Inc',
      logo: Briefcase,
      quote: 'This BI platform transformed how we understand our customers. The AI insights revealed opportunities we never knew existed.',
      author: 'Sarah Chen',
      role: 'Chief Data Officer',
      metric: '$2.4M additional revenue'
    },
    {
      company: 'Global Analytics',
      logo: Globe,
      quote: 'Implementation was seamless, and the ROI was evident within the first quarter. Our teams are now 70% more efficient.',
      author: 'Marcus Thompson',
      role: 'VP of Operations',
      metric: '70% efficiency gain'
    },
    {
      company: 'DataFlow Systems',
      logo: Activity,
      quote: 'The predictive analytics helped us anticipate market shifts before our competitors. A true game-changer for strategic planning.',
      author: 'Elena Rodriguez',
      role: 'Head of Strategy',
      metric: '98% forecast accuracy'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section id="section-hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible['section-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">Next-Generation Business Intelligence</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Intelligence
              </span>
              <br />
              <span className="text-gray-900">Meets Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform raw data into strategic advantage. Our AI-powered platform delivers real-time insights, 
              predictive analytics, and automated reporting that drives measurable business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/50 hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group px-10 py-5 bg-white text-gray-900 border border-gray-300 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
                Watch Demo
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <div className="w-0 h-0 border-l-8 border-l-blue-600 border-y-4 border-y-transparent ml-0.5"></div>
                </div>
              </button>
            </div>

            {/* Floating Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, value: '15K+', label: 'Active Users' },
                { icon: Database, value: '500TB+', label: 'Data Processed' },
                { icon: Award, value: '99.9%', label: 'Uptime SLA' },
                { icon: Star, value: '4.9/5', label: 'User Rating' }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={i}
                    className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section id="section-capabilities" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['section-capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale, designed for simplicity. Every feature engineered to deliver maximum business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className={`group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl ${isVisible['section-capabilities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section id="section-features" className="py-32 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Powerful Features,
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Intuitive Design</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced analytics doesn't have to be complicated. Our platform makes sophisticated data science accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-300 transition-all duration-700 shadow-lg hover:shadow-2xl ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section id="section-dashboard" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['section-dashboard'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Real-Time
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Dashboard Analytics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your business pulse with live dashboards that update every second. Beautiful visualizations that tell your data story.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {['analytics', 'performance', 'insights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible['section-dashboard'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Metric Cards */}
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedMetric(i)}
                  className={`group cursor-pointer p-8 bg-white border rounded-3xl transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl ${
                    selectedMetric === i ? 'border-blue-500 shadow-2xl shadow-blue-500/30' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.color} bg-opacity-20`}>
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className={`text-sm font-bold px-3 py-1 rounded-full ${metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {metric.change}
                    </div>
                  </div>
                  <div className="text-5xl font-black text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                  
                  {/* Mini Chart */}
                  <div className="mt-6 h-20 flex items-end gap-1">
                    {[40, 65, 45, 80, 70, 90, 85, 95].map((h, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 rounded-t-lg transition-all duration-1000 ${selectedMetric === i ? 'bg-gradient-to-t from-blue-600 to-cyan-400' : 'bg-gray-300'}`}
                        style={{ 
                          height: isVisible['section-dashboard'] ? `${h}%` : '0%',
                          transitionDelay: `${idx * 100}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Data Visualization */}
          <div className="mt-12 p-10 bg-white border border-gray-200 rounded-3xl shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Performance Metrics</h3>
                <p className="text-gray-600">Real-time data updated every 5 seconds</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 text-sm font-semibold">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Active Sessions', value: '12,847', trend: '+234' },
                { label: 'API Calls/min', value: '45.2K', trend: '+1.2K' },
                { label: 'Avg Response', value: '1.2ms', trend: '-0.3ms' },
                { label: 'Success Rate', value: '99.98%', trend: '+0.02%' }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-green-600">{stat.trend}</div>
                </div>
              ))}
            </div>

            {/* Animated Chart */}
            <div className="h-48 flex items-end justify-between gap-2">
              {Array.from({ length: 50 }, (_, i) => {
                const height = Math.sin(i * 0.3 + Date.now() * 0.001) * 40 + 50;
                return (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t transition-all duration-300"
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="section-integration" className="py-32 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['section-integration'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Seamless
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your entire technology ecosystem. 500+ pre-built integrations and custom API support for unlimited possibilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {integrations.map((int, idx) => {
              const Icon = int.icon;
              return (
                <div
                  key={idx}
                  className={`group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-xl ${isVisible['section-integration'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-10 h-10 text-blue-600 mb-4 mx-auto group-hover:scale-125 transition-transform duration-500" />
                  <div className="text-center">
                    <div className="font-bold text-gray-900 mb-1">{int.name}</div>
                    <div className="text-xs text-gray-600">{int.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`relative overflow-hidden p-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl transition-all duration-1000 ${isVisible['section-integration'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-black text-white mb-6">Connect Everything, Analyze Anywhere</h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                  Our platform integrates seamlessly with your existing tools. From CRM to ERP, cloud storage to marketing automation, 
                  consolidate all your data sources into a unified analytics powerhouse. Real-time synchronization ensures you're always 
                  working with the latest information.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: 'Real-time Sync' },
                    { icon: Lock, text: 'Bank-Level Security' },
                    { icon: Zap, text: '5-Min Setup' },
                    { icon: Code, text: 'REST API Access' }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-white" />
                        <span className="font-semibold text-white text-sm">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative">
                <div className="relative p-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl">
                  <div className="space-y-4">
                    {['Data Warehouse', 'ETL Pipeline', 'ML Models', 'Reporting Engine', 'API Gateway'].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-colors group cursor-pointer">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Database className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-white flex-1">{item}</span>
                        <CheckCircle className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="section-testimonials" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of companies transforming their business with data-driven intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => {
              const Logo = testimonial.logo;
              return (
                <div
                  key={idx}
                  className={`group p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl ${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Logo className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">{testimonial.company}</div>
                      <div className="text-sm text-gray-600">{testimonial.metric}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="section-cta" className="py-32 px-6 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Transform
              <span className="text-cyan-100"> Your Business?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join leading companies making smarter decisions with AI-powered analytics
            </p>
          </div>

          <div className={`bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business intelligence needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full group px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;