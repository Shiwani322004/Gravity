'use client';

import { 
  CheckCircle, 
  XCircle, 
  Star, 
  ArrowRight,
  Headphones,
  Users,
  BarChart3,
  MessageCircle,
  Shield,
  Settings
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ContactCenterFeatures() {
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
      name: "RingCentral Contact Center",
      vendor: "RingCentral",
      description: "Enterprise-grade omnichannel contact center solution with AI-powered routing, real-time analytics, and seamless integration with unified communications platform. Designed for organizations requiring scalable customer service operations with advanced workforce optimization.",
      icon: <Headphones className="text-purple-500" size={24} />,
      rating: 4.7,
      price: "Starts at $30 per user/month",
      features: [
        "Omnichannel routing across voice, email, chat, and social media with intelligent skill-based distribution",
        "Real-time and historical analytics dashboard with customizable KPIs and performance metrics",
        "AI-powered sentiment analysis and call transcription with automated quality scoring",
        "Workforce management tools including forecasting, scheduling, and adherence monitoring",
        "CRM integrations with Salesforce, Microsoft Dynamics, and custom API connections"
      ],
      pros: [
        "Seamless integration with RingCentral's unified communications platform reducing complexity and training requirements",
        "Advanced AI capabilities including predictive routing and automated quality management for improved efficiency",
        "Comprehensive reporting suite with real-time dashboards and customizable analytics for data-driven decisions",
        "Scalable cloud architecture supporting growth from small teams to enterprise-level operations with 99.99% uptime"
      ],
      cons: [
        "Premium pricing structure may be challenging for budget-conscious organizations with basic contact center needs",
        "Complex feature set requires dedicated training and change management for optimal user adoption",
        "Advanced analytics and AI features require higher-tier plans with significant cost increases"
      ],
      bestFor: ["Enterprise customer service teams", "Multi-channel support operations", "Organizations requiring advanced analytics"],
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      id: 1,
      name: "Zoom Contact Center",
      vendor: "Zoom",
      description: "Cloud-native contact center platform integrated with Zoom's video collaboration ecosystem. Offers intelligent routing, workforce optimization, and seamless escalation to video meetings for enhanced customer engagement and support resolution.",
      icon: <Users className="text-blue-500" size={24} />,
      rating: 4.5,
      price: "Starts at $25/user/month",
      features: [
        "Video-first customer support with one-click escalation from voice to video meetings",
        "Intelligent call routing with skills-based distribution and real-time queue management",
        "Integrated workforce management with forecasting, scheduling, and performance tracking",
        "Omnichannel support including voice, email, chat, and SMS with unified agent desktop",
        "Built-in quality management with call recording, monitoring, and coaching tools"
      ],
      pros: [
        "Unique video integration capabilities enabling face-to-face customer interactions for complex issue resolution",
        "Familiar Zoom interface reduces training time and accelerates agent adoption across the organization",
        "Competitive pricing with transparent cost structure and no hidden fees for standard features",
        "Strong reliability and performance leveraging Zoom's proven cloud infrastructure and global network"
      ],
      cons: [
        "Limited advanced analytics compared to specialized contact center platforms with dedicated BI tools",
        "Newer platform with fewer third-party integrations compared to established contact center solutions",
        "Video features may not be relevant for all customer service scenarios and industry verticals"
      ],
      bestFor: ["Organizations already using Zoom ecosystem", "Visual support requirements", "Mid-market customer service teams"],
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Dialpad Contact Center",
      vendor: "Dialpad",
      description: "AI-first contact center platform featuring real-time transcription, sentiment analysis, and automated coaching. Built for modern customer service teams requiring conversation intelligence and data-driven performance optimization.",
      icon: <BarChart3 className="text-green-500" size={24} />,
      rating: 4.4,
      price: "Standard at $35 per user/month",
      features: [
        "Real-time AI transcription with keyword spotting and automated call summarization",
        "Voice Intelligence (Vi) providing sentiment analysis and conversation insights during live calls",
        "Automated quality scoring and coaching recommendations based on conversation analysis",
        "Omnichannel routing with intelligent skill-based distribution and priority queuing",
        "Native CRM integrations with automatic activity logging and customer context display"
      ],
      pros: [
        "Industry-leading AI capabilities providing real-time conversation insights and automated coaching opportunities",
        "Modern, intuitive interface with minimal learning curve accelerating agent productivity and satisfaction",
        "Comprehensive conversation analytics enabling data-driven coaching and performance improvement strategies",
        "Strong mobile application supporting remote and hybrid workforce models with full feature parity"
      ],
      cons: [
        "AI transcription accuracy varies with audio quality and accents requiring human verification for critical interactions",
        "Higher pricing compared to basic contact center solutions may challenge cost-sensitive organizations",
        "Limited customization options for call flows and routing rules compared to enterprise-focused platforms"
      ],
      bestFor: ["AI-driven customer service operations", "Performance coaching focus", "Modern distributed teams"],
      accentColor: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      name: "Vonage Contact Center",
      vendor: "Vonage",
      description: "Global cloud contact center platform with extensive international coverage and multi-language support. Offers comprehensive omnichannel capabilities with advanced routing, workforce optimization, and integration flexibility for enterprise operations.",
      icon: <MessageCircle className="text-orange-500" size={24} />,
      rating: 4.6,
      price: "Starts at $28.99 per user/month",
      features: [
        "Global reach with local presence in 100+ countries and multi-language support capabilities",
        "Advanced omnichannel routing with predictive and progressive dialing for outbound campaigns",
        "Comprehensive workforce management including forecasting, scheduling, and real-time adherence",
        "Flexible API platform enabling custom integrations and workflow automation",
        "Enterprise-grade security with SOC 2 compliance and advanced fraud protection"
      ],
      pros: [
        "Extensive global infrastructure with local presence enabling international customer service operations",
        "Robust API ecosystem supporting custom integrations and workflow automation for unique business requirements",
        "Comprehensive feature set including both inbound and outbound capabilities with advanced campaign management",
        "Strong enterprise focus with dedicated support and professional services for complex implementations"
      ],
      cons: [
        "Complex pricing structure with multiple add-ons potentially increasing total cost of ownership",
        "Steeper learning curve for advanced features requiring dedicated training and technical expertise",
        "Interface design less modern compared to newer cloud-native contact center platforms"
      ],
      bestFor: ["Global enterprises", "International customer service", "Complex integration requirements"],
      accentColor: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      name: "Twilio Flex",
      vendor: "Twilio",
      description: "Programmable contact center platform built on Twilio's communication APIs. Offers maximum customization and flexibility for organizations requiring tailored customer service solutions with developer-friendly architecture and extensive integration capabilities.",
      icon: <Shield className="text-indigo-500" size={24} />,
      rating: 4.3,
      price: "Custom pricing available",
      features: [
        "Fully programmable platform with extensive APIs for custom workflow development",
        "Real-time flex architecture enabling dynamic agent assignment and routing customization",
        "Native integration with Twilio's communication platform including SMS, voice, and video APIs",
        "Advanced analytics and reporting with custom dashboard creation and data export capabilities",
        "Scalable cloud infrastructure supporting high-volume operations with global redundancy"
      ],
      pros: [
        "Unmatched customization capabilities enabling tailored solutions for unique business requirements and workflows",
        "Developer-friendly platform with extensive documentation and community support for rapid implementation",
        "Seamless integration with existing Twilio communication infrastructure reducing complexity and costs",
        "Highly scalable architecture supporting growth from startup to enterprise with pay-as-you-scale pricing"
      ],
      cons: [
        "Requires significant technical expertise and development resources for implementation and ongoing maintenance",
        "Custom pricing model may result in higher costs for organizations with standard contact center requirements",
        "Limited out-of-the-box features compared to traditional contact center platforms requiring custom development"
      ],
      bestFor: ["Developer-focused organizations", "Custom solution requirements", "Existing Twilio customers"],
      accentColor: "from-indigo-500 to-purple-500"
    }
  ];

  const currentSystem = comparisonData[activeSystem];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 to-blue-50/20 py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Contact Center Platform Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of leading contact center solutions with detailed feature comparisons, pricing analysis, and implementation considerations
            </p>
          </div>
        </div>

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

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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