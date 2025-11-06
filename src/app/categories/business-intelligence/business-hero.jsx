'use client';

import { ArrowRight, CheckCircle, X, Shield, RefreshCw } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function BusinessHero({ onOpenQuestionnaire }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'US',
    zipCode: ''
  });

  // Business Intelligence specific questions
  const questions = [
    {
      question: "What is your primary goal for implementing Business Intelligence?",
      options: [
        "Improve data-driven decision making",
        "Enhance reporting and dashboards",
        "Automate data analysis processes",
        "Gain competitive insights",
        "Optimize business operations"
      ]
    },
    {
      question: "What type of data sources do you primarily work with?",
      options: [
        "Databases (SQL, NoSQL)",
        "Spreadsheets and CSV files",
        "Cloud applications and APIs",
        "Real-time streaming data",
        "Multiple integrated sources"
      ]
    },
    {
      question: "What's your team's technical expertise level?",
      options: [
        "Beginner - need intuitive drag-and-drop tools",
        "Intermediate - comfortable with basic data modeling",
        "Advanced - can handle complex queries and scripting",
        "Mixed - team has varying skill levels",
        "Not sure / need guidance"
      ]
    },
    {
      question: "What's your budget range for BI software?",
      options: [
        "Under $25/user/month",
        "$25 - $50/user/month",
        "$50 - $100/user/month",
        "$100+/user/month",
        "Enterprise/custom pricing needed"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-show questionnaire after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestionnaire(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Generate CAPTCHA question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2 });
    setCaptchaInput('');
    setCaptchaValid(false);
  };

  // Verify CAPTCHA input
  const verifyCaptcha = (input) => {
    const answer = captchaQuestion.num1 + captchaQuestion.num2;
    setCaptchaInput(input);
    setCaptchaValid(parseInt(input) === answer);
  };

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleAnswer = (answer) => {
    // Store answer or process as needed
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(4); // Move to contact info step
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsCompleted(true);
    setIsSubmitting(false);
  };

  const handleCloseQuestionnaire = () => {
    setShowQuestionnaire(false);
    setCurrentQuestion(0);
    setIsCompleted(false);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      country: 'US',
      zipCode: ''
    });
    generateCaptcha();
  };

  const handleOpenQuestionnaire = () => {
    setShowQuestionnaire(true);
  };

  const providerCards = [
    {
      provider: "Tableau",
      vendorLogo: "/images/tableau.png",
      price: "Starts at $70 per user/month",
      features: [
        "Quick, attractive data visualization",
        "Drag-and-drop interface",
        "Real-time data reflection",
        "Tableau Pulse AI insights"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "Sisense",
      vendorLogo: "/images/sisense.png",
      price: "Custom pricing available",
      features: [
        "Embedded analytics",
        "AI-powered Ask Data feature",
        "In-Chip technology",
        "Handles large datasets well"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "Qlik Sense",
      vendorLogo: "/images/qlikicon.png",
      price: "Starts at $30 per user/month",
      features: [
        "Powerful visualization tools",
        "Associative data model",
        "Self-service analytics",
        "Quality Mobile BI"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "Zoho Analytics",
      vendorLogo: "/images/zoho copy.png",
      price: "Starts at $24 per user/month",
      features: [
        "Generative AI-Infused BI",
        "Top-notch collaboration tools",
        "Advanced analytics",
        "Competitive pricing"
      ],
      buttonText: "Compare Quotes",
    },
    {
      provider: "Activ Trak",
      vendorLogo: "/images/Activ.png",
      price: "Custom pricing available",
      features: [
        "Advanced reporting capabilities",
        "AI-powered insights",
        "Enterprise-grade security",
        "Comprehensive data integration"
      ],
      buttonText: "Compare Quotes",
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 lg:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Content Section - Responsive */}
        <div className={`max-w-4xl mx-auto mb-12 lg:mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 text-left">
            <span className="text-black">What is </span>
            <span className="text-[#007bff]">Business Intelligence?</span>
          </h2>
          
          <div className="space-y-4 lg:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              <strong className="text-[#007bff]">Business intelligence (BI) software</strong> is any application that collects and processes large amounts of unstructured data from internal and external systems and prepares data for analysis. The software is generally used for querying and reporting complex business data. The ultimate goal of BI software is to drive better business decisions, increase revenue, improve operational efficiency, and gain competitive advantages.
            </p>

            {!showMore ? (
              <>
                <p>
                  Business intelligence tools gather data from various sources, such as databases, spreadsheets, and other business applications, and transform it into an understandable format for analysis. The software performs tasks such as data mining, forecasting, and reporting, as well as visualizing data through charts and graphs, allowing users to identify data trends and patterns...
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setShowMore(true)}
                    className="px-6 py-2 bg-gradient-to-r from-[#007bff] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    MORE +
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>
                  Business intelligence tools gather data from various sources, such as databases, spreadsheets, and other business applications, and transform it into an understandable format for analysis. The software performs tasks such as data mining, forecasting, and reporting, as well as visualizing data through charts and graphs, allowing users to identify data trends and patterns. BI software also comes with reporting capabilities so users can create custom reports and presentations shareable with stakeholders.
                </p>

                <div className="space-y-4 lg:space-y-6 pt-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 lg:mt-8 mb-4 lg:mb-6">
                    My Top Picks for Business Intelligence Software
                  </h3>
                  
                  <div className="space-y-3 lg:space-y-4">
                    {[
                      "Tableau: Best for data visualization - Known for quick, attractive data visualization and drag-and-drop interface good for beginners.",
                      "Sisense: Best for embedded analytics - Excellent for embedded analytics with AI-powered Ask Data feature and In-Chip technology.",
                      "Qlik Sense: Best mobile BI software - Offers powerful visualization tools and associative data model with quality mobile BI capabilities.",
                      "Zoho Analytics: Best self-service BI software - Features Generative AI-Infused BI with top-notch collaboration tools and competitive pricing.",
                      "IBM Cognos Analytics: Best for reporting - Provides advanced reporting capabilities with AI-powered insights and enterprise-grade security."
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                        <div className="text-sm sm:text-base">
                          <strong className="text-[#007bff]">{item.split(':')[0]}:</strong> {item.split(':')[1]}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                    Check out my picks for the top business intelligence software below. Compare features, pricing, and get personalized recommendations for your business needs.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Provider Cards Grid - Fully Responsive */}
        <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 lg:mb-16">
            {providerCards.map((card, index) => (
              <div
                key={card.provider}
                className="group relative bg-white rounded-2xl lg:rounded-3xl border-2 border-gray-100 shadow-lg lg:shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3 p-4 sm:p-6 flex flex-col h-full hover:border-blue-200"
              >
                {/* Content Section */}
                <div className="flex-1">
                  {/* Provider Logo */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative w-full h-16 sm:h-20 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image 
                          src={card.vendorLogo}
                          alt={`${card.provider} logo`}
                          width={80}
                          height={40}
                          className="object-contain w-full h-full"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        {/* Fallback text */}
                        <div className="hidden text-xl sm:text-2xl font-bold text-blue-600">
                          {card.provider}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Provider Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {card.provider}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-sm sm:text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {card.price}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 sm:gap-3 text-gray-700 group/feature">
                        <CheckCircle size={12} className="text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                        <span className="text-xs sm:text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => setShowQuestionnaire(true)}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn overflow-hidden relative text-sm sm:text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative font-medium">{card.buttonText}</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right BI Solution?</h3>
              <p className="text-gray-600 mb-6">
                Our experts will help you compare features and pricing from top Business Intelligence vendors to find the perfect solution for your data analytics needs.
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

        {/* Questionnaire Popup - Fully Responsive */}
        {showQuestionnaire && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {isCompleted ? "Thank You!" : "Find Your Perfect BI Solution"}
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
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-500"
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Perfect Match Found!</h4>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                      Based on your answers, we're finding the best BI solutions for your business. You'll receive personalized quotes shortly.
                    </p>
                    <button
                      onClick={handleCloseQuestionnaire}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                    >
                      Close
                    </button>
                  </div>
                ) : currentQuestion < questions.length ? (
                  // Steps 1-4: BI Questions
                  <>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                      {questions[currentQuestion].question}
                    </h4>
                    
                    <div className="space-y-2 sm:space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(option)}
                          className="w-full p-3 sm:p-4 text-left border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-200 hover:shadow-md group text-sm sm:text-base"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">{option}</span>
                            <ArrowRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Back Button */}
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
                  // Step 5: Name, Email, Phone
                  <form onSubmit={(e) => { e.preventDefault(); setCurrentQuestion(5); }} className="space-y-3 sm:space-y-4">
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

                    {/* Buttons */}
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
                        className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        Next
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </form>
                ) : currentQuestion === 5 ? (
                  // Step 6: Company, Country, ZIP Code
                  <form onSubmit={(e) => { e.preventDefault(); setCurrentQuestion(6); }} className="space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                      Business Information
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
                          ? 'Enter 5 or 9 digit ZIP code' 
                          : 'Enter 6 digit PIN code'}
                      </p>
                    </div>

                    {/* Buttons */}
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
                        className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        Next
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </form>
                ) : currentQuestion === 6 ? (
                  // Step 7: Security Verification
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
                      Security Verification
                    </h4>

                    {/* Manual CAPTCHA */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                        Security Verification *
                      </label>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Shield className="text-blue-600" size={20} />
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
                            <RefreshCw size={16} className="text-blue-600" />
                          </button>
                        </div>
                        <input
                          type="number"
                          value={captchaInput}
                          onChange={(e) => verifyCaptcha(e.target.value)}
                          required
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base ${
                            captchaInput && (captchaValid ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')
                          }`}
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

                    {/* Buttons */}
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
                        className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit
                            <ArrowRight size={14} />
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
    </section>
  );
}