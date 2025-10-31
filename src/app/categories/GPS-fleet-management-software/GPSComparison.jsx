'use client';

import { CheckCircle, X, Zap, ArrowRight, Star, Navigation, MapPin, Car, Shield, Gauge } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function GPSFleetComparison({ onOpenQuestionnaire }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const providerCards = [
    {
      provider: "Azuga",
      price: "$25",
      period: "/month/vehicle",
      rating: 4.4,
      reviews: "1.8K reviews",
      features: [
        "30-second refresh rate (15 sec option)",
        "Best for Midsize and Larger Fleets",
        "24/7 support (email, phone, ticket)",
        "Fuel management and reporting",
        "Driver safety scoring"
      ],
      pros: [
        "Excellent for midsize to large fleets",
        "Flexible refresh rate options",
        "Comprehensive support channels",
        "Advanced fuel management",
        "Reliable performance tracking"
      ],
      cons: [
        "Higher starting price point",
        "May be complex for small fleets",
        "Limited basic plan features",
        "Setup requires technical knowledge"
      ],
      logo: "/images/azuga.png",
      tagline: "Azuga provides comprehensive GPS fleet management solutions with advanced tracking and fuel management capabilities. Best suited for midsize to larger fleets requiring detailed analytics and robust support systems.",
      color: "from-blue-600 to-indigo-600",
      badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      provider: "Motive",
      price: "Custom",
      period: "pricing",
      rating: 4.6,
      reviews: "2.3K reviews",
      features: [
        "1-3 second refresh rate",
        "Best for Accountability and Automation",
        "24/7 email/phone support",
        "AI-powered safety features",
        "Electronic logging device (ELD)"
      ],
      pros: [
        "Ultra-fast data refresh rates",
        "Excellent automation capabilities",
        "Strong focus on driver accountability",
        "AI-driven safety insights",
        "Comprehensive ELD compliance"
      ],
      cons: [
        "Custom pricing can be expensive",
        "Requires commitment for best pricing",
        "Advanced features need training",
        "Mobile app could be improved"
      ],
      logo: "/images/motive.png",
      tagline: "Motive delivers high-performance fleet management with ultra-fast tracking and AI-powered automation. Ideal for businesses prioritizing driver accountability, safety compliance, and operational automation.",
      color: "from-green-600 to-emerald-600",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      provider: "Telematics",
      price: "Custom",
      period: "pricing",
      rating: 4.3,
      reviews: "1.5K reviews",
      features: [
        "1-second data refresh rate",
        "Best for Maintenance and Safety",
        "Video capacity: 1000",
        "Predictive maintenance alerts",
        "Advanced safety monitoring"
      ],
      pros: [
        "Industry-leading refresh rate",
        "Excellent maintenance features",
        "High video storage capacity",
        "Predictive analytics",
        "Strong safety focus"
      ],
      cons: [
        "Premium pricing structure",
        "Complex feature set",
        "Steeper learning curve",
        "Limited entry-level options"
      ],
      logo: "/images/tele.png",
      tagline: "Telematics offers premium fleet management with real-time tracking and advanced safety features. Perfect for companies focused on vehicle maintenance, driver safety, and comprehensive operational oversight.",
      color: "from-purple-600 to-pink-600",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: <Car className="w-6 h-6" />
    },
    {
      provider: "Verizon Connect",
      price: "$20",
      period: "/vehicle/month",
      rating: 4.2,
      reviews: "2.1K reviews",
      features: [
        "30-second data refresh rate",
        "Best for Midsize Fleets Services",
        "24/7 customer support",
        "Route optimization",
        "Fuel and maintenance tracking"
      ],
      pros: [
        "Competitive pricing",
        "Reliable Verizon network",
        "Good for midsize operations",
        "Comprehensive route planning",
        "Strong customer support"
      ],
      cons: [
        "Basic refresh rate",
        "Limited advanced features",
        "Mobile experience could be better",
        "Integration limitations"
      ],
      logo: "/images/verizon.png",
      tagline: "Verizon Connect provides reliable fleet management solutions backed by robust network infrastructure. Excellent choice for midsize fleets seeking dependable tracking, route optimization, and comprehensive support.",
      color: "from-red-600 to-orange-600",
      badgeColor: "bg-gradient-to-r from-red-500 to-orange-500",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      provider: "Samsara",
      price: "$44",
      period: "/vehicle/month",
      rating: 4.7,
      reviews: "2.8K reviews",
      features: [
        "1-second data refresh rate",
        "Best for Sustainability and Safety",
        "24/7 customer support",
        "AI safety cameras",
        "Environmental compliance"
      ],
      pros: [
        "Industry-leading technology",
        "Excellent sustainability features",
        "Advanced AI safety systems",
        "Comprehensive compliance tools",
        "Superior data accuracy"
      ],
      cons: [
        "Premium pricing",
        "Complex implementation",
        "Requires training for full utilization",
        "May be overkill for small fleets"
      ],
      logo: "/images/samsara.png",
      tagline: "Samsara delivers enterprise-grade fleet management with AI-powered safety and sustainability features. The top choice for large fleets prioritizing environmental compliance, advanced safety, and cutting-edge technology.",
      color: "from-teal-600 to-cyan-600",
      badgeColor: "bg-gradient-to-r from-teal-500 to-cyan-500",
      icon: <Shield className="w-6 h-6" />
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
            Compare Top <span className="text-[#007bff]">GPS Fleet Management</span> Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed comparison of features, pros, and cons to help you choose the right fleet management platform for your business
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
                {providerCards[currentCardIndex].provider} Fleet Management
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
            <Zap size={28} />
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

        {/* Get Quote CTA */}
        <div className="text-center mt-8">
          <button
            onClick={onOpenQuestionnaire}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
          >
            Get Personalized Quotes
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}