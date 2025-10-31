'use client'
import React from 'react';
import GPSHero from './GPSHero';
import GPSComparison from './GPSComparison';
import GPSBenefits from './GPSBenefits';
import GPSFeatures from './GPSFeatures';
import LogoScroll from '@/app/services/lead-generation/LogoScroll';
import GPSAction from './GPSAction';

export default function GPSFleetManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <GPSHero />
      <GPSComparison />
      <GPSBenefits />
      <GPSFeatures />
      <LogoScroll />
      <GPSAction />
      
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