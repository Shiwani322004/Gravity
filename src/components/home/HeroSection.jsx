import React, { useState, useEffect } from 'react';
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
    return isMobile ? 'gap-3' : 'gap-5 sm:gap-6';
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
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
        .nav-button {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.3);
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 8px 15px -5px rgba(0,123,255,0.6);
        }
        .nav-button:hover:not(:disabled) {
          background: rgba(0,123,255,0.8);
          box-shadow: 0 10px 20px -5px #007bffcc;
          transform: scale(1.15);
          border-color: #00bfff;
          color: white;
        }
        .nav-button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          box-shadow: none;
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.1);
        }
      `}</style>

      {/* Background Images with Dark Overlay */}
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 sm:px-10 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-16">
        {/* Text Content */}
        <div className="max-w-full xs:max-w-xl sm:max-w-2xl lg:max-w-3xl animate-fade-in-up mt-8 xs:mt-12 sm:mt-16 lg:mt-20">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-[1.05] tracking-tight mb-4 xs:mb-6 sm:mb-8 lg:mb-10">
            We Help You
            <span className="block mt-2 xs:mt-3 bg-gradient-to-r from-[#007BFF] via-[#0099FF] to-[#00BFFF] bg-clip-text text-transparent">
              Grow Better
            </span>
          </h1>

          <div className={`relative mb-6 xs:mb-8 sm:mb-10 ${
            isMobile ? 'min-h-[90px] xs:min-h-[100px]' : 
            isTablet ? 'min-h-[110px] sm:min-h-[120px]' : 
            'min-h-[140px] lg:min-h-[160px] xl:min-h-[180px]'
          }`}>
            {slides.map((slide, idx) => (
              <p 
                key={idx}
                className={`${
                  isMobile ? 'text-sm xs:text-base' : 
                  isTablet ? 'text-base sm:text-lg' : 
                  'text-lg lg:text-xl xl:text-2xl'
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

          <div>
            <a 
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#007BFF] to-[#0099FF] text-white px-8 xs:px-10 sm:px-12 lg:px-14 py-3 xs:py-4 sm:py-5 lg:py-6 rounded-full font-bold text-sm xs:text-base sm:text-lg lg:text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#007BFF]/60 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 xs:gap-3 sm:gap-4">
                Get in Touch
                <ArrowRight className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 shimmer-effect" />
            </a>
          </div>
        </div>

        {/* Card Carousel */}
        <div className="flex flex-col items-center justify-center mt-10 sm:mt-16 mb-12">
          <div className="relative overflow-hidden w-full max-w-6xl flex justify-center">
            <div 
              className={`flex ${getCardGap()} ${isTransitioning ? 'card-carousel' : 'card-carousel-no-transition'}`}
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
                    width: isMobile ? 'clamp(140px, 45vw, 160px)' : 
                           isTablet ? 'clamp(180px, 30vw, 200px)' : 
                           'clamp(220px, 25vw, 260px)',
                    minWidth: isMobile ? 'clamp(140px, 45vw, 160px)' : 
                              isTablet ? 'clamp(180px, 30vw, 200px)' : 
                              'clamp(220px, 25vw, 260px)',
                    opacity: (isMobile && card.position === 1) ? '0.65' : 
                             (!isMobile && card.position === 2) ? '0.65' : '1',
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
                      <h3 className="text-white font-extrabold text-sm xs:text-base sm:text-lg lg:text-xl truncate">
                        {card.title}
                      </h3>
                      <p className="text-white/75 text-xs mt-1 xs:mt-1.5 sm:mt-2 hidden xs:block select-none">Explore more</p>
                    </div>
                    {card.position === 0 && (
                      <div className="absolute top-2 right-3 w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 bg-[#00BFFF] rounded-full shadow-lg shadow-[#00BFFF]/70 animate-smooth-float" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Navigation Arrows */}
          <div className="flex gap-6 mt-6">
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              aria-label="Previous Slide"
              className="nav-button w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center shadow-md"
            >
              <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              aria-label="Next Slide"
              className="nav-button w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center shadow-md"
            >
              <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            </button>
          </div>
        </div>

        {/* Progress Bars - Bottom Center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 lg:gap-4 animate-fade-in px-6">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className="w-8 sm:w-10 md:w-14 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
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
  );
};

export default HeroSection;
