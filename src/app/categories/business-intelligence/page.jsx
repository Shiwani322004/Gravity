'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  Database,
  Play,
  ArrowRight,
  CheckCircle,
  Cloud,
  Cpu,
  Eye,
  Brain,
  LineChart,
  PieChart,
  Activity,
  Target,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

export default function BusinessIntelligence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Data Visualization",
      description: "Interactive dashboards with live data streams and instant updates"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend analysis for proactive decision making"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Reports",
      description: "Schedule and automate report generation with customizable templates"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Insights",
      description: "Smart recommendations and anomaly detection powered by machine learning"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom KPIs & Metrics",
      description: "Define and track business-specific metrics that matter to you"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cross-Platform Integration",
      description: "Seamlessly connect with your existing tools and data sources"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Data Collection",
      description: "Connect multiple data sources and APIs",
      icon: <Database className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Data Processing",
      description: "Clean, transform, and prepare data for analysis",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Insight Generation",
      description: "AI algorithms uncover patterns and trends",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Decision Support",
      description: "Actionable insights delivered to your team",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      icon: <Activity className="w-8 h-8" />,
      title: "Production Optimization",
      description: "Monitor equipment efficiency and predict maintenance needs to reduce downtime by up to 45%",
      metrics: ["+35% Efficiency", "-45% Downtime"]
    },
    {
      industry: "Retail",
      icon: <Users className="w-8 h-8" />,
      title: "Customer Behavior Analysis",
      description: "Track purchasing patterns and optimize inventory with demand forecasting",
      metrics: ["+28% Sales", "-32% Waste"]
    },
    {
      industry: "Healthcare",
      icon: <Shield className="w-8 h-8" />,
      title: "Patient Outcome Prediction",
      description: "Analyze treatment effectiveness and predict patient recovery trajectories",
      metrics: ["+40% Accuracy", "-25% Readmissions"]
    },
    {
      industry: "Finance",
      icon: <LineChart className="w-8 h-8" />,
      title: "Risk Assessment & Fraud Detection",
      description: "Real-time transaction monitoring and anomaly detection for secure operations",
      metrics: ["-60% Fraud", "+50% Detection Speed"]
    }
  ];

  const dashboardMetrics = [
    { label: "Revenue Growth", value: "+24%", change: "+5.2%" },
    { label: "Customer Satisfaction", value: "94%", change: "+3.1%" },
    { label: "Operational Efficiency", value: "+18%", change: "+2.8%" },
    { label: "Cost Reduction", value: "-15%", change: "-3.4%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-cyan-50/10">
      {/* Hero Section */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium">
              <Zap className="w-4 h-4" />
              AI-Powered Business Intelligence
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Data Into
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Strategic Advantage
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empower your decisions with real-time insights, predictive analytics, and AI-driven intelligence that drives business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
                Get Insights Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border border-gray-200/60 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-2xl mx-auto">
              {[
                { value: "2.5x", label: "Faster Decisions" },
                { value: "45%", label: "Cost Reduction" },
                { value: "3.1x", label: "ROI" },
                { value: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="py-20 lg:py-28 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Modern Analytics
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform raw data into actionable business intelligence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Intelligence Workflow Section */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="py-20 lg:py-28 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Intelligence
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Flows Through Gravity
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A seamless journey from raw data to strategic insights.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 transform translate-y-8"></div>
            
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number & Connector */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4 shadow-lg border border-gray-200/60">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="py-20 lg:py-28 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Leaders Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how businesses across sectors leverage Gravity BI for transformative results.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Industry Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-6">
                  {useCase.icon}
                  {useCase.industry}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm font-medium"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview / CTA Section */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-blue-900/90 to-cyan-900/80 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              See Your Business in a
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                New Light
              </span>
            </h2>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
              Experience the power of intelligent analytics with our interactive dashboard preview.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl mb-12">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/60 text-sm">Gravity BI Dashboard</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Live Data
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardMetrics.map((metric, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-white/60 text-sm mb-2">{metric.label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className={`text-sm ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change} from last month
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-48 flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="w-12 h-12 text-blue-400/50 mx-auto mb-2" />
                  <div className="text-white/40 text-sm">Revenue Trend Chart</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-48 flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="w-12 h-12 text-cyan-400/50 mx-auto mb-2" />
                  <div className="text-white/40 text-sm">Market Distribution</div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button className="group px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto text-lg">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-blue-200/60 mt-4">
              No credit card required • 14-day free trial • Full access to all features
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}