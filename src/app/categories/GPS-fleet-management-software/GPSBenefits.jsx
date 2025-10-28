'use client'
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Shield, Clock, Route, Car, Users } from 'lucide-react';

export default function GPSBenefits() {
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Operational Efficiency",
      description: "Optimize routes, reduce idle time, and improve dispatching to complete more jobs with fewer resources.",
      stat: "Up to 25% reduction in fuel costs"
    },
    {
      icon: Shield,
      title: "Enhanced Vehicle Security",
      description: "Prevent unauthorized use and quickly recover stolen vehicles with real-time location tracking.",
      stat: "90% higher recovery rate for stolen vehicles"
    },
    {
      icon: Clock,
      title: "Improved Time Management",
      description: "Accurate arrival time predictions and proof of service timestamps improve customer satisfaction.",
      stat: "30% reduction in customer complaints"
    },
    {
      icon: Route,
      title: "Better Route Planning",
      description: "AI-powered route optimization that accounts for traffic, weather, and vehicle constraints.",
      stat: "15-20% more deliveries per day"
    },
    {
      icon: Car,
      title: "Reduced Risk & Liability",
      description: "Monitor driver behavior to discourage speeding and harsh driving, leading to fewer accidents.",
      stat: "Up to 40% reduction in accident rates"
    },
    {
      icon: Users,
      title: "Enhanced Driver Management",
      description: "Identify training opportunities and recognize top performers through objective performance data.",
      stat: "20% improvement in driver retention"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#0a2540]">
            Transform Your Fleet Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how GPS fleet management systems deliver measurable results and ROI for businesses of all sizes
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl hover:border-[#007bff] transition-all duration-300 group h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#007bff]/10 rounded-2xl group-hover:bg-gradient-to-r group-hover:from-[#007bff] group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                  <benefit.icon className="text-[#007bff] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] leading-tight">{benefit.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed flex-1">{benefit.description}</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
                <p className="text-sm font-bold text-[#007bff] text-center">{benefit.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}