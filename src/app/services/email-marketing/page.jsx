'use client'
import React from 'react';
import HeroEmail from './HeroEmail';
import EmailFeatures from './EmailFeatures';

import EmailProcess from './EmailProcess';
import EmailAnalytics from './EmailAnalytics';
import LogoScroll from '../lead-generation/LogoScroll';
import EmailFormSection from './EmailFormSection';

const EmailMarketingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/20 overflow-hidden">
      <HeroEmail />
      <EmailFeatures />
     
      <EmailProcess />
      <EmailAnalytics />
      <LogoScroll />
      <EmailFormSection />
    </div>
  );
};

export default EmailMarketingPage;