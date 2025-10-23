'use client'
import React from 'react';
import HeroABM from './HeroABM';
import ABMFeatures from './ABMFeatures';
import ABMProcess from './ABMProcess';
import ABMDashboard from './ABMDashboard';
import ABMSecurityFeatures from './ABMSecurityFeatures';
import LogoScroll from '../lead-generation/LogoScroll';
import ABMFormSection from './ABMFormSection';

const AccountBasedMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/20 overflow-hidden">
      <HeroABM />
      <ABMFeatures />
      <ABMProcess />
      <ABMDashboard />
      <ABMSecurityFeatures />
      <LogoScroll />
      <ABMFormSection />
    </div>
  );
};

export default AccountBasedMarketing;