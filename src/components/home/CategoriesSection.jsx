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
      title: "Payroll Software",
      description: "Payroll management solutions",
      icon: "Payroll",
      link: "/categories/payroll-software",
      subcategories: ["Employee Management", "Tax Compliance", "Time Tracking"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
  title: "Discover Powerful Business Resources",
  description: "Access tools, guides, and strategies to streamline business operations and boost productivity.",
  icon: "Resources",
  link: "/resources",
  subcategories: ["Business Guides", "Marketing Templates", "Automation Tools"],
  image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#007BFF]/20 overflow-hidden flex flex-col h-full"
            >
              <div className="flex flex-col flex-grow">
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden flex-shrink-0">
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
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
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

                {/* Button container with margin-top auto to push to bottom */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={() => handleExploreCategory(category.link)}
                    className="inline-flex items-center gap-2 text-[#007BFF] font-bold group-hover:gap-3 transition-all bg-[#007BFF]/10 hover:bg-[#007BFF] hover:text-white px-4 py-2 rounded-full w-full justify-center"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;