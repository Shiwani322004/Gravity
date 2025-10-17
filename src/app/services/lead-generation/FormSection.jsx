'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Mail, Phone, Calendar, Star, Award, TrendingUp, Users, Shield, Clock, BarChart3, Globe, Sparkles, Zap, Target, Search, MessageCircle, Filter } from 'lucide-react';

const FormSection = () => {
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    if (formRef.current) {
      formRef.current.addEventListener('mousemove', handleMouseMove);
      return () => {
        if (formRef.current) {
          formRef.current.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }
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
    
    // Simulate form submission with enhanced feedback
    setTimeout(() => {
      setIsSubmitting(false);
      // Create success notification
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div class="fixed top-8 right-8 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-slide-in">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          Success! We'll contact you within 24 hours.
        </div>
      `;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 5000);
    }, 2000);
  };



  return (
    <>
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(0, 132, 255, 0.4); }
          50% { box-shadow: 0 0 60px rgba(0, 132, 255, 0.8); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide-in {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-slide-in { animation: slide-in 0.5s ease-out; }
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s infinite;
        }
        .glass-morphism {
          backdrop-filter: blur(25px);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .input-focus {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .floating-element {
          position: absolute;
          opacity: 0.15;
          animation: float 8s ease-in-out infinite;
        }
        .step-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(20px);
        }
      `}</style>

      {/* Enhanced Dark Blue Background */}
      <section ref={sectionRef} className="py-32 bg-[#0B1426] relative overflow-hidden min-h-screen">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Enhanced Floating geometric shapes */}
          <div className="floating-elements">
            <div className="floating-element top-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl opacity-25" style={{ animationDelay: '1s' }}></div>
            <div className="floating-element top-3/4 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-25" style={{ animationDelay: '3s' }}></div>
            <div className="floating-element top-1/2 right-1/3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 opacity-25" style={{ animationDelay: '5s' }}></div>
            <div className="floating-element top-1/3 left-2/3 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg opacity-20" style={{ animationDelay: '7s' }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header Section */}
          <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           
           
            
          </div>

         

          {/* Enhanced Contact Form - Centered */}
          <div className="flex justify-center">
            <div className={`w-full max-w-2xl transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div 
                ref={formRef}
                className="relative bg-gradient-to-br from-[#0A1628] via-[#1e3a8a] via-[#3b82f6] to-[#0084FF] rounded-3xl p-16 text-white overflow-hidden animate-pulse-glow border border-gray-700/50"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 50%), linear-gradient(135deg, #0A1628 0%, #1e3a8a 25%, #3b82f6 75%, #0084FF 100%)`
                }}
              >
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 opacity-25">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, #ffffff 3px, transparent 3px),
                      radial-gradient(circle at 75% 75%, #ffffff 2px, transparent 2px),
                      linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)
                    `,
                    backgroundSize: '60px 60px, 30px 30px, 120px 120px',
                  }}></div>
                </div>

                {/* Enhanced Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-12 left-12 w-3 h-3 bg-white rounded-full opacity-40 animate-float"></div>
                  <div className="absolute top-24 right-24 w-2 h-2 bg-blue-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-24 left-24 w-4 h-4 bg-cyan-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-12 right-12 w-3 h-3 bg-purple-300 rounded-full opacity-40 animate-float" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-12 text-center">
                    <h3 className="text-5xl font-black mb-8 leading-tight">
                      Get Your Custom
                      <span className="block bg-gradient-to-r from-[#00D4FF] via-[#00A3FF] to-[#FFFFFF] bg-clip-text text-transparent animate-gradient">
                        Growth Strategy
                      </span>
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full glass-morphism rounded-2xl px-8 py-6 text-white placeholder-blue-200 focus:outline-none transition-all duration-500 text-lg ${
                            focusedField === 'name' ? 'input-focus' : ''
                          }`}
                          required
                        />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === 'name' ? 'opacity-30' : ''
                        }`}></div>
                      </div>
                      
                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Business Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full glass-morphism rounded-2xl px-8 py-6 text-white placeholder-blue-200 focus:outline-none transition-all duration-500 text-lg ${
                            focusedField === 'email' ? 'input-focus' : ''
                          }`}
                          required
                        />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === 'email' ? 'opacity-30' : ''
                        }`}></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name *"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full glass-morphism rounded-2xl px-8 py-6 text-white placeholder-blue-200 focus:outline-none transition-all duration-500 text-lg ${
                            focusedField === 'company' ? 'input-focus' : ''
                          }`}
                          required
                        />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === 'company' ? 'opacity-30' : ''
                        }`}></div>
                      </div>
                      
                      <div className="relative group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full glass-morphism rounded-2xl px-8 py-6 text-white placeholder-blue-200 focus:outline-none transition-all duration-500 text-lg ${
                            focusedField === 'phone' ? 'input-focus' : ''
                          }`}
                          required
                        />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === 'phone' ? 'opacity-30' : ''
                        }`}></div>
                      </div>
                    </div>

                    <div className="relative group">
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('industry')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full glass-morphism rounded-2xl px-8 py-6 text-white focus:outline-none transition-all duration-500 text-lg ${
                          focusedField === 'industry' ? 'input-focus' : ''
                        }`}
                        required
                      >
                        <option value="" className="text-gray-800">Select Your Industry *</option>
                        <option value="technology" className="text-gray-800">Technology & Software</option>
                        <option value="healthcare" className="text-gray-800">Healthcare & Medical</option>
                        <option value="finance" className="text-gray-800">Finance & Banking</option>
                        <option value="manufacturing" className="text-gray-800">Manufacturing</option>
                        <option value="consulting" className="text-gray-800">Professional Services</option>
                        <option value="ecommerce" className="text-gray-800">E-commerce & Retail</option>
                        <option value="other" className="text-gray-800">Other</option>
                      </select>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 pointer-events-none ${
                        focusedField === 'industry' ? 'opacity-30' : ''
                      }`}></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative group">
                        <select
                          name="leadGoal"
                          value={formData.leadGoal}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('leadGoal')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full glass-morphism rounded-2xl px-8 py-6 text-white focus:outline-none transition-all duration-500 text-lg ${
                            focusedField === 'leadGoal' ? 'input-focus' : ''
                          }`}
                          required
                        >
                          <option value="" className="text-gray-800">Monthly Lead Goal *</option>
                          <option value="50-100" className="text-gray-800">50-100 leads</option>
                          <option value="100-250" className="text-gray-800">100-250 leads</option>
                          <option value="250-500" className="text-gray-800">250-500 leads</option>
                          <option value="500-1000" className="text-gray-800">500-1000 leads</option>
                          <option value="1000+" className="text-gray-800">1000+ leads</option>
                        </select>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === 'leadGoal' ? 'opacity-30' : ''
                        }`}></div>
                      </div>

                      <div className="relative group">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full glass-morphism rounded-2xl px-8 py-6 text-white focus:outline-none transition-all duration-500 text-lg ${
                            focusedField === 'budget' ? 'input-focus' : ''
                          }`}
                          required
                        >
                          <option value="" className="text-gray-800">Monthly Budget *</option>
                          <option value="5k-10k" className="text-gray-800">$5K - $10K</option>
                          <option value="10k-25k" className="text-gray-800">$10K - $25K</option>
                          <option value="25k-50k" className="text-gray-800">$25K - $50K</option>
                          <option value="50k-100k" className="text-gray-800">$50K - $100K</option>
                          <option value="100k+" className="text-gray-800">$100K+</option>
                        </select>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === 'budget' ? 'opacity-30' : ''
                        }`}></div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-white via-blue-50 to-white text-[#0A1628] hover:from-gray-50 hover:via-blue-100 hover:to-gray-50 px-12 py-8 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed animate-gradient shimmer-effect"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-5">
                        {isSubmitting ? (
                          <>
                            <div className="w-8 h-8 border-4 border-[#0A1628] border-t-transparent rounded-full animate-spin"></div>
                            Processing Your Request...
                          </>
                        ) : (
                          <>
                            <Target className="w-8 h-8" />
                            Get Free Strategy Session
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
                          </>
                        )}
                      </div>
                    </button>

                    {/* Enhanced Trust indicators */}
                    <div className="flex items-center justify-center gap-8 text-blue-200 text-base mt-8">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5" />
                        <span>SSL Secured</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5" />
                        <span>24h Response</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5" />
                        <span>No Spam</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormSection;
