'use client'
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, Phone, Calendar } from 'lucide-react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const navigateToContentSyndication = () => {
    window.location.href = '/services/content-syndication';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#082540] to-[#007BFF] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}></div>
            </div>

            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                Start Generating
                <span className="block bg-gradient-to-r from-[#00D4FF] to-[#00A3FF] bg-clip-text text-transparent">
                  Quality Leads Today
                </span>
              </h2>
              
              <p className="text-blue-100 mb-8 leading-relaxed">
                Fill out the form and our experts will contact you within 24 hours to discuss your lead generation needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-3 bg-white text-[#082540] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-4 text-blue-200">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">leads@b2bgravity.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-[#082540] mb-6">
                Why Choose Our
                <span className="block text-[#007BFF]">Lead Generation</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We deliver measurable results with our proven approach to B2B lead generation.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Guaranteed qualified leads delivered monthly",
                "Dedicated account manager and support team",
                "Real-time dashboard with performance metrics",
                "Flexible campaigns tailored to your industry",
                "Competitive pricing with transparent reporting"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Next Service Navigation with Button */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-100">
              <h4 className="text-lg font-black text-[#082540] mb-3">Explore Next Service</h4>
              <p className="text-gray-600 mb-4">Amplify your content reach with our syndication services</p>
              <button 
                onClick={navigateToContentSyndication}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#007BFF] to-[#00A3FF] hover:from-[#00A3FF] hover:to-[#007BFF] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Content Syndication Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;