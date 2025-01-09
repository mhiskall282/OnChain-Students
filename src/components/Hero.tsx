import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        {/* Text Section */}
        <div className="relative z-10 bg-black lg:w-1/2 flex items-center justify-center">
          <main className="px-6 lg:px-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gold-500 sm:text-5xl md:text-6xl">
                <span className="block">Empowering African</span>
                <span className="block text-yellow-400">Students in Blockchain</span>
                <span className="block text-white">and Web3</span>
              </h1>
              <p className="mt-5 text-base text-gray-300 sm:mt-6 sm:text-lg sm:max-w-lg md:mt-8 md:text-xl lg:mx-0">
                Join a community of passionate students exploring the frontiers of blockchain technology
                and Web3 innovation across Africa.
              </p>
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gold-500 hover:bg-gold-400 md:py-4 md:text-lg md:px-10">
                    Join the DAO
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gold-500 bg-black border-gold-500 hover:bg-gray-900 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-gray-700"></div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="Students collaborating"
          />
        </div>
      </div>
    </div>
  );
}
