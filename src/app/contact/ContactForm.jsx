'use client';
import { 
  Send,
  ChevronRight,
  CheckCircle,
  Users,
  Target,
  BarChart3,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function ContactForm() {
  const sectionRef = useRef(null);
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
  const [visibleElements, setVisibleElements] = useState([]);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.id || `element-${Math.random()}`;
            setVisibleElements(prev => [...new Set([...prev, elementId])]);
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

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
      }, 5000);
    }, 2000);
  };

  const features = [
    {
      title: "Expert Consultation",
      description: "Comprehensive analysis of your business needs",
      icon: Users
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies for your specific objectives",
      icon: Target
    },
    {
      title: "Ongoing Partnership",
      description: "Continuous support for long-term success",
      icon: BarChart3
    }
  ];

  const categories = [
    { value: "phone-system", label: "Phone System" },
    { value: "crm-system", label: "CRM System" },
    { value: "business-intelligence", label: "Business Intelligence" },
    { value: "gps-fleet-management", label: "GPS Fleet Management Software" },
    { value: "payroll-software", label: "Payroll Software" }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "24h", label: "Response Time" },
    { number: "50+", label: "Industries Served" },
    { number: "5★", label: "Rated Service" }
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

  // Custom dropdown component for better animations
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
        
        {/* Animated label effect */}
        {value && (
          <div className="absolute -top-2 left-3 px-2 bg-white text-xs font-medium text-[#007bff] transition-all duration-300">
            {placeholder}
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      id="contact-form"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#007bff]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a2540]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="text-5xl font-bold text-[#007bff] mb-6 leading-tight">
                Start the Conversation
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tell us about your business challenges and goals. We'll craft a customized solution 
                to drive your growth and success in today's competitive landscape.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((item, index) => (
                  <div 
                    key={index}
                    id={`feature-${index}`}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex items-start gap-5 p-6 rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm group hover:shadow-lg hover:border-[#007bff]/20 hover:scale-105 transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007bff] to-[#0a2540] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a2540] text-xl mb-2 group-hover:text-[#007bff] transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    id={`stat-${index}`}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg hover:border-[#007bff]/20 hover:scale-105 transition-all duration-500 group"
                    style={{ transitionDelay: `${800 + (index * 100)}ms` }}
                  >
                    <div className="text-3xl font-bold text-[#007bff] mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-[#007bff]/10 p-8 lg:p-10 border border-gray-200/60 hover:shadow-2xl hover:shadow-[#007bff]/20 transition-all duration-500">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/25">
                    <CheckCircle className="text-white" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0a2540] mb-6">Thank You!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed text-lg">
                    Your message has been successfully sent. Our team will contact you within 24 hours to discuss your requirements.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#007bff] font-semibold hover:text-[#0a2540] transition-colors duration-300 text-lg flex items-center gap-3 mx-auto group"
                  >
                    Send another message
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3 transition-all duration-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-500 bg-white/50 backdrop-blur-sm hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02]"
                        style={{
                          transform: focusedField === 'name' ? 'scale(1.02)' : 'scale(1)',
                          borderColor: focusedField === 'name' ? '#007bff' : formData.name ? '#10b981' : '#d1d5db',
                          boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(0, 123, 255, 0.1)' : formData.name ? '0 0 0 1px #10b98140' : 'none'
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group relative">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 transition-all duration-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-500 bg-white/50 backdrop-blur-sm hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02]"
                        style={{
                          transform: focusedField === 'email' ? 'scale(1.02)' : 'scale(1)',
                          borderColor: focusedField === 'email' ? '#007bff' : formData.email ? '#10b981' : '#d1d5db',
                          boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(0, 123, 255, 0.1)' : formData.email ? '0 0 0 1px #10b98140' : 'none'
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3 transition-all duration-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-500 bg-white/50 backdrop-blur-sm hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02]"
                        style={{
                          transform: focusedField === 'company' ? 'scale(1.02)' : 'scale(1)',
                          borderColor: focusedField === 'company' ? '#007bff' : formData.company ? '#10b981' : '#d1d5db',
                          boxShadow: focusedField === 'company' ? '0 0 0 3px rgba(0, 123, 255, 0.1)' : formData.company ? '0 0 0 1px #10b98140' : 'none'
                        }}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="group relative">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3 transition-all duration-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-500 bg-white/50 backdrop-blur-sm hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02]"
                        style={{
                          transform: focusedField === 'phone' ? 'scale(1.02)' : 'scale(1)',
                          borderColor: focusedField === 'phone' ? '#007bff' : formData.phone ? '#10b981' : '#d1d5db',
                          boxShadow: focusedField === 'phone' ? '0 0 0 3px rgba(0, 123, 255, 0.1)' : formData.phone ? '0 0 0 1px #10b98140' : 'none'
                        }}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  {/* Category Dropdown */}
                  <div className="group relative">
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-3 transition-all duration-300">
                      Select Category
                    </label>
                    <CustomSelect
                      id="category"
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
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3 transition-all duration-300">
                      Service of Interest
                    </label>
                    <CustomSelect
                      id="service"
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
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 transition-all duration-300">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      required
                      rows="5"
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-500 bg-white/50 backdrop-blur-sm resize-none hover:border-gray-400 hover:shadow-md transform hover:scale-[1.02]"
                      style={{
                        transform: focusedField === 'message' ? 'scale(1.02)' : 'scale(1)',
                        borderColor: focusedField === 'message' ? '#007bff' : formData.message ? '#10b981' : '#d1d5db',
                        boxShadow: focusedField === 'message' ? '0 0 0 3px rgba(0, 123, 255, 0.1)' : formData.message ? '0 0 0 1px #10b98140' : 'none'
                      }}
                      placeholder="Tell us about your project, challenges, and goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#007bff] to-[#0a2540] text-white py-5 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#007bff]/25 hover:scale-105 transition-all duration-500 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none group transform hover:translate-y-[-2px] active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Your Message...
                      </>
                    ) : (
                      <>
                        Send Message 
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }
        .animate-on-scroll.animate-slide-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom select styling */
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      `}</style>
    </section>
  );
}