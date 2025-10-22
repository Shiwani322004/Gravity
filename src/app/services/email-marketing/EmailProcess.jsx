'use client'
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, CheckCircle, Clock, Users,
  MessageCircle, Rocket, BarChart3
} from 'lucide-react';

const EmailMarketingProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const processSteps = [
    {
      title: "Strategy & Discovery",
      description: "Comprehensive analysis of your business objectives and target audience to build a data-driven strategy.",
      features: ["Audience Analysis", "Goal Alignment", "KPI Framework", "Competitive Research"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      stats: "2-3 days"
    },
    {
      title: "Audience Segmentation",
      description: "Advanced segmentation strategies to deliver personalized content for higher engagement rates.",
      features: ["Behavioral Segmentation", "Demographic Profiling", "Engagement Scoring", "Personalization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      stats: "1-2 weeks"
    },
    {
      title: "Campaign Creation",
      description: "Professional design and development of high-converting email campaigns with optimized content.",
      features: ["Template Design", "Content Strategy", "A/B Testing", "Mobile Optimization"],
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      stats: "2-3 weeks"
    },
    {
      title: "Automation Setup",
      description: "Intelligent automation workflows that engage customers with timely, relevant messaging.",
      features: ["Welcome Series", "Lead Nurturing", "Re-engagement", "Behavioral Triggers"],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      stats: "1-2 weeks"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive tracking and analysis with actionable insights to optimize campaign performance.",
      features: ["Real-time Dashboard", "ROI Tracking", "Conversion Analysis", "Performance Reports"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      stats: "Ongoing"
    },
    {
      title: "Optimization & Scaling",
      description: "Continuous optimization and strategic scaling of successful campaigns for sustainable growth.",
      features: ["Performance Optimization", "Scale Strategy", "Testing Framework", "Growth Planning"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      stats: "Continuous"
    }
  ];

  const currentStep = processSteps[activeStep];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-50 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Our Email Marketing
              <span className="block text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transforming your email marketing into a predictable revenue engine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Process Steps */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 cursor-pointer ${
                  activeStep === index 
                    ? 'border-blue-200 shadow-xl' 
                    : 'hover:border-gray-200'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0 w-24 h-24">
                    <div className="relative rounded-xl overflow-hidden shadow-md">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-xl font-bold ${
                        activeStep === index ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      {activeStep === index && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{step.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Step Details */}
          <div className="sticky top-8">
            <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentStep.title}
                </h3>
                <p className="text-gray-600">
                  Step {activeStep + 1} of {processSteps.length}
                </p>
              </div>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span className="font-semibold text-blue-600">
                    {Math.round(((activeStep + 1) / processSteps.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Focus Areas</h4>
                <div className="space-y-3">
                  {currentStep.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

             

              {/* CTA */}
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Start This Phase
                </button>
                
                <button className="w-full border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
    
  );
};

export default EmailMarketingProcess;