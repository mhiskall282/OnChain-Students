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
    <div className="py-16 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gold-500 [text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">Why Choose Us</h2>
          <p className="mt-4 text-gray-100">Empowering the next generation of blockchain innovators</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-1"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-lg border border-gold-500/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(234_179_8_/_20%)] transition-all duration-300 transform-gpu preserve-3d">
                <div className="flex flex-col items-center text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-lg transform translate-z-[-20px]"></div>
                  <div className="p-4 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-500/10 backdrop-blur-xl border border-gold-500/30 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-gold-500/20 transform translate-z-[20px]">
                    <feature.icon className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gold-500 mb-3 transform translate-z-[10px] [text-shadow:_0_2px_2px_rgb(0_0_0_/_50%)]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100 backdrop-blur-sm bg-white/5 p-3 rounded-lg transform translate-z-[5px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}