'use client'
import React from 'react';
import HeroDatabase from './HeroDatabase';
import DatabaseFeatures from './DatabaseFeatures';
import DatabaseProcess from './DatabaseProcess';
import DatabaseDashboard from './DatabaseDashboard';
import SecurityFeatures from './SecurityFeatures';
import LogoScroll from '../lead-generation/LogoScroll';
import DatabaseFormSection from './DatabaseFormSection';

const DatabaseManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/20 overflow-hidden">
      <HeroDatabase />
      <DatabaseFeatures />
      <DatabaseProcess />
      <DatabaseDashboard />
      <SecurityFeatures />
      <LogoScroll />
      <DatabaseFormSection />
    </div>
  );
};

export default DatabaseManagement;