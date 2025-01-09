import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 pl-10 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
          placeholder="Search resources, documentation, and more..."
        />
        <Search className="absolute left-3 top-2.5 text-gold-500" size={20} />
      </div>
    </div>
  );
}