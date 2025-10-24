'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Headphones, BarChart3, Zap, Shield, Users, Cloud, Globe, 
  ArrowRight, Check, Star, Play, MessageCircle, Video, Mail, 
  Calendar, Clock, Settings, Download, Upload, Wifi, Battery,
  ChevronLeft, ChevronRight, X, Plus, Minus
} from 'lucide-react';

export default function PhoneSystemPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activePlan, setActivePlan] = useState(1);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activePopup, setActivePopup] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate timeline items sequentially
            timelineData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTimelineItems(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Horizontal Timeline Data - Using Theme Colors Only
  const timelineData = [
    {
      year: "2024",
      title: "AI-Powered Call Analytics",
      description: "Advanced machine learning algorithms for call pattern analysis and real-time insights with predictive analytics",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 50+ new countries with local numbers and regional support teams deployed worldwide",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Mobile App 3.0",
      description: "Complete redesign with offline capabilities and enhanced user experience across all platforms",
      icon: <Download className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance certifications for enterprise clients with advanced threat protection",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      year: "2024 Q4",
      title: "Voice AI Assistant",
      description: "Next-generation voice AI for automated customer support and intelligent call handling with natural language processing",
      icon: <MessageCircle className="w-6 h-6" />,
    }
  ];

  // Hovering Block Popups Data
  const popupBlocks = [
    {
      id: 1,
      title: "Call Analytics Dashboard",
      description: "Real-time insights into call performance metrics, customer behavior patterns, and agent productivity with comprehensive reporting and AI-driven recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Real-time metrics", "Custom reports", "Performance tracking", "Trend analysis", "AI insights"]
    },
    {
      id: 2,
      title: "Team Collaboration Hub",
      description: "Seamless communication and file sharing platform for distributed teams with integrated video conferencing and project management tools",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Video calls", "File sharing", "Team messaging", "Screen sharing", "Project management"]
    },
    {
      id: 3,
      title: "Security Command Center",
      description: "Enterprise-grade security monitoring with real-time threat detection and compliance management across all communication channels",
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Threat detection", "Compliance monitoring", "Access control", "Audit logs", "Real-time alerts"]
    }
  ];

  // Interactive Demo Data
  const demoFeatures = [
    {
      title: "Smart Call Routing",
      description: "AI-powered call distribution to the right agent based on skills and availability with intelligent queue management",
      steps: ["Call received", "AI analysis", "Agent matching", "Connection established"],
      demoImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Real-time Transcription",
      description: "Automatic speech-to-text conversion during calls with high accuracy and multi-language support",
      steps: ["Voice capture", "AI processing", "Text generation", "Live display"],
      demoImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive call metrics and reporting with actionable insights and predictive analytics",
      steps: ["Data collection", "Pattern analysis", "Report generation", "Insights delivery"],
      demoImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Stats Counter Animation
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const increment = end / (duration / 10);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.ceil(start));
              }
            }, 10);
          }
        },
        { threshold: 0.1 }
      );

      if (countRef.current) observer.observe(countRef.current);
      return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={countRef}>{count.toLocaleString()}</span>;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-[#0a2540] min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#007bff] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#007bff] rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#007bff] rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-[#007bff] rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-[#007bff] rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Next-Gen Communication Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                Enterprise Phone
                <span className="block text-[#007bff] mt-2">System Reimagined</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Transform your business communication with AI-powered cloud phone system. 
                Connect teams worldwide with crystal-clear voice, smart routing, and enterprise-grade security.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-[#007bff] rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2 text-white">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 text-white flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Right Content - Interactive Dashboard */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Interactive Dashboard Content */}
                <div className="space-y-6">
                  {/* Active Call Card */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#007bff] to-blue-600 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Active Call</div>
                          <div className="text-sm text-white/80">Sarah Johnson - Client</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[65, 78, 92, 85].map((value, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                        <div className="text-2xl font-bold text-white mb-1">{value}%</div>
                        <div className="text-xs text-white/80">Performance</div>
                        <div className="w-full bg-white/10 rounded-full h-1 mt-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#007bff] to-blue-400 rounded-full transition-all duration-1000"
                            style={{width: `${value}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline Section */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0a2540]">
              Our Innovation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our vision for modern business communication
            </p>
          </div>

          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] via-blue-400 to-[#007bff] transform -translate-x-1/2 hidden lg:block"></div>
            
            {/* Mobile Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] via-blue-400 to-[#007bff] lg:hidden"></div>

            <div className="space-y-12 lg:space-y-0">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 transition-all duration-700 transform ${
                    visibleTimelineItems.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  } ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 lg:left-1/2 top-6 w-4 h-4 bg-white border-4 border-[#007bff] rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-[#007bff]/25"></div>
                  
                  {/* Content Card */}
                  <div 
                    className={`flex-1 lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                    } ml-12 lg:ml-0`}
                    onMouseEnter={() => setActiveTimeline(index)}
                  >
                    <div className={`bg-white rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer group hover:shadow-2xl min-h-[200px] flex flex-col justify-between ${
                      activeTimeline === index 
                        ? 'border-[#007bff] shadow-xl scale-105' 
                        : 'border-gray-200 hover:border-[#007bff]/50'
                    }`}>
                      {/* Year Badge */}
                      <div className="absolute -top-3 -left-3 px-4 py-2 rounded-full text-white font-bold text-sm bg-gradient-to-r from-[#007bff] to-blue-600 shadow-lg">
                        {item.year}
                      </div>

                      <div className="flex items-start gap-4 mt-2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#007bff] to-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-[#0a2540] mb-3 leading-tight group-hover:text-[#007bff] transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-4 flex items-center gap-2 pt-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-[#007bff] to-blue-600 transition-all duration-1000"
                            style={{
                              width: activeTimeline === index ? '100%' : '0%',
                              transitionDelay: activeTimeline === index ? '300ms' : '0ms'
                            }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          {activeTimeline === index ? 'Completed' : 'Milestone'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="lg:w-2/12 hidden lg:block"></div>
                </div>
              ))}
            </div>

            {/* Floating Connection Lines */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {timelineData.slice(0, -1).map((_, index) => (
                <div
                  key={index}
                  className={`absolute left-1/2 h-8 bg-gradient-to-r from-[#007bff] to-blue-600 transform -translate-x-1/2 transition-all duration-1000 ${
                    visibleTimelineItems.includes(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    top: `${(index * 25) + 12}%`,
                    width: '2px',
                    transitionDelay: `${(index + 1) * 200}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
              <div className="text-sm text-gray-600">Journey Progress</div>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#007bff] to-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${((activeTimeline + 1) / timelineData.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-[#007bff]">
                  {activeTimeline + 1}/{timelineData.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hovering Block Popups Section - Increased Bottom Spacing */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #007bff 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0a2540]">
              Interactive Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hover over each block to explore our powerful features in detail
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {popupBlocks.map((block, index) => (
              <div
                key={block.id}
                className="relative mb-32"
                onMouseEnter={() => setActivePopup(block.id)}
                onMouseLeave={() => setActivePopup(null)}
              >
                {/* Main Block */}
                <div className={`bg-white rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer group h-full flex flex-col ${
                  activePopup === block.id 
                    ? 'border-[#007bff] shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-[#007bff]/50 hover:shadow-xl'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 ${
                    activePopup === block.id
                      ? 'bg-gradient-to-r from-[#007bff] to-blue-600 text-white scale-110'
                      : 'bg-[#007bff]/10 text-[#007bff]'
                  }`}>
                    {block.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0a2540] mb-4 leading-tight">{block.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-1">{block.description}</p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {block.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popup Block */}
                {activePopup === block.id && (
                  <div className="absolute top-full left-0 right-0 mt-8 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-20 animate-fade-in">
                    <img 
                      src={block.image} 
                      alt={block.title}
                      className="w-full h-56 object-cover rounded-xl mb-4"
                    />
                    <div className="space-y-3 mb-4">
                      {block.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-[#007bff] text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-300">
                      Explore Feature
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a2540] to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interactive demonstration of our key features and workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {demoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer group"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#007bff] to-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {feature.steps.map((step, stepIndex) => (
                          <span
                            key={stepIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
                  <img 
                    src={demoFeatures[activeFeature]?.demoImage} 
                    alt="Demo"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {demoFeatures[activeFeature]?.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {demoFeatures[activeFeature]?.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mt-6">
                  {demoFeatures[activeFeature]?.steps.map((step, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#007bff] flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                        {index + 1}
                      </div>
                      <div className="text-xs text-gray-300">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 50000, label: "Active Users", suffix: "+" },
              { value: 99.9, label: "Uptime SLA", suffix: "%" },
              { value: 4.9, label: "Customer Rating", suffix: "/5" },
              { value: 150, label: "Countries", suffix: "+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-[#007bff] hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#007bff] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Counter end={stat.value} />{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}