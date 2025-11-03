'use client'
import React from 'react';
import Link from 'next/link';

export default function SitemapPage() {
  const siteLinks = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
      ]
    },
    {
      category: "Services",
      links: [
        { name: "Lead Generation", url: "/services/lead-generation" },
        { name: "Email Marketing", url: "/services/email-marketing" },
        { name: "Content Syndication", url: "/services/content-syndication" },
        { name: "Account Based Marketing", url: "/services/account-based-marketing" },
      ]
    },
    {
      category: "Categories",
      links: [
        { name: "Phone System", url: "/categories/phone-system" },
        { name: "CRM System", url: "/categories/crm-system" },
        { name: "Business Intelligence", url: "/categories/business-intelligence" },
        { name: "GPS fleet management software", url: "/categories/GPS-fleet-management-software" },
        { name: "Payroll-software", url: "/categories/payroll-software" },
      ]
    },
    {
      category: "Legal Pages",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Use", url: "/terms-of-use" },
        { name: "Cookies Policy", url: "/cookies-policy" },
        { name: "Sitemap", url: "/sitemap" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Sitemap
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Navigate through all pages and sections of B2B Gravity
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {siteLinks.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-[#007bff] rounded-full"></div>
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.url}
                      className="group flex items-center gap-3 text-gray-700 hover:text-[#007bff] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#007bff] transition-colors duration-200"></div>
                      <span className="font-medium">{link.name}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding Something?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution for your business needs.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#007bff] to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">
            Last updated: January 2025 | 
            <Link href="/" className="text-[#007bff] hover:underline ml-1">
              Return to Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}