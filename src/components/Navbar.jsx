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

  const dropdownTimeoutRef = useRef(null);

  // Update pathname on mount and handle navigation
  useEffect(() => {
    setPathname(window.location.pathname);
    
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Services dropdown data
  const services = [
    { name: 'Lead Generation', href: '/services/lead-generation' },
    { name: 'Content Syndication', href: '/services/content-syndication' },
    { name: 'Email Marketing', href: '/services/email-marketing' },
    { name: 'Database Management', href: '/services/database-management' },
    { name: 'ABM', href: '/services/abm' }
  ];

  // Categories dropdown data
  const categories = [
    { name: 'Phone System', href: '/categories/phone-system' },
    { name: 'CRM System', href: '/categories/crm-system' },
    { name: 'Business Intelligence', href: '/categories/business-intelligence' },
    { name: 'Contact Center', href: '/categories/contact-center' },
    { name: 'ERP', href: '/categories/erp' },
    { name: 'Video Conferencing', href: '/categories/video-conferencing' }
  ];

  // Main navigation items
  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' }, 
    { name: 'Services', href: '/services', hasDropdown: true, id: 'services', dropdownItems: services },
    { name: 'Categories', href: '/categories', hasDropdown: true, id: 'categories', dropdownItems: categories },
    { name: 'Resources', href: '/resources', id: 'resources' },
    { name: 'Contact', href: '/contact', id: 'contact' }
  ];

  // Determine active nav based on current pathname
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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
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

  // Handle click - just close menus, let browser handle navigation naturally
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className={`bg-white text-slate-800 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl shadow-slate-200/50 py-3' : 'shadow-lg py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className="flex items-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] via-[#007bff] to-[#0056b3] rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-3xl font-black tracking-tight">
                      <span className="text-[#0a2540] drop-shadow-sm">B2B</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007bff] to-[#0056b3] ml-1">Gravity</span>
                    </div>
                  </div>
                </div>
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
                        <a 
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-[15px] group relative ${
                            activeNav === item.id 
                              ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] shadow-lg shadow-blue-500/20' 
                              : 'text-slate-700 hover:text-[#007bff] hover:bg-slate-50'
                          }`}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 relative z-10 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                        </a>
                        
                        {activeDropdown === item.id && (
                          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 text-slate-800 border border-slate-100 opacity-100 translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a2540] via-[#007bff] to-[#0056b3]"></div>
                            <div className="space-y-0.5 mt-1 px-2">
                              {item.dropdownItems.map((subpage, idx) => {
                                const isSubpageActive = pathname === subpage.href;
                                return (
                                  <a
                                    key={idx}
                                    href={subpage.href}
                                    onClick={handleLinkClick}
                                    className={`block px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                                      isSubpageActive
                                        ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff]'
                                        : 'text-slate-700 hover:text-[#007bff] hover:bg-slate-50'
                                    }`}
                                  >
                                    <div className="relative z-10 font-medium text-[14px]">{subpage.name}</div>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <a 
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`flex items-center px-5 py-2.5 rounded-lg transition-all duration-300 font-semibold text-[15px] group relative ${
                          activeNav === item.id 
                            ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] shadow-lg shadow-blue-500/20' 
                            : 'text-slate-700 hover:text-[#007bff] hover:bg-slate-50'
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
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
                className="text-slate-700 hover:text-[#007bff] focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto">
          <div className="bg-gradient-to-r from-[#0a2540] via-[#007bff] to-[#0056b3] p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <a 
                href="/" 
                onClick={handleLinkClick}
                className="flex items-center"
              >
                <div className="text-3xl font-black tracking-tight">
                  <span className="text-white drop-shadow-lg">B2B</span>
                  <span className="text-slate-100 ml-1">Gravity</span>
                </div>
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-slate-200 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
          </div>

          <div className="p-4">
            {/* Mobile Menu Items */}
            <div className="space-y-3">
              {navItems.map((item, index) => {
                const isActive = activeNav === item.id;
                return (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div className={`rounded-xl overflow-hidden border-2 ${
                        isActive ? 'border-[#007bff] bg-slate-50' : 'border-slate-200 bg-white'
                      } shadow-md`}>
                        <button
                          onClick={() => toggleMobileDropdown(item.id)}
                          className={`flex items-center justify-between w-full px-5 py-4 transition-all duration-300 ${
                            isActive ? 'text-[#007bff] font-bold' : 'text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-lg font-bold">{item.name}</span>
                          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${
                            mobileDropdowns[item.id] ? 'rotate-180' : ''
                          } ${isActive ? 'text-[#007bff]' : 'text-slate-500'}`} />
                        </button>
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden bg-slate-50 ${
                          mobileDropdowns[item.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-3 pb-3 space-y-1.5">
                            {item.dropdownItems.map((subpage, idx) => {
                              const isSubpageActive = pathname === subpage.href;
                              return (
                                <a
                                  key={idx}
                                  href={subpage.href}
                                  onClick={handleLinkClick}
                                  className={`block py-3 px-4 rounded-lg transition-all duration-300 border ${
                                    isSubpageActive
                                      ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] border-transparent shadow-md'
                                      : 'text-slate-700 hover:text-[#007bff] hover:bg-white border-slate-200 hover:border-[#007bff]'
                                  }`}
                                >
                                  <span className="font-semibold text-[15px]">{subpage.name}</span>
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
                        className={`flex items-center justify-center px-5 py-4 rounded-xl border-2 transition-all duration-300 shadow-md ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-[#0a2540] to-[#007bff] border-transparent'
                            : 'border-slate-200 bg-white text-slate-800 hover:from-[#0a2540] hover:to-[#007bff] hover:text-white hover:border-transparent hover:bg-gradient-to-r'
                        }`}
                      >
                        <span className="text-lg font-bold">{item.name}</span>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;