'use client'
import React, { useState, useRef, useEffect } from 'react';
import { 
  Target, Users, BarChart3, Zap, CheckCircle, ArrowRight, TrendingUp, 
  Shield, Clock, Award, Brain, Rocket, Globe, Star, Play, ChevronDown,
  Database, Bot, MessageSquare, Calendar, Phone, Mail, Linkedin,
  Activity, Lock, Zap as Lightning, Trophy, Users2, Building2,
  Sparkles, ChevronRight, ExternalLink, ArrowUpRight
} from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState('features');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms analyze behavioral patterns and market signals to identify high-intent prospects with unprecedented accuracy.",
      keyMetric: "94% Accuracy",
      improvement: "+67% vs industry average",
      benefits: ["Real-time intent analysis", "Behavioral pattern recognition", "Predictive lead scoring", "Smart recommendation engine"],
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      glowColor: "purple-500/30"
    },
    {
      icon: Rocket,
      title: "Multi-Channel Outreach",
      description: "Execute personalized campaigns across email, LinkedIn, SMS, and social platforms with intelligent sequence optimization and A/B testing.",
      keyMetric: "5.8x Response Rate",
      improvement: "+340% engagement lift",
      benefits: ["Automated sequences", "Cross-platform sync", "Dynamic personalization", "Smart timing optimization"],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      glowColor: "blue-500/30"
    },
    {
      icon: Target,
      title: "Smart Lead Qualification",
      description: "Transform prospects into sales-ready opportunities using advanced qualification scoring, behavioral analytics, and intent tracking.",
      keyMetric: "78% Faster Qualification",
      improvement: "3.2x more qualified leads",
      benefits: ["Dynamic scoring system", "Intent signal tracking", "Sales-ready alerts", "Custom qualification rules"],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      glowColor: "emerald-500/30"
    },
    {
      icon: Zap,
      title: "Intelligent Nurturing",
      description: "Automated workflows that adapt based on prospect behavior, converting cold leads into warm opportunities with precision timing.",
      keyMetric: "89% Conversion Rate",
      improvement: "+156% pipeline velocity",
      benefits: ["Behavioral triggers", "Dynamic content paths", "ROI optimization", "Predictive timing"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-500/10",
      glowColor: "orange-500/30"
    }
  ];

  const enterpriseFeatures = [
    { 
      icon: TrendingUp, 
      title: "Advanced Analytics", 
      description: "Real-time performance dashboards with predictive insights",
      metric: "99.9% Uptime",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      icon: Shield, 
      title: "Enterprise Security", 
      description: "SOC2 Type II + GDPR compliance with zero-trust architecture",
      metric: "Bank-Grade Security",
      gradient: "from-green-500 to-emerald-600"
    },
    { 
      icon: Globe, 
      title: "Global Infrastructure", 
      description: "Multi-region deployment with edge computing capabilities",
      metric: "150+ Countries",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      icon: Award, 
      title: "Proven Results", 
      description: "Trusted by industry leaders and Fortune 500 companies",
      metric: "2,500+ Companies",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "🔷", category: "CRM" },
    { name: "HubSpot", logo: "🟠", category: "CRM" },
    { name: "Slack", logo: "💬", category: "Communication" },
    { name: "Teams", logo: "💼", category: "Communication" },
    { name: "Gmail", logo: "📧", category: "Email" },
    { name: "Outlook", logo: "📨", category: "Email" },
    { name: "LinkedIn", logo: "💼", category: "Social" },
    { name: "Zapier", logo: "⚡", category: "Automation" }
  ];

  const testimonialStats = [
    { value: "94%", label: "Customer Satisfaction", icon: Star, gradient: "from-yellow-500 to-orange-600" },
    { value: "5.8x", label: "ROI Improvement", icon: TrendingUp, gradient: "from-green-500 to-emerald-600" },
    { value: "67%", label: "Time Saved", icon: Clock, gradient: "from-blue-500 to-cyan-600" },
    { value: "2.5k+", label: "Happy Customers", icon: Users2, gradient: "from-purple-500 to-pink-600" }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Enterprise Sales",
      description: "Scale your enterprise sales process with AI-powered lead qualification and automated nurturing sequences.",
      features: ["Account-based marketing", "Multi-stakeholder engagement", "Long sales cycle optimization"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "Startup Growth",
      description: "Accelerate growth with lean sales processes, automated outreach, and data-driven optimization.",
      features: ["Rapid experimentation", "Cost-effective scaling", "Growth hacking tools"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Users2,
      title: "Agency Services",
      description: "Manage multiple client campaigns with white-label solutions and comprehensive reporting.",
      features: ["Multi-tenant architecture", "White-label branding", "Client reporting dashboards"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <>
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(0, 132, 255, 0.4); }
          50% { box-shadow: 0 0 60px rgba(0, 132, 255, 0.8); }
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
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
        }
        .glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(20px);
        }
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .floating-element {
          position: absolute;
          opacity: 0.15;
          animation: float 8s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="relative py-32 bg-[#0B1426] overflow-hidden min-h-screen">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Enhanced Floating geometric shapes */}
          <div className="floating-elements">
            <div className="floating-element top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl opacity-20" style={{ animationDelay: '1s' }}></div>
            <div className="floating-element top-3/4 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20" style={{ animationDelay: '3s' }}></div>
            <div className="floating-element top-1/2 right-1/3 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 transform rotate-45 opacity-20" style={{ animationDelay: '5s' }}></div>
            <div className="floating-element top-1/3 left-2/3 w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl opacity-15" style={{ animationDelay: '7s' }}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Header Section */}
          <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full mb-8">
              <Sparkles className="w-6 h-6 text-[#00D4FF]" />
              <span className="text-[#00D4FF] font-bold text-lg">ADVANCED FEATURES</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              Features That
              <span className="block bg-gradient-to-r from-[#0084FF] via-[#00D4FF] to-[#00A3FF] bg-clip-text text-transparent animate-gradient"> Transform</span>
              Your Sales Process
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover how our AI-powered platform revolutionizes lead generation, qualification, and nurturing 
              with <span className="text-[#00D4FF] font-bold">enterprise-grade security</span> and proven results from <span className="text-green-400 font-bold">2,500+ successful companies</span>.
            </p>
            
            {/* Enhanced Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              {testimonialStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 animate-glow-pulse`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className={`flex justify-center mb-20 transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <div className="glass-card rounded-3xl p-3 shadow-2xl">
              {[
                { id: 'features', label: 'Core Features', icon: Brain },
                { id: 'integrations', label: 'Integrations', icon: Globe },
                { id: 'use-cases', label: 'Use Cases', icon: Target }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-[#0084FF] to-[#00D4FF] text-white shadow-2xl shadow-blue-500/30 scale-105' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-6 h-6" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Main Features Tab */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
              {mainFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`group relative glass-card rounded-3xl p-10 transition-all duration-700 cursor-pointer overflow-hidden ${
                    activeFeature === index 
                      ? 'shadow-2xl shadow-blue-500/20 scale-[1.02] border-blue-400/50' 
                      : 'hover:shadow-xl hover:scale-[1.01]'
                  } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  {/* Enhanced Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative flex items-start gap-8">
                    {/* Enhanced Icon */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl animate-glow-pulse`}>
                      <feature.icon className="w-10 h-10 text-white" />
                      <div className={`absolute inset-0 bg-${feature.glowColor} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700`} />
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-white mb-4 group-hover:text-[#00D4FF] transition-colors duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-8 text-xl">{feature.description}</p>
                      
                      {/* Enhanced Metrics */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-2xl text-lg font-bold border border-green-500/30 backdrop-blur-sm">
                          <CheckCircle className="w-5 h-5" />
                          {feature.keyMetric}
                        </div>
                        <div className="inline-flex items-center gap-3 bg-blue-500/20 text-blue-400 px-6 py-3 rounded-2xl text-lg font-bold border border-blue-500/30 backdrop-blur-sm">
                          <TrendingUp className="w-5 h-5" />
                          {feature.improvement}
                        </div>
                      </div>
                      
                      {/* Enhanced Benefits */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-4 text-lg text-gray-200 glass-card rounded-xl px-4 py-3">
                            <div className={`w-3 h-3 bg-gradient-to-r ${feature.gradient} rounded-full shadow-lg`} />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Enhanced Integrations Tab */}
          {activeTab === 'integrations' && (
            <div className={`mb-24 transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <div className="text-center mb-16">
                <h3 className="text-5xl font-black text-white mb-6">Seamless Integrations</h3>
                <p className="text-gray-300 max-w-3xl mx-auto text-2xl leading-relaxed">
                  Connect with your existing tools and workflows. Over <span className="text-[#00D4FF] font-bold">500+ integrations</span> available.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
                {integrations.map((integration, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-gray-700/50 hover:border-blue-400/50 group cursor-pointer animate-glow-pulse"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                      {integration.logo}
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">{integration.name}</h4>
                    <p className="text-sm text-gray-400">{integration.category}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-[#0084FF] via-[#00D4FF] to-[#0084FF] text-white px-12 py-6 rounded-2xl font-black text-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-4 mx-auto animate-gradient shimmer-effect">
                  View All Integrations <ExternalLink className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

          {/* Enhanced Use Cases Tab */}
          {activeTab === 'use-cases' && (
            <div className={`mb-24 transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <div className="text-center mb-16">
                <h3 className="text-5xl font-black text-white mb-6">Built for Every Business</h3>
                <p className="text-gray-300 max-w-3xl mx-auto text-2xl leading-relaxed">
                  From startups to enterprises, our platform adapts to your unique sales needs with <span className="text-[#00D4FF] font-bold">proven success</span>.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-3xl p-10 border border-gray-700/50 hover:shadow-2xl transition-all duration-700 group hover:border-blue-400/50"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl animate-glow-pulse`}>
                      <useCase.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-3xl font-black text-white mb-6 group-hover:text-[#00D4FF] transition-colors duration-500">{useCase.title}</h4>
                    <p className="text-gray-300 mb-8 leading-relaxed text-xl">{useCase.description}</p>
                    <ul className="space-y-4">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-4 text-lg text-gray-200">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Enterprise Features */}
          <div className={`mb-24 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-full mb-8">
                <Shield className="w-6 h-6 text-purple-400" />
                <span className="text-purple-400 font-bold text-lg">ENTERPRISE GRADE</span>
              </div>
              <h3 className="text-6xl font-black text-white mb-8">Built for Scale & Security</h3>
              <p className="text-gray-300 max-w-4xl mx-auto text-2xl leading-relaxed">
                Enterprise-grade infrastructure with <span className="text-green-400 font-bold">bank-level security</span>, 99.9% uptime guarantee, 
                and compliance certifications trusted by <span className="text-[#00D4FF] font-bold">Fortune 500 companies</span> worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative glass-card rounded-3xl p-10 hover:shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-700 group overflow-hidden"
                >
                  {/* Enhanced Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                  
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl animate-glow-pulse`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4 group-hover:text-[#00D4FF] transition-colors duration-500">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{feature.description}</p>
                    <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-lg font-bold border border-green-500/30">
                      <Trophy className="w-5 h-5" />
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
