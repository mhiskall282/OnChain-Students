import React from 'react';
import { Milestone, ArrowRight } from 'lucide-react';

export default function Roadmap() {
  const milestones = [
    {
      quarter: 'Q1 2024',
      title: 'Foundation Phase',
      items: ['Community Launch', 'Initial Programs', 'Governance Structure']
    },
    {
      quarter: 'Q2 2024',
      title: 'Growth Phase',
      items: ['Scholarship Program', 'Developer Bootcamps', 'Partnership Network']
    },
    {
      quarter: 'Q3 2024',
      title: 'Expansion Phase',
      items: ['Regional Hubs', 'Research Initiatives', 'Innovation Fund']
    },
    {
      quarter: 'Q4 2024',
      title: 'Scaling Phase',
      items: ['Global Partnerships', 'Advanced Programs', 'Ecosystem Development']
    }
  ];

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-12">Our Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="bg-black p-6 rounded-lg border border-gold-500">
                <div className="flex items-center mb-4">
                  <Milestone className="text-gold-500 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-gold-500">{milestone.quarter}</h3>
                </div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">{milestone.title}</h4>
                <ul className="space-y-2">
                  {milestone.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <ArrowRight className="text-gold-500 mr-2" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}