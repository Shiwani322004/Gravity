'use client';

import { 
  CheckCircle, 
  X, 
  Sparkles, 
  BarChart3, 
  Users, 
  Shield,
  Star,
  Phone,
  Video,
  Bot,
  Cloud,
  MessageCircle,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const CRMAnalysisSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: 'US',
    zipCode: '',
    requirements: ''
  });

  // Generate CAPTCHA question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({
      num1,
      num2,
      answer: num1 + num2
    });
  };

  // Verify CAPTCHA
  const verifyCaptcha = (input) => {
    setCaptchaInput(input);
    setCaptchaValid(parseInt(input) === captchaQuestion.answer);
  };

  const questions = [
    {
      question: "What's your company size?",
      options: [
        "1-10 employees",
        "11-50 employees", 
        "51-200 employees",
        "201-1000 employees",
        "1000+ employees"
      ]
    },
    {
      question: "What's your primary need for a CRM?",
      options: [
        "Sales pipeline management",
        "Customer service & support",
        "Marketing automation",
        "Lead generation & tracking",
        "All of the above"
      ]
    },
    {
      question: "What's your monthly budget per user?",
      options: [
        "Under $10",
        "$10 - $25", 
        "$25 - $50",
        "$50 - $100",
        "$100+"
      ]
    },
    {
      question: "Which features are most important to you?",
      options: [
        "Easy to use interface",
        "Advanced automation",
        "Third-party integrations",
        "Mobile app access",
        "Custom reporting"
      ]
    }
  ];

  const providerCards = [
    {
      provider: "Zoho CRM",
      price: "$14",
      period: "/user/month",
      rating: 4.4,
      reviews: "2.5K reviews",
      features: [
        "AI-powered sales predictions",
        "Multi-channel communication",
        "Customizable modules",
        "Workflow automation",
        "Advanced analytics"
      ],
      pros: [
        "Extensive third-party integrations",
        "Affordable pricing plans",
        "Powerful automation capabilities",
        "Mobile app with full functionality",
        "Excellent customer support"
      ],
      cons: [
        "Steep learning curve for beginners",
        "Customization can be complex",
        "Advanced features require higher tiers",
        "Interface can feel cluttered",
        "Limited social media integration"
      ],
      logo: "/images/zoho.png",
      tagline: "Zoho CRM offers comprehensive customer relationship management with extensive customization options and AI-powered insights for businesses of all sizes. Comprehensive CRM solution for businesses of all sizes with extensive customization options.",
      color: "from-blue-600 to-purple-600",
      badgeColor: "bg-gradient-to-r from-blue-500 to-purple-500",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      provider: "Creatio",
      price: "$25",
      period: "/user/month",
      rating: 4.2,
      reviews: "1.8K reviews",
      features: [
        "No-code process automation",
        "BPM and case management",
        "Marketing automation",
        "Service management",
        "AI-powered insights"
      ],
      pros: [
        "Powerful no-code automation",
        "Excellent BPM capabilities",
        "Strong process management",
        "Good customization options",
        "Enterprise-grade security"
      ],
      cons: [
        "Higher pricing than competitors",
        "Limited third-party integrations",
        "Complex setup process",
        "Steep learning curve",
        "Mobile app could be improved"
      ],
      logo: "/images/creatio.png",
      tagline: "Creatio provides powerful no-code automation with robust BPM capabilities for enterprise-level marketing, sales, and service management. No-code platform for marketing, sales and service automation with BPM capabilities.",
      color: "from-green-600 to-teal-600",
      badgeColor: "bg-gradient-to-r from-green-500 to-teal-500",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      provider: "HubSpot CRM",
      price: "$45",
      period: "/2 users/month",
      rating: 4.6,
      reviews: "3.2K reviews",
      features: [
        "Free CRM forever plan",
        "Marketing automation",
        "Email tracking and scheduling",
        "Meeting scheduling",
        "Live chat and bots"
      ],
      pros: [
        "Extremely user-friendly interface",
        "Free plan available",
        "Excellent marketing automation",
        "Seamless HubSpot ecosystem integration",
        "Great customer support"
      ],
      cons: [
        "Can get expensive with add-ons",
        "Limited customization options",
        "Advanced features require higher tiers",
        "Reporting could be more robust",
        "Limited workflow automation in lower tiers"
      ],
      logo: "/images/hubspot.png",
      tagline: "HubSpot CRM delivers user-friendly customer relationship management with powerful marketing automation and seamless ecosystem integration. User-friendly CRM with powerful marketing automation and sales tools.",
      color: "from-orange-500 to-red-500",
      badgeColor: "bg-gradient-to-r from-orange-400 to-red-400",
      icon: <Users className="w-6 h-6" />
    },
    {
      provider: "HoneyBook",
      price: "$29",
      period: "/user/month",
      rating: 4.3,
      reviews: "1.1K reviews",
      features: [
        "Client booking and scheduling",
        "Proposal and contract management",
        "Invoice and payment processing",
        "Project management tools",
        "Client communication portal"
      ],
      pros: [
        "Beautiful, intuitive interface",
        "Excellent for creative businesses",
        "Integrated payment processing",
        "Good client portal",
        "Streamlined proposal process"
      ],
      cons: [
        "Limited to specific industries",
        "Higher price point",
        "Limited third-party integrations",
        "Not suitable for large sales teams",
        "Basic reporting features"
      ],
      logo: "/images/honeybook.png",
      tagline: "HoneyBook offers all-in-one client management with beautiful interfaces and integrated tools tailored for creative professionals and freelancers. All-in-one client management platform for creative businesses and freelancers.",
      color: "from-pink-500 to-rose-500",
      badgeColor: "bg-gradient-to-r from-pink-400 to-rose-400",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      provider: "Pipedrive",
      price: "$14.90",
      period: "/user/month",
      rating: 4.4,
      reviews: "2.2K reviews",
      features: [
        "Visual sales pipeline",
        "Sales automation",
        "Email integration",
        "Activity-based selling",
        "Revenue forecasting"
      ],
      pros: [
        "Intuitive visual sales pipeline",
        "Excellent sales automation",
        "Affordable pricing",
        "Good mobile experience",
        "Strong focus on sales process"
      ],
      cons: [
        "Limited marketing features",
        "Basic customer service tools",
        "Limited customization options",
        "Integration ecosystem could be better",
        "Reporting features are basic"
      ],
      logo: "/images/pipedrive.png",
      tagline: "Pipedrive provides sales-focused CRM with intuitive visual pipeline management and powerful automation features for sales teams. Sales-focused CRM with visual pipeline management and automation features.",
      color: "from-indigo-600 to-blue-600",
      badgeColor: "bg-gradient-to-r from-indigo-500 to-blue-500",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  // Open questionnaire
  const onOpenQuestionnaire = () => {
    setShowQuestionnaire(true);
    setCurrentQuestion(0);
    setIsCompleted(false);
    setIsSubmitting(false);
    setCaptchaValid(false);
    setCaptchaInput('');
    generateCaptcha();
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      country: 'US',
      zipCode: '',
      requirements: ''
    });
  };

  // Close questionnaire
  const handleCloseQuestionnaire = () => {
    setShowQuestionnaire(false);
  };

  // Handle answer selection
  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(4); // Move to contact info step
    }
  };

  // Handle back button
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsCompleted(true);
    setIsSubmitting(false);
    
    // You can add your actual form submission logic here
    console.log('Form submitted:', formData);
  };

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Top <span className="text-[#007bff]">CRM</span> Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed comparison of features, pros, and cons to help you choose the right customer relationship platform for your business
          </p>
        </div>

        {/* All Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
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
                      <div className="hidden text-lg font-bold text-blue-600">
                        {card.provider.charAt(0)}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">
                      {card.provider.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {card.provider}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Tagline Section - Made Fully Responsive */}
<div className="mb-8 sm:mb-10">
  <div className={`bg-gradient-to-r ${providerCards[currentCardIndex].color} p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg relative overflow-hidden transition-all duration-500 hover:shadow-xl`}>
    
    {/* Rating and Price Badge - Responsive Positioning */}
    <div className="absolute top-3 right-3 xs:top-4 xs:right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-6 xl:top-8 xl:right-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-[120px] xs:max-w-[140px] sm:max-w-[160px]">
        <div className="text-center">
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
            {renderStars(providerCards[currentCardIndex].rating)}
            <span className="text-xs sm:text-sm font-semibold text-gray-700 ml-0.5 sm:ml-1">
              {providerCards[currentCardIndex].rating}
            </span>
          </div>
          <div className="text-[10px] xs:text-xs sm:text-xs text-gray-500 mb-1 sm:mb-2 lg:mb-3 leading-tight">
            {providerCards[currentCardIndex].reviews}
          </div>
          
          {/* Price */}
          <div className="flex items-baseline justify-center gap-0.5 sm:gap-1">
            <span className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              {providerCards[currentCardIndex].price}
            </span>
            <span className="text-[10px] xs:text-xs sm:text-sm text-gray-600 leading-tight">
              {providerCards[currentCardIndex].period}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="pr-24 xs:pr-28 sm:pr-32 md:pr-36 lg:pr-40 xl:pr-48 2xl:pr-56">
      <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 flex items-start gap-2 sm:gap-3">
        <div className="bg-white/20 p-1.5 sm:p-2 rounded-md sm:rounded-lg backdrop-blur-sm border border-white/30 flex-shrink-0 mt-0.5 sm:mt-1">
          {providerCards[currentCardIndex].icon}
        </div>
        <span className="break-words leading-tight sm:leading-normal">
          {providerCards[currentCardIndex].provider} Customer Relationship
        </span>
      </h3>
      <p className="text-sm xs:text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed sm:leading-loose lg:leading-loose">
        {providerCards[currentCardIndex].tagline}
      </p>
    </div>

    {/* Subtle decorative elements - Responsive scaling */}
    <div className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 sm:-bottom-5 sm:-right-5 lg:-bottom-6 lg:-right-6 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/10 rounded-full blur-xl"></div>
    <div className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 sm:-top-5 sm:-left-5 lg:-top-6 lg:-left-6 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/5 rounded-full blur-lg"></div>
  </div>
</div>

        {/* Pros and Cons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Pros Column */}
          <div>
            <h4 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-3">
              <CheckCircle size={28} />
              Advantages
            </h4>
            <ul className="space-y-4">
              {providerCards[currentCardIndex].pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-700 bg-green-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-lg">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons Column */}
          <div>
            <h4 className="text-2xl font-semibold text-red-700 mb-6 flex items-center gap-3">
              <X size={28} />
              Limitations
            </h4>
            <ul className="space-y-4">
              {providerCards[currentCardIndex].cons.map((con, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-700 bg-red-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={14} className="text-white" />
                  </div>
                  <span className="text-lg">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
            <Sparkles size={28} />
            Key Features
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {providerCards[currentCardIndex].features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center gap-3">
              <Users size={28} />
              Best For
            </h4>
            <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                {providerCards[currentCardIndex].provider === "Zoho CRM" && "Growing businesses and enterprises needing extensive customization"}
                {providerCards[currentCardIndex].provider === "Creatio" && "Large enterprises needing robust process automation and BPM"}
                {providerCards[currentCardIndex].provider === "HubSpot CRM" && "Small to medium businesses and marketing teams"}
                {providerCards[currentCardIndex].provider === "HoneyBook" && "Creative professionals, freelancers, and small service businesses"}
                {providerCards[currentCardIndex].provider === "Pipedrive" && "Sales teams and businesses focused on pipeline management"}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-amber-700 mb-6 flex items-center gap-3">
              <BarChart3 size={28} />
              Pricing Details
            </h4>
            <div className="p-6 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                {providerCards[currentCardIndex].provider === "Zoho CRM" && "Starts at $14/user/month, with enterprise plans up to $52/user/month"}
                {providerCards[currentCardIndex].provider === "Creatio" && "Starts at $25/user/month, with custom enterprise pricing available"}
                {providerCards[currentCardIndex].provider === "HubSpot CRM" && "Free plan available, paid plans start at $45/month for 2 users"}
                {providerCards[currentCardIndex].provider === "HoneyBook" && "Starts at $29/user/month with unlimited clients and projects"}
                {providerCards[currentCardIndex].provider === "Pipedrive" && "Starts at $14.90/user/month, with advanced plans up to $99/user/month"}
              </p>
            </div>
          </div>
        </div>

        {/* Get Quote CTA */}
        <div className="text-center mt-8">
          <button
            onClick={onOpenQuestionnaire}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
          >
            Get Personalized Quotes
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Questionnaire Popup with 7 Steps */}
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
    </section>
  );
};

export default CRMAnalysisSection;