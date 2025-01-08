export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  link: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'meeting' | 'hackathon' | 'bootcamp';
  link: string;
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'passed' | 'rejected';
  votes: {
    for: number;
    against: number;
  };
}