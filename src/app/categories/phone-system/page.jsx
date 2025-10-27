'use client'
import React from 'react';
import PhoneSystemHero from './PhoneSystemHero';
import PhoneSystemFeatures from './PhoneSystemFeatures';
import PlatformFeatures from './PlatformFeatures';
import LogoScroll from '@/app/services/lead-generation/LogoScroll';
import PhoneSystemAction from './PhoneSystemAction';

export default function PhoneSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      <PhoneSystemHero />
      <PhoneSystemFeatures />
      <PlatformFeatures />
      <LogoScroll />
      <PhoneSystemAction />
  
      
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}