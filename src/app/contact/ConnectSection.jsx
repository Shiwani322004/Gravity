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
import { useEffect, useRef } from 'react';

export default function ConnectSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const communicationMethods = [
    {
      icon: <Phone className="text-[#007bff]" size={28} />,
      title: "Phone Call",
      description: "Speak directly with our experts for immediate consultation",
      action: "Call Now",
      href: "tel:+18005551234"
    },
    {
      icon: <Mail className="text-[#007bff]" size={28} />,
      title: "Email Us",
      description: "Send detailed queries and receive comprehensive responses",
      action: "Send Email",
      href: "mailto:info@b2bgravity.com"
    },
    {
      icon: <MessageCircle className="text-[#007bff]" size={28} />,
      title: "Live Chat",
      description: "Get instant answers via our professional chat support",
      action: "Start Chat",
      href: "#"
    }
  ];

  const socialMedia = [
    { 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/company/b2bgravity", 
      label: "LinkedIn"
    },
    { 
      icon: <Twitter size={20} />, 
      href: "https://twitter.com/b2bgravity", 
      label: "Twitter"
    },
    { 
      icon: <Facebook size={20} />, 
      href: "https://facebook.com/b2bgravity", 
      label: "Facebook"
    },
    { 
      icon: <Instagram size={20} />, 
      href: "https://instagram.com/b2bgravity", 
      label: "Instagram"
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
          <h2 className="text-4xl font-bold text-[#0a2540] mb-6">Connect With Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the communication method that works best for you. Our dedicated team is ready to provide personalized solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communicationMethods.map((item, index) => (
            <div key={index} className="animate-fade-in">
              <div className="bg-white rounded-xl p-8 border border-gray-200 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
                <a 
                  href={item.href} 
                  className="inline-flex items-center gap-2 text-[#007bff] font-semibold hover:text-[#0a2540] transition-colors duration-300 mt-auto"
                >
                  {item.action} 
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Media Connection */}
        <div className="mt-16 pt-16 border-t border-gray-200 animate-fade-in">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0a2540] mb-4">Follow Our Journey</h3>
            <p className="text-gray-600">
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
                className="w-12 h-12 bg-gray-100 hover:bg-[#007bff] rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label={social.label}
              >
                <div className="text-gray-600 hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}