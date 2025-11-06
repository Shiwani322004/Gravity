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
  X,
  Shield,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic'

export default function CRMHeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    zipCode: '',
    country: 'US'
  });
  
  // Manual CAPTCHA State
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);

  // Auto-popup timer state
  const [hasAutoPopupShown, setHasAutoPopupShown] = useState(false);

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

  // Auto-popup timer effect
  useEffect(() => {
    // Only set timer if:
    // 1. Auto popup hasn't shown yet
    // 2. Questionnaire is not already open
    // 3. User hasn't manually closed it recently
    if (!hasAutoPopupShown && !showQuestionnaire) {
      const timer = setTimeout(() => {
        handleOpenQuestionnaire();
        setHasAutoPopupShown(true);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [hasAutoPopupShown, showQuestionnaire]);

  // Generate new CAPTCHA question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptchaQuestion({ num1, num2, answer });
    setCaptchaInput('');
    setCaptchaValid(false);
  };

  useEffect(() => {
    if (showQuestionnaire) {
      generateCaptcha();
    }
  }, [showQuestionnaire]);

  // Verify CAPTCHA
  const verifyCaptcha = (value) => {
    setCaptchaInput(value);
    setCaptchaValid(parseInt(value) === captchaQuestion.answer);
  };

  const questions = [
    {
      question: "Are you currently using a CRM?",
      options: ["Yes, we have one", "No, we don't have one", "We're evaluating options"],
      key: "currentCRM"
    },
    {
      question: "Roughly how many employees will need access?",
      options: ["1-5", "6-15", "16-50", "50+"],
      key: "employeeCount"
    },
    {
      question: "What features are most important for your evaluation?",
      options: ["Lead tracking and management", "Customer service and success", "Sales and forecasting tools", "3rd party integrations", "Email marketing"],
      key: "importantFeatures"
    },
    {
      question: "What industry are you in?",
      options: ["Construction", "Ecommerce", "Education", "Financial Services", "Healthcare", "Manufacturing", "Professional Services", "Real Estate", "Retail", "Technology", "Other"],
      key: "industry"
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].key]: answer
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.zipCode) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate ZIP code format based on country
    const zipRegex = formData.country === 'US' 
      ? /^\d{5}(-\d{4})?$/ // US: 12345 or 12345-6789
      : /^\d{6}$/; // India: 123456

    if (!zipRegex.test(formData.zipCode)) {
      alert(formData.country === 'US' 
        ? 'Please enter a valid US ZIP code (e.g., 12345 or 12345-6789)' 
        : 'Please enter a valid Indian PIN code (6 digits)');
      return;
    }

    if (!captchaValid) {
      alert('Please complete the security verification correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        access_key: '9584fb6d-ef88-4143-b3c3-90a272f9e1d5', // Your Web3Forms access key
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        zip_code: formData.zipCode,
        country: formData.country,
        current_crm: answers.currentCRM || 'Not specified',
        employee_count: answers.employeeCount || 'Not specified',
        important_features: answers.importantFeatures || 'Not specified',
        industry: answers.industry || 'Not specified',
        subject: `New CRM Inquiry from ${formData.name}`,
        from_name: 'CRM System Finder'
      };

      console.log('Submitting CRM form data:', submissionData);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      console.log('Web3Forms response:', result);

      if (result.success) {
        setIsCompleted(true);
        setTimeout(() => {
          setShowQuestionnaire(false);
          resetQuestionnaire();
        }, 3000);
      } else {
        console.error('Web3Forms error:', result.message);
        alert(`Submission failed: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
    setCaptchaInput('');
    setCaptchaValid(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      zipCode: '',
      country: 'US'
    });
  };

  const handleOpenQuestionnaire = () => {
    resetQuestionnaire();
    setShowQuestionnaire(true);
    generateCaptcha();
  };

  const handleCloseQuestionnaire = () => {
    setShowQuestionnaire(false);
    resetQuestionnaire();
    // Mark that user has interacted with the popup
    setHasAutoPopupShown(true);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const crmCards = [
    {
     // badge: "Best for Growing Businesses",
      //provider: "Zoho CRM",
      vendorLogo: "/images/zoho.png",
      price: "Starts at $14 per user per month",
      features: ["Office 365 integration", "Zoho Marketplace", "24/7 customer support"],
      buttonText: "Compare Quotes",
      icon: <Zap className="text-blue-500" size={20} />,
      accentColor: "hover:border-blue-400/50"
    },
    {
      //badge: "Best for Customer Lifecycle",
      //provider: "Creatio",
      vendorLogo: "/images/creatio.png",
      price: "Starts at $25 per user per month",
      features: ["14-day free trial", "No-code automation", "24/7 customer support"],
      buttonText: "Compare Quotes",
      icon: <Workflow className="text-cyan-500" size={20} />,
      accentColor: "hover:border-cyan-400/50"
    },
    {
     //badge: "Best for Sales & Marketing",
     // provider: "HubSpot CRM",
      vendorLogo: "/images/hubspot.png",
      price: "Starts at $9 per month per user",
      features: ["1,000 marketing contacts", "Email chat support", "Marketing automation"],
      buttonText: "Compare Quotes",
      icon: <Users className="text-blue-600" size={20} />,
      accentColor: "hover:border-blue-500/50"
    },
    {
      //badge: "Best All-In-One Option",
      //provider: "HoneyBook",
      vendorLogo: "/images/honeybook.png",
      price: "Starts at $29 per user per month",
      features: ["7-day free trial", "Project management", "24/7 phone and email support"],
      buttonText: "Compare Quotes",
      icon: <BarChart3 className="text-blue-400" size={20} />,
      accentColor: "hover:border-blue-400/50"
    },
    {
      //badge: "Best for Automation",
      //provider: "Pipedrive",
      vendorLogo: "/images/pipedrive.png",
      price: "Starts at $14 per user per month",
      features: ["Free 14-day trial", "Sales automation", "24/7 online chat support"],
      buttonText: "Compare Quotes",
      icon: <Brain className="text-cyan-600" size={20} />,
      accentColor: "hover:border-cyan-500/50"
    }
  ];

  const descriptionContent = `
    Finding the right CRM software is crucial for streamlining your sales process, improving customer relationships, and driving business growth. Our platform compares the top CRM solutions in the market to help you make an informed decision. Whether you're a small business looking for basic contact management or an enterprise needing advanced automation and analytics, we've got you covered. 

    The modern CRM landscape offers solutions for every business need - from sales force automation and marketing campaign management to customer service and analytics. With features like AI-powered insights, workflow automation, and seamless third-party integrations, the right CRM can transform how you engage with customers and manage your sales pipeline.

    Our comparison tool evaluates key factors including pricing, features, scalability, integration capabilities, and customer support. We analyze user reviews, industry reports, and feature sets to provide you with unbiased recommendations tailored to your specific business requirements and budget constraints.
  `;

  const truncatedContent = descriptionContent.split('\n\n')[0] + ' ' + descriptionContent.split('\n\n')[1].split('. ')[0] + '.';

  return (
    <div>
      {/* Enhanced CRM Hero Section */}
      <section 
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Header Section - Perfectly Centered */}
<div className="mb-16 w-full flex justify-center">
  <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
    {/* Main Heading - Left Aligned */}
    <div className="mb-8 text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
        <span className={`inline-block transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Find the Perfect&nbsp;
        </span>
        <span className={`inline-block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          CRM Software
        </span>
      </h1>
    </div>

    {/* Description Paragraph - Left Aligned */}
    <div className={`mb-8 transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="text-left">
        {isExpanded ? (
          <div className="space-y-4">
            <p className="text-base text-gray-600 leading-relaxed">
              Finding the right CRM software is crucial for streamlining your sales process, improving customer relationships, and driving business growth. Our platform compares the top CRM solutions in the market to help you make an informed decision. Whether you're a small business looking for basic contact management or an enterprise needing advanced automation and analytics, we've got you covered.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              The modern CRM landscape offers solutions for every business need - from sales force automation and marketing campaign management to customer service and analytics. With features like AI-powered insights, workflow automation, and seamless third-party integrations, the right CRM can transform how you engage with customers and manage your sales pipeline.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our comparison tool evaluates key factors including pricing, features, scalability, integration capabilities, and customer support. We analyze user reviews, industry reports, and feature sets to provide you with unbiased recommendations tailored to your specific business requirements and budget constraints.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Finding the right CRM software is crucial for streamlining your sales process, improving customer relationships, and driving business growth. Our platform compares the top CRM solutions in the market to help you make an informed decision. Whether you're a small business looking for basic contact management or an enterprise needing advanced automation and analytics, we've got you covered.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              The modern CRM landscape offers solutions for every business need - from sales force automation and marketing campaign management to customer service and analytics.
            </p>
          </div>
        )}
        
        {/* MORE + Button - Left-aligned */}
        <div className="pt-4">
          <button
            onClick={toggleExpand}
            className="px-6 py-2 bg-gradient-to-r from-[#007bff] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            {isExpanded ? "LESS -" : "MORE +"}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Enhanced CRM Provider Cards Grid - 5 Cards Horizontal */}
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
                    

                    {/* Provider & Vendor with Larger Logo */}
                    <div className="relative mb-4">
                      <h3 className="text-lg font-bold text-gray-900 truncate">{card.provider}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="relative w-55 h-20 rounded-lg overflow-hidden bg-gray-50 border border-gray-200/60 flex items-center justify-center p-1">
                          <Image 
                            src={card.vendorLogo}
                            alt={`${card.provider} logo`}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
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

          {/* Bottom CTA - Centered on the page */}
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

      {/* Questionnaire Popup with 7 Steps - Same as Phone System */}
      {showQuestionnaire && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
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
                    style={{ width: `${((currentQuestion + 1) / 7) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-right">
                  Step {currentQuestion + 1} of 7
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
              ) : currentQuestion < questions.length ? (
                // Steps 1-4: CRM Questions
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                    {questions[currentQuestion].question}
                  </h4>
                  
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-200 hover:shadow-md group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option}</span>
                          <ArrowRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
              ) : currentQuestion === 4 ? (
                // Step 5: Name, Email, Phone
                <form onSubmit={(e) => { e.preventDefault(); setCurrentQuestion(5); }} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Your Contact Information
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : currentQuestion === 5 ? (
                // Step 6: Company, Country, ZIP Code
                <form onSubmit={(e) => { e.preventDefault(); setCurrentQuestion(6); }} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Business Information
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                    >
                      <option value="US">United States</option>
                      <option value="IN">India</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {formData.country === 'US' ? 'ZIP Code' : 'PIN Code'} *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      maxLength={formData.country === 'US' ? 10 : 6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={formData.country === 'US' ? '12345 or 12345-6789' : '123456'}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.country === 'US' 
                        ? 'Enter 5 or 9 digit ZIP code (e.g., 12345 or 12345-6789)' 
                        : 'Enter 6 digit PIN code (e.g., 411001)'}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.company || !formData.zipCode}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : currentQuestion === 6 ? (
                // Step 7: Security Verification
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Security Verification
                  </h4>

                  {/* Manual CAPTCHA */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Security Verification *
                    </label>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Shield className="text-blue-600" size={24} />
                          <span className="text-lg font-bold text-gray-900">
                            {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="p-2 hover:bg-white/50 rounded-lg transition-colors duration-200"
                          title="Generate new question"
                        >
                          <RefreshCw size={18} className="text-blue-600" />
                        </button>
                      </div>
                      <input
                        type="number"
                        value={captchaInput}
                        onChange={(e) => verifyCaptcha(e.target.value)}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                          captchaInput && (captchaValid ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                        }`}
                        placeholder="Enter your answer"
                      />
                      {captchaInput && (
                        <div className={`mt-2 text-sm flex items-center gap-2 ${captchaValid ? 'text-green-600' : 'text-red-600'}`}>
                          {captchaValid ? (
                            <>
                              <CheckCircle size={16} />
                              <span>Correct!</span>
                            </>
                          ) : (
                            <>
                              <X size={16} />
                              <span>Incorrect, please try again</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !captchaValid}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}