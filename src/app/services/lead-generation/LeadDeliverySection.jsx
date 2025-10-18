import React from 'react';

const LeadDeliverySection = () => {
  return (
    <div className="bg-[#f7fafd] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Flexible <span className="text-[#00d8a6] underline underline-offset-8 decoration-[#00d8a6]">Lead Delivery</span> Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Real-Time API */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-4 border-[#00d8a6] pb-4">
              Real-Time API
            </h3>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Instant Lead Notifications</h4>
              <p className="text-gray-600 mb-6">
                Get leads delivered to your systems in real-time via our robust API. Perfect for time-sensitive campaigns and immediate follow-up.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold">Instant delivery</span>
                    <span className="text-gray-600"> - leads arrive within seconds</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold">Developer-friendly</span>
                    <span className="text-gray-600"> - comprehensive documentation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold">Two-way sync</span>
                    <span className="text-gray-600"> - update lead status in your CRM</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Batch Delivery */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-4 border-[#00d8a6] pb-4">
              Batch Delivery
            </h3>
            <div className="mb-6">
              <p className="text-gray-600 text-center mb-4">
                Receive your leads in scheduled batches that suit your workflow.
                Ideal for teams preferring consolidated data processing.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Scheduled delivery intervals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Download via secure CSV or Excel files</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ideal for internal review & reporting</span>
              </li>
            </ul>
          </div>

          {/* CRM Integration */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-4 border-[#00d8a6] pb-4">
              CRM Integration
            </h3>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-blue-600 mb-2">API</div>
                <p className="text-gray-700 text-sm">Seamlessly connect with your CRM</p>
              </div>

              <div className="flex justify-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                    WA
                  </div>
                  <span className="text-xs text-gray-600">WEB APP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                    EX
                  </div>
                  <span className="text-xs text-gray-600">EXCHANGE</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                    IN
                  </div>
                  <span className="text-xs text-gray-600">INTEGRATION</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Connect with Salesforce, HubSpot, Zoho, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Real-time syncing of lead statuses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom field mapping supported</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDeliverySection;