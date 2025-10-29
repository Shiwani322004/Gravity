'use client';

import { 
  CheckCircle, 
  X, 
  Sparkles, 
  Target,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const CRMAnalysisSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cardDetails = [
    {
      id: 1,
      name: "Zoho CRM",
      description: "Comprehensive CRM solution for businesses of all sizes with extensive customization options",
      logo: "/images/zoho.png",
      pros: [
        "Extensive third-party integrations",
        "Affordable pricing plans",
        "Powerful automation capabilities",
        "Mobile app with full functionality",
        "Excellent customer support"
      ],
      cons: [
        "Steep learning curve for beginners",
        "Customization can be complex",
        "Advanced features require higher tiers",
        "Interface can feel cluttered",
        "Limited social media integration"
      ],
      keyFeatures: [
        "AI-powered sales predictions",
        "Multi-channel communication",
        "Customizable modules",
        "Workflow automation",
        "Advanced analytics"
      ],
      bestFor: "Growing businesses and enterprises needing extensive customization",
      pricing: "Starts at $14/user/month, with enterprise plans up to $52/user/month"
    },
    {
      id: 2,
      name: "Creatio",
      description: "No-code platform for marketing, sales and service automation with BPM capabilities",
      logo: "/images/creatio.png",
      pros: [
        "Powerful no-code automation",
        "Excellent BPM capabilities",
        "Strong process management",
        "Good customization options",
        "Enterprise-grade security"
      ],
      cons: [
        "Higher pricing than competitors",
        "Limited third-party integrations",
        "Complex setup process",
        "Steep learning curve",
        "Mobile app could be improved"
      ],
      keyFeatures: [
        "No-code process automation",
        "BPM and case management",
        "Marketing automation",
        "Service management",
        "AI-powered insights"
      ],
      bestFor: "Large enterprises needing robust process automation and BPM",
      pricing: "Starts at $25/user/month, with custom enterprise pricing available"
    },
    {
      id: 3,
      name: "HubSpot CRM",
      description: "User-friendly CRM with powerful marketing automation and sales tools",
      logo: "/images/hubspot.png",
      pros: [
        "Extremely user-friendly interface",
        "Free plan available",
        "Excellent marketing automation",
        "Seamless HubSpot ecosystem integration",
        "Great customer support"
      ],
      cons: [
        "Can get expensive with add-ons",
        "Limited customization options",
        "Advanced features require higher tiers",
        "Reporting could be more robust",
        "Limited workflow automation in lower tiers"
      ],
      keyFeatures: [
        "Free CRM forever plan",
        "Marketing automation",
        "Email tracking and scheduling",
        "Meeting scheduling",
        "Live chat and bots"
      ],
      bestFor: "Small to medium businesses and marketing teams",
      pricing: "Free plan available, paid plans start at $45/month for 2 users"
    },
    {
      id: 4,
      name: "HoneyBook",
      description: "All-in-one client management platform for creative businesses and freelancers",
      logo: "/images/honeybook.png",
      pros: [
        "Beautiful, intuitive interface",
        "Excellent for creative businesses",
        "Integrated payment processing",
        "Good client portal",
        "Streamlined proposal process"
      ],
      cons: [
        "Limited to specific industries",
        "Higher price point",
        "Limited third-party integrations",
        "Not suitable for large sales teams",
        "Basic reporting features"
      ],
      keyFeatures: [
        "Client booking and scheduling",
        "Proposal and contract management",
        "Invoice and payment processing",
        "Project management tools",
        "Client communication portal"
      ],
      bestFor: "Creative professionals, freelancers, and small service businesses",
      pricing: "Starts at $29/user/month with unlimited clients and projects"
    },
    {
      id: 5,
      name: "Pipedrive",
      description: "Sales-focused CRM with visual pipeline management and automation features",
      logo: "/images/pipedrive.png",
      pros: [
        "Intuitive visual sales pipeline",
        "Excellent sales automation",
        "Affordable pricing",
        "Good mobile experience",
        "Strong focus on sales process"
      ],
      cons: [
        "Limited marketing features",
        "Basic customer service tools",
        "Limited customization options",
        "Integration ecosystem could be better",
        "Reporting features are basic"
      ],
      keyFeatures: [
        "Visual sales pipeline",
        "Sales automation",
        "Email integration",
        "Activity-based selling",
        "Revenue forecasting"
      ],
      bestFor: "Sales teams and businesses focused on pipeline management",
      pricing: "Starts at $14.90/user/month, with advanced plans up to $99/user/month"
    }
  ];

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % cardDetails.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + cardDetails.length) % cardDetails.length);
  };

  const goToCard = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Detailed{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              CRM Analysis
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-depth comparison of each CRM platform with pros, cons, and key features
          </p>
        </div>

        {/* CRM Selection Tabs - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {cardDetails.map((crm, index) => (
            <button
              key={crm.id}
              onClick={() => goToCard(index)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                currentCardIndex === index
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {crm.name}
            </button>
          ))}
        </div>

        {/* Current CRM Analysis */}
        <div className="space-y-12">
          {/* CRM Header - Mobile Responsive */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3 sm:p-4">
                <Image 
                  src={cardDetails[currentCardIndex].logo}
                  alt={`${cardDetails[currentCardIndex].name} logo`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {cardDetails[currentCardIndex].name}
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  {cardDetails[currentCardIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Pros and Cons Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Pros Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Pros & Advantages</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {cardDetails[currentCardIndex].pros.map((pro, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-base sm:text-lg">{pro}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Cons & Limitations</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {cardDetails[currentCardIndex].cons.map((con, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
                    <AlertCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-base sm:text-lg">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features - Mobile Responsive */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Sparkles className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Key Features</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {cardDetails[currentCardIndex].keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information - Mobile Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Best For</h3>
              </div>
              
              <div className="p-4 sm:p-6 bg-purple-50 rounded-xl border border-purple-200">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {cardDetails[currentCardIndex].bestFor}
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Target className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Pricing</h3>
              </div>
              
              <div className="p-4 sm:p-6 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {cardDetails[currentCardIndex].pricing}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-gray-200">
            <button
              onClick={prevCard}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-8 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-x-1 text-base sm:text-lg font-semibold"
            >
              <span>← Previous</span>
            </button>
            
            <div className="flex items-center space-x-4 order-first sm:order-none">
              <span className="text-gray-600 text-base sm:text-lg">
                {currentCardIndex + 1} of {cardDetails.length}
              </span>
            </div>
            
            <button
              onClick={nextCard}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-8 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-1 text-base sm:text-lg font-semibold"
            >
              <span>Next →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAnalysisSection;