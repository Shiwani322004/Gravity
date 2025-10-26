'use client';

import {
  BarChart3,
  ArrowRight,
  CheckCircle,
  X,
  RefreshCw,
  Shield,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  Zap,
  BarChart,
  PieChart,
  LineChart,
  Target,
  Database,
  Cpu,
  Cloud,
  Activity
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function BusinessIntelligence() {
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

  // Read More state
  const [showMore, setShowMore] = useState(false);

  // Card swiper state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Graph animation state
  const [graphData, setGraphData] = useState([30, 50, 70, 90, 60]);
  const [graphLabels] = useState(['Q1', 'Q2', 'Q3', 'Q4', 'Q5']);
  const [graphAnimation, setGraphAnimation] = useState(false);

  // Stats counter state
  const [stats, setStats] = useState({
    companies: 0,
    efficiency: 0,
    roi: 0
  });

  // Vertical bar graph data
  const [verticalGraphData, setVerticalGraphData] = useState([
    { label: 'Data Processing', value: 0, color: 'from-blue-500 to-cyan-500' },
    { label: 'Real-time Analytics', value: 0, color: 'from-green-500 to-emerald-500' },
    { label: 'AI Insights', value: 0, color: 'from-purple-500 to-pink-500' },
    { label: 'Report Generation', value: 0, color: 'from-orange-500 to-red-500' },
    { label: 'Data Integration', value: 0, color: 'from-indigo-500 to-blue-500' }
  ]);

  // Moving analytics data
  const [movingData, setMovingData] = useState([
    { id: 1, label: 'Sales Data', value: 75, speed: 15 },
    { id: 2, label: 'Customer Insights', value: 60, speed: 20 },
    { id: 3, label: 'Operational Metrics', value: 85, speed: 12 },
    { id: 4, label: 'Financial Reports', value: 45, speed: 25 },
    { id: 5, label: 'Market Trends', value: 70, speed: 18 },
    { id: 6, label: 'Performance KPIs', value: 90, speed: 10 }
  ]);

  // Sine wave data
  const [sineWavePoints, setSineWavePoints] = useState([]);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [sineData, setSineData] = useState([
    { label: 'Seasonal Trends', value: 0, frequency: 2 },
    { label: 'Market Cycles', value: 0, frequency: 1.5 },
    { label: 'User Activity', value: 0, frequency: 3 },
    { label: 'Revenue Patterns', value: 0, frequency: 1 }
  ]);

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

  // Animate stats counter
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setStats({
          companies: 5000,
          efficiency: 45,
          roi: 127
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Animate graph
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setGraphAnimation(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Animate vertical bar graph
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setVerticalGraphData([
          { label: 'Data Processing', value: 85, color: 'from-blue-500 to-cyan-500' },
          { label: 'Real-time Analytics', value: 72, color: 'from-green-500 to-emerald-500' },
          { label: 'AI Insights', value: 68, color: 'from-purple-500 to-pink-500' },
          { label: 'Report Generation', value: 91, color: 'from-orange-500 to-red-500' },
          { label: 'Data Integration', value: 78, color: 'from-indigo-500 to-blue-500' }
        ]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Moving analytics animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMovingData(prev => 
        prev.map(item => ({
          ...item,
          value: Math.min(100, Math.max(10, item.value + (Math.random() * 10 - 5)))
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Sine wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 0.05) % (2 * Math.PI));
      
      // Generate sine wave points
      const points = [];
      const width = 600;
      const height = 200;
      const amplitude = 80;
      const frequency = 0.02;
      
      for (let x = 0; x < width; x += 10) {
        const y = height / 2 + amplitude * Math.sin(frequency * x + animationPhase);
        points.push({ x, y });
      }
      setSineWavePoints(points);

      // Update sine data values
      setSineData(prev => prev.map(item => ({
        ...item,
        value: Math.floor(50 + 40 * Math.sin(animationPhase * item.frequency))
      })));
    }, 50);

    return () => clearInterval(interval);
  }, [animationPhase]);

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
      pros: [
        "Excellent visualization capabilities",
        "User-friendly interface",
        "Strong community support",
        "Mobile app available"
      ],
      cons: [
        "Higher pricing tier",
        "Steeper learning curve for advanced features",
        "Limited customization options"
      ],
      description: "Tableau is a powerful data visualization tool that helps businesses see and understand their data through interactive dashboards."
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
      pros: [
        "Excellent for embedded analytics",
        "AI-powered insights",
        "Handles large datasets efficiently",
        "Good customer support"
      ],
      cons: [
        "Custom pricing can be expensive",
        "Complex setup process",
        "Limited out-of-the-box templates"
      ],
      description: "Sisense is an analytics platform that simplifies complex data and transforms it into actionable insights for businesses."
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
      pros: [
        "Affordable pricing",
        "Associative data model",
        "Good mobile experience",
        "Self-service capabilities"
      ],
      cons: [
        "Limited advanced analytics",
        "UI can be confusing for beginners",
        "Slower performance with large datasets"
      ],
      description: "Qlik Sense offers associative analytics that allows users to explore data freely without predefined queries or paths."
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
      pros: [
        "Most affordable option",
        "AI-powered insights",
        "Excellent collaboration features",
        "Easy integration with Zoho ecosystem"
      ],
      cons: [
        "Limited advanced visualization",
        "Less enterprise-focused",
        "Smaller community and resources"
      ],
      description: "Zoho Analytics is a self-service BI and analytics platform that helps users create insightful dashboards and reports."
    },
    {
      provider: "IBM Cognos Analytics",
      vendorLogo: "/images/Activtrak.png",
      price: "Custom pricing available",
      features: [
        "Advanced reporting capabilities",
        "AI-powered insights",
        "Enterprise-grade security",
        "Comprehensive data integration"
      ],
      buttonText: "Compare Quotes",
      pros: [
        "Enterprise-grade security",
        "Advanced reporting capabilities",
        "AI-powered insights",
        "Comprehensive data integration"
      ],
      cons: [
        "Complex implementation",
        "Higher cost for smaller businesses",
        "Steep learning curve"
      ],
      description: "IBM Cognos Analytics is an AI-fueled business intelligence platform that supports the entire analytics cycle."
    }
  ];

  const questions = [
    {
      question: "What type of analytics are you primarily interested in?",
      options: [
        "Data Visualization & Dashboards",
        "Embedded Analytics",
        "Self-Service BI",
        "Workforce Analytics"
      ],
      key: "analyticsType"
    },
    {
      question: "How many users will need access to the BI platform?",
      options: ["1-10", "11-25", "26-50", "51+"],
      key: "userCount"
    },
    {
      question: "What's your primary goal with business intelligence?",
      options: [
        "Better Decision Making",
        "Operational Efficiency",
        "Customer Insights",
        "Performance Monitoring"
      ],
      key: "primaryGoal"
    },
    {
      question: "What data sources do you need to integrate?",
      options: [
        "CRM & Sales Data",
        "Operational Systems",
        "Multiple Data Sources",
        "Not sure yet"
      ],
      key: "dataSources"
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
        analytics_type: answers.analyticsType || 'Not specified',
        user_count: answers.userCount || 'Not specified',
        primary_goal: answers.primaryGoal || 'Not specified',
        data_sources: answers.dataSources || 'Not specified',
        subject: `BI Platform Inquiry from ${formData.name}`,
        from_name: 'Business Intelligence Finder'
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

  // Card swiper navigation
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === providerCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? providerCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Business Intelligence Hero Section */}
      <section
        ref={sectionRef}
        className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 lg:py-24 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Content */}
          <div className="text-center mb-16">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
             
             
            </div>
          </div>

          {/* Professional Content Section - Plain Page Style */}
          <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-8 text-center">
              <span className="text-black">What is </span>
              <span className="text-[#007bff]">Business Intelligence?</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
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
                      className="px-6 py-2 bg-gradient-to-r from-[#007bff] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
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

                  <div className="space-y-6 pt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
                      My Top Picks for Business Intelligence Software
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Tableau:</strong> Best for data visualization - Known for quick, attractive data visualization and drag-and-drop interface good for beginners.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Sisense:</strong> Best for embedded analytics - Excellent for embedded analytics with AI-powered Ask Data feature and In-Chip technology.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Qlik Sense:</strong> Best mobile BI software - Offers powerful visualization tools and associative data model with quality mobile BI capabilities.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">Zoho Analytics:</strong> Best self-service BI software - Features Generative AI-Infused BI with top-notch collaboration tools and competitive pricing.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#007bff] rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-[#007bff]">IBM Cognos Analytics:</strong> Best for reporting - Provides advanced reporting capabilities with AI-powered insights and enterprise-grade security.
                        </div>
                      </div>
                    </div>

                    <p className="text-lg font-semibold text-gray-900 mt-8 pt-6 border-t border-gray-200">
                      Check out my picks for the top business intelligence software below. Compare features, pricing, and get personalized recommendations for your business needs.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Provider Cards Grid */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {providerCards.map((card, index) => (
                <div
                  key={card.provider}
                  className="group relative bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3 p-6 flex flex-col h-full hover:border-blue-200"
                >
                  {/* Content Section */}
                  <div className="flex-1">
                    {/* Provider Logo */}
                    <div className="flex justify-center mb-6">
                      <div className="relative w-full h-20 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
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
                          {/* Fallback text - hidden by default */}
                          <div className="hidden text-2xl font-bold text-blue-600">
                            {card.provider}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Provider Name */}
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {card.provider}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <p className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {card.price}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {card.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-gray-700 group/feature">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300" />
                          <span className="text-sm leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
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

      {/* Section 2: Detailed Card Swiper */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare <span className="text-[#007bff]">Top BI Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed comparison of features, pros, and cons to help you make the right choice for your business
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Card Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-8">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center border border-blue-100">
                      <div className="text-2xl font-bold text-blue-600">
                        {providerCards[currentCardIndex].provider.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {providerCards[currentCardIndex].provider}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {providerCards[currentCardIndex].price}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevCard}
                      className="p-3 rounded-xl bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextCard}
                      className="p-3 rounded-xl bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 text-lg">
                  {providerCards[currentCardIndex].description}
                </p>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Pros */}
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-4 flex items-center gap-2">
                      <CheckCircle size={20} />
                      Pros
                    </h4>
                    <ul className="space-y-3">
                      {providerCards[currentCardIndex].pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt=2 flex-shrink-0"></div>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                      <X size={20} />
                      Cons
                    </h4>
                    <ul className="space-y-3">
                      {providerCards[currentCardIndex].cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4 flex items-center gap-2">
                    <Zap size={20} />
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {providerCards[currentCardIndex].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button 
                    onClick={handleOpenQuestionnaire}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                  >
                    <span className="text-lg">Get Personalized Quote for {providerCards[currentCardIndex].provider}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {providerCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCardIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Graph */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Intelligence <span className="text-[#007bff]">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how BI implementation drives measurable improvements across key business metrics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Graph Visualization */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Performance Metrics</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium">
                    Quarterly
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                    Yearly
                  </button>
                </div>
              </div>

              {/* Bar Graph */}
              <div className="space-y-6">
                {graphLabels.map((label, index) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="w-20 text-sm font-medium text-gray-600">{label}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: graphAnimation ? `${graphData[index]}%` : '0%'
                        }}
                      ></div>
                    </div>
                    <span className="w-12 text-right font-semibold text-gray-900">
                      {graphAnimation ? graphData[index] : 0}%
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Before BI Implementation</span>
                  <span>After BI Implementation</span>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    +{stats.roi}%
                  </div>
                  <div className="text-gray-600">Average ROI</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stats.companies.toLocaleString()}+
                  </div>
                  <div className="text-gray-600">Businesses Served</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-purple-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    +{stats.efficiency}%
                  </div>
                  <div className="text-gray-600">Operational Efficiency</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Businesses Choose BI
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <BarChart className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                      <p className="text-gray-600">Make informed decisions based on real-time data insights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <LineChart className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Predictive Analytics</h4>
                      <p className="text-gray-600">Forecast trends and identify opportunities before competitors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Target className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
                      <p className="text-gray-600">Streamline operations and maximize resource utilization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sine Wave Graph */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Predictive Analytics <span className="text-cyan-400">Wave Patterns</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Visualize cyclical business patterns and seasonal trends with real-time sine wave analytics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sine Wave Visualization */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Real-time Pattern Analysis</h3>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Activity size={20} />
                  <span className="text-sm font-medium">LIVE</span>
                </div>
              </div>

              {/* Sine Wave Container */}
              <div className="relative h-64 bg-gray-900/50 rounded-xl border border-gray-700/50 p-4">
                <div className="absolute inset-4">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="absolute w-full h-px bg-gray-500" style={{ top: `${i * 25}%` }}></div>
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="absolute h-full w-px bg-gray-500" style={{ left: `${i * 12.5}%` }}></div>
                    ))}
                  </div>
                  
                  {/* Sine Wave */}
                  <svg width="100%" height="100%" className="overflow-visible">
                    <defs>
                      <linearGradient id="sineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    {sineWavePoints.length > 0 && (
                      <path
                        d={`M ${sineWavePoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
                        stroke="url(#sineGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    )}
                    
                    {/* Animated dots along the sine wave */}
                    {sineWavePoints.filter((_, i) => i % 6 === 0).map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="2"
                        fill="#06b6d4"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </svg>
                  
                  {/* Labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                    <span>Past</span>
                    <span>Present</span>
                    <span>Future</span>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Seasonal Trends</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Real-time Data</span>
                </div>
              </div>
            </div>

            {/* Sine Data Metrics */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Pattern Analysis Metrics</h3>
              
              {sineData.map((item, index) => (
                <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {item.label}
                    </h4>
                    <span className="text-2xl font-bold text-cyan-400">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {index === 0 && "Cyclical patterns in consumer behavior"}
                    {index === 1 && "Market fluctuation and economic cycles"}
                    {index === 2 && "Peak usage hours and engagement patterns"}
                    {index === 3 && "Revenue forecasting and growth projections"}
                  </p>
                </div>
              ))}

              {/* Insights */}
              <div className="bg-cyan-900/20 rounded-2xl p-6 border border-cyan-500/30">
                <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                  <TrendingUp size={18} />
                  Key Insight
                </h4>
                <p className="text-cyan-100 text-sm">
                  Sine wave analysis helps identify recurring patterns in business data, enabling better forecasting and strategic planning based on historical cycles.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/30 rounded-2xl p-6 text-center border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <LineChart className="text-blue-400" size={24} />
              </div>
              <h4 className="font-semibold text-white mb-2">Pattern Recognition</h4>
              <p className="text-gray-400 text-sm">Identify recurring business cycles and seasonal trends</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6 text-center border border-gray-700/30 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-400" size={24} />
              </div>
              <h4 className="font-semibold text-white mb-2">Accurate Forecasting</h4>
              <p className="text-gray-400 text-sm">Predict future trends based on historical wave patterns</p>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-6 text-center border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-purple-400" size={24} />
              </div>
              <h4 className="font-semibold text-white mb-2">Real-time Analysis</h4>
              <p className="text-gray-400 text-sm">Live data streaming with instant pattern detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Vertical Bar Graphs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              BI Platform <span className="text-[#007bff]">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis of key BI platform features and their performance metrics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Vertical Bar Graph */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Feature Performance Analysis
              </h3>
              
              <div className="flex items-end justify-between h-64 gap-4 px-4">
                {verticalGraphData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 group">
                    <div className="relative w-full flex justify-center mb-4">
                      <div 
                        className={`w-12 bg-gradient-to-b ${item.color} rounded-t-lg transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:scale-105`}
                        style={{ height: `${item.value * 2}px` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {item.value}%
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">88%</div>
                  <div className="text-sm text-gray-600">Implementation Success</div>
                </div>
              </div>
            </div>

            {/* Feature Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced Data Processing</h4>
                    <p className="text-gray-600">
                      Handle large datasets with efficient processing algorithms and real-time data streaming capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analytics</h4>
                    <p className="text-gray-600">
                      Leverage machine learning algorithms for predictive analytics and automated insights generation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Cloud Integration</h4>
                    <p className="text-gray-600">
                      Seamless integration with cloud platforms and scalable infrastructure for growing businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Moving Analytics Graph */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Live Analytics <span className="text-[#007bff]">Dashboard</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time data visualization showing dynamic business metrics and performance indicators
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Moving Analytics Bars */}
            <div className="space-y-6 mb-8">
              {movingData.map((item) => (
                <div key={item.id} className="flex items-center gap-4 group">
                  <span className="w-48 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {item.label}
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out relative"
                      style={{ width: `${item.value}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  <span className="w-12 text-right font-semibold text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    {Math.round(item.value)}%
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center p-4 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600 mb-1">1.2M+</div>
                <div className="text-sm text-gray-600">Data Points</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-green-600 mb-1">99.8%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-purple-600 mb-1">2.4s</div>
                <div className="text-sm text-gray-600">Avg. Response</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Updates</h4>
              <p className="text-gray-600">Live data streaming with instant visualization updates</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-green-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Processing</h4>
              <p className="text-gray-600">High-speed data processing with minimal latency</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-purple-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Analytics</h4>
              <p className="text-gray-600">AI-powered insights and predictive analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-[#007bff]">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses transformed their operations with the right BI platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechGrowth Inc.",
                content: "The BI platform recommendation saved us 40+ hours monthly in reporting. Our team can now focus on strategic analysis instead of data compilation.",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Operations Director, GlobalRetail",
                content: "Implementation led to a 27% increase in operational efficiency. The insights helped us optimize inventory and reduce waste significantly.",
                avatar: "MC"
              },
              {
                name: "Emily Rodriguez",
                role: "CEO, DataDriven Solutions",
                content: "The personalized matching process connected us with the perfect BI tool. Our decision-making process is now data-backed and incredibly efficient.",
                avatar: "ER"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 group hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="text-yellow-400">
                      ★
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                {isCompleted ? "Thank You!" : "Find Your Perfect BI Platform"}
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
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
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
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Perfect BI Platform Found!</h4>
                  <p className="text-gray-600 mb-6">
                    Based on your responses, you'll receive personalized business intelligence platform recommendations and quotes in your inbox soon.
                  </p>
                  <button
                    onClick={handleCloseQuestionnaire}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
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