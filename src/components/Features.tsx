import React from 'react';
import { Lightbulb, Users, Trophy, Rocket } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Learn & Grow',
      description: 'Access comprehensive blockchain education and resources'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded students and mentors'
    },
    {
      icon: Trophy,
      title: 'Recognition',
      description: 'Earn certificates and build your portfolio'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Get support to launch your blockchain projects'
    }
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gold-500">Why Choose Us</h2>
          <p className="mt-4 text-gray-300">Empowering the next generation of blockchain innovators</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black p-6 rounded-lg border border-gold-500 hover:border-yellow-400 transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-gray-900 border border-gold-500 mb-4">
                  <feature.icon className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gold-500 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}