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
  Settings
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function PhoneSystemComparison() {
  const [activeSystem, setActiveSystem] = useState(0);
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
      description: "A cloud-based VoIP solution designed for small to medium-sized businesses, offering enterprise-level features without complex infrastructure requirements or binding contracts. Includes built-in scalability and seamless integration capabilities.",
      icon: <Zap className="text-yellow-500" size={24} />,
      rating: 4.5,
      price: "$19.95/user/month",
      features: [
        "Multi-level automated attendant with custom call routing and business hour scheduling",
        "Ring groups, call forwarding, and extension dialing across 50+ enterprise features",
        "Cross-platform mobile application with full desktop feature parity (iOS/Android)",
        "HD voice technology with QoS optimization for crystal-clear audio transmission",
        "Month-to-month billing with no activation fees or long-term contract obligations"
      ],
      pros: [
        "Plug-and-play deployment with minimal IT intervention - average setup time under 15 minutes per user",
        "Flexible subscription model with transparent pricing and no hidden fees or penalties for cancellation",
        "Superior voice clarity utilizing wideband audio codecs (G.722) and adaptive jitter buffers",
        "Cost-effective pricing structure ideal for businesses with 5-50 employees seeking essential unified communications"
      ],
      cons: [
        "Advanced analytics dashboard limited to basic call metrics without real-time monitoring or predictive insights",
        "Reporting capabilities lack granular data export options and customizable KPI dashboards",
        "International calling rates 15-30% higher than competitive enterprise solutions, impacting global operations"
      ],
      bestFor: ["Small businesses (5-50 employees)", "Budget-conscious startups", "Distributed remote teams"],
      accentColor: "from-yellow-400 to-orange-500"
    },
    {
      id: 1,
      name: "RingEX",
      vendor: "RingCentral",
      description: "Enterprise-grade unified communications platform combining voice, video, team messaging, and contact center capabilities. Built for organizations requiring robust security, compliance certifications, and advanced collaboration tools with 99.999% uptime SLA.",
      icon: <Users className="text-purple-500" size={24} />,
      rating: 4.7,
      price: "$20/user/month",
      features: [
        "HD video conferencing supporting up to 200 participants with screen sharing, whiteboarding, and recording",
        "Comprehensive analytics suite with real-time dashboards, historical reporting, and AI-powered call insights",
        "24/7/365 premium support with dedicated technical account management and priority escalation",
        "Unlimited SMS/MMS messaging with automated workflows and team collaboration channels",
        "Advanced team messaging with file sharing, task management, and integrated collaboration workspace"
      ],
      pros: [
        "Industry-leading video conferencing infrastructure with minimal latency and adaptive bitrate streaming",
        "Enterprise-grade security architecture including SOC 2 Type II, HIPAA, and ISO 27001 compliance certifications",
        "Extensive third-party ecosystem with 300+ pre-built integrations including Salesforce, Microsoft 365, and Zendesk",
        "Carrier-grade reliability with geographically distributed data centers ensuring 99.999% uptime guarantee"
      ],
      cons: [
        "Premium tier pricing escalates significantly for advanced features like contact center and analytics add-ons",
        "Initial onboarding complexity requires dedicated training and change management for optimal user adoption",
        "Feature-rich interface can overwhelm smaller teams without dedicated IT resources for administration"
      ],
      bestFor: ["Enterprise organizations (100+ employees)", "Multi-location distributed teams", "Global corporations with international presence"],
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Zoom Phone",
      vendor: "Zoom",
      description: "Cloud phone system natively integrated with Zoom's video collaboration platform, enabling seamless transition between voice calls and video meetings. Optimized for organizations already invested in the Zoom ecosystem with competitive international calling plans.",
      icon: <Video className="text-blue-500" size={24} />,
      rating: 4.6,
      price: "$10/user/month",
      features: [
        "One-click escalation from phone calls to Zoom video meetings with screen sharing and collaboration",
        "Global calling plans with unlimited calling to 40+ countries and competitive per-minute rates",
        "Integrated team chat with persistent channels, direct messaging, and file sharing capabilities",
        "AI-powered call recording with automatic transcription, searchable archives, and sentiment analysis",
        "Round-the-clock technical support with multi-channel assistance (phone, chat, email)"
      ],
      pros: [
        "Unified user experience leveraging familiar Zoom interface reduces training requirements and adoption friction",
        "Exceptional video-to-phone integration enabling fluid communication transitions during client interactions",
        "Highly competitive international calling rates with bundled minute packages for global business operations",
        "Rapid scalability supporting growth from 10 to 10,000 users without infrastructure redesign"
      ],
      cons: [
        "Standalone phone feature set somewhat limited compared to dedicated VoIP providers' specialized offerings",
        "Optimal performance heavily dependent on existing Zoom subscription tier and platform ecosystem commitment",
        "Advanced call center features, analytics, and automation require higher-tier plans with significant cost increases"
      ],
      bestFor: ["Existing Zoom customers seeking unified communications", "Sales and customer success teams requiring video flexibility", "International businesses with extensive cross-border calling needs"],
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Dialpad",
      vendor: "Dialpad",
      description: "AI-first business communications platform leveraging proprietary Voice Intelligence technology for real-time transcription, sentiment analysis, and automated call summaries. Designed for data-driven organizations prioritizing conversation insights and CRM integration.",
      icon: <MessageCircle className="text-green-500" size={24} />,
      rating: 4.4,
      price: "$15/user/month",
      features: [
        "Real-time AI-powered call transcription with speaker identification, keyword detection, and action item extraction",
        "Automated post-call summaries with key moments, sentiment scoring, and suggested follow-up actions",
        "HD voice and video calling infrastructure with adaptive codec selection and bandwidth optimization",
        "Live analytics dashboard with real-time performance metrics, agent scoring, and queue monitoring",
        "Native CRM integrations with Salesforce, HubSpot, and Zoho including automatic activity logging"
      ],
      pros: [
        "Cutting-edge AI capabilities provide actionable conversation intelligence and coaching opportunities for teams",
        "Consistently high voice quality through proprietary audio optimization algorithms and global edge network",
        "Intuitive, modern interface with minimal learning curve accelerates team adoption and productivity",
        "Competitive value proposition balancing advanced features with mid-market pricing accessibility"
      ],
      cons: [
        "AI transcription accuracy varies with audio quality, accents, and technical terminology requiring human review",
        "Limited customization options for call flows, IVR scripting, and user interface personalization",
        "Mobile application functionality gaps compared to desktop experience, particularly for administrative tasks"
      ],
      bestFor: ["Technology-forward organizations", "Customer support and success teams", "Sales organizations requiring conversation analytics"],
      accentColor: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "Nextiva",
      vendor: "Nextiva",
      description: "Comprehensive business communication platform emphasizing reliability and customer service excellence. Combines voice, video, team collaboration, and built-in CRM capabilities with industry-leading 99.999% uptime guarantee and white-glove onboarding support.",
      icon: <Shield className="text-indigo-500" size={24} />,
      rating: 4.8,
      price: "$18.95/user/month",
      features: [
        "Carrier-grade infrastructure with redundant data centers ensuring 99.999% uptime SLA and disaster recovery",
        "Unlimited voice calling and video conferencing with no per-minute charges or hidden usage fees",
        "Built-in CRM with contact management, sales pipeline tracking, and automated communication logging",
        "Enterprise collaboration suite including team chat, file sharing, and project management workflows",
        "Dedicated onboarding specialist and professional training program ensuring successful implementation"
      ],
      pros: [
        "Industry-best reliability metrics with proactive network monitoring and automatic failover protection",
        "Award-winning customer support with consistently high CSAT scores and rapid response times",
        "All-in-one platform consolidating voice, video, CRM, and collaboration reducing tool fragmentation",
        "User-friendly administrative portal simplifying system management for non-technical administrators"
      ],
      cons: [
        "Base pricing higher than entry-level competitors, potentially challenging for budget-constrained organizations",
        "International calling features and coverage less comprehensive than global-focused competitors",
        "Advanced functionality like call center, workforce management, and analytics require costly add-on packages"
      ],
      bestFor: ["Reliability-critical business operations", "Customer service and support organizations", "Growing mid-market companies (50-500 employees)"],
      accentColor: "from-indigo-500 to-purple-500"
    }
  ];

  const currentSystem = comparisonData[activeSystem];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 to-blue-50/20 py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Enterprise Phone System Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of leading business communication platforms with detailed feature comparisons, pricing analysis, and deployment considerations
            </p>
          </div>
        </div>

        {/* System Navigation */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {comparisonData.map((system, index) => (
            <button
              key={system.id}
              onClick={() => setActiveSystem(index)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 transition-all duration-300 ${
                activeSystem === index 
                  ? `border-blue-500 bg-white shadow-lg shadow-blue-500/20`
                  : 'border-gray-200 bg-white/80 hover:border-blue-300 hover:bg-white'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                activeSystem === index ? 'bg-blue-500/10' : 'bg-gray-100'
              }`}>
                {system.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 text-sm">{system.name}</h3>
                <p className="text-xs text-gray-500">{system.price}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content - Plain Page Layout */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* System Header */}
          <div className={`bg-gradient-to-r ${currentSystem.accentColor} rounded-2xl p-8 text-white mb-12`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  {currentSystem.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{currentSystem.name}</h1>
                  <p className="text-white/80 text-lg">{currentSystem.vendor}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Star className="fill-current" size={20} />
                  <span className="font-semibold">{currentSystem.rating}</span>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <span className="font-semibold text-lg">{currentSystem.price}</span>
                </div>
              </div>
            </div>
            <p className="text-white/90 mt-4 text-lg leading-relaxed">
              {currentSystem.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Settings size={24} className="text-blue-500" />
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentSystem.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pros */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                Strategic Advantages
              </h3>
              <div className="space-y-3">
                {currentSystem.pros.map((pro, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{pro}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <XCircle size={20} className="text-red-500" />
                Considerations & Limitations
              </h3>
              <div className="space-y-3">
                {currentSystem.cons.map((con, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best For */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users size={24} className="text-blue-500" />
              Ideal Use Cases
            </h2>
            <div className="flex flex-wrap gap-3">
              {currentSystem.bestFor.map((type, index) => (
                <span 
                  key={index}
                  className="px-5 py-2.5 bg-white rounded-lg text-gray-700 font-medium border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          
        </div>

        {/* Bottom Navigation */}
        <div className={`flex justify-between items-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button
            onClick={() => setActiveSystem(prev => prev > 0 ? prev - 1 : comparisonData.length - 1)}
            className="px-6 py-3 bg-white border-2 border-gray-300 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-semibold text-gray-700"
          >
            <ArrowRight className="rotate-180" size={18} />
            Previous System
          </button>
          
          <div className="flex items-center gap-2">
            {comparisonData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSystem(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSystem === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveSystem(prev => prev < comparisonData.length - 1 ? prev + 1 : 0)}
            className="px-6 py-3 bg-white border-2 border-gray-300 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-semibold text-gray-700"
          >
            Next System
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}