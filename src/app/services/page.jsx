'use client'
import React from 'react';
import HeroServices from './HeroServices';
import ProvenResults from './ProvenResults';
import GetReady from './GetReady';

const ServicesIntro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50/30">
      <HeroServices />
      <ProvenResults />
      <GetReady />
    </div>
  );
};

export default ServicesIntro;