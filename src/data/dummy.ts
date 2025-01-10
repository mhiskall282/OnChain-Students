// Dummy data for the website
export const blogs = [
  {
    id: '1',
    title: 'The Rise of Web3 in Africa',
    excerpt: 'How blockchain technology is transforming the African digital landscape',
    author: 'Sarah Mensah',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: 'Africa is experiencing a digital revolution...',
    tags: ['Web3', 'Africa', 'Blockchain']
  },
  {
    id: '2',
    title: 'Student Success Story: Building DeFi Solutions',
    excerpt: 'Meet the students revolutionizing financial access through blockchain',
    author: 'John Doe',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: 'In the heart of Lagos, a team of students...',
    tags: ['DeFi', 'Success Story', 'Innovation']
  },
  {
    id: '3',
    title: 'Blockchain Education: The Future of Learning',
    excerpt: 'How distributed ledger technology is changing education',
    author: 'Emma Okonjo',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: 'The traditional education system is evolving...',
    tags: ['Education', 'Blockchain', 'Technology']
  }
];

export const projects = [
  {
    id: '1',
    title: 'DeFi Savings Platform',
    description: 'A decentralized savings platform for students',
    author: 'Team Innovators',
    link: '/projects/defi-savings',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    title: 'Blockchain Voting System',
    description: 'Secure voting system for student organizations',
    author: 'Tech Warriors',
    link: '/projects/voting-system',
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    title: 'NFT Marketplace for Artists',
    description: 'Platform for student artists to showcase and sell their work',
    author: 'Creative Minds',
    link: '/projects/nft-marketplace',
    image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

export const programs = [
  {
    id: '1',
    title: 'Blockchain Developer Scholarship',
    description: 'Full scholarship for aspiring blockchain developers',
    deadline: '2024-04-30',
    value: '$5,000',
    type: 'scholarship'
  },
  {
    id: '2',
    title: 'Web3 Innovation Grant',
    description: 'Funding for student-led Web3 projects',
    deadline: '2024-05-15',
    value: '$10,000',
    type: 'grant'
  },
  {
    id: '3',
    title: 'Smart Contract Development Course',
    description: 'Comprehensive course on Solidity and smart contracts',
    duration: '12 weeks',
    type: 'course'
  }
];

export const events = [
  {
    id: '1',
    title: 'African Blockchain Summit',
    date: '2024-04-20',
    description: 'Annual gathering of blockchain enthusiasts',
    type: 'conference',
    link: '/events/blockchain-summit'
  },
  {
    id: '2',
    title: 'Web3 Hackathon',
    date: '2024-05-01',
    description: '48-hour hackathon for innovative solutions',
    type: 'hackathon',
    link: '/events/web3-hackathon'
  },
  {
    id: '3',
    title: 'DeFi Workshop Series',
    date: '2024-04-10',
    description: 'Weekly workshops on DeFi development',
    type: 'workshop',
    link: '/events/defi-workshop'
  }
];

export const proposals = [
  {
    id: '1',
    title: 'Increase Scholarship Fund',
    description: 'Proposal to increase the annual scholarship fund by 50%',
    status: 'active',
    votes: {
      for: 250,
      against: 50
    }
  },
  {
    id: '2',
    title: 'New Mentorship Program',
    description: 'Establish a mentorship program connecting students with industry experts',
    status: 'passed',
    votes: {
      for: 400,
      against: 30
    }
  },
  {
    id: '3',
    title: 'Community Events Budget',
    description: 'Allocate budget for monthly community events',
    status: 'active',
    votes: {
      for: 180,
      against: 120
    }
  }
];
