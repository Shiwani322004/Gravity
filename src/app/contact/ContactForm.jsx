'use client';

import { 
  Send,
  ChevronRight,
  CheckCircle,
  Users,
  Target,
  BarChart3
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
      // Observe all child elements for individual animations
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
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
    { value: "contact-center", label: "Contact Center" },
    { value: "erp", label: "ERP" },
    { value: "video-conferencing", label: "Video Conferencing" }
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
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl shadow-[#007bff]/10 p-10 border border-gray-200/60 hover:shadow-2xl hover:shadow-[#007bff]/20 transition-all duration-500">
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
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  {/* Category Dropdown */}
                  <div className="mb-6">
                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your project, challenges, and goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#007bff] to-[#0a2540] text-white py-5 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#007bff]/25 hover:scale-105 transition-all duration-300 disabled:opacity-70 group"
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
      `}</style>
    </section>
  );
}