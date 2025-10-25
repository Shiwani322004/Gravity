
'use client';

import {
  Phone,
  Video,
  Users,
  BarChart3,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap,
  X,
  RefreshCw
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function Categories() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    zipCode: '',
    country: 'US'
  });

  // Manual CAPTCHA
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);

  // Auto-popup timer state
  const [hasAutoPopupShown, setHasAutoPopupShown] = useState(false);

  // Read More state for intro section
  const [showMore, setShowMore] = useState(false);

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

  useEffect(() => {
    if (!hasAutoPopupShown && !showQuestionnaire) {
      const timer = setTimeout(() => {
        handleOpenQuestionnaire();
        setHasAutoPopupShown(true);
      }, 9000);
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
    if (showQuestionnaire) generateCaptcha();
  }, [showQuestionnaire]);

  // Verify CAPTCHA
  const verifyCaptcha = (value) => {
    setCaptchaInput(value);
    setCaptchaValid(parseInt(value) === captchaQuestion.answer);
  };
  const providerCards = [
    {
     
  
      vendorLogo: "/images/ooma.png",
      price: "Starts at $19.95 per user/month",
      features: ["No Contract", "50+ Standard Features", "Virtual receptionist"],
      buttonText: "Compare Quotes",
     
     
    },
    {
    
    
      vendorLogo: "/images/ringcentral.png",
      price: "Starts at $20/user/month paid monthly",
      features: ["100 participant video meetings", "24/7 customer support", "Advanced analytics"],
      buttonText: "Compare Quotes",
     
    },
    {
  
     
      vendorLogo: "/images/zoom.png",
      price: "Starts at $10 monthly per user/month",
      features: ["International Calling", "24/7 customer support", "Team Chat"],
      buttonText: "Compare Quotes",
      
    },
    {
     

      vendorLogo: "/images/dialpad.png",
      price: "Standard at $15 per user/month",
      features: ["HD calls and meetings", "Live transcripts", "Instant call summaries"],
      buttonText: "Compare Quotes",
     
    },
    {


      vendorLogo: "/images/vonage.png",
      price: "Starts at $13.99 per user/month",
      features: ["Unlimited domestic calling", "Supports desktop and mobile apps", "Team messaging"],
      buttonText: "Compare Quotes",
    
    }
  ];

  const questions = [
    {
      question: "What type of CRM are you currently using?",
      options: [
        "None (starting fresh)",
        "Cloud-based CRM (e.g., Salesforce, Zoho)",
        "On-premises CRM",
        "Spreadsheet or Manual"
      ],
      key: "currentSystem"
    },
    {
      question: "How many users will access the CRM?",
      options: ["1-10", "11-25", "26-50", "51+"],
      key: "userCount"
    },
    {
      question: "What's your primary goal with a new CRM?",
      options: [
        "Pipeline/Lead Management",
        "Customer Support",
        "Sales Automation",
        "Integration & Analytics"
      ],
      key: "primaryGoal"
    },
    {
      question: "Do you need any specific integrations?",
      options: [
        "VoIP Calling",
        "Email/Marketing",
        "Finance/ERP",
        "Not sure yet"
      ],
      key: "integrations"
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].key]: answer
    };
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  // Submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.zipCode) {
      alert('Please fill in all required fields');
      return;
    }
    const zipRegex = formData.country === 'US'
      ? /^\d{5}(-\d{4})?$/ // US ZIP formats
      : /^\d{6}$/; // India PIN

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
        access_key: '9584fb6d-ef88-4143-b3c3-90a272f9e1d5',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        zip_code: formData.zipCode,
        country: formData.country,
        current_system: answers.currentSystem || 'Not specified',
        user_count: answers.userCount || 'Not specified',
        primary_goal: answers.primaryGoal || 'Not specified',
        integrations: answers.integrations || 'Not specified',
        subject: `CRM Inquiry from ${formData.name}`,
        from_name: 'CRM System Finder'
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (result.success) {
        setIsCompleted(true);
        setTimeout(() => {
          setShowQuestionnaire(false);
          resetQuestionnaire();
        }, 3200);
      } else {
        alert(`Submission failed: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
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
    setHasAutoPopupShown(true);
  };

  const handleBack = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <div>
    {/* Phone System Hero Section */}
<section
  ref={sectionRef}
  className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 lg:py-20 overflow-hidden"
>
  {/* Soft Background Orbs */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
    <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
  {/* Header Section */}
  <div className="text-left mb-16">
    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Main Heading */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          <span className={`block transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            The Best <span className="text-[#007bff]">Phone System</span> of 2025
          </span>
        </h1>
      </div>
      {/* Intro Paragraph & Read More */}
      <div className="mt-6 text-base text-gray-700 max-w-2xl mx-auto text-left space-y-3">
        <p>
          At <span className="font-semibold text-[#007bff]">B2B Gravity</span>, finding the right phone solution is the key to transforming the way your team connects and collaborates. We handpick the <span className="font-semibold text-[#007bff]">best phone systems</span> for reliability, advanced VoIP capabilities, cost savings, and easy integrations to boost productivity.
        </p>
        <h2 className="mt-6 text-xl font-bold text-gray-900">Why Upgrade Your Phone System?</h2>
        <p>
          Modern phone systems go beyond just calling. Get virtual receptionists, powerful analytics, CRM integrations, and seamless mobile access—features that help your team stay agile and reachable everywhere.
        </p>
        <p>
          From startups to scaling enterprises, the ideal phone system adapts to you. Enjoy dynamic call routing, automated greetings, and real-time insights to serve clients better and make informed decisions.
        </p>
        {!showMore && (
          <button
            className="mt-5 px-5 py-2 bg-gradient-to-r from-[#007bff] to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            onClick={() => setShowMore(true)}
          >
            MORE +
          </button>
        )}
        {showMore && (
          <>
            <h2 className="mt-6 text-xl font-bold text-gray-900">Tailored Solutions for Your Business</h2>
            <p className="mt-4">
              Whether you want a robust system for a large contact center or something flexible for remote teams, <span className="font-semibold text-[#007bff]">B2B Gravity</span> guides you to solutions with clear pricing, transparent support, and flexible feature sets.
            </p>
            <p>
              Discover unified communication tools, scalable integrations, and secure connectivity—all designed to simplify your workflow and reduce communication silos. Explore packages with HD voice, smart voicemail, call forwarding, video conferencing, and more.
            </p>
          </>
        )}
      </div>
    </div>
  </div>
  
  {/* Enhanced Provider Cards Grid - 5 Cards Horizontal */}
  <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {providerCards.map((card, index) => (
        <div
          key={card.provider}
          className={`group relative bg-white rounded-2xl border-2 border-gray-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 p-6 ${card.accentColor} hover:bg-blue-50/30 flex flex-col h-full`}
       
        >
        
          
          {/* Content Section */}
          <div className="flex-1">
            {/* Badge with Icon */}
           
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

  {/* Bottom CTA */}
  <div className={`text-left mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-lg max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
        <p className="text-gray-600 mb-6">
          Our phone system experts help you compare features and pricing from top providers with recommendations tailored for your business size and needs.
        </p>
        <h4 className="text-lg font-semibold text-blue-700 mb-2">Get Expert Advice & Instant Quotes</h4>
        <p className="text-gray-700 mb-6">
          Unsure what to pick? Fill out our quick form for direct quotes and side-by-side comparisons, so you can invest with confidence and maximize value.
        </p>
        <button
          onClick={handleOpenQuestionnaire}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-[#007bff] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group/cta mx-auto"
        >
          Get Your Free Phone System Quotes
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
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-900">
                {isCompleted ? "Thank You!" : "Let Us Match Your CRM"}
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
                    className="bg-gradient-to-r from-orange-500 to-blue-600 h-2 rounded-full transition-all duration-500"
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Perfect CRM Match Found!</h4>
                  <p className="text-gray-600 mb-6">
                    Based on your responses, you’ll receive personalized CRM system recommendations and quotes in your inbox soon.
                  </p>
                  <button
                    onClick={handleCloseQuestionnaire}
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              ) : currentQuestion < questions.length ? (
                // Core Q&A steps
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                    {questions[currentQuestion].question}
                  </h4>
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left border border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 hover:shadow-md group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option}</span>
                          <ArrowRight size={16} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                      </button>
                    ))}
                  </div>
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
                <form onSubmit={e => { e.preventDefault(); setCurrentQuestion(5); }} className="space-y-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
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
                      className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : currentQuestion === 5 ? (
                <form onSubmit={e => { e.preventDefault(); setCurrentQuestion(6); }} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Company Information
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder={formData.country === 'US' ? '12345 or 12345-6789' : '123456'}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.country === 'US'
                        ? 'Enter 5 or 9 digit ZIP code (e.g., 12345 or 12345-6789)'
                        : 'Enter 6 digit PIN code (e.g., 411001)'}
                    </p>
                  </div>
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
                      className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : currentQuestion === 6 ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Security Verification
                  </h4>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Security Question *
                    </label>
                    <div className="bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-orange-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Shield className="text-orange-500" size={24} />
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
                          <RefreshCw size={18} className="text-orange-500" />
                        </button>
                      </div>
                      <input
                        type="number"
                        value={captchaInput}
                        onChange={e => verifyCaptcha(e.target.value)}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${captchaInput && (captchaValid ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
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
                      className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting
                        ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting...</>)
                        : (<>Submit <ArrowRight size={16} /></>)
                      }
                    </button>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
