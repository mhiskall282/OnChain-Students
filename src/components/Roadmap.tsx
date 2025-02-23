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
    <div className="py-12 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-12 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">Our Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative group transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-1">
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-lg border border-gold-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(234_179_8_/_20%)] transition-all duration-300 transform-gpu preserve-3d">
                <div className="flex flex-col relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-lg transform translate-z-[-20px]"></div>
                  
                  <div className="flex items-center mb-4 transform translate-z-[20px]">
                    <div className="p-2 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-500/10 backdrop-blur-xl border border-gold-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-gold-500/20">
                      <Milestone className="text-gold-500" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gold-500 ml-3 [text-shadow:_0_2px_2px_rgb(0_0_0_/_50%)]">{milestone.quarter}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3 transform translate-z-[15px] [text-shadow:_0_2px_2px_rgb(0_0_0_/_50%)]">{milestone.title}</h4>
                  
                  <ul className="space-y-3 transform translate-z-[10px]">
                    {milestone.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-100 backdrop-blur-sm bg-white/5 p-2 rounded-lg group-hover:translate-z-[5px] transition-transform duration-300">
                        <ArrowRight className="text-gold-500 mr-2 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gold-500/50 to-transparent transform translate-z-[30px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
