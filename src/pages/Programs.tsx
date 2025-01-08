import React from 'react';
import { programs } from '../data/dummy';
import { Award, BookOpen, Gift } from 'lucide-react';

export default function Programs() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold-500 sm:text-5xl md:text-6xl">
              Programs & Opportunities
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Discover opportunities to learn, grow, and innovate in the blockchain space
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gold-500 hover:border-blue-500 transition-colors duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gold-500">{program.title}</h3>
                  {program.type === 'scholarship' && <Award className="text-blue-500" />}
                  {program.type === 'grant' && <Gift className="text-red-500" />}
                  {program.type === 'course' && <BookOpen className="text-green-500" />}
                </div>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <div className="space-y-2">
                  {program.deadline && (
                    <p className="text-sm text-gray-400">
                      Deadline: {program.deadline}
                    </p>
                  )}
                  {program.value && (
                    <p className="text-sm text-gray-400">
                      Value: {program.value}
                    </p>
                  )}
                  {program.duration && (
                    <p className="text-sm text-gray-400">
                      Duration: {program.duration}
                    </p>
                  )}
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">
              Don't see what you're looking for?
            </h2>
            <p className="text-gray-300 mb-6">
              We're always adding new opportunities. Sign up for our newsletter to stay updated.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-200">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}