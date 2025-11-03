'use client'
import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Pause,
  Target, Users, Zap, Rocket, BarChart3, TrendingUp
} from 'lucide-react';

const EmailMarketingProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % processSteps.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const processSteps = [
    {
      title: "Strategy & Discovery",
      description: "Comprehensive analysis of your business objectives and target audience to build a data-driven strategy.",
      features: ["Audience Analysis", "Goal Alignment", "KPI Framework", "Competitive Research"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "2-3 days",
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Audience Segmentation",
      description: "Advanced segmentation strategies to deliver personalized content for higher engagement rates.",
      features: ["Behavioral Segmentation", "Demographic Profiling", "Engagement Scoring", "Personalization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "1-2 weeks",
      icon: Users,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Campaign Creation",
      description: "Professional design and development of high-converting email campaigns with optimized content.",
      features: ["Template Design", "Content Strategy", "A/B Testing", "Mobile Optimization"],
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "2-3 weeks",
      icon: Zap,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Automation Setup",
      description: "Intelligent automation workflows that engage customers with timely, relevant messaging.",
      features: ["Welcome Series", "Lead Nurturing", "Re-engagement", "Behavioral Triggers"],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "1-2 weeks",
      icon: Rocket,
      color: "from-green-500 to-cyan-500"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive tracking and analysis with actionable insights to optimize campaign performance.",
      features: ["Real-time Dashboard", "ROI Tracking", "Conversion Analysis", "Performance Reports"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "Ongoing",
      icon: BarChart3,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Optimization & Scaling",
      description: "Continuous optimization and strategic scaling of successful campaigns for sustainable growth.",
      features: ["Performance Optimization", "Scale Strategy", "Testing Framework", "Growth Planning"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "Continuous",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const currentStep = processSteps[activeStep];
  const IconComponent = currentStep.icon;

  const nextStep = () => {
    setActiveStep(prev => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setActiveStep(prev => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Our Email Marketing
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed italic">
              Connecting, Engaging, and Inspiring — One Email at a Time
            </p>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mt-6 leading-relaxed">
              Behind every successful campaign lies a thoughtful process. We don't just send emails — we build meaningful conversations. From understanding your audience and crafting personalized messages to designing visually captivating layouts and tracking real-time results, every step is focused on creating impact. Our goal is to turn every click into connection and every message into a story that inspires action.
            </p>
          </div>
        </div>

        {/* Process Flow Visualization */}
        <div className="mb-20">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="relative flex justify-between">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`relative flex flex-col items-center group transition-all duration-500 ${
                      index <= activeStep ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    {/* Step Circle */}
                    <div className={`w-16 h-16 rounded-full border-4 transition-all duration-500 flex items-center justify-center ${
                      index < activeStep 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : index === activeStep
                        ? `bg-gradient-to-r ${step.color} border-white shadow-xl text-white`
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}>
                      {index < activeStep ? (
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color}`}></div>
                        </div>
                      ) : (
                        <StepIcon className="w-6 h-6" />
                      )}
                    </div>

                    {/* Step Label */}
                    <div className={`mt-4 text-center transition-all duration-500 ${
                      index === activeStep 
                        ? 'text-gray-900 font-semibold scale-110' 
                        : 'text-gray-500'
                    }`}>
                      <div className="text-sm max-w-[120px] leading-tight">
                        {step.title.split(' ')[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Visual Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-[400px] object-cover transform transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Step Indicator */}
              <div className="absolute top-6 left-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${currentStep.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {activeStep + 1}
                </div>
              </div>

              {/* Step Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-white">
                  <IconComponent className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{currentStep.title}</h3>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevStep}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>

              <button
                onClick={nextStep}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Progress */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Step {activeStep + 1} of {processSteps.length}</span>
                <span className="font-semibold">{currentStep.stats}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-1000 ease-out"
                  style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-2xl leading-relaxed text-gray-700 font-light">
                {currentStep.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentStep.features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentStep.color}`}></div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Dots */}
            <div className="flex justify-center gap-3 pt-8">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    activeStep === index 
                      ? `bg-gradient-to-r ${currentStep.color} scale-125` 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailMarketingProcess;