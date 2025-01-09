import React from 'react';

export default function Partners() {
  const partners = [
    { name: 'Ethereum Foundation', logo: 'https://images.unsplash.com/photo-1622790698141-94e30457ef12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'African Development Bank', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Tech Hub Africa', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Blockchain Academy', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gray-900 p-6 rounded-lg border border-gold-500 hover:border-yellow-400 transition-all duration-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
              />
              <p className="text-center text-gold-500 mt-4">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}