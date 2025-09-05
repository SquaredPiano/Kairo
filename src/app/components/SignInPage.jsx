import React, { useState, useEffect } from 'react';
import { generateAuthUrl, generateState } from '../../config/oauth';

function SignInPage({ onSignInSuccess, onBackToLanding }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQuercusSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Generate state for CSRF protection
      const state = generateState();
      
      // Store state in localStorage for verification
      localStorage.setItem('oauth_state', state);
      
      // Generate authorization URL
      const authUrl = generateAuthUrl(state);
      
      // Open Quercus authorization page in default browser
      // In Electron, we can use shell.openExternal
      if (window.electronAPI && window.electronAPI.openExternal) {
        await window.electronAPI.openExternal(authUrl);
      } else {
        // Fallback for web version
        window.open(authUrl, '_blank');
      }
      
      // Start polling for the callback (in a real app, you'd use a proper callback handler)
      startCallbackPolling();
      
    } catch (err) {
      setError('Failed to initiate sign-in process. Please try again.');
      console.error('Sign-in error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const startCallbackPolling = () => {
    // In a real implementation, you'd handle the OAuth callback properly
    // For now, we'll simulate a successful sign-in after a delay
    // In production, you'd set up a proper callback URL handler
    setTimeout(() => {
      // Simulate successful authentication
      const mockUser = {
        id: '12345',
        name: 'John Doe',
        email: 'john.doe@mail.utoronto.ca',
        avatar_url: null
      };
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('isAuthenticated', 'true');
      
      onSignInSuccess(mockUser);
    }, 3000); // Simulate 3-second delay
  };

  const handleDemoSignIn = () => {
    // Demo mode - skip OAuth for testing
    const mockUser = {
      id: 'demo_user',
      name: 'Demo User',
      email: 'demo@example.com',
      avatar_url: null
    };
    
    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('isAuthenticated', 'true');
    
    onSignInSuccess(mockUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={onBackToLanding}
            className="flex items-center text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <i data-lucide="arrow-left" className="w-5 h-5 mr-2 group-hover:text-emerald-600"></i>
            Back to Home
          </button>
        </div>

        {/* Sign In Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-slate-700 rounded-2xl transform rotate-12 shadow-lg mx-auto">
                <div className="absolute inset-2 bg-gradient-to-br from-emerald-400 to-slate-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">K</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full"></div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent mt-4">
              Welcome to Kairo
            </h1>
            <p className="text-slate-600 mt-2">Sign in to access your study materials</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center">
                <i data-lucide="alert-circle" className="w-5 h-5 text-red-500 mr-2"></i>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Sign In Options */}
          <div className="space-y-4">
            {/* Quercus Sign In */}
            <button
              onClick={handleQuercusSignIn}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-slate-700 text-white py-4 px-6 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Connecting to Quercus...
                </>
              ) : (
                <>
                  <i data-lucide="graduation-cap" className="w-5 h-5 mr-3"></i>
                  Sign in with Quercus
                </>
              )}
            </button>

            {/* Demo Sign In */}
            <button
              onClick={handleDemoSignIn}
              className="w-full border-2 border-slate-300 text-slate-700 py-4 px-6 rounded-2xl font-semibold hover:bg-slate-50 hover:border-emerald-400 transition-all duration-200 flex items-center justify-center"
            >
              <i data-lucide="play-circle" className="w-5 h-5 mr-3"></i>
              Try Demo Mode
            </button>
          </div>

          {/* Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-sm">📚</span>
            </div>
            <p className="text-xs text-slate-600">Access Course Materials</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-sm">⚡</span>
            </div>
            <p className="text-xs text-slate-600">AI-Powered Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
