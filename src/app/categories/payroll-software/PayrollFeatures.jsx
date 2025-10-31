'use client';

import { CheckCircle, X, Zap, ArrowRight, Star, Calculator, Users, Shield, FileText, DollarSign, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function PayrollComparison() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'US',
    zipCode: ''
  });
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);

  const questions = [
    {
      question: "How many employees need payroll processing?",
      options: ["1-10", "11-25", "26-50", "51-100", "100+"]
    },
    {
      question: "What's your primary payroll need?",
      options: ["Basic payroll processing", "Tax filing services", "HR integration", "Benefits administration", "All of the above"]
    },
    {
      question: "Which features are most important to you?",
      options: ["Automated tax filing", "Employee self-service", "Mobile app access", "Integration with accounting", "Compliance management"]
    },
    {
      question: "What's your timeline for implementation?",
      options: ["Immediately", "Within 2 weeks", "Within 1 month", "1-3 months", "Just researching"]
    }
  ];

  // Initialize captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2 });
    setCaptchaInput('');
    setCaptchaValid(false);
  };

  // Verify captcha
  const verifyCaptcha = (input) => {
    const answer = captchaQuestion.num1 + captchaQuestion.num2;
    setCaptchaInput(input);
    setCaptchaValid(parseInt(input) === answer);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle answer selection
  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentQuestion(4); // Move to contact info
    }
  };

  // Handle back navigation
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsCompleted(true);
    setIsSubmitting(false);
  };

  // Handle close questionnaire
  const handleCloseQuestionnaire = () => {
    setShowQuestionnaire(false);
    setTimeout(() => {
      setCurrentQuestion(0);
      setIsCompleted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: 'US',
        zipCode: ''
      });
      setCaptchaInput('');
      setCaptchaValid(false);
    }, 500);
  };

  // Open questionnaire
  const handleOpenQuestionnaire = () => {
    setShowQuestionnaire(true);
    generateCaptcha();
  };

  const providerCards = [
    {
      provider: "ADP",
      price: "$10",
      period: "/user/month + $50 base",
      rating: 4.5,
      reviews: "2.8K reviews",
      features: [
        "Full-service payroll & tax filing",
        "Best for Large Enterprises",
        "Dedicated specialist support",
        "Comprehensive HR integration",
        "Advanced compliance management"
      ],
      pros: [
        "Industry leader with extensive experience and reliability",
        "Comprehensive HR and payroll integration",
        "Strong compliance support and regulatory updates",
        "Scalable solutions for businesses of all sizes"
      ],
      cons: [
        "Higher cost compared to competitors",
        "Complex pricing structure with add-on fees",
        "Steep learning curve for new users",
        "Long-term contracts may be required"
      ],
      logo: "/images/adp.png",
      tagline: "ADP provides comprehensive payroll and HR solutions for businesses of all sizes. Industry-leading platform with robust compliance features, tax filing services, and integrated human resources management.",
      color: "from-blue-600 to-indigo-600",
      badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      provider: "Zoho Payroll",
      price: "$25",
      period: "/user/month",
      rating: 4.3,
      reviews: "1.9K reviews",
      features: [
        "Automated payroll & compliance",
        "Best for Small Businesses",
        "Email and chat support",
        "Seamless Zoho ecosystem integration",
        "Mobile app access"
      ],
      pros: [
        "Affordable pricing for small businesses",
        "Easy integration with Zoho ecosystem",
        "User-friendly interface and setup",
        "Good customer support options"
      ],
      cons: [
        "Limited advanced enterprise features",
        "Fewer customization options",
        "Basic reporting capabilities",
        "Limited third-party integrations"
      ],
      logo: "/images/zopayroll.png",
      tagline: "Zoho Payroll offers automated payroll solutions designed for small to medium businesses. Seamlessly integrates with Zoho's ecosystem providing comprehensive business management tools.",
      color: "from-orange-500 to-red-500",
      badgeColor: "bg-gradient-to-r from-orange-400 to-red-400",
      icon: <Users className="w-6 h-6" />
    },
    {
      provider: "BambooHR",
      price: "Custom",
      period: "pricing",
      rating: 4.6,
      reviews: "2.4K reviews",
      features: [
        "Payroll + HR platform integration",
        "Best for HR Integration",
        "24/7 customer support",
        "Employee self-service portal",
        "Performance management tools"
      ],
      pros: [
        "Excellent HR and payroll integration",
        "User-friendly interface design",
        "Strong employee self-service features",
        "Comprehensive reporting and analytics"
      ],
      cons: [
        "Custom pricing can be expensive",
        "Limited standalone payroll features",
        "Setup requires HR expertise",
        "Fewer accounting integrations"
      ],
      logo: "/images/bam.png",
      tagline: "BambooHR delivers integrated HR and payroll platform with comprehensive employee management. Ideal for companies prioritizing human resources alongside payroll processing.",
      color: "from-green-600 to-emerald-600",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      icon: <Shield className="w-6 h-6" />
    },
    {
      provider: "OnPay",
      price: "$36",
      period: "+ $4/user/month",
      rating: 4.7,
      reviews: "2.1K reviews",
      features: [
        "Unlimited payroll runs",
        "Best for SMBs with contractors",
        "Phone and email support",
        "Benefits administration",
        "Tax filing services"
      ],
      pros: [
        "Simple, transparent pricing structure",
        "Excellent customer service and support",
        "Comprehensive features at competitive price",
        "No long-term contracts required"
      ],
      cons: [
        "Limited international capabilities",
        "Fewer enterprise-level features",
        "Smaller company with less brand recognition",
        "Integration options still growing"
      ],
      logo: "/images/onpay.png",
      tagline: "OnPay offers all-in-one payroll platform with transparent pricing and excellent support. Modern solution providing comprehensive features without complex contracts or hidden fees.",
      color: "from-teal-600 to-cyan-600",
      badgeColor: "bg-gradient-to-r from-teal-500 to-cyan-500",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      provider: "QuickBooks Payroll",
      price: "$45",
      period: "/month + $5/user",
      rating: 4.4,
      reviews: "2.6K reviews",
      features: [
        "Automatic tax calculations",
        "Best for Accounting Sync",
        "24/7 expert support",
        "Same-day direct deposit",
        "QuickBooks seamless integration"
      ],
      pros: [
        "Perfect integration with QuickBooks accounting",
        "Easy setup and user-friendly interface",
        "Good for existing QuickBooks users",
        "Reliable tax calculation and filing"
      ],
      cons: [
        "Limited standalone functionality",
        "Higher cost for full-service features",
        "Less comprehensive HR features",
        "Mobile app functionality limited"
      ],
      logo: "/images/quickbooks.png",
      tagline: "QuickBooks Payroll provides integrated payroll solution seamlessly connecting with QuickBooks accounting. Ideal for small businesses already using QuickBooks seeking streamlined financial management.",
      color: "from-purple-600 to-pink-600",
      badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare Top <span className="text-[#007bff]">Payroll Software</span> Platforms
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of features, pros, and cons to help you choose the right payroll solution for your business
            </p>
          </div>

          {/* All Platforms Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {providerCards.map((card, index) => (
              <div
                key={card.provider}
                onClick={() => setCurrentCardIndex(index)}
                className={`cursor-pointer bg-gradient-to-r from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
                  index === currentCardIndex 
                    ? 'border-blue-500 shadow-lg scale-105' 
                    : 'border-transparent hover:border-blue-300'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100 mb-3 sm:mb-4">
                    {card.logo ? (
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                        <Image 
                          src={card.logo} 
                          alt={`${card.provider} logo`}
                          width={64}
                          height={64}
                          className="object-contain w-full h-full"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        {/* Fallback text */}
                        <div className="hidden text-base sm:text-lg font-bold text-blue-600">
                          {card.provider.charAt(0)}
                        </div>
                      </div>
                    ) : (
                      <div className="text-lg sm:text-xl font-bold text-blue-600">
                        {card.provider.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {card.provider}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Tagline Section - Responsive */}
          <div className="mb-8 sm:mb-10">
            <div className={`bg-gradient-to-r ${providerCards[currentCardIndex].color} p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden transition-all duration-500 hover:shadow-xl`}>
              {/* Rating and Price Badge - Responsive positioning */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="text-center">
                    {/* Star Rating */}
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {renderStars(providerCards[currentCardIndex].rating)}
                      <span className="text-xs sm:text-sm font-semibold text-gray-700 ml-1">
                        {providerCards[currentCardIndex].rating}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2 sm:mb-3">
                      {providerCards[currentCardIndex].reviews}
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-lg sm:text-2xl font-bold text-gray-900">
                        {providerCards[currentCardIndex].price}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600">
                        {providerCards[currentCardIndex].period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content - Responsive */}
              <div className="max-w-4xl mx-auto pr-24 sm:pr-32">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg backdrop-blur-sm border border-white/30">
                    {providerCards[currentCardIndex].icon}
                  </div>
                  {providerCards[currentCardIndex].provider} Payroll Solutions
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                  {providerCards[currentCardIndex].tagline}
                </p>
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Pros and Cons Grid - Responsive */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {/* Pros Column */}
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold text-green-700 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <CheckCircle size={24} />
                Advantages
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {providerCards[currentCardIndex].pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4 text-gray-700 bg-green-50 p-3 sm:p-4 rounded-lg">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span className="text-base sm:text-lg">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons Column */}
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold text-red-700 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <X size={24} />
                Limitations
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {providerCards[currentCardIndex].cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4 text-gray-700 bg-red-50 p-3 sm:p-4 rounded-lg">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={12} className="text-white" />
                    </div>
                    <span className="text-base sm:text-lg">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Section - Responsive */}
          <div className="mb-8 sm:mb-10">
            <h4 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Zap size={24} />
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {providerCards[currentCardIndex].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Get Quote CTA - Responsive */}
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={handleOpenQuestionnaire}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto text-sm sm:text-base"
            >
              Get Personalized Quotes
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Questionnaire Popup - Responsive */}
      {showQuestionnaire && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {isCompleted ? "Thank You!" : "Find Your Perfect Payroll Software"}
              </h3>
              <button
                onClick={handleCloseQuestionnaire}
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X size={18} className="text-gray-500" />
              </button>
            </div>
            {/* Progress Bar */}
            {!isCompleted && (
              <div className="px-4 sm:px-6 pt-3 sm:pt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / 7) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 text-right">
                  Step {currentQuestion + 1} of 7
                </p>
              </div>
            )}
            {/* Content */}
            <div className="p-4 sm:p-6">
              {isCompleted ? (
                <div className="text-center py-6 sm:py-8">
                  <CheckCircle size={40} className="text-green-500 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Perfect Payroll Software Found!</h4>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    Based on your responses, you'll receive personalized payroll software recommendations and quotes in your inbox soon.
                  </p>
                  <button
                    onClick={handleCloseQuestionnaire}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                  >
                    Close
                  </button>
                </div>
              ) : currentQuestion < questions.length ? (
                // Core Q&A steps
                <>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                    {questions[currentQuestion].question}
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-3 sm:p-4 text-left border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 hover:shadow-md group text-sm sm:text-base"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option}</span>
                          <ArrowRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>
                  {currentQuestion > 0 && (
                    <button
                      onClick={handleBack}
                      className="w-full mt-3 sm:mt-4 py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200 text-sm sm:text-base"
                    >
                      Back
                    </button>
                  )}
                </>
              ) : currentQuestion === 4 ? (
                <form onSubmit={e => { e.preventDefault(); setCurrentQuestion(5); }} className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                    Your Contact Information
                  </h4>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-2 sm:py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200 text-sm sm:text-base"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      Next
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              ) : currentQuestion === 5 ? (
                <form onSubmit={e => { e.preventDefault(); setCurrentQuestion(6); }} className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                    Company Information
                  </h4>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-sm sm:text-base"
                    >
                      <option value="US">United States</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      {formData.country === 'US' ? 'ZIP Code' : 'PIN Code'} *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      maxLength={formData.country === 'US' ? 10 : 6}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder={formData.country === 'US' ? '12345 or 12345-6789' : '123456'}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.country === 'US'
                        ? 'Enter 5 or 9 digit ZIP code (e.g., 12345 or 12345-6789)'
                        : 'Enter 6 digit PIN code (e.g., 411001)'}
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-2 sm:py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200 text-sm sm:text-base"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.company || !formData.zipCode}
                      className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      Next
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              ) : currentQuestion === 6 ? (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                    Security Verification
                  </h4>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Security Question *
                    </label>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Shield className="text-blue-500" size={20} />
                          <span className="text-base sm:text-lg font-bold text-gray-900">
                            {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="p-1 sm:p-2 hover:bg-white/50 rounded-lg transition-colors duration-200"
                          title="Generate new question"
                        >
                          <RefreshCw size={16} className="text-blue-500" />
                        </button>
                      </div>
                      <input
                        type="number"
                        value={captchaInput}
                        onChange={e => verifyCaptcha(e.target.value)}
                        required
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base ${captchaInput && (captchaValid ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
                        placeholder="Enter your answer"
                      />
                      {captchaInput && (
                        <div className={`mt-2 text-xs sm:text-sm flex items-center gap-2 ${captchaValid ? 'text-green-600' : 'text-red-600'}`}>
                          {captchaValid ? (
                            <>
                              <CheckCircle size={14} />
                              <span>Correct!</span>
                            </>
                          ) : (
                            <>
                              <X size={14} />
                              <span>Incorrect, please try again</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 py-2 sm:py-3 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition-all duration-200 border border-gray-200 text-sm sm:text-base"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !captchaValid}
                      className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      {isSubmitting
                        ? (<><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting...</>)
                        : (<>Submit <ArrowRight size={14} /></>)
                      }
                    </button>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}