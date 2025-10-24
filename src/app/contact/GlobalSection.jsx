'use client';

import { 
  MapPin, 
  Phone, 
  Mail,
  Building,
  Globe,
  Clock
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function GlobalSection() {
  const sectionRef = useRef(null);
  const [activeOffice, setActiveOffice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Our Global Presence";

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

  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Business Ave, Suite 500, New York, NY 10001",
      phone: "+1 (212) 555-1234",
      email: "ny@b2bgravity.com",
      hours: "Mon-Fri: 9AM-6PM EST",
      timezone: "EST",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      city: "San Francisco",
      country: "United States",
      address: "456 Tech Street, Floor 8, San Francisco, CA 94105",
      phone: "+1 (415) 555-5678",
      email: "sf@b2bgravity.com",
      hours: "Mon-Fri: 9AM-6PM PST",
      timezone: "PST",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "789 Global Lane, London, UK EC2A 4NE",
      phone: "+44 20 7946 0958",
      email: "london@b2bgravity.com",
      hours: "Mon-Fri: 9AM-6PM GMT",
      timezone: "GMT",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section 
      id="locations"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#007bff]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0a2540]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          
          
          <h2 className="text-5xl font-bold text-[#007bff] mb-6 min-h-[72px]">
            <span>
              {animatedText}
            </span>
            <span className="animate-pulse text-[#007bff]">|</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in animation-delay-1000">
            With offices in strategic business hubs worldwide, we're positioned to serve your global needs with local expertise and round-the-clock support.
          </p>
        </div>
        
        {/* Enhanced Office Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 flex space-x-2 border border-gray-200/60 shadow-lg shadow-[#007bff]/5">
            {offices.map((office, index) => (
              <button
                key={index}
                onClick={() => setActiveOffice(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center gap-3 group ${
                  activeOffice === index
                    ? 'bg-gradient-to-r from-[#007bff] to-[#0a2540] text-white shadow-lg shadow-[#007bff]/25'
                    : 'text-gray-600 hover:text-[#007bff] hover:bg-[#007bff]/5'
                }`}
              >
                <MapPin size={18} className={activeOffice === index ? "text-white" : "text-gray-400 group-hover:text-[#007bff]"} />
                {office.city}
                {activeOffice === index && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Enhanced Office Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Enhanced Office Image with Online Image */}
          <div className="rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl shadow-[#007bff]/10 group hover:shadow-2xl hover:shadow-[#007bff]/20 transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
              {/* Online Image */}
              <img 
                src={offices[activeOffice].image} 
                alt={`${offices[activeOffice].city} Office`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-[#007bff]/30 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                    <Building size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{offices[activeOffice].city} Office</h3>
                  <p className="text-white/80 text-lg mb-4">{offices[activeOffice].country}</p>
                  <div className="flex items-center justify-center gap-2 text-white/70">
                    <Clock size={16} />
                    <span>{offices[activeOffice].timezone}</span>
                  </div>
                </div>
              </div>
              
             
            </div>
          </div>
          
          {/* Enhanced Office Details */}
          <div>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/60 shadow-2xl shadow-[#007bff]/10 hover:shadow-2xl hover:shadow-[#007bff]/20 transition-all duration-500">
              <div className="flex items-start gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#007bff] to-[#0a2540] flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#007bff] mb-2">{offices[activeOffice].city}</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={18} />
                    <span className="font-medium">{offices[activeOffice].hours}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-5 group hover:bg-[#007bff]/5 p-4 rounded-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#007bff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#007bff] transition-colors duration-300">
                    <MapPin className="text-[#007bff] group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {offices[activeOffice].address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group hover:bg-[#007bff]/5 p-4 rounded-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#007bff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#007bff] transition-colors duration-300">
                    <Phone className="text-[#007bff] group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                    <a 
                      href={`tel:${offices[activeOffice].phone}`} 
                      className="text-gray-600 hover:text-[#007bff] transition-colors duration-300 font-medium text-lg"
                    >
                      {offices[activeOffice].phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group hover:bg-[#007bff]/5 p-4 rounded-2xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#007bff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#007bff] transition-colors duration-300">
                    <Mail className="text-[#007bff] group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                    <a 
                      href={`mailto:${offices[activeOffice].email}`} 
                      className="text-gray-600 hover:text-[#007bff] transition-colors duration-300 font-medium break-all text-lg"
                    >
                      {offices[activeOffice].email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}