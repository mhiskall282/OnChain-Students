import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate(); 

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        {/* Text Section */}
        <div className="relative z-10 lg:w-1/2 flex items-center justify-center">
          <main className="px-6 lg:px-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gold-500 sm:text-5xl md:text-6xl">
                <span className="block">Empowering African</span>
                <span className="block text-yellow-400">Students in Blockchain</span>
                <span className="block text-gray-900">and Web3</span>
              </h1>
              <p className="mt-5 text-base text-gray-600 sm:mt-6 sm:text-lg sm:max-w-lg md:mt-8 md:text-xl lg:mx-0">
                Join a community of passionate students exploring the frontiers of blockchain technology
                and Web3 innovation across Africa.
              </p>
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://x.com/onchainstudents" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold-500 hover:bg-gold-400 md:py-4 md:text-lg md:px-10">
                      Join Now
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => navigate("/faq")} 
                    className="w-full flex items-center justify-center px-8 py-3 border border-gold-500 text-base font-medium rounded-md text-gold-500 hover:border-gold-400 hover:text-gold-400 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px"></div>

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
