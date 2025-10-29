import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link'; // If using Next.js
// If using React Router: import { Link } from 'react-router-dom';

const slides = [
  {
    text: "Transform your digital presence with cutting-edge marketing strategies that drive real results. Our expert team crafts personalized campaigns that resonate with your audience and deliver measurable outcomes.",
    image: "/images/hero1.png",
    accent: "#007BFF"
  },
  {
    text: "Elevate your brand with innovative solutions designed to capture attention and engage your audience. We leverage the latest technologies and marketing trends to create compelling experiences that convert.",
    image: "/images/hero2.png",
    accent: "#0099FF"
  },
  {
    text: "Drive growth and maximize your ROI with data-driven strategies tailored to your business goals. Our analytics-focused approach ensures every marketing dollar is optimized for maximum impact.",
    image: "/images/herodemo3.png",
    accent: "#0088EE"
  },
  {
    text: "Unlock new opportunities and reach your target market with our comprehensive digital marketing services. We specialize in identifying untapped potential and creating pathways to connect with your ideal customers.",
    image: "/images/hero4.png",
    accent: "#0077DD"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideTransition();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 300);
  };

  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentSlide]);

  // Smooth continuous movement
  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (isHovering) return;
      
      const time = Date.now() * 0.001;
      setMousePos({
        x: Math.sin(time * 0.8) * 0.4 + Math.sin(time * 1.2) * 0.2,
        y: Math.cos(time * 0.6) * 0.3 + Math.cos(time * 0.9) * 0.1
      });
    }, 50);

    return () => clearInterval(moveInterval);
  }, [isHovering]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleNavigationClick = (index) => {
    if (index === currentSlide) return;
    handleSlideTransition();
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen bg-[#082540] overflow-hidden">
      <style jsx>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(180px) rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes smoothFloat {
          0%, 100% { 
            transform: 
              perspective(1200px) 
              rotateY(-1.5deg) 
              rotateX(0.8deg) 
              translateY(0px)
              scale(1.02);
          }
          33% { 
            transform: 
              perspective(1200px) 
              rotateY(1deg) 
              rotateX(-0.5deg) 
              translateY(-3px)
              scale(1.015);
          }
          66% { 
            transform: 
              perspective(1200px) 
              rotateY(-0.5deg) 
              rotateX(1.2deg) 
              translateY(2px)
              scale(1.025);
          }
        }
        @keyframes elegantFlip {
          0% {
            transform: 
              perspective(1200px) 
              rotateY(0deg) 
              scale(1);
            opacity: 1;
          }
          49% {
            transform: 
              perspective(1200px) 
              rotateY(90deg) 
              scale(0.95);
            opacity: 0.7;
          }
          51% {
            transform: 
              perspective(1200px) 
              rotateY(-90deg) 
              scale(0.95);
            opacity: 0.7;
          }
          100% {
            transform: 
              perspective(1200px) 
              rotateY(0deg) 
              scale(1);
            opacity: 1;
          }
        }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .animate-orbit-reverse { animation: orbitReverse 25s linear infinite; }
        .animate-pulse-custom { animation: pulse 3s ease-in-out infinite; }
        .animate-fade-slide { animation: fadeSlide 0.8s ease-out forwards; }
        .animate-smooth-float { animation: smoothFloat 8s ease-in-out infinite; }
        .animate-elegant-flip { animation: elegantFlip 0.6s ease-in-out; }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .text-reveal {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          animation: fadeSlide 1s ease-out forwards;
        }
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .transform-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Simplified Orbital Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit">
            <div className="w-4 h-4 bg-[#007BFF] rounded-full shadow-lg shadow-[#007BFF]/50 animate-pulse-custom"></div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit-reverse" style={{ animationDelay: '-5s' }}>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,123,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Content */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-slide">
            {/* Main Heading */}
            <div className="text-reveal">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                We Help You
                <span className="block mt-2 bg-gradient-to-r from-[#007BFF] to-[#00BFFF] bg-clip-text text-transparent">
                  Grow Better
                </span>
              </h1>
            </div>

            {/* Sliding Text Content */}
            <div className="relative min-h-[140px]">
              {slides.map((slide, idx) => (
                <p 
                  key={idx}
                  className={`text-lg text-white/70 leading-relaxed absolute inset-0 transition-all duration-700 ${
                    idx === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : idx < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  {slide.text}
                </p>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <div key={idx} className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-[#007BFF] transition-all duration-300 ${
                      idx === currentSlide ? 'w-full' : idx < currentSlide ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      transition: idx === currentSlide ? 'width 6s linear' : 'width 0.3s ease'
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* CTA Button with Link */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Option 1: Using Next.js Link (recommended for Next.js) */}
              <Link href="/contact" className="group relative bg-[#007BFF] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#007BFF]/50 hover:-translate-y-1 overflow-hidden block">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 shimmer-effect"></div>
              </Link>

              
            </div>
          </div>

          {/* Right Side - Smooth 3D Image Card */}
          <div 
            className="relative animate-fade-slide transform-3d"
            style={{ animationDelay: '0.3s' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Image Container with Smooth Movements */}
            <div 
              className={`relative transition-all duration-700 ease-out transform-3d ${
                isTransitioning 
                  ? 'animate-elegant-flip' 
                  : !isHovering 
                  ? 'animate-smooth-float' 
                  : ''
              }`}
              style={{
                transform: isHovering && !isTransitioning
                  ? `perspective(1200px) 
                     rotateY(${mousePos.x * 8}deg) 
                     rotateX(${-mousePos.y * 6}deg) 
                     scale(1.03)
                     translateZ(30px)`
                  : `perspective(1200px) 
                     rotateY(${mousePos.x * 3}deg) 
                     rotateX(${-mousePos.y * 2}deg) 
                     scale(1.02)
                     translateZ(20px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Smooth Glow Effect */}
              <div 
                className="absolute -inset-6 bg-gradient-to-r from-[#007BFF]/30 via-[#00BFFF]/20 to-[#007BFF]/30 rounded-3xl blur-3xl transition-all duration-1000"
                style={{
                  transform: isHovering ? 'translateZ(-40px) scale(1.05)' : 'translateZ(-30px) scale(1)',
                  opacity: isHovering ? 0.7 : 0.5
                }}
              ></div>

              {/* 3D Image Card */}
              <div 
                className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl h-[500px] lg:h-[600px] backdrop-blur-sm transform-3d transition-all duration-700"
                style={{
                  transform: isHovering ? 'translateZ(25px)' : 'translateZ(15px)',
                  boxShadow: isHovering 
                    ? '0 25px 50px -12px rgba(0, 123, 255, 0.3), 0 0 0 1px rgba(255,255,255,0.15)' 
                    : '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255,255,255,0.1)'
                }}
              >
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 transform-3d ${
                      idx === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                    style={{
                      transform: idx === currentSlide ? 'translateZ(0)' : 'translateZ(-15px)'
                    }}
                  >
                    <img 
                      src={slide.image}
                      alt={`Marketing slide ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000"
                      style={{
                        transform: idx === currentSlide 
                          ? 'scale(1) translateZ(0)' 
                          : 'scale(1.08) translateZ(-8px)'
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-[#082540]/80 via-[#082540]/30 to-transparent transition-all duration-500"
                      style={{
                        opacity: isHovering ? 0.6 : 0.8
                      }}
                    ></div>
                    
                    {/* Smooth Accent Overlay */}
                    <div 
                      className="absolute inset-0 opacity-20 transition-all duration-700"
                      style={{
                        background: `linear-gradient(45deg, ${slide.accent}20, transparent 70%)`,
                        transform: isHovering ? 'translateZ(5px)' : 'translateZ(2px)'
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Subtle Shadow */}
              <div 
                className="absolute -inset-4 bg-black/20 rounded-3xl blur-xl transition-all duration-700 -z-10"
                style={{
                  transform: isHovering 
                    ? 'translateZ(-50px) scale(0.92)' 
                    : 'translateZ(-40px) scale(0.96)',
                  opacity: isHovering ? 0.5 : 0.3
                }}
              ></div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8 transform-3d">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigationClick(idx)}
                  className={`transition-all duration-500 rounded-full backdrop-blur-sm transform-3d ${
                    idx === currentSlide 
                      ? 'w-12 h-3 bg-gradient-to-r from-[#007BFF] to-[#00BFFF] shadow-lg shadow-[#007BFF]/50 translateZ(10px)' 
                      : 'w-3 h-3 bg-white/20 hover:bg-white/40 hover:scale-110 translateZ(5px)'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                ></button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;