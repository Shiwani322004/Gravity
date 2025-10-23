import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Sparkles, ArrowLeft } from 'lucide-react';

const slides = [
  {
    text: "Transform your digital presence with cutting-edge marketing strategies that drive real results. Our expert team crafts personalized campaigns that resonate with your audience and deliver measurable outcomes. We combine creativity with data-driven insights to ensure your brand stands out in today's competitive landscape. Let us help you achieve sustainable growth and long-term success.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop"
  },
  {
    text: "Elevate your brand with innovative solutions designed to capture attention and engage your audience. We leverage the latest technologies and marketing trends to create compelling experiences that convert. From social media management to content creation, we handle every aspect of your digital strategy. Partner with us to build a brand that leaves a lasting impression.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop"
  },
  {
    text: "Drive growth and maximize your ROI with data-driven strategies tailored to your business goals. Our analytics-focused approach ensures every marketing dollar is optimized for maximum impact. We continuously monitor and refine campaigns to adapt to changing market dynamics. Experience the difference that strategic planning and execution can make for your bottom line.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop"
  },
  {
    text: "Unlock new opportunities and reach your target market with our comprehensive digital marketing services. We specialize in identifying untapped potential and creating pathways to connect with your ideal customers. Our holistic approach integrates SEO, paid advertising, and content marketing for synergistic results. Scale your business with confidence knowing you have a dedicated team driving your success.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-[#082540] overflow-hidden">
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 123, 255, 0.4); }
          50% { box-shadow: 0 0 40px rgba(0, 123, 255, 0.8); }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .animate-gradient {
          background: linear-gradient(-45deg, #082540, #0a3d5f, #007BFF, #0a3d5f);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .fade-in {
          animation: fadeIn 0.6s ease-in forwards;
        }
        .slide-transition {
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .slide-enter-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        .slide-exit-left {
          animation: slideOutLeft 0.5s ease-in forwards;
        }
        .slide-enter-left {
          animation: slideInLeft 0.5s ease-out forwards;
        }
        .slide-exit-right {
          animation: slideOutRight 0.5s ease-in forwards;
        }
      `}</style>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 animate-gradient opacity-50"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#007BFF] rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-[#007BFF] rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FFFFFF] rounded-full opacity-10 blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 slide-in">
           

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] leading-tight">
              We Help You
            </h1>

            <div className="relative min-h-[200px] sm:min-h-[180px] md:min-h-[160px]">
              {slides.map((slide, idx) => (
                <p 
                  key={idx}
                  className={`text-base sm:text-lg lg:text-xl text-[#FFFFFF]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed text-justify absolute inset-0 ${
                    idx === currentSlide
                      ? isAnimating
                        ? direction === 'right'
                          ? 'slide-exit-left'
                          : 'slide-exit-right'
                        : direction === 'right'
                          ? 'slide-enter-right'
                          : 'slide-enter-left'
                      : 'opacity-0'
                  }`}
                >
                  {slide.text}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 mt-30">
              <button className="group relative bg-[#007BFF] text-[#FFFFFF] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 animate-glow overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF] to-[#0056b3] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

             
            </div>

            
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-[#007BFF]/30 shadow-2xl shadow-[#007BFF]/20 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`h-full absolute inset-0 ${
                      idx === currentSlide 
                        ? isAnimating
                          ? direction === 'right'
                            ? 'slide-exit-left'
                            : 'slide-exit-right'
                          : direction === 'right'
                            ? 'slide-enter-right'
                            : 'slide-enter-left'
                        : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={slide.image}
                      alt={`Marketing slide ${idx + 1}`}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082540]/80 via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>

              
              

              
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-[#007BFF] opacity-20 blur-3xl -z-10 rounded-full"></div>
          </div>

        </div>

        {/* Indicator Dots and Navigation Arrows - Bottom Center of Hero */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFFFF]/20 hover:bg-[#FFFFFF]/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-[#FFFFFF]/30 hover:border-[#FFFFFF]/50"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFFFF]" />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating) return;
                  const newDirection = idx > currentSlide ? 'right' : 'left';
                  setDirection(newDirection);
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentSlide(idx);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 sm:w-8 bg-[#007BFF]' : 'w-1.5 sm:w-2 bg-[#FFFFFF]/50'
                }`}
              ></button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFFFF]/20 hover:bg-[#FFFFFF]/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-[#FFFFFF]/30 hover:border-[#FFFFFF]/50"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFFFF]" />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;