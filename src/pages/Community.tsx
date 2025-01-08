import React from 'react';
import { events } from '../data/dummy';
import { Calendar, Users, MessageSquare } from 'lucide-react';

export default function Community() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold-500 sm:text-5xl md:text-6xl">
              Community Hub
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Connect, learn, and grow with fellow blockchain enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="bg-gray-900 p-6 rounded-lg border border-gold-500">
            <div className="flex items-center">
              <Users className="text-blue-500 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gold-500">Members</h3>
                <p className="text-3xl font-bold text-blue-500 mt-2">5,000+</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gold-500">
            <div className="flex items-center">
              <Calendar className="text-blue-500 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gold-500">Monthly Events</h3>
                <p className="text-3xl font-bold text-blue-500 mt-2">20+</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gold-500">
            <div className="flex items-center">
              <MessageSquare className="text-blue-500 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gold-500">Active Discussions</h3>
                <p className="text-3xl font-bold text-blue-500 mt-2">150+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gold-500 mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 rounded-lg p-6 border border-gold-500 hover:border-blue-500 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-blue-500">{event.date}</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gold-500 mb-2">{event.title}</h3>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <a
                href={event.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Discussion Forums */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gold-500 mb-6">Discussion Forums</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Technical Discussions',
              description: 'Discuss blockchain development, smart contracts, and Web3 technologies',
              topics: 250,
              posts: 1200
            },
            {
              title: 'Project Collaboration',
              description: 'Find team members and collaborate on blockchain projects',
              topics: 180,
              posts: 850
            },
            {
              title: 'Learning Resources',
              description: 'Share and discover educational content and learning materials',
              topics: 320,
              posts: 1500
            },
            {
              title: 'Events & Meetups',
              description: 'Organize and join community events and meetups',
              topics: 150,
              posts: 600
            }
          ].map((forum) => (
            <div
              key={forum.title}
              className="bg-gray-900 rounded-lg p-6 border border-gold-500"
            >
              <h3 className="text-xl font-bold text-gold-500 mb-2">{forum.title}</h3>
              <p className="text-gray-300 mb-4">{forum.description}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{forum.topics} topics</span>
                <span>{forum.posts} posts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Community */}
      <div className="bg-gray-900 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-300 mb-6">
              Connect with like-minded individuals and start your blockchain journey today
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-200">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}