'use client'
import React, { useState } from 'react';

export default function PhoneSystemAction() {
  const [activeFeature, setActiveFeature] = useState(0);

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

  return (
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
  );
}