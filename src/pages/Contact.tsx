import React from 'react';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold-500 sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Get in touch with our team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gold-500">
            <h2 className="text-2xl font-bold text-gold-500 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gold-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gold-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gold-500 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gold-500 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 text-black px-6 py-3 rounded-md hover:bg-gold-400 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gold-500">
              <div className="flex items-center">
                <Mail className="text-gold-500 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gold-500">Email</h3>
                  <p className="text-gray-300 mt-1">contact@onchainstudents.org</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gold-500">
              <div className="flex items-center">
                <MessageSquare className="text-gold-500 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gold-500">Live Chat</h3>
                  <p className="text-gray-300 mt-1">Available 24/7 for support</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gold-500">
              <div className="flex items-center">
                <MapPin className="text-gold-500 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gold-500">Location</h3>
                  <p className="text-gray-300 mt-1">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gold-500">
              <div className="flex items-center">
                <Phone className="text-gold-500 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gold-500">Phone</h3>
                  <p className="text-gray-300 mt-1">+234 123 456 7890</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gold-500">
              <h3 className="text-xl font-bold text-gold-500 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
                <p>Saturday: 10:00 AM - 2:00 PM WAT</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}