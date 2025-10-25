'use client';

import { 
  MessagesSquare, 
  Mail, 
  Briefcase, 
  Cloud, 
  MessageCircle, 
  Video, 
  CreditCard, 
  ShoppingCart, 
  MessageCircleMore, 
  Trello, 
  Flag 
} from 'lucide-react';
import { useRef, useEffect } from 'react';

const CRMIntegrationsSection = () => {
  const integrations = [
    { name: "Slack", icon: <MessagesSquare className="text-white" size={24} />, color: "from-purple-500 to-pink-500" },
    { name: "Google Workspace", icon: <Mail className="text-white" size={24} />, color: "from-green-500 to-blue-500" },
    { name: "Microsoft 365", icon: <Briefcase className="text-white" size={24} />, color: "from-blue-600 to-blue-800" },
    { name: "Salesforce", icon: <Cloud className="text-white" size={24} />, color: "from-blue-400 to-cyan-500" },
    { name: "Mailchimp", icon: <MessageCircle className="text-white" size={24} />, color: "from-yellow-500 to-orange-500" },
    { name: "Zoom", icon: <Video className="text-white" size={24} />, color: "from-blue-500 to-cyan-400" },
    { name: "QuickBooks", icon: <CreditCard className="text-white" size={24} />, color: "from-green-600 to-blue-600" },
    { name: "Shopify", icon: <ShoppingCart className="text-white" size={24} />, color: "from-green-400 to-emerald-600" },
    { name: "WhatsApp", icon: <MessageCircleMore className="text-white" size={24} />, color: "from-green-500 to-emerald-500" },
    { name: "Trello", icon: <Trello className="text-white" size={24} />, color: "from-blue-500 to-cyan-500" },
    { name: "Asana", icon: <Flag className="text-white" size={24} />, color: "from-purple-500 to-pink-500" },
    { name: "Stripe", icon: <CreditCard className="text-white" size={24} />, color: "from-purple-500 to-blue-500" }
  ];

  // Duplicate the integrations for seamless looping
  const duplicatedIntegrations = [...integrations, ...integrations];
  const sliderRef = useRef(null);

  useEffect(() => {
    let animationId;

    const animateSlider = () => {
      if (sliderRef.current) {
        // Move right (positive direction)
        sliderRef.current.scrollLeft += 0.5;
        
        // Reset when reaching the end
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animateSlider);
    };

    animationId = requestAnimationFrame(animateSlider);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seamless{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect your favorite tools and create a unified workflow ecosystem
          </p>
        </div>

        {/* Single row - slides right */}
        <div 
          ref={sliderRef}
          className="flex gap-8 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedIntegrations.map((tool, index) => (
            <div
              key={`row-${index}`}
              className="group flex-shrink-0 flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer w-40"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMIntegrationsSection;