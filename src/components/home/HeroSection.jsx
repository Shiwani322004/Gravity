import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    text: "Transform your digital presence with cutting-edge marketing strategies that drive real results. Our expert team crafts personalized campaigns that resonate with your audience and deliver measurable outcomes.",
    image: "/images/hero1.png",
    accent: "#007BFF",
    title: "Digital Marketing"
  },
  {
    text: "Elevate your brand with innovative solutions designed to capture attention and engage your audience. We leverage the latest technologies and marketing trends to create compelling experiences that convert.",
    image: "/images/hero2.png",
    accent: "#0099FF",
    title: "Brand Innovation"
  },
  {
    text: "Drive growth and maximize your ROI with data-driven strategies tailored to your business goals. Our analytics-focused approach ensures every marketing dollar is optimized for maximum impact.",
    image: "/images/herodemo3.png",
    accent: "#0088EE",
    title: "Growth Strategy"
  },
  {
    text: "Unlock new opportunities and reach your target market with our comprehensive digital marketing services. We specialize in identifying untapped potential and creating pathways to connect with your ideal customers.",
    image: "/images/hero4.png",
    accent: "#0077DD",
    title: "Market Reach"
  }
];

const HeroSection = () => {
  const TRANSITION_DELAY = 5000; // 5 seconds per card
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
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentSlide]);

  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 480) return 140; // Small mobile
      if (width < 640) return 160; // Mobile
      if (width < 768) return 170; // Large mobile
      if (width < 1024) return 180; // Tablet
      if (width < 1280) return 200; // Small desktop
      if (width < 1536) return 220; // Desktop
      return 240; // Large desktop
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
    setOffset(-slideDistance);
    
    setTimeout(() => {
      setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
      setOffset(0);
      setIsTransitioning(false);
    }, 700);
  };

  const handleNavigationClick = (index) => {
    if (index === currentSlide) return;
    handleNext();
  };

  const getVisibleCards = () => {
    const visible = [];
    const cardsToShow = isMobile ? 2 : 3; // Show 2 cards on mobile, 3 on larger screens
    
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
    return isMobile ? 'gap-2' : 'gap-3 sm:gap-4';
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes smoothFloat {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-5px);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite;
        }
        .animate-smooth-float { 
          animation: smoothFloat 3s ease-in-out infinite; 
        }
        .card-carousel {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-carousel-no-transition {
          transition: none;
        }
      `}</style>

      {/* Full Screen Background Image with Dark Overlay */}
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
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 xs:py-6 sm:py-8 lg:py-10 xl:py-12">
        
        {/* Top Left - Text Content */}
        <div className="max-w-full xs:max-w-xl sm:max-w-2xl lg:max-w-3xl animate-fade-in-up mt-8 xs:mt-12 sm:mt-16 lg:mt-20">
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-3 xs:mb-4 sm:mb-6 lg:mb-8">
            We Help You
            <span className="block mt-1 xs:mt-2 bg-gradient-to-r from-[#007BFF] via-[#0099FF] to-[#00BFFF] bg-clip-text text-transparent">
              Grow Better
            </span>
          </h1>

          {/* Sliding Description Text */}
          <div className={`relative mb-4 xs:mb-6 sm:mb-8 ${
            isMobile ? 'min-h-[80px] xs:min-h-[90px]' : 
            isTablet ? 'min-h-[100px] sm:min-h-[110px]' : 
            'min-h-[120px] lg:min-h-[140px] xl:min-h-[160px]'
          }`}>
            {slides.map((slide, idx) => (
              <p 
                key={idx}
                className={`${
                  isMobile ? 'text-xs xs:text-sm' : 
                  isTablet ? 'text-sm sm:text-base' : 
                  'text-base lg:text-lg xl:text-xl'
                } text-white/85 leading-relaxed absolute inset-0 transition-all duration-700 ${
                  idx === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                {slide.text}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <a 
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 xs:gap-3 bg-gradient-to-r from-[#007BFF] to-[#0099FF] text-white px-5 xs:px-6 sm:px-8 lg:px-10 py-2 xs:py-3 sm:py-4 lg:py-5 rounded-full font-bold text-xs xs:text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#007BFF]/50 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1 xs:gap-2 sm:gap-3">
                Get in Touch
                <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 shimmer-effect" />
            </a>
          </div>
        </div>

        {/* Bottom Right - Shifting Card Carousel with Navigation Arrows */}
        <div className="flex flex-col items-center sm:items-end justify-center sm:justify-end animate-fade-in mt-6 xs:mt-8 sm:mt-0" style={{ animationDelay: '0.3s', marginBottom: isMobile ? '-10px' : '-20px' }}>
          
          {/* Card Carousel and Arrows Container */}
          <div className="relative w-full sm:w-auto flex flex-col items-center sm:items-end">
            {/* Card Carousel Container */}
            <div className="relative overflow-hidden w-full sm:w-auto flex justify-center sm:justify-end" style={{ maxWidth: '100%' }}>
              <div 
                className={`flex ${getCardGap()} ${isTransitioning ? 'card-carousel' : 'card-carousel-no-transition'}`}
                style={{
                  transform: `translateX(${offset}px)`,
                }}
              >
                {getVisibleCards().map((card, idx) => (
                  <div
                    key={`card-${card.originalIndex}-${idx}`}
                    onClick={() => handleNavigationClick(card.originalIndex)}
                    className={`flex-shrink-0 cursor-pointer group transition-all duration-300 ${
                      card.position === 0 
                        ? 'animate-smooth-float' 
                        : 'hover:scale-100'
                    }`}
                    style={{ 
                      animationDelay: `${idx * 0.1}s`,
                      width: isMobile ? 'clamp(120px, 45vw, 160px)' : 
                             isTablet ? 'clamp(150px, 30vw, 180px)' : 
                             'clamp(180px, 25vw, 240px)',
                      minWidth: isMobile ? 'clamp(120px, 45vw, 160px)' : 
                                isTablet ? 'clamp(150px, 30vw, 180px)' : 
                                'clamp(180px, 25vw, 240px)',
                      opacity: (isMobile && card.position === 1) ? '0.6' : 
                              (!isMobile && card.position === 2) ? '0.6' : '1',
                      transform: `scale(${card.position === 0 ? 1 : 0.95})`
                    }}
                  >
                    <div className={`relative w-full ${getCardHeight()} rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
                      card.position === 0
                        ? 'border-2 border-[#00BFFF] shadow-2xl shadow-[#007BFF]/50 ring-2 ring-[#00BFFF]/30' 
                        : 'border border-white/30 hover:border-white/50'
                    }`}>
                      {/* Card Image */}
                      <img 
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Accent Glow */}
                      <div 
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          card.position === 0 ? 'opacity-40' : 'opacity-20 group-hover:opacity-30'
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${card.accent}50, transparent 60%)`
                        }}
                      />
                      
                      {/* Card Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4">
                        <h3 className="text-white font-bold text-xs xs:text-sm sm:text-base lg:text-lg truncate">
                          {card.title}
                        </h3>
                        <p className="text-white/70 text-xs mt-0.5 xs:mt-1 hidden xs:block">Explore more</p>
                      </div>

                      {/* Active Indicator */}
                      {card.position === 0 && (
                        <div className="absolute top-1.5 xs:top-2 sm:top-3 right-1.5 xs:right-2 sm:right-3 w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 bg-[#00BFFF] rounded-full shadow-lg shadow-[#00BFFF]/50 animate-smooth-float" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className={`flex gap-1.5 xs:gap-2 sm:gap-3 mt-3 xs:mt-4 ${
              isMobile ? 'justify-center w-full' : ''
            }`} style={!isMobile ? { 
              marginRight: `calc(${isTablet ? 'clamp(150px, 30vw, 180px)' : 'clamp(180px, 25vw, 240px)'} / 2 + ${isTablet ? '8px' : '12px'} - 20px)` 
            } : {}}>
              <button
                onClick={handlePrevious}
                disabled={isTransitioning}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={isTransitioning}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bars - Bottom Center */}
        <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 xs:gap-1.5 sm:gap-2 lg:gap-3 animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-16 h-0.5 xs:h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
            >
              <div 
                className={`h-full bg-gradient-to-r from-[#007BFF] to-[#00BFFF] transition-all ${
                  idx === currentSlide ? 'w-full' : idx < currentSlide ? 'w-full' : 'w-0'
                }`}
                style={{
                  transition: idx === currentSlide ? `width ${TRANSITION_DELAY}ms linear` : 'width 0.3s ease'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;