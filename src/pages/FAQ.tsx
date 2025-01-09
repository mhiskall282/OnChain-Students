import React from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Onchain Students?',
      answer: 'Onchain Students is a DAO focused on empowering African students in blockchain and Web3 technology through education, resources, and community support.'
    },
    {
      question: 'How can I join the DAO?',
      answer: 'To join the DAO, you need to connect your Web3 wallet and hold our governance token. You can acquire tokens through participation in our programs or through direct purchase.'
    },
    {
      question: 'What programs do you offer?',
      answer: 'We offer various programs including scholarships, grants for blockchain projects, mentorship opportunities, and technical training in Web3 development.'
    },
    {
      question: 'How can I participate in governance?',
      answer: 'Token holders can participate in governance by creating and voting on proposals through our governance platform. Each token represents voting power in the DAO.'
    },
    {
      question: 'What resources are available for learning?',
      answer: 'We provide comprehensive documentation, tutorials, workshops, and access to a community of experienced developers and mentors.'
    },
    {
      question: 'How can I contribute to the community?',
      answer: 'You can contribute by participating in discussions, sharing knowledge, mentoring others, or contributing to our open-source projects.'
    },
    {
      question: 'Are there any requirements to join?',
      answer: 'While anyone can join our community, some programs may have specific eligibility requirements, such as being a student in Africa or having certain technical skills.'
    },
    {
      question: 'How can I stay updated with news and events?',
      answer: 'You can subscribe to our newsletter, follow our blog, and join our community channels to stay updated with the latest news and events.'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold-500 sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
              Find answers to common questions about Onchain Students
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gold-500 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <HelpCircle className="text-gold-500 mr-3" size={20} />
                  <span className="text-gold-500 font-semibold">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <Minus className="text-gold-500" size={20} />
                ) : (
                  <Plus className="text-gold-500" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gray-900 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you with any questions you may have
            </p>
            <button className="bg-gold-500 text-black px-8 py-3 rounded-md hover:bg-gold-400 transition duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}