'use client'
import React from 'react';
import { FileText, Users, Eye, CheckCircle } from 'lucide-react';

const ContentTypes = () => {
  const contentTypes = [
    {
      title: "Whitepapers & eBooks",
      description: "Strategic distribution of in-depth content to establish thought leadership and attract high-quality prospects at scale.",
      icon: FileText,
      image: "/images/ct1.png", // Ensure this path points to your image
      metrics: ["High-Quality Leads", "Expert Positioning", "3-5x Engagement Lift"]
    },
    {
      title: "Case Studies",
      description: "Amplify your proven success stories to build instant credibility, accelerate the sales cycle, and attract similar clients.",
      icon: Users,
      image: "/images/ct2.png", // Ensure this path points to your image
      metrics: ["Accelerated Trust Building", "Strong Social Proof", "Up to 45% Conversion Increase"]
    },
    {
      title: "Blog Content",
      description: "Extend your blog's organic reach and drive massive traffic through strategic syndication to premium content hubs.",
      icon: Eye,
      image: "/images/ct3.png", // Ensure this path points to your image
      metrics: ["Significant SEO Benefits", "Thought Leadership Growth", "2.8x Average ROI"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Content Types We
            <span className="block bg-gradient-to-r from-[#007BFF] to-[#00D4FF] bg-clip-text text-transparent font-black mt-2">
              Amplify for Maximum Impact
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in distributing your most valuable assets to the right audience, ensuring every piece of content drives measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {contentTypes.map((type, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#007BFF] cursor-pointer transform hover:-translate-y-2"
            >
              {/* Increased Image Area Height */}
              <div className="relative h-64 overflow-hidden"> 
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> 

                {/* Floating Icon Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#007BFF] transition-all duration-300 shadow-md">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title and Hover Overlay - More Prominent */}
                <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-1">{type.title}</h3>
                </div>

                {/* Full-Card Hover Overlay for Call-to-Action */}
                <div className="absolute inset-0 bg-[#007BFF]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-black text-xl tracking-wider uppercase">Amplify Now</span>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <p className="text-gray-600 mb-8 leading-relaxed text-base">{type.description}</p>
                
                <div className="space-y-3">
                  {type.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                      <CheckCircle className="w-5 h-5 text-[#007BFF] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 font-semibold text-base">{metric}</span>
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