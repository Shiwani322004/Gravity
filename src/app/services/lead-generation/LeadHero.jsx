'use client'
import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Play, Star, 
  TrendingUp, Users, Award, Zap, CheckCircle2, Sparkles,
  ArrowUpRight, PlayCircle, BarChart3, X, Target, Calendar,
  Shield, Clock, Mail, Phone
} from 'lucide-react';

const LeadHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    databaseSize: ''
  });
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Analytics Dashboard",
      description: "Real-time data insights"
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Team Collaboration",
      description: "Seamless workflow"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Growth Metrics",
      description: "Track your success"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "300%", label: "Lead Increase", color: "from-green-400 to-emerald-500" },
    { icon: Award, value: "98%", label: "Success Rate", color: "from-purple-400 to-violet-500" },
    { icon: Zap, value: "24/7", label: "AI Support", color: "from-orange-400 to-red-500" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowForm(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        databaseSize: ''
      });
      alert('Thank you! We will contact you soon.');
    }, 2000);
  };

  return (
    <div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative min-h-screen py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-[#082540] via-[#0A2B4F] to-[#1e40af] text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: `linear-gradient(rgba(0,123,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          />
          
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-40 sm:w-80 h-40 sm:h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
            
            <div className={`space-y-6 sm:space-y-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                  <span className="block">LEAD</span>
                  <span className="block bg-gradient-to-r from-[#00D4FF] via-[#007BFF] to-[#00A3FF] bg-clip-text text-transparent animate-pulse">
                    GENERATION
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-4 text-gray-300">
                    REDEFINED
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl font-light">
                  Transform your sales pipeline with our revolutionary AI-driven lead generation platform. 
                  <span className="text-cyan-300 font-semibold"> Target smarter</span>, 
                  <span className="text-cyan-300 font-semibold"> engage better</span>, and 
                  <span className="text-cyan-300 font-semibold"> convert faster</span> than ever before.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6 sm:my-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1s' }}>
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Start Generating Leads</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} order-first lg:order-last`} style={{ transitionDelay: '300ms' }}>
              
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full overflow-hidden">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <img 
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      <div className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white transition-all duration-500 ${
                        index === currentImageIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50 group"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mx-auto group-hover:-translate-x-0.5 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50 group"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 mx-auto group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>

                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'w-6 sm:w-8 h-2 sm:h-3' 
                          : 'w-2 sm:w-3 h-2 sm:h-3 hover:w-3 sm:hover:w-4'
                      }`}
                    >
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`} />
                      
                      {index === currentImageIndex && isAutoPlaying && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1 sm:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                    isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                  }`} />
                  <span className="text-xs text-white font-medium hidden sm:inline">
                    {isAutoPlaying ? 'AUTO' : 'PAUSED'}
                  </span>
                </div>
              </div>

              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-md w-full animate-scale-in my-8">
              <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-black text-gray-900">
                    Start Your
                    <span className="block text-blue-600">Free Trial</span>
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer"
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

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Database Size</label>
                    <select
                      name="databaseSize"
                      value={formData.databaseSize}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="">Select Database Size</option>
                      <option value="small">Less than 100 GB</option>
                      <option value="medium">100 GB - 1 TB</option>
                      <option value="large">1 TB - 10 TB</option>
                      <option value="enterprise">10 TB+</option>
                    </select>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <span>Start Free Trial</span>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default LeadHero;