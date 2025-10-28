'use client'
import React from 'react';

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Terms of Use
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Last updated: January 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using B2B Gravity's website and services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700">
              B2B Gravity provides business-to-business services including lead generation, email marketing, content syndication, 
              and technology solution recommendations. We connect businesses with service providers and technology solutions 
              that meet their specific needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Respect the intellectual property rights of B2B Gravity and third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700">
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion, 
              and other matters related to the site are protected under applicable copyrights, trademarks, and other 
              proprietary rights. All rights reserved.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              Our services are provided "as is" without any representations or warranties, express or implied. 
              B2B Gravity makes no representations or warranties in relation to this website or the information 
              and materials provided on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall B2B Gravity be liable for any direct, indirect, punitive, incidental, special, 
              consequential damages or any damages whatsoever including, without limitation, damages for loss of use, 
              data, or profits, arising out of or in any way connected with the use or performance of the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700">
              Our platform may connect you with third-party service providers. B2B Gravity is not responsible for 
              the quality, performance, or actions of these third-party providers. Any agreements or transactions 
              are solely between you and the third party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your access to our services at any time, without prior notice, 
              for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700">
              B2B Gravity reserves the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on the website. Your continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@b2bgravity.com<br />
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