import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Stats />
    </div>
  );
}