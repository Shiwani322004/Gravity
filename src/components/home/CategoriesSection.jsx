import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { categories } from '@/data/homeData';

const CategoriesSection = () => {
  const handleExploreNow = () => {
    window.location.href = '/services';
  };

  const handleExploreCategory = (link) => {
    window.location.href = link;
  };

  // Additional categories to make total 6
  const additionalCategories = [
    {
      title: "ERP Systems",
      description: "Enterprise resource planning solutions",
      icon: "ERP",
      link: "/categories/erp-system",
      subcategories: ["Financial Management", "Supply Chain", "Human Resources"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Video Conferencing",
      description: "Virtual meeting and collaboration tools",
      icon: "Video",
      link: "/categories/video-conferencing",
      subcategories: ["Team Collaboration", "Webinars", "Screen Sharing"],
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const allCategories = [...categories, ...additionalCategories];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-[#007BFF]/10 to-[#007BFF]/10 text-[#007BFF] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-[#007BFF]/20">
              Our Categories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gray-900">Technology Solutions</span>{' '}
            <span className="text-[#007BFF]">
              For Every Need
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology categories designed to meet all your business requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#007BFF]/20 overflow-hidden"
            >
              <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#007BFF] transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {category.subcategories.map((sub, subIdx) => (
                  <div key={subIdx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007BFF]" />
                    <span className="text-gray-700 font-medium">{sub}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleExploreCategory(category.link)}
                className="inline-flex items-center gap-2 text-[#007BFF] font-bold group-hover:gap-3 transition-all bg-[#007BFF]/10 hover:bg-[#007BFF] hover:text-white px-4 py-2 rounded-full"
              >
                Explore More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleExploreNow}
            className="inline-flex items-center gap-3 bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#007BFF]/50 border-2 border-transparent hover:border-white/50"
          >
            Explore All Categories
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;