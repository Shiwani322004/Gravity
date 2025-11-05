'use client';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2540] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#007bff] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#007bff] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#007bff] rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#007bff] via-[#0a2540] to-[#007bff]"></div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b-2 border-white/20">
          
          {/* Column 1 - About B2B Gravity */}
          <div className="flex flex-col space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#007bff] to-[#0a2540] rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                  <Image 
                    src="/images/5.png" // Update this path to your logo
                    alt="B2B Gravity Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-2xl bg-gradient-to-r from-[#007bff] to-white bg-clip-text text-transparent whitespace-nowrap">
                  B2B Gravity
                </h3>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-[#007bff] to-[#0a2540] rounded-full mb-6"></div>
            </div>
            
            <div className="flex-grow">
              <p className="text-white/80 leading-relaxed text-sm hover:text-white transition-colors duration-300 font-medium">
                Empowering businesses with data-driven solutions to grow smarter, faster, and stronger. Your trusted partner in digital transformation.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/company/b2bgravity" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#007bff] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/b2bgravity" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#007bff] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://facebook.com/b2bgravity" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#007bff] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com/b2bgravity" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#007bff] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="font-bold text-xl text-white hover:text-[#007bff] transition-colors duration-300 cursor-pointer whitespace-nowrap mb-5">
                Quick Links
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#007bff] to-[#0a2540] rounded-full"></div>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="/" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <ArrowRight className="text-[#007bff] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0" size={12} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300 font-semibold">Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <ArrowRight className="text-[#007bff] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0" size={12} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300 font-semibold">About</span>
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <ArrowRight className="text-[#007bff] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0" size={12} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300 font-semibold">Connect With Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="font-bold text-xl text-white hover:text-[#007bff] transition-colors duration-300 cursor-pointer whitespace-nowrap mb-5">
                Our Services
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#007bff] to-[#0a2540] rounded-full"></div>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="/services/lead-generation" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold">Lead Generation</span>
                </a>
              </li>
              <li>
                <a 
                  href="/services/content-syndication" 
                  className="group flex items-start gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0 mt-1.5"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold leading-tight">Content Syndication</span>
                </a>
              </li>
              <li>
                <a 
                  href="/services/email-marketing" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold">Email Marketing</span>
                </a>
              </li>
              <li>
              
               
              </li>
              <li>
                <a 
                  href="/services/account-based-marketing" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold">Account Based Marketing</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Our Categories */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="font-bold text-xl text-white hover:text-[#007bff] transition-colors duration-300 cursor-pointer whitespace-nowrap mb-5">
                Our Categories
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#007bff] to-[#0a2540] rounded-full"></div>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="/categories/phone-system" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold">Phone System</span>
                </a>
              </li>
              <li>
                <a 
                  href="/categories/crm-system" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold">CRM System</span>
                </a>
              </li>
              <li>
                <a 
                  href="/categories/business-intelligence" 
                  className="group flex items-start gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0 mt-1.5"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold leading-tight">Business Intelligence</span>
                </a>
              </li>
              <li>
                <a 
                  href="/categories/GPS-fleet-management-software" 
                  className="group flex items-start gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0 mt-1.5"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold leading-tight">GPS Fleet Management Software</span>
                </a>
              </li>
              <li>
                <a 
                  href="/categories/payroll-software" 
                  className="group flex items-center gap-2 text-white/80 hover:text-[#007bff] transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007bff] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shrink-0"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold">Payroll Software</span>
                </a>
              </li>

            </ul>
          </div>

          {/* Column 5 - Connect With Us */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="font-bold text-xl text-white hover:text-[#007bff] transition-colors duration-300 cursor-pointer whitespace-nowrap mb-5">
                Connect With Us
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#007bff] to-[#0a2540] rounded-full"></div>
            </div>

            {/* Phone Section */}
            <div className="group mb-6">
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-white/90">Call Us</h4>
              <a 
                href="tel:+18005551234" 
                className="flex items-start gap-3 text-[#007bff] hover:text-white transition-all duration-300 group"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#007bff]/20 group-hover:bg-gradient-to-br group-hover:from-[#007bff] group-hover:to-[#0a2540] transition-all duration-300 shrink-0 mt-0.5">
                  <Phone className="text-[#007bff] group-hover:text-white transition-colors duration-300" size={14} />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium leading-tight">
                  +1 (800) 555-1234
                </span>
              </a>
            </div>

            {/* Email Section */}
            <div className="group mb-8">
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-white/90">Email Us</h4>
              <a 
                href="mailto:info@b2bgravity.com" 
                className="flex items-start gap-3 text-[#007bff] hover:text-white transition-all duration-300 group"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#007bff]/20 group-hover:bg-gradient-to-br group-hover:from-[#007bff] group-hover:to-[#0a2540] transition-all duration-300 shrink-0 mt-0.5">
                  <Mail className="text-[#007bff] group-hover:text-white transition-colors duration-300" size={14} />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm font-medium leading-tight break-all">
                  info@b2bgravity.com
                </span>
              </a>
            </div> 
          </div>
        </div>

        {/* Bottom Section with Legal Links */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <a 
                href="/privacy-policy" 
                className="text-white/70 hover:text-[#007bff] transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-use" 
                className="text-white/70 hover:text-[#007bff] transition-colors duration-300 font-medium"
              >
                Terms of Use
              </a>
              <a 
                href="/cookies-policy" 
                className="text-white/70 hover:text-[#007bff] transition-colors duration-300 font-medium"
              >
                Cookies Policy
              </a>
              <a 
                href="/sitemap" 
                className="text-white/70 hover:text-[#007bff] transition-colors duration-300 font-medium"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-white/70">
            © {currentYear} <span className="text-[#007bff] font-bold">B2B Gravity</span>. All rights reserved. | 
            <span className="text-white/60 ml-1">Empowering Business Growth</span>
          </p>
          <p className="text-xs text-white/50 mt-2">
            Driving success through innovative data-driven solutions and strategic partnerships.
          </p>
        </div>
      </div>
    </footer>
  );
}