'use client';

import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Check, 
  AlertCircle, 
  Sparkles, 
  Target,
  CheckCircle 
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
    <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Card Carousel */}
        <div className="bg-white rounded-3xl border-2 border-gray-200/60 shadow-2xl overflow-hidden">
          {/* Navigation Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <button
                onClick={prevCard}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="text-center flex-1 mx-8">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Image 
                      src={cardDetails[currentCardIndex].logo}
                      alt={`${cardDetails[currentCardIndex].name} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{cardDetails[currentCardIndex].name}</h3>
                    <p className="text-blue-100">{cardDetails[currentCardIndex].description}</p>
                  </div>
                </div>
                
                {/* Progress Dots */}
                <div className="flex justify-center space-x-2">
                  {cardDetails.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToCard(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentCardIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <button
                onClick={nextCard}
                className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pros Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Check className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Pros & Advantages</h3>
                </div>
                
                <div className="space-y-4">
                  {cardDetails[currentCardIndex].pros.map((pro, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <X className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cons & Limitations</h3>
                </div>
                
                <div className="space-y-4">
                  {cardDetails[currentCardIndex].cons.map((con, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-xl border border-red-200">
                      <AlertCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features & Additional Info */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Features */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Sparkles className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                </div>
                
                <div className="space-y-3">
                  {cardDetails[currentCardIndex].keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Additional Info</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                    <p className="text-gray-700">{cardDetails[currentCardIndex].bestFor}</p>
                  </div>
                  
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
                    <p className="text-gray-700">{cardDetails[currentCardIndex].pricing}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-200">
              <button
                onClick={prevCard}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 transform hover:-translate-x-1"
              >
                <ChevronLeft size={20} />
                <span>Previous</span>
              </button>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {currentCardIndex + 1} of {cardDetails.length}
                </span>
               
              </div>
              
              <button
                onClick={nextCard}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 transform hover:translate-x-1"
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAnalysisSection;