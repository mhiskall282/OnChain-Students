import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Blockchain Developer',
      image: '/students/alex.jpg',
      quote: 'The mentorship and resources provided helped me transition from traditional development to blockchain technology.',
      achievement: 'Now working at a leading Web3 company'
    },
    {
      name: 'Sarah Chen',
      role: 'DeFi Researcher',
      image: '/students/sarah.jpg',
      quote: 'The hands-on experience with DeFi protocols gave me the confidence to pursue my research interests.',
      achievement: 'Published groundbreaking DeFi research'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Smart Contract Engineer',
      image: '/students/marcus.jpg',
      quote: 'The practical projects and code reviews helped me master Solidity and secure smart contract development.',
      achievement: 'Launched successful DApp platform'
    },
    {
      name: 'Priya Patel',
      role: 'Blockchain Architect',
      image: '/students/priya.jpg',
      quote: 'The comprehensive curriculum and supportive community were instrumental in my growth.',
      achievement: 'Leading blockchain initiatives'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="py-16 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-12 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
          Student Success Stories
        </h2>
        
        <div className="relative">
          {/* Main carousel container */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-[#1a2942]/80 to-[#0d1829]/90 p-8 border border-gold-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] transform-gpu preserve-3d"
              >
                <div className="relative h-full flex flex-col md:flex-row items-center gap-8">
                  {/* Quote icon background */}
                  <div className="absolute top-4 left-4 opacity-10">
                    <Quote size={80} className="text-gold-500" />
                  </div>
                  
                  {/* Profile section */}
                  <div className="relative w-full md:w-1/3 flex flex-col items-center transform translate-z-[20px]">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gold-500/50 shadow-lg mb-4">
                      <div className="w-full h-full bg-gradient-to-br from-gold-500/20 to-gold-500/10 flex items-center justify-center">
                        <span className="text-4xl text-gold-500">{testimonials[currentIndex].name[0]}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gold-500 text-center [text-shadow:_0_2px_2px_rgb(0_0_0_/_50%)]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-yellow-400 font-medium text-center mb-2">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  
                  {/* Quote section */}
                  <div className="flex-1 flex flex-col justify-center transform translate-z-[10px]">
                    <p className="text-gray-100 text-lg italic mb-6 backdrop-blur-sm bg-white/5 p-6 rounded-lg">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="backdrop-blur-sm bg-gold-500/10 p-4 rounded-lg">
                      <p className="text-yellow-400 font-semibold">Achievement:</p>
                      <p className="text-gray-100">{testimonials[currentIndex].achievement}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={handlePrevious}
              className="transform hover:scale-110 transition-transform pointer-events-auto backdrop-blur-xl bg-white/10 p-2 rounded-full border border-gold-500/50 shadow-lg hover:shadow-gold-500/20"
            >
              <ChevronLeft className="text-gold-500" size={24} />
            </button>
            <button
              onClick={handleNext}
              className="transform hover:scale-110 transition-transform pointer-events-auto backdrop-blur-xl bg-white/10 p-2 rounded-full border border-gold-500/50 shadow-lg hover:shadow-gold-500/20"
            >
              <ChevronRight className="text-gold-500" size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gold-500'
                    : 'bg-gold-500/30 hover:bg-gold-500/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
