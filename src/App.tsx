import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThirdwebProvider, smartWallet, embeddedWallet, metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Documentation from './pages/Documentation';
import Blog from './pages/Blog';
import Community from './pages/Community';
import Programs from './pages/Programs';
import Projects from './pages/Projects';
import Governance from './pages/Governance';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import Footer from './components/Footer';
import { activeChainId } from './config/web3Config';
import { AuthProvider } from './context/AuthContext';

const clientId = "your-client-id"; // Replace with your Thirdweb client ID

function App() {
  const smartWalletConfig = {
    factoryAddress: "your-factory-address",
    gasless: true,
  };

  return (
    <ThirdwebProvider 
      activeChain={activeChainId}
      clientId={clientId}
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletConfig),
        smartWallet(coinbaseWallet(), smartWalletConfig),
        smartWallet(walletConnect(), smartWalletConfig),
        embeddedWallet({
          auth: {
            options: [
              "email",
              "google",
              "apple",
              "facebook",
              "discord"
            ],
          },
        }),
      ]}
    >
      <AuthProvider>
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
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/governance" element={<Governance />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThirdwebProvider>
  );
}

export default App;
