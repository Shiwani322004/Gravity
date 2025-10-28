'use client'
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Last updated: January 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              At B2B Gravity, we collect information you provide directly to us, such as when you create an account, 
              fill out a form, or contact us for support. This may include your name, email address, phone number, 
              company information, and other contact details.
            </p>
            <p className="text-gray-700">
              We also automatically collect certain information about your device and usage of our services, 
              including IP address, browser type, operating system, and pages visited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Service providers who assist us in operating our website and conducting business</li>
              <li>Business partners when you request information about their services</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
              storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-700">
              We use cookies and similar technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@b2bgravity.com<br />
                <strong>Phone:</strong> +1 (800) 555-1234<br />
                <strong>Address:</strong> B2B Gravity, 123 Business Ave, Suite 100, City, State 12345
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}