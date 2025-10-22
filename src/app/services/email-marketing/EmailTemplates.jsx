import React from 'react';
import { Send } from 'lucide-react';

const EmailTemplates = () => {
  const templates = [
    {
      name: "Newsletter Pro",
      category: "Newsletter",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      uses: "Content Marketing"
    },
    {
      name: "Sales Converter",
      category: "Sales",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      uses: "Lead Generation"
    },
    {
      name: "Welcome Series",
      category: "Onboarding",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      uses: "Customer Onboarding"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#082540] via-[#0A2B4F] to-[#1e40af] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Beautiful Templates That
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#007BFF] bg-clip-text text-transparent"> Convert</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professionally designed templates optimized for engagement and conversions across all devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-white/20"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082540] via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 right-4">
                  <span className="bg-[#007BFF] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {template.category}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{template.name}</h3>
                  <p className="text-blue-100">{template.uses}</p>
                </div>
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <button className="w-full bg-gradient-to-r from-[#007BFF] to-[#00D4FF] hover:from-[#0056b3] hover:to-[#0099cc] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailTemplates;