'use client';

import { 
  CheckCircle, 
  X, 
  Sparkles, 
  BarChart3, 
  Users, 
  Shield,
  Star,
  Phone,
  Video,
  Bot,
  Cloud,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const CRMAnalysisSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const providerCards = [
    {
      provider: "Zoho CRM",
      price: "$14",
      period: "/user/month",
      rating: 4.4,
      reviews: "2.5K reviews",
      features: [
        "AI-powered sales predictions",
        "Multi-channel communication",
        "Customizable modules",
        "Workflow automation",
        "Advanced analytics"
      ],
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
      logo: "/images/zoho.png",
      tagline: "Zoho CRM offers comprehensive customer relationship management with extensive customization options and AI-powered insights for businesses of all sizes. Comprehensive CRM solution for businesses of all sizes with extensive customization options.",
      color: "from-blue-600 to-purple-600",
      badgeColor: "bg-gradient-to-r from-blue-500 to-purple-500",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      provider: "Creatio",
      price: "$25",
      period: "/user/month",
      rating: 4.2,
      reviews: "1.8K reviews",
      features: [
        "No-code process automation",
        "BPM and case management",
        "Marketing automation",
        "Service management",
        "AI-powered insights"
      ],
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
      logo: "/images/creatio.png",
      tagline: "Creatio provides powerful no-code automation with robust BPM capabilities for enterprise-level marketing, sales, and service management. No-code platform for marketing, sales and service automation with BPM capabilities.",
      color: "from-green-600 to-teal-600",
      badgeColor: "bg-gradient-to-r from-green-500 to-teal-500",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      provider: "HubSpot CRM",
      price: "$45",
      period: "/2 users/month",
      rating: 4.6,
      reviews: "3.2K reviews",
      features: [
        "Free CRM forever plan",
        "Marketing automation",
        "Email tracking and scheduling",
        "Meeting scheduling",
        "Live chat and bots"
      ],
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
      logo: "/images/hubspot.png",
      tagline: "HubSpot CRM delivers user-friendly customer relationship management with powerful marketing automation and seamless ecosystem integration. User-friendly CRM with powerful marketing automation and sales tools.",
      color: "from-orange-500 to-red-500",
      badgeColor: "bg-gradient-to-r from-orange-400 to-red-400",
      icon: <Users className="w-6 h-6" />
    },
    {
      provider: "HoneyBook",
      price: "$29",
      period: "/user/month",
      rating: 4.3,
      reviews: "1.1K reviews",
      features: [
        "Client booking and scheduling",
        "Proposal and contract management",
        "Invoice and payment processing",
        "Project management tools",
        "Client communication portal"
      ],
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
      logo: "/images/honeybook.png",
      tagline: "HoneyBook offers all-in-one client management with beautiful interfaces and integrated tools tailored for creative professionals and freelancers. All-in-one client management platform for creative businesses and freelancers.",
      color: "from-pink-500 to-rose-500",
      badgeColor: "bg-gradient-to-r from-pink-400 to-rose-400",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      provider: "Pipedrive",
      price: "$14.90",
      period: "/user/month",
      rating: 4.4,
      reviews: "2.2K reviews",
      features: [
        "Visual sales pipeline",
        "Sales automation",
        "Email integration",
        "Activity-based selling",
        "Revenue forecasting"
      ],
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
      logo: "/images/pipedrive.png",
      tagline: "Pipedrive provides sales-focused CRM with intuitive visual pipeline management and powerful automation features for sales teams. Sales-focused CRM with visual pipeline management and automation features.",
      color: "from-indigo-600 to-blue-600",
      badgeColor: "bg-gradient-to-r from-indigo-500 to-blue-500",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Top <span className="text-[#007bff]">CRM</span> Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed comparison of features, pros, and cons to help you choose the right customer relationship platform for your business
          </p>
        </div>

        {/* All Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {providerCards.map((card, index) => (
            <div
              key={card.provider}
              onClick={() => setCurrentCardIndex(index)}
              className={`cursor-pointer bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
                index === currentCardIndex 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-transparent hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100 mb-3 sm:mb-4">
                  {card.logo ? (
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                      <Image 
                        src={card.logo} 
                        alt={`${card.provider} logo`}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      {/* Fallback text */}
                      <div className="hidden text-lg font-bold text-blue-600">
                        {card.provider.charAt(0)}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">
                      {card.provider.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {card.provider}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Tagline Section */}
        <div className="mb-10">
          <div className={`bg-gradient-to-r ${providerCards[currentCardIndex].color} p-8 rounded-2xl shadow-lg relative overflow-hidden transition-all duration-500 hover:shadow-xl`}>
            {/* Rating and Price Badge - Top Right Corner */}
            <div className="absolute top-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-center">
                  {/* Star Rating */}
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {renderStars(providerCards[currentCardIndex].rating)}
                    <span className="text-sm font-semibold text-gray-700 ml-1">
                      {providerCards[currentCardIndex].rating}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    {providerCards[currentCardIndex].reviews}
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-gray-900">
                      {providerCards[currentCardIndex].price}
                    </span>
                    <span className="text-sm text-gray-600">
                      {providerCards[currentCardIndex].period}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto pr-32">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm border border-white/30">
                  {providerCards[currentCardIndex].icon}
                </div>
                {providerCards[currentCardIndex].provider} Customer Relationship
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                {providerCards[currentCardIndex].tagline}
              </p>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Pros and Cons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Pros Column */}
          <div>
            <h4 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-3">
              <CheckCircle size={28} />
              Advantages
            </h4>
            <ul className="space-y-4">
              {providerCards[currentCardIndex].pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-700 bg-green-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-lg">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Column */}
          <div>
            <h4 className="text-2xl font-semibold text-red-700 mb-6 flex items-center gap-3">
              <X size={28} />
              Limitations
            </h4>
            <ul className="space-y-4">
              {providerCards[currentCardIndex].cons.map((con, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-700 bg-red-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={14} className="text-white" />
                  </div>
                  <span className="text-lg">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
            <Sparkles size={28} />
            Key Features
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {providerCards[currentCardIndex].features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center gap-3">
              <Users size={28} />
              Best For
            </h4>
            <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                {providerCards[currentCardIndex].provider === "Zoho CRM" && "Growing businesses and enterprises needing extensive customization"}
                {providerCards[currentCardIndex].provider === "Creatio" && "Large enterprises needing robust process automation and BPM"}
                {providerCards[currentCardIndex].provider === "HubSpot CRM" && "Small to medium businesses and marketing teams"}
                {providerCards[currentCardIndex].provider === "HoneyBook" && "Creative professionals, freelancers, and small service businesses"}
                {providerCards[currentCardIndex].provider === "Pipedrive" && "Sales teams and businesses focused on pipeline management"}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center gap-3">
              <BarChart3 size={28} />
              Pricing Details
            </h4>
            <div className="p-6 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                {providerCards[currentCardIndex].provider === "Zoho CRM" && "Starts at $14/user/month, with enterprise plans up to $52/user/month"}
                {providerCards[currentCardIndex].provider === "Creatio" && "Starts at $25/user/month, with custom enterprise pricing available"}
                {providerCards[currentCardIndex].provider === "HubSpot CRM" && "Free plan available, paid plans start at $45/month for 2 users"}
                {providerCards[currentCardIndex].provider === "HoneyBook" && "Starts at $29/user/month with unlimited clients and projects"}
                {providerCards[currentCardIndex].provider === "Pipedrive" && "Starts at $14.90/user/month, with advanced plans up to $99/user/month"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAnalysisSection;