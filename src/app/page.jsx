// 'use client';
// import React from 'react';
// import HeroSection from '@/components/home/HeroSection';
// import AboutSection from '@/components/home/AboutSection';
// import ServicesSection from '@/components/home/ServicesSection';
// import CategoriesSection from '@/components/home/CategoriesSection';
// import ContactSection from '@/components/home/ContactSection';

// const B2BGravityHomepage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]">
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
        
//         @keyframes float-fast {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-15px) translateX(10px); }
//           50% { transform: translateY(-25px) translateX(0px); }
//           75% { transform: translateY(-15px) translateX(-10px); }
//         }
//         @keyframes slideInRight {
//           from {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slideOutLeft {
//           from {
//             transform: translateX(0);
//             opacity: 1;
//           }
//           to {
//             transform: translateX(-100%);
//             opacity: 0;
//           }
//         }
//         @keyframes slideInLeft {
//           from {
//             transform: translateX(-100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slideOutRight {
//           from {
//             transform: translateX(0);
//             opacity: 1;
//           }
//           to {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//         }
//         .slide-in-right {
//           animation: slideInRight 0.3s ease-out forwards;
//         }
//         .slide-out-left {
//           animation: slideOutLeft 0.3s ease-in forwards;
//         }
//         .slide-in-left {
//           animation: slideInLeft 0.3s ease-out forwards;
//         }
//         .slide-out-right {
//           animation: slideOutRight 0.3s ease-in forwards;
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-fast {
//           animation: float-fast 4s ease-in-out infinite;
//         }
//       `}</style>

//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <CategoriesSection />
//       <ContactSection />
//     </div>
//   );
// };

// export default B2BGravityHomepage;

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ContactSection from '@/components/home/ContactSection';

const B2BGravityHomepage = () => {
  return (
    <>
      {/* SEO-optimized page structure */}
      <main className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF]">
        {/* Hero Section - Above the fold content */}
        <section aria-label="B2B Marketing Automation Platform">
          <HeroSection />
        </section>
        
        {/* About Section */}
        <section aria-label="About B2B Gravity" id="about">
          <AboutSection />
        </section>
        
        {/* Services Section */}
        <section aria-label="B2B Marketing Services" id="services">
          <ServicesSection />
        </section>
        
        {/* Categories Section */}
        <section aria-label="Business Solutions Categories" id="solutions">
          <CategoriesSection />
        </section>
        
        {/* Contact Section */}
        <section aria-label="Contact B2B Gravity" id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(-25px) translateX(0px); }
          75% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        .slide-in-right { animation: slideInRight 0.3s ease-out forwards; }
        .slide-out-left { animation: slideOutLeft 0.3s ease-in forwards; }
        .slide-in-left { animation: slideInLeft 0.3s ease-out forwards; }
        .slide-out-right { animation: slideOutRight 0.3s ease-in forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default B2BGravityHomepage;
