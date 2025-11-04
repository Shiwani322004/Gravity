'use client';

import { 
  Phone, 
  Clock,
  Rocket,
  BarChart3,
  Target,
  Users,
  Zap,
  MessageCircle,
  ArrowRight,
  Send,
  ChevronRight,
  CheckCircle,
  ChevronDown,
  X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactHero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          category: '',
          message: ''
        });
        setShowContactForm(false);
      }, 5000);
    }, 2000);
  };

  const categories = [
    { value: "phone-system", label: "Phone System" },
    { value: "crm-system", label: "CRM System" },
    { value: "business-intelligence", label: "Business Intelligence" },
    { value: "gps-fleet-management", label: "GPS Fleet Management Software" },
    { value: "payroll-software", label: "Payroll Software" }
  ];

  const services = [
    { value: "lead-generation", label: "Lead Generation" },
    { value: "content-syndication", label: "Content Syndication" },
    { value: "email-marketing", label: "Email Marketing" },
    { value: "database-management", label: "Database Management" },
    { value: "abm", label: "Account Based Marketing" },
    { value: "consulting", label: "Strategic Consulting" },
    { value: "implementation", label: "System Implementation" },
    { value: "support", label: "Ongoing Support" }
  ];

  // Custom dropdown component
  const CustomSelect = ({ id, name, value, onChange, onFocus, onBlur, options, placeholder, isFocused }) => {
    return (
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-500 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02]"
          style={{
            transform: isFocused ? 'scale(1.02)' : 'scale(1)',
            borderColor: isFocused ? '#007bff' : value ? '#10b981' : '#d1d5db',
            boxShadow: isFocused ? '0 0 0 3px rgba(0, 123, 255, 0.1)' : value ? '0 0 0 1px #10b98140' : 'none'
          }}
        >
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-300">
          <ChevronDown 
            size={20} 
            className={`text-gray-500 transition-transform duration-300 ${isFocused ? 'rotate-180 text-[#007bff]' : ''}`}
          />
        </div>
        
        {value && (
          <div className="absolute -top-2 left-3 px-2 bg-white text-xs font-medium text-[#007bff] transition-all duration-300">
            {placeholder}
          </div>
        )}
      </div>
    );
  };

  // Contact Form Modal Component
  const ContactFormModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-[#0a2540]">Get In Touch</h3>
          <button
            onClick={() => setShowContactForm(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your message has been successfully sent. Our team will contact you within 24 hours to discuss your requirements.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setShowContactForm(false);
                }}
                className="text-[#007bff] font-semibold hover:text-[#0a2540] transition-colors duration-300 flex items-center gap-2 mx-auto group"
              >
                Close
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative">
                  <label htmlFor="popup-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="popup-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white hover:border-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group relative">
                  <label htmlFor="popup-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="popup-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white hover:border-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative">
                  <label htmlFor="popup-company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="popup-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white hover:border-gray-400"
                    placeholder="Your company name"
                  />
                </div>
                <div className="group relative">
                  <label htmlFor="popup-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="popup-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white hover:border-gray-400"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="group relative">
                <label htmlFor="popup-category" className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Category
                </label>
                <CustomSelect
                  id="popup-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  onFocus={() => handleFocus('category')}
                  onBlur={handleBlur}
                  options={categories}
                  placeholder="Select a category"
                  isFocused={focusedField === 'category'}
                />
              </div>
              
              <div className="group relative">
                <label htmlFor="popup-service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service of Interest
                </label>
                <CustomSelect
                  id="popup-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => handleFocus('service')}
                  onBlur={handleBlur}
                  options={services}
                  placeholder="Select a service"
                  isFocused={focusedField === 'service'}
                />
              </div>
              
              <div className="group relative">
                <label htmlFor="popup-message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="popup-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white resize-none hover:border-gray-400"
                  placeholder="Tell us about your project, challenges, and goals..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#007bff] to-[#0a2540] text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 disabled:opacity-70 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message 
                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section 
        id="hero"
        ref={sectionRef}
        className="relative bg-gradient-to-br from-[#0a2540] via-[#0d2b4d] to-[#1e3a5f] text-white py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#007bff]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 -right-10 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#007bff]/5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[length:50px_50px] bg-grid-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content - Enhanced with Animations */}
            <div className="lg:w-1/2">
              <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Enhanced Header with Staggered Animation */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                      <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Let's Start
                      </span>
                      <span className={`block bg-gradient-to-r from-[#007bff] via-[#00d4ff] to-[#007bff] bg-clip-text text-transparent transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        Your Success Story
                      </span>
                    </h1>
                  </div>
                </div>

                {/* Enhanced Description */}
                <p className={`text-xl lg:text-2xl text-white/80 leading-relaxed transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Ready to transform your business with data-driven solutions? 
                  Our expert team is here to help you achieve <span className="text-[#007bff] font-semibold">remarkable growth</span> 
                  and measurable results.
                </p>

                {/* CTA Button */}
                <div className={`flex gap-4 transition-all duration-700 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="px-8 py-4 bg-gradient-to-r from-[#007bff] to-[#00d4ff] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#007bff]/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Us Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Content - Enhanced Professional Card */}
            <div className="lg:w-2/5">
              <div className={`bg-white/10 rounded-3xl p-8 border border-white/20 backdrop-blur-sm shadow-2xl shadow-black/20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Why Choose B2B Gravity?
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#007bff] to-[#00d4ff] rounded-full mx-auto mt-4"></div>
                </div>
                
                <div className="space-y-6 mb-8">
                  {[
                    { text: "Data-driven strategies for measurable results", icon: BarChart3 },
                    { text: "Industry-specific expertise", icon: Target },
                    { text: "Proven track record of success", icon: Users },
                    { text: "Customized business solutions", icon: Zap }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105 delay-${(index + 1) * 200}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#007bff] to-[#00d4ff] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-white" size={20} />
                      </div>
                      <p className="text-white/90 text-lg font-medium pt-2 flex-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2000ms;
          }
          .animation-delay-4000 {
            animation-delay: 4000ms;
          }
          .bg-grid-white {
            background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          }
        `}</style>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && <ContactFormModal />}
    </>
  );
}