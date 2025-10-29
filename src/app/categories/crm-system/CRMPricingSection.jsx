'use client';

import { User, TrendingUp, Crown, Sparkles, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const CRMPricingSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const plans = [
    {
      name: "Starter",
      price: "$14",
      period: "per user/month",
      description: "Perfect for small teams getting started",
      features: ["Up to 5 users", "Basic CRM features", "Email support", "1GB storage"],
      buttonText: "Start Free Trial",
      popular: false,
      icon: <User className="text-white" size={24} />
    },
    {
      name: "Professional",
      price: "$29",
      period: "per user/month",
      description: "Best for growing businesses",
      features: ["Up to 20 users", "Advanced automation", "Phone & email support", "10GB storage", "Custom workflows"],
      buttonText: "Start Free Trial",
      popular: true,
      icon: <TrendingUp className="text-white" size={24} />
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per user/month",
      description: "For large organizations",
      features: ["Unlimited users", "AI-powered insights", "24/7 priority support", "100GB storage", "Advanced analytics", "Custom integrations"],
      buttonText: "Contact Sales",
      popular: false,
      icon: <Crown className="text-white" size={24} />
    },
    {
      name: "Ultimate",
      price: "$79",
      period: "per user/month",
      description: "Complete business solution",
      features: ["Unlimited everything", "Dedicated account manager", "On-premise deployment", "Advanced security", "Custom AI models", "Training included"],
      buttonText: "Contact Sales",
      popular: false,
      icon: <Sparkles className="text-white" size={24} />
    }
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Transparent{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Pricing
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Compare plans and features to find the perfect fit for your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl border-2 p-8 shadow-lg transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full ${
              plan.popular 
                ? 'border-blue-500 shadow-2xl shadow-blue-500/20 ring-2 ring-blue-500/20' 
                : 'border-gray-200/60 hover:shadow-xl hover:border-blue-300/60'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r flex items-center justify-center shadow-lg ${
                  plan.popular 
                    ? 'from-blue-600 to-cyan-600 shadow-blue-500/30' 
                    : 'from-blue-500 to-cyan-500 shadow-blue-400/20'
                }`}>
                  {plan.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-600">{plan.description}</p>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Fixed button container with consistent height */}
            <div className="mt-auto pt-4">
              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-2xl hover:shadow-blue-500/40'
                  : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 border border-gray-200 hover:border-blue-300 hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section - Navigation to Business Intelligence */}
      <div className="mt-12 md:mt-16 relative">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Ready to Unlock Data-Driven Insights?
              </h3>
              <p className="text-base md:text-lg text-purple-50 max-w-2xl">
                Transform raw data into actionable intelligence with our advanced BI platform. Get real-time analytics, predictive insights, and interactive dashboards for smarter decision-making.
              </p>
            </div>

            <a
              href="/categories/business-intelligence"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group bg-white from-blue-600 to-cyan-600 px-6 md:px-8 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 whitespace-nowrap no-underline"
            >
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
              <span>Explore BI Analytics</span>
              <ArrowRight 
                className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMPricingSection;