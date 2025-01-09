import React from 'react';
import { Mail, Bell } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="bg-black rounded-2xl border border-gold-500 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gold-500 mb-4">
                  Stay Updated with Web3 Insights
                </h2>
                <p className="text-gray-300">
                  Get weekly updates on blockchain technology, learning resources, and community events.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-3 text-gold-500" size={20} />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-900 border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <button className="bg-gold-500 text-black px-6 py-2 rounded-md hover:bg-gold-400 transition duration-200 whitespace-nowrap">
                    Subscribe Now
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Join 5,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </div>
              <div className="hidden lg:block">
                <Bell className="w-full h-32 text-gold-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}