'use client';

import { User, PieChart, Zap, Bot, CheckCircle } from 'lucide-react';

const CRMFeaturesSection = () => {
  const features = [
    {
      icon: <User className="text-blue-600" size={32} />,
      title: "Customer Management",
      description: "Centralize all customer data with intelligent segmentation and relationship tracking"
    },
    {
      icon: <PieChart className="text-cyan-600" size={32} />,
      title: "Sales Analytics",
      description: "Real-time sales performance metrics with predictive forecasting and KPI tracking"
    },
    {
      icon: <Zap className="text-blue-500" size={32} />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and create custom workflows to boost team productivity"
    },
    {
      icon: <Bot className="text-cyan-500" size={32} />,
      title: "AI Insights",
      description: "AI-powered recommendations and insights to optimize your sales strategies"
    }
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Powerful Features for{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Modern Teams
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to streamline your sales process and drive revenue growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 border border-gray-200/60 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer hover:border-blue-300 relative overflow-hidden"
          >
            {/* Blue overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {feature.description}
              </p>
              <div className="mt-4 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CRMFeaturesSection;
