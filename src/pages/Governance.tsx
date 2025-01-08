import React from 'react';
import { proposals } from '../data/dummy';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export default function Governance() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold-500 sm:text-5xl md:text-6xl">
              DAO Governance
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Participate in shaping the future of Onchain Students
            </p>
          </div>
        </div>
      </div>

      {/* Governance Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="bg-gray-900 p-6 rounded-lg border border-gold-500">
            <h3 className="text-xl font-bold text-gold-500">Active Proposals</h3>
            <p className="text-3xl font-bold text-blue-500 mt-2">
              {proposals.filter(p => p.status === 'active').length}
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gold-500">
            <h3 className="text-xl font-bold text-gold-500">Total Votes Cast</h3>
            <p className="text-3xl font-bold text-blue-500 mt-2">
              {proposals.reduce((acc, p) => acc + p.votes.for + p.votes.against, 0)}
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gold-500">
            <h3 className="text-xl font-bold text-gold-500">Proposals Passed</h3>
            <p className="text-3xl font-bold text-blue-500 mt-2">
              {proposals.filter(p => p.status === 'passed').length}
            </p>
          </div>
        </div>
      </div>

      {/* Proposals List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gold-500 mb-6">Recent Proposals</h2>
        <div className="space-y-6">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-gray-900 rounded-lg p-6 border border-gold-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gold-500">{proposal.title}</h3>
                <div className="flex items-center">
                  {proposal.status === 'active' && (
                    <span className="flex items-center text-blue-500">
                      <Clock className="mr-2" size={20} /> Active
                    </span>
                  )}
                  {proposal.status === 'passed' && (
                    <span className="flex items-center text-green-500">
                      <CheckCircle className="mr-2" size={20} /> Passed
                    </span>
                  )}
                  {proposal.status === 'rejected' && (
                    <span className="flex items-center text-red-500">
                      <XCircle className="mr-2" size={20} /> Rejected
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{proposal.description}</p>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>For: {proposal.votes.for}</span>
                  <span>Against: {proposal.votes.against}</span>
                </div>
                <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full"
                    style={{
                      width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%`
                    }}
                  />
                </div>
                {proposal.status === 'active' && (
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200">
                      Vote For
                    </button>
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
                      Vote Against
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Proposal */}
      <div className="bg-gray-900 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">
              Have a Proposal?
            </h2>
            <p className="text-gray-300 mb-6">
              Submit your proposal to improve Onchain Students
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-200">
              Create Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}