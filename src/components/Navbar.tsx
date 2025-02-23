import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { address, user } = useAuth();

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
            <Link to="/" className="text-gold-500 text-xl font-bold">
              OnChain Students
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/about" className="text-gray-300 hover:text-gold-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/programs" className="text-gray-300 hover:text-gold-500 px-3 py-2 rounded-md text-sm font-medium">
              Programs
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-gold-500 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Link to="/governance" className="text-gray-300 hover:text-gold-500 px-3 py-2 rounded-md text-sm font-medium">
              Governance
            </Link>
            <Link to="/community" className="text-gray-300 hover:text-gold-500 px-3 py-2 rounded-md text-sm font-medium">
              Community
            </Link>
            
            <div className="ml-4">
              <ConnectWallet 
                theme="dark"
                btnTitle="Connect"
                modalSize="wide"
                auth={{
                  loginOptional: false,
                  onLogin(token) {
                    console.log("User logged in", token);
                  },
                  onLogout() {
                    console.log("User logged out");
                  },
                }}
                welcomeScreen={{
                  title: "Welcome to OnChain Students",
                  subtitle: "Connect with your preferred method",
                  img: {
                    src: "/logo.png",
                    width: 150,
                    height: 150
                  }
                }}
                modalTitleIconUrl="/logo.png"
                detailsBtn={() => {
                  return (
                    <button className="px-4 py-2 rounded-lg backdrop-blur-xl bg-gradient-to-r from-gold-500 to-yellow-500 text-white font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300">
                      {user?.email || address ? 
                        user?.email || `${address.slice(0, 6)}...${address.slice(-4)}` 
                        : 'Connect'
                      }
                    </button>
                  );
                }}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-[#1a2942]/95 border-t border-gold-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className="text-gray-300 hover:text-gold-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/programs" className="text-gray-300 hover:text-gold-500 block px-3 py-2 rounded-md text-base font-medium">
              Programs
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-gold-500 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link>
            <Link to="/governance" className="text-gray-300 hover:text-gold-500 block px-3 py-2 rounded-md text-base font-medium">
              Governance
            </Link>
            <Link to="/community" className="text-gray-300 hover:text-gold-500 block px-3 py-2 rounded-md text-base font-medium">
              Community
            </Link>
            <div className="px-3 py-2">
              <ConnectWallet 
                theme="dark"
                btnTitle="Connect"
                modalSize="wide"
                auth={{
                  loginOptional: false,
                  onLogin(token) {
                    console.log("User logged in", token);
                  },
                  onLogout() {
                    console.log("User logged out");
                  },
                }}
                welcomeScreen={{
                  title: "Welcome to OnChain Students",
                  subtitle: "Connect with your preferred method",
                  img: {
                    src: "/logo.png",
                    width: 150,
                    height: 150
                  }
                }}
                modalTitleIconUrl="/logo.png"
                detailsBtn={() => {
                  return (
                    <button className="w-full px-4 py-2 rounded-lg backdrop-blur-xl bg-gradient-to-r from-gold-500 to-yellow-500 text-white font-medium hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300">
                      {user?.email || address ? 
                        user?.email || `${address.slice(0, 6)}...${address.slice(-4)}` 
                        : 'Connect'
                      }
                    </button>
                  );
                }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
