'use client';

import { User, Briefcase, BarChart3, Star } from 'lucide-react';

const CRMTrustedSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director",
      company: "TechGrowth Inc",
      content: "Our sales team's efficiency increased by 45% after implementing this CRM. The automation features are incredible!",
      avatar: <User className="text-white" size={24} />,
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "Startup Ventures",
      content: "The AI insights helped us identify new revenue opportunities we never would have found otherwise.",
      avatar: <Briefcase className="text-white" size={24} />,
      rating: 5
    },
    {
      name: "Emily Thompson",
      role: "Marketing Manager",
      company: "Digital First Co",
      content: "Seamless integration with our existing tools and the customer support is outstanding.",
      avatar: <BarChart3 className="text-white" size={24} />,
      rating: 5
    }
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers say about their experience with our CRM solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMTrustedSection;