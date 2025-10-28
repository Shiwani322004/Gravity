'use client';

import { 
  CheckCircle, 
  XCircle, 
  Star, 
  ArrowRight,
  Database,
  Users,
  BarChart3,
  Package,
  Shield,
  Settings
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ERPFeatures() {
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
      name: "Salesforce ERP Cloud",
      vendor: "Salesforce",
      description: "Comprehensive cloud-based ERP solution with integrated CRM capabilities, advanced analytics, and AI-powered insights. Designed for organizations requiring scalable business process automation with seamless customer relationship management integration.",
      icon: <Database className="text-blue-500" size={24} />,
      rating: 4.6,
      price: "$25/user/month",
      features: [
        "Complete financial management with automated accounting, budgeting, and real-time financial reporting",
        "Advanced CRM integration with sales pipeline management and customer lifecycle tracking",
        "AI-powered analytics and forecasting with predictive insights and custom dashboard creation",
        "Supply chain optimization with inventory management and procurement automation",
        "Multi-currency and multi-company support with global compliance and regulatory reporting"
      ],
      pros: [
        "Seamless CRM integration providing 360-degree customer view and unified sales-to-service processes",
        "Robust AI capabilities including Einstein Analytics for predictive forecasting and automated insights",
        "Highly scalable cloud architecture supporting growth from SMB to enterprise with flexible deployment options",
        "Extensive third-party ecosystem with 5000+ apps on AppExchange for unlimited customization possibilities"
      ],
      cons: [
        "Premium pricing structure may be challenging for small businesses with limited budgets and basic ERP needs",
        "Complex customization requirements often necessitate specialized Salesforce developers and ongoing maintenance",
        "Steep learning curve for non-technical users requiring comprehensive training and change management programs"
      ],
      bestFor: ["CRM-focused organizations", "Sales-driven businesses", "Companies requiring AI analytics"],
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 1,
      name: "QuickBooks Enterprise",
      vendor: "Intuit",
      description: "Robust accounting-focused ERP solution designed for growing businesses requiring advanced financial management, inventory tracking, and industry-specific functionality with seamless integration to QuickBooks ecosystem.",
      icon: <BarChart3 className="text-green-500" size={24} />,
      rating: 4.4,
      price: "Starts at $30/user/month",
      features: [
        "Advanced financial management with multi-location accounting and consolidated reporting capabilities",
        "Comprehensive inventory management with barcode scanning, lot tracking, and automated reordering",
        "Industry-specific editions for manufacturing, wholesale, retail, and professional services",
        "Robust reporting suite with 200+ customizable reports and real-time financial dashboards",
        "Multi-user access with role-based permissions and audit trail functionality"
      ],
      pros: [
        "Strong accounting foundation with deep financial management capabilities and regulatory compliance features",
        "Industry-specific versions providing tailored workflows and specialized reporting for vertical markets",
        "Familiar QuickBooks interface reducing training time and accelerating user adoption across organizations",
        "Competitive pricing for mid-market businesses seeking comprehensive ERP functionality without enterprise costs"
      ],
      cons: [
        "Limited scalability for large enterprises requiring complex multi-entity and global operations management",
        "Fewer advanced features compared to full-scale ERP systems, particularly in manufacturing and supply chain",
        "Desktop-based architecture may limit remote access and real-time collaboration capabilities"
      ],
      bestFor: ["Accounting-focused businesses", "Mid-market companies", "Industry-specific requirements"],
      accentColor: "from-green-500 to-teal-500"
    },
    {
      id: 2,
      name: "Zoho One",
      vendor: "Zoho",
      description: "Integrated business suite offering comprehensive ERP functionality with 45+ applications covering finance, HR, inventory, CRM, and project management. Built for organizations seeking unified business operations with extensive customization options.",
      icon: <Package className="text-orange-500" size={24} />,
      rating: 4.3,
      price: "Standard at $20 per user/month",
      features: [
        "Complete business suite with 45+ integrated applications covering all business functions",
        "Custom application development platform with drag-and-drop workflow builder and automation tools",
        "Advanced analytics and BI with custom dashboards, KPI tracking, and predictive analytics",
        "Multi-channel customer support with helpdesk, live chat, and social media integration",
        "Mobile-first design with native apps for iOS and Android providing full functionality access"
      ],
      pros: [
        "Exceptional value proposition offering comprehensive business suite at competitive per-user pricing",
        "Extensive customization capabilities with custom apps, workflows, and integration possibilities",
        "Unified data model ensuring seamless information flow across all business applications and departments",
        "Strong mobile experience with native apps providing full desktop functionality on mobile devices"
      ],
      cons: [
        "Interface complexity can overwhelm users with too many features and options requiring careful implementation",
        "Individual app depth may be limited compared to specialized best-of-breed solutions in specific domains",
        "Learning curve for maximizing platform potential requires dedicated training and ongoing user education"
      ],
      bestFor: ["Small to medium businesses", "Organizations seeking unified platform", "Custom workflow requirements"],
      accentColor: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      name: "HubSpot Operations Hub",
      vendor: "HubSpot",
      description: "Operations-focused platform combining CRM, marketing automation, and business process management. Designed for growth-oriented companies requiring seamless customer data management with powerful automation capabilities.",
      icon: <Users className="text-purple-500" size={24} />,
      rating: 4.5,
      price: "Starts at $45 per user/month",
      features: [
        "Advanced data synchronization with bi-directional sync across 500+ applications and databases",
        "Workflow automation with visual builder, conditional logic, and multi-step process automation",
        "Custom object creation and relationship mapping for unique business data structures",
        "Revenue operations analytics with attribution reporting and ROI tracking across all channels",
        "Data quality management with duplicate detection, data cleansing, and validation rules"
      ],
      pros: [
        "Seamless integration with HubSpot's marketing and sales platforms creating unified growth stack",
        "User-friendly interface with intuitive workflow builder accelerating automation implementation",
        "Strong focus on customer data platform capabilities enabling 360-degree customer view",
        "Excellent support and educational resources with HubSpot Academy and dedicated customer success"
      ],
      cons: [
        "Higher pricing compared to traditional ERP solutions may challenge cost-conscious organizations",
        "Limited traditional ERP modules like advanced manufacturing, complex inventory, or financial management",
        "Best suited for marketing and sales-focused operations rather than comprehensive business management"
      ],
      bestFor: ["Marketing-driven organizations", "SaaS and technology companies", "Growth-focused businesses"],
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Pipedrive CRM+",
      vendor: "Pipedrive",
      description: "Sales-focused business management platform with integrated project management, invoicing, and customer support capabilities. Built for sales-driven organizations requiring streamlined deal management with operational efficiency.",
      icon: <Shield className="text-indigo-500" size={24} />,
      rating: 4.2,
      price: "Custom pricing",
      features: [
        "Visual sales pipeline management with drag-and-drop deal tracking and automated stage progression",
        "Integrated project management with task assignment, timeline tracking, and resource allocation",
        "Built-in invoicing and payment processing with automated billing and revenue recognition",
        "Customer support ticketing system with SLA management and satisfaction tracking",
        "Advanced reporting and analytics with sales forecasting and performance metrics"
      ],
      pros: [
        "Intuitive visual interface making sales process management accessible for non-technical users",
        "Strong mobile application providing full CRM functionality for field sales teams and remote workers",
        "Competitive pricing with transparent cost structure and no hidden fees for standard features",
        "Excellent API and integration capabilities connecting with 300+ business applications"
      ],
      cons: [
        "Limited ERP functionality compared to comprehensive business management platforms",
        "Fewer advanced features for complex sales processes and enterprise-level requirements",
        "Custom pricing model may result in higher costs for organizations with extensive user bases"
      ],
      bestFor: ["Sales-focused organizations", "Small to medium businesses", "Simple operational requirements"],
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
              ERP Solutions Platform Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of leading ERP platforms with detailed feature comparisons, pricing analysis, and implementation considerations
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