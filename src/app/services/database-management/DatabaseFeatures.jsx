'use client'
import React from 'react';
import { Database, Shield, Cpu } from 'lucide-react';

const DatabaseFeatures = () => {
  const features = [
    {
      icon: Database,
      title: "Unified Database Management",
      description: "Manage multiple databases from a single intuitive interface with real-time monitoring and performance analytics.",
      image: "https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security with encryption at rest and in transit, role-based access control, and comprehensive audit logs.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Cpu,
      title: "AI-Powered Optimization",
      description: "Automated performance tuning, query optimization, and intelligent indexing powered by machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Enterprise-Grade Database
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Management Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools and features designed to handle your most critical data workloads with unparalleled performance and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 hover:shadow-3xl hover:shadow-blue-200/50 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatabaseFeatures;