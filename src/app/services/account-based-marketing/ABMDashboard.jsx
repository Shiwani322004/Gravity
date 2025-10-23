'use client'
import React, { useState } from 'react';
import { Settings, RefreshCw, TrendingUp } from 'lucide-react';

const ABMDashboard = () => {
  const [abmStats, setAbmStats] = useState({
    targetAccounts: '247',
    activeEngagements: '89',
    pipelineGenerated: '$4.2M',
    engagementRate: '67%'
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Real-time ABM
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Performance Dashboard
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Monitor your account-based marketing performance, track engagement metrics, and optimize campaign strategies with our comprehensive real-time dashboard.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{abmStats.targetAccounts}</div>
                <div className="text-blue-200">Target Accounts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">{abmStats.activeEngagements}</div>
                <div className="text-blue-200">Active Engagements</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">{abmStats.pipelineGenerated}</div>
                <div className="text-blue-200">Pipeline Generated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{abmStats.engagementRate}</div>
                <div className="text-blue-200">Engagement Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-300 font-medium">ABM Campaign Manager</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm">All Campaigns</div>
                    <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">Enterprise</div>
                    <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">Mid-Market</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Enterprise Tech Campaign', status: 'active', accounts: '45', pipeline: '$2.1M', trend: 'up' },
                    { name: 'Financial Services ABM', status: 'active', accounts: '32', pipeline: '$1.4M', trend: 'up' },
                    { name: 'Healthcare Expansion', status: 'planning', accounts: '28', pipeline: '$0.7M', trend: 'neutral' },
                    { name: 'Manufacturing Vertical', status: 'active', accounts: '39', pipeline: '$1.8M', trend: 'up' }
                  ].map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${campaign.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                        <div>
                          <div className="font-medium text-white">{campaign.name}</div>
                          <div className="text-sm text-gray-400">{campaign.accounts} target accounts</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-white flex items-center gap-1 justify-end">
                          {campaign.pipeline}
                          {campaign.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                        </div>
                        <div className="text-sm text-gray-400">Pipeline</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABMDashboard;