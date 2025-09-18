import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Email domain validation - accepts any @indiecampers.com email
const AUTHORIZED_DOMAIN = '@indiecampers.com';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user was previously authorized
    const savedAuth = localStorage.getItem('indiecampers_auth');
    const savedEmail = localStorage.getItem('indiecampers_email');
    
    if (savedAuth === 'true' && savedEmail && savedEmail.toLowerCase().endsWith(AUTHORIZED_DOMAIN)) {
      setIsAuthorized(true);
      setEmail(savedEmail);
    }
    setIsLoading(false);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email.toLowerCase().endsWith(AUTHORIZED_DOMAIN)) {
      localStorage.setItem('indiecampers_auth', 'true');
      localStorage.setItem('indiecampers_email', email);
      setIsAuthorized(true);
    } else {
      alert('Access denied. You must use your company email address.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('indiecampers_auth');
    localStorage.removeItem('indiecampers_email');
    setIsAuthorized(false);
    setEmail('');
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Reputation Reboot Playbook
            </h1>
            <p className="text-gray-600">Executive Strategy Presentation</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-sm text-blue-700">
              <strong>Access Restricted:</strong> This presentation requires a company email address.
            </p>
          </div>

          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Company Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@indiecampers.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Access Presentation
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Please use your company email address
          </p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div>
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
            >
              Logout ({email})
            </button>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
