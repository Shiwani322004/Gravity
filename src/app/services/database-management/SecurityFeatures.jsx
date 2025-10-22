'use client'
import React from 'react';
import { Lock, Shield, Eye, Database } from 'lucide-react';

const SecurityFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Military-Grade
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Security Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data is protected with enterprise-grade security measures and compliance certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Lock,
              title: "End-to-End Encryption",
              description: "256-bit AES encryption for data at rest and in transit"
            },
            {
              icon: Shield,
              title: "SOC 2 Compliance",
              description: "Enterprise-grade security compliance and certifications"
            },
            {
              icon: Eye,
              title: "Real-time Monitoring",
              description: "24/7 security monitoring and threat detection"
            },
            {
              icon: Database,
              title: "Automated Backups",
              description: "Point-in-time recovery and automated backup management"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;