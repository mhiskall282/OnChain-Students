import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  BookOpen,
  FileText,
  Settings,
  LogOut,
  BarChart,
  MessageSquare,
  Award
} from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const stats = [
    { label: 'Total Users', value: '2,000', icon: Users },
    { label: 'Active Programs', value: '15', icon: BookOpen },
    { label: 'Projects', value: '75', icon: FileText },
    { label: 'Scholarships', value: '150', icon: Award }
  ];

  const sections = [
    { name: 'Analytics', icon: BarChart },
    { name: 'Users', icon: Users },
    { name: 'Programs', icon: BookOpen },
    { name: 'Projects', icon: FileText },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <div className="fixed w-64 h-full bg-gray-900 border-r border-gold-500">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gold-500">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          {sections.map((section) => (
            <button
              key={section.name}
              className="w-full flex items-center px-6 py-3 text-gray-300 hover:bg-black hover:text-gold-500 transition-colors duration-200"
            >
              <section.icon className="h-5 w-5 mr-3" />
              {section.name}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-gray-300 hover:bg-black hover:text-gold-500 transition-colors duration-200"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900 p-6 rounded-lg border border-gold-500"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-gold-500">
                  <stat.icon className="h-6 w-6 text-black" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-300">{stat.label}</p>
                  <p className="text-2xl font-bold text-gold-500">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 rounded-lg border border-gold-500 p-6">
          <h2 className="text-xl font-bold text-gold-500 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              'New user registration: John Doe',
              'Scholarship application submitted',
              'New project added: DeFi Exchange',
              'Program update: Blockchain Bootcamp'
            ].map((activity, index) => (
              <div
                key={index}
                className="p-4 bg-black rounded-lg border border-gold-500"
              >
                <p className="text-gray-300">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
