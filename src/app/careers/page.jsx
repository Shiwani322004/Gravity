'use client'
import React from 'react';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Sales Development Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    salary: "$60k - $80k",
    description: "Drive B2B lead generation and qualification for enterprise accounts."
  },
  {
    id: 2,
    title: "Account-Based Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    salary: "$70k - $90k",
    description: "Execute strategic ABM campaigns for high-value target accounts."
  },
  {
    id: 3,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    salary: "$65k - $85k",
    description: "Ensure client satisfaction and drive account expansion opportunities."
  }
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Quote
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Jobs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build the future of B2B marketing with us. We're looking for passionate individuals who want to make an impact.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-blue-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:flex-shrink-0">
                  <button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see the right role?</h2>
            <p className="text-gray-600 mb-6">We're always looking for talented individuals. Send us your resume!</p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;