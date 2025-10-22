import React, { useState } from 'react';
import { ArrowRight, Send, BarChart3, Target, ShieldCheck } from 'lucide-react';

const EmailFeatures = ({ onShowForm }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Send,
      title: "AI-Powered Campaigns",
      description: "Intelligent automation that sends the right message at the perfect time",
      color: "from-[#0A2B4F] to-[#007BFF]"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into open rates, clicks, and conversion metrics",
      color: "from-[#0A2B4F] to-[#007BFF]"
    },
    {
      icon: Target,
      title: "Precise Segmentation",
      description: "Target specific audience segments with personalized content",
      color: "from-[#0A2B4F] to-[#007BFF]"
    },
    {
      icon: ShieldCheck,
      title: "Deliverability Assurance",
      description: "Ensure your emails reach the inbox, not spam folders",
      color: "from-[#0A2B4F] to-[#007BFF]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-[#007BFF] to-[#00D4FF] bg-clip-text text-transparent"> Modern Marketers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, send, and optimize email campaigns that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#007BFF] transform group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={onShowForm}
            className="group relative overflow-hidden bg-gradient-to-r from-[#007BFF] to-[#00D4FF] hover:from-[#0056b3] hover:to-[#0099cc] text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <span>Explore All Features</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailFeatures;