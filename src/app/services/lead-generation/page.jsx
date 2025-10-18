'use client'
import React from 'react';
import LeadHero from './LeadHero';
import FeaturesSection from './FeaturesSection';
import ProcessSection from './ProcessSection';
import FormSection from './FormSection';
import LeadDeliverySection from './LeadDeliverySection';
import LogoScroll from './LogoScroll';

const LeadGenerationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/20 overflow-hidden">
      <LeadHero />
      <FeaturesSection />
      <ProcessSection />
      <LeadDeliverySection />
      <LogoScroll />
      <FormSection />
    </div>
  );
};

export default LeadGenerationPage;
