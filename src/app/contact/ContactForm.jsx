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
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "24h", label: "Response Time" },
    { number: "50+", label: "Industries Served" },
    { number: "5★", label: "Rated Service" }
  ];

  return (
    <section 
      id="contact-form"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-[#0a2540] mb-6">Start the Conversation</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tell us about your business challenges and goals. We'll craft a customized solution 
                to drive your growth and success in today's competitive landscape.
              </p>
              
              <div className="space-y-6 mb-8">
                {features.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-5 p-4 rounded-xl border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#007bff]/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-[#007bff]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a2540] text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="text-2xl font-bold text-[#007bff] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a2540] mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    Your message has been successfully sent. Our team will contact you within 24 hours to discuss your requirements.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#007bff] font-semibold hover:text-[#0a2540] transition-colors duration-300 text-lg flex items-center gap-2 mx-auto"
                  >
                    Send another message
                    <ChevronRight size={18} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="content-syndication">Content Syndication</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="database-management">Database Management</option>
                      <option value="abm">Account Based Marketing</option>
                    </select>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007bff] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, challenges, and goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#007bff] text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#0a2540] transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Your Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}