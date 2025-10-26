'use client';

import { ChevronLeft, ChevronRight, CheckCircle, X, Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function PlatformComparison({ onOpenQuestionnaire }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const providerCards = [
    {
      provider: "Tableau",
      price: "Starts at $70 per user/month",
      features: [
        "Quick, attractive data visualization",
        "Drag-and-drop interface",
        "Real-time data reflection",
        "Tableau Pulse AI insights"
      ],
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
      description: "Tableau is a powerful data visualization tool that helps businesses see and understand their data through interactive dashboards.",
      logo: "/images/tableau.png" // Add your image path here
    },
    {
      provider: "Sisense",
      price: "Custom pricing available",
      features: [
        "Embedded analytics",
        "AI-powered Ask Data feature",
        "In-Chip technology",
        "Handles large datasets well"
      ],
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
      description: "Sisense is an analytics platform that simplifies complex data and transforms it into actionable insights for businesses.",
      logo: "/images/sisense.png" // Add your image path here
    },
    {
      provider: "Qlik Sense",
      price: "Starts at $30 per user/month",
      features: [
        "Powerful visualization tools",
        "Associative data model",
        "Self-service analytics",
        "Quality Mobile BI"
      ],
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
      description: "Qlik Sense offers associative analytics that allows users to explore data freely without predefined queries or paths.",
      logo: "/images/qlikicon.png" // Add your image path here
    },
    {
      provider: "Zoho Analytics",
      price: "Starts at $24 per user/month",
      features: [
        "Generative AI-Infused BI",
        "Top-notch collaboration tools",
        "Advanced analytics",
        "Competitive pricing"
      ],
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
      description: "Zoho Analytics is a self-service BI and analytics platform that helps users create insightful dashboards and reports.",
      logo: "/images/zoho copy.png" // Add your image path here
    },
   {
      provider: "ActivTrak",
      price: "Starts at $10 per user/month",
      features: [
        "Workforce analytics and productivity insights",
        "Real-time activity monitoring",
        "Automated productivity coaching",
        "Privacy-focused employee tracking"
      ],
      pros: [
        "Affordable pricing for teams",
        "Privacy-focused approach",
        "Easy to implement and use",
        "Actionable productivity insights"
      ],
      cons: [
        "Limited to workforce analytics",
        "May raise employee privacy concerns",
        "Not a full BI platform"
      ],
      description: "ActivTrak is a workforce analytics platform that provides insights into employee productivity and helps organizations optimize team performance.",
      logo: "/images/Activtrak.png" // Add your image path here
    }
  ];

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Top <span className="text-[#007bff]">Business Intelligence</span> Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed comparison of features, pros, and cons to help you make the right choice for your business
          </p>
        </div>

        {/* Platform Header */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-8 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Company Logo - Replace with actual image */}
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-sm border border-blue-100">
                {providerCards[currentCardIndex].logo ? (
                  <img 
                    src={providerCards[currentCardIndex].logo} 
                    alt={`${providerCards[currentCardIndex].provider} logo`}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <div className="text-3xl font-bold text-blue-600">
                    {providerCards[currentCardIndex].provider.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {providerCards[currentCardIndex].provider}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mt-2">
                  {providerCards[currentCardIndex].price}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevCard}
                className="p-4 rounded-lg bg-white hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 shadow-sm border border-gray-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextCard}
                className="p-4 rounded-lg bg-white hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 shadow-sm border border-gray-200"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            {providerCards[currentCardIndex].description}
          </p>
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
            <Zap size={28} />
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

        

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {providerCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCardIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentCardIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}