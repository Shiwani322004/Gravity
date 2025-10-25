'use client';

import React, { useState, useEffect } from 'react';
import { BarChart3, Brain, Zap, PieChart, TrendingUp, Users, CloudUpload, Share2, Database, ArrowRight, CheckCircle, Star } from 'lucide-react';

const BusinessIntelligencePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ revenue: 0, time: 0, decisions: 0 });
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

      animateCounter(30, setCounters, 'revenue');
      animateCounter(60, setCounters, 'time');
      animateCounter(95, setCounters, 'decisions');
    }
  }, [isVisible]);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const features = [
    { icon: Zap, title: 'Real-time Data Analytics', desc: 'Monitor your business metrics as they happen with live data streaming and instant updates.' },
    { icon: Brain, title: 'Predictive Insights', desc: 'Leverage AI and machine learning to forecast trends and make proactive business decisions.' },
    { icon: BarChart3, title: 'Interactive Dashboards', desc: 'Customize and explore data with intuitive, drag-and-drop dashboard interfaces.' },
    { icon: PieChart, title: 'AI-Driven Reporting', desc: 'Generate comprehensive reports automatically with intelligent data analysis and visualization.' },
    { icon: TrendingUp, title: 'Data Visualization Tools', desc: 'Transform complex datasets into clear, actionable visual insights with advanced charting.' },
    { icon: Users, title: 'Collaborative Analytics', desc: 'Share insights across teams with real-time collaboration and secure data sharing features.' }
  ];

  const integrations = [
    { name: 'CRM', icon: Users },
    { name: 'ERP', icon: Database },
    { name: 'Cloud', icon: CloudUpload },
    { name: 'Marketing', icon: TrendingUp },
    { name: 'Collaboration', icon: Share2 },
    { name: 'Analytics', icon: BarChart3 }
  ];

  const caseStudies = [
    { company: 'TechCorp', metric: '30%', label: 'Revenue Increase', desc: 'Leveraged BI insights to identify new market opportunities' },
    { company: 'DataFlow Inc', metric: '60%', label: 'Time Saved', desc: 'Automated reporting reduced manual analysis time dramatically' },
    { company: 'Growth Partners', metric: '95%', label: 'Better Decisions', desc: 'Data-driven approach improved strategic decision accuracy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section id="section-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible['section-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empower Your Business with <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Data-Driven Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Transform raw data into strategic intelligence. Our Business Intelligence platform combines advanced analytics, AI-powered insights, and intuitive visualization to help you make smarter decisions faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
                Explore Insights
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
             
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Key Features Section */}
      <section id="section-features" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for <span className="text-blue-600">Modern Analytics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform data into actionable business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 ${isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insights Dashboard Section */}
      <section id="section-dashboard" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['section-dashboard'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real-Time <span className="text-blue-600">Dashboard Analytics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visualize your key metrics with beautiful, interactive dashboards
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible['section-dashboard'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Sales Performance Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Sales Performance</h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$2.4M</div>
              <div className="text-green-600 text-sm font-semibold mb-4">↑ 18.5% vs last month</div>
              <div className="space-y-2">
                {[85, 65, 90, 75, 95].map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000" style={{ width: isVisible['section-dashboard'] ? `${h}%` : '0%' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8">{h}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI Overview Card */}
            <div className="bg-blue-600 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-lg font-semibold mb-6">Key Performance Indicators</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div>
                    <div className="text-sm opacity-80">Active Users</div>
                    <div className="text-2xl font-bold">12,847</div>
                  </div>
                  <Users className="w-8 h-8 opacity-80" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div>
                    <div className="text-sm opacity-80">Conversion Rate</div>
                    <div className="text-2xl font-bold">23.4%</div>
                  </div>
                  <PieChart className="w-8 h-8 opacity-80" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div>
                    <div className="text-sm opacity-80">Avg Response Time</div>
                    <div className="text-2xl font-bold">1.2s</div>
                  </div>
                  <Zap className="w-8 h-8 opacity-80" />
                </div>
              </div>
            </div>

            {/* Data Trends Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Growth Trends</h3>
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="h-40 flex items-end justify-between gap-2">
                {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all duration-1000 hover:from-blue-600 hover:to-cyan-500" style={{ height: isVisible['section-dashboard'] ? `${h}%` : '0%', transitionDelay: `${i * 100}ms` }}></div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-500">7-Day Performance</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">+34% Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="section-integration" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['section-integration'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Seamless <span className="text-blue-600">Integration & Collaboration</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your entire tech stack and collaborate across teams with our comprehensive integration ecosystem
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {integrations.map((int, idx) => {
              const Icon = int.icon;
              return (
                <div
                  key={idx}
                  className={`group p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-300 hover:-translate-y-2 ${isVisible['section-integration'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-lg font-semibold text-gray-900">{int.name}</div>
                </div>
              );
            })}
          </div>

          <div className={`bg-blue-600 rounded-3xl p-12 text-white shadow-2xl transition-all duration-1000 ${isVisible['section-integration'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Connect Everything, Analyze Everything</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Our platform integrates seamlessly with your existing tools and workflows. From CRM to ERP, marketing automation to cloud storage, bring all your data together for unified analysis and actionable insights.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Real-time Sync</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Secure API</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Easy Setup</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-4">
                    {['Data Warehouse', 'Analytics Engine', 'ML Models', 'Reporting Suite'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <Database className="w-6 h-6" />
                        <span className="font-medium">{item}</span>
                        <CheckCircle className="w-5 h-5 ml-auto text-green-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="section-results" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['section-results'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proven <span className="text-blue-600">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real success stories from businesses that transformed their operations with data intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 ${isVisible['section-results'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-gray-900 text-lg">{study.company}</div>
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {idx === 0 ? `${counters.revenue}%` : idx === 1 ? `${counters.time}%` : `${counters.decisions}%`}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-3">{study.label}</div>
                <p className="text-gray-600">{study.desc}</p>
              </div>
            ))}
          </div>

          <div className={`bg-slate-50 rounded-3xl p-12 transition-all duration-1000 ${isVisible['section-results'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
              <p className="text-gray-600">Join thousands of companies making smarter decisions</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {['TechCorp', 'DataFlow', 'Analytics Pro', 'InnovateX', 'Growth Partners'].map((logo, i) => (
                <div key={i} className="text-2xl font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="section-cta" className="py-24 px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Turn Data into Actionable Insights — <span className="text-cyan-100">Get Started Today!</span>
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Join leading companies in transforming their business with intelligent analytics
            </p>
          </div>

          <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
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
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business intelligence needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full group px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;