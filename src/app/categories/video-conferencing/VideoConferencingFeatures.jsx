'use client';

import { 
  CheckCircle, 
  XCircle, 
  Star, 
  ArrowRight,
  Video,
  Users,
  Monitor,
  MessageCircle,
  Shield,
  Settings
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function VideoConferencingFeatures() {
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
      name: "Zoom Meetings",
      vendor: "Zoom",
      description: "Industry-leading video conferencing platform with HD video quality, screen sharing, and collaboration tools. Designed for businesses of all sizes requiring reliable and feature-rich virtual meeting solutions.",
      icon: <Video className="text-blue-500" size={24} />,
      rating: 4.6,
      price: "Starts at $14.99 per user/month",
      features: [
        "HD video and audio with up to 1000 participants and 49 videos on screen simultaneously",
        "Screen sharing with annotation tools, whiteboard, and remote control capabilities",
        "Cloud recording with automatic transcription and searchable meeting content",
        "Breakout rooms for small group discussions with host controls and timer functionality",
        "Mobile apps with full feature parity across iOS, Android, and desktop platforms"
      ],
      pros: [
        "Exceptional video and audio quality with adaptive bandwidth and noise suppression technology",
        "Intuitive user interface requiring minimal training with one-click meeting join experience",
        "Robust security features including end-to-end encryption, waiting rooms, and meeting passwords",
        "Extensive integration ecosystem with calendar apps, CRM systems, and productivity tools"
      ],
      cons: [
        "Higher pricing for advanced features and large participant counts compared to basic alternatives",
        "Bandwidth intensive requiring stable internet connection for optimal performance",
        "Limited customization options for branding and user interface personalization"
      ],
      bestFor: ["Enterprise organizations", "Remote teams", "Client presentations"],
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 1,
      name: "GoTo Meeting",
      vendor: "GoTo",
      description: "Professional video conferencing solution with easy setup and reliable performance. Built for businesses requiring straightforward meeting tools with excellent mobile support and customer service.",
      icon: <Users className="text-green-500" size={24} />,
      rating: 4.3,
      price: "Starts at $12/user/month",
      features: [
        "One-click meeting start with dial-in numbers for 60+ countries and toll-free options",
        "Screen sharing with drawing tools, laser pointer, and keyboard/mouse sharing capabilities",
        "Mobile apps with offline access to meeting history and contact synchronization",
        "Meeting recording with cloud storage and easy sharing via email or download links",
        "24/7 customer support with phone, chat, and email assistance in multiple languages"
      ],
      pros: [
        "Simple setup and user-friendly interface ideal for non-technical users and quick adoption",
        "Reliable performance with consistent audio/video quality and minimal connection issues",
        "Excellent customer support with responsive technical assistance and comprehensive documentation",
        "Competitive pricing with transparent cost structure and no hidden fees for standard features"
      ],
      cons: [
        "Fewer advanced features compared to comprehensive platforms like Zoom or Microsoft Teams",
        "Limited integration options with third-party applications and business productivity suites",
        "Basic collaboration tools lacking advanced whiteboarding and real-time document editing"
      ],
      bestFor: ["Small to medium businesses", "Simple meeting requirements", "Budget-conscious organizations"],
      accentColor: "from-green-500 to-teal-500"
    },
    {
      id: 2,
      name: "RingCentral Video",
      vendor: "RingCentral",
      description: "Unified communications platform combining video conferencing with phone system and team messaging. Designed for organizations seeking integrated communication solutions with enterprise-grade features.",
      icon: <Monitor className="text-purple-500" size={24} />,
      rating: 4.5,
      price: "Starts at $19.99 per user/month",
      features: [
        "Unified communications with video, voice, SMS, and team messaging in single platform",
        "Advanced meeting controls with co-host capabilities, participant management, and security settings",
        "Team collaboration with persistent chat rooms, file sharing, and task management integration",
        "Phone system integration with click-to-call, voicemail transcription, and call forwarding",
        "Enterprise security with SSO, advanced encryption, and compliance certifications"
      ],
      pros: [
        "Comprehensive unified communications eliminating need for multiple separate platforms",
        "Seamless integration between video meetings, phone calls, and team messaging workflows",
        "Enterprise-grade security and compliance suitable for regulated industries and large organizations",
        "Scalable architecture supporting growth from small teams to enterprise-level deployments"
      ],
      cons: [
        "Higher complexity requiring more extensive training and change management for full adoption",
        "Premium pricing for unified features may exceed budget for organizations needing only video conferencing",
        "Learning curve for users transitioning from simpler, single-purpose video conferencing tools"
      ],
      bestFor: ["Unified communications needs", "Enterprise organizations", "Integrated business workflows"],
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Salesforce Meetings",
      vendor: "Salesforce",
      description: "CRM-integrated video conferencing solution with sales-focused features and customer relationship management capabilities. Built for sales teams requiring seamless integration with customer data and sales processes.",
      icon: <MessageCircle className="text-orange-500" size={24} />,
      rating: 4.2,
      price: "Custom pricing available",
      features: [
        "Native CRM integration with automatic meeting logging and customer context display",
        "Sales-focused features including deal tracking, opportunity management, and pipeline integration",
        "Customer meeting history with notes, recordings, and follow-up task automation",
        "Advanced analytics with meeting effectiveness metrics and sales performance correlation",
        "Custom branding options with company logos, colors, and personalized meeting experiences"
      ],
      pros: [
        "Deep CRM integration providing complete customer context and interaction history during meetings",
        "Sales-optimized workflows with automatic lead scoring, opportunity updates, and pipeline management",
        "Comprehensive analytics linking meeting activities to sales outcomes and revenue generation",
        "Enterprise-grade platform with robust security, compliance, and administrative controls"
      ],
      cons: [
        "Requires Salesforce ecosystem investment making it costly for organizations not using Salesforce CRM",
        "Limited general-purpose meeting features compared to dedicated video conferencing platforms",
        "Complex setup and configuration requiring Salesforce expertise and dedicated IT resources"
      ],
      bestFor: ["Salesforce customers", "Sales-focused organizations", "CRM-integrated workflows"],
      accentColor: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      name: "HubSpot Meetings",
      vendor: "HubSpot",
      description: "Marketing and sales-integrated video conferencing with lead generation and customer engagement features. Designed for growth-focused companies requiring meeting tools integrated with marketing automation and sales processes.",
      icon: <Shield className="text-indigo-500" size={24} />,
      rating: 4.4,
      price: "Starts at $45 per user/month",
      features: [
        "Marketing automation integration with lead scoring, email sequences, and campaign tracking",
        "Meeting scheduling with calendar sync, availability management, and automated reminders",
        "Customer journey tracking with meeting touchpoints and engagement scoring",
        "Sales pipeline integration with deal progression tracking and revenue attribution",
        "Advanced reporting with meeting ROI analysis and customer acquisition cost calculations"
      ],
      pros: [
        "Comprehensive marketing and sales integration creating unified customer acquisition workflows",
        "Advanced lead generation features with meeting-to-customer conversion tracking and optimization",
        "User-friendly interface with intuitive setup and minimal technical requirements",
        "Strong analytics and reporting capabilities linking meetings to business outcomes and growth metrics"
      ],
      cons: [
        "Higher pricing compared to standalone video conferencing solutions for basic meeting needs",
        "Best value requires full HubSpot platform adoption which may not suit all business models",
        "Limited advanced video features compared to specialized conferencing platforms like Zoom"
      ],
      bestFor: ["HubSpot customers", "Marketing-driven organizations", "Growth-focused businesses"],
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
              Video Conferencing Platform Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of leading video conferencing solutions with detailed feature comparisons, pricing analysis, and implementation considerations
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