'use client'
import React from 'react';
import VideoConferencingHero from './VideoConferencingHero';
import VideoConferencingFeatures from './VideoConferencingFeatures';
import VideoConferencingPlatform from './VideoConferencingPlatform';
import LogoScroll from '@/app/services/lead-generation/LogoScroll';
import VideoConferencingAction from './VideoConferencingAction';

export default function VideoConferencingPage() {
  return (
    <div className="min-h-screen bg-white">
      <VideoConferencingHero />
      <VideoConferencingFeatures />
      <VideoConferencingPlatform />
      <LogoScroll />
      <VideoConferencingAction />
      
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