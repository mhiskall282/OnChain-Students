import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Student Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quote: 'Onchain Students has transformed my understanding of blockchain technology and opened up incredible opportunities.'
    },
    {
      name: 'John D.',
      role: 'Program Graduate',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quote: 'The mentorship and community support here are unmatched. I\'ve grown both technically and professionally.'
    },
    {
      name: 'Emma O.',
      role: 'Scholarship Recipient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      quote: 'Thanks to the scholarship program, I was able to pursue my passion for blockchain development.'
    },
  ];

  return (
    <div className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-12">Student Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gold-500">
              <Quote className="text-gold-500 mb-4" size={32} />
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-gold-500 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}