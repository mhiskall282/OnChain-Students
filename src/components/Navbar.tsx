import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  submenu?: NavigationItem[]; // Optional submenu
}

const Logo: React.FC = () => (
  <Link to="/" className="text-gold-500 font-bold text-xl">
    Onchain Students
  </Link>
);

const DesktopMenu: React.FC<{ navigation: NavigationItem[] }> = ({ navigation }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center space-x-4">
      {navigation.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {/* Main Link (e.g., "About") */}
          <Link
            to={item.href}
            className="text-gold-500 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium"
          >
            {item.name}
          </Link>

          {/* Dropdown for items with submenu */}
          {item.submenu && openDropdown === item.name && (
            <div className="absolute left-0 mt-2 w-48 backdrop-blur-lg border border-gold-500 rounded-md z-50">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.name}
                  to={subitem.href}
                  className="block text-gold-500 hover:text-gold-400 px-4 py-2 text-sm"
                >
                  {subitem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <button className="bg-gold-500 text-black px-4 py-2 rounded-md hover:bg-gold-400">
        Connect Wallet
      </button>
    </div>
  );
};

const MobileMenu: React.FC<{
  navigation: NavigationItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}> = ({ navigation, isOpen, toggleMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuClick = (itemName: string) => {
    if (openSubmenu === itemName) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(itemName);
    }
  };

  return (
    <div
      className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg">
        {navigation.map((item) => (
          <div key={item.name}>
            {/* Main menu item */}
            <div className="flex items-center justify-between">
              <Link
                to={item.href}
                className="text-gold-500 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => !item.submenu && toggleMenu()}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <button
                  onClick={() => handleSubmenuClick(item.name)}
                  className="text-gold-500 hover:text-gold-400 px-3 py-2"
                >
                  {openSubmenu === item.name ? '-' : '+'}
                </button>
              )}
            </div>

            {/* Submenu */}
            {item.submenu && openSubmenu === item.name && (
              <div className="pl-4 border-l border-gold-500/30">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    to={subitem.href}
                    className="text-gold-500 hover:text-gold-400 block px-3 py-2 text-sm"
                    onClick={toggleMenu}
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      submenu: [
        { name: 'Our Team', href: '/about/team' },
        { name: 'Mission', href: '/about/mission' },
      ],
    },
    {
      name: 'Community',
      href: '/community',
      submenu: [
        /*{ name: 'Governance', href: '/governance' },*/
        { name: 'Community', href: '/community' },
      ],
    },
    {
      name: 'Resources',
      href: '/documentation',
      submenu: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/documentation' },
      ],
    },
    {
      name: 'Support',
      href: '/contact',
      submenu: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[100] ${
        scrolled 
          ? 'backdrop-blur-lg border-gold-500/50' 
          : 'border-gold-500'
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <DesktopMenu navigation={navigation} />

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gold-500 hover:text-gold-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu navigation={navigation} isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
