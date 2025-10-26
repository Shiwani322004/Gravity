'use client';

import { CheckCircle, Shield, Zap, Users, ArrowRight } from 'lucide-react';

export default function Clients({ onOpenQuestionnaire }) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechGrowth Inc.",
      content: "The BI platform recommendation saved us 40+ hours monthly in reporting. Our team can now focus on strategic analysis instead of data compilation.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Director, GlobalRetail",
      content: "Implementation led to a 27% increase in operational efficiency. The insights helped us optimize inventory and reduce waste significantly.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, DataDriven Solutions",
      content: "The personalized matching process connected us with the perfect BI tool. Our decision-making process is now data-backed and incredibly efficient.",
      avatar: "ER"
    }
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-[#007bff]">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses transformed their operations with the right BI platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 group hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="text-yellow-400">
                      ★
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with BI?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of successful companies that have optimized their operations, increased ROI, and made data-driven decisions with the right BI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenQuestionnaire}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span className="text-lg">Get Started Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { icon: <CheckCircle size={24} />, text: "No Credit Card Required" },
              { icon: <Shield size={24} />, text: "100% Secure" },
              { icon: <Zap size={24} />, text: "Instant Matching" },
              { icon: <Users size={24} />, text: "Expert Support" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                {feature.icon}
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}