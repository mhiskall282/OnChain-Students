import React from 'react';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';

const stats = [
  { name: 'Active Students', value: '2,000+', icon: Users },
  { name: 'Scholarships Awarded', value: '150+', icon: GraduationCap },
  { name: 'Countries Reached', value: '25+', icon: Globe },
  { name: 'Projects Launched', value: '75+', icon: Award },
];

export default function Stats() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-gray-900 rounded-lg p-6 border border-gold-500 hover:border-yellow-400 transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-md bg-gold-500">
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-semibold text-gold-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}