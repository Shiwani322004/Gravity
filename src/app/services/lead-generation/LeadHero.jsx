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
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    leadGoal: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-play carousel
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

  // Mouse move effect for parallax
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

  // Enhanced popup close handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if popup is open and click is outside
      if (showPopup && popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showPopup) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      // Add event listeners with capture phase to prevent bubbling issues
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('keydown', handleEscapeKey, true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscapeKey, true);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

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

  // Enhanced close popup function
  const closePopup = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowPopup(false);
    setFormErrors({});
    setFocusedField(null);
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.company.trim()) errors.company = 'Company is required';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.industry) errors.industry = 'Industry is required';
    if (!formData.leadGoal) errors.leadGoal = 'Lead goal is required';
    if (!formData.budget) errors.budget = 'Budget is required';

    return errors;
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPopup(false);
      
      // Success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-[9999] flex items-center gap-3 animate-slide-in';
      notification.innerHTML = `
        <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span>Success! We'll contact you within 24 hours.</span>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 5000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        leadGoal: '',
        budget: ''
      });
      setFormErrors({});
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
          0%, 100% { box-shadow: 0 0 20px rgba(0, 132, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 132, 255, 0.6); }
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
        @keyframes popup-in {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-slide-in { animation: slide-in 0.5s ease-out; }
        .animate-popup-in { animation: popup-in 0.3s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        
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
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }
        
        .glass-morphism {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .input-focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.02);
        }
        
        .error-input {
          border-color: rgba(239, 68, 68, 0.8);
          background: rgba(239, 68, 68, 0.1);
        }
        
        /* Responsive improvements */
        @media (max-width: 640px) {
          .responsive-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .responsive-text {
            font-size: 0.875rem;
          }
          
          .responsive-padding {
            padding: 1rem;
          }
          
          .responsive-spacing {
            gap: 0.75rem;
          }
        }
        
        @media (max-width: 768px) {
          .tablet-hide {
            display: none;
          }
          
          .mobile-center {
            text-align: center;
          }
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative min-h-screen py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-[#082540] via-[#0A2B4F] to-[#1e40af] text-white overflow-hidden"
      >
        {/* Enhanced Background Effects */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Enhanced Content - Mobile First */}
            <div className={`space-y-6 sm:space-y-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Main Heading - Responsive */}
              <div className="space-y-4 sm:space-y-6 mobile-center">
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
              
              {/* Responsive Stats Grid */}
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

              {/* Responsive Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#007BFF] to-[#00A3FF] hover:from-[#00A3FF] hover:to-[#0066CC] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative">Start Generating Leads</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6 sm:pt-8 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} mobile-center`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-blue-200 text-sm font-medium">No credit card required</span>
                </div>
              </div>
            </div>

            {/* Enhanced Responsive Image Carousel */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} order-first lg:order-last`}>
              
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

                {/* Responsive Navigation Controls */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mx-auto group-hover:-translate-x-0.5 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50 group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 mx-auto group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>

                {/* Enhanced Progress Indicators */}
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
                      aria-label={`Go to image ${index + 1}`}
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
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce delay-1000" />
            </div>
          </div>
        </div>

        {/* Enhanced Popup Form Modal */}
        {showPopup && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] animate-fadeIn"
            onClick={closePopup}
          >
            <div 
              ref={popupRef}
              className="relative bg-gradient-to-br from-[#0A1628] via-[#1e3a8a] via-[#3b82f6] to-[#0084FF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white overflow-hidden animate-popup-in max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-pulse-glow"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center z-10"
                aria-label="Close popup"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
                    radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px),
                    linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                  `,
                  backgroundSize: '50px 50px, 25px 25px, 100px 100px',
                }}></div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-30 animate-float"></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
              </div>

              <div className="relative z-10">
                {/* Enhanced Form Header */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 leading-tight mobile-center">
                    Get Your Custom Growth Strategy
                    <span className="block bg-gradient-to-r from-[#00D4FF] via-[#00A3FF] to-[#FFFFFF] bg-clip-text text-transparent animate-gradient text-xl sm:text-2xl lg:text-3xl mt-1">
                      Free Consultation
                    </span>
                  </h3>
                </div>

                {/* Enhanced Responsive Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="responsive-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full glass-morphism rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-blue-200 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                          focusedField === 'name' ? 'input-focus' : ''
                        } ${formErrors.name ? 'error-input' : ''}`}
                        required
                      />
                      {formErrors.name && (
                        <div className="absolute -bottom-5 left-0 text-red-400 text-xs">{formErrors.name}</div>
                      )}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 pointer-events-none ${
                        focusedField === 'name' ? 'opacity-20' : ''
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
                        className={`w-full glass-morphism rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-blue-200 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                          focusedField === 'email' ? 'input-focus' : ''
                        } ${formErrors.email ? 'error-input' : ''}`}
                        required
                      />
                      {formErrors.email && (
                        <div className="absolute -bottom-5 left-0 text-red-400 text-xs">{formErrors.email}</div>
                      )}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 pointer-events-none ${
                        focusedField === 'email' ? 'opacity-20' : ''
                      }`}></div>
                    </div>
                  </div>

                  <div className="responsive-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name *"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full glass-morphism rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-blue-200 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                          focusedField === 'company' ? 'input-focus' : ''
                        } ${formErrors.company ? 'error-input' : ''}`}
                        required
                      />
                      {formErrors.company && (
                        <div className="absolute -bottom-5 left-0 text-red-400 text-xs">{formErrors.company}</div>
                      )}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 transition-opacity duration-300 pointer-events-none ${
                        focusedField === 'company' ? 'opacity-20' : ''
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
                        className={`w-full glass-morphism rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-blue-200 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                          focusedField === 'phone' ? 'input-focus' : ''
                        } ${formErrors.phone ? 'error-input' : ''}`}
                        required
                      />
                      {formErrors.phone && (
                        <div className="absolute -bottom-5 left-0 text-red-400 text-xs">{formErrors.phone}</div>
                      )}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 pointer-events-none ${
                        focusedField === 'phone' ? 'opacity-20' : ''
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
                      className={`w-full glass-morphism rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                        focusedField === 'industry' ? 'input-focus' : ''
                      } ${formErrors.industry ? 'error-input' : ''}`}
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
                    {formErrors.industry && (
                      <div className="absolute -bottom-5 left-0 text-red-400 text-xs">{formErrors.industry}</div>
                    )}
                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'industry' ? 'opacity-20' : ''
                    }`}></div>
                  </div>

                  <div className="responsive-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <select
                        name="leadGoal"
                        value={formData.leadGoal}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('leadGoal')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full glass-morphism rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                          focusedField === 'leadGoal' ? 'input-focus' : ''
                        } ${formErrors.leadGoal ? 'error-input' : ''}`}
                        required
                      >
                        <option value="" className="text-gray-800">Monthly Lead Goal *</option>
                        <option value="50-100" className="text-gray-800">50-100 leads</option>
                        <option value="100-250" className="text-gray-800">100-250 leads</option>
                        <option value="250-500" className="text-gray-800">250-500 leads</option>
                        <option value="500-1000" className="text-gray-800">500-1000 leads</option>
                        <option value="1000+" className="text-gray-800">1000+ leads</option>
                      </select>
                      {formErrors.leadGoal && (
                        <div className="absolute -bottom-5 left-0 text-red-400 text-xs">{formErrors.leadGoal}</div>
                      )}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 transition-opacity duration-300 pointer-events-none ${
                        focusedField === 'leadGoal' ? 'opacity-20' : ''
                      }`}></div>
                    </div>

                    <div className="relative group">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full glass-morphism rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                          focusedField === 'budget' ? 'input-focus' : ''
                        } ${formErrors.budget ? 'error-input' : ''}`}
                        required
                      >
                        <option value="" className="text-gray-800">Monthly Budget *</option>
                        <option value="5k-10k" className="text-gray-800">$5K - $10K</option>
                        <option value="10k-25k" className="text-gray-800">$10K - $25K</option>
                        <option value="25k-50k" className="text-gray-800">$25K - $50K</option>
                        <option value="50k-100k" className="text-gray-800">$50K - $100K</option>
                        <option value="100k+" className="text-gray-800">$100K+</option>
                      </select>
                      {formErrors.budget && (
                        <div className="absolute -bottom-5 left-0 text-red-400 text-xs">{formErrors.budget}</div>
                      )}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 transition-opacity duration-300 pointer-events-none ${
                        focusedField === 'budget' ? 'opacity-20' : ''
                      }`}></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-white via-blue-50 to-white text-[#0A1628] hover:from-gray-50 hover:via-blue-100 hover:to-gray-50 px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed animate-gradient shimmer-effect"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 sm:border-3 border-[#0A1628] border-t-transparent rounded-full animate-spin"></div>
                          <span className="responsive-text">Processing Your Request...</span>
                        </>
                      ) : (
                        <>
                          <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="responsive-text">Get Free Strategy Session</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>

                  {/* Trust indicators */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-blue-200 text-xs sm:text-sm mt-4 responsive-spacing">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>24h Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>No Spam</span>
                    </div>
                  </div>
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
