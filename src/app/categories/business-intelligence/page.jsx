'use client';

import { useState } from 'react';
import BusinessHero from './business-hero';
import PlatformComparison from './platform-comparison';
import BusinessImpact from './business-impact';
import BusinessAnalysis from './business-analysis';
import BusinessCapabilities from './business-capabilities';
import LogoScroll from '@/app/services/lead-generation/LogoScroll';
import LiveDashboard from './live-dashboard';


export default function BusinessIntelligencePage() {
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

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptchaQuestion({ num1, num2, answer });
    setCaptchaInput('');
    setCaptchaValid(false);
  };

  const verifyCaptcha = (value) => {
    setCaptchaInput(value);
    setCaptchaValid(parseInt(value) === captchaQuestion.answer);
  };

  const handleAnswer = (answer) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].key]: answer
    };
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
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
  };

  const renderQuestionnaireContent = () => {
    if (isCompleted) {
      return (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-white text-2xl">✓</div>
          </div>
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
      );
    }

    if (currentQuestion < questions.length) {
      return (
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
                  <div className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</div>
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
      );
    }

    // Contact form steps would go here...
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          {currentQuestion === 4 ? "Your Contact Information" : 
           currentQuestion === 5 ? "Company Information" : "Security Verification"}
        </h4>
        
        {/* Simplified form for demo */}
        <div className="text-center py-8">
          <p className="text-gray-600 mb-6">Form steps would go here...</p>
          <button
            type="button"
            onClick={handleCloseQuestionnaire}
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all duration-300"
          >
            Close Demo
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BusinessHero onOpenQuestionnaire={handleOpenQuestionnaire} />
      <PlatformComparison onOpenQuestionnaire={handleOpenQuestionnaire} />
      <BusinessImpact />
      <BusinessAnalysis />
      <BusinessCapabilities />
      <LogoScroll />
      <LiveDashboard />
      

      {/* Questionnaire Popup */}
      {showQuestionnaire && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {isCompleted ? "Thank You!" : "Find Your Perfect BI Platform"}
              </h3>
              <button
                onClick={handleCloseQuestionnaire}
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500">×</div>
              </button>
            </div>
            
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
            
            <div className="p-4 sm:p-6">
              {renderQuestionnaireContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}