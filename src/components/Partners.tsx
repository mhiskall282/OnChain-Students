import React from 'react';
import { motion } from 'framer-motion';

export default function Partners() {
  const partners = [
    { name: 'Ethereum Foundation', logo: 'https://images.unsplash.com/photo-1622790698141-94e30457ef12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Lisk', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'AyA Hq', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Mowblox', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-12 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
          Our Partners
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={item}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group relative perspective-1000"
            >
              <div className="relative transform-gpu transition-all duration-300 group-hover:rotate-y-12">
                <div className="backdrop-blur-xl bg-gradient-to-br from-[#1a2942]/80 to-[#0d1829]/90 p-6 rounded-lg border border-gold-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(234_179_8_/_20%)]">
                  <div className="flex items-center justify-center h-24">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                    />
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <p className="text-center text-gold-500 mt-4">{partner.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
