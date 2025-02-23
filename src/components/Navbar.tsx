import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[100] ${
      scrolled ? 'backdrop-blur-xl bg-[#1a2942]/80 border-gold-500/50' : 'bg-transparent'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-gold-500 text-xl font-bold transform transition-all duration-300 hover:scale-105 hover:translate-z-10">
              OnChain Students
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 perspective-1000">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:translate-z-10 hover:shadow-lg hover:shadow-gold-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:translate-z-10 hover:shadow-lg hover:shadow-gold-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                About
              </Link>
              <Link 
                to="/programs" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:translate-z-10 hover:shadow-lg hover:shadow-gold-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                Programs
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:translate-z-10 hover:shadow-lg hover:shadow-gold-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                Projects
              </Link>
              <Link 
                to="/community" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:translate-z-10 hover:shadow-lg hover:shadow-gold-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                Community
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transform transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 hover:scale-105 hover:translate-x-1 hover:translate-z-5 hover:shadow-md hover:shadow-gold-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 hover:scale-105 hover:translate-x-1 hover:translate-z-5 hover:shadow-md hover:shadow-gold-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 hover:scale-105 hover:translate-x-1 hover:translate-z-5 hover:shadow-md hover:shadow-gold-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Programs
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 hover:scale-105 hover:translate-x-1 hover:translate-z-5 hover:shadow-md hover:shadow-gold-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Projects
            </Link>
            <Link 
              to="/community" 
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transform transition-all duration-300 hover:scale-105 hover:translate-x-1 hover:translate-z-5 hover:shadow-md hover:shadow-gold-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
