import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Roadmap from '../components/Roadmap';
import Testimonials from '../components/Testimonials';
import SearchBar from '../components/SearchBar';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <div className="py-12">
        <SearchBar />
      </div>
      <Features />
      <Stats />
      <Roadmap />
      <Testimonials />
      <Partners />
      <Newsletter />
    </div>
  );
}