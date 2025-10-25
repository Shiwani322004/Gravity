'use client';

import { 
  BarChart3, 
  Users, 
  Workflow, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  X
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CRMHeroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const questions = [
    {
      question: "Are you currently using a CRM system?",
      options: ["Yes, we have one", "No, we don't have one", "We're evaluating options"]
    },
    {
      question: "How many employees need CRM access?",
      options: ["1-5", "6-15", "16-50", "50+"]
    },
    {
      question: "What's your primary goal for implementing a CRM?",
      options: ["Sales automation", "Customer support", "Marketing automation", "All of the above"]
    },
    {
      question: "What's your timeline for implementation?",
      options: ["Immediately", "Within 1 month", "1-3 months", "Just researching"]
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      // Here you can handle the form submission
      setTimeout(() => {
        setShowQuestionnaire(false);
        resetQuestionnaire();
      }, 3000);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const handleOpenQuestionnaire = () => {
    resetQuestionnaire();
    setShowQuestionnaire(true);
  };

  const handleCloseQuestionnaire = () => {
    setShowQuestionnaire(false);
    resetQuestionnaire();
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const crmCards = [
    {
      badge: "Best for Growing Businesses",
      provider: "Zoho CRM",
      vendor: "Zoho",
      vendorLogo: "/images/zoho.png",
      price: "Starts at $14 per user per month",
      features: ["Office 365 integration", "Zoho Marketplace", "24/7 customer support"],
      buttonText: "Compare Quotes",
      icon: <Zap className="text-blue-500" size={20} />,
      accentColor: "hover:border-blue-400/50"
    },
    {
      badge: "Best for Customer Lifecycle",
      provider: "Creatio",
      vendorLogo: "/images/creatio.png",
      price: "Starts at $25 per user per month",
      features: ["14-day free trial", "No-code automation", "24/7 customer support"],
      buttonText: "Compare Quotes",
      icon: <Workflow className="text-cyan-500" size={20} />,
      accentColor: "hover:border-cyan-400/50"
    },
    {
      badge: "Best for Sales & Marketing",
      provider: "HubSpot CRM",
      vendorLogo: "/images/hubspot.png",
      price: "Starts at $9 per month per user",
      features: ["1,000 marketing contacts", "Email chat support", "Marketing automation"],
      buttonText: "Compare Quotes",
      icon: <Users className="text-blue-600" size={20} />,
      accentColor: "hover:border-blue-500/50"
    },
    {
      badge: "Best All-In-One Option",
      provider: "HoneyBook",
      vendorLogo: "/images/honeybook.png",
      price: "Starts at $29 per user per month",
      features: ["7-day free trial", "Project management", "24/7 phone and email support"],
      buttonText: "Compare Quotes",
      icon: <BarChart3 className="text-blue-400" size={20} />,
      accentColor: "hover:border-blue-400/50"
    },
    {
      badge: "Best for Automation",
      provider: "Pipedrive",
      vendorLogo: "/images/pipedrive.png",
      price: "Starts at $14 per user per month",
      features: ["Free 14-day trial", "Sales automation", "24/7 online chat support"],
      buttonText: "Compare Quotes",
      icon: <Brain className="text-cyan-600" size={20} />,
      accentColor: "hover:border-cyan-500/50"
    }
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              {/* Main Heading */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className={`block transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    Find the Perfect
                  </span>
                  <span className={`block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    CRM Software
                  </span>
                </h1>
              </div>

              {/* Key Benefits */}
              <div className={`flex flex-wrap justify-center gap-6 pt-6 transition-all duration-700 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                {["AI-Powered Insights", "Smart Automation", "Real-Time Analytics", "Seamless Integration", "24/7 Support"].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-2 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200/60">
                    <CheckCircle size={18} className="text-green-500" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CRM Provider Cards Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {crmCards.map((card, index) => (
                <div
                  key={card.provider}
                  className={`group relative bg-white rounded-2xl border-2 border-gray-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 p-6 ${card.accentColor} hover:bg-blue-50/30 flex flex-col h-full`}
                  style={{ 
                    animationDelay: `${(index + 1) * 200}ms`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Content Section */}
                  <div className="flex-1">
                    {/* Badge with Icon */}
                    <div className="relative flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium">
                        {card.icon}
                        <span className="max-w-[100px] truncate">{card.badge}</span>
                      </div>
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    </div>

                    {/* Provider & Vendor with Full Width Logo */}
                    <div className="relative mb-4">
                      <h3 className="text-lg font-bold text-gray-900 truncate">{card.provider}</h3>
                      <div className="mt-2">
                        {/* Full width logo container */}
                        <div className="w-full h-16 rounded-lg overflow-hidden bg-gray-50 border border-gray-200/60 flex items-center justify-center p-2">
                          {/* Fallback text if image fails to load */}
                          <div className="hidden text-lg font-bold text-blue-600 bg-white px-4 py-2 rounded-lg border border-blue-200 shadow-sm">
                            {card.vendor}
                          </div>
                          {/* Company Logo - Full Width */}
                          <div className="relative w-full h-full">
                            <Image 
                              src={card.vendorLogo}
                              alt={`${card.vendor} logo`}
                              fill
                              className="object-contain"
                              onError={(e) => {
                                // Show fallback if image fails to load
                                const target = e.target;
                                target.style.display = 'none';
                                const fallback = target.nextSibling;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            {/* Fallback that shows if image fails */}
                            <div className="hidden w-full h-full items-center justify-center text-lg font-bold text-blue-600 bg-white rounded-lg border border-blue-200">
                              {card.vendor || card.provider}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm font-semibold mt-2 text-center">{card.vendor}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="relative mb-4">
                      <p className="text-md font-semibold text-gray-900">{card.price}</p>
                    </div>

                    {/* Features */}
                    <div className="relative space-y-2">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-gray-600 group/feature">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                          <span className="text-xs leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4 border-t border-gray-200/60">
                    <button 
                      onClick={handleOpenQuestionnaire}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-sm">{card.buttonText}</span>
                      <ArrowRight size={14} className="relative group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-lg max-w-2xl mx-auto relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right CRM?</h3>
                <p className="text-gray-600 mb-6">
                  Our experts will help you compare features and pricing from top CRM vendors to find the perfect solution for your business growth.
                </p>
                <button 
                  onClick={handleOpenQuestionnaire}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group/cta mx-auto"
                >
                  Get Free Quotes
                  <ArrowRight size={18} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questionnaire Popup */}
      {showQuestionnaire && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {isCompleted ? "Thank You!" : "Help Us Find Your Perfect CRM"}
              </h3>
              <button
                onClick={handleCloseQuestionnaire}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isCompleted && (
              <div className="px-6 pt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-right">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {isCompleted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Perfect Match Found!</h4>
                  <p className="text-gray-600 mb-6">
                    Based on your answers, we're finding the best CRM solutions for your business. You'll receive personalized quotes shortly.
                  </p>
                  <button
                    onClick={handleCloseQuestionnaire}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                    {questions[currentQuestion].question}
                  </h4>
                  
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-200 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option}</span>
                          <ArrowRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100" />
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Back Button */}
                  {currentQuestion > 0 && (
                    <button
                      onClick={handleBack}
                      className="w-full mt-4 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200"
                    >
                      Back
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CRMHeroSection;