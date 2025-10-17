'use client'
import React, { useState, useRef, useEffect } from 'react';
import { 
  Target, Users, BarChart3, Zap, CheckCircle, ArrowRight, TrendingUp, 
  Shield, Clock, Award, Brain, Rocket, Globe, Star, Play, ChevronDown,
  Database, Bot, MessageSquare, Calendar, Phone, Mail, Linkedin,
  Activity, Lock, Zap as Lightning, Trophy, Users2, Building2,
  Sparkles, ChevronRight, ExternalLink, ArrowUpRight, Menu, X
} from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms analyze behavioral patterns and market signals to identify high-intent prospects with unprecedented accuracy.",
      keyMetric: "94% Accuracy",
      improvement: "+67% vs industry average",
      benefits: ["Real-time intent analysis", "Behavioral pattern recognition", "Predictive lead scoring", "Smart recommendation engine"],
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      glowColor: "indigo-500/20",
      borderColor: "border-indigo-200"
    },
    {
      icon: Rocket,
      title: "Multi-Channel Outreach",
      description: "Execute personalized campaigns across email, LinkedIn, SMS, and social platforms with intelligent sequence optimization and A/B testing.",
      keyMetric: "5.8x Response Rate",
      improvement: "+340% engagement lift",
      benefits: ["Automated sequences", "Cross-platform sync", "Dynamic personalization", "Smart timing optimization"],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      glowColor: "blue-500/20",
      borderColor: "border-blue-200"
    },
    {
      icon: Target,
      title: "Smart Lead Qualification",
      description: "Transform prospects into sales-ready opportunities using advanced qualification scoring, behavioral analytics, and intent tracking.",
      keyMetric: "78% Faster Qualification",
      improvement: "3.2x more qualified leads",
      benefits: ["Dynamic scoring system", "Intent signal tracking", "Sales-ready alerts", "Custom qualification rules"],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      glowColor: "emerald-500/20",
      borderColor: "border-emerald-200"
    },
    {
      icon: Zap,
      title: "Intelligent Nurturing",
      description: "Automated workflows that adapt based on prospect behavior, converting cold leads into warm opportunities with precision timing.",
      keyMetric: "89% Conversion Rate",
      improvement: "+156% pipeline velocity",
      benefits: ["Behavioral triggers", "Dynamic content paths", "ROI optimization", "Predictive timing"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      glowColor: "orange-500/20",
      borderColor: "border-orange-200"
    }
  ];

  const enterpriseFeatures = [
    { 
      icon: TrendingUp, 
      title: "Advanced Analytics", 
      description: "Real-time performance dashboards with predictive insights and comprehensive reporting",
      metric: "99.9% Uptime",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    { 
      icon: Shield, 
      title: "Enterprise Security", 
      description: "SOC2 Type II + GDPR compliance with zero-trust architecture and advanced encryption",
      metric: "Bank-Grade Security",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    { 
      icon: Globe, 
      title: "Global Infrastructure", 
      description: "Multi-region deployment with edge computing capabilities and CDN optimization",
      metric: "150+ Countries",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    { 
      icon: Award, 
      title: "Proven Results", 
      description: "Trusted by industry leaders and Fortune 500 companies with measurable success",
      metric: "2,500+ Companies",
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "🔷", category: "CRM", color: "text-blue-600" },
    { name: "HubSpot", logo: "🟠", category: "CRM", color: "text-orange-600" },
    { name: "Slack", logo: "💬", category: "Communication", color: "text-purple-600" },
    { name: "Teams", logo: "💼", category: "Communication", color: "text-blue-600" },
    { name: "Gmail", logo: "📧", category: "Email", color: "text-red-600" },
    { name: "Outlook", logo: "📨", category: "Email", color: "text-blue-600" },
    { name: "LinkedIn", logo: "💼", category: "Social", color: "text-blue-700" },
    { name: "Zapier", logo: "⚡", category: "Automation", color: "text-yellow-600" }
  ];

  const testimonialStats = [
    { value: "94%", label: "Customer Satisfaction", icon: Star, gradient: "from-yellow-500 to-orange-600", bg: "bg-yellow-50" },
    { value: "5.8x", label: "ROI Improvement", icon: TrendingUp, gradient: "from-green-500 to-emerald-600", bg: "bg-green-50" },
    { value: "67%", label: "Time Saved", icon: Clock, gradient: "from-blue-500 to-cyan-600", bg: "bg-blue-50" },
    { value: "2.5k+", label: "Happy Customers", icon: Users2, gradient: "from-purple-500 to-pink-600", bg: "bg-purple-50" }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Enterprise Sales",
      description: "Scale your enterprise sales process with AI-powered lead qualification and automated nurturing sequences that convert prospects into revenue.",
      features: ["Account-based marketing", "Multi-stakeholder engagement", "Long sales cycle optimization"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Rocket,
      title: "Startup Growth",
      description: "Accelerate growth with lean sales processes, automated outreach, and data-driven optimization tailored for fast-moving startups.",
      features: ["Rapid experimentation", "Cost-effective scaling", "Growth hacking tools"],
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Users2,
      title: "Agency Services",
      description: "Manage multiple client campaigns with white-label solutions, comprehensive reporting, and scalable automation workflows.",
      features: ["Multi-tenant architecture", "White-label branding", "Client reporting dashboards"],
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <>
      {/* Enhanced Custom Styles with better mobile optimization */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15); }
          50% { box-shadow: 0 8px 40px rgba(59, 130, 246, 0.25); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer 3s infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .feature-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 768px) {
          .mobile-stack {
            flex-direction: column;
          }
          .mobile-center {
            text-align: center;
          }
          .mobile-full {
            width: 100%;
          }
        }
      `}</style>

      <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden min-h-screen">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric patterns */}
          <div className="absolute top-20 right-10 sm:right-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 sm:left-20 w-28 sm:w-56 lg:w-80 h-28 sm:h-56 lg:h-80 bg-gradient-to-br from-cyan-100/50 to-teal-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 sm:w-72 lg:w-[500px] h-36 sm:h-72 lg:h-[500px] bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-6 sm:w-8 lg:w-12 h-6 sm:w-8 lg:h-12 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-gradient-to-br from-emerald-200 to-teal-300 transform rotate-45 opacity-30 animate-float" style={{ animationDelay: '5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Header Section - Mobile Optimized */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-24 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 glass-card rounded-full mb-4 sm:mb-6 lg:mb-8">
              <Sparkles className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-blue-600" />
              <span className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">ADVANCED FEATURES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
              Features That
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent animate-gradient">Transform</span>
              Your Sales Process
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4">
              Discover how our AI-powered platform revolutionizes lead generation, qualification, and nurturing 
              with <span className="text-blue-600 font-bold">enterprise-grade security</span> and proven results from <span className="text-green-600 font-bold">2,500+ successful companies</span>.
            </p>
            
            {/* Enhanced Stats Bar - Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              {testimonialStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`flex items-center justify-center w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-lg mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500 animate-pulse-glow`}>
                    <stat.icon className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Tab Navigation - Mobile Responsive */}
          <div className={`flex justify-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-800 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="glass-card rounded-2xl lg:rounded-3xl p-2 lg:p-3 shadow-xl max-w-full overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {[
                  { id: 'features', label: 'Core Features', icon: Brain },
                  { id: 'integrations', label: 'Integrations', icon: Globe },
                  { id: 'use-cases', label: 'Use Cases', icon: Target }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 mobile-full ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                    }`}
                  >
                    <tab.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Main Features Tab - Fully Responsive */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
              {mainFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`group relative glass-card rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-700 cursor-pointer overflow-hidden feature-card-hover ${
                    activeFeature === index 
                      ? `shadow-xl ${feature.borderColor} border-2 scale-[1.01] lg:scale-[1.02]` 
                      : 'shadow-lg hover:shadow-xl border border-gray-200'
                  } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  {/* Enhanced Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl lg:rounded-3xl`} />
                  
                  <div className="relative">
                    {/* Mobile-first layout */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
                      {/* Enhanced Icon */}
                      <div className={`w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl lg:rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 shadow-lg flex-shrink-0 mx-auto sm:mx-0`}>
                        <feature.icon className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
                      </div>
                      
                      {/* Enhanced Content */}
                      <div className="flex-1 mobile-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-500">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg lg:text-xl">{feature.description}</p>
                        
                        {/* Enhanced Metrics - Mobile Stack */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                          <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-100 text-green-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl lg:rounded-2xl text-sm sm:text-base lg:text-lg font-bold border border-green-200 backdrop-blur-sm">
                            <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                            {feature.keyMetric}
                          </div>
                          <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-100 text-blue-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl lg:rounded-2xl text-sm sm:text-base lg:text-lg font-bold border border-blue-200 backdrop-blur-sm">
                            <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5" />
                            {feature.improvement}
                          </div>
                        </div>
                        
                        {/* Enhanced Benefits - Mobile Optimized */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg text-gray-700 glass-card rounded-lg lg:rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                              <div className={`w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r ${feature.gradient} rounded-full shadow-sm flex-shrink-0`} />
                              <span className="leading-tight">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Enhanced Integrations Tab - Mobile Optimized */}
          {activeTab === 'integrations' && (
            <div className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">Seamless Integrations</h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-2xl leading-relaxed px-4">
                  Connect with your existing tools and workflows. Over <span className="text-blue-600 font-bold">500+ integrations</span> available.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
                {integrations.map((integration, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-blue-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-125 transition-transform duration-500">
                      {integration.logo}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">{integration.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">{integration.category}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-xl lg:rounded-2xl font-black text-base sm:text-lg lg:text-xl hover:shadow-xl transition-all duration-500 flex items-center gap-3 sm:gap-4 mx-auto animate-gradient shimmer-effect">
                  View All Integrations <ExternalLink className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                </button>
              </div>
            </div>
          )}

          {/* Enhanced Use Cases Tab - Mobile Responsive */}
          {activeTab === 'use-cases' && (
            <div className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">Built for Every Business</h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg lg:text-2xl leading-relaxed px-4">
                  From startups to enterprises, our platform adapts to your unique sales needs with <span className="text-blue-600 font-bold">proven success</span>.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className={`glass-card rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 ${useCase.borderColor} border-2 hover:shadow-xl transition-all duration-700 group`}
                  >
                    <div className={`w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-gradient-to-br ${useCase.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg mx-auto lg:mx-0`}>
                      <useCase.icon className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors duration-500 text-center lg:text-left">{useCase.title}</h4>
                    <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg lg:text-xl text-center lg:text-left">{useCase.description}</p>
                    <ul className="space-y-3 sm:space-y-4">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg text-gray-700">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Enterprise Features - Mobile First */}
          <div className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 sm:gap-3 glass-card px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full mb-4 sm:mb-6 lg:mb-8">
                <Shield className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-purple-600" />
                <span className="text-purple-600 font-bold text-sm sm:text-base lg:text-lg">ENTERPRISE GRADE</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 px-4">Built for Scale & Security</h3>
              <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg lg:text-2xl leading-relaxed px-4">
                Enterprise-grade infrastructure with <span className="text-green-600 font-bold">bank-level security</span>, 99.9% uptime guarantee, 
                and compliance certifications trusted by <span className="text-blue-600 font-bold">Fortune 500 companies</span> worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`relative glass-card rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-700 group overflow-hidden ${feature.bgColor}`}
                >
                  <div className="relative text-center lg:text-left">
                    <div className={`w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg mx-auto lg:mx-0`}>
                      <feature.icon className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-500">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">{feature.description}</p>
                    <div className={`inline-flex items-center gap-2 sm:gap-3 bg-green-100 ${feature.textColor} px-3 sm:px-4 py-2 rounded-lg lg:rounded-xl text-sm sm:text-base lg:text-lg font-bold border border-green-200`}>
                      <Trophy className="w-4 sm:w-5 h-4 sm:h-5" />
                      {feature.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
