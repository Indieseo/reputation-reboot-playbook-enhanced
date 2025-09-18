import React, { useEffect, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

interface NetlifyAuthProps {
  children: React.ReactNode;
}

const NetlifyAuth: React.FC<NetlifyAuthProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Netlify Identity
    netlifyIdentity.init();
    
    // Get current user
    const currentUser = netlifyIdentity.currentUser();
    setUser(currentUser);
    setIsLoading(false);

    // Set up event listeners
    netlifyIdentity.on('init', (user: any) => {
      setUser(user);
      setIsLoading(false);
    });

    netlifyIdentity.on('login', (user: any) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
    });

    return () => {
      netlifyIdentity.off('init');
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const handleLogin = () => {
    netlifyIdentity.open();
  };

  const handleLogout = () => {
    netlifyIdentity.logout();
  };

  // Check if email is from indiecampers.com domain
  const isAuthorized = user?.email?.endsWith('@indiecampers.com');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-executive to-secondary-corporate flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-executive mx-auto"></div>
          <p className="text-center mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-executive to-secondary-corporate flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-executive mb-2">
              Reputation Reboot Playbook
            </h1>
            <p className="text-gray-600">
              Executive Strategy Presentation
            </p>
          </div>
          
          <div className="mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-sm text-blue-700">
                <strong>Access Restricted:</strong> This presentation requires an IndeCampers company email address (@indiecampers.com).
              </p>
            </div>
          </div>

          <button 
            onClick={handleLogin}
            className="w-full bg-primary-executive hover:bg-primary-executive/90 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Sign In with Company Email
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Only @indiecampers.com email addresses are authorized
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="mx-auto h-16 w-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl">!</span>
            </div>
            <h1 className="text-2xl font-bold text-red-700 mb-2">
              Access Denied
            </h1>
            <p className="text-gray-600">
              Unauthorized Email Domain
            </p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <p className="text-sm text-red-700 mb-2">
              <strong>Current Email:</strong> {user.email}
            </p>
            <p className="text-sm text-red-700">
              This presentation requires an <strong>@indiecampers.com</strong> email address.
            </p>
          </div>

          <div className="space-y-3">
            <button 
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Sign Out & Try Different Email
            </button>
            
            <p className="text-xs text-gray-500 text-center">
              Contact your administrator if you believe this is an error
            </p>
          </div>
        </div>
      </div>
    );
  }

  // User is authenticated and authorized
  return (
    <div>
      {/* Optional: Auth status bar */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-600">{user.email}</span>
            <button 
              onClick={handleLogout}
              className="text-xs text-gray-500 hover:text-red-600 ml-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default NetlifyAuth;