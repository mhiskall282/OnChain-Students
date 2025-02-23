import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Roadmap from '../components/Roadmap';
import Testimonials from '../components/Testimonials';
import SearchBar from '../components/SearchBar';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';
import NetworkBackground from '../components/NetworkBackground';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen overflow-hidden pt-16">
      <NetworkBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 py-16 space-y-24 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="max-w-4xl mx-auto"
          {...fadeInUp}
        >
          <SearchBar />
        </motion.div>

        <motion.section 
          className="relative z-10"
          {...fadeInUp}
        >
          <Features />
        </motion.section>

        <motion.div 
          {...fadeInUp}
        >
          <Stats />
        </motion.div>

        <motion.div 
          className="relative"
          {...fadeInUp}
        >
          <Roadmap />
        </motion.div>

        <motion.div 
          {...fadeInUp}
        >
          <Testimonials />
        </motion.div>

        <motion.div 
          className="py-12"
          {...fadeInUp}
        >
          <Partners />
        </motion.div>

        <motion.div 
          {...fadeInUp}
        >
          <Newsletter />
        </motion.div>
      </motion.div>
    </div>
  );
}