import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-gold-500 text-lg font-bold">Onchain Students</h3>
            <p className="text-gray-400 text-sm">
              Empowering African students through blockchain technology and Web3 innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold-500 hover:text-gold-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-400">
                <Github size={20} />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-400">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gold-500 text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold-500">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-gold-500">Programs</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-gold-500">Projects</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-gold-500">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/governance" className="text-gray-400 hover:text-gold-500">Governance</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-gold-500">Community</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-500">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-500">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest news and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Onchain Students. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}