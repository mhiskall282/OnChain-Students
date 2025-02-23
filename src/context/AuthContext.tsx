import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAddress, useDisconnect, useMetamask, useThirdwebAuthContext, useLogin, useLogout } from '@thirdweb-dev/react';

interface AuthContextType {
  address: string | undefined;
  isLoading: boolean;
  login: (loginMethod: string) => Promise<void>;
  logout: () => Promise<void>;
  user: any;
}

const AuthContext = createContext<AuthContextType>({
  address: undefined,
  isLoading: false,
  login: async () => {},
  logout: async () => {},
  user: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();
  const auth = useThirdwebAuthContext();
  const login = useLogin();
  const logout = useLogout();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleLogin = async (loginMethod: string) => {
    try {
      setIsLoading(true);
      
      if (loginMethod === 'metamask') {
        await connect();
      }
      
      if (address) {
        const data = await login();
        setUser(data);
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      await disconnect();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!address) {
      setUser(null);
    }
  }, [address]);

  return (
    <AuthContext.Provider
      value={{
        address,
        isLoading,
        login: handleLogin,
        logout: handleLogout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
