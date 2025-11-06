'use client'
import React from 'react';
import { FileText, Users, Eye } from 'lucide-react';

const ContentTypes = () => {
  const contentTypes = [
    {
      title: "Whitepapers & eBooks",
      description: "Strategic distribution of in-depth content to establish thought leadership",
      icon: FileText,
      image: "/images/ct1.png",
      metrics: ["3-5x Engagement", "High-Quality Leads", "Expert Positioning"]
    },
    {
      title: "Case Studies",
      description: "Amplify success stories to build credibility and attract similar clients",
      icon: Users,
      image: "/images/ct2.png",
      metrics: ["45% Conversion", "Social Proof", "Trust Building"]
    },
    {
      title: "Blog Content",
      description: "Extend your blog's reach and drive traffic through strategic syndication",
      icon: Eye,
      image: "/images/ct3.png",
      metrics: ["2.8x ROI", "SEO Benefits", "Thought Leadership"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Content Types We
            <span className="block bg-gradient-to-r from-[#007BFF] to-[#00D4FF] bg-clip-text text-transparent">
              Amplify
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contentTypes.map((type, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#007BFF] cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/40" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#007BFF] transition-all duration-300">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <span className="text-white font-black text-lg">Explore {type.title.split(' ')[0]}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#007BFF] transition-colors duration-300">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-2">
                  {type.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                      <div className="w-2 h-2 bg-[#007BFF] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 font-medium text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentTypes;