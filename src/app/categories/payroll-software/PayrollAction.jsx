'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Professional SVG Icons
const PayrollIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const ComplianceIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PortalIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const DesktopIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default function ModernPayrollPlatform() {
  const [activeFeature, setActiveFeature] = useState(0);

  const payrollModules = [
    {
      title: "Automated Payroll Processing",
      description: "Intelligent salary calculations with real-time tax deductions, overtime management, and compliance automation across your entire workforce",
      icon: <PayrollIcon />,
      color: "emerald",
      visualization: "processor"
    },
    {
      title: "Tax & Compliance Suite",
      description: "Multi-jurisdiction tax compliance with automated regulatory updates, comprehensive reporting, and audit-ready documentation",
      icon: <ComplianceIcon />,
      color: "blue",
      visualization: "compliance"
    },
    {
      title: "Employee Self-Service Portal",
      description: "24/7 secure portal access with pay stubs, tax documents, leave management, and real-time payroll insights for all employees",
      icon: <PortalIcon />,
      color: "purple",
      visualization: "portal"
    }
  ];

  const colorMap = {
    emerald: {
      light: "bg-emerald-50",
      gradient: "from-emerald-500 to-teal-600",
      border: "border-emerald-200"
    },
    blue: {
      light: "bg-blue-50",
      gradient: "from-blue-500 to-indigo-600",
      border: "border-blue-200"
    },
    purple: {
      light: "bg-purple-50",
      gradient: "from-purple-500 to-fuchsia-600",
      border: "border-purple-200"
    }
  };

  // Enhanced Payroll Processor Visualization
  const ProcessorVisualization = () => {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    
    const steps = [
      { name: "Data Collection", icon: <DocumentIcon /> },
      { name: "Calculation", icon: <ClockIcon /> },
      { name: "Verification", icon: <CheckIcon /> },
      { name: "Completion", icon: <CheckIcon /> }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(0);
            return 0;
          }
          const newProgress = prev + 2;
          setCurrentStep(Math.floor(newProgress / 25));
          return newProgress;
        });
      }, 100);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-64 sm:h-80">
        {/* Process Flow */}
        <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 w-4/5">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  index <= currentStep 
                    ? 'bg-emerald-500 text-white shadow-lg scale-110' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.icon}
                </div>
                <div className={`text-xs font-medium mt-1 sm:mt-2 text-center ${
                  index <= currentStep ? 'text-emerald-600' : 'text-gray-500'
                }`}>
                  {step.name}
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-4/5">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="bg-white rounded-lg p-2 sm:p-4 shadow-md border border-emerald-100">
              <div className="text-lg sm:text-2xl font-bold text-emerald-600">98.7%</div>
              <div className="text-xs text-gray-600">Accuracy Rate</div>
            </div>
            <div className="bg-white rounded-lg p-2 sm:p-4 shadow-md border border-emerald-100">
              <div className="text-lg sm:text-2xl font-bold text-emerald-600">3min</div>
              <div className="text-xs text-gray-600">Avg. Processing</div>
            </div>
            <div className="bg-white rounded-lg p-2 sm:p-4 shadow-md border border-emerald-100">
              <div className="text-lg sm:text-2xl font-bold text-emerald-600">2,847</div>
              <div className="text-xs text-gray-600">Employees</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Compliance Visualization
  const ComplianceVisualization = () => {
    const [activeRegions, setActiveRegions] = useState([]);
    
    const regions = [
      { name: "Federal", compliance: 100, color: "bg-blue-500" },
      { name: "State", compliance: 98, color: "bg-green-500" },
      { name: "Local", compliance: 95, color: "bg-purple-500" },
      { name: "International", compliance: 92, color: "bg-orange-500" }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveRegions(prev => 
          prev.length === regions.length ? [] : [...prev, prev.length]
        );
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-64 sm:h-80">
        {/* Compliance Grid */}
        <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 w-4/5">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{region.name}</span>
                  <div className={`w-3 h-3 rounded-full ${region.color} ${
                    activeRegions.includes(index) ? 'animate-pulse' : ''
                  }`}></div>
                </div>
                <div className="text-lg sm:text-2xl font-bold text-blue-600">{region.compliance}%</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full ${region.color} transition-all duration-1000`}
                    style={{ width: `${region.compliance}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Portal Visualization
  const PortalVisualization = () => {
    const [activeUsers, setActiveUsers] = useState(0);
    const targetUsers = 2847;

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveUsers(prev => prev >= targetUsers ? 0 : prev + 23);
      }, 100);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-64 sm:h-80">
        {/* Usage Statistics */}
        <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 w-4/5">
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-purple-100 text-center">
              <div className="mx-auto text-purple-600 mb-2">
                <MobileIcon />
              </div>
              <div className="text-base sm:text-lg font-bold text-purple-600">72%</div>
              <div className="text-xs text-gray-600">Mobile Access</div>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-purple-100 text-center">
              <div className="mx-auto text-purple-600 mb-2">
                <DesktopIcon />
              </div>
              <div className="text-base sm:text-lg font-bold text-purple-600">28%</div>
              <div className="text-xs text-gray-600">Desktop Access</div>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-purple-100 text-center">
              <div className="mx-auto text-purple-600 mb-2">
                <DocumentIcon />
              </div>
              <div className="text-base sm:text-lg font-bold text-purple-600">94%</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Active Users Counter */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-200 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">
              {activeUsers.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">Active Portal Users</div>
          </div>
        </div>
      </div>
    );
  };

  const renderVisualization = (type) => {
    switch (type) {
      case 'processor': return <ProcessorVisualization />;
      case 'compliance': return <ComplianceVisualization />;
      case 'portal': return <PortalVisualization />;
      default: return <ProcessorVisualization />;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-12 sm:py-16 lg:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-black">
            Modern Payroll Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your payroll operations with intelligent automation, real-time compliance, and enterprise-grade security
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Features Navigation - Responsive */}
          <div className="space-y-4 sm:space-y-6">
            {payrollModules.map((module, index) => {
              const colors = colorMap[module.color];
              
              return (
                <div
                  key={index}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeFeature === index ? 'lg:translate-x-4' : ''
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  {/* Active Indicator */}
                  {activeFeature === index && (
                    <div className="absolute -left-2 sm:-left-4 top-1/2 transform -translate-y-1/2 w-1 h-12 sm:h-16 bg-blue-500 rounded-full"></div>
                  )}
                  
                  <div className={`relative bg-white rounded-xl lg:rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                    activeFeature === index 
                      ? `${colors.border} shadow-2xl scale-105` 
                      : 'border-gray-200 shadow-lg hover:shadow-xl'
                  }`}>
                    
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                      activeFeature === index ? 'opacity-10' : ''
                    }`}></div>
                    
                    <div className="relative p-4 sm:p-6 lg:p-8">
                      <div className="flex items-start gap-4 sm:gap-6">
                        {/* Module Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 ${
                          activeFeature === index ? 'scale-110 rotate-12' : ''
                        }`}>
                          {module.icon}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 ${
                            activeFeature === index ? 'text-gray-900' : 'text-gray-800'
                          }`}>
                            {module.title}
                          </h3>
                          
                          <p className={`text-gray-600 leading-relaxed text-sm sm:text-base ${
                            activeFeature === index ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {module.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Visualization Panel - Responsive */}
          <div className="sticky top-8">
            <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-500 min-h-[500px] sm:min-h-[600px]">
              
              {/* Animated Background */}
              <div className={`absolute inset-0 opacity-5 transition-all duration-1000 ${
                colorMap[payrollModules[activeFeature]?.color]?.light
              }`}></div>
              
              <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Panel Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-r ${
                    colorMap[payrollModules[activeFeature]?.color]?.gradient
                  } flex items-center justify-center text-white shadow-lg`}>
                    {payrollModules[activeFeature]?.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      {payrollModules[activeFeature]?.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Live Data Visualization
                    </p>
                  </div>
                </div>

                {/* Enhanced Visualization Container */}
                <div className="relative rounded-xl lg:rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8 shadow-inner min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
                  {renderVisualization(payrollModules[activeFeature]?.visualization)}
                </div>

                {/* Single Contact Us Button */}
                <Link href="/contact" className="w-full">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <ContactIcon />
                    Contact Us Now
                  </button>
                </Link>
              </div>
        
              {/* Ambient Effects */}
              <div className={`absolute -bottom-32 -right-32 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r ${
                colorMap[payrollModules[activeFeature]?.color]?.gradient
              } rounded-full opacity-10 blur-3xl transition-all duration-1000`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}