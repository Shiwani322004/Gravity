'use client'
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Route, BarChart3, Zap, CheckCircle } from 'lucide-react';

export default function GPSFeatures() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Vehicle Tracking",
      description: "Track your fleet in real-time with GPS updates every 30-60 seconds. See each vehicle's location, speed, direction, and status – from any device.",
      benefits: [
        "Eliminate guesswork about vehicle locations",
        "Respond quickly to service requests",
        "Provide accurate ETAs to customers"
      ]
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "AI plans smarter routes—factoring in traffic, delivery times, vehicle capacity, and driver schedules to maximize efficiency.",
      benefits: [
        "Reduce fuel consumption by up to 30%",
        "Complete more jobs per day",
        "Minimize overtime expenses"
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Get a clear view of your fleet's performance with customizable dashboards that track all your key metrics.",
      benefits: [
        "Identify inefficient routes and processes",
        "Compare driver and vehicle performance",
        "Generate client-ready reports"
      ]
    },
    {
      icon: Zap,
      title: "Automated Dispatching",
      description: "Automatically assigns jobs based on driver location, availability, and task details—maximizing productivity.",
      benefits: [
        "Reduce dispatcher workload",
        "Eliminate double-booking",
        "Respond faster to urgent service requests"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative"
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #007bff 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#0a2540]">
            Comprehensive Fleet Management Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to streamline operations, reduce costs, and improve fleet efficiency
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl hover:border-[#007bff] transition-all duration-300 group h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#007bff]/10 rounded-2xl group-hover:bg-gradient-to-r group-hover:from-[#007bff] group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                  <feature.icon className="text-[#007bff] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a2540] leading-tight">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{feature.description}</p>
              
              <div className="space-y-3 mt-auto">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}