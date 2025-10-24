'use client';

import { 
  CheckCircle, 
  XCircle, 
  Star, 
  ArrowRight,
  Zap,
  Users,
  Video,
  MessageCircle,
  Shield,
  Phone,
  Clock,
  DollarSign,
  Headphones,
  Settings
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function PhoneSystemComparison() {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const comparisonData = [
    {
      id: 0,
      name: "Ooma Office",
      vendor: "Ooma",
      description: "Perfect for small to medium businesses looking for easy setup and no long-term contracts",
      icon: <Zap className="text-yellow-500" size={24} />,
      rating: 4.5,
      price: "$19.95/user/month",
      features: [
        "Virtual receptionist with custom greetings",
        "50+ standard business features included",
        "Mobile app for iOS and Android",
        "HD voice quality",
        "No contract required"
      ],
      pros: [
        "Easy setup and user-friendly interface",
        "No long-term contracts",
        "Excellent call quality",
        "Affordable pricing"
      ],
      cons: [
        "Limited advanced features",
        "Basic analytics only",
        "International rates higher than competitors"
      ],
      bestFor: ["Small businesses", "Startups", "Remote teams"],
      accentColor: "from-yellow-400 to-orange-500"
    },
    {
      id: 1,
      name: "RingEX",
      vendor: "RingCentral",
      description: "Enterprise-grade solution with comprehensive features for large organizations",
      icon: <Users className="text-purple-500" size={24} />,
      rating: 4.7,
      price: "$20/user/month",
      features: [
        "100 participant video meetings",
        "Advanced analytics and reporting",
        "24/7 premium customer support",
        "Unlimited business SMS",
        "Team messaging and collaboration"
      ],
      pros: [
        "Excellent video conferencing capabilities",
        "Robust security features",
        "Seamless third-party integrations",
        "Reliable uptime"
      ],
      cons: [
        "Higher cost for advanced features",
        "Steeper learning curve",
        "Can be overwhelming for small teams"
      ],
      bestFor: ["Enterprises", "Large teams", "Global companies"],
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Zoom Phone",
      vendor: "Zoom",
      description: "Integrated phone system leveraging Zoom's renowned video platform",
      icon: <Video className="text-blue-500" size={24} />,
      rating: 4.6,
      price: "$10/user/month",
      features: [
        "Direct integration with Zoom meetings",
        "International calling to 40+ countries",
        "Team chat and file sharing",
        "Call recording and transcription",
        "24/7 customer support"
      ],
      pros: [
        "Familiar Zoom interface",
        "Excellent video integration",
        "Competitive international rates",
        "Easy to scale"
      ],
      cons: [
        "Limited standalone phone features",
        "Dependent on Zoom ecosystem",
        "Some features require higher tiers"
      ],
      bestFor: ["Zoom users", "Sales teams", "International businesses"],
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Dialpad",
      vendor: "dialpad",
      description: "AI-powered business phone system with advanced features",
      icon: <MessageCircle className="text-green-500" size={24} />,
      rating: 4.4,
      price: "$15/user/month",
      features: [
        "AI-powered live call transcripts",
        "Instant call summaries",
        "HD voice and video calls",
        "Real-time analytics",
        "CRM integrations"
      ],
      pros: [
        "Advanced AI features",
        "Excellent call quality",
        "User-friendly interface",
        "Good value for money"
      ],
      cons: [
        "AI features can be inconsistent",
        "Limited customization options",
        "Mobile app needs improvement"
      ],
      bestFor: ["Tech companies", "Customer support", "AI enthusiasts"],
      accentColor: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "Nextiva",
      vendor: "NEXTIVA",
      description: "Reliable business communication with exceptional uptime",
      icon: <Shield className="text-indigo-500" size={24} />,
      rating: 4.8,
      price: "$18.95/user/month",
      features: [
        "99.999% uptime guarantee",
        "Unlimited voice and video calling",
        "Advanced CRM integrations",
        "Team collaboration tools",
        "Professional onboarding"
      ],
      pros: [
        "Industry-leading reliability",
        "Excellent customer support",
        "Comprehensive feature set",
        "Easy to use"
      ],
      cons: [
        "Higher starting price",
        "Limited international features",
        "Some advanced features cost extra"
      ],
      bestFor: ["Reliability-focused businesses", "Customer service", "Growing companies"],
      accentColor: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 to-blue-50/20 py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Detailed System Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth analysis of each business phone system to help you make the right choice for your organization
            </p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {comparisonData.map((system, index) => (
            <button
              key={system.id}
              onClick={() => setActiveCard(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                activeCard === index 
                  ? `border-blue-500 bg-white shadow-lg shadow-blue-500/20`
                  : 'border-gray-200 bg-white/80 hover:border-blue-300'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                activeCard === index ? 'bg-blue-500/10' : 'bg-gray-100'
              }`}>
                {system.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">{system.name}</h3>
                <p className="text-sm text-gray-500">{system.price}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Main Comparison Content */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {comparisonData.map((system, index) => (
            <div
              key={system.id}
              className={`bg-white rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden transition-all duration-500 ${
                activeCard === index ? 'block' : 'hidden'
              }`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${system.accentColor} p-8 text-white`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                      {system.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{system.name}</h3>
                      <p className="text-white/80 text-lg">{system.vendor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 bg-white/20 px-4 py-2 rounded-2xl backdrop-blur-sm">
                      <Star className="fill-current" size={20} />
                      <span className="font-semibold">{system.rating}</span>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-2xl backdrop-blur-sm">
                      <span className="font-semibold text-lg">{system.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/90 mt-4 text-lg max-w-2xl">
                  {system.description}
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Features */}
                <div className="lg:col-span-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Settings size={20} className="text-blue-500" />
                    Key Features
                  </h4>
                  <div className="space-y-4">
                    {system.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                      >
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pros */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-500" />
                        Advantages
                      </h4>
                      <div className="space-y-3">
                        {system.pros.map((pro, proIndex) => (
                          <div 
                            key={proIndex}
                            className="flex items-start gap-3 p-3 rounded-xl bg-green-50/50 border border-green-100"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <XCircle size={20} className="text-red-500" />
                        Limitations
                      </h4>
                      <div className="space-y-3">
                        {system.cons.map((con, conIndex) => (
                          <div 
                            key={conIndex}
                            className="flex items-start gap-3 p-3 rounded-xl bg-red-50/50 border border-red-100"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Best For Section */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users size={20} className="text-blue-500" />
                      Ideal For
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {system.bestFor.map((type, typeIndex) => (
                        <span 
                          key={typeIndex}
                          className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium border border-blue-200 shadow-sm"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="border-t border-gray-200 p-8 bg-gray-50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Ready to get started with {system.name}?
                    </h4>
                    <p className="text-gray-600">
                      Get personalized pricing and see how {system.name} can transform your business communication.
                    </p>
                  </div>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap">
                    Get Custom Quote
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className={`flex justify-between mt-8 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button
            onClick={() => setActiveCard(prev => prev > 0 ? prev - 1 : comparisonData.length - 1)}
            className="px-6 py-3 bg-white border border-gray-300 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <ArrowRight className="rotate-180" size={18} />
            Previous System
          </button>
          
          <div className="flex items-center gap-2">
            {comparisonData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCard === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveCard(prev => prev < comparisonData.length - 1 ? prev + 1 : 0)}
            className="px-6 py-3 bg-white border border-gray-300 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            Next System
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}