'use client'
import React from 'react';
import HeroContent from './HeroContent';
import FeaturesContent from './FeaturesContent';
import ContentTypes from './ContentTypes';
import ContentJourney from './ContentJourney';
import ContentFormSection from './ContentFormSection';
import LogoScroll from '../lead-generation/LogoScroll';

const ContentSyndicationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/20 overflow-hidden">
      <HeroContent />
      <FeaturesContent />
      <ContentTypes />
      <ContentJourney />
      <LogoScroll />
      <ContentFormSection />
    </div>
  );
};

export default ContentSyndicationPage;

