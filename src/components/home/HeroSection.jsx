import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Target, FileText, Mail, Users, Phone, Database, BarChart3, Truck, DollarSign } from 'lucide-react';

const slides = [
  {
    text: "Transform your digital presence with cutting-edge marketing strategies that drive real results. Our expert team crafts personalized campaigns that resonate with your audience and deliver measurable outcomes.",
    image: "/images/h1.png",
    accent: "#007BFF",
    title: "Digital Marketing",
  },
  {
    text: "Elevate your brand with innovative solutions designed to capture attention and engage your audience. We leverage the latest technologies and marketing trends to create compelling experiences that convert.",
    image: "/images/h2.png",
    accent: "#0099FF",
    title: "Brand Innovation",
  },
  {
    text: "Drive growth and maximize your ROI with data-driven strategies tailored to your business goals. Our analytics-focused approach ensures every marketing dollar is optimized for maximum impact.",
    image: "/images/h4.png",
    accent: "#0088EE",
    title: "Growth Strategy",
  },
  {
    text: "Unlock new opportunities and reach your target market with our comprehensive digital marketing services. We specialize in identifying untapped potential and creating pathways to connect with your ideal customers.",
    image: "/images/hero4.png",
    accent: "#0077DD",
    title: "Market Reach",
  }
];

const services = [
  { name: 'Lead Generation', link: '/services/lead-generation', icon: Target },
  { name: 'Content Syndication', link: '/services/content-syndication', icon: FileText },
  { name: 'Email Marketing', link: '/services/email-marketing', icon: Mail },
  { name: 'Account-Based Marketing', link: '/services/account-based-marketing', icon: Users }
];

const categories = [
  { name: 'Phone System', link: '/categories/phone-system', icon: Phone },
  { name: 'CRM System', link: '/categories/crm-system', icon: Database },
  { name: 'Business Intelligence', link: '/categories/business-intelligence', icon: BarChart3 },
  { name: 'GPS Fleet Management Software', link: '/categories/gps-fleet', icon: Truck },
  { name: 'Payroll Software', link: '/categories/payroll-software', icon: DollarSign }
];

const HeroSection = () => {
  const TRANSITION_DELAY = 5000;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, TRANSITION_DELAY);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const img = new window.Image();
    img.src = slides[nextIndex].image;
  }, [currentSlide]);

  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 480) return 140;
      if (width < 640) return 160;
      if (width < 768) return 170;
      if (width < 1024) return 180;
      if (width < 1280) return 200;
      if (width < 1536) return 220;
      return 240;
    }
    return 220;
  };

  const handleNext = () => {
    setIsTransitioning(true);
    const slideDistance = getCardWidth();
    setOffset(-slideDistance);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setOffset(0);
      setIsTransitioning(false);
    }, 700);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    const slideDistance = getCardWidth();
    setOffset(slideDistance);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setOffset(0);
      setIsTransitioning(false);
    }, 700);
  };

  const handleNavigationClick = (index) => {
    if (index === currentSlide) return;
    if (index > currentSlide) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  const getVisibleCards = () => {
    const visible = [];
    const cardsToShow = isMobile ? 2 : 3;
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentSlide + i) % slides.length;
      visible.push({
        ...slides[index],
        originalIndex: index,
        position: i
      });
    }
    return visible;
  };

  const getCardHeight = () => {
    if (isMobile) return 'h-36 xs:h-40';
    if (isTablet) return 'h-44 sm:h-48';
    return 'h-52 lg:h-56 xl:h-60';
  };

  const getCardGap = () => {
    return isMobile ? 'gap-3' : 'gap-5 sm:gap-6';
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; }}
        @keyframes smoothFloat { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-5px);}}
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite;
        }
        .animate-smooth-float { animation: smoothFloat 3s ease-in-out infinite; }
        .card-carousel { transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);}
        .card-carousel-no-transition { transition: none; }
        .nav-button {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.3);
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 8px 15px -5px rgba(0,123,255,0.6);}
        .nav-button:hover:not(:disabled) {
          background: rgba(0,123,255,0.8);
          box-shadow: 0 10px 20px -5px #007bffcc;
          transform: scale(1.15);
          border-color: #00bfff;}
        .nav-button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          box-shadow: none;
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.1);}
        .service-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-btn:hover {
          transform: translateX(8px);
        }
        .service-icon {
          transition: all 0.3s ease;
        }
        .service-btn:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* 3D Card Styles */
        .card-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
          animation: float3d 6s ease-in-out infinite;
        }
        .card-3d-inner {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .card-3d:hover .card-3d-inner {
          transform: rotateY(-8deg) rotateX(5deg) translateZ(20px);
        }
        .card-3d::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(0, 123, 255, 0.3), transparent 70%);
          transform: translate(-50%, -50%) translateZ(-50px);
          border-radius: 1.5rem;
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }
        .card-3d:hover::before {
          opacity: 1;
        }
        .card-3d-content {
          transform: translateZ(30px);
        }
        .card-shadow-3d {
          box-shadow: 
            0 20px 40px -15px rgba(0, 123, 255, 0.4),
            0 30px 60px -30px rgba(0, 191, 255, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }
        .card-3d:hover .card-shadow-3d {
          box-shadow: 
            0 30px 60px -15px rgba(0, 123, 255, 0.6),
            0 40px 80px -30px rgba(0, 191, 255, 0.5),
            inset 0 1px 2px rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* BG Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
          </div>
        ))}
      </div>

      {/* Main Flex Row (Content and Sidebar) */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row justify-between items-start px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-20">
        {/* Main Content - Left Aligned */}
        <div className="w-full lg:flex-1 animate-fade-in-up mt-8 lg:mt-12 xl:mt-20">
          <div className="max-w-full lg:max-w-2xl xl:max-w-3xl w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6 sm:mb-10">
              We Help You
              <span className="block mt-3 bg-gradient-to-r from-[#007BFF] via-[#0099FF] to-[#00BFFF] bg-clip-text text-transparent">
                Grow Better
              </span>
            </h1>
            <div className={`relative mb-6 sm:mb-10 ${isMobile ? 'min-h-[90px] xs:min-h-[100px]' : isTablet ? 'min-h-[110px] sm:min-h-[120px]' : 'min-h-[140px] lg:min-h-[160px] xl:min-h-[180px]'}`}>
              {slides.map((slide, idx) => (
                <p 
                  key={idx}
                  className={`${
                    isMobile ? 'text-sm xs:text-base' : isTablet ? 'text-base sm:text-lg' : 'text-lg lg:text-xl xl:text-2xl'
                  } text-white/90 leading-relaxed absolute inset-0 transition-all duration-700 ${
                    idx === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-full'
                  }`}
                >
                  {slide.text}
                </p>
              ))}
            </div>
            <a 
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#007BFF] to-[#0099FF] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg xl:text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#007BFF]/60 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get in Touch
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 shimmer-effect" />
            </a>
          </div>

          {/* Carousel - Centered */}
          <div className="flex flex-col items-center mt-10 sm:mt-16 mb-12 w-full">
            <div className="relative overflow-hidden w-full max-w-2xl">
              <div 
                className={`flex justify-center ${isMobile ? 'gap-3' : 'gap-5 sm:gap-6'} ${isTransitioning ? 'card-carousel' : 'card-carousel-no-transition'}`}
                style={{ transform: `translateX(${offset}px)` }}
              >
                {getVisibleCards().map((card, idx) => (
                  <div
                    key={`card-${card.originalIndex}-${idx}`}
                    onClick={() => handleNavigationClick(card.originalIndex)}
                    className={`flex-shrink-0 cursor-pointer group transition-transform duration-300 ${
                      card.position === 0 
                        ? 'animate-smooth-float' 
                        : 'hover:scale-105'
                    }`}
                    style={{ 
                      animationDelay: `${idx * 0.1}s`,
                      width: isMobile ? 'clamp(140px, 45vw, 160px)' : isTablet ? 'clamp(180px, 30vw, 200px)' : 'clamp(220px, 25vw, 260px)',
                      minWidth: isMobile ? 'clamp(140px, 45vw, 160px)' : isTablet ? 'clamp(180px, 30vw, 200px)' : 'clamp(220px, 25vw, 260px)',
                      opacity: (isMobile && card.position === 1) ? '0.65' : (!isMobile && card.position === 2) ? '0.65' : '1',
                      transform: `scale(${card.position === 0 ? 1 : 0.95})`
                    }}
                  >
                    <div className={`relative w-full ${getCardHeight()} rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                      card.position === 0
                        ? 'border-4 border-[#00BFFF] shadow-[#007BFF]/70 ring-4 ring-[#00BFFF]/50' 
                        : 'border-2 border-white/30 hover:border-white/60'
                    }`}>
                      <img 
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div 
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          card.position === 0 ? 'opacity-50' : 'opacity-25 group-hover:opacity-40'
                        }`}
                        style={{ background: `linear-gradient(135deg, ${card.accent}80, transparent 65%)` }}
                      />
                      <div className="absolute bottom-3 left-3 right-3 px-3">
                        <h3 className="text-white font-extrabold text-sm xs:text-base sm:text-lg lg:text-xl truncate">{card.title}</h3>
                        <p className="text-white/75 text-xs mt-1 xs:mt-1.5 sm:mt-2 hidden xs:block select-none">Explore more</p>
                      </div>
                      {card.position === 0 && (
                        <div className="absolute top-2 right-3 w-4 h-4 bg-[#00BFFF] rounded-full shadow-lg shadow-[#00BFFF]/70 animate-smooth-float" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons - Centered */}
            <div className="flex gap-6 mt-6 justify-center">
              <button
                onClick={handlePrevious}
                disabled={isTransitioning}
                aria-label="Previous Slide"
                className="nav-button w-14 h-14 rounded-full flex items-center justify-center shadow-md"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={handleNext}
                disabled={isTransitioning}
                aria-label="Next Slide"
                className="nav-button w-14 h-14 rounded-full flex items-center justify-center shadow-md"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            {/* Progress Bars - Centered */}
            <div className="flex gap-2 mt-6 justify-center">
              {slides.map((_, idx) => (
                <div 
                  key={idx} 
                  className="w-8 sm:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
                >
                  <div 
                    className={`h-full bg-gradient-to-r from-[#007BFF] to-[#00BFFF] transition-all ${
                      idx === currentSlide ? 'w-full' : idx < currentSlide ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      transition: idx === currentSlide ? `width ${TRANSITION_DELAY}ms linear` : 'width 0.4s ease'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar CARDS with 3D Effect */}
        <div className="flex flex-col gap-7 mt-10 lg:mt-0 w-full lg:w-[360px] xl:w-[420px] items-center lg:items-end z-50">
          {/* Services Card with 3D */}
          <div className="card-3d w-full max-w-xs lg:max-w-none" style={{ animationDelay: '0s' }}>
            <div className="card-3d-inner">
              <div className="card-3d-content bg-white/20 backdrop-blur-2xl rounded-3xl card-shadow-3d border border-blue-100/20 p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white/25">
                <div className="text-blue-300 font-bold text-xl mb-2 tracking-wide">Our Services</div>
                <ul className="flex flex-col gap-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.name}>
                        <a
                          href={service.link}
                          className="service-btn flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 group"
                        >
                          <span className="service-icon w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg border border-white/30 flex-shrink-0 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </span>
                          <span className="text-white/95 font-medium text-base group-hover:text-white">{service.name}</span>
                          <ArrowRight className="w-4 h-4 text-white/60 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Categories Card with 3D */}
          <div className="card-3d w-full max-w-xs lg:max-w-none" style={{ animationDelay: '0.3s' }}>
            <div className="card-3d-inner">
              <div className="card-3d-content bg-white/20 backdrop-blur-2xl rounded-3xl card-shadow-3d border border-purple-100/20 p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white/25">
                <div className="text-purple-300 font-bold text-xl mb-2 tracking-wide">Categories</div>
                <ul className="flex flex-col gap-3">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <li key={category.name}>
                        <a
                          href={category.link}
                          className="service-btn flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 group"
                        >
                          <span className="service-icon w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 shadow-lg border border-white/30 flex-shrink-0 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </span>
                          <span className="text-white/95 font-medium text-sm group-hover:text-white">{category.name}</span>
                          <ArrowRight className="w-4 h-4 text-white/60 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;