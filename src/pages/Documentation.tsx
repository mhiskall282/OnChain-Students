import React from 'react';
import { Book, Code, Terminal, FileText } from 'lucide-react';

export default function Documentation() {
  const sections = [
    {
      title: 'Getting Started',
      icon: Book,
      content: [
        { title: 'Introduction to Blockchain', link: '#' },
        { title: 'Setting Up Your Wallet', link: '#' },
        { title: 'Understanding Web3', link: '#' },
        { title: 'First Steps in DeFi', link: '#' }
      ]
    },
    {
      title: 'Technical Guides',
      icon: Code,
      content: [
        { title: 'Smart Contract Development', link: '#' },
        { title: 'DApp Architecture', link: '#' },
        { title: 'Security Best Practices', link: '#' },
        { title: 'Testing & Deployment', link: '#' }
      ]
    },
    {
      title: 'API Reference',
      icon: Terminal,
      content: [
        { title: 'REST API Documentation', link: '#' },
        { title: 'GraphQL Endpoints', link: '#' },
        { title: 'WebSocket Integration', link: '#' },
        { title: 'SDK Documentation', link: '#' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      content: [
        { title: 'White Papers', link: '#' },
        { title: 'Research Papers', link: '#' },
        { title: 'Case Studies', link: '#' },
        { title: 'Community Guidelines', link: '#' }
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold-500 sm:text-5xl md:text-6xl">
              Documentation
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Comprehensive guides and resources for blockchain development
            </p>
          </div>
        </div>
      </div>

      {/* Documentation Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="bg-gray-900 rounded-lg p-6 border border-gold-500">
              <div className="flex items-center mb-4">
                <section.icon className="text-gold-500 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gold-500">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Search Documentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900 rounded-lg p-8 border border-gold-500">
          <h2 className="text-2xl font-bold text-gold-500 mb-4">Search Documentation</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search documentation..."
              className="flex-1 px-4 py-2 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button className="bg-gold-500 text-black px-6 py-2 rounded-md hover:bg-gold-400 transition duration-200">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}