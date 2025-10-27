'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [pathname, setPathname] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    categories: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState({});

  const dropdownTimeoutRef = useRef(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    setPathname(window.location.pathname);
    
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const services = [
    { name: 'Lead Generation', href: '/services/lead-generation' },
    { name: 'Content Syndication', href: '/services/content-syndication' },
    { name: 'Email Marketing', href: '/services/email-marketing' },
    { name: 'Account-Based Marketing', href: '/services/account-based-marketing' }
  ];

  const categories = [
    { name: 'Phone System', href: '/categories/phone-system' },
    { name: 'CRM System', href: '/categories/crm-system' },
    { name: 'Business Intelligence', href: '/categories/business-intelligence' },
    { name: 'Contact Center', href: '/categories/contact-center' },
    { name: 'ERP Solutions', href: '/categories/erp-solutions' },
    { name: 'Video Conferencing', href: '/categories/video-conferencing' }
  ];

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' }, 
    { 
      name: 'Services', 
      hasDropdown: true, 
      id: 'services', 
      dropdownItems: services 
    },
    { 
      name: 'Categories', 
      hasDropdown: true, 
      id: 'categories', 
      dropdownItems: categories 
    },
    { name: 'Resources', href: '/resources', id: 'resources' },
    { name: 'Contact', href: '/contact', id: 'contact' }
  ];

  const getActiveNav = () => {
    if (pathname === '/') return 'home';
    if (pathname === '/about') return 'about'; 
    if (pathname.startsWith('/services')) return 'services';
    if (pathname.startsWith('/categories')) return 'categories';
    if (pathname === '/resources') return 'resources';
    if (pathname === '/contact') return 'contact';
    return 'home';
  };

  const activeNav = getActiveNav();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure dropdown heights for smooth animations
  useEffect(() => {
    const newHeights = {};
    Object.keys(dropdownRefs.current).forEach(key => {
      if (dropdownRefs.current[key]) {
        newHeights[key] = dropdownRefs.current[key].scrollHeight;
      }
    });
    setDropdownHeight(newHeights);
  }, [mobileDropdowns]);

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setMobileDropdowns({ services: false, categories: false });
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className={`bg-white text-slate-800 sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'shadow-2xl shadow-slate-200/50 py-3' : 'shadow-lg py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Simplified without background effects */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className="flex items-center group"
              >
                {/* Removed the gradient background container */}
                <img 
                  src="/images/4.png" 
                  alt="B2B Gravity Logo" 
                  className="h-16 w-auto object-contain transition-all duration-300 hover:scale-105"
                  onError={(e) => {
                    console.error('Logo failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                return (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => handleDropdownEnter(item.id)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-[15px] group relative ${
                            activeNav === item.id 
                              ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] shadow-lg shadow-blue-500/20' 
                              : 'text-slate-700 hover:text-[#007bff] hover:bg-slate-50'
                          }`}
                        >
                          <span className="relative z-10 transition-all duration-300">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 relative z-10 transition-all duration-500 ease-out ${activeDropdown === item.id ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        
                        <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 text-slate-800 border border-slate-100 overflow-hidden transition-all duration-500 ease-out origin-top ${
                          activeDropdown === item.id 
                            ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto' 
                            : 'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
                        }`}>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a2540] via-[#007bff] to-[#0056b3] transition-all duration-500"></div>
                          <div className="space-y-0.5 mt-1 px-2">
                            {item.dropdownItems.map((subpage, idx) => {
                              const isSubpageActive = pathname === subpage.href;
                              return (
                                <a
                                  key={idx}
                                  href={subpage.href}
                                  onClick={handleLinkClick}
                                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ease-out group relative overflow-hidden transform hover:scale-[1.02] ${
                                    isSubpageActive
                                      ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] shadow-md'
                                      : 'text-slate-700 hover:text-[#007bff] hover:bg-slate-50 hover:shadow-sm'
                                  }`}
                                  style={{ 
                                    transitionDelay: `${idx * 30}ms`,
                                    animation: activeDropdown === item.id ? `slideIn 0.4s ease-out ${idx * 0.03}s both` : 'none'
                                  }}
                                >
                                  <div className="relative z-10 font-medium text-[14px] transition-all duration-300">{subpage.name}</div>
                                  {!isSubpageActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#007bff]/5 to-[#0056b3]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                  )}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a 
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`flex items-center px-5 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-[15px] group relative transform hover:scale-105 ${
                          activeNav === item.id 
                            ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] shadow-lg shadow-blue-500/20' 
                            : 'text-slate-700 hover:text-[#007bff] hover:bg-slate-50 hover:shadow-md'
                        }`}
                      >
                        <span className="relative z-10 transition-all duration-300">{item.name}</span>
                        {activeNav !== item.id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/5 to-[#007bff]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                        )}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-slate-700 hover:text-[#007bff] focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-all duration-300 ease-out transform hover:scale-110 active:scale-95"
              >
                {isMenuOpen ? <X className="w-7 h-7 transition-transform duration-300 rotate-90" /> : <Menu className="w-7 h-7 transition-transform duration-300" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`h-full overflow-y-auto transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="bg-gradient-to-r from-[#0a2540] via-[#007bff] to-[#0056b3] p-4 shadow-xl sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <a 
                href="/" 
                onClick={handleLinkClick}
                className="flex items-center transition-transform duration-300 hover:scale-105"
              >
                {/* Mobile logo - also simplified */}
                <img 
                  src="/images/4.png" 
                  alt="B2B Gravity Logo" 
                  className="h-14 w-auto object-contain"
                  onError={(e) => {
                    console.error('Mobile logo failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-slate-200 transition-all duration-300 ease-out p-2 rounded-lg hover:bg-white/10 transform hover:rotate-90 active:scale-95"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              {navItems.map((item, index) => {
                const isActive = activeNav === item.id;
                return (
                  <div 
                    key={index}
                    style={{
                      animation: isMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
                    }}
                  >
                    {item.hasDropdown ? (
                      <div className={`rounded-xl overflow-hidden border-2 transition-all duration-500 ease-out transform hover:scale-[1.02] ${
                        isActive ? 'border-[#007bff] bg-slate-50 shadow-lg' : 'border-slate-200 bg-white shadow-md hover:shadow-xl'
                      }`}>
                        <button
                          onClick={() => toggleMobileDropdown(item.id)}
                          className={`flex items-center justify-between w-full px-5 py-4 transition-all duration-300 ease-out ${
                            isActive ? 'text-[#007bff] font-bold' : 'text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-lg font-bold transition-all duration-300">{item.name}</span>
                          <ChevronDown className={`w-6 h-6 transition-all duration-500 ease-out ${
                            mobileDropdowns[item.id] ? 'rotate-180' : 'rotate-0'
                          } ${isActive ? 'text-[#007bff]' : 'text-slate-500'}`} />
                        </button>
                        <div 
                          ref={el => dropdownRefs.current[item.id] = el}
                          className="transition-all duration-500 ease-out overflow-hidden bg-slate-50"
                          style={{
                            maxHeight: mobileDropdowns[item.id] ? `${dropdownHeight[item.id]}px` : '0px',
                            opacity: mobileDropdowns[item.id] ? 1 : 0
                          }}
                        >
                          <div className="px-3 pb-3 space-y-1.5">
                            {item.dropdownItems.map((subpage, idx) => {
                              const isSubpageActive = pathname === subpage.href;
                              return (
                                <a
                                  key={idx}
                                  href={subpage.href}
                                  onClick={handleLinkClick}
                                  className={`block py-3 px-4 rounded-lg transition-all duration-500 ease-out border transform hover:scale-[1.02] ${
                                    isSubpageActive
                                      ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] border-transparent shadow-md'
                                      : 'text-slate-700 hover:text-[#007bff] hover:bg-white border-slate-200 hover:border-[#007bff] hover:shadow-md'
                                  }`}
                                  style={{
                                    transitionDelay: mobileDropdowns[item.id] ? `${idx * 50}ms` : '0ms'
                                  }}
                                >
                                  <span className="font-semibold text-[15px] transition-all duration-300">{subpage.name}</span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-center px-5 py-4 rounded-xl border-2 transition-all duration-500 ease-out shadow-md transform hover:scale-[1.02] ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] border-transparent shadow-lg'
                            : 'border-slate-200 bg-white text-slate-800 hover:from-[#0a2540] hover:to-[#007bff] hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:shadow-xl'
                        }`}
                      >
                        <span className="text-lg font-bold transition-all duration-300">{item.name}</span>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;