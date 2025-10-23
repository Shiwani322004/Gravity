'use client'
import React from 'react';
import { CheckCircle, Target, Users, BarChart3, Zap } from 'lucide-react';

// Data is moved outside the component to prevent re-creation on every render.
const abmProcess = [
  {
    step: 1,
    icon: Target,
    title: "Account Identification & Prioritization",
    description: "Identify high-value target accounts using intent data, firmographic insights, and predictive scoring to focus on the most promising opportunities.",
    features: ["Intent Data Analysis", "Account Scoring", "Ideal Customer Profile Matching", "Market Segmentation"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: 2,
    icon: Users,
    title: "Buying Committee Mapping",
    description: "Map entire buying committees within target accounts, identifying key decision-makers, influencers, and stakeholders across departments.",
    features: ["Stakeholder Identification", "Org Chart Mapping", "Influence Scoring", "Relationship Tracking"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    color: "from-purple-500 to-pink-500"
  },
  {
    step: 3,
    icon: BarChart3,
    title: "Multi-Channel Engagement Strategy",
    description: "Execute coordinated, personalized outreach across email, social, web, and advertising channels with consistent messaging tailored to each stakeholder.",
    features: ["Personalized Campaigns", "Channel Orchestration", "Message Sequencing", "Engagement Tracking"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    color: "from-green-500 to-emerald-500"
  },
  {
    step: 4,
    icon: Zap,
    title: "Pipeline Acceleration & Measurement",
    description: "Track engagement metrics, measure pipeline impact, and accelerate deal velocity with real-time insights and performance optimization.",
    features: ["Revenue Attribution", "Pipeline Analytics", "ROI Measurement", "Performance Optimization"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    color: "from-orange-500 to-red-500"
  }
];

const ABMProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Proven ABM
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Execution Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive 4-step ABM framework ensures targeted engagement, accelerated pipelines, and measurable revenue growth for enterprise accounts.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-cyan-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {abmProcess.map(({ step, icon: Icon, title, description, features, image, color }, index) => {
              const isEven = index % 2 === 0;
              const flexDirectionClass = isEven ? 'lg:flex-row' : 'lg:flex-row-reverse';
              const contentPaddingClass = isEven ? 'lg:pr-12' : 'lg:pl-12';

              return (
                <div 
                  key={step}
                  className={`relative flex flex-col items-center gap-8 lg:gap-12 ${flexDirectionClass}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${contentPaddingClass}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-2xl font-black">{step}</span>
                        </div>
                        <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-blue-100">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>

                      <div className="space-y-3">
                        {features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-6 h-6 bg-gradient-to-r ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
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
                          src={image}
                          alt={title}
                          className="w-full h-72 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-400/30 rounded-full animate-pulse delay-1000"></div>
                    </div>
                  </div>

                  {/* Mobile Connecting Dots */}
                  <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg -bottom-6"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABMProcess;