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
      if (window.innerWidth < 640) return 160; // Mobile
      if (window.innerWidth < 1024) return 180; // Tablet
      return 220; // Desktop - card width + gap
    }
    return 220;
  };

  const handleNext = () => {
    setIsTransitioning(true);
    const slideDistance = getCardWidth();
    setOffset(-slideDistance); // Slide left by card width + gap
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setOffset(0); // Reset position instantly
      setIsTransitioning(false);
    }, 700); // Match CSS transition duration
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

  // Get visible cards: current, next, and the one after
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % slides.length;
      visible.push({
        ...slides[index],
        originalIndex: index,
        position: i
      });
    }
    return visible;
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
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 lg:py-10 xl:py-12">
        
        {/* Top Left - Text Content */}
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-4 sm:mb-6 lg:mb-8">
            We Help You
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#007BFF] via-[#0099FF] to-[#00BFFF] bg-clip-text text-transparent">
              Grow Better
            </span>
          </h1>

          {/* Sliding Description Text */}
          <div className="relative min-h-[80px] xs:min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] mb-4 sm:mb-6 lg:mb-8">
            {slides.map((slide, idx) => (
              <p 
                key={idx}
                className={`text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-white/85 leading-relaxed absolute inset-0 transition-all duration-700 ${
                  idx === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                {slide.text}
              </p>
            ))}
          </div>

          {/* CTA Button - Komodo Style - Linked to Contact */}
          <div>
            <a 
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#007BFF] to-[#0099FF] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#007BFF]/50 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                Explore
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 shimmer-effect" />
            </a>
          </div>
        </div>

        {/* Bottom Right - Shifting Card Carousel with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end gap-3 sm:gap-4 animate-fade-in mt-8 sm:mt-0" style={{ animationDelay: '0.3s' }}>
          
          {/* Card Carousel Container - Shows 2 full + 1 partial */}
          <div className="relative overflow-hidden pb-2 w-full sm:w-auto order-2 sm:order-1" style={{ maxWidth: '100%' }}>
            <div 
              className={`flex gap-3 sm:gap-4 ${isTransitioning ? 'card-carousel' : 'card-carousel-no-transition'}`}
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
                    width: 'clamp(140px, 40vw, 200px)',
                    minWidth: 'clamp(140px, 40vw, 200px)',
                    opacity: card.position === 2 ? '0.6' : '1',
                    transform: `scale(${card.position === 0 ? 1 : 0.95})`
                  }}
                >
                  <div className={`relative w-full h-44 xs:h-48 sm:h-52 lg:h-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
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
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg">{card.title}</h3>
                      <p className="text-white/70 text-xs sm:text-sm mt-0.5 sm:mt-1">Explore more</p>
                    </div>

                    {/* Active Indicator */}
                    {card.position === 0 && (
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#00BFFF] rounded-full shadow-lg shadow-[#00BFFF]/50 animate-smooth-float" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 sm:gap-3 order-1 sm:order-2 mb-0 sm:mb-4">
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>

        {/* Progress Bars - Bottom Center */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 lg:gap-3 animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className="w-8 xs:w-10 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
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