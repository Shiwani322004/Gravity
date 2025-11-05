'use client';

import { 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Users,
  ArrowRight
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ConnectSection() {
  const sectionRef = useRef(null);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Connect With Our Team";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-fade-in');
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
    if (currentIndex < fullText.length && isVisible) {
      const timer = setTimeout(() => {
        setAnimatedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText, isVisible]);

  const communicationMethods = [
    {
      icon: <Phone className="text-white" size={28} />,
      title: "Phone Call",
      description: "Speak directly with our experts for immediate consultation",
      action: "Call Now",
      href: "tel:+18005551234",
      gradient: "from-[#007bff] to-[#0a2540]",
      bgGradient: "from-[#007bff]/20 to-[#0a2540]/10"
    },
    {
      icon: <Mail className="text-white" size={28} />,
      title: "Email Us",
      description: "Send detailed queries and receive comprehensive responses",
      action: "Send Email",
      href: "mailto:info@b2bgravity.com",
      gradient: "from-[#007bff] to-[#0a2540]",
      bgGradient: "from-[#007bff]/20 to-[#0a2540]/15"
    },
    {
      icon: <MessageCircle className="text-white" size={28} />,
      title: "Live Chat",
      description: "Get instant answers via our professional chat support",
      action: "Start Chat",
      href: "#",
      gradient: "from-[#007bff] to-[#0a2540]",
      bgGradient: "from-[#007bff]/20 to-[#0a2540]/15"
    }
  ];

  const socialMedia = [
    { 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/company/b2bgravity", 
      label: "LinkedIn",
      color: "hover:bg-[#0a2540]",
      bgColor: "bg-[#0a2540]"
    },
    { 
      icon: <Twitter size={20} />, 
      href: "https://twitter.com/b2bgravity", 
      label: "Twitter",
      color: "hover:bg-[#0a2540]",
      bgColor: "bg-[#0a2540]"
    },
    { 
      icon: <Facebook size={20} />, 
      href: "https://facebook.com/b2bgravity", 
      label: "Facebook",
      color: "hover:bg-[#0a2540]",
      bgColor: "bg-[#0a2540]"
    },
    { 
      icon: <Instagram size={20} />, 
      href: "https://instagram.com/b2bgravity", 
      label: "Instagram",
      color: "hover:bg-[#0a2540]",
      bgColor: "bg-[#0a2540]"
    }
  ];


  
  return (
    <section 
      id="communication"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#007bff]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a2540]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-5xl font-bold text-[#007bff] mb-6 min-h-[72px]">
            <span>
              {animatedText}
            </span>
            <span className="animate-pulse text-[#007bff]">|</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in animation-delay-1000">
            Choose the communication method that works best for you. Our dedicated team is ready to provide personalized solutions tailored to your business needs.
          </p>
        </div>
        
        {/* Communication Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {communicationMethods.map((item, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Enhanced background effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out rounded-2xl blur-xl`} />
              
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col relative z-10 
                            group-hover:shadow-2xl group-hover:shadow-[#007bff]/10 group-hover:border-[#007bff]/30
                            group-hover:scale-105 group-hover:-translate-y-3
                            transition-all duration-500 ease-out cursor-pointer
                            hover:bg-gradient-to-br hover:from-white hover:to-[#007bff]/5
                            relative overflow-hidden">
                
                {/* Enhanced icon container with gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 
                              group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg
                              transition-all duration-500 ease-out relative overflow-hidden`}>
                  {item.icon}
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
                
                {/* Enhanced title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 
                             group-hover:text-[#007bff] transition-colors duration-300
                             transform group-hover:translate-x-2">
                  {item.title}
                </h3>
                
                {/* Enhanced description */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed
                            group-hover:text-gray-800 transition-colors duration-300
                            opacity-90 group-hover:opacity-100">
                  {item.description}
                </p>
                
                {/* Enhanced action link */}
                <a 
                  href={item.href} 
                  className="inline-flex items-center gap-3 text-[#007bff] font-semibold 
                            group-hover:text-[#0a2540] group-hover:gap-4
                            transition-all duration-500 ease-out mt-auto
                            transform group-hover:translate-x-2
                            px-4 py-2 rounded-lg group-hover:bg-[#007bff]/10"
                >
                  {item.action} 
                  <ArrowRight size={18} className="group-hover:scale-125 group-hover:rotate-45 transition-all duration-300" />
                </a>

                {/* Enhanced hover border effect */}
                <div className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${item.gradient} 
                              group-hover:w-4/5 group-hover:left-10 transition-all duration-500 ease-out rounded-full`} />
                
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#007bff]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#0a2540]/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Social Media Section */}
        <div className="mt-16 pt-16 border-t border-gray-200/60 animate-fade-in animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#007bff] mb-4 
                         opacity-0 animate-fade-in animation-delay-800">
              Follow Our Journey
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-1000">
              Stay connected for industry insights, business growth strategies, and the latest updates from our team
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 ${social.bgColor} text-white rounded-2xl flex items-center justify-center 
                          transition-all duration-500 ease-out group relative overflow-hidden
                          hover:scale-110 hover:shadow-xl hover:-translate-y-2
                          opacity-0 animate-fade-in`}
                style={{ 
                  animationDelay: `${1200 + (index * 100)}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
                aria-label={social.label}
              >
                {/* Enhanced background transition */}
                <div className={`absolute inset-0 ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Enhanced icon */}
                <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>

                {/* Enhanced pulse animation */}
                <div className="absolute inset-0 border-2 border-white/40 rounded-2xl group-hover:animate-ping transition-all duration-300 opacity-0 group-hover:opacity-100" />
                
                {/* Tooltip effect */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#0a2540] text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#0a2540] rotate-45"></div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Additional CTA */}
          <div className="text-center mt-12 opacity-0 animate-fade-in animation-delay-1600">
            <p className="text-gray-600 mb-6">Prefer to connect through social media?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#007bff] to-[#0a2540] text-white px-8 py-4 rounded-2xl font-semibold
                        hover:shadow-xl hover:shadow-[#007bff]/25 hover:scale-105 transition-all duration-300
                        group"
            >
              <MessageCircle size={20} />
              Send us a Direct Message
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
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
        .animation-delay-1600 {
          animation-delay: 1600ms;
        }
      `}</style>
    </section>
  );
}