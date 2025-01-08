import React from 'react';
import { Users, Shield, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'We believe in the power of collective growth and shared knowledge.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Our operations and decision-making processes are open and accessible to all.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We encourage creative solutions and forward-thinking approaches.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mensah',
      role: 'Founder & Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'John Doe',
      role: 'Technical Advisor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Emma Okonjo',
      role: 'Community Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold-500 sm:text-5xl md:text-6xl">
              About Onchain Students
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Building the future of blockchain education in Africa
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gold-500">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              To empower African students with the knowledge and resources needed to become leaders
              in the blockchain and Web3 space.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold-500">Our Values</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="bg-black p-6 rounded-lg border border-gold-500">
                  <div className="flex justify-center">
                    <value.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gold-500">{value.title}</h3>
                  <p className="mt-2 text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold-500">Our Team</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="bg-gray-900 rounded-lg overflow-hidden">
                  <img
                    className="h-48 w-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gold-500">{member.name}</h3>
                    <p className="mt-2 text-gray-300">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}