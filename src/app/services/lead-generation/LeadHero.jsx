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
  
  // Disable body scroll when form is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showForm]);


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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
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
      // Here you would typically show a success message
    }, 2000);
  };


  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
        
        /* Custom styles for Webkit scrollbar to make it more subtle in the form modal */
        .webkit-scrollbar {
          width: 6px;
        }
        .webkit-scrollbar-track {
          background: transparent;
        }
        .webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          border: 3px solid transparent;
        }
      `}</style>


      <section 
        ref={sectionRef}
        className="relative min-h-screen py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#082540] via-[#0A2B4F] to-[#1e40af] text-white overflow-hidden"
      >
        {/* Background Effects */}
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
          <div className="absolute top-3/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-40 sm:w-80 h-40 sm:h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Content */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
                  <span className="block">LEAD</span>
                  <span className="block bg-gradient-to-r from-[#00D4FF] via-[#007BFF] to-[#00A3FF] bg-clip-text text-transparent animate-pulse">
                    GENERATION
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 sm:mt-4 text-gray-300">
                    REDEFINED
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl font-light">
                  Transform your sales pipeline with our revolutionary AI-driven lead generation platform. 
                  <span className="text-cyan-300 font-semibold"> Target smarter</span>, 
                  <span className="text-cyan-300 font-semibold"> engage better</span>, and 
                  <span className="text-cyan-300 font-semibold"> convert faster</span> than ever before.
                </p>
              </div>
              
              {/* Stats Grid - Made responsive to stack on smallest screens */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 sm:my-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>


              {/* CTA Button */}
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
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


            {/* Image Carousel */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} order-first lg:order-last`}>
              
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-[500px] w-full overflow-hidden">
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
                      
                      <div className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto text-white transition-all duration-500 ${
                        index === currentImageIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200 hidden sm:block">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>


                {/* Navigation Controls - Made slightly smaller for mobile */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50 group lg:w-12 lg:h-12"
                >
                  <ChevronLeft className="w-5 h-5 mx-auto group-hover:-translate-x-0.5 transition-transform duration-300 lg:w-6 lg:h-6" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50 group lg:right-2 lg:w-12 lg:h-12"
                >
                  <ChevronRight className="w-5 h-5 mx-auto group-hover:translate-x-0.5 transition-transform duration-300 lg:w-6 lg:h-6" />
                </button>


                {/* Vertical Pagination for small devices, horizontal for large */}
                <div className="absolute bottom-4 right-2 transform -translate-y-1/2 flex flex-col items-center gap-3 bg-black/30 backdrop-blur-sm rounded-full px-2 py-4 lg:flex-row lg:bottom-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:px-4 lg:py-2 lg:gap-3">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'h-6 w-2 lg:w-8 lg:h-2' 
                          : 'h-2 w-2 lg:w-3 lg:h-2 hover:h-3 lg:hover:w-4 lg:hover:h-2'
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


                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                  }`} />
                  <span className="text-xs text-white font-medium hidden sm:inline">
                    {isAutoPlaying ? 'AUTO' : 'PAUSED'}
                  </span>
                </div>
              </div>


              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce delay-1000" />
            </div>
          </div>
        </div>


        {/* Popup Form Modal - Now responsive and scrollable on small screens */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-4 animate-fade-in overflow-y-auto pt-16 sm:pt-4">
            <div className="bg-white rounded-3xl max-w-md w-full animate-scale-in overflow-hidden shadow-2xl mx-auto">
              <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto webkit-scrollbar">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                    Start Your
                    <span className="block text-blue-600">Free Trial</span>
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 -mt-2 -mr-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>


                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-pointer"
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
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-pointer"
                    >
                      <option value="">Select Database Size</option>
                      <option value="small">Less than 100 GB</option>
                      <option value="medium">100 GB - 1 TB</option>
                      <option value="large">1 TB - 10 TB</option>
                      <option value="enterprise">10 TB+</option>
                    </select>
                  </div>


                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <span>Start Free Trial</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};


export default LeadHero;
