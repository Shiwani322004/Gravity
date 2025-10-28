'use client';

import {
  BarChart3,
  ArrowRight,
  CheckCircle,
  X,
  RefreshCw,
  Shield,
  MapPin,
  Route,
  Users,
  Wrench,
  Clock,
  Zap,
  TrendingUp,
  Car,
  Smartphone
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function GPSHero() {
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

  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const [hasAutoPopupShown, setHasAutoPopupShown] = useState(false);
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

  const verifyCaptcha = (value) => {
    setCaptchaInput(value);
    setCaptchaValid(parseInt(value) === captchaQuestion.answer);
  };

  const providerCards = [
    {
     //provider: "Azuga",
      vendorLogo: "/images/azuga.png",
      price: "Starts at $25 per month/vehicle",
      features: [
        "Best for Midsize Fleets and Larger Fleets",
        "30-second refresh rate (15 sec option)",
        "24/7 support (email, phone, ticket)"
      ],
      buttonText: "Compare Quotes",
    },
    {
      //provider: "Motive",
      vendorLogo: "/images/motive.png",
      price: "Contact for price",
      features: [
        "Best for Accountability and Automation",
        "1-3 second refresh rate",
        "24/7 email/phone support"
      ],
      buttonText: "Compare Quotes",
    },
    {
      //provider: "Teletracnavman",
      vendorLogo: "/images/tele.png",
      price: "Custom pricing",
      features: [
        "Best for Maintenance and Safety",
        "1-second data refresh rate",
        "Video capacity: 1000"
      ],
      buttonText: "Compare Quotes",
    },
    {
     // provider: "Verizon Connect",
      vendorLogo: "/images/verizon.png",
      price: "Starts at $20 per vehicle/month",
      features: [
        "Best for Midsize Fleets Services",
        "30-second data refresh rate",
        "24/7 customer support"
      ],
      buttonText: "Compare Quotes",
    },
    {
     //provider: "Samsara",
      vendorLogo: "/images/samsara.png",
      price: "From $44 per vehicle per month",
      features: [
        "Best for Sustainability and Safety",
        "1-second data refresh rate",
        "24/7 customer support"
      ],
      buttonText: "Compare Quotes",
    }
  ];

  const questions = [
    {
      question: "What type of fleet do you manage?",
      options: [
        "Delivery & Logistics",
        "Service & Maintenance",
        "Construction & Equipment",
        "Transportation & Passenger"
      ],
      key: "fleetType"
    },
    {
      question: "How many vehicles are in your fleet?",
      options: ["1-10", "11-25", "26-50", "51+"],
      key: "vehicleCount"
    },
    {
      question: "What's your primary goal with GPS tracking?",
      options: [
        "Reduce Fuel Costs",
        "Improve Driver Safety",
        "Optimize Routes",
        "Enhance Customer Service"
      ],
      key: "primaryGoal"
    },
    {
      question: "Which features are most important to you?",
      options: [
        "Real-time Tracking",
        "Route Optimization",
        "Maintenance Alerts",
        "Driver Behavior Monitoring"
      ],
      key: "importantFeatures"
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.zipCode) {
      alert('Please fill in all required fields');
      return;
    }
    const zipRegex = formData.country === 'US'
      ? /^\d{5}(-\d{4})?$/
      : /^\d{6}$/;

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
        fleet_type: answers.fleetType || 'Not specified',
        vehicle_count: answers.vehicleCount || 'Not specified',
        primary_goal: answers.primaryGoal || 'Not specified',
        important_features: answers.importantFeatures || 'Not specified',
        subject: `GPS Fleet Management Inquiry from ${formData.name}`,
        from_name: 'GPS Fleet Management Finder'
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
      <section
        ref={sectionRef}
        className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 lg:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-8 text-left">
              <span className="text-black">The Best </span>
              <span className="text-[#007bff]">GPS Fleet Management Systems</span>
              <span className="text-black"> of 2025</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                At <strong className="text-[#007bff]">B2B Gravity</strong>, we understand the importance of efficient logistics for your business. That's why we recommend the best GPS fleet management systems that provide real-time visibility and control over your vehicles. The best fleet management solutions offer AI-driven route optimization, advanced telematics, and real-time tracking to help you manage your fleet more effectively. Whether you're running a small delivery service or a large transportation company, the right GPS tracking system can transform how you monitor, maintain, and optimize your fleet operations.
              </p>

              {!showMore ? (
                <>
                  <p>
                    As your fleet grows, ensuring you have the right tracking tools is critical. Small operations can often manage with basic vehicle tracking, but as your business expands, it's essential that your management tools scale accordingly. Implementing the best GPS fleet management system can significantly enhance your ability to reduce costs, improve driver safety, and increase operational efficiency...
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setShowMore(true)}
                      className="px-6 py-2 bg-gradient-to-r from-[#007bff] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      MORE +
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    As your fleet grows, ensuring you have the right tracking tools is critical. Small operations can often manage with basic vehicle tracking, but as your business expands, it's essential that your management tools scale accordingly. Implementing the best GPS fleet management system can significantly enhance your ability to reduce costs, improve driver safety, and increase operational efficiency.
                  </p>
                  <p>
                    At <strong className="text-[#007bff]">B2B Gravity</strong>, we help you find the perfect fleet solution that aligns with your business needs, offering features like real-time GPS tracking, maintenance alerts, and comprehensive reporting. Our experts analyze your specific requirements to match you with platforms that provide the right balance of functionality, scalability, and cost-effectiveness.
                  </p>

                  <div className="space-y-6 pt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
                      Key Features to Look For in GPS Fleet Management
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Real-Time Vehicle Tracking:</strong> Monitor your entire fleet with live GPS updates and see vehicle locations, speed, and status in real-time.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">AI-Powered Route Optimization:</strong> Automatically plan the most efficient routes considering traffic, weather, and delivery constraints.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Driver Safety Monitoring:</strong> Track driving behavior including speeding, harsh braking, and rapid acceleration to improve safety.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Maintenance Alerts:</strong> Receive automated notifications for scheduled maintenance and potential vehicle issues before they become problems.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Geofencing:</strong> Set virtual boundaries and receive instant alerts when vehicles enter or leave designated areas.
                        </div>
                      </div>
                    </div>

                    <p className="text-lg font-semibold text-gray-900 mt-8 pt-6 border-t border-gray-200">
                      Explore our top picks for GPS fleet management systems below. Compare features, pricing, and get personalized recommendations tailored to your specific business requirements.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {providerCards.map((card, index) => (
                <div
                  key={card.provider}
                  className="group relative bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3 p-6 flex flex-col h-full hover:border-blue-200"
                >
                  <div className="flex-1">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-full h-20 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {card.provider}
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {card.provider}
                    </h3>

                    <div className="text-center mb-6">
                      <p className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {card.price}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-gray-700 group/feature">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                          <span className="text-sm leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <button 
                      onClick={handleOpenQuestionnaire}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-sm font-medium">{card.buttonText}</span>
                      <ArrowRight size={16} className="relative group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questionnaire Popup */}
      {showQuestionnaire && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-900">
                {isCompleted ? "Thank You!" : "Find Your Perfect GPS Fleet Solution"}
              </h3>
              <button
                onClick={handleCloseQuestionnaire}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            {!isCompleted && (
              <div className="px-6 pt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / 7) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-right">
                  Step {currentQuestion + 1} of 7
                </p>
              </div>
            )}
            <div className="p-6">
              {isCompleted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Perfect Fleet Solution Found!</h4>
                  <p className="text-gray-600 mb-6">
                    Based on your responses, you'll receive personalized GPS fleet management recommendations and quotes in your inbox soon.
                  </p>
                  <button
                    onClick={handleCloseQuestionnaire}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              ) : currentQuestion < questions.length ? (
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                    {questions[currentQuestion].question}
                  </h4>
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 text-left border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 hover:shadow-md group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option}</span>
                          <ArrowRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
                      className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Shield className="text-blue-500" size={24} />
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
                          <RefreshCw size={18} className="text-blue-500" />
                        </button>
                      </div>
                      <input
                        type="number"
                        value={captchaInput}
                        onChange={e => verifyCaptcha(e.target.value)}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${captchaInput && (captchaValid ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50')}`}
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
                      className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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