'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Search, Target, MessageSquare, BarChart3, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: "Strategic Discovery & Research",
      subtitle: "Deep Market Analysis",
      description: "We conduct comprehensive market research and competitor analysis to understand your industry landscape, identify key opportunities, and develop a customized lead generation strategy tailored to your business goals.",
      details: [
        "In-depth industry analysis and market mapping",
        "Competitor research and positioning analysis",
        "Target audience persona development",
        "Custom strategy development and planning"
      ],
      timeline: "Week 1",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Target,
      title: "Precision Targeting & List Building",
      subtitle: "AI-Powered Prospect Identification",
      description: "Using advanced AI algorithms and proprietary databases, we identify and build highly targeted prospect lists of decision-makers who match your ideal customer profile with 92% accuracy.",
      details: [
        "AI-powered prospect identification and scoring",
        "Multi-source data verification and enrichment",
        "Custom audience segmentation and filtering",
        "Real-time database updates and maintenance"
      ],
      timeline: "Week 2",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 3,
      icon: MessageSquare,
      title: "Multi-Channel Outreach Campaigns",
      subtitle: "Personalized Engagement at Scale",
      description: "Execute sophisticated, personalized outreach campaigns across multiple channels including email, LinkedIn, phone, and social media with intelligent sequencing and A/B testing optimization.",
      details: [
        "Personalized email and LinkedIn campaigns",
        "Multi-touch outreach sequence optimization",
        "A/B testing for message effectiveness",
        "Cross-channel campaign coordination"
      ],
      timeline: "Week 3-4",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: Users,
      title: "Lead Qualification & Nurturing",
      subtitle: "Converting Interest to Intent", 
      description: "Our intelligent lead qualification system scores and nurtures prospects based on engagement and buying signals, ensuring only sales-ready leads reach your sales team for maximum conversion efficiency.",
      details: [
        "Dynamic lead scoring and qualification",
        "Behavioral tracking and intent analysis",
        "Automated nurturing workflow execution",
        "Sales-ready lead handoff process"
      ],
      timeline: "Ongoing",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Performance Analytics & Optimization",
      subtitle: "Data-Driven Results",
      description: "Continuous monitoring and optimization of campaign performance with detailed analytics, real-time reporting, and strategic adjustments to maximize ROI and lead quality.",
      details: [
        "Real-time campaign performance monitoring",
        "Detailed ROI and conversion analytics",
        "Continuous optimization and A/B testing",
        "Strategic recommendations and adjustments"
      ],
      timeline: "Continuous",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#0A1628] to-[#1e3a8a] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-semibold text-blue-200 mb-6">
            <Zap className="w-4 h-4" />
            Our Proven Process
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
            5-Step Lead Generation
            <span className="block bg-gradient-to-r from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent">
              Success Framework
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our systematic approach has generated over 100,000 qualified leads for businesses across industries. 
            Here's how we transform your sales pipeline in just 30 days.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.id}
              className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-blue-200">
                      {step.timeline}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-2">{step.title}</h3>
                    <p className="text-xl text-[#00D4FF] font-semibold mb-4">{step.subtitle}</p>
                    <p className="text-lg text-blue-100 leading-relaxed mb-6">{step.description}</p>
                  </div>

                  {/* Details List */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0084FF] to-[#00D4FF] hover:from-[#00D4FF] hover:to-[#0084FF] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mt-6">
                    Learn More About Step {step.id}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Visual/Stats */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                    <div className="text-center space-y-6">
                      <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                        activeStep === index ? 'scale-110 rotate-12' : ''
                      }`}>
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-2xl font-black text-white">Step {step.id}</h4>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                              activeStep >= index ? 'w-full' : 'w-0'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Navigation */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex gap-3">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-[#00D4FF] w-12' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
