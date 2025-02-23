import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Projects from './pages/Projects';
import Governance from './pages/Governance';
import Community from './pages/Community';
import Blog from './pages/Blog';
import Documentation from './pages/Documentation';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import { activeChainId } from './config/web3Config';

function App() {
  return (
    <ThirdwebProvider activeChain={activeChainId}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/programs" element={<Programs />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/governance" element={<Governance />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/documentation" element={<Documentation />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThirdwebProvider>
  );
}

export default App;
