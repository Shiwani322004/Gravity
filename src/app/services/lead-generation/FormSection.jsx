'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Mail, Phone, Calendar, Star, Award, TrendingUp, Users, Shield, Clock, BarChart3, Globe, Sparkles, Zap, Target, Search, MessageCircle, Filter, ChevronDown } from 'lucide-react';

const LeadGenerationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    leadGoal: '',
    budget: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 5000);
    }, 2000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slideIn 0.5s ease-out; }
        .bg-grid {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%233b82f6' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 15px center;
          padding-right: 40px;
        }
        input, select {
          transition: all 0.3s ease;
        }
        input:focus, select:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>

      <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden min-h-screen flex items-center bg-grid">
        {/* Success Notification */}
        {successMessage && (
          <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-slide-in">
            <CheckCircle className="w-6 h-6" />
            <span>Success! We'll contact you within 24 hours.</span>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Section - Form */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100">
                
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-2xl font-black mb-4 text-gray-900">
                    Start Generating
                    <span className="block text-blue-600">
                      Quality Leads Today
                    </span>
                  </h3>
                 
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 3: Industry Dropdown */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('industry')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
                      required
                    >
                      <option value="">Select Your Industry</option>
                      <option value="technology">Technology & Software</option>
                      <option value="healthcare">Healthcare & Medical</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="consulting">Professional Services</option>
                      <option value="ecommerce">E-commerce & Retail</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Row 4: Lead Goal and Budget Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Lead Goal *</label>
                      <select
                        name="leadGoal"
                        value={formData.leadGoal}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('leadGoal')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
                        required
                      >
                        <option value="">Select Lead Goal</option>
                        <option value="50-100">50-100 leads</option>
                        <option value="100-250">100-250 leads</option>
                        <option value="250-500">250-500 leads</option>
                        <option value="500-1000">500-1,000 leads</option>
                        <option value="1000-5000">1,000-5,000 leads</option>
                        <option value="5000+">5,000+ leads</option>
                      </select>
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Budget *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
                        required
                      >
                        <option value="">Select Budget</option>
                        <option value="5k-10k">$5K - $10K</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k+">$250K+</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-8"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Free Strategy Session</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>

                
                
                </form>
              </div>
              
            </div>

            {/* Right Section - Benefits */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                    Why Choose Our
                    <span className="block text-blue-600">Lead Generation</span>
                  </h2>
                  <p className="text-gray-600 text-lg mt-6">We deliver measurable results with our proven approach to B2B lead generation.</p>
                </div>

                {/* Benefits List */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Guaranteed qualified leads delivered monthly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Dedicated account manager and support team</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Real-time dashboard with performance metrics</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Flexible campaigns tailored to your industry</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Competitive pricing with transparent reporting</p>
                    </div>
                  </div>
                </div>

                {/* Additional CTA */}
                <div className="mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Explore Next Service</h4>
                  <p className="text-gray-700 mb-6">Amplify your content reach with our syndication services</p>
                  <a 
                    href="/services/content-syndication" 
                    className="inline-block" 
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group">
                      <span>Content Syndication Services</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadGenerationForm;