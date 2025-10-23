'use client';

import { 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ConnectSection() {
  const sectionRef = useRef(null);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Connect With Our Team";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Start text animation when section comes into view
            if (currentIndex === 0) {
              startTextAnimation();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [currentIndex]);

  const startTextAnimation = () => {
    setCurrentIndex(0);
    setAnimatedText('');
  };

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setAnimatedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const communicationMethods = [
    {
      icon: <Phone className="text-[#007bff]" size={28} />,
      title: "Phone Call",
      description: "Speak directly with our experts for immediate consultation",
      action: "Call Now",
      href: "tel:+18005551234",
      gradient: "from-blue-500/10 to-blue-600/5"
    },
    {
      icon: <Mail className="text-[#007bff]" size={28} />,
      title: "Email Us",
      description: "Send detailed queries and receive comprehensive responses",
      action: "Send Email",
      href: "mailto:info@b2bgravity.com",
      gradient: "from-cyan-500/10 to-blue-500/5"
    },
    {
      icon: <MessageCircle className="text-[#007bff]" size={28} />,
      title: "Live Chat",
      description: "Get instant answers via our professional chat support",
      action: "Start Chat",
      href: "#",
      gradient: "from-indigo-500/10 to-purple-500/5"
    }
  ];

  const socialMedia = [
    { 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/company/b2bgravity", 
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    },
    { 
      icon: <Twitter size={20} />, 
      href: "https://twitter.com/b2bgravity", 
      label: "Twitter",
      color: "hover:bg-sky-500"
    },
    { 
      icon: <Facebook size={20} />, 
      href: "https://facebook.com/b2bgravity", 
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Instagram size={20} />, 
      href: "https://instagram.com/b2bgravity", 
      label: "Instagram",
      color: "hover:bg-pink-600"
    }
  ];

  return (
    <section 
      id="communication"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-[#0a2540] mb-6 min-h-[60px]">
            <span className="bg-gradient-to-r from-[#007bff] to-[#0a2540] bg-clip-text text-transparent">
              {animatedText}
            </span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-1000">
            Choose the communication method that works best for you. Our dedicated team is ready to provide personalized solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communicationMethods.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:scale-105 z-0" />
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 h-full flex flex-col relative z-10 
                            group-hover:shadow-2xl group-hover:border-[#007bff]/30 
                            group-hover:scale-105 group-hover:-translate-y-2
                            transition-all duration-500 ease-out cursor-pointer
                            hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                
                {/* Icon with hover animation */}
                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-200
                              group-hover:bg-[#007bff] group-hover:scale-110 group-hover:rotate-3
                              transition-all duration-500 ease-out">
                  <div className="group-hover:scale-110 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                
                {/* Title with slide-in effect */}
                <h3 className="text-xl font-bold text-[#0a2540] mb-4 
                             group-hover:text-[#007bff] transition-colors duration-300
                             transform group-hover:translate-x-2">
                  {item.title}
                </h3>
                
                {/* Description with fade-in effect */}
                <p className="text-gray-600 mb-6 flex-grow 
                            group-hover:text-gray-800 transition-colors duration-300
                            opacity-90 group-hover:opacity-100">
                  {item.description}
                </p>
                
                {/* Action link with slide effect */}
                <a 
                  href={item.href} 
                  className="inline-flex items-center gap-2 text-[#007bff] font-semibold 
                            group-hover:text-[#0a2540] group-hover:gap-4
                            transition-all duration-500 ease-out mt-auto
                            transform group-hover:translate-x-2"
                >
                  {item.action} 
                  <ChevronRight size={16} className="group-hover:scale-125 transition-transform duration-300" />
                </a>

                {/* Hover border effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#007bff] to-[#0a2540] 
                              group-hover:w-full transition-all duration-500 ease-out rounded-full" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Media Connection */}
        <div className="mt-16 pt-16 border-t border-gray-200 animate-fade-in animation-delay-600">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0a2540] mb-4 
                         opacity-0 animate-fade-in animation-delay-800">
              Follow Our Journey
            </h3>
            <p className="text-gray-600 opacity-0 animate-fade-in animation-delay-1000">
              Stay connected for industry insights and business growth strategies
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center 
                          transition-all duration-500 ease-out group relative overflow-hidden
                          hover:scale-110 hover:shadow-lg hover:-translate-y-1
                          opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${1200 + (index * 100)}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
                aria-label={social.label}
              >
                {/* Background color transition */}
                <div className={`absolute inset-0 ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                
                {/* Icon with color transition */}
                <div className="relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300 
                              group-hover:scale-110">
                  {social.icon}
                </div>

                {/* Pulse animation on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 
                              rounded-lg group-hover:animate-ping transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}