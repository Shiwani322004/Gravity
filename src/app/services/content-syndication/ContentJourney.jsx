'use client'
import React from 'react';
import { FileText, Share2, Users, BarChart, TrendingUp, Zap, Target, CheckCircle, Globe, Rocket, Award } from 'lucide-react';

const ContentJourney = () => {
  const steps = [
    {
      step: "01",
      title: "Content Submission & Review",
      description: "Upload your whitepapers, case studies, or blog posts with confidence. Our expert team conducts a comprehensive review and optimization process to ensure your content meets industry standards and maximizes syndication potential.",
      tags: ["Expert Review", "24h Turnaround", "Quality Assurance"],
      icon: <FileText className="w-8 h-8 text-white" />,
      checkpoints: [
        "Content format validation",
        "SEO optimization review",
        "Brand alignment check",
        "Compliance verification"
      ],
      card: {
        image: "/images/c1.png",
        alt: "Content Submission",
        title: "Streamlined Upload Process",
        subtitle: "Supporting all major formats",
        icon: <FileText className="w-5 h-5" />,
      },
    },
    {
      step: "02",
      title: "Strategic Distribution Network",
      description: "Leverage our extensive network of 500+ premium B2B platforms and industry-specific channels. We employ advanced AI targeting algorithms to position your content in front of decision-makers and key stakeholders within your target markets.",
      tags: ["AI Intelligence", "Brand Safety", "Premium Networks"],
      icon: <Share2 className="w-8 h-8 text-white" />,
      checkpoints: [
        "Platform selection optimization",
        "Audience segmentation",
        "Timing and scheduling",
        "Cross-channel integration"
      ],
      card: {
        image: "/images/c2.png",
        alt: "Strategic Distribution",
        title: "Intelligent Platform Distribution",
        subtitle: "Access to 500+ vetted channels",
        icon: <Share2 className="w-5 h-5" />,
      },
    },
    {
      step: "03",
      title: "Qualified Lead Acquisition",
      description: "Experience a steady influx of high-intent, qualified leads from decision-makers and industry professionals. Our platform automatically captures detailed prospect intelligence, engagement behavior, and interaction data in real-time for immediate action.",
      tags: ["Real-time Capture", "Qualified Prospects", "Decision-Makers"],
      icon: <Users className="w-8 h-8 text-white" />,
      checkpoints: [
        "Lead quality scoring",
        "Prospect verification",
        "Engagement tracking",
        "Intent signals analysis"
      ],
      card: {
        image: "/images/c3.png",
        alt: "Lead Generation",
        title: "Premium Lead Pipeline",
        subtitle: "Decision-maker focused delivery",
        icon: <Users className="w-5 h-5" />,
      },
    },
    {
      step: "04",
      title: "Performance Analytics & Optimization",
      description: "Access an intuitive analytics dashboard with comprehensive performance metrics, ROI tracking, and competitive benchmarking data. Make data-driven decisions with detailed insights that guide strategic optimization and continuous improvement initiatives.",
      tags: ["ROI Dashboard", "Real-time Reports", "Actionable Insights"],
      icon: <BarChart className="w-8 h-8 text-white" />,
      checkpoints: [
        "Campaign performance tracking",
        "Conversion rate analysis",
        "ROI measurement",
        "Optimization recommendations"
      ],
      card: {
        image: "/images/c4.png",
        alt: "Analytics & Insights",
        title: "Advanced Analytics Suite",
        subtitle: "Comprehensive ROI reporting included",
        icon: <BarChart className="w-5 h-5" />,
      },
    },
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Exponential Market Expansion",
      description: "Access untapped market segments and audience demographics that were previously inaccessible. Expand your global footprint and establish presence in new vertical markets through our extensive B2B network."
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Revenue Pipeline Acceleration",
      description: "Generate a consistent, predictable flow of high-intent leads to accelerate your sales cycle. Reduce time-to-close and increase conversion rates with pre-qualified prospects actively seeking solutions."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Industry Authority & Credibility",
      description: "Establish your organization as a recognized thought leader and industry authority. Build trust and credibility through strategic content visibility across premium industry channels and publications."
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-20" style={{backgroundColor: '#007BFF'}} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-20" style={{backgroundColor: '#007BFF'}} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Your Content Journey, Perfected
            </h2>
            <p className="text-2xl md:text-3xl font-semibold mb-6" style={{background: 'linear-gradient(to right, #007BFF, #0056b3)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              In 4 Strategic Steps
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial content submission to measurable business results, discover how we transform your valuable thought leadership into a powerful lead-generating engine that drives sustained growth and market presence.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 transform -translate-x-1/2 rounded-full" style={{backgroundColor: '#007BFF'}}></div>
            
            <div className="space-y-16 lg:space-y-24">
              {steps.map((item, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      <div className="text-sm font-bold text-white px-3 py-1 rounded-full shadow-md" style={{backgroundColor: '#007BFF'}}>
                        STEP {item.step}
                      </div>
                    </div>
                    <h3 className={`text-3xl font-bold text-gray-900 mb-3 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-gray-600 leading-relaxed text-lg mb-6 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {item.description}
                    </p>

                    {/* Checkpoints */}
                    <div className={`mb-6 ${index % 2 === 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      <p className={`text-sm font-semibold text-gray-800 mb-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        Key Checkpoints:
                      </p>
                      <div className="space-y-2">
                        {item.checkpoints.map((checkpoint, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{color: '#007BFF'}} />
                            <span className="text-sm text-gray-700">{checkpoint}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold border" style={{backgroundColor: '#E7F2FF', color: '#007BFF', borderColor: '#007BFF'}}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full items-center justify-center shadow-lg z-10 border-4 border-white" style={{backgroundColor: '#007BFF'}}>
                    {item.icon}
                  </div>
                  
                  <div className="lg:w-1/2 w-full max-w-lg">
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200/80 hover:shadow-xl transition-all duration-300 group">
                      <div className="aspect-[5/4] rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.card.image}
                          alt={item.card.alt}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center gap-4 p-2">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#E7F2FF', color: '#007BFF'}}>
                          {item.card.icon}
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-800">{item.card.title}</div>
                          <div className="text-sm text-gray-500">{item.card.subtitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mt-24 md:mt-32 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Unlock Tangible Business Growth
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
              Our content syndication platform is more than just distribution infrastructure; it's a comprehensive strategic growth engine designed to drive measurable business outcomes and sustainable market expansion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200/80 text-left transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{backgroundColor: '#007BFF'}}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentJourney;