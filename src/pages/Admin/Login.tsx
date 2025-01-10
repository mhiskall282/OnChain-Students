import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg border border-gold-500 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-gold-500">
            <Lock className="h-6 w-6 text-black" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gold-500 text-center mb-6">Admin Login</h1>
        {error && (
          <div className="bg-black border border-gold-500 text-gold-500 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-gold-500 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <label className="block text-gold-500 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-black border border-gold-500 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold-500 text-black py-2 rounded-md hover:bg-gold-400 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
