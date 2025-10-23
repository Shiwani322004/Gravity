'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Target, Users, BarChart3, Zap, TrendingUp, Shield } from 'lucide-react';

const ABMFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    accountSize: '',
    primaryGoal: '',
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
        input, select, textarea {
          transition: all 0.3s ease;
        }
        input:focus, select:focus, textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>

      <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden min-h-screen flex items-center bg-grid">
        {/* Success Notification */}
        {successMessage && (
          <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-slide-in">
            <CheckCircle className="w-6 h-6" />
            <span>Success! Our ABM specialists will contact you within 24 hours.</span>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Section - Form */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-gray-100">
                
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-2xl font-black mb-4 text-gray-900">
                    Transform Your ABM
                    <span className="block text-blue-600">
                      Strategy
                    </span>
                  </h3>
                  <p className="text-gray-600">Get expert account-based marketing solutions tailored to your business needs.</p>
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
                      <option value="technology">Technology & SaaS</option>
                      <option value="enterprise-software">Enterprise Software</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="healthcare">Healthcare & Medical</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="other">Other B2B</option>
                    </select>
                  </div>

                  {/* Row 4: Account Size and Primary Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Target Account Size *</label>
                      <select
                        name="accountSize"
                        value={formData.accountSize}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('accountSize')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
                        required
                      >
                        <option value="">Select Account Size</option>
                        <option value="1-50">1 - 50 target accounts</option>
                        <option value="51-200">51 - 200 target accounts</option>
                        <option value="201-500">201 - 500 target accounts</option>
                        <option value="501-1000">501 - 1,000 target accounts</option>
                        <option value="1000-plus">1,000+ target accounts</option>
                      </select>
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Primary ABM Goal *</label>
                      <select
                        name="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('primaryGoal')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
                        required
                      >
                        <option value="">Select Primary Goal</option>
                        <option value="demand-generation">Demand Generation</option>
                        <option value="pipeline-acceleration">Pipeline Acceleration</option>
                        <option value="key-account-growth">Key Account Growth</option>
                        <option value="competitive-displacement">Competitive Displacement</option>
                        <option value="market-entry">New Market Entry</option>
                        <option value="multiple-goals">Multiple Goals</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Budget */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ABM Budget *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border-2 border-gray-200 rounded-xl px-5 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
                      required
                    >
                      <option value="">Select Budget Range</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-plus">$500K+</option>
                    </select>
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
                          <span>Get ABM Strategy Plan</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>

                  <p className="text-center text-gray-500 text-sm mt-4">
                    By submitting, you agree to our privacy policy and consent to contact about our ABM services.
                  </p>
                </form>
              </div>
            </div>

            {/* Right Section - Benefits */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                    Accelerate Your Revenue
                    <span className="block text-blue-600">With Targeted ABM</span>
                  </h2>
                  <p className="text-gray-600 text-lg mt-6">Get enterprise-grade ABM solutions with AI-powered targeting and multi-channel engagement strategies.</p>
                </div>

                {/* Benefits List */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">67% Higher Win Rates with Precision Account Targeting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">3.2x Larger Deal Sizes Through Multi-Stakeholder Engagement</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">45% Shorter Sales Cycles with Personalized Outreach</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">AI-Powered Intent Data & Account Scoring</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Multi-Channel Campaign Orchestration & Automation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg">Real-time Revenue Intelligence & Pipeline Analytics</p>
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600">67%</div>
                    <div className="text-gray-700 font-medium">Higher Win Rates</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600">3.2x</div>
                    <div className="text-gray-700 font-medium">Larger Deals</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600">45%</div>
                    <div className="text-gray-700 font-medium">Faster Sales</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-700 font-medium">Clients</div>
                  </div>
                </div>

                {/* Additional CTA */}
                <div className="mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Need Enterprise ABM?</h4>
                  <p className="text-gray-700 mb-6">Get tailored ABM strategies and dedicated support for your enterprise accounts</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-3 group">
                    <span>Schedule Enterprise Demo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ABMFormSection;