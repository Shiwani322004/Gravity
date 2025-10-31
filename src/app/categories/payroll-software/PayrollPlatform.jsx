'use client'
import React from 'react';
import { BarChart3, Users, Shield, Database, Package, Settings } from 'lucide-react';

export default function PayrollPlatform() {
  const platformBlocks = [
    {
      id: 1,
      title: "Payroll Processing",
      description: "Comprehensive payroll management with automated salary calculations, tax deductions, and real-time payroll reporting capabilities",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Salary calculations", "Tax deductions", "Payroll reporting", "Direct deposits", "Pay stub generation"]
    },
    {
      id: 2,
      title: "Employee Management",
      description: "Complete employee lifecycle management with onboarding, payroll processing, and self-service portal tools",
      icon: <Users className="w-8 h-8" />,
      features: ["Employee records", "Onboarding", "Self-service portal", "Time tracking", "Benefits enrollment"]
    },
    {
      id: 3,
      title: "Tax Compliance",
      description: "End-to-end tax compliance with automated tax filing, regulatory updates, and compliance management capabilities",
      icon: <Package className="w-8 h-8" />,
      features: ["Tax filing", "Regulatory updates", "Compliance tracking", "Audit support", "Multi-state taxes"]
    },
    {
      id: 4,
      title: "Benefits Administration",
      description: "Integrated benefits management with enrollment, deductions, and employee benefits tracking tools",
      icon: <Shield className="w-8 h-8" />,
      features: ["Benefits enrollment", "Deduction management", "Insurance tracking", "Retirement plans", "Flexible spending"]
    },
    {
      id: 5,
      title: "Reporting & Analytics",
      description: "Advanced payroll analytics and reporting platform with real-time dashboards, cost tracking, and predictive analytics capabilities",
      icon: <Database className="w-8 h-8" />,
      features: ["Custom reports", "Real-time dashboards", "Cost analysis", "Payroll analytics", "Compliance reports"]
    },
    {
      id: 6,
      title: "System Integration",
      description: "Comprehensive system management with accounting integration, API connections, and third-party software compatibility tools",
      icon: <Settings className="w-8 h-8" />,
      features: ["Accounting sync", "API integrations", "Third-party apps", "Data import/export", "System monitoring"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #007bff 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[#0a2540]">
            Payroll Platform Modules
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive payroll modules designed for complete payroll management and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {platformBlocks.map((block, index) => (
            <div
              key={block.id}
              className="bg-white rounded-xl lg:rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[#007bff] hover:shadow-xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl lg:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-[#007bff]/10 text-[#007bff] group-hover:bg-gradient-to-r group-hover:from-[#007bff] group-hover:to-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {block.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0a2540] mb-3 sm:mb-4 leading-tight">{block.title}</h3>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed flex-1 text-sm sm:text-base">{block.description}</p>
              
              <div className="flex gap-2 flex-wrap">
                {block.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm border border-gray-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}