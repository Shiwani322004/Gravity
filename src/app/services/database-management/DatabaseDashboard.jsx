'use client'
import React, { useState } from 'react';
import { Settings, RefreshCw } from 'lucide-react';

const DatabaseDashboard = () => {
  const [databaseStats, setDatabaseStats] = useState({
    totalSize: '2.4 TB',
    activeQueries: 47,
    performance: '99.9%',
    backupStatus: 'Protected'
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Real-time Database
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Monitor your database performance, track queries, and optimize resources with our comprehensive real-time dashboard.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{databaseStats.totalSize}</div>
                <div className="text-blue-200">Total Data Size</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">{databaseStats.activeQueries}</div>
                <div className="text-blue-200">Active Queries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">{databaseStats.performance}</div>
                <div className="text-blue-200">Uptime Performance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{databaseStats.backupStatus}</div>
                <div className="text-blue-200">Backup Status</div>
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
                  <span className="text-gray-300 font-medium">Database Manager</span>
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
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm">All Databases</div>
                    <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">MySQL</div>
                    <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">PostgreSQL</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Production DB', status: 'active', size: '1.2 TB', queries: '24' },
                    { name: 'Analytics DB', status: 'active', size: '856 GB', queries: '18' },
                    { name: 'Backup DB', status: 'idle', size: '2.1 TB', queries: '2' },
                    { name: 'Development DB', status: 'active', size: '324 GB', queries: '7' }
                  ].map((db, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${db.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                        <div>
                          <div className="font-medium text-white">{db.name}</div>
                          <div className="text-sm text-gray-400">{db.queries} active queries</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-white">{db.size}</div>
                        <div className="text-sm text-gray-400">Size</div>
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

export default DatabaseDashboard;